import React from "react";

type ButtonProps = {
  variant?: "primary" | "secondary";
  label: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  className?: string;
};

export default function Button({
  variant = "primary",
  label,
  href,
  onClick,
  disabled = false,
  icon,
  className: extraClassName,
}: ButtonProps) {
  const base =
    "inline-flex justify-center items-center gap-s px-m py-[8px] text-style-body-md-bold transition-all duration-200";

  const variants = {
    primary:
      "bg-[#101214] text-text-light hover:opacity-80",
    secondary:
      "bg-transparent border border-[#101214] text-[#101214] hover:bg-[#101214] hover:text-text-light",
  };

  const disabledStyle = "opacity-40 pointer-events-none";

  const className = `${base} ${variants[variant]} ${disabled ? disabledStyle : ""} ${extraClassName ?? ""}`;

  if (href && !disabled) {
    return (
      <a href={href} className={className}>
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {label}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {label}
    </button>
  );
}
