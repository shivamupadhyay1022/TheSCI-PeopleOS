import React, { useState } from 'react';
import { 
  Edit,
  Trash2,
  Plus
} from 'lucide-react';

function SalaryStructure() {
  // Sample salary components data
  const [salaryComponents, setSalaryComponents] = useState([
    {
      id: 1,
      name: 'Basic Salary',
      type: 'Earning',
      taxable: 'Yes',
      percentage: '100%',
      description: 'Base salary component'
    },
    {
      id: 2,
      name: 'House Rent Allowance',
      type: 'Earning',
      taxable: 'No',
      percentage: '30%',
      description: 'Allowance for housing'
    },
    {
      id: 3,
      name: 'Transport Allowance',
      type: 'Earning',
      taxable: 'Yes',
      percentage: '10%',
      description: 'Allowance for transportation'
    },
    {
      id: 4,
      name: 'Medical Allowance',
      type: 'Earning',
      taxable: 'No',
      percentage: '5%',
      description: 'Allowance for medical expenses'
    },
    {
      id: 5,
      name: 'Income Tax',
      type: 'Deduction',
      taxable: 'Yes',
      percentage: 'Variable',
      description: 'Government income tax'
    },
    {
      id: 6,
      name: 'Provident Fund',
      type: 'Deduction',
      taxable: 'No',
      percentage: '12%',
      description: 'Employee retirement fund'
    }
  ]);
  
  // Function to handle edit component
  const handleEdit = (id) => {
    alert(`Edit component with ID: ${id}`);
  };
  
  // Function to handle delete component
  const handleDelete = (id) => {
    alert(`Delete component with ID: ${id}`);
  };
  
  // Function to handle add component
  const handleAddComponent = () => {
    alert('Add new salary component');
  };
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Salary Structure</h1>
        <button 
          onClick={handleAddComponent}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm"
        >
          <Plus className="h-4 w-4" />
          <span>Add Component</span>
        </button>
      </div>

      {/* Salary Components Section */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Salary Components</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Define the components that make up your organization's salary structure
          </p>
        </div>
        
        {/* Salary Components Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Component Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Taxable
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Percentage/Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
              {salaryComponents.map((component) => (
                <tr key={component.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{component.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      component.type === 'Earning' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    }`}>
                      {component.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{component.taxable}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{component.percentage}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-400">{component.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-3">
                      <button 
                        onClick={() => handleEdit(component.id)}
                        className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => handleDelete(component.id)}
                        className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SalaryStructure;
