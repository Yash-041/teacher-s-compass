import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Lock, Bell, Eye } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">Profile Settings</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="bg-muted/60 p-1 rounded-lg">
          <TabsTrigger value="personal" className="gap-2 text-xs"><Camera className="w-3.5 h-3.5" /> Personal Info</TabsTrigger>
          <TabsTrigger value="security" className="gap-2 text-xs"><Lock className="w-3.5 h-3.5" /> Account Security</TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2 text-xs"><Bell className="w-3.5 h-3.5" /> Notifications</TabsTrigger>
          <TabsTrigger value="privacy" className="gap-2 text-xs"><Eye className="w-3.5 h-3.5" /> Privacy</TabsTrigger>
        </TabsList>

        {/* Tab 1: Personal Information */}
        <TabsContent value="personal">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-card p-8 rounded-xl border border-border/60 shadow-card space-y-8">
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

            <div className="space-y-5">
              {[
                { label: "Full Name", value: "Dr. Demetrios Aris", type: "text" },
                { label: "Email Address", value: "d.aris@university.edu", type: "email" },
                { label: "Phone Number", value: "+1 (555) 234-5678", type: "tel" },
                { label: "Department", value: "Computer Science", type: "text" },
              ].map((f) => (
                <div key={f.label} className="space-y-1.5">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{f.label}</label>
                  <input
                    type={f.type}
                    defaultValue={f.value}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring/20 transition-all"
                  />
                </div>
              ))}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Short Bio</label>
                <textarea
                  defaultValue="Senior Lecturer specializing in Computer Science with 12 years of teaching experience."
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring/20 transition-all resize-none"
                />
              </div>
            </div>

            <Button>Save Changes</Button>
          </motion.div>
        </TabsContent>

        {/* Tab 2: Account Security */}
        <TabsContent value="security">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            {/* Change Password */}
            <div className="bg-card p-8 rounded-xl border border-border/60 shadow-card space-y-5">
              <h3 className="text-base font-semibold text-foreground">Change Password</h3>
              {["Current Password", "New Password", "Confirm New Password"].map((label) => (
                <div key={label} className="space-y-1.5">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{label}</label>
                  <input
                    type="password"
                    placeholder={`Enter ${label.toLowerCase()}`}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring/20 transition-all"
                  />
                </div>
              ))}
              <Button>Update Password</Button>
            </div>

            {/* 2FA */}
            <div className="bg-card p-8 rounded-xl border border-border/60 shadow-card space-y-4">
              <h3 className="text-base font-semibold text-foreground">Two-Factor Authentication</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Enable 2FA</p>
                  <p className="text-xs text-muted-foreground">Add an extra layer of security to your account</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Verify via Email</p>
                  <p className="text-xs text-muted-foreground">Receive verification codes via email</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Authentication App</p>
                  <p className="text-xs text-muted-foreground">Use an authenticator app like Google Authenticator</p>
                </div>
                <Switch />
              </div>
            </div>

            {/* Active Sessions */}
            <div className="bg-card p-8 rounded-xl border border-border/60 shadow-card space-y-4">
              <h3 className="text-base font-semibold text-foreground">Active Sessions</h3>
              {[
                { device: "MacBook Pro", browser: "Chrome 120", time: "Active now" },
                { device: "iPhone 15", browser: "Safari", time: "2 hours ago" },
                { device: "Windows PC", browser: "Firefox 121", time: "Yesterday" },
              ].map((s) => (
                <div key={s.device} className="flex items-center justify-between py-3 border-b border-border/40 last:border-0">
                  <div>
                    <p className="text-sm font-medium text-foreground">{s.device}</p>
                    <p className="text-xs text-muted-foreground">{s.browser} · {s.time}</p>
                  </div>
                </div>
              ))}
              <Button variant="outline" size="sm">Logout from other devices</Button>
            </div>

            {/* Security Alerts */}
            <div className="bg-card p-8 rounded-xl border border-border/60 shadow-card space-y-4">
              <h3 className="text-base font-semibold text-foreground">Security Alerts</h3>
              {[
                { title: "New login detected", desc: "Get notified when a new device logs in" },
                { title: "Password change", desc: "Alert when your password is changed" },
                { title: "Suspicious activity", desc: "Notify about unusual account activity" },
              ].map((a) => (
                <div key={a.title} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">{a.title}</p>
                    <p className="text-xs text-muted-foreground">{a.desc}</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              ))}
            </div>
          </motion.div>
        </TabsContent>

        {/* Tab 3: Notifications */}
        <TabsContent value="notifications">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-card p-8 rounded-xl border border-border/60 shadow-card space-y-5">
            <h3 className="text-base font-semibold text-foreground">Notification Preferences</h3>
            {[
              { title: "Assignment submissions", desc: "Notify when students submit assignments" },
              { title: "Student messages", desc: "Notify when students send messages" },
              { title: "Attendance reminders", desc: "Remind before scheduled classes" },
              { title: "Course announcements", desc: "Notify about course-related updates" },
            ].map((n) => (
              <div key={n.title} className="flex items-center justify-between py-2">
                <div>
                  <p className="text-sm font-medium text-foreground">{n.title}</p>
                  <p className="text-xs text-muted-foreground">{n.desc}</p>
                </div>
                <Switch defaultChecked />
              </div>
            ))}
          </motion.div>
        </TabsContent>

        {/* Tab 4: Privacy */}
        <TabsContent value="privacy">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-card p-8 rounded-xl border border-border/60 shadow-card space-y-5">
            <h3 className="text-base font-semibold text-foreground">Privacy Settings</h3>
            {[
              { title: "Show email to students", desc: "Allow students to see your email address" },
              { title: "Show phone number", desc: "Allow students to see your phone number" },
              { title: "Allow direct messages from students", desc: "Let students send you direct messages" },
            ].map((p) => (
              <div key={p.title} className="flex items-center justify-between py-2">
                <div>
                  <p className="text-sm font-medium text-foreground">{p.title}</p>
                  <p className="text-xs text-muted-foreground">{p.desc}</p>
                </div>
                <Switch defaultChecked />
              </div>
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfileSettings;
