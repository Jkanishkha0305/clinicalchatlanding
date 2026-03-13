"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("overflow-hidden rounded-[30px] border border-white/60", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-center justify-between gap-6 px-6 py-6 text-left text-[1.05rem] font-semibold text-[#10272b] transition-colors duration-300 hover:text-[#0a5c54] sm:px-8 sm:py-7 sm:text-[1.12rem]",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d7ebe7] bg-white/75 text-[#45656a] shadow-[0_14px_32px_rgba(17,43,53,0.08)] transition-all duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:border-[#82ddc2] group-data-[state=open]:text-[#0a5c54]">
        <Plus className="h-5 w-5" />
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden data-[state=closed]:animate-[accordion-up_240ms_ease-out] data-[state=open]:animate-[accordion-down_280ms_ease-out]",
      className,
    )}
    {...props}
  >
    <div className="px-6 pb-6 text-[0.98rem] leading-7 text-[#47646a] sm:px-8 sm:pb-8">
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
