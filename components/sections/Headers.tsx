"use client"

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { navigation } from "../constants";
import Button from "../customs/Button";
import MenuSvg from "../customs/Menu";
import { HamburgerMenu } from "../customs/Header";

const Header: React.FC = () => {
    const pathname = usePathname();
    const [openNavigation, setOpenNavigation] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        document.body.style.overflow = openNavigation ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [openNavigation]);

    const toggleNavigation = () => {
        setOpenNavigation((prev) => !prev);
    };

    const handleClick = () => {
        if (!openNavigation) return;
        setOpenNavigation(false);
    };

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
                }`}
        >
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <Link className="block w-[12rem] xl:mr-8" href="#hero" scroll={false}>
                    <Image
                        src="/logo.png"
                        width={60}
                        height={60}
                        alt="Brainwave"
                        priority
                    />
                </Link>

                <nav
                    className={`${openNavigation ? "flex" : "hidden"
                        } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
                >
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        {navigation.map((item) => (
                            <Link
                                key={item.id}
                                href={item.url}
                                scroll={false}
                                onClick={handleClick}
                                className={`block relative text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""
                                    } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${pathname === item.url ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
                                    } lg:leading-1 lg:hover:text-n-1 xl:px-12`}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>

                    {/* <HamburgerMenu /> */}
                </nav>

                <Link
                    href="#signup"
                    scroll={false}
                    className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
                >
                    Sign Up
                </Link>
                <Link
                    href="#signup"
                    scroll={false}
                    className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
                >
                    Sign In
                </Link>
            </div>
        </div>
    );
};

export default Header;
