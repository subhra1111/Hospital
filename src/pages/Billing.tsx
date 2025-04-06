import React from 'react';

export default function Billing() {
  const bills = [
    { id: 1, patient: 'John Doe', amount: 1500, status: 'Paid', date: '2024-03-15' },
    { id: 2, patient: 'Jane Smith', amount: 2300, status: 'Pending', date: '2024-03-14' },
    { id: 3, patient: 'Mike Johnson', amount: 800, status: 'Overdue', date: '2024-03-13' },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Billing Management</h2>
        <p className="text-gray-600 mt-1">Track and manage patient bills</p>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bills.map((bill) => (
              <tr key={bill.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{bill.patient}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${bill.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bill.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    bill.status === 'Paid' ? 'bg-green-100 text-green-800' :
                    bill.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {bill.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-4">View Details</button>
                  <button className="text-green-600 hover:text-green-900">Process Payment</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}