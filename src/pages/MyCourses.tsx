import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";

const courses = [
  { name: "Data Structures & Algorithms", code: "CSC-301", students: 52, progress: 68, color: "bg-primary" },
  { name: "Computer Networks", code: "CSC-401", students: 48, progress: 45, color: "bg-success" },
  { name: "Database Systems", code: "CSC-302", students: 55, progress: 82, color: "bg-warning" },
  { name: "Operating Systems", code: "CSC-403", students: 41, progress: 35, color: "bg-destructive" },
  { name: "Software Engineering", code: "CSC-501", students: 44, progress: 58, color: "bg-primary" },
  { name: "Machine Learning", code: "CSC-601", students: 44, progress: 22, color: "bg-success" },
];

const MyCourses = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">My Courses</h1>
      <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-all active:scale-[0.98]">
        + Add Course
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {courses.map((c, i) => (
        <motion.div
          key={c.code}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="bg-card rounded-xl border border-border/60 shadow-card overflow-hidden hover:-translate-y-px transition-transform"
        >
          <div className={`h-2 ${c.color}`} />
          <div className="p-6 space-y-4">
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{c.code}</p>
              <h3 className="text-base font-semibold text-foreground mt-1">{c.name}</h3>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4" strokeWidth={1.5} />
              <span>{c.students} students</span>
            </div>
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium tabular-nums text-foreground">{c.progress}%</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${c.color} transition-all`} style={{ width: `${c.progress}%` }} />
              </div>
            </div>
            <button className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
              View Details <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default MyCourses;
