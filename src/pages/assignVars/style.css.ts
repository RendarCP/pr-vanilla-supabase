import {
  createThemeContract,
  style,
  assignVars,
  styleVariants,
} from "@vanilla-extract/css";

export const vars = createThemeContract({
  space: {
    small: null,
    large: null,
  },
});

export const responsiveTheme = style({
  vars: assignVars(vars, {
    space: {
      small: "4px",
      large: "16px",
    },
  }),
  "@media": {
    "screen and (min-width: 1024px)": {
      vars: assignVars(vars, {
        space: {
          small: "8px",
          large: "32px",
        },
      }),
    },
  },
});

export const spacer = style({
  marginTop: vars.space.small,
  marginBottom: vars.space.large,
});
