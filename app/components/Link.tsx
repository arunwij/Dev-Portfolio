import type { ReactNode } from "react";

interface LinkProps {
  children: ReactNode;
  href: string;
  className?: string;
  target?: "_self" | "_blank" | "";
}

export default function Link({
  children,
  href,
  className,
  target = "_blank",
  ...rest
}: LinkProps) {
  return (
    <a href={href} className={className} target={target} {...rest}>
      {children}
    </a>
  );
}
