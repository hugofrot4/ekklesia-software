'use client';

import { ArrowLeftFromLine, ArrowRightFromLine, ContactRound, House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SidebarProps {
    isExpanded: boolean;
    toggle: () => void;
}

export function Sidebar({ isExpanded, toggle }: SidebarProps) {
    return (
        <aside className={`fixed left-0 top-0 h-screen p-4 border-r border-gray-300 transition-all duration-300 ease-in-out z-50 ${isExpanded ? 'w-64' : 'w-20'}`}>
            <div className={`flex items-center justify-between h-16 border-b border-gray-300 gap-1 ${!isExpanded && 'gap-0 justify-center relative'}`}>
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
                    onClick={toggle}
                    className={`rounded bg-white border border-gray-300 hover:bg-gray-200 transition-colors w-8 h-8 flex items-center justify-center ${!isExpanded && 'absolute top-[calc(50% - 16px)] -right-9'}`}
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