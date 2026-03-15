import { Bell, Search } from "lucide-react";

const TopNavbar = () => {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-8 sticky top-0 z-20">
      <div className="flex items-center gap-3 bg-muted rounded-lg px-4 py-2 w-80">
        <Search className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
        <input
          type="text"
          placeholder="Search courses, students, assignments..."
          className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full"
        />
      </div>

      <div className="flex items-center gap-5">
        <button className="relative p-2 rounded-lg hover:bg-muted transition-colors">
          <Bell className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-semibold">
            DA
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground leading-tight">Dr. Aris</p>
            <p className="text-xs text-muted-foreground">Senior Lecturer</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
