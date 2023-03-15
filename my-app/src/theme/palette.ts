const status = {
  success: "#00E300",
  underProcess: "#F5FD0A",
  stock: "#EE0303",
};

const PRIMARY = {
  main: "#4082FF",
};

const SECONDARY = {
  main: "#383F45",
};
const GRAY = {
  main: "#808080",
  display: "#AAAAAA",
  font: "#EDEDED",
  light: "#FAFAFA",
};
const BODY = {
  main: "#232A30",
};

const ERROR = {
  main: "rgb(211, 47, 47)",
};

const palette = {
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  body: { ...BODY },
  gray: { ...GRAY },
  error: { ...ERROR },
  status: { ...status },
  background: { default: BODY.main },
  text: { primary: GRAY.font },
};

export default palette;
