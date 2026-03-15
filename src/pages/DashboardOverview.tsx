import { BookOpen, Users, ClipboardList, TrendingUp, Clock, Plus, Calendar, Download, CalendarCheck, CheckCircle, FileText, UserCheck, Send } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import StatCard from "@/components/StatCard";
import { motion } from "framer-motion";

const performanceData = [
  { week: "Week 1", avg: 72 }, { week: "Week 2", avg: 68 }, { week: "Week 3", avg: 75 },
  { week: "Week 4", avg: 71 }, { week: "Week 5", avg: 78 }, { week: "Week 6", avg: 82 },
  { week: "Week 7", avg: 79 }, { week: "Week 8", avg: 84 },
];

const recentActivity = [
  { icon: CheckCircle, text: 'Graded "Data Structures Quiz 3"', time: "10 min ago", color: "text-success" },
  { icon: FileText, text: 'New assignment posted: "Algorithm Design HW5"', time: "1 hour ago", color: "text-primary" },
  { icon: CalendarCheck, text: "Attendance updated for CSC-301", time: "2 hours ago", color: "text-warning" },
  { icon: Send, text: "Student submission received: Maria Chen", time: "3 hours ago", color: "text-muted-foreground" },
  { icon: UserCheck, text: "New student enrolled in CSC-401", time: "5 hours ago", color: "text-primary" },
];

const quickActions = [
  { label: "Create Assignment", icon: Plus, variant: "primary" as const },
  { label: "Schedule Class", icon: Calendar, variant: "secondary" as const },
  { label: "Export Report", icon: Download, variant: "secondary" as const },
  { label: "Take Attendance", icon: CalendarCheck, variant: "secondary" as const },
];

const DashboardOverview = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">Good morning, Dr. Aris.</h1>
        <p className="text-sm text-muted-foreground mt-1">You have 3 classes today. Next: CSC-401 at 10:00 AM</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard label="Total Courses" value="6" subtext="2 new this term" icon={BookOpen} index={0} />
        <StatCard label="Total Students" value="284" subtext="Across all courses" icon={Users} index={1} />
        <StatCard label="Pending Assignments" value="47" subtext="Awaiting grading" icon={ClipboardList} index={2} />
        <StatCard label="Avg Performance" value="78.4%" trend="+3.2%" subtext="vs. last month" icon={TrendingUp} index={3} />
        <StatCard label="Upcoming Classes" value="3" subtext="CSC-401 at 10:00 AM" icon={Clock} index={4} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Chart */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="lg:col-span-2 bg-card p-6 rounded-xl border border-border/60 shadow-card"
        >
          <h2 className="text-sm font-semibold text-foreground mb-4">Student Performance Trend</h2>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={performanceData}>
              <defs>
                <linearGradient id="perfGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(245, 58%, 51%)" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="hsl(245, 58%, 51%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 32%, 91%)" />
              <XAxis dataKey="week" tick={{ fontSize: 12 }} stroke="hsl(215, 16%, 47%)" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(215, 16%, 47%)" domain={[60, 90]} />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid hsl(214, 32%, 91%)", fontSize: 13 }} />
              <Area type="monotone" dataKey="avg" stroke="hsl(245, 58%, 51%)" fill="url(#perfGradient)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="bg-card p-6 rounded-xl border border-border/60 shadow-card"
        >
          <h2 className="text-sm font-semibold text-foreground mb-4">Recent Activity</h2>
          <div className="space-y-4 relative">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-border" />
            {recentActivity.map((a, i) => (
              <div key={i} className="flex items-start gap-3 relative pl-1">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0 z-10">
                  <a.icon className={`w-4 h-4 ${a.color}`} strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-foreground leading-snug">{a.text}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
        className="bg-card p-6 rounded-xl border border-border/60 shadow-card"
      >
        <h2 className="text-sm font-semibold text-foreground mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          {quickActions.map((action) => (
            <button
              key={action.label}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all active:scale-[0.98] ${
                action.variant === "primary"
                  ? "bg-primary text-primary-foreground hover:opacity-90"
                  : "bg-muted text-foreground hover:bg-accent"
              }`}
            >
              <action.icon className="w-4 h-4" strokeWidth={1.5} />
              {action.label}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardOverview;
