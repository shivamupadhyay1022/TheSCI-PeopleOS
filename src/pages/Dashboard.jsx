import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import {
  RefreshCw,
  Plus
} from 'lucide-react';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('attendance');

  // Sample data for the weekly attendance chart
  const weeklyAttendanceData = [
    { name: 'Mon', attendance: 45 },
    { name: 'Tue', attendance: 45 },
    { name: 'Wed', attendance: 45 },
    { name: 'Thu', attendance: 45 },
    { name: 'Fri', attendance: 45 },
  ];

  // Sample data for recent attendance
  const recentAttendance = [
    { id: 1, name: 'John Doe', position: 'Software Developer', time: '09:15 AM', avatar: 'J' },
    { id: 2, name: 'Jane Smith', position: 'UI Designer', time: '09:30 AM', avatar: 'J' },
    { id: 3, name: 'Michael Johnson', position: 'Marketing Director', time: '08:45 AM', avatar: 'M' },
    { id: 4, name: 'Emily Williams', position: 'HR Specialist', time: '09:10 AM', avatar: 'E' },
    { id: 5, name: 'David Brown', position: 'Product Manager', time: '08:55 AM', avatar: 'D' },
  ];

  // Sample data for pending leave requests
  const pendingLeaveRequests = [
    { id: 1, name: 'Michael Johnson', duration: '3 days', avatar: 'M' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Employees */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 relative">
          <div className="flex justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Employees</h3>
              <p className="text-2xl font-semibold mt-1">5</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">+2 since last month</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              <RefreshCw size={16} />
            </button>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-100 dark:bg-purple-900">
            <div className="h-full bg-purple-500" style={{ width: '100%' }}></div>
          </div>
        </div>

        {/* Attendance Today */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 relative">
          <div className="flex justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Attendance Today</h3>
              <p className="text-2xl font-semibold mt-1">94%</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">+4% since yesterday</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              <RefreshCw size={16} />
            </button>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-100 dark:bg-blue-900">
            <div className="h-full bg-blue-500" style={{ width: '94%' }}></div>
          </div>
        </div>

        {/* Leave Requests */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 relative">
          <div className="flex justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Leave Requests</h3>
              <p className="text-2xl font-semibold mt-1">1</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">+1 since yesterday</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              <RefreshCw size={16} />
            </button>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-100 dark:bg-yellow-900">
            <div className="h-full bg-yellow-500" style={{ width: '100%' }}></div>
          </div>
        </div>

        {/* On Leave Today */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 relative">
          <div className="flex justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">On Leave Today</h3>
              <p className="text-2xl font-semibold mt-1">1</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">+1 since yesterday</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              <RefreshCw size={16} />
            </button>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-red-100 dark:bg-red-900">
            <div className="h-full bg-red-500" style={{ width: '100%' }}></div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('attendance')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'attendance'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Attendance Overview
          </button>
          <button
            onClick={() => setActiveTab('leave')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'leave'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Leave Analysis
          </button>
        </nav>
      </div>

      {/* Weekly Attendance Chart */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
        <h2 className="text-lg font-medium mb-4">Weekly Attendance</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={weeklyAttendanceData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 60]} ticks={[0, 15, 30, 45, 60]} />
              <Tooltip />
              <Bar dataKey="attendance" fill="#a78bfa" radius={[4, 4, 0, 0]} barSize={60} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Attendance and Pending Leave Requests */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Attendance */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow">
          <h2 className="text-lg font-medium p-4 border-b border-gray-200 dark:border-gray-800">
            Recent Attendance
          </h2>
          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {recentAttendance.map((employee) => (
              <div key={employee.id} className="flex items-center justify-between p-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-medium mr-3">
                    {employee.avatar}
                  </div>
                  <div>
                    <p className="font-medium">{employee.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{employee.position}</p>
                  </div>
                </div>
                <div className="text-sm text-green-600">{employee.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Leave Requests */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow">
          <h2 className="text-lg font-medium p-4 border-b border-gray-200 dark:border-gray-800">
            Pending Leave Requests
          </h2>
          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {pendingLeaveRequests.map((request) => (
              <div key={request.id} className="flex items-center justify-between p-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-medium mr-3">
                    {request.avatar}
                  </div>
                  <div>
                    <p className="font-medium">{request.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{request.duration}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 rounded-full">
                    Approve
                  </button>
                  <button className="px-3 py-1 text-xs bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 rounded-full">
                    Decline
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-lg hover:bg-purple-700 transition-colors">
        <Plus size={24} />
      </button>
    </div>
  );
}

export default Dashboard;