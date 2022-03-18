import { clsxm } from "@ijancleaning/tw";

export function HideOnMobile({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={clsxm("hidden md:block", className)}>{children}</div>;
}
