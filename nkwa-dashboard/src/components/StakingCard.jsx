"use client";
import Image from "next/image";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function StakingCard({
  Icon,
  name,
  symbol,
  rewardRate,
  growth,
  color,
  graphData,
  amount,
  gcolor
}) {
  return (
    <div className="bg-[#1C1C2E] rounded-2xl p-4 w-full sm:w-[300px] md:w-[340px] lg:w-80 text-white shadow hover:shadow-lg transition-all">
      {/* Top section */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <Image src={Icon} alt={symbol} className="w-6 h-6" />
          <div>
            <p className="text-xs text-gray-400">Proof of Stake</p>
            <h3 className="font-semibold text-sm">{name} ({symbol})</h3>
          </div>
        </div>
        <ArrowUpRight className="w-4 h-4 text-gray-400" />
      </div>

      {/* Reward Rate */}
      <div className="mt-4">
        <p className="text-sm text-gray-400">Reward Rate</p>
        <div className=" flex-column items-center gap-2">
          <p className="text-2xl font-bold mb-1">{rewardRate}</p>
          <span
            className="flex items-center text-sm font-medium px-2 py-0.5 rounded"
            style={gcolor}
          >
            <TrendingUp className="w-3 h-3 mr-1" />
            {growth}
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-4 relative h-24">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={graphData}>
            <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2} dot={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#26263a",
                borderColor: color,
                borderRadius: "4px",
                fontSize: "12px",
              }}
              labelClassName="text-white"
            />
          </LineChart>
        </ResponsiveContainer>

        {/* Tooltip marker */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-[#26263a] text-xs px-2 py-1 rounded-full text-white shadow-md border border-purple-400">
          +{amount}
        </div>
      </div>
    </div>
  );
}
