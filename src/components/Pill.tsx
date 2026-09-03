import { forwardRef } from "react";

type PillProps = {
  children: React.ReactNode;
  filled?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

const Pill = forwardRef<HTMLSpanElement, PillProps>(function Pill(
  { children, filled = false, className = "", style },
  ref
) {
  return (
    <span
      ref={ref}
      style={style}
      className={`rounded-full border border-text-dark px-s py-xs text-style-label uppercase text-text-dark ${
        filled ? "bg-white" : "bg-background"
      } ${className}`}
    >
      {children}
    </span>
  );
});

export default Pill;
