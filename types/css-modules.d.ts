declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.module.sass" {
  const classes: { [key: string]: string };
  export default classes;
}

// Для обычных CSS/SCSS файлов (не модулей)
declare module "*.css";
declare module "*.scss";
declare module "*.sass";
