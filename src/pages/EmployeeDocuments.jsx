import React, { useState } from 'react';
import { 
  FileText, 
  Upload, 
  Plus, 
  Search, 
  MoreHorizontal,
  FileSpreadsheet,
  FileImage
} from 'lucide-react';

function EmployeeDocuments() {
  // State for active tab
  const [activeTab, setActiveTab] = useState('all');

  // Document categories with counts
  const documentCategories = [
    { id: 'contracts', name: 'Employment Contracts', count: 47, icon: <FileText className="h-8 w-8 text-purple-500" /> },
    { id: 'id', name: 'ID Documents', count: 42, icon: <FileText className="h-8 w-8 text-purple-500" /> },
    { id: 'resumes', name: 'Resumes/CVs', count: 45, icon: <FileText className="h-8 w-8 text-purple-500" /> },
    { id: 'certifications', name: 'Certifications', count: 28, icon: <FileText className="h-8 w-8 text-purple-500" /> },
    { id: 'performance', name: 'Performance Reviews', count: 36, icon: <FileText className="h-8 w-8 text-purple-500" /> },
    { id: 'training', name: 'Training Records', count: 31, icon: <FileText className="h-8 w-8 text-purple-500" /> },
    { id: 'tax', name: 'Tax Documents', count: 45, icon: <FileText className="h-8 w-8 text-purple-500" /> },
  ];

  // Document data
  const documents = [
    {
      id: 1,
      name: 'Employment Contract',
      employee: 'John Smith',
      category: 'Contracts',
      type: 'PDF',
      size: '342 KB',
      uploaded: 'Apr 10, 2023',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Performance Review 2024',
      employee: 'Sarah Wilson',
      category: 'Performance',
      type: 'PDF',
      size: '2.1 MB',
      uploaded: 'Apr 8, 2023',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Passport Scan',
      employee: 'Michael Brown',
      category: 'Personal',
      type: 'JPG',
      size: '1.7 MB',
      uploaded: 'Apr 5, 2023',
      status: 'Active'
    },
    {
      id: 4,
      name: 'Tax Form W-4',
      employee: 'Emily Davis',
      category: 'Financial',
      type: 'PDF',
      size: '275 KB',
      uploaded: 'Apr 2, 2023',
      status: 'Active'
    },
    {
      id: 5,
      name: 'Professional Certification',
      employee: 'David Johnson',
      category: 'Training',
      type: 'PDF',
      size: '1.2 MB',
      uploaded: 'Mar 28, 2023',
      status: 'Active'
    }
  ];

  // Filter documents based on active tab
  const filteredDocuments = documents.filter(doc => {
    if (activeTab === 'all') return true;
    return doc.category.toLowerCase() === activeTab.toLowerCase();
  });

  // Function to get the appropriate icon based on file type
  const getFileIcon = (type) => {
    switch(type.toLowerCase()) {
      case 'pdf':
        return <FileText className="h-4 w-4 text-gray-500" />;
      case 'jpg':
      case 'png':
      case 'jpeg':
        return <FileImage className="h-4 w-4 text-gray-500" />;
      case 'xls':
      case 'xlsx':
      case 'csv':
        return <FileSpreadsheet className="h-4 w-4 text-gray-500" />;
      default:
        return <FileText className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Employee Documents</h1>
        <div className="flex space-x-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
            <Upload className="h-4 w-4" />
            <span>Upload</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm">
            <Plus className="h-4 w-4" />
            <span>New Document</span>
          </button>
        </div>
      </div>

      {/* Document Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {documentCategories.map((category) => (
          <div key={category.id} className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 flex flex-col items-center text-center">
            {category.icon}
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mt-2">{category.name}</h3>
            <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">{category.count}</p>
          </div>
        ))}
      </div>

      {/* Document Library */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Document Library</h2>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-800 px-4">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'all'
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              All Documents
            </button>
            <button
              onClick={() => setActiveTab('contracts')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'contracts'
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Contracts
            </button>
            <button
              onClick={() => setActiveTab('personal')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'personal'
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Personal
            </button>
            <button
              onClick={() => setActiveTab('financial')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'financial'
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Financial
            </button>
          </nav>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search documents..."
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
          </div>
        </div>

        {/* Documents Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Document Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Employee
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Size
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Uploaded
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
              {filteredDocuments.map((document) => (
                <tr key={document.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getFileIcon(document.type)}
                      <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">{document.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {document.employee}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {document.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {document.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {document.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {document.uploaded}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                      {document.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    <button className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
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

export default EmployeeDocuments;
