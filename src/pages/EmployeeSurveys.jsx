import React, { useState } from 'react';
import { 
  BarChart,
  PieChart,
  LineChart,
  TrendingUp,
  Users,
  Plus
} from 'lucide-react';

function EmployeeSurveys() {
  // State for active tab
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Sample survey data
  const surveyData = {
    satisfactionScore: 78,
    departmentParticipation: [
      { department: 'IT', rate: 85 },
      { department: 'HR', rate: 92 },
      { department: 'Marketing', rate: 68 },
      { department: 'Sales', rate: 72 },
      { department: 'Finance', rate: 80 }
    ],
    recentSurveys: [
      { 
        id: 1, 
        title: 'Work Environment Survey', 
        status: 'active', 
        deadline: '2023-04-29',
        completionRate: 0
      },
      { 
        id: 2, 
        title: 'Employee Satisfaction', 
        status: 'completed', 
        completionRate: 92
      },
      { 
        id: 3, 
        title: 'Remote Work Preference', 
        status: 'completed', 
        completionRate: 78
      }
    ],
    trends: [
      { month: 'Jan', satisfaction: 65, participation: 72 },
      { month: 'Feb', satisfaction: 70, participation: 80 },
      { month: 'Mar', satisfaction: 68, participation: 75 },
      { month: 'Apr', satisfaction: 72, participation: 82 },
      { month: 'May', satisfaction: 75, participation: 78 },
      { month: 'Jun', satisfaction: 78, participation: 85 }
    ]
  };
  
  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  // Function to handle new survey
  const handleNewSurvey = () => {
    alert('Create new survey');
  };
  
  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
  };
  
  // Function to get status badge color
  const getStatusColor = (status) => {
    switch(status) {
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'completed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };
  
  // Function to render satisfaction gauge
  const renderSatisfactionGauge = () => {
    const score = surveyData.satisfactionScore;
    const circumference = 2 * Math.PI * 40;
    const offset = circumference - (score / 100) * circumference;
    
    return (
      <div className="flex items-center justify-center">
        <div className="relative">
          <svg className="w-48 h-48" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="none" 
              stroke="#e5e7eb" 
              strokeWidth="10" 
              className="dark:stroke-gray-700"
            />
            
            {/* Progress circle - low (red) */}
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="none" 
              stroke="#f87171" 
              strokeWidth="10" 
              strokeDasharray={circumference} 
              strokeDashoffset={circumference - (Math.min(33, score) / 100) * circumference}
              className="transition-all duration-1000 ease-in-out"
              transform="rotate(-90 50 50)"
            />
            
            {/* Progress circle - medium (yellow) */}
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="none" 
              stroke="#facc15" 
              strokeWidth="10" 
              strokeDasharray={circumference} 
              strokeDashoffset={circumference - (Math.min(33, Math.max(0, score - 33)) / 100) * circumference}
              className="transition-all duration-1000 ease-in-out"
              transform="rotate(-90 50 50)"
            />
            
            {/* Progress circle - high (blue) */}
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="none" 
              stroke="#93c5fd" 
              strokeWidth="10" 
              strokeDasharray={circumference} 
              strokeDashoffset={circumference - (Math.min(34, Math.max(0, score - 66)) / 100) * circumference}
              className="transition-all duration-1000 ease-in-out"
              transform="rotate(-90 50 50)"
            />
            
            {/* Score text */}
            <text 
              x="50" 
              y="50" 
              textAnchor="middle" 
              dominantBaseline="middle" 
              className="text-2xl font-bold fill-gray-900 dark:fill-white"
            >
              {score}%
            </text>
          </svg>
        </div>
      </div>
    );
  };
  
  // Function to render department participation chart
  const renderDepartmentParticipation = () => {
    const maxRate = Math.max(...surveyData.departmentParticipation.map(item => item.rate));
    
    return (
      <div className="h-48">
        <div className="flex h-full items-end space-x-2">
          {surveyData.departmentParticipation.map((item, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div 
                className="w-full bg-purple-500 rounded-t"
                style={{ height: `${(item.rate / 100) * 100}%` }}
              ></div>
              <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">{item.department}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  // Function to render trends over time chart
  const renderTrendsOverTime = () => {
    return (
      <div className="h-64">
        <div className="flex h-full items-end space-x-2">
          {surveyData.trends.map((item, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="w-full flex justify-center space-x-1">
                <div 
                  className="w-1/3 bg-purple-500 rounded-t"
                  style={{ height: `${item.satisfaction * 2}px` }}
                ></div>
                <div 
                  className="w-1/3 bg-blue-400 rounded-t"
                  style={{ height: `${item.participation * 2}px` }}
                ></div>
              </div>
              <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">{item.month}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center space-x-6">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
            <span className="text-xs text-gray-500 dark:text-gray-400">Satisfaction %</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
            <span className="text-xs text-gray-500 dark:text-gray-400">Participation %</span>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Employee Surveys & Feedback</h1>
        <button
          onClick={handleNewSurvey}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md"
        >
          <Plus className="h-4 w-4" />
          <span>New Survey</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-8">
          <button
            onClick={() => handleTabChange('dashboard')}
            className={`py-4 px-1 flex items-center text-sm font-medium border-b-2 ${
              activeTab === 'dashboard'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            <BarChart className="h-4 w-4 mr-2" />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => handleTabChange('surveys')}
            className={`py-4 px-1 flex items-center text-sm font-medium border-b-2 ${
              activeTab === 'surveys'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            <PieChart className="h-4 w-4 mr-2" />
            <span>Surveys</span>
          </button>
          <button
            onClick={() => handleTabChange('trends')}
            className={`py-4 px-1 flex items-center text-sm font-medium border-b-2 ${
              activeTab === 'trends'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            <TrendingUp className="h-4 w-4 mr-2" />
            <span>Trends</span>
          </button>
          <button
            onClick={() => handleTabChange('participation')}
            className={`py-4 px-1 flex items-center text-sm font-medium border-b-2 ${
              activeTab === 'participation'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            <Users className="h-4 w-4 mr-2" />
            <span>Participation</span>
          </button>
        </nav>
      </div>

      {/* Dashboard Content */}
      {activeTab === 'dashboard' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Satisfaction Overview */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Satisfaction Overview</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Overall employee satisfaction
              </p>
            </div>
            
            <div className="p-6">
              {renderSatisfactionGauge()}
            </div>
          </div>
          
          {/* Department Participation */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Department Participation</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Response rate by department
              </p>
            </div>
            
            <div className="p-6">
              {renderDepartmentParticipation()}
            </div>
          </div>
          
          {/* Recent Activity */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Recent Activity</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Latest surveys and responses
              </p>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {surveyData.recentSurveys.map((survey) => (
                  <div key={survey.id} className="flex justify-between items-center">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">{survey.title}</h3>
                      {survey.deadline && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          Deadline: {formatDate(survey.deadline)}
                        </p>
                      )}
                      {survey.completionRate > 0 && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          Completed: {survey.completionRate}% participation
                        </p>
                      )}
                    </div>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(survey.status)}`}>
                      {survey.status === 'active' ? 'Active' : 'Completed'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Trends Over Time */}
          <div className="md:col-span-2 lg:col-span-3 bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Trends Over Time</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Satisfaction and participation rates
              </p>
            </div>
            
            <div className="p-6">
              {renderTrendsOverTime()}
            </div>
          </div>
        </div>
      )}
      
      {/* Surveys Content */}
      {activeTab === 'surveys' && (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">All Surveys</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              View and manage all surveys
            </p>
          </div>
          
          <div className="p-6">
            <div className="space-y-6">
              {surveyData.recentSurveys.map((survey) => (
                <div key={survey.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-md font-medium text-gray-900 dark:text-white">{survey.title}</h3>
                      {survey.deadline && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          Deadline: {formatDate(survey.deadline)}
                        </p>
                      )}
                    </div>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(survey.status)}`}>
                      {survey.status === 'active' ? 'Active' : 'Completed'}
                    </span>
                  </div>
                  
                  {survey.completionRate > 0 && (
                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-gray-500 dark:text-gray-400">Completion Rate</span>
                        <span className="text-xs font-medium text-gray-900 dark:text-white">{survey.completionRate}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-purple-600 h-2 rounded-full" 
                          style={{ width: `${survey.completionRate}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-4 flex space-x-2">
                    <button className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300">
                      View Details
                    </button>
                    {survey.status === 'active' && (
                      <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                        Take Survey
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Trends Content */}
      {activeTab === 'trends' && (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Satisfaction Trends</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Track changes in employee satisfaction over time
            </p>
          </div>
          
          <div className="p-6">
            {renderTrendsOverTime()}
          </div>
        </div>
      )}
      
      {/* Participation Content */}
      {activeTab === 'participation' && (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Department Participation</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Survey participation rates by department
            </p>
          </div>
          
          <div className="p-6">
            {renderDepartmentParticipation()}
            
            <div className="mt-8">
              <h3 className="text-md font-medium text-gray-900 dark:text-white mb-4">Participation Details</h3>
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Department
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Participation Rate
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Responses
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                  {surveyData.departmentParticipation.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                        {item.department}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {item.rate}%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {Math.floor(item.rate * 0.2)} / {Math.floor(item.rate * 0.2 / (item.rate / 100))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmployeeSurveys;
