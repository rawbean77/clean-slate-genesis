import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Cloud, Database, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatusCardProps {
  dbConnected: boolean;
}

export function StatusCard({ dbConnected }: StatusCardProps) {
  return (
    <div className="space-y-4">
      <Card className="bg-slate-50 border-none shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-bold text-slate-500 uppercase tracking-widest">
            System Status
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${dbConnected ? 'bg-green-100' : 'bg-red-100'}`}>
                <Database className={`w-4 h-4 ${dbConnected ? 'text-green-600' : 'text-red-600'}`} />
              </div>
              <div>
                <p className="text-sm font-medium">Knowledge Base</p>
                <p className="text-xs text-muted-foreground">{dbConnected ? 'eKLR Connected' : 'Disconnected'}</p>
              </div>
            </div>
            <Badge 
              variant={dbConnected ? "default" : "destructive"} 
              className={cn(dbConnected ? "bg-green-600 hover:bg-green-700 text-white" : "")}
            >
              {dbConnected ? 'Online' : 'Offline'}
            </Badge>
          </div>

          <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-blue-100">
                <Cloud className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium">LLM Engine</p>
                <p className="text-xs text-muted-foreground">GPT-4o Optimized</p>
              </div>
            </div>
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          </div>
        </CardContent>
      </Card>

      <div className="p-4 rounded-xl bg-gradient-to-br from-[#1e3a8a]/10 to-transparent border border-[#1e3a8a]/20">
        <h4 className="text-xs font-bold text-[#1e3a8a] uppercase tracking-widest mb-2">Academic Resources</h4>
        <ul className="space-y-2">
          {['eKLR Judgments', 'Laws of Kenya', 'University Past Papers', 'Legal Maxims'].map((item) => (
            <li key={item} className="flex items-center justify-between text-sm group cursor-pointer hover:text-[#1e3a8a] transition-colors">
              <span className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-[#1e3a8a]" />
                {item}
              </span>
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center pt-4">
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">Developed for Kenyan Law Students</p>
        <p className="text-[10px] text-muted-foreground mt-1">Powered by LangChain & OpenAI</p>
      </div>
    </div>
  );
}