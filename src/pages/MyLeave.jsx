import React, { useState } from 'react';
import {
  Calendar,
  Upload,
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronDown
} from 'lucide-react';

function MyLeave() {
  // State for leave request form
  const [leaveRequest, setLeaveRequest] = useState({
    leaveType: 'Vacation Leave',
    startDate: '',
    endDate: '',
    reason: '',
    documents: []
  });

  // State for current month in calendar
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Sample leave balance data
  const leaveBalance = [
    {
      type: 'Vacation Leave',
      balance: 15,
      color: 'bg-blue-500',
      textColor: 'text-blue-500',
      lightColor: 'bg-blue-100'
    },
    {
      type: 'Sick Leave',
      balance: 8,
      color: 'bg-green-500',
      textColor: 'text-green-500',
      lightColor: 'bg-green-100'
    },
    {
      type: 'Personal Leave',
      balance: 3,
      color: 'bg-purple-500',
      textColor: 'text-purple-500',
      lightColor: 'bg-purple-100'
    }
  ];

  // Sample leave requests data
  const leaveRequests = [
    {
      id: 1,
      type: 'Vacation Leave',
      startDate: '2023-04-15',
      endDate: '2023-04-20',
      status: 'Approved'
    }
  ];

  // Sample leave days for calendar
  const leaveDays = [
    { date: new Date(2023, 3, 17), type: 'Vacation Leave' },
    { date: new Date(2023, 3, 18), type: 'Vacation Leave' },
    { date: new Date(2023, 3, 19), type: 'Vacation Leave' },
    { date: new Date(2023, 3, 27), type: 'Sick Leave' }
  ];

  // Function to handle leave type change
  const handleLeaveTypeChange = (e) => {
    setLeaveRequest({
      ...leaveRequest,
      leaveType: e.target.value
    });
  };

  // Function to handle reason change
  const handleReasonChange = (e) => {
    setLeaveRequest({
      ...leaveRequest,
      reason: e.target.value
    });
  };

  // Function to handle file upload
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setLeaveRequest({
      ...leaveRequest,
      documents: [...leaveRequest.documents, ...files]
    });
  };

  // Function to handle submit leave request
  const handleSubmitLeaveRequest = (e) => {
    e.preventDefault();
    alert('Leave request submitted');
    // Reset form
    setLeaveRequest({
      leaveType: 'Vacation Leave',
      startDate: '',
      endDate: '',
      reason: '',
      documents: []
    });
  };

  // Function to handle previous month
  const handlePreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  // Function to handle next month
  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
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

  // Function to check if date is a leave day
  const isLeaveDay = (date) => {
    return leaveDays.find(leaveDay =>
      leaveDay.date.getDate() === date.getDate() &&
      leaveDay.date.getMonth() === date.getMonth() &&
      leaveDay.date.getFullYear() === date.getFullYear()
    );
  };

  // Function to get leave type color
  const getLeaveTypeColor = (type) => {
    const leave = leaveBalance.find(leave => leave.type === type);
    return leave ? leave.color : 'bg-gray-500';
  };

  // Function to get leave type light color
  const getLeaveTypeLightColor = (type) => {
    const leave = leaveBalance.find(leave => leave.type === type);
    return leave ? leave.lightColor : 'bg-gray-100';
  };

  // Function to get leave type text color
  const getLeaveTypeTextColor = (type) => {
    const leave = leaveBalance.find(leave => leave.type === type);
    return leave ? leave.textColor : 'text-gray-500';
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
      const leaveDay = isLeaveDay(currentDate);

      days.push(
        <div
          key={`day-${day}`}
          className={`h-8 w-8 flex items-center justify-center rounded-full ${
            leaveDay ? getLeaveTypeLightColor(leaveDay.type) : ''
          }`}
        >
          <span className={`text-sm ${leaveDay ? getLeaveTypeTextColor(leaveDay.type) : 'text-gray-700 dark:text-gray-300'}`}>
            {day}
          </span>
        </div>
      );
    }

    return days;
  };

  // Get month name and year
  const monthName = currentMonth.toLocaleDateString('en-US', { month: 'long' });
  const year = currentMonth.getFullYear();

  // Available leave types
  const leaveTypes = ['Vacation Leave', 'Sick Leave', 'Personal Leave'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">My Leave</h1>
      </div>

      {/* Leave Balance and Request Leave */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Leave Balance Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Leave Balance */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Leave Balance</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Your current leave balance and usage
              </p>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {leaveBalance.map((leave, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${leave.color} mr-2`}></div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{leave.type}</h3>
                    </div>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{leave.balance}</p>
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className={`${leave.color} h-2 rounded-full`} style={{ width: '100%' }}></div>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Days remaining</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* My Leave Requests */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">My Leave Requests</h2>
            </div>

            <div className="overflow-x-auto">
              {leaveRequests.length > 0 ? (
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Type
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Date Range
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                    {leaveRequests.map((request) => (
                      <tr key={request.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{request.type}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {formatDate(request.startDate)} to {formatDate(request.endDate)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            {request.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="p-6 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">No leave requests found</p>
                </div>
              )}
            </div>
          </div>

          {/* Leave Calendar */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Leave Calendar</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                View your planned and approved leaves
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
                {leaveBalance.map((leave, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`w-3 h-3 rounded-full ${leave.color} mr-2`}></div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{leave.type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Request Leave Form */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden sticky top-4">
            <div className="p-6 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Request Leave</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Submit a new leave request
              </p>
            </div>

            <div className="p-6">
              <form onSubmit={handleSubmitLeaveRequest} className="space-y-6">
                {/* Leave Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Leave Type
                  </label>
                  <div className="relative">
                    <select
                      value={leaveRequest.leaveType}
                      onChange={handleLeaveTypeChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    >
                      {leaveTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <ChevronDown className="h-4 w-4 text-gray-500" />
                    </div>
                  </div>
                </div>

                {/* Date Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Date Range
                  </label>
                  <div className="border border-gray-300 dark:border-gray-700 rounded-md overflow-hidden">
                    {/* Calendar Header */}
                    <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2 flex items-center justify-between">
                      <button
                        type="button"
                        className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        <ChevronLeft className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      </button>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        April 2023
                      </span>
                      <button
                        type="button"
                        className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        <ChevronRight className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      </button>
                    </div>

                    {/* Calendar Grid */}
                    <div className="p-2 bg-white dark:bg-gray-900">
                      <div className="grid grid-cols-7 gap-1">
                        {/* Weekday Headers */}
                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day, index) => (
                          <div key={index} className="h-6 flex items-center justify-center">
                            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{day}</span>
                          </div>
                        ))}

                        {/* Calendar Days - Simplified for the form */}
                        {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
                          <div
                            key={`form-day-${day}`}
                            className={`h-6 w-6 flex items-center justify-center rounded-full ${
                              day === 17 || day === 18 ? 'bg-purple-100 text-purple-600' : ''
                            } hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer`}
                          >
                            <span className="text-xs">{day}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reason for Leave */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Reason for Leave
                  </label>
                  <textarea
                    value={leaveRequest.reason}
                    onChange={handleReasonChange}
                    rows={4}
                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Please provide details for your leave request..."
                  ></textarea>
                </div>

                {/* Supporting Documents */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Supporting Documents (Optional)
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-700 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600 dark:text-gray-400">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white dark:bg-gray-900 rounded-md font-medium text-purple-600 dark:text-purple-400 hover:text-purple-500 focus-within:outline-none"
                        >
                          <span>Click to upload</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            onChange={handleFileUpload}
                            multiple
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        PDF, DOC, DOCX, JPG, PNG up to 10MB
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Submit Leave Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyLeave;
