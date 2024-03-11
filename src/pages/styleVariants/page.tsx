import { variant } from "./style.css";

export default function StyleVariants() {
  return (
    <>
      <div className={variant["primary"]}>primary</div>
      <div className={variant["secondary"]}>primary</div>
    </>
  );
}
