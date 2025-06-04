"use client";
import { ChevronDown } from "lucide-react";

export default function TopAssetsHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between px-1 py-3 sm:px-6 sm:py-4">
      {/* Left section */}
      <div>
        <p className="text-xs text-gray-400 mb-1 flex items-center gap-1">
          Recommended coins for 24 hours
          <span className="text-[10px] bg-[#2B2B40] text-white px-2 py-0.5 rounded-full">
            3 Assets
          </span>
        </p>
        <h2 className="text-xl sm:text-2xl font-semibold text-white">
          Top Staking Assets
        </h2>
      </div>

      {/* Right filters */}
      <div className="flex flex-wrap gap-2 mt-3 md:mt-0">
        {["24H", "Proof of Stake", "Desc"].map((filter, index) => (
          <button
            key={index}
            className="flex items-center gap-1 bg-[#1E1E30] text-sm text-white px-3 py-1.5 rounded-full shadow-sm hover:bg-[#2C2C44] transition"
          >
            {filter}
            <ChevronDown className="w-4 h-4" />
          </button>
        ))}
      </div>
    </div>
  );
}
