import { style } from "@vanilla-extract/css";

const base = style({ padding: 12 });

export const primary = style([base, { background: "blue" }]);
