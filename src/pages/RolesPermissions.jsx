import React, { useState } from 'react';
import { 
  Plus,
  Shield,
  Users,
  UserCheck,
  Edit,
  Trash2,
  Key
} from 'lucide-react';

function RolesPermissions() {
  // State for active tab
  const [activeTab, setActiveTab] = useState('roles');
  
  // Sample roles data
  const roles = [
    {
      id: 1,
      name: 'HR Admin',
      description: 'Full access to all HR functionalities',
      created: '2023-01-12',
      users: 2
    },
    {
      id: 2,
      name: 'HR Manager',
      description: 'Can manage all processes but cannot modify system settings',
      created: '2023-01-12',
      users: 5
    },
    {
      id: 3,
      name: 'Department Manager',
      description: 'Can manage team members and department-specific processes',
      created: '2023-06-10',
      users: 12
    },
    {
      id: 4,
      name: 'Employee',
      description: 'Standard employee access to self-service features',
      created: '2023-01-13',
      users: 145
    }
  ];
  
  // Sample permissions data
  const permissions = [
    {
      id: 1,
      name: 'View Employees',
      description: 'Can view employee profiles and basic information',
      module: 'Employee Management'
    },
    {
      id: 2,
      name: 'Edit Employees',
      description: 'Can edit employee profiles and information',
      module: 'Employee Management'
    },
    {
      id: 3,
      name: 'View Payroll',
      description: 'Can view payroll information',
      module: 'Payroll'
    },
    {
      id: 4,
      name: 'Process Payroll',
      description: 'Can process and approve payroll',
      module: 'Payroll'
    },
    {
      id: 5,
      name: 'Manage System Settings',
      description: 'Can modify system-wide settings',
      module: 'Administration'
    }
  ];
  
  // Sample role assignments data
  const roleAssignments = [
    {
      id: 1,
      user: 'John Smith',
      email: 'john.smith@example.com',
      role: 'HR Admin',
      assignedBy: 'Admin',
      assignedDate: '2023-01-15'
    },
    {
      id: 2,
      user: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      role: 'HR Manager',
      assignedBy: 'Admin',
      assignedDate: '2023-01-20'
    },
    {
      id: 3,
      user: 'Michael Brown',
      email: 'michael.brown@example.com',
      role: 'Department Manager',
      assignedBy: 'John Smith',
      assignedDate: '2023-06-15'
    }
  ];
  
  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  // Function to handle create new role
  const handleCreateNewRole = () => {
    alert('Create new role');
  };
  
  // Function to handle edit role
  const handleEditRole = (id) => {
    alert(`Edit role ${id}`);
  };
  
  // Function to handle delete role
  const handleDeleteRole = (id) => {
    alert(`Delete role ${id}`);
  };
  
  // Function to handle manage permissions
  const handleManagePermissions = (id) => {
    alert(`Manage permissions for role ${id}`);
  };
  
  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
  };
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Roles & Permissions</h1>
        <button
          onClick={handleCreateNewRole}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md"
        >
          <Plus className="h-4 w-4" />
          <span>Create New Role</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-8">
          <button
            onClick={() => handleTabChange('roles')}
            className={`py-4 px-1 flex items-center text-sm font-medium border-b-2 ${
              activeTab === 'roles'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            <Shield className="h-4 w-4 mr-2" />
            <span>Roles</span>
          </button>
          <button
            onClick={() => handleTabChange('permissions')}
            className={`py-4 px-1 flex items-center text-sm font-medium border-b-2 ${
              activeTab === 'permissions'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            <Key className="h-4 w-4 mr-2" />
            <span>Permissions</span>
          </button>
          <button
            onClick={() => handleTabChange('role-assignments')}
            className={`py-4 px-1 flex items-center text-sm font-medium border-b-2 ${
              activeTab === 'role-assignments'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            <UserCheck className="h-4 w-4 mr-2" />
            <span>Role Assignments</span>
          </button>
        </nav>
      </div>

      {/* Roles Content */}
      {activeTab === 'roles' && (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">System Roles</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Predefined roles that define user access levels within the system
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Role Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Created
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Users
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                {roles.map((role) => (
                  <tr key={role.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {role.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      {role.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {formatDate(role.created)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {role.users}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={() => handleManagePermissions(role.id)}
                          className="text-purple-600 hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-300 bg-purple-100 dark:bg-purple-900/20 px-2 py-1 rounded text-xs"
                        >
                          Permissions
                        </button>
                        <button
                          onClick={() => handleEditRole(role.id)}
                          className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          <Edit className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteRole(role.id)}
                          className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      {/* Permissions Content */}
      {activeTab === 'permissions' && (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">System Permissions</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Individual permissions that can be assigned to roles
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Permission Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Module
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                {permissions.map((permission) => (
                  <tr key={permission.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {permission.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      {permission.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {permission.module}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      {/* Role Assignments Content */}
      {activeTab === 'role-assignments' && (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Role Assignments</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Users assigned to specific roles in the system
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    User
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Assigned By
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Assigned Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                {roleAssignments.map((assignment) => (
                  <tr key={assignment.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {assignment.user}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {assignment.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {assignment.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {assignment.assignedBy}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {formatDate(assignment.assignedDate)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={() => handleEditRole(assignment.id)}
                          className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          <Edit className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteRole(assignment.id)}
                          className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default RolesPermissions;
