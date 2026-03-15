import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Eye, CheckCircle, Clock, AlertTriangle, ClipboardCheck } from "lucide-react";

const assignments = [
  { title: "Algorithm Design HW5", course: "CSC-301", due: "Mar 20, 2026", submissions: 42, total: 52, status: "active" },
  { title: "Network Protocols Quiz", course: "CSC-401", due: "Mar 18, 2026", submissions: 48, total: 48, status: "grading" },
  { title: "SQL Queries Lab", course: "CSC-302", due: "Mar 15, 2026", submissions: 50, total: 55, status: "graded" },
  { title: "OS Process Management", course: "CSC-403", due: "Mar 22, 2026", submissions: 12, total: 41, status: "active" },
  { title: "UML Diagrams Project", course: "CSC-501", due: "Mar 25, 2026", submissions: 0, total: 44, status: "active" },
];

const statusConfig = {
  active: { label: "Active", icon: Clock, cls: "bg-primary/10 text-primary" },
  grading: { label: "Needs Grading", icon: AlertTriangle, cls: "bg-warning/10 text-warning" },
  graded: { label: "Graded", icon: CheckCircle, cls: "bg-success/10 text-success" },
};

const filters = [
  { key: "all", label: "All" },
  { key: "active", label: "Active" },
  { key: "grading", label: "Grading" },
  { key: "graded", label: "Graded" },
] as const;

type FilterKey = (typeof filters)[number]["key"];

const Assignments = () => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filtered = activeFilter === "all"
    ? assignments
    : assignments.filter((a) => a.status === activeFilter);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">Assignments</h1>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-all active:scale-[0.98] flex items-center gap-2">
          <Plus className="w-4 h-4" /> Create Assignment
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              activeFilter === f.key
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-xl border border-border/60 shadow-card overflow-hidden"
      >
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="text-left px-6 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Assignment</th>
              <th className="text-left px-6 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Course</th>
              <th className="text-left px-6 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Due Date</th>
              <th className="text-left px-6 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Submissions</th>
              <th className="text-left px-6 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Status</th>
              <th className="text-left px-6 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((a, i) => {
              const s = statusConfig[a.status as keyof typeof statusConfig];
              return (
                <motion.tr
                  key={a.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                  className="border-b border-border/60 hover:bg-muted/30 transition-colors"
                >
                  <td className="px-6 py-4 font-medium text-foreground">{a.title}</td>
                  <td className="px-6 py-4 text-muted-foreground">{a.course}</td>
                  <td className="px-6 py-4 text-muted-foreground tabular-nums">{a.due}</td>
                  <td className="px-6 py-4 tabular-nums text-foreground">{a.submissions}/{a.total}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${s.cls}`}>
                      <s.icon className="w-3 h-3" /> {s.label}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <button className="text-primary hover:underline flex items-center gap-1 text-sm">
                        <Eye className="w-3.5 h-3.5" /> View
                      </button>
                      <button className="text-muted-foreground hover:text-foreground hover:underline flex items-center gap-1 text-sm">
                        <ClipboardCheck className="w-3.5 h-3.5" /> Grade
                      </button>
                    </div>
                  </td>
                </motion.tr>
              );
            })}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-muted-foreground">No assignments found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default Assignments;
