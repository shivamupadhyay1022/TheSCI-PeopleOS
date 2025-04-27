import React, { useState } from 'react';
import { 
  TrendingUp,
  TrendingDown,
  BarChart2,
  Users,
  DollarSign,
  Clock,
  Award,
  Target,
  AlertCircle,
  ChevronRight,
  Download,
  Briefcase,
  UserPlus,
  Zap
} from 'lucide-react';

function DrivenInsights() {
  // State for active tab
  const [activeTab, setActiveTab] = useState('all');
  
  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  // Sample insights data
  const insights = [
    {
      id: 1,
      category: 'Workforce Efficiency',
      title: 'Employee productivity has increased by 19.9% compared to previous month',
      trend: 'up',
      percentage: 19.9,
      type: 'workforce'
    },
    {
      id: 2,
      category: 'Compensation Insights',
      title: 'Payroll to revenue ratio has decreased from 24% to 19.8%, indicating improved efficiency',
      trend: 'up',
      percentage: 4.2,
      type: 'compensation'
    },
    {
      id: 3,
      category: 'Workforce Efficiency',
      title: 'Cross-functional collaboration has improved by 14.5% across teams',
      trend: 'up',
      percentage: 14.5,
      type: 'workforce'
    },
    {
      id: 4,
      category: 'Hiring Efficiency',
      title: 'Time-to-hire has reduced from 45 days to 32 days',
      trend: 'up',
      percentage: 28.9,
      type: 'hiring'
    },
    {
      id: 5,
      category: 'Employee Impact',
      title: 'Top performers are 76% more productive than average performers',
      trend: 'neutral',
      percentage: 0,
      type: 'workforce'
    },
    {
      id: 6,
      category: 'Attrition Patterns',
      title: 'Employees with less than 1 year tenure are 3x more likely to leave',
      trend: 'down',
      percentage: 7.8,
      type: 'workforce'
    }
  ];
  
  // Filter insights based on active tab
  const filteredInsights = insights.filter(insight => {
    if (activeTab === 'all') return true;
    return insight.type === activeTab;
  });
  
  // Sample department KPI data
  const departmentKPIs = [
    { department: 'Engineering', adherence: 92, target: 90 },
    { department: 'Sales', adherence: 78, target: 85 },
    { department: 'Marketing', adherence: 83, target: 80 },
    { department: 'Finance', adherence: 95, target: 90 },
    { department: 'HR', adherence: 88, target: 85 },
    { department: 'Product', adherence: 86, target: 90 }
  ];
  
  // Sample hiring forecast data
  const hiringForecast = {
    openPositions: 24,
    candidatesInPipeline: 65,
    applicationsReceived: 215,
    onTarget: true
  };
  
  // Sample recommendations
  const recommendations = [
    {
      id: 1,
      icon: <Users className="h-5 w-5 text-blue-500" />,
      title: 'Workforce Strategy',
      description: 'Expand remote working options for Dev & IT teams to reduce attrition by 15%',
    },
    {
      id: 2,
      icon: <DollarSign className="h-5 w-5 text-green-500" />,
      title: 'Performance Based',
      description: 'Revise the bonus structure for sales team to align with quarterly performance metrics',
    },
    {
      id: 3,
      icon: <Clock className="h-5 w-5 text-purple-500" />,
      title: 'Work-life balance',
      description: 'Implement flexible work hours for parents with children under 10 to improve retention',
    }
  ];
  
  // Function to render trend indicator
  const renderTrendIndicator = (trend, percentage) => {
    if (trend === 'up') {
      return (
        <div className="flex items-center text-green-600 dark:text-green-400">
          <TrendingUp className="h-4 w-4 mr-1" />
          <span>+{percentage}%</span>
        </div>
      );
    } else if (trend === 'down') {
      return (
        <div className="flex items-center text-red-600 dark:text-red-400">
          <TrendingDown className="h-4 w-4 mr-1" />
          <span>-{percentage}%</span>
        </div>
      );
    } else {
      return (
        <div className="flex items-center text-gray-600 dark:text-gray-400">
          <span>No change</span>
        </div>
      );
    }
  };
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Driven Insights</h1>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm">
            <span>Last 30 days</span>
          </button>
          <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm">
            <Download className="h-4 w-4" />
            <span>Generate Report</span>
          </button>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Productivity */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Productivity Increase
                </span>
                <span className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                  19.9%
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  vs. previous month
                </span>
              </div>
              <div className="flex items-center text-green-600 dark:text-green-400">
                <TrendingUp className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Collaboration Score */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Collaboration Score
                </span>
                <span className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                  14.5
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  out of 20 possible points
                </span>
              </div>
              <div className="flex items-center text-green-600 dark:text-green-400">
                <TrendingUp className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Attrition Risk */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Attrition Risk
                </span>
                <span className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                  7.8
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  employees at high risk
                </span>
              </div>
              <div className="flex items-center text-red-600 dark:text-red-400">
                <TrendingDown className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Top Performer Impact */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Top Performer Impact
                </span>
                <span className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                  76%
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  higher productivity
                </span>
              </div>
              <div className="flex items-center text-blue-600 dark:text-blue-400">
                <Award className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Key AI Insights */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Key AI Insights</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            AI-powered insights from your company's data
          </p>
        </div>
        
        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-800">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => handleTabChange('all')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'all'
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              All Insights
            </button>
            <button
              onClick={() => handleTabChange('workforce')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'workforce'
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Workforce
            </button>
            <button
              onClick={() => handleTabChange('hiring')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'hiring'
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Hiring
            </button>
            <button
              onClick={() => handleTabChange('compensation')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'compensation'
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Compensation
            </button>
          </nav>
        </div>
        
        {/* Insights List */}
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {filteredInsights.map((insight) => (
            <div key={insight.id} className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      {insight.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    {insight.title}
                  </p>
                  <button className="text-xs text-purple-600 dark:text-purple-400 hover:underline">
                    View recommendation
                  </button>
                </div>
                <div className="ml-4">
                  {renderTrendIndicator(insight.trend, insight.percentage)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Adherence KPIs by Department */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Adherence KPIs by Department</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {departmentKPIs.map((dept, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700 dark:text-gray-300">{dept.department}</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{dept.adherence}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${
                        dept.adherence >= dept.target ? 'bg-green-600' : 'bg-yellow-400'
                      }`}
                      style={{ width: `${dept.adherence}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Hiring Forecast */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Hiring Forecast</h2>
          </div>
          <div className="p-6">
            <div className="text-center mb-6">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Based on current hiring trends and department requirements
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    {hiringForecast.openPositions}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Open Positions
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    {hiringForecast.candidatesInPipeline}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    In Pipeline
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    {hiringForecast.applicationsReceived}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Applications
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              {hiringForecast.onTarget ? (
                <div className="flex items-center text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/20 px-3 py-1 rounded-full text-sm">
                  <Target className="h-4 w-4 mr-1" />
                  <span>Meeting Target</span>
                </div>
              ) : (
                <div className="flex items-center text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/20 px-3 py-1 rounded-full text-sm">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  <span>Behind Target</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Recommendation Engine */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center">
            <Zap className="h-5 w-5 text-purple-500 mr-2" />
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Recommendation Engine</h2>
          </div>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendations.map((rec) => (
            <div key={rec.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                {rec.icon}
                <h3 className="ml-2 text-md font-medium text-gray-900 dark:text-white">{rec.title}</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {rec.description}
              </p>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm">
                <span>View All</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DrivenInsights;
