/**
 * Тип для преобразования массива строк в объект с константными ключами
 */
type ArrayToObject<K extends string[]> = {
  [P in K[number]]: P;
};

/**
 * Создает объект для типизированных ключей переводов без необходимости использовать "as const"
 * @param namespace Пространство имен для группы переводов
 * @param keys Массив ключей для переводов
 * @returns Кортеж [namespace, объект с ключами]
 */
export function createTranslationObject<N extends string, K extends string[]>(
  namespace: N,
  keys: [...K],
): [N, ArrayToObject<K>] {
  // Создаем объект с ключами
  const keyObject = {} as ArrayToObject<K>;

  // Заполняем объект
  for (const key of keys) {
    keyObject[key as K[number]] = key as K[number];
  }

  return [namespace, keyObject];
}
// export function createTranslationObject<
//   N extends string,
//   K extends readonly string[],
// >(namespace: N, keys: K): [N, { [P in K[number]]: P }] {
//   const keyObject = {} as { [P in K[number]]: P };
//
//   for (const key of keys) {
//     keyObject[key as K[number]] = key as K[number];
//   }
//
//   return [namespace, keyObject];
// }
