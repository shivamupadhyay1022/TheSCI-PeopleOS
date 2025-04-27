import React, { useState } from 'react';
import { 
  Eye,
  FileText,
  Send,
  Download,
  ChevronDown
} from 'lucide-react';

function PayrollProcessing() {
  // State for selected month and year
  const [selectedMonth, setSelectedMonth] = useState('April');
  const [selectedYear, setSelectedYear] = useState('2023');
  
  // Sample payroll batches data
  const payrollBatches = [
    {
      id: 1,
      month: 'March',
      year: '2023',
      processedDate: 'Apr 1, 2023'
    },
    {
      id: 2,
      month: 'February',
      year: '2023',
      processedDate: 'Mar 1, 2023'
    }
  ];
  
  // Sample employee compensation data
  const employeeCompensation = [
    {
      id: 1,
      name: 'John Doe',
      department: 'Engineering',
      grossSalary: 5000.00,
      deductions: 750.00,
      netSalary: 4250.00
    },
    {
      id: 2,
      name: 'Jane Smith',
      department: 'Human Resources',
      grossSalary: 5500.00,
      deductions: 950.00,
      netSalary: 4550.00
    },
    {
      id: 3,
      name: 'Michael Johnson',
      department: 'Marketing',
      grossSalary: 5000.00,
      deductions: 650.00,
      netSalary: 4350.00
    },
    {
      id: 4,
      name: 'Emily Williams',
      department: 'Finance',
      grossSalary: 5000.00,
      deductions: 950.00,
      netSalary: 4050.00
    },
    {
      id: 5,
      name: 'David Brown',
      department: 'Product',
      grossSalary: 5000.00,
      deductions: 750.00,
      netSalary: 4250.00
    }
  ];
  
  // Available months and years for dropdowns
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const years = ['2023', '2022', '2021', '2020'];
  
  // Function to handle process payroll
  const handleProcessPayroll = () => {
    alert(`Processing payroll for ${selectedMonth} ${selectedYear}`);
  };
  
  // Function to handle view payslip
  const handleViewPayslip = (employeeId) => {
    alert(`Viewing payslip for employee ID: ${employeeId}`);
  };
  
  // Function to handle send payslip
  const handleSendPayslip = (employeeId) => {
    alert(`Sending payslip for employee ID: ${employeeId}`);
  };
  
  // Function to format currency
  const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`;
  };
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Payroll Processing</h1>
      
      {/* Top Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Period Selection */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Period Selection</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Select the month and year for payroll processing
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Month Dropdown */}
            <div>
              <label htmlFor="month" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Month
              </label>
              <div className="relative">
                <select
                  id="month"
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800 dark:text-white"
                >
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
            
            {/* Year Dropdown */}
            <div>
              <label htmlFor="year" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Year
              </label>
              <div className="relative">
                <select
                  id="year"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800 dark:text-white"
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Process Payroll Button */}
          <button
            onClick={handleProcessPayroll}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2"
          >
            <FileText className="h-4 w-4" />
            <span>Process Payroll</span>
          </button>
        </div>
        
        {/* Recent Payroll Batches */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Recent Payroll Batches</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Previously processed payroll batches
          </p>
          
          <div className="space-y-4">
            {payrollBatches.map((batch) => (
              <div key={batch.id} className="border border-gray-200 dark:border-gray-700 rounded-md p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-md font-medium text-gray-900 dark:text-white">
                      {batch.month} {batch.year}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Processed on {batch.processedDate}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                      <Eye className="h-5 w-5" />
                    </button>
                    <button className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Employee Compensation Summary */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Employee Compensation Summary</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Overview of employee compensation for the selected period
          </p>
        </div>
        
        {/* Employee Compensation Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Employee
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Department
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Gross Salary
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Deductions
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Net Salary
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
              {employeeCompensation.map((employee) => (
                <tr key={employee.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{employee.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-400">{employee.department}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{formatCurrency(employee.grossSalary)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{formatCurrency(employee.deductions)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{formatCurrency(employee.netSalary)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-3">
                      <button 
                        onClick={() => handleViewPayslip(employee.id)}
                        className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1"
                      >
                        <Eye className="h-4 w-4" />
                        <span>Payslip</span>
                      </button>
                      <button 
                        onClick={() => handleSendPayslip(employee.id)}
                        className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300 flex items-center gap-1"
                      >
                        <Send className="h-4 w-4" />
                        <span>Send</span>
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

export default PayrollProcessing;
