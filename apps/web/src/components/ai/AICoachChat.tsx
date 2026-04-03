import { useState, useRef, useEffect, useCallback } from 'react';
import { Send, Mic, MicOff, Copy, Volume2, Loader2 } from 'lucide-react';
import { clsx } from 'clsx';
import { Button } from '../ui/Button';
import { ChessNotation } from './ChessNotation';
import ReactMarkdown from 'react-markdown';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  provider?: string;
  fen?: string;
  createdAt: Date;
}

interface AICoachChatProps {
  messages: Message[];
  onSendMessage: (content: string, fen?: string) => Promise<void>;
  isLoading?: boolean;
  currentFen?: string;
  className?: string;
}

export function AICoachChat({
  messages,
  onSendMessage,
  isLoading = false,
  currentFen,
  className,
}: AICoachChatProps) {
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [attachFen, setAttachFen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Initialize speech recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      
      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput((prev) => prev + ' ' + transcript);
        setIsListening(false);
      };
      
      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };
      
      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const message = input.trim();
    setInput('');
    await onSendMessage(message, attachFen ? currentFen : undefined);
    setAttachFen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const toggleVoiceInput = () => {
    if (!recognitionRef.current) return;
    
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const speakMessage = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
  };

  const copyMessage = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className={clsx('flex flex-col h-full bg-surface rounded-lg', className)}>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            <p className="text-lg mb-2">👋 Hi! I'm your AI Chess Coach.</p>
            <p className="text-sm">Ask me anything about chess - openings, tactics, strategy, or help analyzing a position.</p>
          </div>
        )}
        
        {messages.map((message) => (
          <div
            key={message.id}
            className={clsx(
              'flex gap-3',
              message.role === 'user' ? 'flex-row-reverse' : ''
            )}
          >
            {/* Avatar */}
            <div
              className={clsx(
                'w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0',
                message.role === 'user'
                  ? 'bg-primary text-white'
                  : 'bg-gold text-black'
              )}
            >
              {message.role === 'user' ? 'U' : '♔'}
            </div>
            
            {/* Message content */}
            <div
              className={clsx(
                'max-w-[80%] rounded-lg px-4 py-2',
                message.role === 'user'
                  ? 'bg-primary text-white'
                  : 'bg-surface-hover'
              )}
            >
              {message.role === 'assistant' ? (
                <div className="prose prose-invert prose-sm max-w-none">
                  <ChessNotation>
                    <ReactMarkdown>{message.content}</ReactMarkdown>
                  </ChessNotation>
                </div>
              ) : (
                <p className="whitespace-pre-wrap">{message.content}</p>
              )}
              
              {/* Provider badge + actions for assistant messages */}
              {message.role === 'assistant' && (
                <div className="flex items-center gap-2 mt-2 pt-2 border-t border-white/10">
                  {message.provider && (
                    <span className="text-xs bg-black/20 px-2 py-0.5 rounded">
                      via {message.provider}
                    </span>
                  )}
                  <button
                    onClick={() => copyMessage(message.content)}
                    className="p-1 hover:bg-white/10 rounded"
                    title="Copy"
                  >
                    <Copy className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => speakMessage(message.content)}
                    className="p-1 hover:bg-white/10 rounded"
                    title="Read aloud"
                  >
                    <Volume2 className="w-3 h-3" />
                  </button>
                </div>
              )}
              
              {/* FEN indicator */}
              {message.fen && (
                <div className="mt-2 text-xs text-gray-400 font-mono truncate">
                  📋 {message.fen}
                </div>
              )}
            </div>
          </div>
        ))}
        
        {/* Loading indicator */}
        {isLoading && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-gold text-black flex items-center justify-center">
              ♔
            </div>
            <div className="bg-surface-hover rounded-lg px-4 py-3">
              <Loader2 className="w-5 h-5 animate-spin" />
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="border-t border-white/10 p-4">
        {/* FEN attachment toggle */}
        {currentFen && (
          <div className="flex items-center gap-2 mb-2">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={attachFen}
                onChange={(e) => setAttachFen(e.target.checked)}
                className="rounded border-gray-600 bg-transparent"
              />
              Attach current position
            </label>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="flex gap-2">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask the chess coach..."
            className="flex-1 bg-bg-dark border border-white/10 rounded-lg px-4 py-2 resize-none focus:outline-none focus:border-primary"
            rows={1}
            disabled={isLoading}
          />
          
          {recognitionRef.current && (
            <Button
              type="button"
              variant={isListening ? 'danger' : 'ghost'}
              size="icon"
              onClick={toggleVoiceInput}
              disabled={isLoading}
            >
              {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </Button>
          )}
          
          <Button type="submit" disabled={!input.trim() || isLoading}>
            <Send className="w-5 h-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
