"use client";

import React, { useState } from "react";
import {
  Clock,
  Users,
  Calendar,
  UserCheck,
  Coffee,
  Timer,
  Briefcase,
  FileText,
  Settings,
  BarChart3,
  CheckSquare,
  DollarSign,
  LogOut,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const Attendance = () => {
  const [expandedMenu, setExpandedMenu] = useState<string | null>("Attendance");

  const toggleMenu = (menu: string) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      {/* <div className="bg-gradient-to-r from-cyan-500 to-blue-700 text-white">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold">ZKTeco</h1>
            <div className="flex gap-6 text-sm">
              {[
                "Personnel",
                "Device",
                "Attendance",
                "Access Control",
                "Payroll",
                "Meeting",
                "MTD",
                "System",
              ].map((menu) => (
                <a
                  key={menu}
                  href="#"
                  onClick={() => toggleMenu(menu)}
                  className={`rounded px-3 py-2 ${
                    menu === expandedMenu
                      ? "bg-white/20 font-medium"
                      : "hover:bg-white/20"
                  }`}
                >
                  {menu}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="relative">
              <Bell className="h-6 w-6 cursor-pointer hover:opacity-80" />
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold">
                60
              </span>
            </div>

            <Link href="/signin">
              <div className="h-8 w-8 rounded-full bg-gray-300"></div>
            </Link>
          </div>
        </div>
      </div> */}

      <div className="flex">
        {/* Sidebar */}
        <div className="min-h-screen w-64 bg-gray-900 text-gray-300">
          <div className="p-4">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700">
                <BarChart3 className="h-6 w-6 text-cyan-400" />
              </div>
              <span className="text-lg font-semibold">Workbench</span>
            </div>

            <nav className="space-y-1">
              <SidebarItem icon={<Settings />} label="Setting Guide" />
              <SidebarItem icon={<Briefcase />} label="Setup" active />
              <SidebarItem icon={<Timer />} label="Rule" />
              <SidebarItem icon={<Calendar />} label="Shift" />

              {/* Attendance with Submenu */}
              <SidebarItem
                icon={<UserCheck />}
                label="Attendance"
                active={expandedMenu === "Attendance"}
                onClick={() =>
                  setExpandedMenu(
                    expandedMenu === "Attendance" ? null : "Attendance",
                  )
                }
                submenu={[
                  "Schedule Assignment",
                  "Schedule Preview",
                  "Approvals",
                  "Benefit Management",
                  "Transaction Report",
                  "Daily Report",
                  "Weekly Report",
                  "Monthly Report",
                  "Summary Report",
                  "Configurations",
                ]}
                expanded={expandedMenu === "Attendance"}
              />
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Schedule Setting Steps */}
          <div className="mb-10">
            <h2 className="mb-6 text-sm font-medium text-gray-600">
              Schedule Setting Steps
            </h2>
            <div className="flex items-center justify-center gap-12">
              <StepCard
                icon={<Coffee className="h-12 w-12 text-green-600" />}
                title="Set Break Time"
                subtitle="Set break time for employees"
              />
              <ArrowRight />
              <StepCard
                icon={<Clock className="h-12 w-12 text-green-600" />}
                title="Set Timetable"
                subtitle="Set the time when employees start and end work"
              />
              <ArrowRight />
              <StepCard
                icon={<Briefcase className="h-12 w-12 text-green-600" />}
                title="Set Shift"
                subtitle="Set shifts for employees"
              />
              <ArrowRight />
              <StepCard
                icon={<Users className="h-12 w-12 text-green-600" />}
                title="Set Schedule"
                subtitle="Assign shifts to employees"
              />
            </div>
            <div className="mt-6 flex justify-end">
              <Button className="bg-green-500 px-8 font-medium text-white hover:bg-green-600">
                Quick Setup
              </Button>
            </div>
          </div>

          <div className="grid max-w-4xl grid-cols-2 gap-16">
            {/* Attendance Calculation */}
            <Card className="border-2 border-dashed border-gray-300 bg-white p-8 transition-shadow hover:shadow-lg">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-xl bg-gray-100">
                  <FileText className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  Attendance Calculation
                </h3>
                <p className="text-sm text-gray-600">
                  Calculate attendance according to employees punch records
                </p>
              </div>
            </Card>

            {/* Generate Report */}
            <Card className="border-2 border-dashed border-gray-300 bg-white p-8 transition-shadow hover:shadow-lg">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-xl bg-gray-100">
                  <Calendar className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  Attendance Report
                </h3>
                <p className="text-sm text-gray-600">
                  View total time card of employees
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

// SidebarItem with optional submenu and dropdown arrow
const SidebarItem = ({
  icon,
  label,
  active = false,
  onClick,
  submenu,
  expanded = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
  submenu?: string[];
  expanded?: boolean;
}) => (
  <div>
    <div
      className={`flex cursor-pointer items-center justify-between gap-3 rounded-lg px-4 py-3 transition-colors ${
        active ? "bg-cyan-600 text-white" : "hover:bg-gray-800"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-sm">{label}</span>
      </div>
      {submenu && (
        <svg
          className={`h-4 w-4 text-gray-300 transition-transform ${
            expanded ? "rotate-90" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      )}
    </div>
    {submenu && expanded && (
      <div className="mt-1 ml-8 flex flex-col gap-1">
        {submenu.map((item) => (
          <div
            key={item}
            className="cursor-pointer rounded px-3 py-2 text-sm text-gray-300 hover:bg-gray-700"
          >
            {item}
          </div>
        ))}
      </div>
    )}
  </div>
);

const StepCard = ({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) => (
  <div className="w-64 rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md">
    <div className="mb-4 flex justify-center">{icon}</div>
    <h3 className="font-semibold text-gray-800">{title}</h3>
    <p className="mt-1 text-xs text-gray-600">{subtitle}</p>
  </div>
);

const ArrowRight = () => (
  <svg
    className="h-10 w-10 text-green-600"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

export default Attendance;
