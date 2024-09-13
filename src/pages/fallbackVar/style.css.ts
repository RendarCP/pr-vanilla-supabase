import { createVar, fallbackVar, style } from "@vanilla-extract/css";

export const colorVar = createVar();
export const primaryVar = createVar();
export const secondaryVar = createVar();

export const color = style({
  color: fallbackVar(colorVar, "blue"),
});

export const multiple = style({
  color: fallbackVar(primaryVar, secondaryVar, "blue"),
});
