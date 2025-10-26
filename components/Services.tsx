import React from 'react';
import { ExclamationTriangleIcon, FinesIcon, ReminderIcon, LogbookIcon } from './IconComponents';

const actions = [
  { name: 'Help', icon: <ExclamationTriangleIcon className="w-8 h-8 text-white" />, color: 'bg-accent-red' },
  { name: 'Fines', icon: <FinesIcon className="w-7 h-7 text-accent-yellow" />, color: 'bg-dark-card' },
  { name: 'Reminder', icon: <ReminderIcon className="w-7 h-7 text-accent-yellow" />, color: 'bg-dark-card' },
  { name: 'Logbook', icon: <LogbookIcon className="w-7 h-7 text-accent-yellow" />, color: 'bg-dark-card' },
];

export const Services: React.FC = () => {
  return (
    <section className="py-2 lg:py-6">
      <div className="flex justify-around items-start lg:gap-8 lg:max-w-4xl lg:mx-auto">
        {actions.map((action) => (
          <div key={action.name} className="flex flex-col items-center space-y-3 text-center lg:space-y-4">
            <button className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center transition-transform transform hover:scale-105 ${action.color}`}>
              <div className="lg:scale-125">{action.icon}</div>
            </button>
            <h3 className="font-medium text-text-light text-sm lg:text-base">{action.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};