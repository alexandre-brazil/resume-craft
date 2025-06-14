import { DashboardLayoutProps } from "@/types/layout";
import Logo from "@/assets/millennium.svg";
import { NavItems } from "@/components/pages/dashboard/nav-items";
import { UserDropDown } from "@/components/pages/dashboard/user-dropdown";
import { ModeToggle } from "@/components/shared/theme-toggle";

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="w-full h-screen overflow-hidden grid grid-cols-[300px_1fr]">
      <aside className="w-full h-full flex flex-col items-center border-r border-muted">
        <div className="w-full p-6 border-b border-muted">
        <Logo className="max-w-[100px] mx-auto" />
        <ModeToggle/>
        </div>
        <NavItems/>
        <div className="w-full mt-auto border-t border-muted px-3 py-4 flex items-center justify-between ">
          <UserDropDown/>
        </div>
      </aside>
      <main className="p-6 flex flex-col w-full h-full overflow-auto">
        {children}
      </main>
    </div>
  );
}
