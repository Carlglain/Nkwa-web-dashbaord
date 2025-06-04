
import { Bell, Search, Settings } from "lucide-react";
import Image from "next/image";
import avatar from '../assets/profile.png'
export default function Topbar() {
  return (
    <header className="w-full bg-[#141420] px-4 md:px-6 py-7 flex flex-col md:flex-row md:items-center md:justify-between border-b border-[#1F1F2E] gap-4 md:gap-0">
      {/* Left Side: User Info */}
      <div className="flex items-center justify-between md:justify-start gap-4 w-full md:w-auto">
        <div className="flex items-center gap-3">
          <Image
            src={avatar}
            alt="User Avatar"
            className="w-9 h-9 rounded-full object-cover"
          />
          <div className="text-left hidden sm:block">
            <p className="text-xs text-gray-400">@ryan097</p>
            <h4 className="text-sm font-semibold text-white">Ryan Crawford</h4>
          </div>
        </div>

        <button className="ml-auto md:ml-4 bg-purple-600 hover:bg-purple-700 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-lg">
          Deposit 💼
        </button>
      </div>

      {/* Right Side: Search + Icons */}
      <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">
        {/* Notification */}
        <div className="relative">
          <Bell className="w-5 h-5 text-gray-300" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full" />
        </div>

        {/* Search */}
        <div className="relative hidden sm:block w-32 md:w-64">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-1.5 pl-8 pr-3 rounded-lg bg-[#1C1C2E] text-sm placeholder:text-gray-400 text-white focus:outline-none"
          />
          <Search className="absolute top-2.5 left-2.5 text-gray-400 w-4 h-4" />
        </div>

        {/* Search Icon (mobile) */}
        <Search className="sm:hidden w-5 h-5 text-gray-400" />

        {/* Settings */}
        <Settings className="w-5 h-5 text-gray-300 cursor-pointer hover:text-white" />
      </div>
    </header>
  );
}
