import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ShoppingCart, UserRound } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-20 mx-20">
      <Image src={"/Logo.png"} alt={"Company Logo"} width={140} height={32} />
      <Input placeholder="Search" className="w-[540px] bg-[#EBEBEB]" />
      <div>
        <Button variant="ghost">
          <UserRound className="mr-2 h-4 w-4" /> Sign In
        </Button>
        <Button variant="ghost">
          <ShoppingCart className="mr-2 h-4 w-4" /> Cart
        </Button>
      </div>
    </header>
  );
}
