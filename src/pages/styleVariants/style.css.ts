import { style, styleVariants } from "@vanilla-extract/css";

const base = style({ padding: 12 });

const palette = {
  primary: "blue",
  secondary: "aqua",
};

export const variant = styleVariants(palette, (paletteColor) => [
  base,
  { background: paletteColor },
]);
