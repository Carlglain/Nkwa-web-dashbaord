"use client";
import { useEffect, useState } from 'react';
import Topbar from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import StakingCard from "@/components/StakingCard";
import ETH from '../assets/ETH.png';
import BNB from '../assets/BNB.png';
import Matic from '../assets/Matic.png';
import LiquidStakingPortfolio from "@/components/PotforlioCTA";
import ActiveStaking from "@/components/ActiveStaking";
import TopAssetsHeader from "@/components/TopAssetHeader";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const ethData = [
    { value: 2300 }, { value: 2350 }, { value: 2280 },
    { value: 2400 }, { value: 2380 }, { value: 2480 },
    { value: 2460 }, { value: 2600 }, { value: 2700 }, { value: 2956 },
  ];

  const bnbData = [
    { value: 1600 }, { value: 1680 }, { value: 1620 },
    { value: 1750 }, { value: 1720 }, { value: 1810 },
    { value: 1850 }, { value: 1870 }, { value: 1920 }, { value: 2009 },
  ];

  const polygonData = [
    { value: 1100 }, { value: 1050 }, { value: 1120 },
    { value: 1000 }, { value: 1020 }, { value: 950 },
    { value: 940 }, { value: 970 }, { value: 980 }, { value: 987 },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="flex min-h-screen relative">
      {/* Show toggle button only when sidebar is closed on mobile */}
      {isMobile && !sidebarOpen && (
        <button
          className="fixed top-4 left-4 z-50 bg-purple-600 p-2 rounded-lg shadow-lg"
          onClick={() => setSidebarOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed z-40 md:relative w-64 h-full bg-[#1F1F2E] transition-transform duration-300 ease-in-out
        ${isMobile ? (sidebarOpen ? "translate-x-0" : "-translate-x-full") : "translate-x-0"}`}
      >
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Mobile overlay */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="flex-1 bg-[#141420] text-white min-h-screen px-2 sm:px-4 md:px-6 transition-all duration-300">
        <Topbar onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />

        <div className="flex flex-col lg:flex-row p-2 sm:p-4 gap-4 sm:gap-6 w-full">
          {/* Left side cards + header */}
          <div className="w-full lg:w-3/4">
            <TopAssetsHeader />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-4">
              <StakingCard
                Icon={ETH}
                name="Ethereum"
                symbol="ETH"
                rewardRate="13.62%"
                growth="6.25%"
                gcolor={{ color: '#4ade80' }}
                amount="$2,956"
                color="#8b5cf6"
                graphData={ethData}
              />
              <StakingCard
                Icon={BNB}
                name="BNB Chain"
                symbol="BNB"
                rewardRate="12.72%"
                growth="6.67%"
                gcolor={{ color: '#4ade80' }}
                amount="$2,009"
                color="#facc15"
                graphData={bnbData}
              />
              <StakingCard
                Icon={Matic}
                name="Polygon"
                symbol="Matic"
                rewardRate="6.29%"
                growth="1.89%"
                gcolor={{ color: 'red' }}
                amount="$0,987"
                color="#f87171"
                graphData={polygonData}
              />
            </div>
          </div>

          {/* Right panel */}
          <div className="w-full lg:w-1/4 mt-4 sm:mt-6 lg:mt-0">
            <LiquidStakingPortfolio />
          </div>
        </div>

        <div className="border-b p-2 border-[#1F1F2E] mx-2 sm:mx-4"></div>

        {/* Active staking section */}
        <div className="px-2 sm:px-4 mt-4 sm:mt-6">
          <ActiveStaking />
        </div>
      </main>
    </div>
  );
}
