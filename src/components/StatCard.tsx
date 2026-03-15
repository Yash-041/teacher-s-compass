import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface StatCardProps {
  label: string;
  value: string;
  subtext: string;
  trend?: string;
  icon: LucideIcon;
  index?: number;
}

const StatCard = ({ label, value, subtext, trend, icon: Icon, index = 0 }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="bg-card p-6 rounded-xl border border-border/60 shadow-card hover:-translate-y-px transition-transform"
    >
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{label}</p>
        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
        </div>
      </div>
      <div className="flex items-baseline gap-2">
        <h3 className="text-2xl font-bold tabular-nums text-foreground">{value}</h3>
        {trend && <span className="text-xs font-medium text-success">{trend}</span>}
      </div>
      <p className="text-xs text-muted-foreground mt-1">{subtext}</p>
    </motion.div>
  );
};

export default StatCard;
