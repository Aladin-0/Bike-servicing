import React from 'react';
import { ExclamationTriangleIcon, FinesIcon, ReminderIcon, LogbookIcon } from './IconComponents';

const actions = [
  { name: 'Help', icon: <ExclamationTriangleIcon className="w-8 h-8 text-white" />, color: 'bg-accent-red' },
  { name: 'Fines', icon: <FinesIcon className="w-7 h-7 text-accent-yellow" />, color: 'bg-dark-element' },
  { name: 'Reminder', icon: <ReminderIcon className="w-7 h-7 text-accent-yellow" />, color: 'bg-dark-element' },
  { name: 'Logbook', icon: <LogbookIcon className="w-7 h-7 text-accent-yellow" />, color: 'bg-dark-element' },
];

export const Services: React.FC = () => {
  return (
    <section className="py-2">
      <div className="flex justify-around items-start">
        {actions.map((action) => (
          <div key={action.name} className="flex flex-col items-center space-y-3 text-center">
            <button className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-transform transform hover:scale-105 ${action.color}`}>
              {action.icon}
            </button>
            <h3 className="font-medium text-text-light text-sm">{action.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};