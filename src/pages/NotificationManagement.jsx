import React, { useState } from 'react';
import { 
  Plus,
  Search,
  Mail,
  MessageSquare,
  Bell,
  Eye,
  Edit,
  Trash2,
  Filter,
  ChevronDown
} from 'lucide-react';

function NotificationManagement() {
  // State for active tab
  const [activeTab, setActiveTab] = useState('templates');
  
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample templates data
  const templates = [
    {
      id: 1,
      name: 'Welcome Email',
      type: 'email',
      icon: <Mail className="h-4 w-4 text-blue-500" />,
      event: 'user_onboarded',
      status: 'active'
    },
    {
      id: 2,
      name: 'Password Reset',
      type: 'email',
      icon: <Mail className="h-4 w-4 text-blue-500" />,
      event: 'password_reset',
      status: 'active'
    },
    {
      id: 3,
      name: 'Leave Request Approved',
      type: 'email',
      icon: <Mail className="h-4 w-4 text-blue-500" />,
      event: 'leave_approved',
      status: 'active'
    },
    {
      id: 4,
      name: 'New Task Assignment',
      type: 'in-app',
      icon: <Bell className="h-4 w-4 text-purple-500" />,
      event: 'task_assigned',
      status: 'active'
    },
    {
      id: 5,
      name: 'Payslip Generated',
      type: 'sms',
      icon: <MessageSquare className="h-4 w-4 text-green-500" />,
      event: 'payslip_generated',
      status: 'inactive'
    },
    {
      id: 6,
      name: 'Document Expiry Reminder',
      type: 'email',
      icon: <Mail className="h-4 w-4 text-blue-500" />,
      event: 'document_expiring',
      status: 'active'
    }
  ];
  
  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  // Function to handle create template
  const handleCreateTemplate = () => {
    alert('Create new template');
  };
  
  // Function to handle view template
  const handleViewTemplate = (id) => {
    alert(`View template ${id}`);
  };
  
  // Function to handle edit template
  const handleEditTemplate = (id) => {
    alert(`Edit template ${id}`);
  };
  
  // Function to handle delete template
  const handleDeleteTemplate = (id) => {
    alert(`Delete template ${id}`);
  };
  
  // Function to handle toggle status
  const handleToggleStatus = (id) => {
    alert(`Toggle status for template ${id}`);
  };
  
  // Count templates by type
  const emailTemplates = templates.filter(template => template.type === 'email').length;
  const smsTemplates = templates.filter(template => template.type === 'sms').length;
  const inAppNotifications = templates.filter(template => template.type === 'in-app').length;
  
  // Filter templates based on search query
  const filteredTemplates = templates.filter(template => 
    template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    template.event.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Notification Management</h1>
        <button
          onClick={handleCreateTemplate}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md"
        >
          <Plus className="h-4 w-4" />
          <span>Create Template</span>
        </button>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Templates */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Total Templates
                </span>
                <span className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                  {templates.length}
                </span>
              </div>
              <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>
        </div>
        
        {/* SMS Templates */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  SMS Templates
                </span>
                <span className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                  {smsTemplates}
                </span>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                <MessageSquare className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>
        </div>
        
        {/* In-App Notifications */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  In-App Notifications
                </span>
                <span className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                  {inAppNotifications}
                </span>
              </div>
              <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                <Bell className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Notification Templates */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Notification Templates</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Manage your notifications templates for email, SMS, and in-app notifications
          </p>
        </div>
        
        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-800">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => handleTabChange('templates')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'templates'
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Templates
            </button>
            <button
              onClick={() => handleTabChange('events')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'events'
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Events
            </button>
            <button
              onClick={() => handleTabChange('settings')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'settings'
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Settings
            </button>
          </nav>
        </div>
        
        {/* Templates Tab Content */}
        {activeTab === 'templates' && (
          <div>
            <div className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
              <div className="relative w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">All Types</span>
                <button
                  className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm"
                >
                  <Filter className="h-4 w-4" />
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Template
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Event
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                  {filteredTemplates.map((template) => (
                    <tr key={template.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-8 w-8 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                            {template.icon}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {template.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          template.type === 'email' 
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                            : template.type === 'sms'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                        }`}>
                          {template.type === 'email' ? 'Email' : template.type === 'sms' ? 'SMS' : 'In-App'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {template.event.replace(/_/g, ' ')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <label className="inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            checked={template.status === 'active'} 
                            onChange={() => handleToggleStatus(template.id)}
                            className="sr-only peer"
                          />
                          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                        </label>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() => handleViewTemplate(template.id)}
                            className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                          >
                            <span className="text-xs text-gray-500 dark:text-gray-400">View</span>
                          </button>
                          <button
                            onClick={() => handleEditTemplate(template.id)}
                            className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                          >
                            <Edit className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => handleDeleteTemplate(template.id)}
                            className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {/* Events Tab Content */}
        {activeTab === 'events' && (
          <div className="p-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center">
              <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Event Configuration</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Configure system events that trigger notifications to users.
              </p>
              <button
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md"
              >
                Configure Events
              </button>
            </div>
          </div>
        )}
        
        {/* Settings Tab Content */}
        {activeTab === 'settings' && (
          <div className="p-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center">
              <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Notification Settings</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Configure global notification settings, delivery channels, and preferences.
              </p>
              <button
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md"
              >
                Manage Settings
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NotificationManagement;
