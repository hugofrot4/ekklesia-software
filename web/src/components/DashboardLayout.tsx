'use client';

import { useState } from "react";
import { Sidebar } from "./Sidebar";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isExpanded, setIsExpanded] = useState(true);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <div className="flex min-h-screen">
            <Sidebar
                isExpanded={isExpanded}
                isMobileOpen={isMobileOpen}
                toggle={() => setIsExpanded(!isExpanded)}
                toggleMobile={() => setIsMobileOpen(!isMobileOpen)}
            />

            <main
                className={`flex-1 p-8 transition-all duration-300 ease-in-out ${isExpanded ? 'md:ml-64' : 'md:ml-20'}`}
            >
                {children}
            </main>
        </div>
    );
}