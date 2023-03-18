import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

/**
 * The properties for the Button component.
 */
export interface IButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    /**
     * How to display the button.
     */
    display?: "primary" | "secondary" | "danger";

    /**
     * Display the small version of the button.
     */
    compact?: boolean;
}
