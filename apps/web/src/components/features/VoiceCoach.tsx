import { useState, useEffect, useCallback } from 'react';
import { Button, Card } from '../ui';
import { Volume2, VolumeX, Settings } from 'lucide-react';

interface VoiceCoachProps {
  text: string;
  autoPlay?: boolean;
  onSpeakStart?: () => void;
  onSpeakEnd?: () => void;
}

export function VoiceCoach({ text, autoPlay = false, onSpeakStart, onSpeakEnd }: VoiceCoachProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>('');
  const [rate, setRate] = useState(1);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = speechSynthesis.getVoices();
      setVoices(availableVoices);
      // Prefer English voices
      const englishVoice = availableVoices.find(v => v.lang.startsWith('en'));
      if (englishVoice) setSelectedVoice(englishVoice.name);
    };

    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      speechSynthesis.cancel();
    };
  }, []);

  useEffect(() => {
    if (autoPlay && text && isEnabled) {
      speak();
    }
  }, [text, autoPlay, isEnabled]);

  const speak = useCallback(() => {
    if (!text || !isEnabled) return;

    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(processChessNotation(text));
    utterance.rate = rate;
    
    const voice = voices.find(v => v.name === selectedVoice);
    if (voice) utterance.voice = voice;

    utterance.onstart = () => {
      setIsSpeaking(true);
      onSpeakStart?.();
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      onSpeakEnd?.();
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
    };

    speechSynthesis.speak(utterance);
  }, [text, isEnabled, rate, selectedVoice, voices, onSpeakStart, onSpeakEnd]);

  const stop = useCallback(() => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
  }, []);

  // Convert chess notation to speakable text
  const processChessNotation = (text: string): string => {
    return text
      .replace(/Nf(\d)/g, 'Knight f$1')
      .replace(/Nc(\d)/g, 'Knight c$1')
      .replace(/Nb(\d)/g, 'Knight b$1')
      .replace(/Nd(\d)/g, 'Knight d$1')
      .replace(/Ne(\d)/g, 'Knight e$1')
      .replace(/Ng(\d)/g, 'Knight g$1')
      .replace(/Bf(\d)/g, 'Bishop f$1')
      .replace(/Bc(\d)/g, 'Bishop c$1')
      .replace(/Qd(\d)/g, 'Queen d$1')
      .replace(/Qe(\d)/g, 'Queen e$1')
      .replace(/Rf(\d)/g, 'Rook f$1')
      .replace(/Kf(\d)/g, 'King f$1')
      .replace(/O-O-O/g, 'queenside castle')
      .replace(/O-O/g, 'kingside castle')
      .replace(/\+/g, ' check')
      .replace(/#/g, ' checkmate')
      .replace(/x/g, ' takes ')
      .replace(/e\.p\./g, 'en passant');
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsEnabled(!isEnabled)}
        className={isEnabled ? 'text-primary' : 'text-gray-500'}
      >
        {isEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </Button>
      
      {isEnabled && (
        <>
          <Button
            variant={isSpeaking ? 'primary' : 'outline'}
            size="sm"
            onClick={isSpeaking ? stop : speak}
          >
            {isSpeaking ? 'Stop' : 'Read Aloud'}
          </Button>
          
          <select
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="bg-surface border border-white/10 rounded px-2 py-1 text-sm"
          >
            <option value={0.75}>0.75x</option>
            <option value={1}>1x</option>
            <option value={1.25}>1.25x</option>
            <option value={1.5}>1.5x</option>
          </select>
        </>
      )}
    </div>
  );
}
