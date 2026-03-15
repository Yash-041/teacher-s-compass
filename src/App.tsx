import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import DashboardLayout from "./components/DashboardLayout";
import DashboardOverview from "./pages/DashboardOverview";
import MyCourses from "./pages/MyCourses";
import Assignments from "./pages/Assignments";
import StudentPerformance from "./pages/StudentPerformance";
import AttendancePage from "./pages/AttendancePage";
import AIAssistant from "./pages/AIAssistant";
import Reports from "./pages/Reports";
import MessagesPage from "./pages/MessagesPage";
import ProfileSettings from "./pages/ProfileSettings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<DashboardOverview />} />
            <Route path="/courses" element={<MyCourses />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/performance" element={<StudentPerformance />} />
            <Route path="/attendance" element={<AttendancePage />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/settings" element={<ProfileSettings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
