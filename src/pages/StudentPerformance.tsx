import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";

const courseScores = [
  { course: "CSC-301", avg: 76 }, { course: "CSC-401", avg: 82 },
  { course: "CSC-302", avg: 71 }, { course: "CSC-403", avg: 65 },
  { course: "CSC-501", avg: 79 }, { course: "CSC-601", avg: 88 },
];

const topStudents = [
  { name: "Maria Chen", avg: 94.2, trend: "+2.1%" },
  { name: "James Wilson", avg: 92.8, trend: "+1.4%" },
  { name: "Aisha Patel", avg: 91.5, trend: "+3.0%" },
  { name: "Carlos Rodriguez", avg: 89.7, trend: "-0.5%" },
  { name: "Yuki Tanaka", avg: 88.3, trend: "+1.8%" },
];

const needAttention = [
  { name: "Kevin O'Brien", avg: 52.1, issue: "3 missed assignments" },
  { name: "Lisa Thompson", avg: 58.4, issue: "Declining grades" },
  { name: "Ryan Mitchell", avg: 61.0, issue: "Low quiz scores" },
];

const StudentPerformance = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-semibold tracking-tight text-foreground">Student Performance</h1>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-card p-6 rounded-xl border border-border/60 shadow-card">
        <h2 className="text-sm font-semibold text-foreground mb-4">Average Scores by Course</h2>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={courseScores}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(214,32%,91%)" />
            <XAxis dataKey="course" tick={{ fontSize: 12 }} stroke="hsl(215,16%,47%)" />
            <YAxis tick={{ fontSize: 12 }} stroke="hsl(215,16%,47%)" domain={[50, 100]} />
            <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid hsl(214,32%,91%)", fontSize: 13 }} />
            <Bar dataKey="avg" fill="hsl(245,58%,51%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card p-6 rounded-xl border border-border/60 shadow-card">
        <h2 className="text-sm font-semibold text-foreground mb-4">Top Performing Students</h2>
        <div className="space-y-3">
          {topStudents.map((s, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-border/40 last:border-0">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center tabular-nums">{i + 1}</span>
                <span className="text-sm font-medium text-foreground">{s.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold tabular-nums text-foreground">{s.avg}%</span>
                <span className={`text-xs font-medium flex items-center gap-0.5 ${s.trend.startsWith("+") ? "text-success" : "text-destructive"}`}>
                  {s.trend.startsWith("+") ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {s.trend}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>

    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-card p-6 rounded-xl border border-border/60 shadow-card">
      <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
        <AlertTriangle className="w-4 h-4 text-warning" /> Students Needing Attention
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {needAttention.map((s, i) => (
          <div key={i} className="p-4 rounded-lg border border-destructive/20 bg-destructive/5">
            <p className="text-sm font-semibold text-foreground">{s.name}</p>
            <p className="text-lg font-bold tabular-nums text-destructive mt-1">{s.avg}%</p>
            <p className="text-xs text-muted-foreground mt-1">{s.issue}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default StudentPerformance;
