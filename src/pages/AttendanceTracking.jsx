import React, { useState } from 'react';
import { 
  Search, 
  Clock,
  UserCheck,
  UserX,
  AlertTriangle
} from 'lucide-react';

function AttendanceTracking() {
  // State for active tab
  const [activeTab, setActiveTab] = useState('daily');
  
  // Get current date
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  });
  
  // Sample attendance data
  const attendanceSummary = {
    present: 0,
    late: 0,
    absent: 5,
    totalEmployees: 10
  };
  
  // Sample employees data
  const employees = [
    {
      id: 1,
      name: 'John Smith',
      department: 'Engineering',
      clockIn: null,
      clockOut: null,
      totalHours: null,
      status: 'Absent'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      department: 'Design',
      clockIn: null,
      clockOut: null,
      totalHours: null,
      status: 'Absent'
    },
    {
      id: 3,
      name: 'Michael Chen',
      department: 'Development',
      clockIn: null,
      clockOut: null,
      totalHours: null,
      status: 'Absent'
    },
    {
      id: 4,
      name: 'Emily Davis',
      department: 'Marketing',
      clockIn: null,
      clockOut: null,
      totalHours: null,
      status: 'Absent'
    },
    {
      id: 5,
      name: 'David Wilson',
      department: 'Finance',
      clockIn: null,
      clockOut: null,
      totalHours: null,
      status: 'Absent'
    }
  ];
  
  // Function to handle clock in/out
  const handleClockInOut = () => {
    alert('Clock In/Out functionality would be implemented here');
  };
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Attendance Tracking</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500 dark:text-gray-400">{formattedDate}</span>
          <button 
            onClick={handleClockInOut}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm"
          >
            <Clock className="h-4 w-4" />
            <span>Clock In/Out</span>
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Present Card */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Present</span>
            <div className="flex items-center mt-2">
              <UserCheck className="h-6 w-6 text-green-500 mr-2" />
              <span className="text-3xl font-bold text-gray-900 dark:text-white">{attendanceSummary.present}</span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              No employees present yet
            </span>
          </div>
        </div>
        
        {/* Late Card */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Late</span>
            <div className="flex items-center mt-2">
              <AlertTriangle className="h-6 w-6 text-yellow-500 mr-2" />
              <span className="text-3xl font-bold text-gray-900 dark:text-white">{attendanceSummary.late}</span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              No one is late today
            </span>
          </div>
        </div>
        
        {/* Absent Card */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Absent</span>
            <div className="flex items-center mt-2">
              <UserX className="h-6 w-6 text-red-500 mr-2" />
              <span className="text-3xl font-bold text-gray-900 dark:text-white">{attendanceSummary.absent}</span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {Math.round((attendanceSummary.absent / attendanceSummary.totalEmployees) * 100)}% of workforce
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('daily')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'daily'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Daily Attendance
          </button>
          <button
            onClick={() => setActiveTab('timesheet')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'timesheet'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Timesheet
          </button>
        </nav>
      </div>

      {/* Search */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search employees..."
          className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md w-full md:w-64 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
      </div>

      {/* Attendance Table */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Employee
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Department
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Clock In
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Clock Out
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Total Hours
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
            {employees.length > 0 ? (
              employees.map((employee) => (
                <tr key={employee.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{employee.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-400">{employee.department}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-400">{employee.clockIn || '-'}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-400">{employee.clockOut || '-'}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-400">{employee.totalHours || '-'}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                      {employee.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                  No attendance records for this date
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AttendanceTracking;
