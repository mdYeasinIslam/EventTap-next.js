"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavbarProps = {
  name: string;
  path: string;
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathName = usePathname();

  const navElement = ({ name, path }: NavbarProps) => {
    return (
      <li
        onClick={() => setMenuOpen(false)}
        className={`
          ${pathName === path || pathName.includes(path + "/")
            ? "font-semibold bg-white/30 lg:bg-transparent"
            : ""
          }
          ${pathName === "/events" || pathName ==='/places' ? "text-white" : "text-black"}
          duration-500 hover:text-blue-500 py-1 px-5 rounded-r-sm md:rounded-sm
        `}
      >
        <Link href={`${path}`} className="text-sm lg:text-[18px]">
          {name}
        </Link>
      </li>
    );
  };

  return (
    <header
      className={`w-full py-5 z-10 ${
        pathName === "/" || pathName === "/events" || pathName ==='/places' ? "absolute" : ""
      } ${pathName === "/events"  ? "text-white" : ""}`}
    >
      <nav className="px-5 md:px-10 lg:px-16 xl:px-24">
        <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* nav elements for sm device */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="focus:outline-none"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                {menuOpen ? (
                  <X className="w-6 h-6 invert-0" />
                ) : (
                  <svg
                    className="w-6 h-6 invert-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
              <ul
                className={`absolute top-15 duration-1000 left-0 w-1/2 h-[50vh] bg-gray-700/50 shadow-md flex flex-col gap-2 pt-6 z-20 ${
                  menuOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-700`}
              >
                {navElement({ name: "Home", path: "/" })}
                {navElement({ name: "Events", path: "/events" })}
                {navElement({ name: "Places", path: "/places" })}
                {navElement({ name: "Map View", path: "/map-view" })}
              </ul>
            </div>

            <Image
              src="/logo.png"
              alt="logo"
              width={500}
              height={500}
              className="w-6 h-6"
            />
            <p className="font-bold text-[18px] invert-0">Event Tap</p>
          </div>

          {/* Fixed responsive nav links */}
          <ul className="hidden md:flex items-center gap-6 font-medium">
            {navElement({ name: "Home", path: "/" })}
            {navElement({ name: "Events", path: "/events" })}
            {navElement({ name: "Places", path: "/places" })}
            {navElement({ name: "Map View", path: "/map-view" })}
          </ul>

          <Link
            href="/profile"
            className="flex items-center gap-1 text-[#3a0e0e] hover:text-pink-600 transition-colors"
          >
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
