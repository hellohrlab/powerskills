
import React from 'react';

const BackButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div className="w-full flex justify-start pt-4 pb-2">
      <button 
        onClick={onClick}
        className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>Назад</span>
      </button>
    </div>
  );
};

export default BackButton;
