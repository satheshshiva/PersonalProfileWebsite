import { ReactNode } from "react";

export default function GradientText({
  children,
  className = "",
  as: Tag = "span",
}: {
  children: ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const Component = Tag as React.ElementType;
  return <Component className={`gradient-text ${className}`}>{children}</Component>;
}
