import { useCallback } from 'react';
import confetti from 'canvas-confetti';

export function useLevelUp() {
  const triggerLevelUp = useCallback((level: number) => {
    // Gold confetti burst
    const colors = ['#e8af34', '#f0d9b5', '#4f98a3', '#ffffff'];
    
    // First burst - center
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors,
    });

    // Second burst - left
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
    }, 150);

    // Third burst - right
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });
    }, 300);

    // Continuous celebration
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    
    frame();
  }, []);

  const triggerBadgeEarned = useCallback(() => {
    // Smaller celebration for badges
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#e8af34', '#f0d9b5'],
    });
  }, []);

  const triggerStreakMilestone = useCallback((streak: number) => {
    // Fire-colored confetti for streaks
    const fireColors = ['#ff4500', '#ff6347', '#ff7f50', '#ffa500', '#e8af34'];
    
    confetti({
      particleCount: streak * 10,
      spread: 90,
      origin: { y: 0.6 },
      colors: fireColors,
    });
  }, []);

  return {
    triggerLevelUp,
    triggerBadgeEarned,
    triggerStreakMilestone,
  };
}
