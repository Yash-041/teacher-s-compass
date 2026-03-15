import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const ProfileSettings = () => (
  <div className="space-y-6 max-w-2xl">
    <h1 className="text-2xl font-semibold tracking-tight text-foreground">Profile Settings</h1>

    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-card p-8 rounded-xl border border-border/60 shadow-card space-y-8">
      {/* Avatar */}
      <div className="flex items-center gap-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold">DA</div>
          <button className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-card border border-border shadow-card flex items-center justify-center hover:bg-muted transition-colors">
            <Camera className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
        <div>
          <p className="text-base font-semibold text-foreground">Dr. Aris</p>
          <p className="text-sm text-muted-foreground">Senior Lecturer · Computer Science</p>
        </div>
      </div>

      {/* Fields */}
      <div className="space-y-5">
        {[
          { label: "Full Name", value: "Dr. Demetrios Aris", type: "text" },
          { label: "Email Address", value: "d.aris@university.edu", type: "email" },
          { label: "Department", value: "Computer Science", type: "text" },
          { label: "New Password", value: "", type: "password" },
        ].map((f) => (
          <div key={f.label} className="space-y-1.5">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{f.label}</label>
            <input
              type={f.type}
              defaultValue={f.value}
              placeholder={f.type === "password" ? "Enter new password" : ""}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring/20 transition-all"
            />
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-all active:scale-[0.98]">
          Save Changes
        </button>
        <button className="bg-muted text-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-accent transition-all active:scale-[0.98]">
          Cancel
        </button>
      </div>
    </motion.div>
  </div>
);

export default ProfileSettings;
