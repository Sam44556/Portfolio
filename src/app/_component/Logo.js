import Link from "next/link";
import logo from "../../../public/download.webp"; // Adjust the path as necessary
import Image from "next/image";
export default function Logo() {
  return (
     <Link href="/" className="flex items-center gap-4 z-10">
      {/* <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" /> */}
      <Image
        src={logo}
        height="40"
        quality={100}
        width="60"
        alt="portifolio logo"
        className="rounded-full object-cover"
      />
      <span className="text-xl font-semibold text-primary-100">
       Samuel Girma
      </span>
    </Link>
  );
}