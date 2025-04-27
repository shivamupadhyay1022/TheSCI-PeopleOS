import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Link, 
  ExternalLink, 
  Settings, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  Download,
  RefreshCw,
  Lock,
  Unlock,
  MoreVertical,
  ChevronDown,
  ChevronUp,
  Calendar,
  FileText,
  Mail,
  Database,
  CreditCard,
  Clock,
  Users,
  Cloud
} from 'lucide-react';

function Integrations() {
  // Sample integrations data
  const [integrations, setIntegrations] = useState([
    {
      id: 1,
      name: 'Google Workspace',
      logo: '🔄', // Placeholder for logo
      description: 'Sync employee data, calendar events, and documents with Google Workspace',
      category: 'Productivity',
      status: 'Connected',
      connectedSince: '2023-01-15',
      lastSync: '2023-05-28T14:30:00',
      features: [
        { name: 'Calendar Sync', status: 'Active' },
        { name: 'Email Integration', status: 'Active' },
        { name: 'Document Sharing', status: 'Active' },
        { name: 'Single Sign-On', status: 'Inactive' }
      ],
      dataShared: [
        'Employee profiles', 'Calendar events', 'Documents'
      ],
      apiUsage: {
        daily: 1250,
        monthly: 32500,
        limit: 50000
      }
    },
    {
      id: 2,
      name: 'Slack',
      logo: '💬', // Placeholder for logo
      description: 'Integrate with Slack for notifications and team communication',
      category: 'Communication',
      status: 'Connected',
      connectedSince: '2023-02-10',
      lastSync: '2023-05-28T15:45:00',
      features: [
        { name: 'Notifications', status: 'Active' },
        { name: 'Channel Integration', status: 'Active' },
        { name: 'Command Integration', status: 'Inactive' }
      ],
      dataShared: [
        'User profiles', 'Notifications', 'Team structure'
      ],
      apiUsage: {
        daily: 850,
        monthly: 22000,
        limit: 40000
      }
    },
    {
      id: 3,
      name: 'Salesforce',
      logo: '☁️', // Placeholder for logo
      description: 'Connect with Salesforce CRM for customer and sales data integration',
      category: 'CRM',
      status: 'Disconnected',
      connectedSince: null,
      lastSync: null,
      features: [
        { name: 'Contact Sync', status: 'Inactive' },
        { name: 'Opportunity Tracking', status: 'Inactive' },
        { name: 'Customer Data Integration', status: 'Inactive' }
      ],
      dataShared: [],
      apiUsage: {
        daily: 0,
        monthly: 0,
        limit: 30000
      }
    },
    {
      id: 4,
      name: 'QuickBooks',
      logo: '💰', // Placeholder for logo
      description: 'Integrate with QuickBooks for payroll and financial data',
      category: 'Finance',
      status: 'Connected',
      connectedSince: '2023-03-05',
      lastSync: '2023-05-28T12:15:00',
      features: [
        { name: 'Payroll Sync', status: 'Active' },
        { name: 'Expense Tracking', status: 'Active' },
        { name: 'Invoice Generation', status: 'Inactive' }
      ],
      dataShared: [
        'Employee payroll data', 'Expense reports', 'Financial records'
      ],
      apiUsage: {
        daily: 450,
        monthly: 12000,
        limit: 25000
      }
    },
    {
      id: 5,
      name: 'Microsoft Azure',
      logo: '☁️', // Placeholder for logo
      description: 'Connect with Azure for identity management and cloud services',
      category: 'Cloud Services',
      status: 'Error',
      connectedSince: '2023-01-20',
      lastSync: '2023-05-27T09:30:00',
      error: 'API authentication failed. Please check credentials.',
      features: [
        { name: 'Identity Management', status: 'Error' },
        { name: 'Single Sign-On', status: 'Error' },
        { name: 'Cloud Storage', status: 'Inactive' }
      ],
      dataShared: [
        'User identities', 'Authentication data'
      ],
      apiUsage: {
        daily: 200,
        monthly: 5000,
        limit: 20000
      }
    },
    {
      id: 6,
      name: 'Zoom',
      logo: '🎥', // Placeholder for logo
      description: 'Integrate with Zoom for video conferencing and meeting scheduling',
      category: 'Communication',
      status: 'Connected',
      connectedSince: '2023-04-10',
      lastSync: '2023-05-28T16:00:00',
      features: [
        { name: 'Meeting Scheduling', status: 'Active' },
        { name: 'Calendar Integration', status: 'Active' },
        { name: 'Recording Management', status: 'Inactive' }
      ],
      dataShared: [
        'User profiles', 'Meeting schedules', 'Calendar events'
      ],
      apiUsage: {
        daily: 600,
        monthly: 15000,
        limit: 30000
      }
    }
  ]);

  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [expandedIntegration, setExpandedIntegration] = useState(null);

  // Status options
  const statusOptions = ['All', 'Connected', 'Disconnected', 'Error'];
  
  // Category options (derived from data)
  const categoryOptions = ['All', ...new Set(integrations.map(integration => integration.category))];

  // Filter integrations
  const filteredIntegrations = integrations.filter(integration => {
    // Search filter
    const searchMatch = 
      integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      integration.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      integration.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Status filter
    const statusMatch = statusFilter === 'All' || integration.status === statusFilter;
    
    // Category filter
    const categoryMatch = categoryFilter === 'All' || integration.category === categoryFilter;
    
    return searchMatch && statusMatch && categoryMatch;
  });

  // Toggle integration expansion
  const toggleIntegrationExpansion = (integrationId) => {
    setExpandedIntegration(expandedIntegration === integrationId ? null : integrationId);
  };

  // Handle new integration
  const handleAddIntegration = () => {
    console.log('Add new integration');
  };

  // Handle integration connection/disconnection
  const handleToggleConnection = (integrationId, currentStatus) => {
    const newStatus = currentStatus === 'Connected' ? 'Disconnected' : 'Connected';
    console.log(`Change integration ${integrationId} status to ${newStatus}`);
    
    // Update the integration status in the state
    setIntegrations(integrations.map(integration => 
      integration.id === integrationId ? { ...integration, status: newStatus } : integration
    ));
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Format time
  const formatTime = (dateString) => {
    if (!dateString) return 'N/A';
    
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Status badge component
  const StatusBadge = ({ status }) => {
    let bgColor, textColor, icon;
    
    switch (status) {
      case 'Connected':
        bgColor = 'bg-green-100 dark:bg-green-900';
        textColor = 'text-green-800 dark:text-green-300';
        icon = <CheckCircle className="h-4 w-4 mr-1" />;
        break;
      case 'Error':
        bgColor = 'bg-red-100 dark:bg-red-900';
        textColor = 'text-red-800 dark:text-red-300';
        icon = <AlertCircle className="h-4 w-4 mr-1" />;
        break;
      case 'Disconnected':
      default:
        bgColor = 'bg-gray-100 dark:bg-gray-700';
        textColor = 'text-gray-800 dark:text-gray-300';
        icon = <XCircle className="h-4 w-4 mr-1" />;
        break;
    }
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor} ${textColor}`}>
        {icon}
        {status}
      </span>
    );
  };

  // Feature status badge component
  const FeatureStatusBadge = ({ status }) => {
    let bgColor, textColor;
    
    switch (status) {
      case 'Active':
        bgColor = 'bg-green-100 dark:bg-green-900';
        textColor = 'text-green-800 dark:text-green-300';
        break;
      case 'Error':
        bgColor = 'bg-red-100 dark:bg-red-900';
        textColor = 'text-red-800 dark:text-red-300';
        break;
      case 'Inactive':
      default:
        bgColor = 'bg-gray-100 dark:bg-gray-700';
        textColor = 'text-gray-800 dark:text-gray-300';
        break;
    }
    
    return (
      <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium ${bgColor} ${textColor}`}>
        {status}
      </span>
    );
  };

  // Integration icon component
  const IntegrationIcon = ({ category }) => {
    switch (category) {
      case 'Productivity':
        return <FileText className="h-5 w-5 text-blue-500" />;
      case 'Communication':
        return <Mail className="h-5 w-5 text-purple-500" />;
      case 'CRM':
        return <Users className="h-5 w-5 text-orange-500" />;
      case 'Finance':
        return <CreditCard className="h-5 w-5 text-green-500" />;
      case 'Cloud Services':
        return <Cloud className="h-5 w-5 text-sky-500" />;
      default:
        return <Link className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Integrations</h1>
        <div className="flex space-x-2">
          <button 
            onClick={() => console.log('Export data')}
            className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-gray-50 dark:hover:bg-gray-750"
          >
            <Download size={16} />
            <span>Export</span>
          </button>
          <button 
            onClick={handleAddIntegration}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center space-x-2"
          >
            <Plus size={16} />
            <span>Add Integration</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search integrations..."
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Status Filter */}
          <div className="w-full md:w-48">
            <select
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md py-2 px-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              {statusOptions.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
          
          {/* Category Filter */}
          <div className="w-full md:w-48">
            <select
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md py-2 px-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              {categoryOptions.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Integrations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredIntegrations.map(integration => (
          <div 
            key={integration.id} 
            className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden"
          >
            {/* Integration Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-800 dark:text-purple-300 text-xl">
                    {integration.logo}
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{integration.name}</h3>
                    <div className="flex items-center mt-1">
                      <IntegrationIcon category={integration.category} />
                      <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">{integration.category}</span>
                    </div>
                  </div>
                </div>
                <StatusBadge status={integration.status} />
              </div>
              
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {integration.description}
              </p>
            </div>
            
            {/* Integration Details */}
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-500 dark:text-gray-400">Connected Since</div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {integration.connectedSince ? formatDate(integration.connectedSince) : 'Not connected'}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 dark:text-gray-400">Last Sync</div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {integration.lastSync ? formatTime(integration.lastSync) : 'Never'}
                  </div>
                </div>
              </div>
              
              {/* Error Message */}
              {integration.error && (
                <div className="mt-3 p-2 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                  <p className="text-xs text-red-700 dark:text-red-300">
                    <AlertCircle className="h-3 w-3 inline mr-1" />
                    {integration.error}
                  </p>
                </div>
              )}
              
              {/* Features Preview */}
              <div className="mt-3">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Features</div>
                <div className="flex flex-wrap gap-1">
                  {integration.features.slice(0, 3).map((feature, index) => (
                    <FeatureStatusBadge key={index} status={feature.status} />
                  ))}
                  {integration.features.length > 3 && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      +{integration.features.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            {/* Actions */}
            <div className="px-4 py-3 bg-gray-50 dark:bg-gray-750 border-t border-gray-200 dark:border-gray-700 flex justify-between">
              <button 
                onClick={() => toggleIntegrationExpansion(integration.id)}
                className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 flex items-center"
              >
                {expandedIntegration === integration.id ? (
                  <>
                    <ChevronUp className="h-4 w-4 mr-1" />
                    Less Details
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4 mr-1" />
                    More Details
                  </>
                )}
              </button>
              
              <div className="flex space-x-2">
                {integration.status === 'Connected' && (
                  <button 
                    onClick={() => console.log('Sync integration', integration.id)}
                    className="p-1 text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                    title="Sync Now"
                  >
                    <RefreshCw size={16} />
                  </button>
                )}
                <button 
                  onClick={() => console.log('Configure integration', integration.id)}
                  className="p-1 text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                  title="Configure"
                >
                  <Settings size={16} />
                </button>
                <button 
                  onClick={() => handleToggleConnection(integration.id, integration.status)}
                  className="p-1 text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                  title={integration.status === 'Connected' ? 'Disconnect' : 'Connect'}
                >
                  {integration.status === 'Connected' ? <Lock size={16} /> : <Unlock size={16} />}
                </button>
              </div>
            </div>
            
            {/* Expanded Details */}
            {expandedIntegration === integration.id && (
              <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                {/* API Usage */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">API Usage</h4>
                  <div className="bg-gray-100 dark:bg-gray-750 rounded-full h-2.5 mb-1">
                    <div 
                      className="bg-purple-600 h-2.5 rounded-full" 
                      style={{ width: `${(integration.apiUsage.monthly / integration.apiUsage.limit) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>{integration.apiUsage.monthly.toLocaleString()} / {integration.apiUsage.limit.toLocaleString()} calls this month</span>
                    <span>{Math.round((integration.apiUsage.monthly / integration.apiUsage.limit) * 100)}% used</span>
                  </div>
                </div>
                
                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Features</h4>
                  <div className="space-y-2">
                    {integration.features.map((feature, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature.name}</span>
                        <FeatureStatusBadge status={feature.status} />
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Data Shared */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Data Shared</h4>
                  {integration.dataShared.length > 0 ? (
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                      {integration.dataShared.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500 dark:text-gray-400">No data is currently being shared</p>
                  )}
                </div>
                
                {/* Actions */}
                <div className="mt-4 flex justify-end space-x-3">
                  <button className="px-3 py-1 text-sm text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-750">
                    View Logs
                  </button>
                  <button className="px-3 py-1 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded-md">
                    Manage Settings
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Empty State */}
      {filteredIntegrations.length === 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 text-center">
          <Link className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No integrations found</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Try adjusting your search or filter criteria.
          </p>
          <div className="mt-6">
            <button
              onClick={handleAddIntegration}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <Plus className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Add New Integration
            </button>
          </div>
        </div>
      )}
      
      {/* Available Integrations Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Available Integrations</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Discover and connect with these popular third-party services to enhance your workflow.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {/* Sample available integrations */}
            {['Asana', 'Jira', 'GitHub', 'Dropbox', 'Stripe', 'Zendesk', 'HubSpot', 'DocuSign'].map((name, index) => (
              <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-purple-300 dark:hover:border-purple-700 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
                    {name.charAt(0)}
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">{name}</h3>
                <button className="mt-2 w-full px-3 py-1 text-xs bg-purple-600 hover:bg-purple-700 text-white rounded-md">
                  Connect
                </button>
              </div>
            ))}
          </div>
          
          <div className="p-4 bg-gray-50 dark:bg-gray-750 border-t border-gray-200 dark:border-gray-700 text-center">
            <button className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
              View All Available Integrations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Integrations;
