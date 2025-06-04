"use client";
import { Wallet, Lock, Blocks } from "lucide-react";

export default function LiquidStakingPortfolio() {
  return (
    <div className="bg-gradient-to-br from-[#1C1C2E] to-[#26263a] rounded-2xl p-4 sm:p-6 text-white w-full shadow-lg relative overflow-hidden">
      {/* Logo and Badge */}
      <div className="flex justify-between items-center mb-3 sm:mb-4">
        <div className="flex items-center gap-2">
          <Blocks className="w-5 h-5 text-white-500" />
          <h1 className="font-semibold text-sm sm:text-base">
            Stakent <sup className="text-xs">®</sup>
          </h1>
        </div>
        <span className="text-xs bg-[#8b5cf6]/20 text-[#8b5cf6] px-2 py-0.5 rounded-full font-medium">
          New
        </span>
      </div>

      {/* Title and Subtitle */}
      <h2 className="text-base sm:text-lg font-semibold">
        Liquid Staking Portfolio
      </h2>
      <p className="text-sm text-gray-400 mt-2">
        An all-in-one portfolio that helps you make smarter investments into Ethereum Liquid Staking
      </p>

      {/* Buttons */}
      <div className="mt-14 sm:mt-20 space-y-3">
        <button className="w-full bg-[#8b5cf6] hover:bg-[#7a4fe3] text-white py-2 rounded-full font-medium flex items-center justify-center gap-2 transition-all">
          Connect with Wallet <Wallet size={16} />
        </button>
        <button className="w-full bg-white/10 hover:bg-white/20 text-white py-2 rounded-full font-medium flex items-center justify-center gap-2 transition-all">
          Enter a Wallet Address <Lock size={16} />
        </button>
      </div>

      {/* Decorative Background Blur */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-6 right-6 w-28 h-28 sm:w-32 sm:h-32 bg-purple-500/10 blur-2xl rounded-full" />
        <div className="absolute bottom-4 left-4 w-20 h-20 sm:w-24 sm:h-24 bg-purple-500/5 blur-2xl rounded-full" />
      </div>
    </div>
  );
}
