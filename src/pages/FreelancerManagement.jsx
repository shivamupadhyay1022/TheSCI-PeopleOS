import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Calendar, 
  Eye, 
  FileText, 
  MessageSquare,
  Plus
} from 'lucide-react';

function FreelancerManagement() {
  // State for active tab
  const [activeTab, setActiveTab] = useState('active');

  // Sample freelancer data
  const freelancers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'UI/UX Designer',
      startDate: '2023-02-15',
      endDate: '2023-07-15',
      hourlyRate: 65,
      progress: 8,
      totalTasks: 12,
      status: 'active'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Frontend Developer',
      startDate: '2023-01-01',
      endDate: '2023-06-30',
      hourlyRate: 75,
      progress: 3,
      totalTasks: 5,
      status: 'active'
    },
    {
      id: 3,
      name: 'Emma Williams',
      position: 'Content Writer',
      startDate: '2023-01-10',
      endDate: '2023-05-10',
      hourlyRate: 45,
      progress: 12,
      totalTasks: 15,
      status: 'active'
    },
    {
      id: 4,
      name: 'David Rodriguez',
      position: 'Backend Developer',
      startDate: '2023-03-01',
      endDate: '2023-08-01',
      hourlyRate: 80,
      progress: 0,
      totalTasks: 10,
      status: 'pending'
    },
    {
      id: 5,
      name: 'Jennifer Lee',
      position: 'Graphic Designer',
      startDate: '2023-02-20',
      endDate: '2023-04-30',
      hourlyRate: 60,
      progress: 7,
      totalTasks: 8,
      status: 'expiring'
    },
    {
      id: 6,
      name: 'Robert Smith',
      position: 'SEO Specialist',
      startDate: '2022-11-15',
      endDate: '2023-02-15',
      hourlyRate: 55,
      progress: 10,
      totalTasks: 10,
      status: 'past'
    }
  ];

  // Filter freelancers based on active tab
  const filteredFreelancers = freelancers.filter(freelancer => {
    return freelancer.status === activeTab;
  });

  // Format date to display in a readable format
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Freelancer & Contractor Management</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Manage external workforce and contracts</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm">
          <Plus className="h-4 w-4" />
          <span>Add New Freelancer</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search freelancers..."
            className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
            <Calendar className="h-4 w-4" />
            <span>Date Range</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('active')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'active'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setActiveTab('pending')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'pending'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setActiveTab('expiring')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'expiring'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Expiring Soon
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'past'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Past Contracts
          </button>
        </nav>
      </div>

      {/* Freelancer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFreelancers.map((freelancer) => (
          <div key={freelancer.id} className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{freelancer.name}</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                    Active
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{freelancer.position}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Start: {formatDate(freelancer.startDate)}</span>
                </div>
                <div className="mt-1 text-sm font-medium text-gray-900 dark:text-white">
                  ${freelancer.hourlyRate}/hr
                </div>
              </div>
              <div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>End: {formatDate(freelancer.endDate)}</span>
                </div>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Progress:
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                <span>Project Completion</span>
                <span>{freelancer.progress}/{freelancer.totalTasks}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-purple-500 h-2.5 rounded-full" 
                  style={{ width: `${(freelancer.progress / freelancer.totalTasks) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between">
              <button className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                <Eye className="h-4 w-4" />
                <span>View</span>
              </button>
              <button className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                <FileText className="h-4 w-4" />
                <span>Contract</span>
              </button>
              <button className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                <MessageSquare className="h-4 w-4" />
                <span>Message</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FreelancerManagement;
