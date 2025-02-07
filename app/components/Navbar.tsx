import Link from "next/link";
import Image from "next/image";
import Slotify from "@/public/slotify.png";
import { Button } from "@/components/ui/button";
import { AuthModal } from "./AuthModal";

export function Navbar() {
  return (
    <div className="flex py-5 items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <Image src={Slotify} alt="logo" className="size-10" />
        <h4 className="text-3xl font-semibold">
          <span className="text-primary">Slot</span>Ify
        </h4>
      </Link>
      <AuthModal />
    </div>
  );
}
