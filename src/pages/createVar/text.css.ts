import { style } from "@vanilla-extract/css";
import { accentVar } from "./style.css.ts";

export const accentText = style({
  color: accentVar,
});
