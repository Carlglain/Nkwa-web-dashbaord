"use client";
import { ArrowDown, ArrowUp, Info, RefreshCw } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";
import Avax from "@/assets/Avax.png";

export default function ActiveStaking() {
  return (
    <div className="bg-[#1B1C2E] p-4 sm:p-6 rounded-2xl text-white w-full shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <div className="flex-1">
          <p className="text-xs text-gray-400 mb-2 flex items-center gap-1">
            Last Update • 45 minutes ago <RefreshCw className="w-3 h-3" />
          </p>

          <div className="flex items-center gap-2 flex-wrap mb-3">
            <Image src={Avax} alt="AVAX" className="w-6 h-6" />
            <h2 className="text-lg sm:text-xl font-bold">Stake Avalance (AVAX)</h2>
            <button className="text-xs px-2 py-0.5 bg-red-500/10 text-red-400 rounded-md">⚠</button>
          </div>

          <div className="flex flex-wrap gap-2">
            <button className="text-xs bg-purple-600 px-3 py-1 rounded-lg font-medium">Upgrade</button>
            <button className="text-xs bg-white/10 px-3 py-1 rounded-lg font-medium">Unstake</button>
            <button className="text-xs border border-white/10 px-3 py-1 rounded-lg text-white font-medium">
              View Profile
            </button>
          </div>
        </div>

        {/* Investment Period */}
        <div className="bg-[#141420] p-4 rounded-xl w-full lg:w-72">
          <h4 className="text-sm font-semibold mb-1">Investment Period</h4>
          <p className="text-xs text-gray-400 mb-2">Contribution Period (Month)</p>
          <div className="flex justify-between text-xs text-gray-300 mb-1">
            <span>4 Month</span>
            <span className="text-purple-400">6 Month</span>
          </div>
          <Slider defaultValue={[40]} max={100} step={1} className="w-full" />
        </div>
      </div>

      {/* Reward Balance */}
      <div className="text-4xl sm:text-5xl font-bold text-white tracking-wide">
        31.<span className="text-gray-300">39686</span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 text-sm">
        <div className="bg-[#141420] p-4 rounded-xl">
          <p className="text-gray-400 text-xs mb-1">Momentum</p>
          <h4 className="font-semibold mb-1">Staked Tokens Trend</h4>
          <p className="text-red-400 flex items-center gap-1">
            -0.82% <ArrowDown className="w-3 h-3" />
            <span className="text-gray-400 ml-auto">24H</span>
          </p>
        </div>

        <div className="bg-[#141420] p-4 rounded-xl">
          <p className="text-gray-400 text-xs mb-1">General</p>
          <h4 className="font-semibold mb-1">Price</h4>
          <p className="text-red-400 flex items-center gap-1">
            $41.99 <ArrowDown className="w-3 h-3" /> -1.09%
            <span className="text-gray-400 ml-auto">24H</span>
          </p>
        </div>

        <div className="bg-[#141420] p-4 rounded-xl">
          <p className="text-gray-400 text-xs mb-1">Risk</p>
          <h4 className="font-semibold mb-1">Staking Ratio</h4>
          <p className="text-white">60.6%</p>
        </div>

        <div className="bg-[#141420] p-4 rounded-xl">
          <p className="text-gray-400 text-xs mb-1">Reward</p>
          <h4 className="font-semibold mb-1">Reward Ratio</h4>
          <p className="text-purple-400 flex sm:flex-column items-center justify-between">
            2.23% <span className="text-xs text-gray-400">24H Ago</span>
          </p>
          <p className="text-white mt-1 text-sm">1.44%</p>
        </div>
      </div>
    </div>
  );
}
