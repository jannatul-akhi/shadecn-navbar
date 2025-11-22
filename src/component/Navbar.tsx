"use client";

import { Bell } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface NavbarProps {
  activeMenu: string;
  setActiveMenu: Dispatch<SetStateAction<string>>;
}

export default function Navbar({ activeMenu, setActiveMenu }: NavbarProps) {
  const menuItems = [
    "Personnel",
    "Device",
    "Attendance",
    "Access Control",
    "Payroll",
    "Meeting",
    "MTD",
    "System",
  ];

  return (
    <nav className="bg-gradient-to-r from-cyan-500 to-blue-700 text-white shadow-lg">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-12">
          <h1 className="text-4xl font-bold italic">
            <span className="text-black">ZK</span>Teco
          </h1>

          <div className="flex items-center gap-1">
            {menuItems.map((item) => {
              const isActive = item === activeMenu;
              return (
                <button
                  key={item}
                  onClick={() => setActiveMenu(item)}
                  className={`relative px-4 py-2.5 text-sm font-medium tracking-wide transition-all ${
                    isActive
                      ? "rounded-md bg-white/25 shadow-sm"
                      : "rounded-md hover:bg-white/15"
                  }`}
                >
                  {item}

                  {isActive && (
                    <span className="pointer-events-none absolute inset-0 rounded-md bg-white opacity-10"></span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="relative">
            <Bell className="h-6 w-6 cursor-pointer hover:opacity-80" />
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold">
              60
            </span>
          </div>

          <div className="h-10 w-10 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </nav>
  );
}
