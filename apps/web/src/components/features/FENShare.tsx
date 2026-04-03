import { useState, useCallback } from 'react';
import { Button, Card, Input } from '../ui';
import { InteractiveBoard } from '../board';
import { Link2, Copy, Check, QrCode } from 'lucide-react';

interface FENShareProps {
  initialFen?: string;
}

export function FENShare({ initialFen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1' }: FENShareProps) {
  const [fen, setFen] = useState(initialFen);
  const [copied, setCopied] = useState(false);

  const shareUrl = `${window.location.origin}/board?fen=${encodeURIComponent(fen)}`;

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }, []);

  const handleBoardChange = (newFen: string) => {
    setFen(newFen);
    setCopied(false);
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-display font-bold mb-4 flex items-center gap-2">
        <Link2 size={20} /> Share Position
      </h3>
      
      <div className="space-y-4">
        <InteractiveBoard 
          fen={fen} 
          onMove={(from, to) => {
            // Board changes would update FEN here
          }}
        />
        
        <div className="space-y-2">
          <label className="text-sm text-gray-400">FEN String</label>
          <div className="flex gap-2">
            <Input 
              value={fen} 
              onChange={(e) => handleBoardChange(e.target.value)}
              className="font-mono text-xs"
            />
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => copyToClipboard(fen)}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </Button>
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Share Link</label>
          <div className="flex gap-2">
            <Input 
              value={shareUrl} 
              readOnly
              className="text-xs"
            />
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => copyToClipboard(shareUrl)}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </Button>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button 
            className="flex-1"
            onClick={() => copyToClipboard(shareUrl)}
          >
            <Copy size={16} className="mr-2" />
            Copy Share Link
          </Button>
        </div>
      </div>
    </Card>
  );
}
