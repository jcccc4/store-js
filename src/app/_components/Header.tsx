import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlignJustify, ShoppingCart, UserRound } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-14 ml-6 mr-2">
      <Image src={"/Logo.png"} alt={"Company Logo"} width={140} height={32} className="h-6 w-[105px]"/>
      <Input placeholder="Search" className="hidden w-[540px] bg-[#EBEBEB]" />
      <div>
        <Button variant="ghost" size={"sm"}>
          <UserRound className="" size={24} /> <span className="hidden">Sign In</span>
        </Button>
        <Button variant="ghost" size={"sm"}>
          <ShoppingCart className="" size={24}/> <span className="hidden">Cart</span>
        </Button>
        <Button variant="ghost" >
          <AlignJustify  className="" size={24} /> <span className="hidden">Cart</span>
        </Button>
      </div>
    </header>
  );
}
