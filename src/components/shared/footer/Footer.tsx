import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const socialIcons = [
    { name: 'Facebook', icon: <Facebook />, link: '#' },
    { name: 'X', icon: '✖️', link: '#' },
    { name: 'Instagram', icon: <Instagram />, link: '#' },
    { name: 'LinkedIn', icon: <Linkedin />, link: '#' },
];

const Footer = () => {
    return (
        <footer className="bg-[#f8f5f3] pt-12 font-inherit text-[#222] text-base border-t border-[#eee]">
            <div className="flex flex-col md:flex-row justify-around items-start container mx-auto  gap-10">
                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold mb-4">Quick Links</h3>
                    <ul className="list-none p-0 m-0 leading-[2.2] space-y-1">
                        <li><a href="/" className="text-[#222] no-underline hover:underline">Home</a></li>
                        <li><a href="/events" className="text-[#222] no-underline hover:underline">Events</a></li>
                        <li><a href="/places" className="text-[#222] no-underline hover:underline">Places</a></li>
                        <li><a href="map-view" className="text-[#222] no-underline hover:underline">Map View</a></li>
                    </ul>
                </div>

                {/* Connect With Us */}
                <div>
                    <h3 className="font-semibold mb-4">Connect With Us</h3>
                    <div className="text-[#444] text-[15px] mb-3">
                        Follow us on social media for <br />
                        the latest updates and events:
                    </div>
                    <div className="flex gap-4">
                        {socialIcons.map((icon) => (
                            <a
                                key={icon.name}
                                href={icon.link}
                                aria-label={icon.name}
                                className="flex items-center justify-center w-9 h-9 rounded-full border-[1.5px] border-[#e94f7c]  text-xl bg-white transition-colors duration-200 hover:bg-[#e94f7c] hover:text-white"
                            >
                                {icon.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Download Our App */}
                <div>
                    <h3 className="font-semibold mb-4">Download Our App</h3>
                    <div className="text-[#444] text-[15px] mb-3">
                        Get the EventTap app for <br /> Android:
                    </div>
                    <a
                        href="#"
                        className="inline-flex items-center border-[1.5px] border-[#e94f7c] rounded-3xl px-5 py-2 text-[#e94f7c] font-medium text-base no-underline gap-2 bg-white hover:bg-[#e94f7c] hover:text-white transition-colors duration-200"
                    >
                        <span className="inline-flex items-center text-xl">
                            
                        <Image
                                src={`/playstore.png`}
                                alt='playstore icon'
                                width={500}
                                height={500}
                                className='w-7 h-7'
                        /></span>
                        Open Play store
                    </a>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="font-semibold mb-4">Contact Info</h3>
                    <div className="text-[#444] text-[15px] mb-2">
                        Email: support@eventtap.com
                    </div>
                    <div className="text-[#444] text-[15px]">
                        Phone: +1 (555) 123-4567
                    </div>
                </div>
            </div>
            <div className="text-center text-[#888] text-[15px] mt-12 mb-2">
                © 2025 EventTap. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
