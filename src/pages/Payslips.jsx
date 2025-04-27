import React, { useState } from 'react';
import { 
  Search, 
  Eye,
  Download,
  Printer,
  ChevronDown
} from 'lucide-react';

function Payslips() {
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');
  // State for selected period
  const [selectedPeriod, setSelectedPeriod] = useState('April 2023');
  
  // Sample payslip data
  const payslips = [
    {
      id: 1,
      employeeId: 1,
      employeeName: 'John Doe',
      department: 'Engineering',
      period: 'April 2023',
      netSalary: 4250.00,
      status: 'Processed'
    },
    {
      id: 2,
      employeeId: 2,
      employeeName: 'Jane Smith',
      department: 'Human Resources',
      period: 'April 2023',
      netSalary: 4550.00,
      status: 'Processed'
    },
    {
      id: 3,
      employeeId: 3,
      employeeName: 'Michael Johnson',
      department: 'Marketing',
      period: 'April 2023',
      netSalary: 4350.00,
      status: 'Processed'
    },
    {
      id: 4,
      employeeId: 4,
      employeeName: 'Emily Williams',
      department: 'Finance',
      period: 'April 2023',
      netSalary: 4050.00,
      status: 'Processed'
    },
    {
      id: 5,
      employeeId: 5,
      employeeName: 'David Brown',
      department: 'Product',
      period: 'April 2023',
      netSalary: 4250.00,
      status: 'Processed'
    }
  ];
  
  // Available periods for dropdown
  const periods = ['April 2023', 'March 2023', 'February 2023', 'January 2023'];
  
  // Function to handle view payslip
  const handleViewPayslip = (payslipId) => {
    alert(`Viewing payslip ID: ${payslipId}`);
  };
  
  // Function to handle download payslip
  const handleDownloadPayslip = (payslipId) => {
    alert(`Downloading payslip ID: ${payslipId}`);
  };
  
  // Function to handle print payslip
  const handlePrintPayslip = (payslipId) => {
    alert(`Printing payslip ID: ${payslipId}`);
  };
  
  // Function to handle bulk download
  const handleBulkDownload = () => {
    alert('Bulk downloading payslips');
  };
  
  // Function to handle bulk print
  const handleBulkPrint = () => {
    alert('Bulk printing payslips');
  };
  
  // Function to format currency
  const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`;
  };
  
  // Filter payslips based on search query and selected period
  const filteredPayslips = payslips.filter(payslip => {
    return (
      payslip.period === selectedPeriod &&
      (searchQuery === '' || 
       payslip.employeeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
       payslip.department.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Payslips</h1>
      
      {/* Payslip Management Section */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Payslip Management</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            View, download and print payslips for all employees
          </p>
        </div>
        
        {/* Search and Actions */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search */}
            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search employees..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            
            {/* Period Dropdown and Bulk Actions */}
            <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
              {/* Period Dropdown */}
              <div className="relative w-full sm:w-40">
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800 dark:text-white"
                >
                  {periods.map((period) => (
                    <option key={period} value={period}>
                      {period}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
              
              {/* Bulk Actions */}
              <div className="flex gap-2">
                <button
                  onClick={handleBulkDownload}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm"
                >
                  <Download className="h-4 w-4" />
                  <span>Bulk Download</span>
                </button>
                <button
                  onClick={handleBulkPrint}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md text-sm"
                >
                  <Printer className="h-4 w-4" />
                  <span>Bulk Print</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Payslips Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Employee ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Employee Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Department
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Period
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Net Salary
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
              {filteredPayslips.map((payslip) => (
                <tr key={payslip.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{payslip.employeeId}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{payslip.employeeName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-400">{payslip.department}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{payslip.period}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{formatCurrency(payslip.netSalary)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {payslip.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-3">
                      <button 
                        onClick={() => handleViewPayslip(payslip.id)}
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                        title="View"
                      >
                        <Eye className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={() => handleDownloadPayslip(payslip.id)}
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                        title="Download"
                      >
                        <Download className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={() => handlePrintPayslip(payslip.id)}
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                        title="Print"
                      >
                        <Printer className="h-5 w-5" />
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

export default Payslips;
