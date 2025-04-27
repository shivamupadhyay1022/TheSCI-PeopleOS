import React, { useState } from 'react';
import {
  Download,
  FileText,
  Calendar,
  Users,
  DollarSign,
  BarChart2,
  Shield,
  Settings,
  ChevronLeft
} from 'lucide-react';

function Reports() {
  // State for active tab
  const [activeTab, setActiveTab] = useState('hr');

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Sample reports data
  const reports = {
    hr: [
      {
        id: 1,
        title: 'Employee Headcount',
        description: 'Monthly employee count by department',
        lastGenerated: 'Apr 10, 2023',
        icon: <Users className="h-5 w-5 text-blue-500" />
      },
      {
        id: 2,
        title: 'Turnover Rate',
        description: 'Employee turnover by department',
        lastGenerated: 'Apr 12, 2023',
        icon: <BarChart2 className="h-5 w-5 text-red-500" />
      },
      {
        id: 3,
        title: 'Recruitment Metrics',
        description: 'Hiring efficiency and time-to-fill',
        lastGenerated: 'Apr 5, 2023',
        icon: <Users className="h-5 w-5 text-green-500" />
      },
      {
        id: 4,
        title: 'Employee Demographics',
        description: 'Diversity and inclusion metrics',
        lastGenerated: 'Apr 8, 2023',
        icon: <Users className="h-5 w-5 text-purple-500" />
      }
    ],
    payroll: [
      {
        id: 5,
        title: 'Payroll Summary',
        description: 'Monthly payroll expenses by department',
        lastGenerated: 'Apr 15, 2023',
        icon: <DollarSign className="h-5 w-5 text-green-500" />
      },
      {
        id: 6,
        title: 'Compensation Analysis',
        description: 'Salary benchmarking and pay equity',
        lastGenerated: 'Apr 3, 2023',
        icon: <BarChart2 className="h-5 w-5 text-blue-500" />
      },
      {
        id: 7,
        title: 'Benefits Utilization',
        description: 'Employee benefits usage and costs',
        lastGenerated: 'Mar 28, 2023',
        icon: <DollarSign className="h-5 w-5 text-purple-500" />
      },
      {
        id: 8,
        title: 'Overtime Analysis',
        description: 'Overtime hours and costs by department',
        lastGenerated: 'Apr 7, 2023',
        icon: <Calendar className="h-5 w-5 text-orange-500" />
      }
    ],
    compliance: [
      {
        id: 9,
        title: 'Compliance Status',
        description: 'Regulatory compliance overview',
        lastGenerated: 'Apr 14, 2023',
        icon: <Shield className="h-5 w-5 text-blue-500" />
      },
      {
        id: 10,
        title: 'Training Compliance',
        description: 'Mandatory training completion rates',
        lastGenerated: 'Apr 9, 2023',
        icon: <Shield className="h-5 w-5 text-green-500" />
      },
      {
        id: 11,
        title: 'Document Expiry',
        description: 'Upcoming document and certification expirations',
        lastGenerated: 'Apr 11, 2023',
        icon: <FileText className="h-5 w-5 text-red-500" />
      },
      {
        id: 12,
        title: 'Audit Logs',
        description: 'System access and changes log',
        lastGenerated: 'Apr 13, 2023',
        icon: <Shield className="h-5 w-5 text-purple-500" />
      }
    ],
    custom: [
      {
        id: 13,
        title: 'Custom Report 1',
        description: 'User-defined report template',
        lastGenerated: 'Apr 2, 2023',
        icon: <Settings className="h-5 w-5 text-gray-500" />
      },
      {
        id: 14,
        title: 'Custom Report 2',
        description: 'User-defined report template',
        lastGenerated: 'Mar 30, 2023',
        icon: <Settings className="h-5 w-5 text-gray-500" />
      }
    ]
  };

  // Function to handle generate report
  const handleGenerateReport = (id) => {
    alert(`Generating report ${id}`);
  };

  // Function to handle export all
  const handleExportAll = () => {
    alert('Exporting all reports');
  };

  // Get current reports based on active tab
  const currentReports = reports[activeTab] || [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button className="p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Reports</h1>
        </div>
        <button
          onClick={handleExportAll}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md"
        >
          <Download className="h-4 w-4" />
          <span>Export All</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <nav className="flex space-x-8">
          <button
            onClick={() => handleTabChange('hr')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'hr'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            HR Reports
          </button>
          <button
            onClick={() => handleTabChange('payroll')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'payroll'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Payroll Reports
          </button>
          <button
            onClick={() => handleTabChange('compliance')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'compliance'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Compliance Reports
          </button>
          <button
            onClick={() => handleTabChange('custom')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'custom'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Custom Reports
          </button>
        </nav>
      </div>

      {/* Report Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentReports.map((report) => (
          <div key={report.id} className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
            <div className="p-6">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {report.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {report.description}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Last generated: {report.lastGenerated}
                  </div>
                  <button
                    onClick={() => handleGenerateReport(report.id)}
                    className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm"
                  >
                    <FileText className="h-4 w-4" />
                    <span>Generate</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State for Custom Reports */}
      {activeTab === 'custom' && currentReports.length < 1 && (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800 p-8 text-center">
          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No Custom Reports</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            You haven't created any custom reports yet.
          </p>
          <button
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md"
          >
            Create Custom Report
          </button>
        </div>
      )}
    </div>
  );
}

export default Reports;
