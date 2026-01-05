import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
// import Warranty from "./pages/Warranty";
// import CareTips from "./pages/CareTips";
import Marietta from "./pages/Marietta";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import GlazeGuardPro from "./pages/GlazeGuardPro";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="/warranty" element={<Warranty />} /> */}
                {/* <Route path="/care-tips" element={<CareTips />} /> */}
                <Route path="/marietta" element={<Marietta />} />
                <Route path="/glazeguard-pro" element={<GlazeGuardPro />} />
                {/* Legacy URL redirects for SEO - 301 redirects handled in vercel.json */}
                <Route path="/ourwork" element={<Navigate to="/services" replace />} />
                <Route path="/bathtub-refinishing-marietta-ga" element={<Navigate to="/services" replace />} />
                <Route path="/service-page/garden-tub-resurfacing" element={<Navigate to="/services" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
