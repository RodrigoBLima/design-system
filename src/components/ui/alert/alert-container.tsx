import * as React from "react";
import { cn } from "@/lib/utils";
import { alertVariants } from "./alert.variants";
import type { AlertVariants } from "./alert.variants";

const AlertContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & AlertVariants
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));

export { AlertContainer };
