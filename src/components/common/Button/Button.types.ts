import { HTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary" | "danger" | "background";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    isLoading?: boolean;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    children: React.ReactNode;
    disabled?: boolean;
}