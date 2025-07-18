
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VaultPage from "./pages/VaultPage";
import NotFound from "./pages/NotFound";
import HowItWorks from "./pages/HowItWorks";
import Features from "./pages/Features";
import Resources from "./pages/Resources";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
  <Route path="/" element={<Index />} />
  <Route path="/vault" element={<VaultPage />} /> {/* This is your main page */}
  <Route path="/how-it-works" element={<HowItWorks />} />
  <Route path="/features" element={<Features />} />
  <Route path="/resources" element={<Resources />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="*" element={<NotFound />} />
</Routes>

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
