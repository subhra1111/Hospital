import React from 'react';
import { BarChart3, TrendingUp, Users, Receipt } from 'lucide-react';

export default function Reports() {
  const reports = [
    { id: 1, title: 'Patient Statistics', icon: Users, description: 'Monthly patient admission and discharge reports' },
    { id: 2, title: 'Revenue Analysis', icon: TrendingUp, description: 'Financial performance and revenue trends' },
    { id: 3, title: 'Inventory Status', icon: BarChart3, description: 'Current stock levels and usage patterns' },
    { id: 4, title: 'Billing Summary', icon: Receipt, description: 'Overview of payments and pending bills' },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Reports & Analytics</h2>
        <p className="text-gray-600 mt-1">View and generate hospital reports</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report) => (
          <div key={report.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <report.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="ml-4 text-lg font-semibold text-gray-800">{report.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{report.description}</p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Generate Report
              </button>
              <button className="text-blue-600 hover:text-blue-700 px-4 py-2">
                View History
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}