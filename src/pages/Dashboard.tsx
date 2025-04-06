import React from 'react';
import { Users, Calendar, FlaskRound as Flask, Receipt } from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { ActivityFeed } from '../components/ActivityFeed';

export default function Dashboard() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
        <p className="text-gray-600 mt-1">Welcome back, Dr. Smith</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Patients" value="1,234" icon={Users} change="+12%" />
        <StatCard title="Appointments Today" value="48" icon={Calendar} change="+5%" />
        <StatCard title="Lab Tests" value="156" icon={Flask} change="-3%" />
        <StatCard title="Revenue" value="$52,389" icon={Receipt} change="+8%" />
      </div>

      <ActivityFeed />
    </div>
  );
}