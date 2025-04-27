import React, { useState } from 'react';
import { 
  Search, 
  ChevronDown, 
  Download, 
  SlidersHorizontal, 
  MoreVertical,
  Plus
} from 'lucide-react';

function Employees() {
  // Sample employee data
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@peopleapp.com',
      position: 'Software Engineer',
      department: 'Engineering',
      status: 'Active',
      hireDate: '15/3/2022',
      avatar: 'J'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@peopleapp.com',
      position: 'HR Manager',
      department: 'Human Resources',
      status: 'Active',
      hireDate: '20/9/2021',
      avatar: 'J'
    },
    {
      id: 3,
      name: 'Michael Johnson',
      email: 'michael.johnson@peopleapp.com',
      position: 'Marketing Specialist',
      department: 'Marketing',
      status: 'Onboarding',
      hireDate: '10/8/2022',
      avatar: 'M'
    },
    {
      id: 4,
      name: 'Emily Williams',
      email: 'emily.williams@peopleapp.com',
      position: 'Finance Analyst',
      department: 'Finance',
      status: 'Active',
      hireDate: '8/11/2021',
      avatar: 'E'
    },
    {
      id: 5,
      name: 'David Brown',
      email: 'david.brown@peopleapp.com',
      position: 'Product Manager',
      department: 'Product',
      status: 'Leave',
      hireDate: '15/1/2020',
      avatar: 'D'
    }
  ]);

  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  // Get unique departments for filter dropdown
  const departments = [...new Set(employees.map(emp => emp.department))];
  
  // Get unique statuses for filter dropdown
  const statuses = [...new Set(employees.map(emp => emp.status))];

  // Filter employees based on search and filters
  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = 
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.position.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDepartment = departmentFilter ? employee.department === departmentFilter : true;
    const matchesStatus = statusFilter ? employee.status === statusFilter : true;
    
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  // Status badge component
  const StatusBadge = ({ status }) => {
    let bgColor = '';
    let textColor = '';
    
    switch(status) {
      case 'Active':
        bgColor = 'bg-green-100 dark:bg-green-900';
        textColor = 'text-green-800 dark:text-green-300';
        break;
      case 'Onboarding':
        bgColor = 'bg-blue-100 dark:bg-blue-900';
        textColor = 'text-blue-800 dark:text-blue-300';
        break;
      case 'Leave':
        bgColor = 'bg-yellow-100 dark:bg-yellow-900';
        textColor = 'text-yellow-800 dark:text-yellow-300';
        break;
      default:
        bgColor = 'bg-gray-100 dark:bg-gray-800';
        textColor = 'text-gray-800 dark:text-gray-300';
    }
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor} ${textColor}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Employee Directory</h1>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center space-x-2">
          <Plus size={16} />
          <span>Add Employee</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search employees..."
            className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2">
          {/* Department Filter */}
          <div className="relative">
            <select
              className="appearance-none pl-3 pr-8 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
            >
              <option value="">Department</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
          
          {/* Status Filter */}
          <div className="relative">
            <select
              className="appearance-none pl-3 pr-8 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">Status</option>
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
          
          {/* More Filters Button */}
          <button className="flex items-center space-x-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            <SlidersHorizontal size={16} />
            <span>More Filters</span>
          </button>
          
          {/* Export Button */}
          <button className="flex items-center space-x-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            <Download size={16} />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Employee Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Employee
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Position
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Department
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Hire Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
            {filteredEmployees.map((employee) => (
              <tr key={employee.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700">
                      {employee.avatar}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {employee.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {employee.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {employee.position}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {employee.department}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={employee.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {employee.hireDate}
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
    </div>
  );
}

export default Employees;
