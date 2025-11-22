"use client";

import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const menuItems = [
  { label: "Personnel", href: "/personnel" },
  { label: "Device", href: "/device" },
  { label: "Attendance", href: "/attendance" },
  { label: "Access Control", href: "/access-control" },
  { label: "Payroll", href: "/payroll" },
  { label: "Meeting", href: "/meeting" },
  { label: "MTD", href: "/mtd" },
  { label: "System", href: "/system" },
];

export default function TopNav({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-700 text-white">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold">ZKTeco</h1>

            <nav className="flex gap-6 text-sm">
              {menuItems.map((item) => {
                const isActive = pathname.startsWith(item.href);

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={clsx(
                      "rounded px-3 py-2 transition-all hover:bg-white/20",
                      isActive && "bg-white/20 font-medium",
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="rounded bg-red-500 px-2 py-1 text-xs font-medium">
              60
            </div>
            <div className="h-8 w-8 rounded-full border-2 border-white bg-gray-300"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-gray-50">{children}</div>
    </>
  );
}
