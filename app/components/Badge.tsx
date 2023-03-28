import type { ReactNode } from "react";

interface BadgeProps {
  label: string;
  className?: string;
  size?: "md" | "sm";
  renderIconStart?: ({ className }: { className: string }) => ReactNode;
}

const sizeProps = {
  sm: {
    root: "text-sm px-2 py-1",
    icon: "w-3 mr-2",
  },
  md: {
    root: "px-4 py-1",
    icon: "w-5 mr-2",
  },
};

export default function Badge({
  label,
  className,
  size = "md",
  renderIconStart = () => null,
}: BadgeProps) {
  return (
    <label
      className={`items-center border border-gray-300 rounded-3xl font-medium inline-flex ${sizeProps[size]["root"]} ${className}`}
    >
      {renderIconStart({ className: sizeProps[size]["icon"] })}
      <span>{label}</span>
    </label>
  );
}
