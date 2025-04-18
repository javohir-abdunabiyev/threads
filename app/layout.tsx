import { Button } from "@/components/ui/button";
import "./globals.css";
import { LuHash } from "react-icons/lu";
import { GrHomeRounded } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsPerson } from "react-icons/bs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <aside>
        <div>
          <LuHash color="white" size={34} className="cursor-pointer" />
        </div>
        <div className="flex flex-col gap-[20px] mt-4">
          <Button className="w-[65px] h-[45px] cursor-pointer">
            <GrHomeRounded color="rgb(77, 77, 77)" className="!w-[24px] !h-[24px]" />
          </Button>
          <Button className="w-[65px] h-[45px] cursor-pointer">
            <IoSearchOutline color="rgb(77, 77, 77)" className="!w-[30px] !h-[30px]" />
          </Button>
          <Button className="w-[65px] h-[45px] cursor-pointer">
            <FaPlus color="rgb(77, 77, 77)" className="!w-[30px] !h-[30px]" />
          </Button >
          <Button className="w-[65px] h-[45px] cursor-pointer">
            <IoMdHeartEmpty color="rgb(77, 77, 77)" className="!w-[30px] !h-[30px]" />
          </Button>
          <Button className="w-[65px] h-[45px] cursor-pointer">
            <BsPerson color="rgb(77, 77, 77)" className="!w-[30px] !h-[30px]" />
          </Button>
        </div>
      </aside>
      <body>
        {children}
      </body>
    </html>
  );
}
