const config = {
  processor: "sass",
  columns: 12,
  unit: "rem",
  mobileFirst: true,
  path: "./src/shared/wondergrid/",
  fileName: "wg",

  container: {
    width: "1200",
    gap: "30",
    boxOffset: "40",
    unit: "px",
  },
  bp: {
    lg: {
      width: "1100",
      unit: "px",
    },
    md: {
      width: "960",
      unit: "em",
    },
    sm: {
      width: "780",
      fields: "20",
    },
    xs: {
      width: "560",
      gap: "15",
      boxOffset: "10",
    },
  },
};
