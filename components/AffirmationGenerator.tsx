import React, { useState } from 'react';
import BackButton from './BackButton';
import { SparklesIcon } from './icons/Icons';

const affirmations: string[] = [
  "Я спокоен и собран.",
  "Я контролирую свои мысли и чувства.",
  "Это чувство временно, и оно пройдет.",
  "Я в безопасности здесь и сейчас.",
  "Каждый вдох приносит мне спокойствие, каждый выдох уносит тревогу.",
  "Я сильнее своей тревоги.",
  "Я доверяю себе и своей способности справиться с этим.",
  "Я отпускаю все, что не могу контролировать.",
  "Мой разум ясен, мое тело расслаблено.",
  "Я выбираю мир и спокойствие.",
  "Все хорошо, и все будет хорошо.",
  "Я заземлен и нахожусь в настоящем моменте.",
  "Я разрешаю себе чувствовать покой.",
  "Тревога - это просто чувство, она не определяет меня.",
  "Я окружен любовью и поддержкой.",
  "Я могу справиться с любыми вызовами.",
  "Я дышу глубоко и медленно.",
  "Мое сердце бьется спокойно и ровно.",
  "Я отпускаю напряжение из своего тела.",
  "Я сосредоточен на позитивных мыслях.",
  "Я заслуживаю душевного спокойствия.",
  "Я принимаю себя таким, какой я есть.",
  "Я выбираю мысли, которые меня поддерживают.",
  "С каждой минутой я становлюсь все спокойнее.",
  "Я благодарен за этот момент покоя.",
  "Я отпускаю страх и сомнения.",
  "Я нахожусь в гармонии с собой и миром.",
  "Моя внутренняя сила помогает мне преодолеть все трудности.",
  "Я вдыхаю уверенность, выдыхаю страх.",
  "Я в безопасности, и вселенная заботится обо мне."
];

const getRandomAffirmation = (): string => {
  const randomIndex = Math.floor(Math.random() * affirmations.length);
  return affirmations[randomIndex];
};

const AffirmationGenerator: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [affirmation, setAffirmation] = useState<string>(getRandomAffirmation());

  const handleNewAffirmation = () => {
    setAffirmation(getRandomAffirmation());
  };

  return (
    <div className="flex flex-col h-full w-full">
      <BackButton onClick={onBack} />
      <div className="flex-grow flex flex-col items-center justify-center text-center p-4">
        <div className="w-20 h-20 text-amber-300 mb-8">
          <SparklesIcon />
        </div>
        <div className="min-h-[120px] flex items-center justify-center">
          <p className="text-2xl lg:text-3xl font-medium leading-relaxed text-slate-200">
            {affirmation}
          </p>
        </div>
      </div>
      <div className="p-4">
        <button
          onClick={handleNewAffirmation}
          className="w-full px-6 py-4 bg-amber-600 text-white rounded-lg transition-colors hover:bg-amber-500 font-semibold"
        >
          Новая аффирмация
        </button>
      </div>
    </div>
  );
};

export default AffirmationGenerator;
