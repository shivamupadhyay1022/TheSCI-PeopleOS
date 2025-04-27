import React, { useState } from 'react';
import { 
  Search, 
  Plus,
  Star,
  MoreHorizontal,
  ChevronDown
} from 'lucide-react';

function GoalManagement() {
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');
  
  // State for selected category and status filters
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedStatus, setSelectedStatus] = useState('All Statuses');
  
  // Sample goals data
  const goals = [
    {
      id: 1,
      title: 'Increase team productivity by 15%',
      category: 'Team',
      assignedTo: 'John Doe',
      startDate: '2023-01-01',
      endDate: '2023-06-30',
      progress: 65,
      status: 'In Progress',
      starred: false
    },
    {
      id: 2,
      title: 'Complete Project X implementation',
      category: 'Project',
      assignedTo: 'Jane Smith',
      startDate: '2023-02-15',
      endDate: '2023-06-15',
      progress: 40,
      status: 'In Progress',
      starred: false
    },
    {
      id: 3,
      title: 'Achieve 95% client satisfaction',
      category: 'Personal',
      assignedTo: 'Michael Johnson',
      startDate: '2023-01-01',
      endDate: '2023-12-31',
      progress: 80,
      status: 'In Progress',
      starred: false
    },
    {
      id: 4,
      title: 'Reduce operational costs by 10%',
      category: 'Department',
      assignedTo: 'Emily Williams',
      startDate: '2023-01-01',
      endDate: '2023-08-31',
      progress: 100,
      status: 'Completed',
      starred: false
    },
    {
      id: 5,
      title: 'Launch new product feature',
      category: 'Project',
      assignedTo: 'David Brown',
      startDate: '2023-04-01',
      endDate: '2023-07-31',
      progress: 20,
      status: 'In Progress',
      starred: false
    }
  ];
  
  // Calculate statistics
  const totalGoals = goals.length;
  const completedGoals = goals.filter(goal => goal.status === 'Completed').length;
  const inProgressGoals = goals.filter(goal => goal.status === 'In Progress').length;
  const overdueGoals = goals.filter(goal => {
    const today = new Date();
    const endDate = new Date(goal.endDate);
    return endDate < today && goal.status !== 'Completed';
  }).length;
  
  // Function to handle search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  
  // Function to handle category filter change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  
  // Function to handle status filter change
  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };
  
  // Function to handle add new goal
  const handleAddNewGoal = () => {
    alert('Add new goal');
  };
  
  // Function to handle star/unstar goal
  const handleStarGoal = (id) => {
    alert(`Star/unstar goal ID: ${id}`);
  };
  
  // Function to handle goal actions
  const handleGoalActions = (id) => {
    alert(`Actions for goal ID: ${id}`);
  };
  
  // Filter goals based on search query and filters
  const filteredGoals = goals.filter(goal => {
    const matchesSearch = searchQuery === '' || 
      goal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      goal.assignedTo.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All Categories' || goal.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All Statuses' || goal.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });
  
  // Function to format date range
  const formatDateRange = (startDate, endDate) => {
    return `${startDate} to ${endDate}`;
  };
  
  // Function to get progress bar color
  const getProgressBarColor = (progress) => {
    if (progress >= 80) {
      return 'bg-green-500';
    } else if (progress >= 40) {
      return 'bg-yellow-500';
    } else {
      return 'bg-red-500';
    }
  };
  
  // Available categories
  const categories = ['All Categories', 'Team', 'Project', 'Personal', 'Department'];
  
  // Available statuses
  const statuses = ['All Statuses', 'In Progress', 'Completed', 'Overdue'];
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Goal Management</h1>
        <button 
          onClick={handleAddNewGoal}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm"
        >
          <Plus className="h-4 w-4" />
          <span>Add New Goal</span>
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Goals */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Goals</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{totalGoals}</p>
        </div>
        
        {/* Completed */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Completed</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{completedGoals}</p>
        </div>
        
        {/* In Progress */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">In Progress</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{inProgressGoals}</p>
        </div>
        
        {/* Overdue */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Overdue</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{overdueGoals}</p>
        </div>
      </div>
      
      {/* Active Goals Section */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Active Goals</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Track and manage employee and team goals
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-grow max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search goals..."
              value={searchQuery}
              onChange={handleSearch}
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="appearance-none pl-4 pr-10 py-2 border border-gray-300 dark:border-gray-700 rounded-md w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </div>
            </div>
            
            {/* Status Filter */}
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
        
        {/* Goals Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Goal Title
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Assigned To
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Timeline
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Progress
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
              {filteredGoals.map((goal) => (
                <tr key={goal.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-blue-600 dark:text-blue-400">{goal.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{goal.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{goal.assignedTo}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {formatDateRange(goal.startDate, goal.endDate)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mr-2">
                        <div 
                          className={`h-2.5 rounded-full ${getProgressBarColor(goal.progress)}`}
                          style={{ width: `${goal.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 w-10">{goal.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      goal.status === 'Completed' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                        : goal.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    }`}>
                      {goal.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleStarGoal(goal.id)}
                        className="text-gray-400 hover:text-yellow-500"
                      >
                        <Star className="h-5 w-5" fill={goal.starred ? "currentColor" : "none"} />
                      </button>
                      <button 
                        onClick={() => handleGoalActions(goal.id)}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <MoreHorizontal className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Floating Action Button */}
      <button 
        onClick={handleAddNewGoal}
        className="fixed bottom-6 right-6 p-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg"
      >
        <Plus className="h-6 w-6" />
      </button>
    </div>
  );
}

export default GoalManagement;
