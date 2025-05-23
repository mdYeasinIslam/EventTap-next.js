'use client'

import { Heart, ShoppingCart, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type NavbarProps = {
    name: string;
    path: string;

};

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const navElement = ({name,path}:NavbarProps)=>{
        return (
            <div onClick={()=>setMenuOpen(false)} className={`font-medium  text-black`}>
                <Link href={`${path}`} className="hover:text-blue-500 text-[18px]">{name}</Link>
            </div>
        )
    }
    return (   
          <header className="absolute z-10 w-full">
            <nav className=" px-24 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={500}
                  height={500}
                  className="w-6 h-6"
                />
                <span className="font-bold text-[18px] text-[#3a0e0e] ">Event Tap</span>
              </div>

              {/* ✅ Fixed responsive nav links */}
              <div className="text-lg font-medium flex items-center gap-6" >
              
                    {navElement({ name: 'Home', path: '/' })}
                    {navElement({ name: 'Events', path: '/events' })}
                    {navElement({ name: 'Places', path: '/places' })}
                    {navElement({ name: 'Map View', path: '/map-view' })}
              </div>

              <Link
                href="/profile"
                className="flex items-center gap-1 text-[#3a0e0e] hover:text-pink-600 transition-colors"
              >
                <span className="hidden md:inline">Profile</span>
              </Link>
              
            </nav>

           </header>
        
    );
};

export default Navbar;
