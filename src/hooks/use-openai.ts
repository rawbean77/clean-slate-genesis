import { useState, useCallback } from 'react';
import { toast } from 'sonner';
import { SYSTEM_PROMPT, MOCK_CONTEXT } from '@/lib/constants';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function useOpenAI() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [sources, setSources] = useState<string[]>([]);

  const askQuestion = useCallback(async (query: string, apiKey: string) => {
    if (!apiKey) {
      toast.error('OpenAI API Key is required. Please set it in the settings.');
      return;
    }

    setLoading(true);
    setResponse(null);
    setSources([]);

    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT.replace('{context}', MOCK_CONTEXT) },
            { role: 'user', content: query },
          ],
          temperature: 0.2,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error?.message || 'Failed to fetch from OpenAI');
      }

      const data = await res.json();
      const answer = data.choices[0].message.content;
      
      setResponse(answer);
      // Simulating source extraction from the answer or mock context
      setSources(['The Constitution of Kenya 2010', 'Republic v Muruatetu [2017] eKLR', 'Judicature Act']);
      toast.success('Analysis complete');
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || 'An error occurred during analysis');
    } finally {
      setLoading(false);
    }
  }, []);

  return { askQuestion, loading, response, sources };
}