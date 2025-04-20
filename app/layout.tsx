import { Button } from "@/components/ui/button";
import "./globals.css";
import { LuHash } from "react-icons/lu";
import { GrHomeRounded } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { LuPin } from "react-icons/lu";
import { CgMenuLeftAlt } from "react-icons/cg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-between mr-[50px] h-full">
          <div className="h-full flex flex-col justify-between items-center">
            <div>
              <Link href={"/"}>
                <LuHash color="white" size={34} className="cursor-pointer" />
              </Link>
            </div>
            <div className="flex flex-col gap-[20px] mt-4">
              <Link href={"/"}>
                <Button className="w-[65px] h-[45px] cursor-pointer bg-[]">
                  <GrHomeRounded color="rgb(77, 77, 77)" className="!w-[24px] !h-[24px]" />
                </Button>
              </Link>
              <Button className="w-[65px] h-[45px] cursor-pointer bg-[]">
                <IoSearchOutline color="rgb(77, 77, 77)" className="!w-[30px] !h-[30px]" />
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <div>
                    <Button className="w-[65px] h-[45px] cursor-pointer">
                      <FaPlus color="rgb(77, 77, 77)" className="!w-[30px] !h-[30px]" />
                    </Button>
                  </div>
                </DialogTrigger>
                <DialogContent className="bg-[rgb(24,24,24)] text-white">
                  <DialogHeader>
                    <DialogTitle>Новая ветка</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete your account
                      and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

              <Button className="w-[65px] h-[45px] cursor-pointer bg-[]">
                <IoMdHeartEmpty color="rgb(77, 77, 77)" className="!w-[30px] !h-[30px]" />
              </Button>
              <Button className="w-[65px] h-[45px] cursor-pointer bg-[]">
                <BsPerson color="rgb(77, 77, 77)" className="!w-[30px] !h-[30px]" />
              </Button>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="w-[65px] h-[45px] cursor-pointer bg-[]">
                      <LuPin color="rgb(77, 77, 77)" className="!w-[30px] !h-[30px]" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="w-[65px] h-[45px] cursor-pointer bg-[]">
                      <CgMenuLeftAlt color="rgb(77, 77, 77)" className="!w-[30px] !h-[30px]" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Внешний вид</DropdownMenuItem>
                    <DropdownMenuItem>Сообщить о проблеме</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          {children}
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <div className="fixed bottom-[30px] right-[20px]">
                  <Button className="w-[82px] h-[68px] rounded-[20px] cursor-pointer transition-transform duration-300 hover:scale-110 hover:bg-[]">
                    <FaPlus color="white" className="!w-[30px] !h-[30px]" />
                  </Button>
                </div>
              </DialogTrigger>
              <DialogContent className="bg-[rgb(24,24,24)] text-white">
                <DialogHeader>
                  <DialogTitle>Новая ветка</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </body>
    </html>
  );
}
