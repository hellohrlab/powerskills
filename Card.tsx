
import React from 'react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
  color: 'cyan' | 'violet' | 'amber';
}

const colorClasses = {
  cyan: {
    bg: 'bg-cyan-900/50',
    hoverBg: 'hover:bg-cyan-800/60',
    iconText: 'text-cyan-300',
  },
  violet: {
    bg: 'bg-violet-900/50',
    hoverBg: 'hover:bg-violet-800/60',
    iconText: 'text-violet-300',
  },
  amber: {
    bg: 'bg-amber-900/50',
    hoverBg: 'hover:bg-amber-800/60',
    iconText: 'text-amber-300',
  },
};

const Card: React.FC<CardProps> = ({ icon, title, description, onClick, color }) => {
  const classes = colorClasses[color];

  return (
    <button
      onClick={onClick}
      className={`w-full p-6 ${classes.bg} ${classes.hoverBg} rounded-2xl flex items-center space-x-6 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-white`}
    >
      <div className={`flex-shrink-0 w-12 h-12 ${classes.iconText}`}>
        {icon}
      </div>
      <div className="text-left">
        <h3 className="font-bold text-lg text-white">{title}</h3>
        <p className="text-slate-400 text-sm">{description}</p>
      </div>
    </button>
  );
};

export default Card;
