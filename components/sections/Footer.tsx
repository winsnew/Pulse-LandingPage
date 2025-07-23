"use client"
import { ArrowRight } from "lucide-react";
import {
    footerLinks,
    socialLinks
} from "../constants";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="relative text-slate-300 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-transparent rounded-full filter blur-3xl animate-pulse delay-1000"></div>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    <div className="lg:col-span-2">
                        <div className="flex items-center mb-6">
                            <span className="text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                                Pulse
                            </span>
                        </div>
                        <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                            Transform your business with intelligent analytics and automation.
                            Experience the future of data-driven decision making.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="group relative p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
                                >
                                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-white transition-colors duration-300" />
                                    <div className="absolute inset-0 bg-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {Object.entries(footerLinks).map(([category, links]) => (
                            <div key={category} className="space-y-4">
                                <h5 className="text-white font-semibold text-lg mb-6 relative">
                                    {category}
                                    <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-gray-500 to-white-500"></div>
                                </h5>
                                <ul className="space-y-3">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-slate-400 hover:text-white transition-all duration-300 group flex items-center"
                                            >
                                                {link.name}
                                                <ArrowRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="border-t border-slate-700/50 mt-10 pt-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm">
                        <p className="text-slate-400 text-sm">
                            © 2025 Pulse. All rights reserved. Building the future, one pulse at a time.
                        </p>
                        <div className="flex space-x-8">
                            <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-300 relative group">
                                Privacy Policy
                                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></div>
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-300 relative group">
                                Terms of Service
                                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer