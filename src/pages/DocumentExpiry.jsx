import React, { useState } from 'react';
import { 
  Plus,
  FileText,
  Clock,
  AlertTriangle,
  CheckCircle,
  Download,
  Eye,
  Bell
} from 'lucide-react';

function DocumentExpiry() {
  // State for active tab
  const [activeTab, setActiveTab] = useState('all');
  
  // Sample document data
  const documents = [
    {
      id: 1,
      employeeName: 'John Doe',
      documentType: 'Work Permit',
      expiryDate: '2023-05-15',
      status: 'expiring-soon',
      reminderSent: true
    },
    {
      id: 2,
      employeeName: 'Jane Smith',
      documentType: 'Health Insurance',
      expiryDate: '2023-07-22',
      status: 'active',
      reminderSent: true
    },
    {
      id: 3,
      employeeName: 'Michael Johnson',
      documentType: 'Driver\'s License',
      expiryDate: '2023-04-15',
      status: 'expired',
      reminderSent: true
    },
    {
      id: 4,
      employeeName: 'Sarah Williams',
      documentType: 'Certifications',
      expiryDate: '2024-01-10',
      status: 'active',
      reminderSent: true
    },
    {
      id: 5,
      employeeName: 'David Brown',
      documentType: 'Visa',
      expiryDate: '2024-05-02',
      status: 'expiring-soon',
      reminderSent: true
    },
    {
      id: 6,
      employeeName: 'Emily Davis',
      documentType: 'Contract',
      expiryDate: '2024-10-15',
      status: 'active',
      reminderSent: true
    },
    {
      id: 7,
      employeeName: 'Robert Wilson',
      documentType: 'Work Permit',
      expiryDate: '2023-03-28',
      status: 'expired',
      reminderSent: true
    }
  ];
  
  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  // Function to handle new document
  const handleNewDocument = () => {
    alert('Add new document');
  };
  
  // Function to handle view document
  const handleViewDocument = (id) => {
    alert(`View document ${id}`);
  };
  
  // Function to handle send reminder
  const handleSendReminder = (id) => {
    alert(`Send reminder for document ${id}`);
  };
  
  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
  };
  
  // Function to get status text
  const getStatusText = (status) => {
    switch(status) {
      case 'active':
        return 'Active';
      case 'expiring-soon':
        return 'Expiring Soon';
      case 'expired':
        return 'Expired';
      default:
        return status;
    }
  };
  
  // Function to get status color
  const getStatusColor = (status) => {
    switch(status) {
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'expiring-soon':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'expired':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };
  
  // Function to get level color
  const getLevelColor = (status) => {
    switch(status) {
      case 'active':
        return 'bg-green-500';
      case 'expiring-soon':
        return 'bg-yellow-500';
      case 'expired':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };
  
  // Filter documents based on active tab
  const filteredDocuments = documents.filter(doc => {
    if (activeTab === 'all') return true;
    return doc.status === activeTab;
  });
  
  // Count documents by status
  const documentCounts = {
    'expiring-soon': documents.filter(doc => doc.status === 'expiring-soon').length,
    'expired': documents.filter(doc => doc.status === 'expired').length,
    'active': documents.filter(doc => doc.status === 'active').length
  };
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Document Expiry Management</h1>
        <button
          onClick={handleNewDocument}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md"
        >
          <Plus className="h-4 w-4" />
          <span>New Document</span>
        </button>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Expiring Soon */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  {documentCounts['expiring-soon']}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Documents expiring soon
                </span>
              </div>
              <div className="h-12 w-12 rounded-full bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center">
                <Clock className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Expired */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  {documentCounts['expired']}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Expired documents
                </span>
              </div>
              <div className="h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Active */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  {documentCounts['active']}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Active documents
                </span>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Document Expiry Tracker */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Document Expiry Tracker</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Monitor and manage document expirations for compliance
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
              All Documents
            </button>
            <button
              onClick={() => handleTabChange('expiring-soon')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'expiring-soon'
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Expiring Soon
            </button>
            <button
              onClick={() => handleTabChange('expired')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'expired'
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Expired
            </button>
          </nav>
        </div>
        
        {/* Table */}
        <div className="overflow-x-auto">
          <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center space-x-4">
              <select
                className="block w-40 rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm dark:bg-gray-800 dark:text-white"
              >
                <option value="">Document Type</option>
                <option value="work-permit">Work Permit</option>
                <option value="health-insurance">Health Insurance</option>
                <option value="drivers-license">Driver's License</option>
                <option value="certifications">Certifications</option>
                <option value="visa">Visa</option>
                <option value="contract">Contract</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search employee..."
                  className="block w-64 rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                />
              </div>
              <button
                className="p-2 bg-gray-100 dark:bg-gray-800 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <Download className="h-5 w-5" />
              </button>
            </div>
          </div>
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Employee Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Document Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Expiry Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Level/Meter
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Reminder Sent
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
              {filteredDocuments.map((document) => (
                <tr key={document.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {document.employeeName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {document.documentType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {formatDate(document.expiryDate)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(document.status)}`}>
                      {getStatusText(document.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${getLevelColor(document.status)}`} 
                        style={{ width: document.status === 'active' ? '100%' : document.status === 'expiring-soon' ? '50%' : '10%' }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {document.reminderSent ? 'Sent' : 'Not Sent'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => handleViewDocument(document.id)}
                        className="text-purple-600 hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-300"
                      >
                        <Eye className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleSendReminder(document.id)}
                        className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <Bell className="h-5 w-5" />
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

export default DocumentExpiry;
