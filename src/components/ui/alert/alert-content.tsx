import * as React from "react";
import { cn } from "@/lib/utils";

const AlertContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col flex-1 gap-1", className)}
    {...props}
  />
));

export { AlertContent };
