import { motion } from "framer-motion";
import { Mail, Phone, Building2, BookOpen, Briefcase, Hash, Clock, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const profileData = {
  name: "Dr. Demetrios Aris",
  email: "d.aris@university.edu",
  department: "Computer Science",
  institution: "Metropolitan University",
  employeeId: "EMP-2024-0847",
  subjects: ["Data Structures", "Algorithms", "Machine Learning", "Database Systems"],
  experience: "12 Years",
  phone: "+1 (555) 234-5678",
};

const ViewProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">Teacher Profile</h1>
        <Button variant="outline" onClick={() => navigate("/settings")}>
          Edit Profile
        </Button>
      </div>

      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card p-8 rounded-xl border border-border/60 shadow-card"
      >
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-3xl font-bold">
            DA
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-semibold text-foreground">{profileData.name}</h2>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <Mail className="w-4 h-4" /> {profileData.email}
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <Building2 className="w-4 h-4" /> {profileData.department} · {profileData.institution}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Professional Information */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-card p-8 rounded-xl border border-border/60 shadow-card space-y-6"
      >
        <h3 className="text-base font-semibold text-foreground">Professional Information</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { icon: Hash, label: "Employee ID", value: profileData.employeeId },
            { icon: Building2, label: "Department", value: profileData.department },
            { icon: Clock, label: "Teaching Experience", value: profileData.experience },
            { icon: Phone, label: "Contact Number", value: profileData.phone },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center shrink-0">
                <item.icon className="w-4 h-4 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{item.label}</p>
                <p className="text-sm font-medium text-foreground mt-0.5">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center shrink-0">
              <BookOpen className="w-4 h-4 text-muted-foreground" />
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Subjects Teaching</p>
              <div className="flex flex-wrap gap-2 mt-1.5">
                {profileData.subjects.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ViewProfile;
