import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Calendar, 
  Clock, 
  Download,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
  User,
  CheckCircle,
  XCircle
} from 'lucide-react';

function Timesheet() {
  // Current date for the timesheet view
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('week'); // 'day', 'week', 'month'
  const [selectedEmployee, setSelectedEmployee] = useState('all');
  
  // Sample timesheet data
  const [timesheetData, setTimesheetData] = useState([
    {
      id: 1,
      employee: {
        id: 101,
        name: 'John Doe',
        position: 'Software Engineer',
        department: 'Engineering',
        avatar: 'JD'
      },
      date: '2023-05-15',
      clockIn: '09:00',
      clockOut: '17:30',
      breakTime: 60, // minutes
      totalHours: 7.5,
      status: 'Approved',
      notes: 'Regular working day'
    },
    {
      id: 2,
      employee: {
        id: 101,
        name: 'John Doe',
        position: 'Software Engineer',
        department: 'Engineering',
        avatar: 'JD'
      },
      date: '2023-05-16',
      clockIn: '08:45',
      clockOut: '18:15',
      breakTime: 45, // minutes
      totalHours: 8.75,
      status: 'Approved',
      notes: 'Worked on Project X'
    },
    {
      id: 3,
      employee: {
        id: 102,
        name: 'Jane Smith',
        position: 'UX Designer',
        department: 'Design',
        avatar: 'JS'
      },
      date: '2023-05-15',
      clockIn: '09:15',
      clockOut: '17:45',
      breakTime: 60, // minutes
      totalHours: 7.5,
      status: 'Approved',
      notes: 'Design review meeting'
    },
    {
      id: 4,
      employee: {
        id: 102,
        name: 'Jane Smith',
        position: 'UX Designer',
        department: 'Design',
        avatar: 'JS'
      },
      date: '2023-05-16',
      clockIn: '09:00',
      clockOut: '16:30',
      breakTime: 45, // minutes
      totalHours: 6.75,
      status: 'Pending',
      notes: 'Left early for doctor appointment'
    },
    {
      id: 5,
      employee: {
        id: 103,
        name: 'Michael Chen',
        position: 'Backend Developer',
        department: 'Engineering',
        avatar: 'MC'
      },
      date: '2023-05-15',
      clockIn: '08:30',
      clockOut: '18:00',
      breakTime: 60, // minutes
      totalHours: 8.5,
      status: 'Approved',
      notes: 'Database optimization'
    }
  ]);

  // Get employees from timesheet data
  const employees = [
    { id: 'all', name: 'All Employees' },
    ...Array.from(new Set(timesheetData.map(item => item.employee.id))).map(id => {
      const employee = timesheetData.find(item => item.employee.id === id).employee;
      return { id: employee.id, name: employee.name };
    })
  ];

  // Get days of the week for current date
  const getDaysOfWeek = (date) => {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
    const monday = new Date(date.setDate(diff));
    const days = [];
    
    for (let i = 0; i < 7; i++) {
      const nextDay = new Date(monday);
      nextDay.setDate(monday.getDate() + i);
      days.push(nextDay);
    }
    
    return days;
  };

  // Get week dates
  const weekDates = getDaysOfWeek(new Date(currentDate));
  
  // Format date for display
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };
  
  // Format day for display
  const formatDay = (date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };
  
  // Navigate to previous period
  const goToPrevious = () => {
    const newDate = new Date(currentDate);
    if (viewMode === 'day') {
      newDate.setDate(newDate.getDate() - 1);
    } else if (viewMode === 'week') {
      newDate.setDate(newDate.getDate() - 7);
    } else if (viewMode === 'month') {
      newDate.setMonth(newDate.getMonth() - 1);
    }
    setCurrentDate(newDate);
  };
  
  // Navigate to next period
  const goToNext = () => {
    const newDate = new Date(currentDate);
    if (viewMode === 'day') {
      newDate.setDate(newDate.getDate() + 1);
    } else if (viewMode === 'week') {
      newDate.setDate(newDate.getDate() + 7);
    } else if (viewMode === 'month') {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };
  
  // Get timesheet entries for the current view
  const getFilteredEntries = () => {
    let filtered = timesheetData;
    
    // Filter by employee
    if (selectedEmployee !== 'all') {
      filtered = filtered.filter(entry => entry.employee.id === parseInt(selectedEmployee));
    }
    
    // Filter by date range based on view mode
    if (viewMode === 'day') {
      const dateString = currentDate.toISOString().split('T')[0];
      filtered = filtered.filter(entry => entry.date === dateString);
    } else if (viewMode === 'week') {
      const startDate = weekDates[0].toISOString().split('T')[0];
      const endDate = weekDates[6].toISOString().split('T')[0];
      filtered = filtered.filter(entry => entry.date >= startDate && entry.date <= endDate);
    }
    
    return filtered;
  };
  
  // Get timesheet data for a specific date and employee
  const getEntryForDateAndEmployee = (date, employeeId) => {
    const dateString = date.toISOString().split('T')[0];
    return timesheetData.find(entry => 
      entry.date === dateString && 
      (employeeId === 'all' || entry.employee.id === parseInt(employeeId))
    );
  };
  
  // Calculate total hours for the current view
  const calculateTotalHours = () => {
    return getFilteredEntries().reduce((total, entry) => total + entry.totalHours, 0);
  };
  
  // Handle adding a new timesheet entry
  const handleAddTimesheet = () => {
    console.log('Add new timesheet entry');
  };

  // Status badge component
  const StatusBadge = ({ status }) => {
    let bgColor, textColor, icon;
    
    switch (status) {
      case 'Approved':
        bgColor = 'bg-green-100 dark:bg-green-900';
        textColor = 'text-green-800 dark:text-green-300';
        icon = <CheckCircle className="h-4 w-4 mr-1" />;
        break;
      case 'Rejected':
        bgColor = 'bg-red-100 dark:bg-red-900';
        textColor = 'text-red-800 dark:text-red-300';
        icon = <XCircle className="h-4 w-4 mr-1" />;
        break;
      case 'Pending':
      default:
        bgColor = 'bg-yellow-100 dark:bg-yellow-900';
        textColor = 'text-yellow-800 dark:text-yellow-300';
        icon = <Clock className="h-4 w-4 mr-1" />;
        break;
    }
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor} ${textColor}`}>
        {icon}
        {status}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Timesheet Management</h1>
        <div className="flex space-x-2">
          <button 
            onClick={() => console.log('Export data')}
            className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-gray-50 dark:hover:bg-gray-750"
          >
            <Download size={16} />
            <span>Export</span>
          </button>
          <button 
            onClick={handleAddTimesheet}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center space-x-2"
          >
            <Plus size={16} />
            <span>Add Entry</span>
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          {/* View Mode Selector */}
          <div className="flex rounded-md shadow-sm">
            <button
              onClick={() => setViewMode('day')}
              className={`px-4 py-2 text-sm font-medium ${
                viewMode === 'day'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700'
              } rounded-l-md`}
            >
              Day
            </button>
            <button
              onClick={() => setViewMode('week')}
              className={`px-4 py-2 text-sm font-medium ${
                viewMode === 'week'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-t border-b border-gray-300 dark:border-gray-700'
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setViewMode('month')}
              className={`px-4 py-2 text-sm font-medium ${
                viewMode === 'month'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700'
              } rounded-r-md`}
            >
              Month
            </button>
          </div>
          
          {/* Date Navigation */}
          <div className="flex items-center space-x-4">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750"
            >
              <ChevronLeft size={16} />
            </button>
            
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              {viewMode === 'day' && (
                <span>{currentDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
              )}
              {viewMode === 'week' && (
                <span>
                  {weekDates[0].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - 
                  {weekDates[6].toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
              )}
              {viewMode === 'month' && (
                <span>{currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
              )}
            </div>
            
            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750"
            >
              <ChevronRight size={16} />
            </button>
          </div>
          
          {/* Employee Selector */}
          <div className="w-full md:w-64">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User size={16} className="text-gray-400" />
              </div>
              <select
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                value={selectedEmployee}
                onChange={(e) => setSelectedEmployee(e.target.value)}
              >
                {employees.map(employee => (
                  <option key={employee.id} value={employee.id}>{employee.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly View */}
      {viewMode === 'week' && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <div className="grid grid-cols-8 border-b border-gray-200 dark:border-gray-700">
            <div className="p-4 text-sm font-medium text-gray-500 dark:text-gray-400 border-r border-gray-200 dark:border-gray-700">
              Employee
            </div>
            {weekDates.map((date, index) => (
              <div key={index} className="p-4 text-center">
                <div className="text-sm font-medium text-gray-900 dark:text-white">{formatDay(date)}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{formatDate(date)}</div>
              </div>
            ))}
          </div>
          
          {/* If all employees are selected, show each employee's row */}
          {selectedEmployee === 'all' ? (
            employees.filter(emp => emp.id !== 'all').map(employee => (
              <div key={employee.id} className="grid grid-cols-8 border-b border-gray-200 dark:border-gray-700">
                <div className="p-4 flex items-center border-r border-gray-200 dark:border-gray-700">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-800 dark:text-purple-300 font-medium text-sm">
                    {employee.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{employee.name}</div>
                  </div>
                </div>
                
                {weekDates.map((date, index) => {
                  const entry = getEntryForDateAndEmployee(date, employee.id);
                  return (
                    <div key={index} className="p-2 text-center">
                      {entry ? (
                        <div className="bg-gray-50 dark:bg-gray-750 p-2 rounded-md">
                          <div className="text-xs font-medium text-gray-900 dark:text-white">
                            {entry.clockIn} - {entry.clockOut}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {entry.totalHours} hrs
                          </div>
                          <div className="mt-1">
                            <StatusBadge status={entry.status} />
                          </div>
                        </div>
                      ) : (
                        <div className="text-xs text-gray-400 dark:text-gray-500">No entry</div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))
          ) : (
            // Show only selected employee
            <div className="grid grid-cols-8 border-b border-gray-200 dark:border-gray-700">
              <div className="p-4 flex items-center border-r border-gray-200 dark:border-gray-700">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-800 dark:text-purple-300 font-medium text-sm">
                  {employees.find(emp => emp.id === parseInt(selectedEmployee))?.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {employees.find(emp => emp.id === parseInt(selectedEmployee))?.name}
                  </div>
                </div>
              </div>
              
              {weekDates.map((date, index) => {
                const entry = getEntryForDateAndEmployee(date, selectedEmployee);
                return (
                  <div key={index} className="p-2 text-center">
                    {entry ? (
                      <div className="bg-gray-50 dark:bg-gray-750 p-2 rounded-md">
                        <div className="text-xs font-medium text-gray-900 dark:text-white">
                          {entry.clockIn} - {entry.clockOut}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {entry.totalHours} hrs
                        </div>
                        <div className="mt-1">
                          <StatusBadge status={entry.status} />
                        </div>
                      </div>
                    ) : (
                      <div className="text-xs text-gray-400 dark:text-gray-500">No entry</div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
          
          {/* Summary Row */}
          <div className="grid grid-cols-8 bg-gray-50 dark:bg-gray-750 p-2">
            <div className="p-2 font-medium text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
              Total Hours
            </div>
            <div className="col-span-7 p-2 text-right font-medium text-gray-900 dark:text-white">
              {calculateTotalHours().toFixed(2)} hours
            </div>
          </div>
        </div>
      )}

      {/* List View (for Day and Month views) */}
      {(viewMode === 'day' || viewMode === 'month') && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-750">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Employee
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Clock In/Out
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Break
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Total Hours
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Notes
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {getFilteredEntries().map((entry) => (
                  <tr key={entry.id} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-800 dark:text-purple-300 font-medium">
                          {entry.employee.avatar}
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {entry.employee.name}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {entry.employee.department}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">
                        {new Date(entry.date).toLocaleDateString('en-US', { 
                          weekday: 'short',
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">
                        {entry.clockIn} - {entry.clockOut}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">
                        {entry.breakTime} min
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {entry.totalHours} hrs
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={entry.status} />
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 dark:text-white max-w-xs truncate">
                        {entry.notes}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                          <Edit size={16} />
                        </button>
                        <button className="text-gray-400 hover:text-red-600 dark:hover:text-red-400">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Empty State */}
          {getFilteredEntries().length === 0 && (
            <div className="text-center py-12">
              <Clock className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No timesheet entries found</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {viewMode === 'day' 
                  ? 'No entries for this day.' 
                  : 'No entries for this month.'}
              </p>
              <div className="mt-6">
                <button
                  onClick={handleAddTimesheet}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  <Plus className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                  Add New Entry
                </button>
              </div>
            </div>
          )}
          
          {/* Summary */}
          {getFilteredEntries().length > 0 && (
            <div className="bg-gray-50 dark:bg-gray-750 px-6 py-4">
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                Total Hours: {calculateTotalHours().toFixed(2)} hours
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Timesheet;
