import { Check, Palette } from "lucide-react";
import React, { useState } from "react";

const Colorpicker = ({ selectedColor, onChange }) => {
  const colors = [
    { name: "Blue", value: "#3b82f6" },
    { name: "Red", value: "#ef4444" },
    { name: "Green", value: "#10b981" },
    { name: "Purple", value: "#8b5cf6" },
    { name: "Orange", value: "#f97316" },
    { name: "Teal", value: "#14b8a6" },
    { name: "Pink", value: "#ec4899" },
    { name: "Yellow", value: "#eab308" },
    { name: "Gray", value: "#6b7280" },
    { name: "Black", value: "#000000" },
    { name: "Cyan", value: "#06b6d4" },
    { name: "Indigo", value: "#4f46e5" },
    { name: "Lime", value: "#84cc16" },
    { name: "Fuchsia", value: "#d946ef" },
    { name: "Emerald", value: "#059669" },
    { name: "Sky", value: "#0ea5e9" },
    { name: "Rose", value: "#f43f5e" },
    { name: "Amber", value: "#f59e0b" },
    { name: 'Deep Ruby', value: '#A00030' },
    { name: 'Sapphire Blue', value: '#083D77' },
    { name: 'Emerald Green', value: '#004D40' },
    { name: 'Amethyst Purple', value: '#4A148C' },
    { name: 'Burnt Sienna', value: '#8D4004' },
    { name: 'Deep Teal', value: '#004D61' },
    { name: 'Mahogany Red', value: '#660000' },
    { name: 'Forest Green', value: '#154A23' },
    { name: 'Pale Blue', value: '#A7C7E7' }, 
  { name: 'Mint', value: '#AAF0D1' },
  { name: 'Soft Pink', value: '#FFD1DC' },
  { name: 'Pale Yellow', value: '#FCF7DE' }, 
  { name: 'Light Gray', value: '#E9E9E9' },
    { name: 'Charcoal Black', value: '#36454F' },
  { name: 'Midnight Blue', value: '#0E274C' },
  { name: 'Deep Teal', value: '#004848' },   
  { name: 'Oxblood Red', value: '#580F1E' },
  { name: 'Forest Green', value: '#0D2B1D' },
  { name: 'Graphite', value: '#212121' },
  { name: 'Deep Violet', value: '#4A235A' },
  { name: 'Espresso Brown', value: '#38241D' },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" flex items-center gap-1 text-sm text-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 ring-blue-300 hover:ring transition-all px-3 py-2 rounded-lg "
      >
        <Palette size={16} className=" max-sm:hidden" />
        Accent Color
      </button>
      {isOpen && (
        <div className=" grid grid-cols-5 absolute z-10 mt-2 top-full gap-3 p-3  w-xs rounded-md border border-gray-200 bg-white shadow-sm">
          {colors.map((color) => (
            <div
              key={color.name}
              className="relative cursor-pointer group flex flex-col items-center" // Added items-center
              onClick={() => {onChange(color.value); setIsOpen(false);}}
            >
              {/* Color Swatch Circle - Made relative and Check is now INSIDE */}
              <div
                className={` w-8 h-8 rounded-full border-2 relative overflow-hidden ${ // Added relative overflow-hidden
                  selectedColor === color.value
                    ? "border-blue-500"
                    : "border-gray-300 group-hover:border-gray-400"
                }`}
                style={{ backgroundColor: color.value }}
              >
                {/* Correct Checkmark Placement: absolute inset-0 centers it perfectly */}
                {selectedColor === color.value && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Check className="size-5 text-white" />
                  </div>
                )}
              </div>

              <p className=" text-xs text-center mt-1 text-gray-600 ">
                {color.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Colorpicker;