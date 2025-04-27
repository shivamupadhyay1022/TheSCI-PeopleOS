import React, { useState } from 'react';
import { 
  Plus,
  Save,
  ChevronDown
} from 'lucide-react';

function TaxConfiguration() {
  // State for tax brackets
  const [taxBrackets, setTaxBrackets] = useState([
    {
      id: 1,
      incomeFrom: 0,
      incomeTo: 10000,
      taxRate: 0,
      description: 'Tax free allowance'
    },
    {
      id: 2,
      incomeFrom: 10001,
      incomeTo: 50000,
      taxRate: 10,
      description: 'Lower income'
    },
    {
      id: 3,
      incomeFrom: 50001,
      incomeTo: 100000,
      taxRate: 20,
      description: 'Middle income'
    },
    {
      id: 4,
      incomeFrom: 100001,
      incomeTo: 'Above',
      taxRate: 30,
      description: 'Higher income'
    }
  ]);
  
  // State for tax settings
  const [taxSettings, setTaxSettings] = useState({
    taxYear: '2023',
    filingFrequency: 'Monthly',
    companyTaxId: 'TAX-12345678'
  });
  
  // State for tax deductions
  const [taxDeductions, setTaxDeductions] = useState([
    {
      id: 1,
      name: 'Health Insurance Premiums',
      description: 'Health insurance premiums are tax deductible',
      enabled: true
    },
    {
      id: 2,
      name: 'Retirement Contributions',
      description: '401(k) or similar retirement plans',
      enabled: true
    },
    {
      id: 3,
      name: 'Educational Expenses',
      description: 'Deduction for educational expenses',
      enabled: false
    }
  ]);
  
  // Function to handle edit tax bracket
  const handleEditBracket = (id) => {
    alert(`Edit tax bracket with ID: ${id}`);
  };
  
  // Function to handle delete tax bracket
  const handleDeleteBracket = (id) => {
    alert(`Delete tax bracket with ID: ${id}`);
  };
  
  // Function to handle add tax bracket
  const handleAddBracket = () => {
    alert('Add new tax bracket');
  };
  
  // Function to handle save tax settings
  const handleSaveTaxSettings = () => {
    alert('Save tax settings');
  };
  
  // Function to handle save deduction settings
  const handleSaveDeductionSettings = () => {
    alert('Save deduction settings');
  };
  
  // Function to handle toggle deduction
  const handleToggleDeduction = (id) => {
    setTaxDeductions(taxDeductions.map(deduction => 
      deduction.id === id ? { ...deduction, enabled: !deduction.enabled } : deduction
    ));
  };
  
  // Function to format currency
  const formatCurrency = (amount) => {
    if (amount === 'Above') return amount;
    return amount.toLocaleString();
  };
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Tax Configuration</h1>
        <button 
          onClick={handleAddBracket}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm"
        >
          <Plus className="h-4 w-4" />
          <span>Add Tax Bracket</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tax Brackets */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden lg:col-span-1">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Tax Brackets</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Define income tax brackets and rates
            </p>
          </div>
          
          {/* Tax Brackets Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Income From ($)
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Income To ($)
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Tax Rate
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
                {taxBrackets.map((bracket) => (
                  <tr key={bracket.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">{formatCurrency(bracket.incomeFrom)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">{formatCurrency(bracket.incomeTo)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">{bracket.taxRate}%</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 dark:text-gray-400">{bracket.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-3">
                        <button 
                          onClick={() => handleEditBracket(bracket.id)}
                          className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => handleDeleteBracket(bracket.id)}
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
        
        {/* Tax Settings */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden lg:col-span-1">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Tax Settings</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Configure general tax settings
            </p>
          </div>
          
          <div className="p-6 space-y-6">
            {/* Tax Year */}
            <div>
              <label htmlFor="taxYear" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Tax Year
              </label>
              <input
                type="text"
                id="taxYear"
                value={taxSettings.taxYear}
                onChange={(e) => setTaxSettings({...taxSettings, taxYear: e.target.value})}
                className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800 dark:text-white"
              />
            </div>
            
            {/* Filing Frequency */}
            <div>
              <label htmlFor="filingFrequency" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Tax Filing Frequency
              </label>
              <div className="relative">
                <select
                  id="filingFrequency"
                  value={taxSettings.filingFrequency}
                  onChange={(e) => setTaxSettings({...taxSettings, filingFrequency: e.target.value})}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800 dark:text-white"
                >
                  <option value="Monthly">Monthly</option>
                  <option value="Quarterly">Quarterly</option>
                  <option value="Annually">Annually</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
            
            {/* Company Tax ID */}
            <div>
              <label htmlFor="companyTaxId" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Company Tax ID
              </label>
              <input
                type="text"
                id="companyTaxId"
                value={taxSettings.companyTaxId}
                onChange={(e) => setTaxSettings({...taxSettings, companyTaxId: e.target.value})}
                className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800 dark:text-white"
              />
            </div>
            
            {/* Save Button */}
            <button
              onClick={handleSaveTaxSettings}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md"
            >
              <Save className="h-4 w-4" />
              <span>Save Tax Settings</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Tax Deductions & Exemptions */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Tax Deductions & Exemptions</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Configure allowable deductions and tax exemptions
          </p>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Deductions List */}
          <div className="space-y-4">
            {taxDeductions.map((deduction) => (
              <div key={deduction.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-md">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">{deduction.name}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{deduction.description}</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`deduction-${deduction.id}`}
                    checked={deduction.enabled}
                    onChange={() => handleToggleDeduction(deduction.id)}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <label htmlFor={`deduction-${deduction.id}`} className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    Enabled
                  </label>
                </div>
              </div>
            ))}
          </div>
          
          {/* Save Button */}
          <button
            onClick={handleSaveDeductionSettings}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm"
          >
            <Save className="h-4 w-4" />
            <span>Save Deduction Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaxConfiguration;
