import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/utils";
export function Button({className,asChild=false,...props}:React.ButtonHTMLAttributes<HTMLButtonElement>&{asChild?:boolean}){const C:any=asChild?Slot:"button";return <C className={cn("inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 focus:outline-none",className)} {...props}/>}
