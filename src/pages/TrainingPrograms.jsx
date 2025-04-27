import React, { useState } from 'react';
import { 
  Search, 
  Plus,
  ChevronDown,
  Calendar,
  Eye,
  Users
} from 'lucide-react';

function TrainingPrograms() {
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');
  
  // State for selected status filter
  const [selectedStatus, setSelectedStatus] = useState('All Statuses');
  
  // Sample training programs data
  const trainingPrograms = [
    {
      id: 1,
      name: 'Leadership Development',
      description: 'Effective leadership skills and management techniques',
      startDate: '2023-01-15',
      endDate: '2023-02-28',
      enrollment: {
        current: 12,
        total: 20
      },
      status: 'Upcoming'
    },
    {
      id: 2,
      name: 'Technical Skills Workshop',
      description: 'Hands-on training for programming and development tools',
      startDate: '2023-02-01',
      endDate: '2023-03-15',
      enrollment: {
        current: 15,
        total: 15
      },
      status: 'In Progress'
    },
    {
      id: 3,
      name: 'Customer Service Excellence',
      description: 'Best practices in customer service and support',
      startDate: '2023-03-01',
      endDate: '2023-03-30',
      enrollment: {
        current: 8,
        total: 25
      },
      status: 'Upcoming'
    },
    {
      id: 4,
      name: 'Project Management Fundamentals',
      description: 'Core project management methodologies and tools',
      startDate: '2023-01-15',
      endDate: '2023-02-15',
      enrollment: {
        current: 20,
        total: 20
      },
      status: 'Completed'
    }
  ];
  
  // Sample calendar events
  const calendarEvents = [
    {
      id: 1,
      program: 'Technical Skills Workshop',
      date: '2023-04-20',
      startTime: '9:00 AM',
      endTime: '1:00 PM',
      location: 'Conference Room A',
      instructor: 'Robert Stevens'
    },
    {
      id: 2,
      program: 'Data Analysis Techniques',
      date: '2023-04-22',
      startTime: '10:00 AM',
      endTime: '4:00 PM',
      location: 'Lab 3B',
      instructor: 'Sarah Chen'
    },
    {
      id: 3,
      program: 'Leadership Development',
      date: '2023-05-01',
      startTime: '9:30 AM',
      endTime: '4:30 PM',
      location: 'Board Room',
      instructor: 'David Miller'
    }
  ];
  
  // Calculate statistics
  const upcomingPrograms = trainingPrograms.filter(program => program.status === 'Upcoming').length;
  const inProgressPrograms = trainingPrograms.filter(program => program.status === 'In Progress').length;
  const totalParticipants = trainingPrograms.reduce((total, program) => total + program.enrollment.current, 0);
  
  // Function to handle search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  
  // Function to handle status filter change
  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };
  
  // Function to handle add new program
  const handleAddNewProgram = () => {
    alert('Add new training program');
  };
  
  // Function to handle view details
  const handleViewDetails = (id) => {
    alert(`View details for program ID: ${id}`);
  };
  
  // Function to handle view participants
  const handleViewParticipants = (id) => {
    alert(`View participants for program ID: ${id}`);
  };
  
  // Function to handle edit program
  const handleEditProgram = (id) => {
    alert(`Edit program ID: ${id}`);
  };
  
  // Function to handle view full calendar
  const handleViewFullCalendar = () => {
    alert('View full calendar');
  };
  
  // Filter programs based on search query and status filter
  const filteredPrograms = trainingPrograms.filter(program => {
    const matchesSearch = searchQuery === '' || 
      program.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = selectedStatus === 'All Statuses' || program.status === selectedStatus;
    
    return matchesSearch && matchesStatus;
  });
  
  // Function to format date range
  const formatDateRange = (startDate, endDate) => {
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' });
    };
    
    return `${formatDate(startDate)} to ${formatDate(endDate)}`;
  };
  
  // Function to get enrollment percentage
  const getEnrollmentPercentage = (current, total) => {
    return (current / total) * 100;
  };
  
  // Function to get enrollment bar color
  const getEnrollmentBarColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-blue-500';
      case 'In Progress':
        return 'bg-green-500';
      case 'Upcoming':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };
  
  // Function to get status badge
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Completed':
        return (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            {status}
          </span>
        );
      case 'In Progress':
        return (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            {status}
          </span>
        );
      case 'Upcoming':
        return (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            {status}
          </span>
        );
      default:
        return null;
    }
  };
  
  // Function to format calendar date
  const formatCalendarDate = (dateString) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' })
    };
  };
  
  // Available statuses
  const statuses = ['All Statuses', 'Upcoming', 'In Progress', 'Completed'];
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Training Programs</h1>
        <button 
          onClick={handleAddNewProgram}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm"
        >
          <Plus className="h-4 w-4" />
          <span>Add New Program</span>
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Upcoming Programs */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border-l-4 border-purple-500">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Upcoming Programs</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{upcomingPrograms}</p>
        </div>
        
        {/* In Progress */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border-l-4 border-green-500">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">In Progress</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{inProgressPrograms}</p>
        </div>
        
        {/* Total Participants */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border-l-4 border-yellow-500">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Participants</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{totalParticipants}</p>
        </div>
      </div>
      
      {/* Training Program Management Section */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Training Program Management</h2>
        </div>
        
        {/* Search and Filters */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-grow max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search programs..."
              value={searchQuery}
              onChange={handleSearch}
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
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
        
        {/* Programs Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Program Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Date Range
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Enrollment
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
              {filteredPrograms.map((program) => (
                <tr key={program.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{program.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{program.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">
                      {formatDateRange(program.startDate, program.endDate)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mr-2">
                        <div 
                          className={`h-2.5 rounded-full ${getEnrollmentBarColor(program.status)}`}
                          style={{ width: `${getEnrollmentPercentage(program.enrollment.current, program.enrollment.total)}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {program.enrollment.current}/{program.enrollment.total}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(program.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleViewDetails(program.id)}
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                        title="Details"
                      >
                        <Eye className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={() => handleViewParticipants(program.id)}
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                        title="Participants"
                      >
                        <Users className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={() => handleEditProgram(program.id)}
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
      
      {/* Training Calendar Section */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Training Calendar</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Upcoming training schedule for the next 30 days
          </p>
        </div>
        
        <div className="p-6 space-y-6">
          {calendarEvents.map((event) => {
            const date = formatCalendarDate(event.date);
            
            return (
              <div key={event.id} className="flex items-start">
                <div className="flex-shrink-0 w-16 text-center">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{date.month}</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{date.day}</div>
                </div>
                
                <div className="ml-4 flex-grow bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="text-md font-medium text-gray-900 dark:text-white">{event.program}</h3>
                  <div className="mt-2 flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <span className="mr-2">{event.startTime} - {event.endTime}</span>
                      <span className="mx-2 hidden sm:inline">•</span>
                    </div>
                    <div>{event.location}</div>
                  </div>
                  <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Instructor: {event.instructor}
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* View Full Calendar Button */}
          <div className="flex justify-center mt-6">
            <button 
              onClick={handleViewFullCalendar}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <Calendar className="h-4 w-4" />
              <span>View Full Calendar</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating Action Button */}
      <button 
        onClick={handleAddNewProgram}
        className="fixed bottom-6 right-6 p-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg"
      >
        <Plus className="h-6 w-6" />
      </button>
    </div>
  );
}

export default TrainingPrograms;
