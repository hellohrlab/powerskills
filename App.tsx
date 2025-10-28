
import React, { useState, useCallback } from 'react';
import Home from './components/Home';
import BreathingExercise from './components/BreathingExercise';
import GroundingTool from './components/GroundingTool';
import AffirmationGenerator from './components/AffirmationGenerator';
import { Tool } from './types';

const App: React.FC = () => {
  const [activeTool, setActiveTool] = useState<Tool | 'home'>('home');

  const navigateTo = useCallback((tool: Tool | 'home') => {
    setActiveTool(tool);
  }, []);

  const renderContent = () => {
    switch (activeTool) {
      case 'breathing':
        return <BreathingExercise onBack={() => navigateTo('home')} />;
      case 'grounding':
        return <GroundingTool onBack={() => navigateTo('home')} />;
      case 'affirmation':
        return <AffirmationGenerator onBack={() => navigateTo('home')} />;
      case 'home':
      default:
        return <Home navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center p-4">
      <main className="w-full max-w-md mx-auto flex-grow flex flex-col">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
