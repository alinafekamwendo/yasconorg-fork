"use client";

import { CmsUserRecord } from "@/lib/cms/constants";
import { useState } from "react";
import { Menu, X, BarChart3, Plus, FileText, Users, LogOut, Image, Users2, Image as ImageIcon, FileText as FileTextIcon } from "lucide-react";

interface SidebarProps {
  user: CmsUserRecord;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onLogout: () => void;
  canManageUsers: boolean;
}

export default function DashboardSidebar({ user, activeTab, onTabChange, onLogout, canManageUsers }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "create", label: "Create Content", icon: Plus },
    { id: "manage", label: "Manage Content", icon: FileText },
    { id: "hero", label: "Hero Slides", icon: Image },
    { id: "teams", label: "Teams & Board", icon: Users2 },
    { id: "media", label: "Gallery & Documents", icon: ImageIcon },
    ...(canManageUsers ? [{ id: "users", label: "Users", icon: Users }] : []),
  ];

  return (
    <section>
      <button onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-40 md:hidden bg-slate-700 text-white p-2 rounded-lg">
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside className={`fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white transform transition-transform md:translate-x-0 ${mobileOpen ? "translate-x-0" : "-translate-x-full"} z-30 overflow-y-auto`}>
        <div className="p-6 flex flex-col h-full">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-slate-100">YASCON CMS</h2>
            <p className="text-xs text-slate-400 mt-1">Content Management</p>
          </div>
          <div className="mb-8 pb-6 border-b border-slate-700">
            <p className="text-xs text-slate-400 mb-1">Logged in as</p>
            <p className="font-semibold text-slate-100">{user.name}</p>
            <p className="text-xs text-slate-400 mt-1 capitalize">{user.role.replace("_", " ")} · {user.region}</p>
          </div>
          <nav className="space-y-1 flex-1">
            {menuItems.map(({ id, label, icon: Icon }) => (
              <button key={id} onClick={() => { onTabChange(id); setMobileOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${activeTab === id ? "bg-blue-600 text-white" : "text-slate-300 hover:bg-slate-800"}`}>
                <Icon size={18} />
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </nav>
          <button onClick={onLogout} className="w-full flex items-center gap-3 px-4 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-200">
            <LogOut size={18} />
            <span className="text-sm font-medium">Sign out</span>
          </button>
        </div>
      </aside>

      {mobileOpen && <div className="fixed inset-0 bg-black/50 z-20 md:hidden" onClick={() => setMobileOpen(false)} />}
    </section>
  );
}
