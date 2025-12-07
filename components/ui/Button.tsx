import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost" | "safety" | "accent"
    size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", ...props }, ref) => {
        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-white text-shoreline-blue hover:bg-white/90": variant === "default",
                        "border border-white/20 bg-transparent hover:bg-white/10 text-white": variant === "outline",
                        "hover:bg-white/10 text-white": variant === "ghost",
                        "bg-safety-yellow text-shoreline-blue hover:bg-safety-yellow/90 font-bold": variant === "safety",
                        "bg-gradient-to-r from-safety-yellow to-amber-500 text-shoreline-blue hover:from-safety-yellow/90 hover:to-amber-500/90 font-bold shadow-lg shadow-safety-yellow/20": variant === "accent",
                        "h-10 px-4 py-2": size === "default",
                        "h-9 rounded-md px-3": size === "sm",
                        "h-11 rounded-md px-8": size === "lg",
                        "h-10 w-10": size === "icon",
                    },
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
