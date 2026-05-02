import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
};

export default function Button({
    variant = "primary",
    className = "",
    children,
    ...props
}: ButtonProps) {
    const base =
        "px-4 py-2 rounded font-medium transition transition-colors duration-300 disabled:opacity-50";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary/80",
        secondary: "bg-secondary text-white hover:bg-secondary/80",
    };

    return (
        <button
            {...props}
            className={`${base} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
}