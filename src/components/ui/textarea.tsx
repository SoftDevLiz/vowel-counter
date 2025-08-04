import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-20 w-full rounded-md border bg-transparent px-4 py-3 text-lg shadow-xs transition-all duration-300 outline-none focus-visible:ring-[3px] focus-visible:border-teal-500 focus-visible:shadow-[0_0_20px_rgba(20,184,166,0.5)] disabled:cursor-not-allowed disabled:opacity-50 md:text-xl",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
