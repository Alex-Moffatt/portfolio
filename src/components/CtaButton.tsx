import { zoomImage } from "@/lib/styles";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
  className?: string;
  download?: boolean;
};

export default function CtaButton({ href, children, variant = "dark", className = "", download = false }: CtaButtonProps) {
  return (
    <a
      href={href}
      download={download || undefined}
      className={`gradient-mesh-alt relative hover:z-10 items-center border ${
        variant === "dark" ? "border-text-dark" : "border-text-light"
      } px-m py-s text-style-label uppercase text-text-dark no-underline ${zoomImage} ${className}`}
    >
      {children}
    </a>
  );
}
