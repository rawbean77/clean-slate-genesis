import { Scale, BookOpen, CheckCircle, AlertCircle, Cpu } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface SystemStatusSidebarProps {
  dbConnected: boolean;
}

export function SystemStatusSidebar({ dbConnected }: SystemStatusSidebarProps) {
  return (
    <div className="space-y-6">
      <Card className="border-border/40 bg-card/50 backdrop-blur-sm shadow-xl">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Cpu className="w-4 h-4 text-primary" />
            System Status
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Database</span>
            {dbConnected ? (
              <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 gap-1">
                <CheckCircle className="w-3 h-3" />
                Connected
              </Badge>
            ) : (
              <Badge variant="destructive" className="gap-1">
                <AlertCircle className="w-3 h-3" />
                Missing
              </Badge>
            )}
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Status</span>
            <Badge variant="outline" className="text-emerald-500 border-emerald-500/20">
              Online
            </Badge>
          </div>
          
          {!dbConnected && (
            <p className="text-xs text-destructive leading-relaxed bg-destructive/5 p-2 rounded border border-destructive/10">
              Ensure the Kenyan Law vector database is connected to your backend platform.
            </p>
          )}
        </CardContent>
      </Card>

      <div className="px-4 space-y-4">
        <div className="flex items-start gap-3">
          <Scale className="w-5 h-5 text-primary shrink-0" />
          <div>
            <h4 className="text-sm font-semibold">LLB Revision Aid</h4>
            <p className="text-xs text-muted-foreground">Expertly tuned for Kenyan Law students and legal researchers.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <BookOpen className="w-5 h-5 text-primary shrink-0" />
          <div>
            <h4 className="text-sm font-semibold">eKLR Integrated</h4>
            <p className="text-xs text-muted-foreground">Searches across judgments, statutes, and past papers.</p>
          </div>
        </div>

        <Separator className="bg-border/40" />
        
        <div className="pt-2 text-[10px] text-muted-foreground uppercase tracking-widest font-medium opacity-70">
          Developed for Kenyan Law Students
        </div>
        <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium opacity-70">
          Powered by Freename & LangChain
        </div>
      </div>
    </div>
  );
}