import React, { useState } from 'react';
import { 
  Download, 
  Printer,
  Mail,
  ChevronDown,
  ChevronRight,
  Eye
} from 'lucide-react';

function MyPayslips() {
  // State for selected year
  const [selectedYear, setSelectedYear] = useState('2023');
  
  // State for selected payslip
  const [selectedPayslip, setSelectedPayslip] = useState(null);
  
  // Sample payslip history data
  const payslipHistory = [
    {
      id: 1,
      month: 'April',
      year: '2023',
      payPeriod: 'April 01, 2023 to April 30',
      amount: 3850.00,
      netPay: 3850.00,
      grossPay: 5000.00,
      employeeInfo: {
        name: 'John Doe',
        jobTitle: 'Software Developer',
        employeeId: 'EMP-12345',
        department: 'Engineering'
      },
      earnings: [
        { description: 'Base Salary', amount: 5000.00, hours: null },
        { description: 'Overtime Allowance', amount: 500.00, hours: null },
        { description: 'Transport Allowance', amount: 300.00, hours: null },
        { description: 'Meal Allowance', amount: 150.00, hours: null },
        { description: 'Bonus Pay', amount: 1000.00, hours: null, note: 'Q2 Bonus' }
      ],
      deductions: [
        { description: 'Income Tax', amount: 750.00 },
        { description: 'Health Insurance', amount: 150.00 },
        { description: 'Retirement Fund', amount: 250.00 },
        { description: 'Total Deductions', amount: 1150.00 }
      ]
    },
    {
      id: 2,
      month: 'March',
      year: '2023',
      payPeriod: 'March 01, 2023 to March 31',
      amount: 3850.00,
      netPay: 3850.00,
      grossPay: 5000.00,
      employeeInfo: {
        name: 'John Doe',
        jobTitle: 'Software Developer',
        employeeId: 'EMP-12345',
        department: 'Engineering'
      },
      earnings: [
        { description: 'Base Salary', amount: 5000.00, hours: null },
        { description: 'Overtime Allowance', amount: 500.00, hours: null },
        { description: 'Transport Allowance', amount: 300.00, hours: null },
        { description: 'Meal Allowance', amount: 150.00, hours: null }
      ],
      deductions: [
        { description: 'Income Tax', amount: 750.00 },
        { description: 'Health Insurance', amount: 150.00 },
        { description: 'Retirement Fund', amount: 250.00 },
        { description: 'Total Deductions', amount: 1150.00 }
      ]
    },
    {
      id: 3,
      month: 'February',
      year: '2023',
      payPeriod: 'February 01, 2023 to February 28',
      amount: 3850.00,
      netPay: 3850.00,
      grossPay: 5000.00,
      employeeInfo: {
        name: 'John Doe',
        jobTitle: 'Software Developer',
        employeeId: 'EMP-12345',
        department: 'Engineering'
      },
      earnings: [
        { description: 'Base Salary', amount: 5000.00, hours: null },
        { description: 'Overtime Allowance', amount: 500.00, hours: null },
        { description: 'Transport Allowance', amount: 300.00, hours: null },
        { description: 'Meal Allowance', amount: 150.00, hours: null }
      ],
      deductions: [
        { description: 'Income Tax', amount: 750.00 },
        { description: 'Health Insurance', amount: 150.00 },
        { description: 'Retirement Fund', amount: 250.00 },
        { description: 'Total Deductions', amount: 1150.00 }
      ]
    },
    {
      id: 4,
      month: 'January',
      year: '2023',
      payPeriod: 'January 01, 2023 to January 31',
      amount: 3850.00,
      netPay: 3850.00,
      grossPay: 5000.00,
      employeeInfo: {
        name: 'John Doe',
        jobTitle: 'Software Developer',
        employeeId: 'EMP-12345',
        department: 'Engineering'
      },
      earnings: [
        { description: 'Base Salary', amount: 5000.00, hours: null },
        { description: 'Overtime Allowance', amount: 500.00, hours: null },
        { description: 'Transport Allowance', amount: 300.00, hours: null },
        { description: 'Meal Allowance', amount: 150.00, hours: null }
      ],
      deductions: [
        { description: 'Income Tax', amount: 750.00 },
        { description: 'Health Insurance', amount: 150.00 },
        { description: 'Retirement Fund', amount: 250.00 },
        { description: 'Total Deductions', amount: 1150.00 }
      ]
    },
    {
      id: 5,
      month: 'December',
      year: '2022',
      payPeriod: 'December 01, 2022 to December 31',
      amount: 3850.00,
      netPay: 3850.00,
      grossPay: 5000.00,
      employeeInfo: {
        name: 'John Doe',
        jobTitle: 'Software Developer',
        employeeId: 'EMP-12345',
        department: 'Engineering'
      },
      earnings: [
        { description: 'Base Salary', amount: 5000.00, hours: null },
        { description: 'Overtime Allowance', amount: 500.00, hours: null },
        { description: 'Transport Allowance', amount: 300.00, hours: null },
        { description: 'Meal Allowance', amount: 150.00, hours: null }
      ],
      deductions: [
        { description: 'Income Tax', amount: 750.00 },
        { description: 'Health Insurance', amount: 150.00 },
        { description: 'Retirement Fund', amount: 250.00 },
        { description: 'Total Deductions', amount: 1150.00 }
      ]
    },
    {
      id: 6,
      month: 'November',
      year: '2022',
      payPeriod: 'November 01, 2022 to November 30',
      amount: 3750.00,
      netPay: 3750.00,
      grossPay: 4900.00,
      employeeInfo: {
        name: 'John Doe',
        jobTitle: 'Software Developer',
        employeeId: 'EMP-12345',
        department: 'Engineering'
      },
      earnings: [
        { description: 'Base Salary', amount: 4900.00, hours: null },
        { description: 'Overtime Allowance', amount: 500.00, hours: null },
        { description: 'Transport Allowance', amount: 300.00, hours: null },
        { description: 'Meal Allowance', amount: 150.00, hours: null }
      ],
      deductions: [
        { description: 'Income Tax', amount: 750.00 },
        { description: 'Health Insurance', amount: 150.00 },
        { description: 'Retirement Fund', amount: 250.00 },
        { description: 'Total Deductions', amount: 1150.00 }
      ]
    }
  ];
  
  // Sample annual summary data
  const annualSummary = {
    yearToDateEarnings: 20800.00,
    yearToDateTaxPaid: 3000.00,
    retirementContributions: 1000.00,
    monthlyBreakdown: [
      { month: 'April 2023', grossPay: 5000.00, taxableincome: 5000.00, taxPaid: 750.00, netPay: 3850.00 },
      { month: 'March 2023', grossPay: 5000.00, taxableincome: 5000.00, taxPaid: 750.00, netPay: 3850.00 },
      { month: 'February 2023', grossPay: 5000.00, taxableincome: 5000.00, taxPaid: 750.00, netPay: 3850.00 }
    ]
  };
  
  // Filter payslips by year
  const filteredPayslips = payslipHistory.filter(payslip => payslip.year === selectedYear);
  
  // Function to handle year change
  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    setSelectedPayslip(null);
  };
  
  // Function to handle payslip selection
  const handlePayslipSelect = (payslip) => {
    setSelectedPayslip(payslip);
  };
  
  // Function to handle download payslip
  const handleDownloadPayslip = () => {
    alert('Download payslip');
  };
  
  // Function to handle print payslip
  const handlePrintPayslip = () => {
    alert('Print payslip');
  };
  
  // Function to handle email payslip
  const handleEmailPayslip = () => {
    alert('Email payslip');
  };
  
  // Function to handle view transfer details
  const handleViewTransferDetails = () => {
    alert('View transfer details');
  };
  
  // Function to handle view monthly details
  const handleViewMonthlyDetails = (month) => {
    alert(`View details for ${month}`);
  };
  
  // Function to format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };
  
  // Available years
  const years = ['2023', '2022', '2021'];
  
  // Get selected payslip or default to first one
  const payslipDetails = selectedPayslip || (filteredPayslips.length > 0 ? filteredPayslips[0] : null);
  
  // Calculate total earnings
  const totalEarnings = payslipDetails?.earnings.reduce((total, earning) => total + earning.amount, 0) || 0;
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">My Payslips</h1>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Payslip History */}
        <div className="lg:col-span-1 bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Payslip History</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Select a payslip to view details
            </p>
          </div>
          
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <div className="relative">
              <select
                value={selectedYear}
                onChange={handleYearChange}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                {years.map((year, index) => (
                  <option key={index} value={year}>{year}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </div>
            </div>
          </div>
          
          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {filteredPayslips.map((payslip) => (
              <div 
                key={payslip.id} 
                className={`p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 ${
                  selectedPayslip?.id === payslip.id ? 'bg-purple-50 dark:bg-purple-900/10' : ''
                }`}
                onClick={() => handlePayslipSelect(payslip)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-md font-medium text-gray-900 dark:text-white">{payslip.month} {payslip.year}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{payslip.payPeriod}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-md font-semibold text-gray-900 dark:text-white">{formatCurrency(payslip.amount)}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Net Pay</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Payslip Details */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
          {payslipDetails ? (
            <>
              <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white">Payslip Details</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Pay period: {payslipDetails.payPeriod}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={handleDownloadPayslip}
                    className="p-1.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300"
                    title="Download"
                  >
                    <Download className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={handlePrintPayslip}
                    className="p-1.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300"
                    title="Print"
                  >
                    <Printer className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={handleEmailPayslip}
                    className="p-1.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300"
                    title="Email"
                  >
                    <Mail className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h3 className="text-md font-medium text-gray-900 dark:text-white">{payslipDetails.employeeInfo.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{payslipDetails.employeeInfo.jobTitle}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Employee ID: {payslipDetails.employeeInfo.employeeId}</p>
                  </div>
                  <div className="mt-4 md:mt-0 text-right">
                    <h3 className="text-md font-medium text-gray-900 dark:text-white">People, Inc.</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">123 Corporate Ave</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">New York, NY 10001</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Earnings */}
                  <div>
                    <h3 className="text-md font-medium text-gray-900 dark:text-white mb-4">Earnings</h3>
                    <table className="min-w-full">
                      <thead>
                        <tr>
                          <th className="text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider pb-2">Description</th>
                          <th className="text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider pb-2">Amount</th>
                          <th className="text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider pb-2">Hours/Units</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                        {payslipDetails.earnings.map((earning, index) => (
                          <tr key={index}>
                            <td className="py-2 text-sm text-gray-900 dark:text-white">
                              {earning.description}
                              {earning.note && (
                                <span className="block text-xs text-gray-500 dark:text-gray-400">{earning.note}</span>
                              )}
                            </td>
                            <td className="py-2 text-sm text-right text-gray-900 dark:text-white">{formatCurrency(earning.amount)}</td>
                            <td className="py-2 text-sm text-right text-gray-500 dark:text-gray-400">{earning.hours}</td>
                          </tr>
                        ))}
                        <tr className="border-t-2 border-gray-200 dark:border-gray-700">
                          <td className="py-2 text-sm font-medium text-gray-900 dark:text-white">Total Earnings</td>
                          <td className="py-2 text-sm font-medium text-right text-gray-900 dark:text-white">{formatCurrency(totalEarnings)}</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  {/* Deductions */}
                  <div>
                    <h3 className="text-md font-medium text-gray-900 dark:text-white mb-4">Deductions</h3>
                    <table className="min-w-full">
                      <thead>
                        <tr>
                          <th className="text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider pb-2">Description</th>
                          <th className="text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider pb-2">Amount</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                        {payslipDetails.deductions.map((deduction, index) => (
                          <tr key={index} className={deduction.description === 'Total Deductions' ? 'border-t-2 border-gray-200 dark:border-gray-700' : ''}>
                            <td className="py-2 text-sm text-gray-900 dark:text-white">{deduction.description}</td>
                            <td className="py-2 text-sm text-right text-gray-900 dark:text-white">{formatCurrency(deduction.amount)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                {/* Net Pay */}
                <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-md font-medium text-gray-900 dark:text-white">Net Pay</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Amount credited to your bank account</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-gray-900 dark:text-white">{formatCurrency(payslipDetails.netPay)}</p>
                    </div>
                  </div>
                  <button 
                    onClick={handleViewTransferDetails}
                    className="mt-2 flex items-center text-sm text-purple-600 dark:text-purple-400"
                  >
                    <span>View Transfer Details</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="p-6 text-center">
              <p className="text-gray-500 dark:text-gray-400">Select a payslip to view details</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Annual Earnings & Tax Summary */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Annual Earnings & Tax Summary</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Summary for the current tax year
          </p>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Year-to-Date Earnings */}
            <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Year-to-Date Earnings</h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{formatCurrency(annualSummary.yearToDateEarnings)}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Accumulated to date</p>
            </div>
            
            {/* Year-to-Date Tax Paid */}
            <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Year-to-Date Tax Paid</h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{formatCurrency(annualSummary.yearToDateTaxPaid)}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Includes all deductions</p>
            </div>
            
            {/* Retirement Contributions */}
            <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Retirement Contributions</h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{formatCurrency(annualSummary.retirementContributions)}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">401(k) contributions</p>
            </div>
          </div>
          
          {/* Monthly Breakdown Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Month
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Gross Pay
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Taxable Income
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Tax Paid
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Net Pay
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                {annualSummary.monthlyBreakdown.map((month, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {month.month}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500 dark:text-gray-400">
                      {formatCurrency(month.grossPay)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500 dark:text-gray-400">
                      {formatCurrency(month.taxableincome)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500 dark:text-gray-400">
                      {formatCurrency(month.taxPaid)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900 dark:text-white font-medium">
                      {formatCurrency(month.netPay)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      <button 
                        onClick={() => handleViewMonthlyDetails(month.month)}
                        className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300"
                      >
                        <span className="sr-only">View</span>
                        <Eye className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPayslips;
