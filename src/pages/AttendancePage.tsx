import { motion } from "framer-motion";
import { useState } from "react";
import { Download } from "lucide-react";

const students = [
  { name: "Maria Chen", id: "STU-001" },
  { name: "James Wilson", id: "STU-002" },
  { name: "Aisha Patel", id: "STU-003" },
  { name: "Carlos Rodriguez", id: "STU-004" },
  { name: "Yuki Tanaka", id: "STU-005" },
  { name: "Kevin O'Brien", id: "STU-006" },
  { name: "Lisa Thompson", id: "STU-007" },
  { name: "Ryan Mitchell", id: "STU-008" },
];

type Status = "P" | "A" | "L";
const statusStyles: Record<Status, string> = {
  P: "bg-success/10 text-success border-success/20",
  A: "bg-destructive/10 text-destructive border-destructive/20",
  L: "bg-warning/10 text-warning border-warning/20",
};

const AttendancePage = () => {
  const [attendance, setAttendance] = useState<Record<string, Status>>(
    Object.fromEntries(students.map(s => [s.id, "P"]))
  );

  const toggle = (id: string) => {
    const order: Status[] = ["P", "A", "L"];
    const next = order[(order.indexOf(attendance[id]) + 1) % 3];
    setAttendance(prev => ({ ...prev, [id]: next }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">Attendance</h1>
        <div className="flex gap-3">
          <button className="bg-muted text-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent transition-all active:scale-[0.98] flex items-center gap-2">
            <Download className="w-4 h-4" /> Export
          </button>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-xl border border-border/60 shadow-card overflow-hidden">
        <div className="px-6 py-4 border-b border-border bg-muted/30">
          <p className="text-sm font-semibold text-foreground">CSC-301 · Data Structures & Algorithms</p>
          <p className="text-xs text-muted-foreground mt-0.5">March 15, 2026 · 10:00 AM</p>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left px-6 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Student</th>
              <th className="text-left px-6 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">ID</th>
              <th className="text-center px-6 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map(s => (
              <tr key={s.id} className="border-b border-border/60 hover:bg-muted/30 transition-colors">
                <td className="px-6 py-3 font-medium text-foreground">{s.name}</td>
                <td className="px-6 py-3 text-muted-foreground tabular-nums">{s.id}</td>
                <td className="px-6 py-3 text-center">
                  <button
                    onClick={() => toggle(s.id)}
                    className={`inline-flex items-center justify-center w-10 h-7 rounded-full text-xs font-bold border transition-all active:scale-[0.95] ${statusStyles[attendance[s.id]]}`}
                  >
                    {attendance[s.id]}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default AttendancePage;
