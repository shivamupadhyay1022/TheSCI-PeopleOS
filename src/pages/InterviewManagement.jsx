import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon,
  Clock,
  Users,
  Briefcase,
  Eye,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Plus
} from 'lucide-react';

function InterviewManagement() {
  // State for current month
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // Sample interviews data
  const interviews = [
    {
      id: 1,
      candidate: 'John Smith',
      position: 'Senior Software Engineer',
      date: '2023-04-15',
      time: '10:00 AM',
      interviewers: [
        { id: 1, initials: 'M' },
        { id: 2, initials: 'S' }
      ],
      type: 'Technical',
      status: 'Scheduled'
    },
    {
      id: 2,
      candidate: 'Emily Johnson',
      position: 'HR Manager',
      date: '2023-04-15',
      time: '02:00 PM',
      interviewers: [
        { id: 3, initials: 'D' }
      ],
      type: 'HR Round',
      status: 'Scheduled'
    },
    {
      id: 3,
      candidate: 'Sarah Brown',
      position: 'Senior Software Engineer',
      date: '2023-04-15',
      time: '11:30 AM',
      interviewers: [
        { id: 1, initials: 'M' },
        { id: 4, initials: 'R' },
        { id: 5, initials: 'J' }
      ],
      type: 'Final Round',
      status: 'Completed'
    }
  ];
  
  // Function to get today's interviews
  const getTodaysInterviews = () => {
    const today = new Date().toISOString().split('T')[0];
    return interviews.filter(interview => interview.date === '2023-04-15'); // Using hardcoded date for demo
  };
  
  // Function to handle view details
  const handleViewDetails = (id) => {
    alert(`View details for interview ID: ${id}`);
  };
  
  // Function to handle join meeting
  const handleJoinMeeting = (id) => {
    alert(`Join meeting for interview ID: ${id}`);
  };
  
  // Function to handle schedule interview
  const handleScheduleInterview = () => {
    alert('Schedule new interview');
  };
  
  // Function to handle view full calendar
  const handleViewFullCalendar = () => {
    alert('View full calendar');
  };
  
  // Function to handle feedback
  const handleFeedback = (id) => {
    alert(`Provide feedback for interview ID: ${id}`);
  };
  
  // Function to get days in month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  // Function to get first day of month
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };
  
  // Function to generate calendar days
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push({ day: '', isCurrentMonth: false });
    }
    
    // Add days of the current month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i).toISOString().split('T')[0];
      const hasInterview = interviews.some(interview => interview.date === date);
      const isToday = date === '2023-04-15'; // Using hardcoded date for demo
      
      days.push({
        day: i,
        isCurrentMonth: true,
        hasInterview,
        isToday
      });
    }
    
    return days;
  };
  
  // Function to format month and year
  const formatMonthYear = (date) => {
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
  };
  
  // Function to handle previous month
  const handlePreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };
  
  // Function to handle next month
  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };
  
  // Get today's interviews
  const todaysInterviews = getTodaysInterviews();
  
  // Generate calendar days
  const calendarDays = generateCalendarDays();
  
  // Days of the week
  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Interview Management</h1>
        <button 
          onClick={handleScheduleInterview}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm"
        >
          <Plus className="h-4 w-4" />
          <span>Schedule Interview</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Interviews Section */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Today's Interviews</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Scheduled interviews for today (April 15, 2023)
              </p>
            </div>
            
            <div className="divide-y divide-gray-200 dark:divide-gray-800">
              {todaysInterviews.length > 0 ? (
                todaysInterviews.map((interview) => (
                  <div key={interview.id} className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div>
                        <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400">{interview.candidate}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{interview.position}</p>
                        <div className="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{interview.time}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {interview.interviewers.length} interviewer{interview.interviewers.length !== 1 ? 's' : ''}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex mt-4 space-x-2">
                      <button 
                        onClick={() => handleJoinMeeting(interview.id)}
                        className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        <Briefcase className="h-4 w-4" />
                        <span>Join Meeting</span>
                      </button>
                      <button 
                        onClick={() => handleViewDetails(interview.id)}
                        className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        <Eye className="h-4 w-4" />
                        <span>View Details</span>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-6 text-center">
                  <p className="text-gray-500 dark:text-gray-400">No interviews scheduled for today.</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Interview Calendar Section */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Interview Calendar</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                April 2023
              </p>
            </div>
            
            <div className="p-6">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-4">
                <button 
                  onClick={handlePreviousMonth}
                  className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </button>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                  {formatMonthYear(currentMonth)}
                </h3>
                <button 
                  onClick={handleNextMonth}
                  className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <ChevronRight className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </button>
              </div>
              
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {/* Days of Week */}
                {daysOfWeek.map((day, index) => (
                  <div key={index} className="text-center text-xs font-medium text-gray-500 dark:text-gray-400 py-1">
                    {day}
                  </div>
                ))}
                
                {/* Calendar Days */}
                {calendarDays.map((day, index) => (
                  <div 
                    key={index} 
                    className={`text-center py-2 text-sm rounded-full
                      ${!day.isCurrentMonth ? 'text-gray-300 dark:text-gray-700' : 'text-gray-700 dark:text-gray-300'}
                      ${day.isToday ? 'bg-purple-500 text-white' : ''}
                      ${day.hasInterview && !day.isToday ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' : ''}
                    `}
                  >
                    {day.day}
                  </div>
                ))}
              </div>
              
              {/* View Full Calendar Button */}
              <button 
                onClick={handleViewFullCalendar}
                className="w-full mt-6 flex items-center justify-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-md text-sm hover:bg-purple-200 dark:hover:bg-purple-800"
              >
                <CalendarIcon className="h-4 w-4" />
                <span>View Full Calendar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* All Interviews Section */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">All Interviews</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Complete list of scheduled and completed interviews
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Candidate
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Position
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Date & Time
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Interviewers
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Type
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
              {interviews.map((interview) => (
                <tr key={interview.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-blue-600 dark:text-blue-400">{interview.candidate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{interview.position}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-400">{interview.date} at {interview.time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex -space-x-2">
                      {interview.interviewers.map((interviewer) => (
                        <div 
                          key={interviewer.id}
                          className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-medium text-gray-700 dark:text-gray-300 border-2 border-white dark:border-gray-900"
                        >
                          {interviewer.initials}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{interview.type}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      interview.status === 'Scheduled' 
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                        : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    }`}>
                      {interview.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      {interview.status === 'Scheduled' ? (
                        <>
                          <button 
                            onClick={() => handleJoinMeeting(interview.id)}
                            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                            title="Join"
                          >
                            <Briefcase className="h-5 w-5" />
                          </button>
                        </>
                      ) : (
                        <button 
                          onClick={() => handleFeedback(interview.id)}
                          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                          title="Feedback"
                        >
                          <MessageSquare className="h-5 w-5" />
                        </button>
                      )}
                      <button 
                        onClick={() => handleViewDetails(interview.id)}
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                        title="Details"
                      >
                        <Eye className="h-5 w-5" />
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
        onClick={handleScheduleInterview}
        className="fixed bottom-6 right-6 p-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg"
      >
        <Plus className="h-6 w-6" />
      </button>
    </div>
  );
}

export default InterviewManagement;
