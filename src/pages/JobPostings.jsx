import React, { useState } from 'react';
import { 
  Search, 
  Plus,
  Eye,
  Edit,
  Star,
  Trash2,
  ChevronDown
} from 'lucide-react';

function JobPostings() {
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');
  
  // State for filters
  const [statusFilter, setStatusFilter] = useState('All Statuses');
  const [departmentFilter, setDepartmentFilter] = useState('All Departments');
  
  // Sample job postings data
  const jobPostings = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'New York, NY',
      status: 'Open',
      applicants: 12,
      postedDate: '2023-05-15'
    },
    {
      id: 2,
      title: 'HR Manager',
      department: 'Human Resources',
      location: 'Remote',
      status: 'Open',
      applicants: 8,
      postedDate: '2023-05-20'
    },
    {
      id: 3,
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'Chicago, IL',
      status: 'Open',
      applicants: 5,
      postedDate: '2023-04-01'
    },
    {
      id: 4,
      title: 'Product Designer',
      department: 'Design',
      location: 'San Francisco, CA',
      status: 'Closed',
      applicants: 18,
      postedDate: '2023-02-10'
    },
    {
      id: 5,
      title: 'Financial Analyst',
      department: 'Finance',
      location: 'Boston, MA',
      status: 'Draft',
      applicants: 0,
      postedDate: null
    }
  ];
  
  // Calculate statistics
  const statistics = {
    jobOpenings: jobPostings.filter(job => job.status === 'Open').length,
    totalApplicants: jobPostings.reduce((sum, job) => sum + job.applicants, 0),
    avgTimeToFill: 32 // Hardcoded for demo
  };
  
  // Available statuses and departments for filters
  const statuses = ['All Statuses', 'Open', 'Closed', 'Draft'];
  const departments = ['All Departments', 'Engineering', 'Human Resources', 'Marketing', 'Design', 'Finance'];
  
  // Function to handle view job posting
  const handleViewJob = (id) => {
    alert(`View job posting ID: ${id}`);
  };
  
  // Function to handle edit job posting
  const handleEditJob = (id) => {
    alert(`Edit job posting ID: ${id}`);
  };
  
  // Function to handle favorite job posting
  const handleFavoriteJob = (id) => {
    alert(`Favorite job posting ID: ${id}`);
  };
  
  // Function to handle delete job posting
  const handleDeleteJob = (id) => {
    alert(`Delete job posting ID: ${id}`);
  };
  
  // Function to handle create job posting
  const handleCreateJob = () => {
    alert('Create new job posting');
  };
  
  // Function to format date
  const formatDate = (dateString) => {
    if (!dateString) return '—';
    return dateString;
  };
  
  // Filter job postings based on search query and filters
  const filteredJobPostings = jobPostings.filter(job => {
    const matchesSearch = searchQuery === '' || 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'All Statuses' || job.status === statusFilter;
    const matchesDepartment = departmentFilter === 'All Departments' || job.department === departmentFilter;
    
    return matchesSearch && matchesStatus && matchesDepartment;
  });
  
  // Get status color class
  const getStatusColorClass = (status) => {
    switch (status) {
      case 'Open':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Closed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Draft':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Job Postings</h1>
        <button 
          onClick={handleCreateJob}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm"
        >
          <Plus className="h-4 w-4" />
          <span>Create Job Posting</span>
        </button>
      </div>

      {/* Manage Job Postings Section */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Manage Job Postings</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Create, edit and manage job postings for your organization
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search */}
            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
              {/* Status Filter */}
              <div className="relative w-full sm:w-40">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800 dark:text-white"
                >
                  {statuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
              
              {/* Department Filter */}
              <div className="relative w-full sm:w-40">
                <select
                  value={departmentFilter}
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800 dark:text-white"
                >
                  {departments.map((department) => (
                    <option key={department} value={department}>
                      {department}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Job Postings Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Job Title
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Department
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Location
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Applicants
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Posted Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
              {filteredJobPostings.map((job) => (
                <tr key={job.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-blue-600 dark:text-blue-400">{job.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{job.department}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-400">{job.location}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColorClass(job.status)}`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{job.applicants}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-400">{formatDate(job.postedDate)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-3">
                      <button 
                        onClick={() => handleViewJob(job.id)}
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                        title="View"
                      >
                        <Eye className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={() => handleEditJob(job.id)}
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                        title="Edit"
                      >
                        <Edit className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={() => handleFavoriteJob(job.id)}
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                        title="Favorite"
                      >
                        <Star className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={() => handleDeleteJob(job.id)}
                        className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                        title="Delete"
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
      
      {/* Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Job Openings */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Job Openings</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Current open positions
            </p>
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mt-4">
              {statistics.jobOpenings}
            </p>
          </div>
        </div>
        
        {/* Total Applicants */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Total Applicants</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Across all open positions
            </p>
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mt-4">
              {statistics.totalApplicants}
            </p>
          </div>
        </div>
        
        {/* Avg. Time to Fill */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Avg. Time to Fill</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Average days to fill a position
            </p>
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mt-4">
              {statistics.avgTimeToFill}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobPostings;
