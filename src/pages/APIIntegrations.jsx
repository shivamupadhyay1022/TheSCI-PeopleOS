import React, { useState } from 'react';
import { 
  Plus,
  ExternalLink,
  AlertTriangle,
  Check,
  X,
  Database,
  FileText,
  BarChart2,
  Briefcase,
  Wrench
} from 'lucide-react';

function APIIntegrations() {
  // State for active tab
  const [activeTab, setActiveTab] = useState('all');
  
  // Sample integrations data
  const integrations = [
    {
      id: 1,
      name: 'QuickBooks',
      logo: '/integration-logos/quickbooks.png',
      description: 'Sync financial data with QuickBooks for accounting',
      category: 'accounting',
      status: 'connected',
      enabled: true,
      lastSync: '10/20/23 • 10:00am'
    },
    {
      id: 2,
      name: 'Xero',
      logo: '/integration-logos/xero.png',
      description: 'Connect to Xero accounting software',
      category: 'accounting',
      status: 'not_connected',
      enabled: false
    },
    {
      id: 3,
      name: 'SAP',
      logo: '/integration-logos/sap.png',
      description: 'Enterprise resource planning integration',
      category: 'erp',
      status: 'not_connected',
      enabled: false
    },
    {
      id: 4,
      name: 'Oracle ERP',
      logo: '/integration-logos/oracle.png',
      description: 'Sync with Oracle ERP system',
      category: 'erp',
      status: 'error',
      enabled: true,
      errorMessage: 'Authentication token expired. Please reconnect.'
    },
    {
      id: 5,
      name: 'Workday',
      logo: '/integration-logos/workday.png',
      description: 'Connect with Workday HCM',
      category: 'hr',
      status: 'connected',
      enabled: true,
      lastSync: '10/21/23 • 9:45am'
    },
    {
      id: 6,
      name: 'ADP',
      logo: '/integration-logos/adp.png',
      description: 'Payroll and HR integration',
      category: 'hr',
      status: 'not_connected',
      enabled: false
    },
    {
      id: 7,
      name: 'Slack',
      logo: '/integration-logos/slack.png',
      description: 'Send notifications to Slack channels',
      category: 'tool',
      status: 'connected',
      enabled: true,
      lastSync: '10/20/23 • 2:30pm'
    },
    {
      id: 8,
      name: 'Microsoft Teams',
      logo: '/integration-logos/teams.png',
      description: 'Send notifications to MS Teams',
      category: 'tool',
      status: 'not_connected',
      enabled: false
    },
    {
      id: 9,
      name: 'Google Calendar',
      logo: '/integration-logos/gcal.png',
      description: 'Sync with Google Calendar',
      category: 'tool',
      status: 'connected',
      enabled: true,
      lastSync: '10/20/23 • 11:45am'
    }
  ];
  
  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  // Function to handle add integration
  const handleAddIntegration = () => {
    alert('Add new integration');
  };
  
  // Function to handle configure integration
  const handleConfigureIntegration = (id) => {
    alert(`Configure integration ${id}`);
  };
  
  // Function to handle toggle integration
  const handleToggleIntegration = (id) => {
    alert(`Toggle integration ${id}`);
  };
  
  // Function to handle view API docs
  const handleViewAPIDocs = () => {
    alert('View API documentation');
  };
  
  // Count integrations by status
  const connectedCount = integrations.filter(integration => integration.status === 'connected').length;
  const notConnectedCount = integrations.filter(integration => integration.status === 'not_connected').length;
  const errorCount = integrations.filter(integration => integration.status === 'error').length;
  
  // Filter integrations based on active tab
  const filteredIntegrations = integrations.filter(integration => {
    if (activeTab === 'all') return true;
    if (activeTab === 'accounting') return integration.category === 'accounting';
    if (activeTab === 'erp') return integration.category === 'erp';
    if (activeTab === 'hr') return integration.category === 'hr';
    if (activeTab === 'Wrenchs') return integration.category === 'Wrenchs';
    return false;
  });
  
  // Function to get status badge
  const getStatusBadge = (status) => {
    switch(status) {
      case 'connected':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            Connected
          </span>
        );
      case 'not_connected':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
            Not Connected
          </span>
        );
      case 'error':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
            Error
          </span>
        );
      default:
        return null;
    }
  };
  
  // Function to render integration logo or placeholder
  const renderIntegrationLogo = (integration) => {
    return (
      <div className="h-10 w-10 rounded-md bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
        {integration.logo ? (
          <img src={integration.logo} alt={integration.name} className="h-full w-full object-cover" />
        ) : (
          <Database className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        )}
      </div>
    );
  };
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">API Integrations</h1>
        <button
          onClick={handleAddIntegration}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md"
        >
          <Plus className="h-4 w-4" />
          <span>Add Integration</span>
        </button>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Integrations */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Total Integrations
                </span>
                <span className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                  {integrations.length}
                </span>
              </div>
              <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                <Database className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Connected */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Connected
                </span>
                <span className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                  {connectedCount}
                </span>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Not Connected */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Not Connected
                </span>
                <span className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                  {notConnectedCount}
                </span>
              </div>
              <div className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-900/20 flex items-center justify-center">
                <X className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Error States */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Error States
                </span>
                <span className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                  {errorCount}
                </span>
              </div>
              <div className="h-10 w-10 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Available Integrations */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Available Integrations</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Connect PeopleOS with your other business systems
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
              All
            </button>
            <button
              onClick={() => handleTabChange('accounting')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'accounting'
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Accounting
            </button>
            <button
              onClick={() => handleTabChange('erp')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'erp'
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              ERP Systems
            </button>
            <button
              onClick={() => handleTabChange('hr')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'hr'
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              HR Systems
            </button>
            <button
              onClick={() => handleTabChange('Wrenchs')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'Wrenchs'
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Wrenchs
            </button>
          </nav>
        </div>
        
        {/* Integration Cards */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredIntegrations.map((integration) => (
            <div key={integration.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  {renderIntegrationLogo(integration)}
                  <div className="ml-4">
                    <h3 className="text-md font-medium text-gray-900 dark:text-white">
                      {integration.name}
                    </h3>
                    <div className="mt-1">
                      {getStatusBadge(integration.status)}
                    </div>
                  </div>
                </div>
                <div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={integration.enabled} 
                      onChange={() => handleToggleIntegration(integration.id)}
                      className="sr-only peer"
                    />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                  </label>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {integration.description}
              </p>
              
              {integration.lastSync && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                  Last synced: {integration.lastSync}
                </p>
              )}
              
              {integration.errorMessage && (
                <div className="mb-4 p-2 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-xs rounded">
                  <AlertTriangle className="h-3 w-3 inline mr-1" />
                  {integration.errorMessage}
                </div>
              )}
              
              <div className="flex justify-end">
                <button
                  onClick={() => handleConfigureIntegration(integration.id)}
                  className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm"
                >
                  <span>Configure</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Category Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* API Documentation */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <FileText className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">API Documentation</h3>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Access detailed API documentation for building custom integrations with PeopleOS HRMS.
            </p>
            <button
              onClick={handleViewAPIDocs}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
            >
              <span>View API Docs</span>
              <ExternalLink className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        {/* ERP Systems */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <BarChart2 className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">ERP Systems</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-md bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-2">
                    <Database className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">SAP Integration</span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">Connect</span>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-md bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-2">
                    <Database className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Oracle ERP</span>
                </div>
                <span className="text-xs text-red-500 dark:text-red-400">Reconnect</span>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-md bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-2">
                    <Database className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Microsoft Dynamics</span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">Connect</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Accounting */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <Briefcase className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Accounting</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-md bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-2">
                    <Database className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">QuickBooks</span>
                </div>
                <span className="text-xs text-green-500 dark:text-green-400">Connected</span>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-md bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-2">
                    <Database className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Xero</span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">Connect</span>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-md bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-2">
                    <Database className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">FreshBooks</span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">Connect</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Data Mapping */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <Database className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Data Mapping</h3>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Configure how data is mapped between PeopleOS HRMS and connected systems
          </p>
          <button
            className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
          >
            <span>Configure Data Mapping</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default APIIntegrations;
