"use client";
import SidebarItem from "@/component/SidebarItem";
import {
  Settings,
  Briefcase,
  Timer,
  Calendar,
  UserCheck,
  FileText,
  DollarSign,
  CheckSquare,
  Users,
  Monitor,
  Shield,
  CreditCard,
  FolderOpen,
} from "lucide-react";

export default function layout({ activeMenu }) {
  const menus = {
    Personnel: [
      { icon: <Users />, label: "Employee List" },
      { icon: <Briefcase />, label: "Designation" },
      { icon: <Calendar />, label: "Leave Setup" },
    ],

    Device: [
      { icon: <Monitor />, label: "Device List" },
      { icon: <Settings />, label: "Device Config" },
    ],

    Attendance: [
      { icon: <Settings />, label: "Setting Guide" },
      { icon: <Briefcase />, label: "Setup", active: true },
      { icon: <Timer />, label: "Rule" },
      { icon: <Calendar />, label: "Shift" },
      { icon: <FileText />, label: "Daily Report" },
      { icon: <FileText />, label: "Weekly Report" },
      { icon: <FileText />, label: "Monthly Report" },
      { icon: <FileText />, label: "Summary Report" },
      { icon: <Settings />, label: "Configurations" },
    ],

    Payroll: [
      { icon: <DollarSign />, label: "Salary Sheet" },
      { icon: <FileText />, label: "Payslip" },
      { icon: <CreditCard />, label: "Overtime" },
    ],

    "Access Control": [
      { icon: <Shield />, label: "Access Level" },
      { icon: <Monitor />, label: "Device Permissions" },
    ],

    Meeting: [
      { icon: <Calendar />, label: "Room Booking" },
      { icon: <Users />, label: "Meeting Attendance" },
    ],

    MTD: [
      { icon: <FolderOpen />, label: "MTD History" },
      { icon: <Settings />, label: "MTD Config" },
    ],

    System: [
      { icon: <Settings />, label: "System Logs" },
      { icon: <Users />, label: "User Roles" },
      { icon: <Shield />, label: "Permissions" },
    ],
  };

  const sidebarItems = menus[activeMenu] || [];

  return (
    <div className="min-h-screen w-64 bg-gray-900 text-gray-300">
      <div className="p-4">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700">
            <Settings className="h-6 w-6 text-cyan-400" />
          </div>
          <span className="text-lg font-semibold">{activeMenu}</span>
        </div>

        <nav className="space-y-1">
          {sidebarItems.map((item, i) => (
            <SidebarItem
              key={i}
              icon={item.icon}
              label={item.label}
              active={item.active}
            />
          ))}
        </nav>
      </div>
    </div>
  );
}
