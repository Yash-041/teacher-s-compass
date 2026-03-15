import { useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard, BookOpen, ClipboardList, BarChart3,
  CalendarCheck, Bot, FileText, MessageSquare, Settings
} from "lucide-react";

const navItems = [
  { label: "Dashboard Overview", path: "/", icon: LayoutDashboard },
  { label: "My Courses", path: "/courses", icon: BookOpen },
  { label: "Assignments", path: "/assignments", icon: ClipboardList },
  { label: "Student Performance", path: "/performance", icon: BarChart3 },
  { label: "Attendance", path: "/attendance", icon: CalendarCheck },
  { label: "AI Teaching Assistant", path: "/ai-assistant", icon: Bot },
  { label: "Reports", path: "/reports", icon: FileText },
  { label: "Messages", path: "/messages", icon: MessageSquare },
  { label: "Profile Settings", path: "/settings", icon: Settings },
];

const DashboardSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <aside className="w-[260px] min-h-screen bg-sidebar flex flex-col fixed left-0 top-0 z-30">
      <div className="h-16 flex items-center px-6 border-b border-sidebar-active/30">
        <Bot className="w-7 h-7 text-sidebar-accent-icon mr-3" strokeWidth={1.5} />
        <span className="text-primary-foreground font-semibold text-lg tracking-tight">EduPilot</span>
      </div>

      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg w-full transition-all duration-150
                ${isActive
                  ? "bg-sidebar-active text-primary-foreground shadow-inner"
                  : "text-sidebar-foreground hover:text-primary-foreground hover:bg-sidebar-hover"
                }`}
            >
              <item.icon className={`w-5 h-5 shrink-0 ${isActive ? "text-sidebar-accent-icon" : ""}`} strokeWidth={1.5} />
              <span className="text-sm font-medium truncate">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-active/30">
        <div className="flex items-center gap-3 px-2">
          <div className="w-9 h-9 rounded-full bg-sidebar-active flex items-center justify-center text-primary-foreground text-sm font-semibold">
            DA
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-primary-foreground truncate">Dr. Aris</p>
            <p className="text-xs text-sidebar-foreground truncate">Computer Science</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
