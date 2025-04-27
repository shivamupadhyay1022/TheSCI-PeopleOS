import React, { useState } from 'react';
import { 
  Calendar,
  Download,
  Printer,
  ChevronDown,
  ArrowUp,
  ArrowRight,
  Info
} from 'lucide-react';

// Import Chart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function KPIDashboard() {
  // State for date filter
  const [dateFilter, setDateFilter] = useState('Q3 2023');
  
  // Department performance data
  const departmentData = {
    labels: ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations'],
    datasets: [
      {
        label: 'Achievement',
        data: [78, 82, 70, 85, 75, 72],
        backgroundColor: '#818cf8',
        borderRadius: 4,
      },
      {
        label: 'Target',
        data: [95, 90, 95, 90, 90, 90],
        backgroundColor: '#86efac',
        borderRadius: 4,
      },
    ],
  };
  
  // Department performance options
  const departmentOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function(value) {
            return value + '%';
          }
        }
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };
  
  // KPI status distribution data
  const kpiStatusData = {
    labels: ['Exceeded', 'Met', 'Below'],
    datasets: [
      {
        data: [35, 45, 20],
        backgroundColor: [
          '#4ade80', // green
          '#3b82f6', // blue
          '#f97316', // orange
        ],
        borderWidth: 0,
      },
    ],
  };
  
  // KPI status distribution options
  const kpiStatusOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };
  
  // Key performance indicators data
  const kpiData = [
    {
      id: 1,
      name: 'Sales Growth',
      description: 'Increase in monthly sales compared to previous quarter',
      value: '12%',
      target: '10% Target',
      status: 'exceeded',
      trend: 'up',
      owner: 'Sales Department'
    },
    {
      id: 2,
      name: 'Customer Satisfaction',
      description: 'Average rating from customer survey',
      value: '4.2/5',
      target: '4.5 Target',
      status: 'met',
      trend: 'neutral',
      owner: 'Customer Service'
    },
    {
      id: 3,
      name: 'Employee Retention',
      description: 'Percentage of employees retained in the quarter',
      value: '91%',
      target: '85% Target',
      status: 'exceeded',
      trend: 'up',
      owner: 'HR Department'
    }
  ];
  
  // Function to handle export
  const handleExport = () => {
    alert('Export dashboard data');
  };
  
  // Function to handle print
  const handlePrint = () => {
    alert('Print dashboard');
  };
  
  // Function to handle date filter change
  const handleDateFilterChange = () => {
    alert('Change date filter');
  };
  
  // Function to get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'exceeded':
        return 'text-green-500';
      case 'met':
        return 'text-blue-500';
      case 'below':
        return 'text-orange-500';
      default:
        return 'text-gray-500';
    }
  };
  
  // Function to get status badge
  const getStatusBadge = (status) => {
    switch (status) {
      case 'exceeded':
        return (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            Exceeded
          </span>
        );
      case 'met':
        return (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            Met
          </span>
        );
      case 'below':
        return (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
            Below
          </span>
        );
      default:
        return null;
    }
  };
  
  // Function to get trend icon
  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return <ArrowUp className="h-4 w-4 text-green-500" />;
      case 'down':
        return <ArrowUp className="h-4 w-4 text-red-500 transform rotate-180" />;
      case 'neutral':
        return <ArrowRight className="h-4 w-4 text-blue-500" />;
      default:
        return null;
    }
  };
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">KPI Dashboard</h1>
        <div className="flex space-x-2">
          <button 
            onClick={handleDateFilterChange}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-300"
          >
            <Calendar className="h-4 w-4" />
            <span>{dateFilter}</span>
            <ChevronDown className="h-4 w-4" />
          </button>
          <button 
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-300"
          >
            <Download className="h-4 w-4" />
            <span>Export</span>
          </button>
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-300"
          >
            <Printer className="h-4 w-4" />
            <span>Print</span>
          </button>
        </div>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Overall Performance */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border-l-4 border-indigo-500">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Overall Performance</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">87%</p>
          <div className="flex items-center mt-2 text-sm text-green-500">
            <ArrowUp className="h-4 w-4 mr-1" />
            <span>Above target</span>
          </div>
        </div>
        
        {/* KPIs On Target */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border-l-4 border-green-500">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">KPIs On Target</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">76%</p>
          <div className="flex items-center mt-2 text-sm text-green-500">
            <ArrowUp className="h-4 w-4 mr-1" />
            <span>Above target</span>
          </div>
        </div>
        
        {/* Top Department */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border-l-4 border-purple-500">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Top Department</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">HR</p>
          <div className="flex items-center mt-2 text-sm text-green-500">
            <ArrowUp className="h-4 w-4 mr-1" />
            <span>Above target</span>
          </div>
        </div>
      </div>
      
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Department Performance Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Department Performance</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Comparison of actual vs target performance by department
            </p>
          </div>
          
          <div className="p-6">
            <div className="h-80">
              <Bar data={departmentData} options={departmentOptions} />
            </div>
          </div>
        </div>
        
        {/* KPI Status Distribution Chart */}
        <div className="lg:col-span-1 bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">KPI Status Distribution</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Distribution of KPI statuses
            </p>
          </div>
          
          <div className="p-6">
            <div className="h-80">
              <Pie data={kpiStatusData} options={kpiStatusOptions} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Key Performance Indicators Section */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Key Performance Indicators</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Performance metrics and targets
          </p>
        </div>
        
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {kpiData.map((kpi) => (
            <div key={kpi.id} className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <div className="flex items-center">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{kpi.name}</h3>
                    <button className="ml-2 text-gray-400 hover:text-gray-500" title="More information">
                      <Info className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{kpi.description}</p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="flex items-center justify-end">
                      <p className={`text-2xl font-bold ${getStatusColor(kpi.status)}`}>{kpi.value}</p>
                      <span className="ml-2">{getTrendIcon(kpi.trend)}</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{kpi.target}</p>
                  </div>
                  <div>
                    {getStatusBadge(kpi.status)}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <p className="text-xs text-gray-500 dark:text-gray-400">Owned by: {kpi.owner}</p>
                <button className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
                  View details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KPIDashboard;
