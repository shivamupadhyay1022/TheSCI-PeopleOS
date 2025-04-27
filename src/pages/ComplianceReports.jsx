import React, { useState } from 'react';
import { 
  Plus,
  FileText,
  Download,
  CheckCircle,
  AlertTriangle,
  Clock
} from 'lucide-react';

function ComplianceReports() {
  // State for active tab
  const [activeTab, setActiveTab] = useState('all');
  
  // Sample reports data
  const reports = [
    {
      id: 1,
      title: 'Annual Labor Compliance Report',
      description: 'Overview of company compliance with labor regulations',
      category: 'labor',
      lastGenerated: '11/02/2023',
      compliancePercentage: 92,
      isReady: true
    },
    {
      id: 2,
      title: 'Employee Classification Report',
      description: 'Analysis of employee classification compliance',
      category: 'labor',
      lastGenerated: '10/15/2023',
      compliancePercentage: 85,
      isReady: true
    },
    {
      id: 3,
      title: 'GDPR Data Protection Report',
      description: 'Review of GDPR compliance for employee data',
      category: 'other',
      lastGenerated: '',
      compliancePercentage: 0,
      isReady: false,
      isGenerating: true
    },
    {
      id: 4,
      title: 'Employment Equity Report',
      description: 'Assessment of diversity and inclusion practices',
      category: 'labor',
      lastGenerated: '',
      compliancePercentage: 88,
      isReady: true
    },
    {
      id: 5,
      title: 'Tax Withholding Compliance',
      description: 'Verification of proper tax withholding for all employees',
      category: 'tax',
      lastGenerated: '10/05/2023',
      compliancePercentage: 100,
      isReady: true
    },
    {
      id: 6,
      title: 'Health & Safety Audit Report',
      description: 'Assessment of workplace health and safety compliance',
      category: 'health',
      lastGenerated: '09/28/2023',
      compliancePercentage: 78,
      isReady: true
    },
    {
      id: 7,
      title: 'Benefits Compliance Report',
      description: 'Analysis of benefits administration compliance',
      category: 'other',
      lastGenerated: '',
      compliancePercentage: 0,
      isReady: false,
      needsDataInput: true
    },
    {
      id: 8,
      title: 'Contractor Classification Audit',
      description: 'Review of compliance in contractor classification',
      category: 'labor',
      lastGenerated: '',
      compliancePercentage: 94,
      isReady: true
    }
  ];
  
  // Count reports by category
  const reportCounts = {
    labor: reports.filter(report => report.category === 'labor').length,
    tax: reports.filter(report => report.category === 'tax').length,
    health: reports.filter(report => report.category === 'health').length,
    other: reports.filter(report => report.category === 'other').length
  };
  
  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  // Function to handle new report
  const handleNewReport = () => {
    alert('Create new report');
  };
  
  // Function to handle download report
  const handleDownloadReport = (id) => {
    alert(`Download report ${id}`);
  };
  
  // Function to get compliance color
  const getComplianceColor = (percentage) => {
    if (percentage >= 90) {
      return 'bg-green-500';
    } else if (percentage >= 80) {
      return 'bg-yellow-500';
    } else {
      return 'bg-red-500';
    }
  };
  
  // Function to get compliance text color
  const getComplianceTextColor = (percentage) => {
    if (percentage >= 90) {
      return 'text-green-700 dark:text-green-400';
    } else if (percentage >= 80) {
      return 'text-yellow-700 dark:text-yellow-400';
    } else {
      return 'text-red-700 dark:text-red-400';
    }
  };
  
  // Filter reports based on active tab
  const filteredReports = reports.filter(report => {
    if (activeTab === 'all') return true;
    if (activeTab === 'labor') return report.category === 'labor';
    if (activeTab === 'tax') return report.category === 'tax';
    if (activeTab === 'health') return report.category === 'health';
    return false;
  });
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Compliance Reports</h1>
        <div className="flex items-center space-x-4">
          <select
            className="block rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm dark:bg-gray-800 dark:text-white"
          >
            <option value="quarterly">Quarterly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
          <button
            onClick={handleNewReport}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md"
          >
            <Plus className="h-4 w-4" />
            <span>New Report</span>
          </button>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Labor Laws */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Labor Laws
                </span>
                <span className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                  {reportCounts.labor}
                </span>
              </div>
              <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Tax Compliance */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Tax Compliance
                </span>
                <span className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                  {reportCounts.tax}
                </span>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                <FileText className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Health & Safety */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Health & Safety
                </span>
                <span className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                  {reportCounts.health}
                </span>
              </div>
              <div className="h-10 w-10 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                <FileText className="h-5 w-5 text-red-600 dark:text-red-400" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Other Reports */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Other Reports
                </span>
                <span className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                  {reportCounts.other}
                </span>
              </div>
              <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                <FileText className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Available Reports */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Available Reports</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Access and download compliance reports for your organization
          </p>
        </div>
        
        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-800">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => handleTabChange('all')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'all'
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              All Reports
            </button>
            <button
              onClick={() => handleTabChange('labor')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'labor'
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Labor Laws
            </button>
            <button
              onClick={() => handleTabChange('tax')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'tax'
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Tax
            </button>
            <button
              onClick={() => handleTabChange('health')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'health'
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Health & Safety
            </button>
          </nav>
        </div>
        
        {/* Reports Grid */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReports.map((report) => (
            <div key={report.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-1">
                  <h3 className="text-md font-medium text-gray-900 dark:text-white flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                    {report.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {report.description}
                  </p>
                  {report.lastGenerated && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      Last generated: {report.lastGenerated}
                    </p>
                  )}
                </div>
                
                {report.compliancePercentage > 0 && (
                  <div className={`px-2 py-1 rounded-full text-xs font-semibold ${getComplianceTextColor(report.compliancePercentage)} bg-opacity-20`}>
                    {report.compliancePercentage}%
                  </div>
                )}
              </div>
              
              {report.compliancePercentage > 0 && (
                <div className="mt-4">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className={`${getComplianceColor(report.compliancePercentage)} h-2 rounded-full`} 
                      style={{ width: `${report.compliancePercentage}%` }}
                    ></div>
                  </div>
                  <div className="mt-1 text-xs text-right text-gray-500 dark:text-gray-400">
                    {report.compliancePercentage}% compliant
                  </div>
                </div>
              )}
              
              <div className="mt-4 flex justify-between items-center">
                {report.isReady ? (
                  <button
                    className="flex items-center text-sm text-purple-600 dark:text-purple-400"
                  >
                    <CheckCircle className="h-4 w-4 mr-1" />
                    <span>Ready to download</span>
                  </button>
                ) : report.isGenerating ? (
                  <button
                    className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                  >
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Generating...</span>
                  </button>
                ) : report.needsDataInput ? (
                  <button
                    className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                  >
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    <span>Needs data input</span>
                  </button>
                ) : (
                  <div></div>
                )}
                
                {report.isReady && (
                  <button
                    onClick={() => handleDownloadReport(report.id)}
                    className="flex items-center gap-1 px-3 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-md text-sm"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ComplianceReports;
