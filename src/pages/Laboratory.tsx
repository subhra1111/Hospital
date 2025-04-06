import React from 'react';

export default function Laboratory() {
  const tests = [
    { id: 1, patient: 'John Doe', test: 'Blood Test', status: 'Pending', date: '2024-03-15' },
    { id: 2, patient: 'Jane Smith', test: 'X-Ray', status: 'Completed', date: '2024-03-14' },
    { id: 3, patient: 'Mike Johnson', test: 'MRI Scan', status: 'In Progress', date: '2024-03-13' },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Laboratory Management</h2>
        <p className="text-gray-600 mt-1">Track and manage laboratory tests</p>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tests.map((test) => (
              <tr key={test.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{test.patient}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{test.test}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{test.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    test.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    test.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {test.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-4">View Results</button>
                  <button className="text-green-600 hover:text-green-900">Update Status</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}