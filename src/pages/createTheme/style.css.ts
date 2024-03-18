import { createTheme, style } from "@vanilla-extract/css";

export const [themeA, vars] = createTheme({
  color: {
    brand: "blue",
  },
  font: {
    body: "arial",
  },
});

export const themeB = createTheme(vars, {
  color: {
    brand: "pink",
  },
  font: {
    body: "comic sans ms",
  },
});

export const brandText = style({
  color: vars.color.brand,
  fontFamily: vars.font.body,
});
