'use client';

import { useState } from "react";
import { Sidebar } from "./Sidebar";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <div className="flex min-h-screen">
            <Sidebar
                isExpanded={isExpanded}
                toggle={() => setIsExpanded(!isExpanded)}
            />

            <main
                className={`flex-1 p-8 transition-all duration-300 ease-in-out ${isExpanded ? 'ml-64' : 'ml-20'}`}
            >
                {children}
            </main>
        </div>
    );
}