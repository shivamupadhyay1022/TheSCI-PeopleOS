import React, { useState } from 'react';
import { 
  Clock,
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Home,
  Clock3,
  LogOut
} from 'lucide-react';

function MyAttendance() {
  // State for current month in calendar
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // Sample attendance data
  const attendanceData = {
    today: {
      status: 'Clocked In',
      clockInTime: '09:00 AM',
      lastActivity: 'Team Meeting (10:30 AM)'
    },
    thisMonth: {
      workingDays: 20,
      daysWorked: 10,
      workingHours: 160,
      hoursWorked: 80,
      averageHours: 8
    },
    timeOffBalance: {
      annual: {
        total: 20,
        used: 5,
        remaining: 15,
        color: 'bg-blue-500'
      },
      sick: {
        total: 10,
        used: 2,
        remaining: 8,
        color: 'bg-green-500'
      },
      personal: {
        total: 5,
        used: 0,
        remaining: 5,
        color: 'bg-purple-500'
      }
    },
    history: [
      {
        date: '2023-04-13',
        clockIn: '09:00',
        clockOut: '17:30',
        hoursWorked: '8.5 hrs',
        status: 'Present'
      },
      {
        date: '2023-04-11',
        clockIn: '09:00',
        clockOut: '17:30',
        hoursWorked: '8.5 hrs',
        status: 'Present'
      }
    ]
  };
  
  // Sample attendance days for calendar
  const attendanceDays = [
    { date: new Date(2023, 3, 3), status: 'present' },
    { date: new Date(2023, 3, 4), status: 'present' },
    { date: new Date(2023, 3, 5), status: 'present' },
    { date: new Date(2023, 3, 6), status: 'present' },
    { date: new Date(2023, 3, 7), status: 'present' },
    { date: new Date(2023, 3, 10), status: 'present' },
    { date: new Date(2023, 3, 11), status: 'present' },
    { date: new Date(2023, 3, 12), status: 'present' },
    { date: new Date(2023, 3, 13), status: 'present' },
    { date: new Date(2023, 3, 14), status: 'present' },
    { date: new Date(2023, 3, 17), status: 'wfh' },
    { date: new Date(2023, 3, 18), status: 'present' },
    { date: new Date(2023, 3, 19), status: 'present' },
    { date: new Date(2023, 3, 20), status: 'present' },
    { date: new Date(2023, 3, 21), status: 'present' },
    { date: new Date(2023, 3, 24), status: 'leave' },
    { date: new Date(2023, 3, 25), status: 'leave' },
    { date: new Date(2023, 3, 26), status: 'present' },
    { date: new Date(2023, 3, 27), status: 'present' },
    { date: new Date(2023, 3, 28), status: 'present' }
  ];
  
  // Function to handle clock out
  const handleClockOut = () => {
    alert('Clocked out successfully');
  };
  
  // Function to handle previous month
  const handlePreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };
  
  // Function to handle next month
  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };
  
  // Function to handle work from home request
  const handleWfhRequest = () => {
    alert('Work from home request submitted');
  };
  
  // Function to handle late arrival request
  const handleLateArrivalRequest = () => {
    alert('Late arrival request submitted');
  };
  
  // Function to handle early departure request
  const handleEarlyDepartureRequest = () => {
    alert('Early departure request submitted');
  };
  
  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
  };
  
  // Function to get days in month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  // Function to get day of week
  const getDayOfWeek = (year, month, day) => {
    return new Date(year, month, day).getDay();
  };
  
  // Function to check if date is an attendance day
  const getAttendanceStatus = (date) => {
    return attendanceDays.find(attendanceDay => 
      attendanceDay.date.getDate() === date.getDate() && 
      attendanceDay.date.getMonth() === date.getMonth() && 
      attendanceDay.date.getFullYear() === date.getFullYear()
    );
  };
  
  // Function to get status color
  const getStatusColor = (status) => {
    switch(status) {
      case 'present':
        return 'bg-green-500';
      case 'wfh':
        return 'bg-blue-500';
      case 'leave':
        return 'bg-purple-500';
      default:
        return 'bg-gray-200';
    }
  };
  
  // Function to get status light color
  const getStatusLightColor = (status) => {
    switch(status) {
      case 'present':
        return 'bg-green-100';
      case 'wfh':
        return 'bg-blue-100';
      case 'leave':
        return 'bg-purple-100';
      default:
        return 'bg-gray-100';
    }
  };
  
  // Function to render calendar
  const renderCalendar = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfWeek = getDayOfWeek(year, month, 1);
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="h-8 w-8"></div>);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(year, month, day);
      const attendanceDay = getAttendanceStatus(currentDate);
      
      days.push(
        <div 
          key={`day-${day}`} 
          className={`h-8 w-8 flex items-center justify-center rounded-full ${
            attendanceDay ? getStatusLightColor(attendanceDay.status) : ''
          }`}
        >
          <span className="text-sm text-gray-700 dark:text-gray-300">{day}</span>
        </div>
      );
    }
    
    return days;
  };
  
  // Get month name and year
  const monthName = currentMonth.toLocaleDateString('en-US', { month: 'long' });
  const year = currentMonth.getFullYear();
  
  // Calculate time off percentages
  const calculatePercentage = (used, total) => {
    return (used / total) * 100;
  };
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">My Attendance</h1>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Today's Status */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Today's Status</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              April 13, 2023
            </p>
          </div>
          
          <div className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {attendanceData.today.status}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Clock In: {attendanceData.today.clockInTime}
                </p>
              </div>
            </div>
            
            <div className="mt-6">
              <button
                onClick={handleClockOut}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md"
              >
                Clock Out
              </button>
            </div>
          </div>
        </div>
        
        {/* This Month */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">This Month</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              April 2023
            </p>
          </div>
          
          <div className="p-6">
            <div className="flex justify-between items-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {attendanceData.thisMonth.daysWorked}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Working Days
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {attendanceData.thisMonth.workingDays}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Total Days
                </p>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Hours Worked
                </h4>
                <span className="text-sm text-gray-900 dark:text-white">
                  {attendanceData.thisMonth.hoursWorked}h
                </span>
              </div>
              <div className="mt-2">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-purple-600 h-2 rounded-full" 
                    style={{ width: `${(attendanceData.thisMonth.hoursWorked / attendanceData.thisMonth.workingHours) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Average Hours/Day
                </h4>
                <span className="text-sm text-gray-900 dark:text-white">
                  {attendanceData.thisMonth.averageHours}h
                </span>
              </div>
              <div className="mt-2">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: `${(attendanceData.thisMonth.averageHours / 8) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Time Off Balance */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Time Off Balance</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Remaining time off
            </p>
          </div>
          
          <div className="p-6 space-y-4">
            {/* Annual Leave */}
            <div>
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Annual Leave
                </h4>
                <span className="text-sm text-gray-900 dark:text-white">
                  {attendanceData.timeOffBalance.annual.remaining} days
                </span>
              </div>
              <div className="mt-2">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className={`${attendanceData.timeOffBalance.annual.color} h-2 rounded-full`} 
                    style={{ width: `${calculatePercentage(attendanceData.timeOffBalance.annual.remaining, attendanceData.timeOffBalance.annual.total)}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            {/* Sick Leave */}
            <div>
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Sick Leave
                </h4>
                <span className="text-sm text-gray-900 dark:text-white">
                  {attendanceData.timeOffBalance.sick.remaining} days
                </span>
              </div>
              <div className="mt-2">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className={`${attendanceData.timeOffBalance.sick.color} h-2 rounded-full`} 
                    style={{ width: `${calculatePercentage(attendanceData.timeOffBalance.sick.remaining, attendanceData.timeOffBalance.sick.total)}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            {/* Personal Leave */}
            <div>
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Personal Leave
                </h4>
                <span className="text-sm text-gray-900 dark:text-white">
                  {attendanceData.timeOffBalance.personal.remaining} days
                </span>
              </div>
              <div className="mt-2">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className={`${attendanceData.timeOffBalance.personal.color} h-2 rounded-full`} 
                    style={{ width: `${calculatePercentage(attendanceData.timeOffBalance.personal.remaining, attendanceData.timeOffBalance.personal.total)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Attendance Calendar and History */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attendance Calendar */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Attendance Calendar</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              View your attendance history
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
              <h3 className="text-md font-medium text-gray-900 dark:text-white">
                {monthName} {year}
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
              {/* Weekday Headers */}
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day, index) => (
                <div key={index} className="h-8 flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{day}</span>
                </div>
              ))}
              
              {/* Calendar Days */}
              {renderCalendar(currentMonth)}
            </div>
            
            {/* Legend */}
            <div className="mt-4 flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-xs text-gray-500 dark:text-gray-400">Present</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-xs text-gray-500 dark:text-gray-400">Work From Home</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                <span className="text-xs text-gray-500 dark:text-gray-400">Leave</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Attendance History */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Attendance History</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Detailed record of your attendance
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Clock In
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Clock Out
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Hours Worked
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                {attendanceData.history.map((record, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {formatDate(record.date)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {record.clockIn}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {record.clockOut}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {record.hoursWorked}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        {record.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Request Special Attendance */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Request Special Attendance</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Submit requests for special attendance arrangements
          </p>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Work From Home */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                  <Home className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="ml-3 text-md font-medium text-gray-900 dark:text-white">Work From Home</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Request to work from home on a specific day or period.
              </p>
              <button
                onClick={handleWfhRequest}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md"
              >
                Request WFH
              </button>
            </div>
            
            {/* Late Arrival */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center">
                  <Clock3 className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h3 className="ml-3 text-md font-medium text-gray-900 dark:text-white">Late Arrival</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Notify if you will arrive late on a specific day.
              </p>
              <button
                onClick={handleLateArrivalRequest}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md"
              >
                Request Late Arrival
              </button>
            </div>
            
            {/* Early Departure */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                  <LogOut className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="ml-3 text-md font-medium text-gray-900 dark:text-white">Early Departure</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Request to leave early on a specific day.
              </p>
              <button
                onClick={handleEarlyDepartureRequest}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md"
              >
                Request Early Departure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAttendance;
