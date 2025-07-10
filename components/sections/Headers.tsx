"use client"

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"
import { navigation } from "../constants";
import Button from "../customs/Button";
import MenuSvg from "../customs/Menu";
import { HamburgerMenu } from "../customs/Header";

const Header: React.FC = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("overflow-hidden", open);
        return () => document.body.classList.remove("overflow-hidden");
    }, [open]);

    const toggleMenu = () => setOpen((prev) => !prev);
    const closeMenu = () => open && setOpen(false);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-n-6 ${open ? "bg-n-8" : "bg-n-8/90 backdrop-blur-lg"
                }`}
        >
            <div className="relative flex items-center justify-between px-4 py-4 lg:px-10">
                {/* Logo kiri */}
                <Link href="#hero" scroll={false} className="flex items-center shrink-0 z-10">
                    <Image src="/logo.png" width={48} height={48} alt="Pulse Logo" priority />
                </Link>

                {/* Navigasi Tengah */}
                <nav
                    className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 xl:gap-10"
                    role="navigation"
                >
                    {navigation
                        .filter((item) => !item.onlyMobile)
                        .map((item) => (
                            <Link
                                key={item.id}
                                href={item.url}
                                scroll={false}
                                onClick={closeMenu}
                                className={`text-sm font-semibold uppercase tracking-wide transition-colors ${pathname === item.url
                                        ? "text-white"
                                        : "text-white/50 hover:text-white"
                                    }`}
                            >
                                {item.title}
                            </Link>
                        ))}
                </nav>

                {/* Auth Buttons kanan */}
                <div className="hidden lg:flex items-center gap-4 z-10">
                    <Link
                        href="#login"
                        scroll={false}
                        className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white border border-white/10 rounded-lg backdrop-blur-md transition-all duration-300"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="#signup"
                        scroll={false}
                        className="px-5 py-2 text-sm font-semibold bg-primary text-white rounded-xl shadow-md hover:bg-primary/90 transition-all duration-300"
                    >
                        Sign Up
                    </Link>
                </div>

                {/* Toggle Button Mobile */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden p-2 text-white z-[60]"
                    aria-label="Toggle Menu"
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="lg:hidden bg-n-8 px-6 py-8 shadow-inner"
                    >
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.07 }
                                }
                            }}
                            className="flex flex-col items-start space-y-4"
                        >
                            {/* Mobile Navigation Items */}
                            {navigation
                                .filter((item) => !item.onlyMobile)
                                .map((item) => (
                                    <motion.div
                                        key={item.id}
                                        variants={{
                                            hidden: { opacity: 0, x: -10 },
                                            visible: { opacity: 1, x: 0 }
                                        }}
                                    >
                                        <Link
                                            href={item.url}
                                            scroll={false}
                                            onClick={closeMenu}
                                            className="text-lg font-semibold uppercase text-white/90 hover:text-primary transition-colors"
                                        >
                                            {item.title}
                                        </Link>
                                    </motion.div>
                                ))}

                            <hr className="my-4 border-white/10 w-full" />

                            {/* Mobile Auth Buttons */}
                            {navigation
                                .filter((item) => item.onlyMobile)
                                .map((item) => (
                                    <motion.div
                                        key={item.id}
                                        variants={{
                                            hidden: { opacity: 0, y: 10 },
                                            visible: { opacity: 1, y: 0 }
                                        }}
                                        className="w-full"
                                    >
                                        {item.title.toLowerCase().includes("sign in") ? (
                                            <Link
                                                href={item.url}
                                                scroll={false}
                                                onClick={closeMenu}
                                                className="block w-full text-center text-sm font-medium text-white/70 hover:text-white border border-white/10 backdrop-blur-sm px-4 py-2 rounded-lg transition-all duration-300"
                                            >
                                                {item.title}
                                            </Link>
                                        ) : (
                                            <Link
                                                href={item.url}
                                                scroll={false}
                                                onClick={closeMenu}
                                                className="block w-full text-center bg-primary text-white text-sm font-semibold px-5 py-2 rounded-xl shadow-md hover:bg-primary/90 transition-all duration-300"
                                            >
                                                {item.title}
                                            </Link>
                                        )}
                                    </motion.div>
                                ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
