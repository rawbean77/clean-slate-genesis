import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, Search, Loader2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { AnalysisResult } from "./components/AnalysisResult";
import { SystemStatusSidebar } from "./components/SystemStatusSidebar";
import { MOCK_LEGAL_RESPONSE, MOCK_PAST_PAPER_RESPONSE } from "./lib/mock-data";

function App() {
  const [query, setQuery] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{ answer: string; sources: string[] } | null>(null);

  const handleAnalyze = () => {
    if (!query.trim()) {
      toast.error("Please enter a legal concept or case name.");
      return;
    }

    setIsAnalyzing(true);
    setResult(null);

    // Simulate AI processing
    setTimeout(() => {
      // Determine which mock response to show
      if (query.toLowerCase().includes("past paper") || query.toLowerCase().includes("uon") || query.toLowerCase().includes("tort")) {
        setResult(MOCK_PAST_PAPER_RESPONSE);
      } else {
        setResult(MOCK_LEGAL_RESPONSE);
      }
      
      setIsAnalyzing(false);
      toast.success("Analysis complete based on eKLR and University records.");
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] text-[#1a1c1e] selection:bg-primary/20">
      <Toaster position="top-right" />
      
      {/* Background patterns */}
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-t from-primary/5 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-8 lg:py-12">
        {/* Header Section */}
        <header className="mb-12 flex flex-col items-center text-center space-y-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="w-24 h-24 rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-4 ring-primary/20"
          >
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/8d5d083a-9615-460c-8f71-f6c14f48e6e3/sheriahelp-logo-63d36327-1779620019735.webp" 
              alt="SheriaHelp Logo"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <div className="space-y-2">
            <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 flex items-center justify-center gap-3">
              <Scale className="w-8 h-8 text-primary" />
              SheriaHelp
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              Your intelligent Kenyan Law study companion. 
              <span className="block text-sm font-normal text-muted-foreground mt-2">
                Now indexing: eKLR judgments, <strong>University Past Papers</strong>, and Kenyan Statutes.
              </span>
            </p>
          </div>
        </header>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            <Card className="border-border/40 bg-white/70 backdrop-blur-md shadow-2xl overflow-hidden border-t-8 border-t-primary">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4 text-primary font-bold uppercase tracking-wider text-xs">
                  <Search className="w-4 h-4" />
                  Ask the AI Tutor
                </div>
                
                <div className="space-y-4">
                  <Textarea
                    placeholder="Enter a legal concept, case name, or past paper question (e.g., 'Discuss Question 3 from the UoN 2022 Tort Law paper')"
                    className="min-h-[160px] text-lg resize-none border-border/60 focus:ring-primary/40 focus:border-primary/40 rounded-xl bg-slate-50/50"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Button 
                      size="lg" 
                      onClick={handleAnalyze} 
                      disabled={isAnalyzing}
                      className="w-full sm:w-auto px-10 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-primary/20 transition-all duration-300 active:scale-95 gap-2"
                    >
                      {isAnalyzing ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Searching Global Database...
                        </>
                      ) : (
                        <>
                          Analyze & Search
                        </>
                      )}
                    </Button>
                    
                    <div className="flex items-center gap-2 text-xs text-muted-foreground px-3 py-2 bg-slate-100/50 rounded-full border border-slate-200/50">
                      <Info className="w-4 h-4" />
                      Includes University Exam Papers & Scholar Notes
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <AnimatePresence mode="wait">
              {result && (
                <AnalysisResult 
                  answer={result.answer} 
                  sources={result.sources} 
                />
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar Area */}
          <aside className="lg:col-span-1">
            <SystemStatusSidebar dbConnected={true} />
          </aside>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-border/40 text-center">
          <div className="flex flex-col items-center gap-4 opacity-60">
            <div className="flex items-center gap-4 grayscale">
              <img src="/gebeya.webp" alt="Gebeya" className="h-6" />
              <div className="w-px h-4 bg-slate-300" />
              <span className="font-bold tracking-widest text-xs uppercase">SheriaHelp AI</span>
            </div>
            <p className="text-[10px] text-slate-500 max-w-md mx-auto leading-relaxed">
              Disclaimer: SheriaHelp is an educational revision tool. Now featuring university-specific exam resources and study materials.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;