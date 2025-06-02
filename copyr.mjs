#!/usr/bin/env node

import {
  readdirSync,
  existsSync,
  mkdirSync,
  copyFileSync,
  readFileSync,
  writeFileSync,
} from "fs";
import { extname, join } from "path";
import { execSync } from "child_process";
import { createInterface } from "readline";

// Функция для проверки, является ли файл бинарным
function isBinaryFile(filePath) {
  const binaryExtensions = [
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".svg",
    ".ico",
    ".pdf",
    ".zip",
    ".mp3",
    ".mp4",
    ".webm",
    ".woff",
    ".woff2",
    ".ttf",
    ".eot",
  ];
  const ext = extname(filePath).toLowerCase();
  return binaryExtensions.includes(ext);
}

// Функция для рекурсивного получения списка директорий
function getDirectories(source) {
  return readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
}

// Функция для чтения пользовательского ввода
function askQuestion(query) {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

// Функция для выбора из списка с помощью gum
function gumChoose(items, placeholder) {
  try {
    // Проверяем, установлен ли gum
    execSync("which gum > /dev/null 2>&1");

    const command = `echo "${items.join("\n")}" | gum choose --placeholder="${placeholder}"`;
    return execSync(command).toString().trim();
  } catch (error) {
    // Если gum не установлен, используем обычный выбор через консоль
    console.log(`\nВыберите один из вариантов (введите номер):`);
    items.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });

    return askQuestion("Ваш выбор: ").then((choice) => {
      const index = parseInt(choice) - 1;
      if (index >= 0 && index < items.length) {
        return items[index];
      } else {
        console.log("Неверный выбор. Пожалуйста, попробуйте снова.");
        return gumChoose(items, placeholder);
      }
    });
  }
}

// Функция для копирования и замены имени в файлах
function copyAndRenameFiles(sourcePath, targetPath, oldName, newName) {
  if (!existsSync(targetPath)) {
    mkdirSync(targetPath, { recursive: true });
  }

  const items = readdirSync(sourcePath, { withFileTypes: true });

  for (const item of items) {
    const sourceName = item.name;

    // Замена названия в имени файла или директории с сохранением регистра
    let targetName = sourceName;

    // Замена с учетом регистра (учитываем все возможные варианты регистра)
    const oldNameLower = oldName.toLowerCase();
    const oldNameUpper = oldName.toUpperCase();
    const oldNameCapitalized =
      oldName.charAt(0).toUpperCase() + oldName.slice(1).toLowerCase();

    // Замена с сохранением регистра
    if (sourceName.includes(oldName)) {
      targetName = sourceName.replace(new RegExp(oldName, "g"), newName);
    } else if (sourceName.includes(oldNameLower)) {
      targetName = sourceName.replace(
        new RegExp(oldNameLower, "g"),
        newName.toLowerCase(),
      );
    } else if (sourceName.includes(oldNameUpper)) {
      targetName = sourceName.replace(
        new RegExp(oldNameUpper, "g"),
        newName.toUpperCase(),
      );
    } else if (sourceName.includes(oldNameCapitalized)) {
      targetName = sourceName.replace(
        new RegExp(oldNameCapitalized, "g"),
        newName.charAt(0).toUpperCase() + newName.slice(1).toLowerCase(),
      );
    }

    const sourceItemPath = join(sourcePath, sourceName);
    const targetItemPath = join(targetPath, targetName);

    if (item.isDirectory()) {
      // Рекурсивно копируем содержимое директории
      copyAndRenameFiles(sourceItemPath, targetItemPath, oldName, newName);
    } else {
      if (isBinaryFile(sourceItemPath)) {
        // Для бинарных файлов просто копируем без изменений содержимого
        copyFileSync(sourceItemPath, targetItemPath);
      } else {
        try {
          // Для текстовых файлов заменяем содержимое
          let content = readFileSync(sourceItemPath, "utf8");

          // Замена с учетом регистра в содержимом файла
          [oldName, oldNameLower, oldNameUpper, oldNameCapitalized].forEach(
            (variation, index) => {
              let replacement;
              if (index === 0) replacement = newName;
              else if (index === 1) replacement = newName.toLowerCase();
              else if (index === 2) replacement = newName.toUpperCase();
              else if (index === 3)
                replacement =
                  newName.charAt(0).toUpperCase() +
                  newName.slice(1).toLowerCase();

              content = content.replace(
                new RegExp(variation, "g"),
                replacement,
              );
            },
          );

          writeFileSync(targetItemPath, content, "utf8");
        } catch (error) {
          console.error(
            `Ошибка при обработке файла ${sourceItemPath}: ${error.message}`,
          );
          // Если не удалось прочитать как текстовый файл, копируем как есть
          copyFileSync(sourceItemPath, targetItemPath);
        }
      }
    }
  }
}

// Основная функция
async function main() {
  console.log("Утилита для копирования модулей\n");

  // Получаем структуру верхних папок проекта
  const rootDirs = getDirectories(process.cwd());
  console.log("Выберите папку с модулями (по умолчанию: src):");
  console.log(rootDirs.join(", "));

  let moduleRootDir = await askQuestion("> ");
  if (!moduleRootDir) moduleRootDir = "src";

  if (!rootDirs.includes(moduleRootDir)) {
    console.error(`Папка "${moduleRootDir}" не найдена.`);
    process.exit(1);
  }

  let currentPath = join(process.cwd(), moduleRootDir);
  let inModuleDirectory = false;

  // Навигация по структуре проекта
  while (!inModuleDirectory) {
    console.log(`\nТекущая директория: ${currentPath}`);
    const subDirs = getDirectories(currentPath);

    console.log("Содержимое директории:");
    console.log(subDirs.join(", "));

    const isModuleDir = await askQuestion(
      "\nМы находимся в директории с модулями? (y/n): ",
    );

    if (isModuleDir.toLowerCase() === "y") {
      inModuleDirectory = true;
    } else {
      let nextDir;
      if (subDirs.length > 0) {
        console.log("\nВыберите директорию для навигации:");
        nextDir = await gumChoose(subDirs, "Выберите директорию");
      } else {
        console.log("В текущей директории нет поддиректорий.");
        process.exit(1);
      }

      currentPath = join(currentPath, nextDir);
    }
  }

  // Выбор модуля для копирования
  const modules = getDirectories(currentPath);
  console.log("\nДоступные модули для копирования:");

  if (modules.length === 0) {
    console.log("Модули не найдены.");
    process.exit(1);
  }

  const sourceModule = await gumChoose(
    modules,
    "Выберите модуль для копирования",
  );
  console.log(`\nВыбран модуль: ${sourceModule}`);

  // Определение сущности для замены
  let entityToReplace = await askQuestion(
    `Введите сущность для замены (по умолчанию: ${sourceModule}): `,
  );
  if (!entityToReplace) entityToReplace = sourceModule;

  // Новое имя для модуля
  const newModuleName = await askQuestion(
    "Введите название для нового модуля: ",
  );

  if (!newModuleName) {
    console.error("Название нового модуля не может быть пустым.");
    process.exit(1);
  }

  if (modules.includes(newModuleName)) {
    const overwrite = await askQuestion(
      `Модуль "${newModuleName}" уже существует. Перезаписать? (y/n): `,
    );
    if (overwrite.toLowerCase() !== "y") {
      console.log("Операция отменена.");
      process.exit(0);
    }
  }

  // Копирование и переименование
  const sourcePath = join(currentPath, sourceModule);
  const targetPath = join(currentPath, newModuleName);

  console.log(`\nКопирование из ${sourcePath} в ${targetPath}`);
  console.log(`Замена сущности "${entityToReplace}" на "${newModuleName}"`);

  try {
    copyAndRenameFiles(sourcePath, targetPath, entityToReplace, newModuleName);
    console.log("\nКопирование и переименование успешно завершено!");
  } catch (error) {
    console.error(`Произошла ошибка: ${error.message}`);
    process.exit(1);
  }
}

main().catch(console.error);
