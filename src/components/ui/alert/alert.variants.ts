import { type VariantProps, cva } from "class-variance-authority";

export const alertVariants = cva(
  "flex items-start gap-4 rounded-lg border p-4 text-sm",
  {
    variants: {
      variant: {
        notification:
          "border-primary-light bg-primary-lightest text-foreground",
        danger:
          "border-danger-light bg-danger-lightest text-destructive dark:border-destructive [&>svg]:text-destructive",
        warning:
          "border-tertiary-light bg-tertiary-lightest text-destructive dark:border-destructive [&>svg]:text-destructive",
        success:
          "border-success-light bg-success-lightest text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "notification",
    },
  },
);

export type AlertVariants = VariantProps<typeof alertVariants>;
