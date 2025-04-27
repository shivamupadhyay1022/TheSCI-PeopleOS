import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Users, 
  ChevronDown, 
  ChevronUp,
  MoreVertical
} from 'lucide-react';

function Departments() {
  // Sample departments data
  const [departments, setDepartments] = useState([
    {
      id: 1,
      name: 'Engineering',
      description: 'Software development and technical operations',
      head: 'John Smith',
      headTitle: 'VP of Engineering',
      employeeCount: 42,
      subDepartments: [
        { id: 101, name: 'Frontend Development', head: 'Sarah Johnson', employeeCount: 15 },
        { id: 102, name: 'Backend Development', head: 'Michael Chen', employeeCount: 18 },
        { id: 103, name: 'DevOps', head: 'David Wilson', employeeCount: 9 }
      ]
    },
    {
      id: 2,
      name: 'Marketing',
      description: 'Brand management and marketing operations',
      head: 'Emily Davis',
      headTitle: 'Marketing Director',
      employeeCount: 28,
      subDepartments: [
        { id: 201, name: 'Digital Marketing', head: 'Jessica Lee', employeeCount: 12 },
        { id: 202, name: 'Content Creation', head: 'Robert Brown', employeeCount: 8 },
        { id: 203, name: 'Brand Management', head: 'Amanda White', employeeCount: 8 }
      ]
    },
    {
      id: 3,
      name: 'Human Resources',
      description: 'Employee management and organizational development',
      head: 'Lisa Johnson',
      headTitle: 'HR Director',
      employeeCount: 15,
      subDepartments: [
        { id: 301, name: 'Recruitment', head: 'Thomas Clark', employeeCount: 6 },
        { id: 302, name: 'Employee Relations', head: 'Patricia Moore', employeeCount: 5 },
        { id: 303, name: 'Training & Development', head: 'Kevin Taylor', employeeCount: 4 }
      ]
    },
    {
      id: 4,
      name: 'Finance',
      description: 'Financial planning, reporting, and accounting',
      head: 'Richard Miller',
      headTitle: 'CFO',
      employeeCount: 18,
      subDepartments: [
        { id: 401, name: 'Accounting', head: 'Susan Anderson', employeeCount: 8 },
        { id: 402, name: 'Financial Planning', head: 'James Wilson', employeeCount: 6 },
        { id: 403, name: 'Payroll', head: 'Nancy Martin', employeeCount: 4 }
      ]
    },
    {
      id: 5,
      name: 'Sales',
      description: 'Business development and customer acquisition',
      head: 'Daniel Thompson',
      headTitle: 'Sales Director',
      employeeCount: 32,
      subDepartments: [
        { id: 501, name: 'Enterprise Sales', head: 'Christopher Lee', employeeCount: 12 },
        { id: 502, name: 'SMB Sales', head: 'Jennifer Harris', employeeCount: 14 },
        { id: 503, name: 'Sales Operations', head: 'Brian Jackson', employeeCount: 6 }
      ]
    }
  ]);

  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  
  // Expanded departments state
  const [expandedDepartments, setExpandedDepartments] = useState({});

  // Toggle department expansion
  const toggleDepartment = (departmentId) => {
    setExpandedDepartments(prev => ({
      ...prev,
      [departmentId]: !prev[departmentId]
    }));
  };

  // Filter departments based on search query
  const filteredDepartments = departments.filter(department => 
    department.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    department.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    department.head.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle add new department
  const handleAddDepartment = () => {
    // Implementation would go here
    console.log('Add new department');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Departments</h1>
        <button 
          onClick={handleAddDepartment}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center space-x-2"
        >
          <Plus size={16} />
          <span>Add Department</span>
        </button>
      </div>

      {/* Search */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search departments..."
            className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Departments List */}
      <div className="space-y-4">
        {filteredDepartments.map(department => (
          <div key={department.id} className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
            {/* Department Header */}
            <div 
              className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-750"
              onClick={() => toggleDepartment(department.id)}
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{department.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{department.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right hidden md:block">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{department.head}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{department.headTitle}</p>
                </div>
                <div className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded-full hidden md:block">
                  <span className="text-xs font-medium text-purple-800 dark:text-purple-300">
                    {department.employeeCount} Employees
                  </span>
                </div>
                <div className="flex items-center">
                  <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                    <Edit size={16} />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-red-600 dark:hover:text-red-400">
                    <Trash2 size={16} />
                  </button>
                  {expandedDepartments[department.id] ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </div>
            </div>
            
            {/* Sub-departments */}
            {expandedDepartments[department.id] && (
              <div className="border-t border-gray-200 dark:border-gray-700">
                <div className="px-4 py-2 bg-gray-50 dark:bg-gray-750">
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Sub-departments</h4>
                </div>
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-750">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Department Head
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Employees
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {department.subDepartments.map(subDept => (
                      <tr key={subDept.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                          {subDept.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {subDept.head}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300">
                            {subDept.employeeCount}
                          </span>
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
                <div className="px-6 py-3 bg-gray-50 dark:bg-gray-750 flex justify-end">
                  <button className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 flex items-center space-x-1">
                    <Plus size={14} />
                    <span>Add Sub-department</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Departments;
