import { useMemo } from "react";

type BaseType = string | string[];

// Базовый интерфейс для секции стилей с поддержкой массивов в опциях
interface StyleSection {
  base: BaseType;
  options: Record<string, string | string[]>;
}

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

// Утилитарная функция для нормализации классов в массив
const normalizeToArray = (value: string | string[]): string[] => {
  return Array.isArray(value) ? value : [value];
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
      const normalizedBase = normalizeToArray(sectionData.base);
      baseClasses.push(...normalizedBase);

      // Создаём ключ для переименованной секции (добавляем префикс 'c')
      const processedKey = `c${sectionName.charAt(0).toUpperCase()}${sectionName.slice(1)}`;

      // Обрабатываем опции, нормализуя каждую в массив
      const processedOptions: Record<string, string[]> = {};
      Object.entries(sectionData.options).forEach(
        ([optionKey, optionValue]) => {
          processedOptions[optionKey] = normalizeToArray(optionValue);
        },
      );

      // Копируем данные секции
      intermediate[processedKey] = {
        options: processedOptions,
        base: normalizedBase,
      };
    });

    // Добавляем объединённые базовые классы
    intermediate.cBase = baseClasses;

    return intermediate as ProcessedClasses<T>;
  }, [classesConfig]);
};

export function createNamespace<T extends readonly string[]>(variants: T) {
  type ValueType = T[number];
  return variants.reduce(
    (acc, key) => ({ ...acc, [key]: key }),
    {} as Record<ValueType, ValueType>,
  );
}
