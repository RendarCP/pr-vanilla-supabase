import { keyframes, style } from "@vanilla-extract/css";

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const spin = style({
  animationName: rotate,
  animationDuration: "3s",
});

// or interpolate as a shorthand:
export const spinAgain = style({
  animation: `${rotate} 3s`,
});
