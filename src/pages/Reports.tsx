import { motion } from "framer-motion";
import { Download, FileText, Users, CalendarCheck } from "lucide-react";

const reports = [
  { title: "Student Performance Report", desc: "Comprehensive analytics across all courses", icon: FileText, type: "PDF" },
  { title: "Attendance Summary", desc: "Monthly attendance records and trends", icon: CalendarCheck, type: "CSV" },
  { title: "Course Progress Report", desc: "Completion rates and milestone tracking", icon: FileText, type: "PDF" },
  { title: "Student Engagement Report", desc: "Participation metrics and activity logs", icon: Users, type: "CSV" },
  { title: "Grade Distribution", desc: "Statistical breakdown by course and section", icon: FileText, type: "PDF" },
];

const Reports = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-semibold tracking-tight text-foreground">Reports</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {reports.map((r, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="bg-card p-6 rounded-xl border border-border/60 shadow-card flex items-start justify-between hover:-translate-y-px transition-transform"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <r.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">{r.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{r.desc}</p>
              <span className="inline-block mt-2 text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded">{r.type}</span>
            </div>
          </div>
          <button className="p-2 rounded-lg hover:bg-muted transition-colors">
            <Download className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
          </button>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Reports;
