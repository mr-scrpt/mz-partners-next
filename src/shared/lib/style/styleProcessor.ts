import { useMemo } from "react";

// Базовые типы для структуры классов
type ClassValue = string | string[];

// Базовый интерфейс для секции стилей с обновленными опциями
interface StyleSection {
  base: ClassValue;
  options: Record<string, ClassValue>;
}

// Извлекаем типы из конфигурации
type InferClassesConfig<T> = T extends {
  [K in keyof T]: {
    base: ClassValue;
    options: Record<string, ClassValue>;
  };
}
  ? T
  : never;

// Обновленный тип для обработанных данных секции
type ProcessedSectionData<T extends StyleSection> = {
  base: string[];
  options: {
    [K in keyof T["options"]]: string[];
  };
};

// Создаем тип для обработанных классов с добавлением префикса 'c'
type ProcessedClasses<T extends Record<string, StyleSection>> = {
  [K in keyof T as `c${Capitalize<string & K>}`]: ProcessedSectionData<T[K]>;
} & {
  cBase: string[];
};

// Функция для преобразования ClassValue в массив строк
const normalizeClassValue = (value: ClassValue): string[] => {
  if (Array.isArray(value)) {
    return value;
  }
  return [value];
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
      // Нормализуем и добавляем базовые классы в общий массив
      const normalizedBase = normalizeClassValue(sectionData.base);
      baseClasses.push(...normalizedBase);

      // Создаём ключ для переименованной секции (добавляем префикс 'c')
      const processedKey = `c${sectionName.charAt(0).toUpperCase()}${sectionName.slice(1)}`;

      // Обрабатываем опции - теперь каждая опция может быть строкой или массивом
      const processedOptions: Record<string, string[]> = {};
      Object.entries(sectionData.options).forEach(
        ([optionKey, optionValue]) => {
          processedOptions[optionKey] = normalizeClassValue(optionValue);
        },
      );

      // Копируем данные секции с обработанными опциями
      intermediate[processedKey] = {
        base: normalizedBase,
        options: processedOptions,
      };
    });

    // Добавляем объединённые базовые классы
    intermediate.cBase = baseClasses;
    return intermediate as ProcessedClasses<T>;
  }, [classesConfig]);
};
