import { DrawerDemo } from "@/component/Drawer";
import { NavigationMenuDemo } from "@/component/Navbar";
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
      <h1 className="text-center">Hello World</h1>
      <div className="flex items-center justify-center px-4 py-4">
        <NavigationMenuDemo />
      </div>
      <DrawerDemo />
    </>
  );
}
