import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  change?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, change }) => (
  <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-semibold mt-1">{value}</p>
        {change && (
          <p className={`text-xs mt-1 ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
            {change} from last month
          </p>
        )}
      </div>
      <div className="bg-blue-50 p-3 rounded-full">
        <Icon size={24} className="text-blue-600" />
      </div>
    </div>
  </div>
);