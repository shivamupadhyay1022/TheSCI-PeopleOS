import React, { useState } from 'react';
import { Calendar, Plus, CheckCircle, FileText, Edit, Play } from 'lucide-react';

function EmployeeOnboarding() {
  // State for active tab
  const [activeTab, setActiveTab] = useState('templates');

  // Sample onboarding data
  const onboardingData = [
    // Active onboarding employees
    {
      id: 1,
      name: 'John Smith',
      position: 'Software Engineer',
      department: 'Engineering',
      startDate: 'Apr 15, 2023',
      progress: 70,
      tasksCompleted: 5,
      totalTasks: 12,
      status: 'In Progress',
      completed: false
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      position: 'Marketing Specialist',
      department: 'Marketing',
      startDate: 'Apr 20, 2023',
      progress: 30,
      tasksCompleted: 3,
      totalTasks: 10,
      status: 'In Progress',
      completed: false
    },
    {
      id: 3,
      name: 'Michael Brown',
      position: 'Financial Analyst',
      department: 'Finance',
      startDate: 'Apr 25, 2023',
      progress: 10,
      tasksCompleted: 1,
      totalTasks: 10,
      status: 'In Progress',
      completed: false
    },

    // Completed onboarding employees
    {
      id: 4,
      name: 'Emily Davis',
      position: 'HR Specialist',
      department: 'Human Resources',
      startDate: 'Mar 15, 2023',
      progress: 100,
      tasksCompleted: 10,
      totalTasks: 10,
      status: 'Completed',
      completed: true
    },
    {
      id: 5,
      name: 'David Johnson',
      position: 'Sales Manager',
      department: 'Sales',
      startDate: 'Mar 1, 2023',
      progress: 100,
      tasksCompleted: 10,
      totalTasks: 10,
      status: 'Completed',
      completed: true
    }
  ];

  // Template data
  const templateData = [
    {
      id: 1,
      name: 'Standard Employee',
      tasks: 10
    },
    {
      id: 2,
      name: 'Engineering',
      tasks: 12
    },
    {
      id: 3,
      name: 'Executive',
      tasks: 15
    },
    {
      id: 4,
      name: 'Remote Worker',
      tasks: 11
    },
    {
      id: 5,
      name: 'Sales Team',
      tasks: 9
    },
    {
      id: 6,
      name: 'Contractor',
      tasks: 8
    }
  ];

  // Filter onboarding data based on active tab
  const filteredData = onboardingData.filter(item => {
    if (activeTab === 'active') {
      return !item.completed;
    } else if (activeTab === 'completed') {
      return item.completed;
    }
    return false; // Don't show onboarding data for templates tab
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Employee Onboarding</h1>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center space-x-2">
          <Plus size={16} />
          <span>New Employee</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('active')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'active'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Active (3)
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'completed'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setActiveTab('templates')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'templates'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Templates
          </button>
        </nav>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'templates' ? (
        /* Template Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templateData.map((template) => (
            <div key={template.id} className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
              <div className="flex flex-col items-center text-center mb-4">
                <FileText className="h-10 w-10 text-purple-500 mb-2" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{template.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {template.tasks} tasks
                </p>
              </div>

              <div className="flex justify-between mt-4">
                <button className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-1">
                  <Edit className="h-4 w-4" />
                  <span>Edit</span>
                </button>
                <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm flex items-center gap-1">
                  <Play className="h-4 w-4" />
                  <span>Use</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Onboarding Cards */
        <div className="space-y-4">
          {filteredData.map((employee) => (
            <div key={employee.id} className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                {/* Employee Info */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{employee.name}</h3>
                    {employee.completed && (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {employee.position} • {employee.department}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Start Date: {employee.startDate}</span>
                  </div>
                </div>

                {/* Progress and Actions */}
                <div className="flex flex-col items-end space-y-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    employee.completed
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                      : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
                  }`}>
                    {employee.status}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {employee.tasksCompleted}/{employee.totalTasks} Tasks
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                  <span>Progress</span>
                  <span>{employee.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full ${
                      employee.completed
                        ? 'bg-green-500'
                        : 'bg-purple-500'
                    }`}
                    style={{ width: `${employee.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* View Details Button */}
              <div className="mt-4 text-right">
                <button className={`px-4 py-2 rounded-md text-sm ${
                  employee.completed
                    ? 'bg-green-100 hover:bg-green-200 text-green-700 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-800'
                    : 'bg-purple-100 hover:bg-purple-200 text-purple-700 dark:bg-purple-900 dark:text-purple-300 dark:hover:bg-purple-800'
                }`}>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EmployeeOnboarding;
