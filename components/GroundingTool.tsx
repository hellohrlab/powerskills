
import React, { useState } from 'react';
import BackButton from './BackButton';

const steps = [
  {
    title: '5 вещей, которые вы видите',
    description: 'Оглянитесь вокруг и мысленно назовите пять предметов. Обратите внимание на детали: цвет, форму, текстуру.',
    color: 'violet',
  },
  {
    title: '4 вещи, которые вы чувствуете',
    description: 'Обратите внимание на телесные ощущения. Это может быть одежда на коже, стул под вами или ветерок.',
    color: 'indigo',
  },
  {
    title: '3 вещи, которые вы слышите',
    description: 'Прислушайтесь к окружающим звукам. Это может быть гул компьютера, пение птиц или шум машин за окном.',
    color: 'blue',
  },
  {
    title: '2 вещи, которые вы обоняете',
    description: 'Постарайтесь уловить два разных запаха. Возможно, это аромат кофе, запах книги или свежего воздуха.',
    color: 'cyan',
  },
  {
    title: '1 вещь, которую вы можете попробовать',
    description: 'Сконцентрируйтесь на вкусовых ощущениях. Это может быть вкус напитка, который вы пьете, или просто ваш собственный.',
    color: 'teal',
  },
  {
    title: 'Вы заземлены',
    description: 'Вы успешно прошли упражнение. Почувствуйте, как вы вернулись в настоящий момент. Дышите спокойно.',
    color: 'emerald',
  },
];

const GroundingTool: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const step = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="flex flex-col h-full w-full">
      <BackButton onClick={onBack} />
      
      <div className="flex-grow flex flex-col justify-center items-center text-center p-4">
          <div className={`w-full bg-slate-800 rounded-2xl p-8 border-t-4 border-${step.color}-400 shadow-lg`}>
              <h2 className="text-2xl font-bold mb-4 text-white">{step.title}</h2>
              <p className="text-slate-300">{step.description}</p>
          </div>
      </div>
      
      <div className="p-4">
        <div className="w-full bg-slate-700 rounded-full h-2.5 mb-4">
          <div className={`bg-${step.color}-500 h-2.5 rounded-full transition-all duration-500`} style={{ width: `${progress}%` }}></div>
        </div>
        <div className="flex justify-between items-center">
          <button 
            onClick={handlePrev} 
            disabled={currentStep === 0}
            className="px-6 py-2 bg-slate-700 text-white rounded-lg disabled:opacity-50 transition-colors hover:bg-slate-600"
          >
            Назад
          </button>
          {currentStep < steps.length - 1 ? (
             <button onClick={handleNext} className={`px-6 py-2 bg-${step.color}-600 text-white rounded-lg transition-colors hover:bg-${step.color}-500`}>
              Далее
             </button>
          ) : (
            <button onClick={onBack} className="px-6 py-2 bg-emerald-600 text-white rounded-lg transition-colors hover:bg-emerald-500">
              Завершить
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GroundingTool;
