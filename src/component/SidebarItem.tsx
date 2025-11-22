"use client";

export default function SidebarItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
        active ? "bg-cyan-600 text-white" : "hover:bg-gray-800"
      }`}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  );
}
