import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles, FileText, BarChart3, Lightbulb } from "lucide-react";

const chips = [
  { label: "Generate Quiz", icon: Sparkles },
  { label: "Draft Lesson Plan", icon: FileText },
  { label: "Summarize Performance", icon: BarChart3 },
  { label: "Teaching Suggestions", icon: Lightbulb },
];

interface Message {
  role: "user" | "assistant";
  content: string;
}

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "How can I help you optimize your lesson plan today? Try one of the quick actions below, or type your own question." },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (text?: string) => {
    const msg = text || input.trim();
    if (!msg) return;
    setMessages(prev => [...prev, { role: "user", content: msg }]);
    setInput("");
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          content: `I've processed your request: "${msg}". In a production environment, this would connect to an AI backend to generate the response. For now, here's a placeholder acknowledging your request.`,
        },
      ]);
    }, 800);
  };

  return (
    <div className="space-y-6 flex flex-col h-[calc(100vh-8rem)]">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">AI Teaching Assistant</h1>

      <div className="flex-1 bg-primary/[0.02] rounded-xl border border-border/60 shadow-card flex flex-col overflow-hidden">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[75%] px-4 py-3 rounded-xl text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border/60 text-foreground"
                }`}
              >
                {m.content}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chips */}
        <div className="px-6 pb-3 flex flex-wrap gap-2">
          {chips.map((c) => (
            <button
              key={c.label}
              onClick={() => handleSend(c.label)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-sm font-medium text-foreground hover:bg-accent transition-all active:scale-[0.97]"
            >
              <c.icon className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
              {c.label}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 bg-muted rounded-xl px-4 py-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask me anything about your courses..."
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
            />
            <button
              onClick={() => handleSend()}
              className="p-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all active:scale-[0.95]"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
