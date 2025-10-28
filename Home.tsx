import React from 'react';
import Card from './Card';
import { Tool } from '../types';
import { LungIcon, PinIcon, SparklesIcon } from './icons/Icons';

interface HomeProps {
  navigateTo: (tool: Tool) => void;
}

const Home: React.FC<HomeProps> = ({ navigateTo }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-cyan-300">powerskills</h1>
        <p className="text-slate-400 mt-2">Ваш помощник в моменты беспокойства</p>
      </header>
      <div className="w-full space-y-4">
        <Card
          icon={<LungIcon />}
          title="Дыхание"
          description="Успокойте свой разум с помощью простого дыхательного упражнения."
          onClick={() => navigateTo('breathing')}
          color="cyan"
        />
        <Card
          icon={<PinIcon />}
          title="Заземление"
          description="Вернитесь в настоящий момент, используя технику 5-4-3-2-1."
          onClick={() => navigateTo('grounding')}
          color="violet"
        />
        <Card
          icon={<SparklesIcon />}
          title="Аффирмация"
          description="Получите позитивное утверждение, чтобы изменить свое состояние."
          onClick={() => navigateTo('affirmation')}
          color="amber"
        />
      </div>
    </div>
  );
};

export default Home;