import Link from "next/link"
import { Separator } from "@/components/ui/separator";
import { AIGenerationDropdown } from "./ai-generation-dropdown"
import Logo from "@/assets/millennium.svg";
import { BasicInfoSection } from "./sections/basic-info";
import { SummarySection } from "./sections/summary";
export const InfosSidebar = () => {
    return (
        <aside className="w-full h-full p-6 overflow-y-auto">
            <div className="w-full flex items-center justify-between">
                <Link href="/dashboard/resumes">
                <Logo/>
                </Link>
                <AIGenerationDropdown/>
                
            </div>
            <Separator className="mt-3 mb-3"/>
            <BasicInfoSection/>
            <Separator className="mt-3 mb-3"/>
            <SummarySection/>
        </aside>
    )
}