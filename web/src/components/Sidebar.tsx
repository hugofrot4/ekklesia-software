'use client';

import { ArrowLeftFromLine, ArrowRightFromLine, ContactRound, House, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SidebarProps {
    isExpanded: boolean;
    toggle: () => void;
    isMobileOpen: boolean;
    toggleMobile: () => void;
}

export function Sidebar({ isExpanded, toggle, isMobileOpen, toggleMobile }: SidebarProps) {
    return (
        <aside className={`fixed w-full top-0 h-screen bg-white border-r border-gray-300 transition-all duration-300 ease-in-out z-50 p-4 py-16 md:py-4 md:left-0 ${isMobileOpen ? 'left-0' : '-left-full'}  ${isExpanded ? 'md:w-64' : 'md:w-20'}`}>
            <div className={`flex items-center md:justify-between h-16 border-b border-gray-300 gap-2 md:gap-1 ${!isExpanded && 'gap-0 justify-center relative'}`}>
                <Image
                    src="/ekklesia-logo.png"
                    alt="logotipo ekklesia software"
                    width={40}
                    height={40}
                    className={`${!isExpanded && 'mx-auto justify-self-center'}`}
                />
                <span className={`font-bold text-sm overflow-hidden whitespace-nowrap transition-all ${!isExpanded && 'hidden'}`}>
                    Ekklesia Software
                </span>
                <button
                    onClick={toggleMobile}
                    className={`fixed md:hidden top-4 left-4 rounded bg-white border border-gray-300 hover:bg-gray-200 transition-colors w-8 h-8 flex items-center justify-center`}
                >
                    {isMobileOpen ? <X size={16} /> : <Menu size={16} />}
                </button>
                <button
                    onClick={toggle}
                    className={`hidden md:flex rounded bg-white border border-gray-300 hover:bg-gray-200 transition-colors w-8 h-8 items-center justify-center ${!isExpanded && 'absolute top-[calc(50% - 16px)] -right-9'}`}
                >
                    {isExpanded ? <ArrowLeftFromLine size={16} /> : <ArrowRightFromLine size={16} />}
                </button>
            </div>
            <nav className="flex flex-col gap-2 pt-2">
                <NavItem
                    href="/"
                    icon={<House size={22} />}
                    label="Visão Geral"
                    isExpanded={isExpanded}
                />
                <NavItem
                    href="/visitors"
                    icon={<ContactRound size={22} />}
                    label="Visitantes"
                    isExpanded={isExpanded}
                />
            </nav>
        </aside>
    )
}

function NavItem({ href, icon, label, isExpanded }: { href: string; icon: React.ReactNode; label: string; isExpanded: boolean }) {
    return (
        <Link
            href={href}
            className={`flex items-center p-3 rounded-lg transition-colors group relative min-h-12 ${!isExpanded ? 'justify-center' : 'hover:bg-gray-50'}`}
            title={!isExpanded ? label : undefined}
        >
            <span className="shrink-0 group-hover:text-gray-950 transition-colors">
                {icon}
            </span>

            <span className={`ml-3 font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${isExpanded ? 'w-auto opacity-100' : 'w-0 opacity-0 absolute'}`}>
                {label}
            </span>
        </Link>
    )
}