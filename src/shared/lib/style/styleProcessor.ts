import { useMemo } from "react";

// Базовые типы для структуры классов
interface ClassOptions {
  [key: string]: string;
}

interface SectionData {
  base: string | string[];
  options: ClassOptions;
}

// Обобщённый тип для конфигурации любого компонента
type ComponentClassesConfig<T extends string> = {
  [K in T]: SectionData;
};

interface ProcessedSectionData {
  base: string[];
  options: ClassOptions;
}

// Создаем тип для обработанных классов с добавлением префикса 'c'
type ProcessedClasses<T extends string> = {
  [K in T as `c${Capitalize<K>}`]: ProcessedSectionData;
} & {
  cBase: string[];
};

export const useStyleProcessor = <T extends string>(
  classesConfig: ComponentClassesConfig<T>,
): ProcessedClasses<T> => {
  return useMemo(() => {
    // Создаём промежуточный объект для хранения данных
    const intermediate: Record<string, ProcessedSectionData | string[]> = {};

    // Массив для сбора всех базовых классов
    const baseClasses: string[] = [];

    // Обрабатываем каждую секцию конфига
    for (const [sectionName, sectionData] of Object.entries(classesConfig) as [
      T,
      SectionData,
    ][]) {
      // Добавляем базовые классы в общий массив
      if (Array.isArray(sectionData.base)) {
        baseClasses.push(...sectionData.base);
      } else {
        baseClasses.push(sectionData.base);
      }

      // Создаём ключ для переименованной секции (добавляем префикс 'c')
      const processedKey = `c${sectionName.charAt(0).toUpperCase()}${sectionName.slice(1)}`;

      // Копируем данные секции
      intermediate[processedKey] = {
        options: { ...sectionData.options },
        base: Array.isArray(sectionData.base)
          ? [...sectionData.base]
          : [sectionData.base],
      };
    }

    // Добавляем объединённые базовые классы
    intermediate.cBase = baseClasses;

    return intermediate as ProcessedClasses<T>;
  }, [classesConfig]);
};

// Пример использования для титульной секции:
/*
type TitleSectionKeys = 'position' | 'deco_line' | 'view' | 'size';

const TITLE_SECTION_TO_CLASS: ComponentClassesConfig<TitleSectionKeys> = {
  position: {
    base: cls.position,
    options: {
      LEFT: cls.position_left,
      CENTER: cls.position_center,
      RIGHT: cls.position_right,
    },
  },
  // ... остальные секции
};

const classes = useComponentClasses(TITLE_SECTION_TO_CLASS);
*/

// Пример использования для другого компонента:
/*
type ButtonKeys = 'size' | 'variant' | 'state';

const BUTTON_TO_CLASS: ComponentClassesConfig<ButtonKeys> = {
  size: {
    base: cls.size,
    options: {
      S: cls.size_s,
      M: cls.size_m,
      L: cls.size_l,
    },
  },
  // ... остальные секции
};

const classes = useComponentClasses(BUTTON_TO_CLASS);
*/
