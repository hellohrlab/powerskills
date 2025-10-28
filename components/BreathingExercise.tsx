
import React, { useState, useEffect } from 'react';
import BackButton from './BackButton';

type BreathingPhase = 'inhale' | 'hold1' | 'exhale' | 'hold2';

const PHASES: Record<BreathingPhase, { duration: number; text: string }> = {
  inhale: { duration: 4000, text: 'Вдох' },
  hold1: { duration: 4000, text: 'Задержите' },
  exhale: { duration: 4000, text: 'Выдох' },
  hold2: { duration: 4000, text: 'Задержите' },
};

const BreathingExercise: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [phase, setPhase] = useState<BreathingPhase>('inhale');
  const [countdown, setCountdown] = useState(4);

  useEffect(() => {
    const cycle: BreathingPhase[] = ['inhale', 'hold1', 'exhale', 'hold2'];
    const phaseIndex = cycle.indexOf(phase);
    
    const countdownInterval = setInterval(() => {
      setCountdown(prev => (prev > 1 ? prev - 1 : 4));
    }, 1000);

    const phaseTimeout = setTimeout(() => {
      const nextPhaseIndex = (phaseIndex + 1) % cycle.length;
      setPhase(cycle[nextPhaseIndex]);
      setCountdown(4);
    }, PHASES[phase].duration);

    return () => {
      clearTimeout(phaseTimeout);
      clearInterval(countdownInterval);
    };
  }, [phase]);

  const circleScale = phase === 'inhale' ? 'scale-125' : 'scale-75';

  return (
    <div className="flex flex-col items-center justify-between h-full w-full">
      <div className="w-full">
        <BackButton onClick={onBack} />
      </div>
      
      <div className="flex flex-col items-center justify-center flex-grow text-center">
        <div className="relative w-64 h-64 flex items-center justify-center">
          <div
            className={`absolute w-full h-full bg-cyan-500 rounded-full transition-transform duration-[4000ms] ease-in-out ${circleScale} opacity-20`}
          />
          <div
            className={`absolute w-48 h-48 bg-cyan-500 rounded-full transition-transform duration-[4000ms] ease-in-out ${circleScale} opacity-40`}
          />
          <div className="z-10">
            <p className="text-4xl font-bold text-cyan-200">{PHASES[phase].text}</p>
            <p className="text-6xl font-light text-white mt-2">{countdown}</p>
          </div>
        </div>
      </div>
      <div className="h-16"></div>
    </div>
  );
};

export default BreathingExercise;
