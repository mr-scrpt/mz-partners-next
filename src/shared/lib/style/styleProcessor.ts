import { useMemo } from "react";

// Базовые типы для структуры классов
type BaseType = string | string[];

// Базовый интерфейс для секции стилей
interface StyleSection {
  base: BaseType;
  options: Record<string, string>;
}

// Извлекаем типы из конфигурации
type InferClassesConfig<T> = T extends {
  [K in keyof T]: {
    base: BaseType;
    options: Record<string, string>;
  };
}
  ? T
  : never;

type ProcessedSectionData<T extends StyleSection> = {
  base: string[];
  options: T["options"];
};

// Создаем тип для обработанных классов с добавлением префикса 'c'
type ProcessedClasses<T extends Record<string, StyleSection>> = {
  [K in keyof T as `c${Capitalize<string & K>}`]: ProcessedSectionData<T[K]>;
} & {
  cBase: string[];
};

export const useStyleProcessor = <T extends Record<string, StyleSection>>(
  classesConfig: T,
): ProcessedClasses<T> => {
  return useMemo(() => {
    // Создаём промежуточный объект для хранения данных
    const intermediate: Record<string, any> = {};

    // Массив для сбора всех базовых классов
    const baseClasses: string[] = [];

    // Обрабатываем каждую секцию конфига
    Object.entries(classesConfig).forEach(([sectionName, sectionData]) => {
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
    });

    // Добавляем объединённые базовые классы
    intermediate.cBase = baseClasses;

    return intermediate as ProcessedClasses<T>;
  }, [classesConfig]);
};
