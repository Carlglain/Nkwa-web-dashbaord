import {
  LayoutDashboard,
  PieChart,
  Banknote,
  Calculator,
  Database,
  Droplet,
  Lock,
  PlusCircle,
  Blocks,
  Infinity,
  Strikethrough,
  Caravan,
  Section,
  Zap,
} from "lucide-react";

export default function Sidebar({ onClose }) {
  return (
    <aside className="bg-[#141420] text-white w-[260px] py-4 pl-4 border-r border-[#1F1F2E] min-h-screen ">
      {/* Mobile close button */}
      <div className="md:hidden flex justify-end pr-4 mb-4">
        <button onClick={onClose} className="text-white text-xl font-bold">✕</button>
      </div>

      {/* Logo */}
      <div className="pb-6 border-b border-[#1F1F2E] pr-4">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <Blocks className="w-5 h-5 text-white-500" />
          <span>
            Stakent<sup className="text-xs">®</sup>
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-1">Top Staking Assets</p>
      </div>

      {/* Toggle Tabs */}
      <div className="flex gap-2 bg-[#1A1A1F] p-1 rounded-md mt-6 mb-4 text-sm pr-4">
        <button className="flex-1 bg-[#393941] rounded-md py-1 hover:bg-[#a8b2b6] hover:text-black transition-all">
          Staking
        </button>
        <button className="flex-1 text-gray-400 py-1 rounded-md hover:bg-[#a8b2b6] hover:text-black transition-all">
          Stablecoin
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-6 text-sm mt-4 pr-4 overflow-y-auto max-h-[65vh]">
        <div className="space-y-1">
          <MenuItem icon={LayoutDashboard} label="Dashboard" />
          <MenuItem icon={PieChart} label="Assets" />
          <MenuItem icon={Banknote} label="Staking Providers" />
          <MenuItem icon={Calculator} label="Staking Calculator" />
          <MenuItem icon={Database} label="Data API" />
          <MenuItem icon={Droplet} label="Liquid Staking" badge="Beta" />
        </div>

        <div>
          <p className="uppercase text-gray-400 text-xs mb-2">Active Staking</p>
          <MenuItem icon={Strikethrough} label="Asset Ethereum" amount="$7,699.00" bgcolor="#4B5563" />
          <MenuItem icon={Caravan} label="Asset Avalanche" amount="$1,340.00" bgcolor="#EF4444" />
          <MenuItem icon={Infinity} label="Asset Polygon (Matic)" amount="$640.00" bgcolor="#8B5CF6" />
          <MenuItem icon={Section} label="Asset Solana" amount="$980.00" bgcolor="#0EA5E9" />
        </div>
      </nav>

      <div className="border-b mt-4 pb-10 border-[#1F1F2E]"></div>
      <div className="fix mt-2 bg-[#1E1E1E] p-3 rounded-lg flex gap-3 items-start mr-3">
        <Zap className="text-purple-400 mt-1" />
        <div>
          <span className="text-sm font-medium text-white">Activate Super</span>
          <p className="text-xs text-gray-400 leading-tight">
            Unlock all features on Stakent
          </p>
        </div>
      </div>
    </aside>
  );
}

function MenuItem({ icon: Icon, label, amount, badge, bgcolor }) {
  return (
    <div className="flex justify-between items-center group cursor-pointer hover:bg-[#1E1E1E] px-3 py-2 rounded-lg transition-all">
      <div className="flex items-center gap-3">
        <Icon
          className="w-5 h-5 text-white group-hover:text-purple-400"
          style={bgcolor ? { backgroundColor: bgcolor, padding: "2px", borderRadius: "4px" } : {}}
        />
        <span className="text-sm">{label}</span>
        {badge && (
          <span className="ml-2 px-2 py-0.5 text-[10px] rounded bg-purple-300 text-black">
            {badge}
          </span>
        )}
      </div>
      {amount && (
        <span className="text-xs text-gray-400 group-hover:text-white">
          {amount}
        </span>
      )}
    </div>
  );
}
