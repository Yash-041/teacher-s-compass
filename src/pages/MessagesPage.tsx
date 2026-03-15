import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const conversations = [
  { name: "Maria Chen", lastMsg: "Thank you for the feedback!", time: "2m ago", unread: true },
  { name: "James Wilson", lastMsg: "When is the next quiz?", time: "1h ago", unread: true },
  { name: "Aisha Patel", lastMsg: "I submitted my assignment.", time: "3h ago", unread: false },
  { name: "Carlos Rodriguez", lastMsg: "Can I get an extension?", time: "1d ago", unread: false },
  { name: "Yuki Tanaka", lastMsg: "Got it, thanks!", time: "2d ago", unread: false },
];

const MessagesPage = () => {
  const [selected, setSelected] = useState(0);
  const [msgInput, setMsgInput] = useState("");

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">Messages</h1>

      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-xl border border-border/60 shadow-card flex h-[calc(100vh-14rem)] overflow-hidden"
      >
        {/* Conversation List */}
        <div className="w-72 border-r border-border overflow-y-auto">
          {conversations.map((c, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`w-full text-left px-4 py-3.5 border-b border-border/60 transition-colors ${
                selected === i ? "bg-muted" : "hover:bg-muted/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-semibold shrink-0">
                  {c.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-foreground truncate">{c.name}</p>
                    <span className="text-xs text-muted-foreground ml-2 shrink-0">{c.time}</span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate mt-0.5">{c.lastMsg}</p>
                </div>
                {c.unread && <span className="w-2 h-2 bg-primary rounded-full shrink-0" />}
              </div>
            </button>
          ))}
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          <div className="px-6 py-4 border-b border-border">
            <p className="text-sm font-semibold text-foreground">{conversations[selected].name}</p>
          </div>
          <div className="flex-1 p-6 flex items-center justify-center">
            <p className="text-sm text-muted-foreground">Chat messages will appear here.</p>
          </div>
          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-3 bg-muted rounded-xl px-4 py-3">
              <input
                value={msgInput}
                onChange={(e) => setMsgInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
              />
              <button className="p-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all active:scale-[0.95]">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MessagesPage;
