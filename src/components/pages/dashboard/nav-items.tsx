"use client";
import { Newspaper, SquareUser } from "lucide-react";
import { Button } from "../../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const NavItems = () => {
    const pathname = usePathname();
    const navItems = [
        {
        label: "Curriculos",
        icon: Newspaper,
        path: "/dashboard/resumes",
        },
        {
        label: "Configurações de conta",
        icon: SquareUser,
        path: "/dashboard/account",
        }
    ]
    return (
        <nav className="w-full flex flex-col gap-2 px-2 py-4">
            {navItems.map((item)=>{
                const isActive = pathname.startsWith(item.path);
                return (
                    <Link key={item.path} href={item.path}>
                        <Button variant="ghost" className={cn("w-full gap-2 justify-start",isActive && "bg-accent" )}>
                            <item.icon size={16} />
                            {item.label}
                        </Button>
                    </Link>
                )
            })}
        </nav>
    )
}