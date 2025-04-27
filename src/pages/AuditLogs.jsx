import React, { useState } from 'react';
import { 
  Download,
  Search,
  Filter,
  Calendar,
  ChevronDown
} from 'lucide-react';

function AuditLogs() {
  // State for filters
  const [filters, setFilters] = useState({
    dateRange: {
      start: '2023-04-01',
      end: '2023-04-30'
    },
    actionType: '',
    module: '',
    user: ''
  });
  
  // Sample audit logs data
  const auditLogs = [
    {
      id: 1,
      timestamp: '2023-04-25 10:37 am',
      user: 'John Doe',
      action: 'LOGIN',
      module: 'Authentication',
      description: 'User logged in successfully',
      ipAddress: '192.168.1.101',
      status: 'Success'
    },
    {
      id: 2,
      timestamp: '2023-04-25 10:40 am',
      user: 'John Doe',
      action: 'CREATE',
      module: 'Employee Management',
      description: 'Updated employee profile for Michael Johnson',
      ipAddress: '192.168.1.101',
      status: 'Success'
    },
    {
      id: 3,
      timestamp: '2023-04-25 11:47 am',
      user: 'John Doe',
      action: 'VIEW',
      module: 'Payroll',
      description: 'Viewed salary details for Department Engineering',
      ipAddress: '192.168.1.101',
      status: 'Success'
    },
    {
      id: 4,
      timestamp: '2023-04-25 2:15 pm',
      user: 'Sarah Williams',
      action: 'CREATE',
      module: 'Leave Management',
      description: 'Created new leave request',
      ipAddress: '192.168.1.105',
      status: 'Success'
    },
    {
      id: 5,
      timestamp: '2023-04-25 3:19 pm',
      user: 'Andrew Hart',
      action: 'DELETE',
      module: 'Document Management',
      description: 'Deleted expired document Contract-2023-001',
      ipAddress: '192.168.1.120',
      status: 'Warning'
    },
    {
      id: 6,
      timestamp: '2023-04-25 3:52 pm',
      user: 'Unknown',
      action: 'FAILED',
      module: 'Authentication',
      description: 'Failed login attempt',
      ipAddress: '203.0.113.42',
      status: 'Error'
    },
    {
      id: 7,
      timestamp: '2023-04-25 4:37 pm',
      user: 'System',
      action: 'PROCESS',
      module: 'Payroll',
      description: 'Monthly payroll processed successfully',
      ipAddress: 'LOCAL',
      status: 'Success'
    }
  ];
  
  // Available action types
  const actionTypes = [
    { value: '', label: 'All Actions' },
    { value: 'LOGIN', label: 'Login' },
    { value: 'LOGOUT', label: 'Logout' },
    { value: 'CREATE', label: 'Create' },
    { value: 'UPDATE', label: 'Update' },
    { value: 'DELETE', label: 'Delete' },
    { value: 'VIEW', label: 'View' },
    { value: 'PROCESS', label: 'Process' },
    { value: 'FAILED', label: 'Failed' }
  ];
  
  // Available modules
  const modules = [
    { value: '', label: 'All Modules' },
    { value: 'Authentication', label: 'Authentication' },
    { value: 'Employee Management', label: 'Employee Management' },
    { value: 'Payroll', label: 'Payroll' },
    { value: 'Leave Management', label: 'Leave Management' },
    { value: 'Document Management', label: 'Document Management' },
    { value: 'Attendance', label: 'Attendance' },
    { value: 'Performance', label: 'Performance' }
  ];
  
  // Function to handle filter changes
  const handleFilterChange = (field, value) => {
    setFilters({
      ...filters,
      [field]: value
    });
  };
  
  // Function to handle date range change
  const handleDateRangeChange = (field, value) => {
    setFilters({
      ...filters,
      dateRange: {
        ...filters.dateRange,
        [field]: value
      }
    });
  };
  
  // Function to handle apply filters
  const handleApplyFilters = () => {
    // In a real app, this would trigger a new API call with the filters
    console.log('Applying filters:', filters);
  };
  
  // Function to handle export logs
  const handleExportLogs = () => {
    alert('Exporting logs');
  };
  
  // Function to get status badge color
  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'success':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'error':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };
  
  // Filter logs based on current filters
  const filteredLogs = auditLogs.filter(log => {
    // Filter by action type
    if (filters.actionType && log.action !== filters.actionType) {
      return false;
    }
    
    // Filter by module
    if (filters.module && log.module !== filters.module) {
      return false;
    }
    
    // Filter by user
    if (filters.user && !log.user.toLowerCase().includes(filters.user.toLowerCase())) {
      return false;
    }
    
    // Date range filtering would be implemented here in a real app
    
    return true;
  });
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Audit Logs</h1>
        <button
          onClick={handleExportLogs}
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          <Download className="h-4 w-4" />
          <span>Export Logs</span>
        </button>
      </div>

      {/* System Activity */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">System Activity</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Track all actions performed in the system by users and system processes.
          </p>
        </div>
        
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Date Range Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Date Range
              </label>
              <div className="flex space-x-2">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    value={filters.dateRange.start}
                    onChange={(e) => handleDateRangeChange('start', e.target.value)}
                    className="pl-10 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    value={filters.dateRange.end}
                    onChange={(e) => handleDateRangeChange('end', e.target.value)}
                    className="pl-10 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                  />
                </div>
              </div>
            </div>
            
            {/* Action Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Action Type
              </label>
              <div className="relative">
                <select
                  value={filters.actionType}
                  onChange={(e) => handleFilterChange('actionType', e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  {actionTypes.map((action) => (
                    <option key={action.value} value={action.value}>{action.label}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </div>
              </div>
            </div>
            
            {/* Module Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Module
              </label>
              <div className="relative">
                <select
                  value={filters.module}
                  onChange={(e) => handleFilterChange('module', e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  {modules.map((module) => (
                    <option key={module.value} value={module.value}>{module.label}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </div>
              </div>
            </div>
            
            {/* Search by User */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Search by user
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={filters.user}
                  onChange={(e) => handleFilterChange('user', e.target.value)}
                  placeholder="Enter username"
                  className="pl-10 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleApplyFilters}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md"
            >
              Apply Filters
            </button>
          </div>
        </div>
        
        {/* Logs Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Timestamp
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  User
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Action
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Module
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  IP Address
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
              {filteredLogs.map((log) => (
                <tr key={log.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {log.timestamp}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {log.user}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {log.action}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {log.module}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {log.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {log.ipAddress}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(log.status)}`}>
                      {log.status}
                    </span>
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

export default AuditLogs;
