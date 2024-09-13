import { fontFace, style } from "@vanilla-extract/css";

const comicSans = fontFace({
  src: 'local("Comic Sans MS")',
});

export const font = style({
  fontFamily: comicSans,
});

// Multiple Fonts with Single Family
const gentium = fontFace([
  {
    src: 'local("Gentium")',
    fontWeight: "normal",
  },
  {
    src: 'local("Gentium Bold")',
    fontWeight: "bold",
  },
]);

export const multiplefont = style({
  fontFamily: gentium,
});
