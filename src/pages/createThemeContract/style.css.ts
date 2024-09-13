import { createThemeContract, createTheme, style } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    brand: null,
  },
  font: {
    body: null,
  },
});

export const themeA = createTheme(vars, {
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
