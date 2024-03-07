import { style } from "@vanilla-extract/css";

const responsiveStyle = ({ tablet, desktop }) => ({
  "@media": {
    "screen and (min-width: 768px)": tablet,
    "screen and (min-width: 1024px)": desktop,
  },
});

export const container = style([
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
