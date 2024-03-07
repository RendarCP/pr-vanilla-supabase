import { style } from "@vanilla-extract/css";
import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    brand: "green",
  },
  font: {
    body: "arial",
  },
});

// base = 'styles_base__8uideo0'
const base = style({ padding: 12 });

// primary = 'styles_base__8uideo0 styles_primary__8uideo1'
export const primary = style([base, { background: "blue" }]);

export const container = style({
  padding: 10,
  border: "1px solid red",
  color: "yellow",
});

export const text = style({
  color: "red",
});

export const brandText = style({
  color: vars.color.brand,
  fontFamily: vars.font.body,
});

const responsiveStyle = ({ tablet, desktop }) => ({
  "@media": {
    "screen and (min-width: 768px)": tablet,
    "screen and (min-width: 1024px)": desktop,
  },
});

export const mainContainer = style([
  {
    display: "flex",
    flexDirection: "column",
  },
  responsiveStyle({
    tablet: { flex: 1, content: "I will be overridden" },
    desktop: { flexDirection: "row" },
  }),
  {
    "@media": {
      "screen and (min-width: 768px)": {
        content: "I win!",
      },
    },
  },
]);
