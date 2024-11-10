// src/components/layout/Sidebar.tsx
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignOutButton } from "@clerk/nextjs";
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  Settings, 
  LogOut 
} from "lucide-react";

const adminLinks = [
  { href: "/dashboard/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/admin/users", label: "Users", icon: Users },
  { href: "/dashboard/admin/settings", label: "Settings", icon: Settings },
];

const clubLinks = [
  { href: "/dashboard/club", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/club/vacancies", label: "Vacancies", icon: Briefcase },
  { href: "/dashboard/club/settings", label: "Settings", icon: Settings },
];

const agentLinks = [
  { href: "/dashboard/agent", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/agent/players", label: "Players", icon: Users },
  { href: "/dashboard/agent/settings", label: "Settings", icon: Settings },
];

const playerLinks = [
  { href: "/dashboard/player", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/player/vacancies", label: "Vacancies", icon: Briefcase },
  { href: "/dashboard/player/settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  
  // TODO: Replace with actual role check from your database
  const userRole = "admin"; // This will be replaced with actual user role later
  
  const links = {
    admin: adminLinks,
    club: clubLinks,
    agent: agentLinks,
    player: playerLinks,
  }[userRole] || [];

  return (
    <div className="menu p-4 w-80 min-h-full bg-base-100">
      {/* Logo/Title */}
      <div className="flex items-center gap-2 px-2 mb-4">
        <div className="avatar placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
            <span className="text-xl">TL</span>
          </div>
        </div>
        <span className="text-xl font-bold">TransferLink</span>
      </div>

      {/* Navigation Links */}
      <ul className="menu menu-lg">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={isActive ? "active" : ""}
              >
                <Icon className="w-5 h-5" />
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Bottom Section */}
      <div className="mt-auto border-t pt-4">
        <SignOutButton>
          <button className="btn btn-ghost w-full justify-start gap-2">
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </SignOutButton>
      </div>
    </div>
  );
}