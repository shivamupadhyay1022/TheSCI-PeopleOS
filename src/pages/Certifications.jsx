import React, { useState } from 'react';
import { 
  Search, 
  Plus,
  ChevronDown,
  AlertCircle
} from 'lucide-react';

function Certifications() {
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');
  
  // State for selected employee filter
  const [selectedEmployee, setSelectedEmployee] = useState('All Employees');
  
  // State for selected status filter
  const [selectedStatus, setSelectedStatus] = useState('All Statuses');
  
  // Sample employee certifications data
  const employeeCertifications = [
    {
      id: 1,
      employee: {
        id: 101,
        name: 'John Doe'
      },
      certification: 'Project Management Professional (PMP)',
      issuingOrganization: 'PMI',
      issueDate: '2022-06-15',
      expiryDate: '2025-06-15',
      status: 'Active'
    },
    {
      id: 2,
      employee: {
        id: 102,
        name: 'Jane Smith'
      },
      certification: 'Certified Scrum Master',
      issuingOrganization: 'Scrum Alliance',
      issueDate: '2022-07-20',
      expiryDate: '2024-07-20',
      status: 'Active'
    },
    {
      id: 3,
      employee: {
        id: 103,
        name: 'Michael Johnson'
      },
      certification: 'AWS Certified Solutions Architect',
      issuingOrganization: 'Amazon Web Services',
      issueDate: '2022-05-10',
      expiryDate: '2025-05-10',
      status: 'Active'
    },
    {
      id: 4,
      employee: {
        id: 104,
        name: 'Emily Williams'
      },
      certification: 'Certified Public Accountant (CPA)',
      issuingOrganization: 'AICPA',
      issueDate: '2022-11-30',
      expiryDate: '2024-11-30',
      status: 'Expiring Soon'
    },
    {
      id: 5,
      employee: {
        id: 105,
        name: 'David Brown'
      },
      certification: 'SHRM-CP',
      issuingOrganization: 'SHRM',
      issueDate: '2022-09-15',
      expiryDate: '2025-09-15',
      status: 'Active'
    }
  ];
  
  // Sample expiring certifications data
  const expiringCertifications = [
    {
      id: 1,
      certification: 'Certified Public Accountant (CPA)',
      employee: {
        id: 104,
        name: 'Emily Williams'
      },
      expiryDate: '2024-11-30'
    },
    {
      id: 2,
      certification: 'Microsoft Certified Azure Administrator',
      employee: {
        id: 106,
        name: 'John Doe'
      },
      expiryDate: '2024-10-15'
    }
  ];
  
  // Calculate statistics
  const totalCertifications = employeeCertifications.length;
  const expiringSoon = employeeCertifications.filter(cert => cert.status === 'Expiring Soon').length;
  const inGoodStanding = employeeCertifications.filter(cert => cert.status === 'Active').length;
  
  // Function to handle search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  
  // Function to handle employee filter change
  const handleEmployeeChange = (e) => {
    setSelectedEmployee(e.target.value);
  };
  
  // Function to handle status filter change
  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };
  
  // Function to handle add new certification
  const handleAddNewCertification = () => {
    alert('Add new certification');
  };
  
  // Function to handle view certification
  const handleViewCertification = (id) => {
    alert(`View certification ID: ${id}`);
  };
  
  // Function to handle edit certification
  const handleEditCertification = (id) => {
    alert(`Edit certification ID: ${id}`);
  };
  
  // Function to handle renew certification
  const handleRenewCertification = (id) => {
    alert(`Renew certification ID: ${id}`);
  };
  
  // Filter certifications based on search query, employee, and status
  const filteredCertifications = employeeCertifications.filter(cert => {
    const matchesSearch = searchQuery === '' || 
      cert.certification.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuingOrganization.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesEmployee = selectedEmployee === 'All Employees' || cert.employee.name === selectedEmployee;
    
    const matchesStatus = selectedStatus === 'All Statuses' || cert.status === selectedStatus;
    
    return matchesSearch && matchesEmployee && matchesStatus;
  });
  
  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: '2-digit', month: '2-digit', day: '2-digit' });
  };
  
  // Function to get status badge
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Active':
        return (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            {status}
          </span>
        );
      case 'Expiring Soon':
        return (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
            {status}
          </span>
        );
      case 'Expired':
        return (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
            {status}
          </span>
        );
      default:
        return null;
    }
  };
  
  // Available employees
  const employees = ['All Employees', ...new Set(employeeCertifications.map(cert => cert.employee.name))];
  
  // Available statuses
  const statuses = ['All Statuses', 'Active', 'Expiring Soon', 'Expired'];
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Certifications</h1>
        <button 
          onClick={handleAddNewCertification}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm"
        >
          <Plus className="h-4 w-4" />
          <span>Add New Certification</span>
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Certifications */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border-l-4 border-blue-500">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Certifications</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{totalCertifications}</p>
        </div>
        
        {/* Expiring Soon */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border-l-4 border-yellow-500">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Expiring Soon</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{expiringSoon}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Within 90 days</p>
        </div>
        
        {/* In Good Standing */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border-l-4 border-green-500">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">In Good Standing</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{inGoodStanding}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Valid & active</p>
        </div>
      </div>
      
      {/* Employee Certifications Section */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Employee Certifications</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Track and manage professional certifications
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search certifications..."
              value={searchQuery}
              onChange={handleSearch}
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative">
              <select
                value={selectedEmployee}
                onChange={handleEmployeeChange}
                className="appearance-none pl-4 pr-10 py-2 border border-gray-300 dark:border-gray-700 rounded-md w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              >
                {employees.map((employee, index) => (
                  <option key={index} value={employee}>{employee}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </div>
            </div>
            
            <div className="relative">
              <select
                value={selectedStatus}
                onChange={handleStatusChange}
                className="appearance-none pl-4 pr-10 py-2 border border-gray-300 dark:border-gray-700 rounded-md w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              >
                {statuses.map((status, index) => (
                  <option key={index} value={status}>{status}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Certifications Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Employee
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Certification
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Issuing Organization
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Issue Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Expiry Date
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
              {filteredCertifications.map((cert) => (
                <tr key={cert.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{cert.employee.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{cert.certification}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-400">{cert.issuingOrganization}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-400">{formatDate(cert.issueDate)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-400">{formatDate(cert.expiryDate)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(cert.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleViewCertification(cert.id)}
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                        title="View"
                      >
                        <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md">
                          View
                        </span>
                      </button>
                      <button 
                        onClick={() => handleEditCertification(cert.id)}
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                        title="Edit"
                      >
                        <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md">
                          Edit
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Expiring Certifications Section */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Expiring Certifications</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Certifications that expire within 30 days
          </p>
        </div>
        
        <div className="p-6 space-y-6">
          {expiringCertifications.map((cert) => (
            <div key={cert.id} className="flex items-start p-4 border border-yellow-200 dark:border-yellow-900 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
              <div className="flex-shrink-0 mr-4">
                <AlertCircle className="h-6 w-6 text-yellow-500" />
              </div>
              
              <div className="flex-grow">
                <h3 className="text-md font-medium text-gray-900 dark:text-white">{cert.certification}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {cert.employee.name} • Expires on {formatDate(cert.expiryDate)}
                </p>
              </div>
              
              <div className="flex-shrink-0 ml-4">
                <button 
                  onClick={() => handleRenewCertification(cert.id)}
                  className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium rounded-md"
                >
                  Renew
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating Action Button */}
      <button 
        onClick={handleAddNewCertification}
        className="fixed bottom-6 right-6 p-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg"
      >
        <Plus className="h-6 w-6" />
      </button>
    </div>
  );
}

export default Certifications;
