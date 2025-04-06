import React from 'react';
import { Users, Calendar, FlaskRound as Flask } from 'lucide-react';

interface Activity {
  id: number;
  type: string;
  description: string;
  time: string;
  icon: React.ElementType;
}

export const ActivityFeed: React.FC = () => {
  const activities: Activity[] = [
    {
      id: 1,
      type: 'registration',
      description: 'New patient Sarah Johnson registered',
      time: '2 minutes ago',
      icon: Users,
    },
    {
      id: 2,
      type: 'appointment',
      description: 'Dr. Smith completed appointment with Patient #1234',
      time: '15 minutes ago',
      icon: Calendar,
    },
    {
      id: 3,
      type: 'lab',
      description: 'Lab results uploaded for Patient #5678',
      time: '1 hour ago',
      icon: Flask,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center justify-between py-3 border-b last:border-0">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <activity.icon className="text-blue-600" size={20} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-800">{activity.description}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
            <button className="text-sm text-blue-600 font-medium hover:text-blue-700">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}