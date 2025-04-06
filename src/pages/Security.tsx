import React from 'react';
import { Shield, Key, Users, AlertTriangle } from 'lucide-react';

export default function Security() {
  const securityModules = [
    {
      id: 1,
      title: 'Access Control',
      icon: Key,
      description: 'Manage user roles and permissions',
      status: 'Active',
    },
    {
      id: 2,
      title: 'User Authentication',
      icon: Users,
      description: 'Configure login and verification settings',
      status: 'Active',
    },
    {
      id: 3,
      title: 'Security Logs',
      icon: Shield,
      description: 'View system access and security logs',
      status: 'Active',
    },
    {
      id: 4,
      title: 'Threat Detection',
      icon: AlertTriangle,
      description: 'Monitor and manage security threats',
      status: 'Active',
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Security Management</h2>
        <p className="text-gray-600 mt-1">Manage system security and access control</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {securityModules.map((module) => (
          <div key={module.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <module.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">{module.title}</h3>
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                  {module.status}
                </span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{module.description}</p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Configure
              </button>
              <button className="text-blue-600 hover:text-blue-700 px-4 py-2">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}