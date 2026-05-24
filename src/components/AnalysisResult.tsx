import { motion } from "framer-motion";
import { FileText, Bookmark, Quote } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AnalysisResultProps {
  answer: string;
  sources: string[];
}

export function AnalysisResult({ answer, sources }: AnalysisResultProps) {
  if (!answer) return null;

  const paragraphs = answer.split(String.fromCharCode(10)).filter(p => p.trim() !== "");

  const getSourceType = (filename: string) => {
    const lower = filename.toLowerCase();
    if (lower.includes("eklr") || lower.includes("[20")) return { label: "eKLR", color: "bg-blue-500/10 text-blue-600 border-blue-200" };
    if (lower.includes("exam") || lower.includes("paper")) return { label: "Exam", color: "bg-purple-500/10 text-purple-600 border-purple-200" };
    if (lower.includes("notes") || lower.includes("guide")) return { label: "Notes", color: "bg-amber-500/10 text-amber-600 border-amber-200" };
    return { label: "Statute", color: "bg-emerald-500/10 text-emerald-600 border-emerald-200" };
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <Card className="border-border/40 bg-card/50 backdrop-blur-sm shadow-xl overflow-hidden border-l-4 border-l-primary">
        <CardHeader className="bg-primary/5 pb-3">
          <CardTitle className="text-lg font-bold flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            {paragraphs.map((p, i) => (
              <p key={i} className="mb-4 leading-relaxed text-foreground/90">
                {p}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>

      {sources.length > 0 && (
        <Card className="border-border/40 bg-card/50 backdrop-blur-sm shadow-xl">
          <CardHeader className="pb-3 border-b border-border/40">
            <CardTitle className="text-sm font-bold flex items-center gap-2 text-muted-foreground">
              <Bookmark className="w-4 h-4" />
              LEGAL SOURCES CITED
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
            {sources.map((source, index) => {
              const type = getSourceType(source);
              return (
                <div 
                  key={index}
                  className="flex items-center gap-2 p-2 rounded bg-muted/50 border border-border/30 hover:bg-muted transition-colors cursor-default"
                >
                  <Quote className="w-3 h-3 text-primary opacity-60 shrink-0" />
                  <span className="text-xs font-medium truncate flex-1">{source}</span>
                  <Badge variant="outline" className={`text-[9px] uppercase tracking-tighter h-4 px-1 ${type.color}`}>
                    {type.label}
                  </Badge>
                </div>
              );
            })}
          </CardContent>
        </Card>
      )}
    </motion.div>
  );
}