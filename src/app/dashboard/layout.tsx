import type { Metadata } from "next";


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

        {/* LEFT */}
        <div className="w-1/6 bg-fuchsia-300 md:w-[8%] lg:w-[16%] xl:w-[14%] ">LEFT</div>


        {/* RIGHT */}
        <div className="w-5/6 md:w-[92%] lg:w-[84%] xl:w-[86%] bg-fuchsia-600">RIGHT</div>

    </div>
}
