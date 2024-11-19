import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("font-medium text-center rounded-lg focus:ring-4 focus:outline-none", {
    variants: {
        intent: {
            primary:
                "text-primary-foreground bg-primary hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
            secondary:
                "text-secondary-foreground border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-secondary dark:text-secondary-foreground dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",
        },
        size: {
            xsmall: "px-3 py-2 text-xs",
            small: "px-3 py-2 text-sm",
            medium: "px-4 py-2.5 text-sm",
        },
    },
    compoundVariants: [{ intent: "primary", size: "medium", class: "" }],
    defaultVariants: {
        intent: "primary",
        size: "medium",
    },
});

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({ className, intent, size, ...props }) => (
    <button className={button({ intent, size, className })} {...props} />
);