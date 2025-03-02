import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
    title: "School Management Dashboard",
    description: "Next.js School Management System",
};

export default function Dashboardayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="h-screen flex">

        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
            <Link href={"/"} className="flex items-center justify-center lg:justify-start gap-2">
                <Image src="/logo.png" alt="logo" width={32} height={32} />
                <span className="hidden lg:block font-bold">SchoolingStats</span>
            </Link>

            <div className="hide-scrollbar overflow-y-scroll h-full">

                <Menu />
            </div>

        </div>




        {/* RIGHT */}
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] hide-scrollbar overflow-y-scroll flex flex-col">
            <Navbar />
            {children}
        </div>

    </div>
}
