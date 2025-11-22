import Attendance from "@/component/Attendance";
import { DrawerDemo } from "@/component/Drawer";
import Navbar from "@/component/Navbar";
import Sidebar from "@/component/Sidebar";
// import Navbar from "@/app/dashboard/components/Navbar";
// import Sidebar from "@/app/dashboard/components/Sidebar";
// import { NavigationMenuDemo } from "@/component/Navbar";
import SigninPage from "@/component/SignIn";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      {/* <Navbar activeMenu={undefined} setActiveMenu={undefined} />
      <Sidebar activeMenu={undefined} />

      <SigninPage /> */}
      <Attendance />
    </>
  );
}
