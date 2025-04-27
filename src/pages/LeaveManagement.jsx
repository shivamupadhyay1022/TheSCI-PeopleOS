import React, { useState } from 'react';
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Plus
} from 'lucide-react';

function LeaveManagement() {
  // State for active tab
  const [activeTab, setActiveTab] = useState('my-leaves');

  // Current month and year for calendar
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Sample leave data
  const leaveData = [
    {
      id: 1,
      type: 'Vacation',
      startDate: '2023-06-10',
      endDate: '2023-06-15',
      duration: '6 days',
      status: 'Approved'
    }
  ];

  // Sample leave balances
  const leaveBalances = {
    vacation: {
      used: 12,
      total: 20,
      color: 'blue'
    },
    sick: {
      used: 5,
      total: 10,
      color: 'red'
    },
    personal: {
      used: 2,
      total: 5,
      color: 'purple'
    }
  };

  // Function to generate calendar days
  const generateCalendarDays = () => {
    const date = new Date(currentYear, currentMonth, 1);
    const days = [];

    // Get the first day of the month
    const firstDayOfMonth = date.getDay();

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<td key={`empty-${i}`} className="text-center text-gray-400 p-2">
        {new Date(currentYear, currentMonth, 0 - (firstDayOfMonth - i - 1)).getDate()}
      </td>);
    }

    // Get the number of days in the month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Add cells for each day of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const isToday = new Date().getDate() === i &&
                      new Date().getMonth() === currentMonth &&
                      new Date().getFullYear() === currentYear;

      // Check if there's a leave on this day
      const hasLeave = leaveData.some(leave => {
        const startDate = new Date(leave.startDate);
        const endDate = new Date(leave.endDate);
        const currentDate = new Date(currentYear, currentMonth, i);
        return currentDate >= startDate && currentDate <= endDate;
      });

      days.push(
        <td key={i} className={`text-center p-2 ${isToday ? 'bg-purple-100 dark:bg-purple-900 rounded-full' : ''} ${hasLeave ? 'bg-blue-100 dark:bg-blue-900' : ''}`}>
          {i}
        </td>
      );
    }

    // Add empty cells for days after the last day of the month
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDay();
    for (let i = 0; i < (6 - lastDayOfMonth); i++) {
      days.push(<td key={`next-${i}`} className="text-center text-gray-400 p-2">
        {i + 1}
      </td>);
    }

    return days;
  };

  // Function to generate calendar rows
  const generateCalendarRows = () => {
    const days = generateCalendarDays();
    const rows = [];
    let cells = [];

    days.forEach((day, i) => {
      if (i > 0 && i % 7 === 0) {
        rows.push(<tr key={i / 7}>{cells}</tr>);
        cells = [];
      }
      cells.push(day);
    });

    if (cells.length > 0) {
      rows.push(<tr key={rows.length}>{cells}</tr>);
    }

    return rows;
  };

  // Function to get month name
  const getMonthName = (month) => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[month];
  };

  // Function to navigate to previous month
  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  // Function to navigate to next month
  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Function to format date
  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Leave Management</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm">
          <Plus className="h-4 w-4" />
          <span>Request Leave</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Leave Calendar */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Leave Calendar</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">View and manage all leave requests</p>

          {/* Calendar Navigation */}
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={goToPreviousMonth}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
            >
              <ChevronLeft className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </button>
            <h3 className="text-md font-medium text-gray-900 dark:text-white">
              {getMonthName(currentMonth)} {currentYear}
            </h3>
            <button
              onClick={goToNextMonth}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
            >
              <ChevronRight className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          {/* Calendar */}
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-xs font-medium text-gray-500 dark:text-gray-400 p-2">Su</th>
                <th className="text-xs font-medium text-gray-500 dark:text-gray-400 p-2">Mo</th>
                <th className="text-xs font-medium text-gray-500 dark:text-gray-400 p-2">Tu</th>
                <th className="text-xs font-medium text-gray-500 dark:text-gray-400 p-2">We</th>
                <th className="text-xs font-medium text-gray-500 dark:text-gray-400 p-2">Th</th>
                <th className="text-xs font-medium text-gray-500 dark:text-gray-400 p-2">Fr</th>
                <th className="text-xs font-medium text-gray-500 dark:text-gray-400 p-2">Sa</th>
              </tr>
            </thead>
            <tbody>
              {generateCalendarRows()}
            </tbody>
          </table>

          {/* Calendar Legend */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-100 dark:bg-purple-900"></div>
              <span className="text-xs text-gray-500 dark:text-gray-400">On Leave</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-100 dark:bg-blue-900"></div>
              <span className="text-xs text-gray-500 dark:text-gray-400">Today</span>
            </div>
          </div>
        </div>

        {/* Leave Overview */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Leave Overview</h2>

          {/* Tabs */}
          <div className="border-b border-gray-200 dark:border-gray-800 mb-4">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('my-leaves')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'my-leaves'
                    ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                My Leaves
              </button>
              <button
                onClick={() => setActiveTab('team-leaves')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'team-leaves'
                    ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                Team Leaves
              </button>
              <button
                onClick={() => setActiveTab('pending-approvals')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'pending-approvals'
                    ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                Pending Approvals
              </button>
            </nav>
          </div>

          {/* Leave Table */}
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Period
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Duration
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
              {leaveData.map((leave) => (
                <tr key={leave.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-blue-600 dark:text-blue-400">{leave.type}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">
                      {formatDate(leave.startDate)}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      to {formatDate(leave.endDate)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{leave.duration}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {leave.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Leave Balances */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Leave Balances</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Your current leave balance by category</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Vacation Days */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{leaveBalances.vacation.used}</div>
                <div className="text-sm font-medium text-blue-600 dark:text-blue-400">Vacation Days</div>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {leaveBalances.vacation.total} days annual
              </div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div
                className="bg-blue-500 h-2.5 rounded-full"
                style={{ width: `${(leaveBalances.vacation.used / leaveBalances.vacation.total) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Sick Days */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{leaveBalances.sick.used}</div>
                <div className="text-sm font-medium text-red-600 dark:text-red-400">Sick Days</div>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {leaveBalances.sick.total} days annual
              </div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div
                className="bg-red-500 h-2.5 rounded-full"
                style={{ width: `${(leaveBalances.sick.used / leaveBalances.sick.total) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Personal Days */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{leaveBalances.personal.used}</div>
                <div className="text-sm font-medium text-purple-600 dark:text-purple-400">Personal Days</div>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {leaveBalances.personal.total} days annual
              </div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div
                className="bg-purple-500 h-2.5 rounded-full"
                style={{ width: `${(leaveBalances.personal.used / leaveBalances.personal.total) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaveManagement;
