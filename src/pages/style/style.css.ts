import { style, createVar } from "@vanilla-extract/css";

export const flexContainer = style({
  display: "flex",
});

const scopedVar = createVar();

export const className = style({
  display: "flex",
  vars: {
    [scopedVar]: "green",
    "--global-variable": "purple",
  },
  ":hover": {
    color: "red",
  },
  selectors: {
    "&:nth-child(2n)": {
      background: "#fafafa",
    },
  },
  "@media": {
    "screen and (min-width: 768px)": {
      padding: 10,
    },
  },
  "@supports": {
    "(display: grid)": {
      display: "grid",
    },
  },
});
