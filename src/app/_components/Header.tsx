import Image from "next/image";
import { Input } from "@/components/ui/input";
import { AlignJustify, ShoppingCart, UserRound } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-14 px-6 border-b border-[#0C4C7D]">
      <Image
        src={"/Logo.png"}
        alt={"Company Logo"}
        width={140}
        height={32}
        className="h-6 w-[105px]"
      />
      <Input placeholder="Search" className="hidden w-[540px] bg-[#EBEBEB]" />
      <div className="flex">
        <div className="m-1 p-2 hover:bg-slate-300 rounded-full">
          <UserRound size={24} color="white"/>
          <span className="hidden">Sign In</span>
        </div>
        <div className="m-1 p-2 hover:bg-slate-300 rounded-full">
          <ShoppingCart size={24} color="white"/>
          <span className="hidden">Cart</span>
        </div>
        <div className="m-1 p-2 hover:bg-slate-300 rounded-full">
          <AlignJustify size={24} color="white"/>
          <span className="hidden">Cart</span>
        </div>
      </div>
    </header>
  );
}
