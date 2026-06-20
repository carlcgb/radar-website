import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
  as: Tag = "div",
}: {
  className?: string;
  children: React.ReactNode;
  as?: "div" | "section" | "header" | "footer" | "main" | "nav";
}) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[var(--container-max)] px-[var(--container-pad)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Section({
  id,
  className,
  children,
  ariaLabelledBy,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  ariaLabelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn("py-[var(--section-pad-md)] md:py-[var(--section-pad-lg)]", className)}
    >
      {children}
    </section>
  );
}
