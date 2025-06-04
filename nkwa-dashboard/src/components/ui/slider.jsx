// components/ui/slider.jsx
"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";

export function Slider({ className = "", ...props }) {
  return (
    <SliderPrimitive.Root
      className={`relative flex items-center select-none touch-none w-full h-5 ${className}`}
      {...props}
    >
      <SliderPrimitive.Track className="bg-neutral-700 relative grow rounded-full h-1">
        <SliderPrimitive.Range className="absolute bg-purple-500 rounded-full h-full" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block w-4 h-4 bg-white border border-purple-500 rounded-full hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500" />
    </SliderPrimitive.Root>
  );
}
