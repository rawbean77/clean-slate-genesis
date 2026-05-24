import React from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { Search, Scale, BookOpen, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ChatInterfaceProps {
  onSearch: (query: string) => void;
  loading: boolean;
  response: string | null;
  sources: string[];
}

export function ChatInterface({ onSearch, loading, response, sources }: ChatInterfaceProps) {
  const [query, setQuery] = React.useState('');

  const handleSubmit = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="border-t-4 border-t-primary">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Scale className="w-5 h-5 text-primary" />
            Ask the AI Tutor
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Enter a legal concept, case name, or past paper question (e.g., 'What was the holding in Muruatetu?')"
            className="min-h-[120px] resize-none text-base p-4"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="flex justify-between items-center">
            <p className="text-xs text-muted-foreground italic">
              Try: "Structure of the Kenyan Judiciary" or "Effect of the 2010 Constitution on Land Law"
            </p>
            <Button 
              onClick={handleSubmit} 
              disabled={loading || !query.trim()}
              className="px-8"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Analyzing...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  Analyze & Search
                </div>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <Card>
              <CardContent className="pt-6 space-y-3">
                <Skeleton className="h-6 w-1/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </CardContent>
            </Card>
          </motion.div>
        ) : response ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <Card className="bg-white">
              <CardHeader className="border-b pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  📝 Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="prose prose-slate max-w-none whitespace-pre-wrap leading-relaxed text-slate-800">
                  {response}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-md flex items-center gap-2 uppercase tracking-wider text-muted-foreground font-semibold">
                  <Scale className="w-4 h-4" />
                  📚 Legal Sources Cited
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {sources.map((source, i) => (
                    <Badge key={i} variant="secondary" className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 border-none transition-colors">
                      📄 {source}
                    </Badge>
                  ))}
                  {sources.length === 0 && (
                    <span className="text-sm text-muted-foreground italic">No specific sources cited.</span>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}