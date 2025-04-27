import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Calendar, 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  Download,
  MoreVertical
} from 'lucide-react';

function Overtime() {
  // Sample overtime data
  const [overtimeRequests, setOvertimeRequests] = useState([
    {
      id: 1,
      employee: {
        name: 'John Doe',
        position: 'Software Engineer',
        department: 'Engineering',
        avatar: 'JD'
      },
      date: '2023-05-15',
      startTime: '18:00',
      endTime: '21:00',
      hours: 3,
      reason: 'Urgent deployment for client project',
      status: 'Approved',
      approvedBy: 'Jane Smith',
      approvedOn: '2023-05-14'
    },
    {
      id: 2,
      employee: {
        name: 'Sarah Johnson',
        position: 'UX Designer',
        department: 'Design',
        avatar: 'SJ'
      },
      date: '2023-05-16',
      startTime: '17:30',
      endTime: '20:30',
      hours: 3,
      reason: 'Finalizing design for upcoming release',
      status: 'Pending',
      approvedBy: null,
      approvedOn: null
    },
    {
      id: 3,
      employee: {
        name: 'Michael Chen',
        position: 'Backend Developer',
        department: 'Engineering',
        avatar: 'MC'
      },
      date: '2023-05-14',
      startTime: '19:00',
      endTime: '22:00',
      hours: 3,
      reason: 'Database migration and testing',
      status: 'Approved',
      approvedBy: 'Jane Smith',
      approvedOn: '2023-05-13'
    },
    {
      id: 4,
      employee: {
        name: 'Emily Davis',
        position: 'Marketing Specialist',
        department: 'Marketing',
        avatar: 'ED'
      },
      date: '2023-05-17',
      startTime: '18:00',
      endTime: '20:00',
      hours: 2,
      reason: 'Preparing materials for trade show',
      status: 'Rejected',
      approvedBy: 'Robert Johnson',
      approvedOn: '2023-05-16',
      rejectionReason: 'Not enough justification for overtime'
    },
    {
      id: 5,
      employee: {
        name: 'David Wilson',
        position: 'DevOps Engineer',
        department: 'Engineering',
        avatar: 'DW'
      },
      date: '2023-05-18',
      startTime: '17:00',
      endTime: '21:00',
      hours: 4,
      reason: 'Server maintenance and updates',
      status: 'Pending',
      approvedBy: null,
      approvedOn: null
    }
  ]);

  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [departmentFilter, setDepartmentFilter] = useState('All');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  // Status options
  const statusOptions = ['All', 'Approved', 'Pending', 'Rejected'];
  
  // Department options (derived from data)
  const departmentOptions = ['All', ...new Set(overtimeRequests.map(req => req.employee.department))];

  // Filter overtime requests
  const filteredRequests = overtimeRequests.filter(request => {
    // Search filter
    const searchMatch = 
      request.employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.employee.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.employee.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.reason.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Status filter
    const statusMatch = statusFilter === 'All' || request.status === statusFilter;
    
    // Department filter
    const departmentMatch = departmentFilter === 'All' || request.employee.department === departmentFilter;
    
    // Date range filter
    let dateMatch = true;
    if (dateRange.start && dateRange.end) {
      const requestDate = new Date(request.date);
      const startDate = new Date(dateRange.start);
      const endDate = new Date(dateRange.end);
      dateMatch = requestDate >= startDate && requestDate <= endDate;
    }
    
    return searchMatch && statusMatch && departmentMatch && dateMatch;
  });

  // Handle new overtime request
  const handleNewRequest = () => {
    console.log('Create new overtime request');
  };

  // Status badge component
  const StatusBadge = ({ status }) => {
    let bgColor, textColor, icon;
    
    switch (status) {
      case 'Approved':
        bgColor = 'bg-green-100 dark:bg-green-900';
        textColor = 'text-green-800 dark:text-green-300';
        icon = <CheckCircle className="h-4 w-4 mr-1" />;
        break;
      case 'Rejected':
        bgColor = 'bg-red-100 dark:bg-red-900';
        textColor = 'text-red-800 dark:text-red-300';
        icon = <XCircle className="h-4 w-4 mr-1" />;
        break;
      case 'Pending':
      default:
        bgColor = 'bg-yellow-100 dark:bg-yellow-900';
        textColor = 'text-yellow-800 dark:text-yellow-300';
        icon = <AlertCircle className="h-4 w-4 mr-1" />;
        break;
    }
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor} ${textColor}`}>
        {icon}
        {status}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Overtime Management</h1>
        <div className="flex space-x-2">
          <button 
            onClick={() => console.log('Export data')}
            className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-gray-50 dark:hover:bg-gray-750"
          >
            <Download size={16} />
            <span>Export</span>
          </button>
          <button 
            onClick={handleNewRequest}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center space-x-2"
          >
            <Plus size={16} />
            <span>New Request</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search overtime requests..."
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Status Filter */}
          <div className="w-full md:w-48">
            <select
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md py-2 px-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              {statusOptions.map(status => (
                <option key={status} value={status}>{status} Status</option>
              ))}
            </select>
          </div>
          
          {/* Department Filter */}
          <div className="w-full md:w-48">
            <select
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md py-2 px-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
            >
              {departmentOptions.map(dept => (
                <option key={dept} value={dept}>{dept} Department</option>
              ))}
            </select>
          </div>
          
          {/* Date Range Filter */}
          <div className="flex gap-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar size={16} className="text-gray-400" />
              </div>
              <input
                type="date"
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                value={dateRange.start}
                onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
              />
            </div>
            <span className="self-center text-gray-500">to</span>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar size={16} className="text-gray-400" />
              </div>
              <input
                type="date"
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                value={dateRange.end}
                onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Overtime Requests Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-750">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Employee
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Date & Time
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Hours
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Reason
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredRequests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-800 dark:text-purple-300 font-medium">
                        {request.employee.avatar}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {request.employee.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {request.employee.position} • {request.employee.department}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col">
                      <div className="text-sm text-gray-900 dark:text-white flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-gray-500 dark:text-gray-400" />
                        {new Date(request.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {request.startTime} - {request.endTime}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">
                      {request.hours} hours
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 dark:text-white max-w-xs truncate">
                      {request.reason}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={request.status} />
                    {request.status !== 'Pending' && (
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {request.status === 'Approved' ? 'Approved by' : 'Rejected by'}: {request.approvedBy}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Empty State */}
        {filteredRequests.length === 0 && (
          <div className="text-center py-12">
            <Clock className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No overtime requests found</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
        
        {/* Pagination */}
        <div className="bg-white dark:bg-gray-800 px-4 py-3 flex items-center justify-between border-t border-gray-200 dark:border-gray-700 sm:px-6">
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Showing <span className="font-medium">{filteredRequests.length}</span> of{' '}
                <span className="font-medium">{overtimeRequests.length}</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <span className="sr-only">Previous</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-current="page"
                  className="z-10 bg-purple-50 dark:bg-purple-900 border-purple-500 dark:border-purple-700 text-purple-600 dark:text-purple-300 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  1
                </a>
                <a
                  href="#"
                  className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  2
                </a>
                <a
                  href="#"
                  className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  3
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <span className="sr-only">Next</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overtime;
