import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronDown,
  Save,
  Globe,
  Clock,
  Calendar,
  BarChart2,
  DollarSign,
  Building,
  Palette,
  Bell,
  Shield,
  Settings as SettingsIcon
} from 'lucide-react';

function Settings() {
  // State for active tab
  const [activeTab, setActiveTab] = useState('general');

  // State for form values
  const [formValues, setFormValues] = useState({
    timezone: 'UTC (Coordinated Universal Time)',
    dateFormat: 'MM/DD/YYYY',
    usageAnalytics: true,
    interfaceLanguage: 'English',
    defaultCurrency: 'USD ($)'
  });

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Function to handle form changes
  const handleFormChange = (field, value) => {
    setFormValues({
      ...formValues,
      [field]: value
    });
  };

  // Function to handle toggle change
  const handleToggleChange = (field) => {
    setFormValues({
      ...formValues,
      [field]: !formValues[field]
    });
  };

  // Function to handle save changes
  const handleSaveChanges = () => {
    alert('Settings saved successfully!');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-2">
        <button className="p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Settings</h1>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <nav className="flex space-x-8">
          <button
            onClick={() => handleTabChange('general')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'general'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            General
          </button>
          <button
            onClick={() => handleTabChange('company')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'company'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Company
          </button>
          <button
            onClick={() => handleTabChange('appearance')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'appearance'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Appearance
          </button>
          <button
            onClick={() => handleTabChange('notifications')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'notifications'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Notifications
          </button>
          <button
            onClick={() => handleTabChange('security')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'security'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Security
          </button>
          <button
            onClick={() => handleTabChange('advanced')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'advanced'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Advanced
          </button>
        </nav>
      </div>

      {/* General Settings Tab Content */}
      {activeTab === 'general' && (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">General Settings</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Manage your general application settings
            </p>
          </div>

          <div className="p-6 space-y-6">
            {/* Application Section */}
            <div>
              <h3 className="text-md font-medium text-gray-900 dark:text-white mb-4">Application</h3>

              <div className="space-y-4">
                {/* Default Timezone */}
                <div>
                  <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Default Timezone
                  </label>
                  <div className="relative">
                    <select
                      id="timezone"
                      value={formValues.timezone}
                      onChange={(e) => handleFormChange('timezone', e.target.value)}
                      className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
                    >
                      <option>UTC (Coordinated Universal Time)</option>
                      <option>EST (Eastern Standard Time)</option>
                      <option>CST (Central Standard Time)</option>
                      <option>MST (Mountain Standard Time)</option>
                      <option>PST (Pacific Standard Time)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <ChevronDown className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Date Format */}
                <div>
                  <label htmlFor="dateFormat" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Date Format
                  </label>
                  <div className="relative">
                    <select
                      id="dateFormat"
                      value={formValues.dateFormat}
                      onChange={(e) => handleFormChange('dateFormat', e.target.value)}
                      className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
                    >
                      <option>MM/DD/YYYY</option>
                      <option>DD/MM/YYYY</option>
                      <option>YYYY-MM-DD</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <ChevronDown className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Usage Analytics */}
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-md font-medium text-gray-900 dark:text-white">Usage Analytics</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Help improve the app by sending anonymous usage data
                  </p>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formValues.usageAnalytics}
                    onChange={() => handleToggleChange('usageAnalytics')}
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                </label>
              </div>
            </div>

            {/* Language & Regional */}
            <div>
              <h3 className="text-md font-medium text-gray-900 dark:text-white mb-4">Language & Regional</h3>

              <div className="space-y-4">
                {/* Interface Language */}
                <div>
                  <label htmlFor="language" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Interface Language
                  </label>
                  <div className="relative">
                    <select
                      id="language"
                      value={formValues.interfaceLanguage}
                      onChange={(e) => handleFormChange('interfaceLanguage', e.target.value)}
                      className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
                    >
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                      <option>Chinese</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <ChevronDown className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Default Currency */}
                <div>
                  <label htmlFor="currency" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Default Currency
                  </label>
                  <div className="relative">
                    <select
                      id="currency"
                      value={formValues.defaultCurrency}
                      onChange={(e) => handleFormChange('defaultCurrency', e.target.value)}
                      className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
                    >
                      <option>USD ($)</option>
                      <option>EUR (€)</option>
                      <option>GBP (£)</option>
                      <option>JPY (¥)</option>
                      <option>CAD (C$)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <ChevronDown className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer with Save Button */}
          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 flex justify-end">
            <button
              onClick={handleSaveChanges}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md"
            >
              <Save className="h-4 w-4" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      )}

      {/* Company Tab Content */}
      {activeTab === 'company' && (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Company Information</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Update your company details and information
            </p>
          </div>

          <div className="p-6 space-y-6">
            {/* Company Name and Legal Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  defaultValue="Acme Corporation"
                  className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="legalName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Legal Name
                </label>
                <input
                  type="text"
                  id="legalName"
                  defaultValue="Acme Inc."
                  className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Company Address */}
            <div>
              <label htmlFor="companyAddress" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Company Address
              </label>
              <textarea
                id="companyAddress"
                rows={4}
                defaultValue="123 Business Avenue, Suite 200
San Francisco, CA 94107
United States"
                className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              />
            </div>

            {/* Tax ID, Registration Number, and Company Size */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="taxId" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Tax ID / VAT Number
                </label>
                <input
                  type="text"
                  id="taxId"
                  defaultValue="US-12345789"
                  className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Registration Number
                </label>
                <input
                  type="text"
                  id="registrationNumber"
                  defaultValue="REG-987654321"
                  className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Company Size
                </label>
                <div className="relative">
                  <select
                    id="companySize"
                    defaultValue="Medium (51-250)"
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
                  >
                    <option>Small (1-50)</option>
                    <option>Medium (51-250)</option>
                    <option>Large (251-1000)</option>
                    <option>Enterprise (1000+)</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Company Website */}
            <div>
              <label htmlFor="companyWebsite" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Company Website
              </label>
              <input
                type="url"
                id="companyWebsite"
                defaultValue="https://acmecorp.com"
                className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Footer with Update Button */}
          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 flex justify-end">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md"
            >
              <Building className="h-4 w-4" />
              <span>Update Company Information</span>
            </button>
          </div>
        </div>
      )}

      {/* Appearance Tab Content */}
      {activeTab === 'appearance' && (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Appearance Settings</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Customize how the HRMS application looks
            </p>
          </div>

          <div className="p-6 space-y-8">
            {/* Theme Selection */}
            <div>
              <h3 className="text-md font-medium text-gray-900 dark:text-white mb-4">Theme</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Light Theme */}
                <div className="relative">
                  <input
                    type="radio"
                    name="theme"
                    id="light-theme"
                    value="light"
                    defaultChecked
                    className="sr-only peer"
                  />
                  <label
                    htmlFor="light-theme"
                    className="flex flex-col h-full overflow-hidden border-2 border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer peer-checked:border-purple-500 peer-checked:ring-2 peer-checked:ring-purple-500"
                  >
                    <div className="h-32 bg-white border-b border-gray-200"></div>
                    <div className="p-3 text-center">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">Light</span>
                    </div>
                  </label>
                </div>

                {/* Dark Theme */}
                <div className="relative">
                  <input
                    type="radio"
                    name="theme"
                    id="dark-theme"
                    value="dark"
                    className="sr-only peer"
                  />
                  <label
                    htmlFor="dark-theme"
                    className="flex flex-col h-full overflow-hidden border-2 border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer peer-checked:border-purple-500 peer-checked:ring-2 peer-checked:ring-purple-500"
                  >
                    <div className="h-32 bg-gray-900"></div>
                    <div className="p-3 text-center">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">Dark</span>
                    </div>
                  </label>
                </div>

                {/* System Theme */}
                <div className="relative">
                  <input
                    type="radio"
                    name="theme"
                    id="system-theme"
                    value="system"
                    className="sr-only peer"
                  />
                  <label
                    htmlFor="system-theme"
                    className="flex flex-col h-full overflow-hidden border-2 border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer peer-checked:border-purple-500 peer-checked:ring-2 peer-checked:ring-purple-500"
                  >
                    <div className="h-32 bg-gradient-to-b from-gray-900 to-gray-300"></div>
                    <div className="p-3 text-center">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">System</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Reduce Animations */}
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-md font-medium text-gray-900 dark:text-white">Reduce Animations</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Use simpler animations for improved accessibility
                  </p>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                </label>
              </div>
            </div>

            {/* Branding */}
            <div>
              <h3 className="text-md font-medium text-gray-900 dark:text-white mb-4">Branding</h3>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">Use Custom Company Logo</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Display your company logo in the application
                  </p>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Footer with Apply Button */}
          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 flex justify-end">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md"
            >
              <Palette className="h-4 w-4" />
              <span>Apply Appearance Settings</span>
            </button>
          </div>
        </div>
      )}

      {/* Notifications Tab Content */}
      {activeTab === 'notifications' && (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Notification Preferences</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Manage how and when you receive notifications
            </p>
          </div>

          <div className="p-6 space-y-8">
            {/* Email Notifications */}
            <div>
              <h3 className="text-md font-medium text-gray-900 dark:text-white mb-4">Email Notifications</h3>

              <div className="space-y-4">
                {/* Leave Requests */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">Leave Requests</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Notify when leave requests are submitted, approved, or rejected
                    </p>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="sr-only peer"
                    />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                  </label>
                </div>

                {/* Document Expiry */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">Document Expiry</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Alert before employee documents are about to expire
                    </p>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="sr-only peer"
                    />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                  </label>
                </div>

                {/* Timesheet Submissions */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">Timesheet Submissions</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Receive updates when timesheets are submitted
                    </p>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="sr-only peer"
                    />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                  </label>
                </div>

                {/* Performance Reviews */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">Performance Reviews</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Updates on scheduled and completed reviews
                    </p>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="sr-only peer"
                    />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* System Notifications */}
            <div>
              <h3 className="text-md font-medium text-gray-900 dark:text-white mb-4">System Notifications</h3>

              <div className="space-y-4">
                {/* Announcements */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">Announcements</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Company-wide announcements and news
                    </p>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="sr-only peer"
                    />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                  </label>
                </div>

                {/* Payroll Processing */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">Payroll Processing</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Updates on payroll processing status
                    </p>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="sr-only peer"
                    />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                  </label>
                </div>

                {/* Maintenance Updates */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">Maintenance Updates</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      System maintenance and downtime alerts
                    </p>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                    />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Footer with Save Button */}
          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 flex justify-end">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md"
            >
              <Bell className="h-4 w-4" />
              <span>Save Notification Preferences</span>
            </button>
          </div>
        </div>
      )}

      {/* Security Tab Content */}
      {activeTab === 'security' && (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Security Settings</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Manage security preferences and access controls
            </p>
          </div>

          <div className="p-6 space-y-8">
            {/* Authentication Section */}
            <div>
              <h3 className="text-md font-medium text-gray-900 dark:text-white mb-4">Authentication</h3>

              <div className="space-y-4">
                {/* Two-Factor Authentication */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">Two-Factor Authentication</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Require 2FA for all administrative accounts
                    </p>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="sr-only peer"
                    />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                  </label>
                </div>

                {/* Session Timeout */}
                <div>
                  <label htmlFor="sessionTimeout" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Session Timeout (minutes)
                  </label>
                  <input
                    type="number"
                    id="sessionTimeout"
                    defaultValue="30"
                    min="5"
                    max="240"
                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Time in minutes before an inactive session expires
                  </p>
                </div>

                {/* Enforce Strong Password Policy */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">Enforce Strong Password Policy</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Require complex passwords and regular changes
                    </p>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="sr-only peer"
                    />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Data Protection Section */}
            <div>
              <h3 className="text-md font-medium text-gray-900 dark:text-white mb-4">Data Protection</h3>

              <div className="space-y-4">
                {/* Data Encryption */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">Data Encryption</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Encrypt sensitive employee data at rest
                    </p>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="sr-only peer"
                    />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                  </label>
                </div>

                {/* Advanced Audit Logging */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">Advanced Audit Logging</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Track detailed user actions and system changes
                    </p>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="sr-only peer"
                    />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Footer with Update Button */}
          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 flex justify-end">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md"
            >
              <Shield className="h-4 w-4" />
              <span>Update Security Settings</span>
            </button>
          </div>
        </div>
      )}

      {/* Advanced Tab Content */}
      {activeTab === 'advanced' && (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Advanced Settings</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Configure advanced system settings and integrations
            </p>
          </div>

          <div className="p-6 space-y-8">
            {/* System Section */}
            <div>
              <h3 className="text-md font-medium text-gray-900 dark:text-white mb-4">System</h3>

              <div className="space-y-4">
                {/* Data Retention Period */}
                <div>
                  <label htmlFor="dataRetention" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Data Retention Period (days)
                  </label>
                  <input
                    type="number"
                    id="dataRetention"
                    defaultValue="365"
                    min="30"
                    max="3650"
                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    How long to keep data logs and activity history
                  </p>
                </div>

                {/* Maintenance Mode */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">Maintenance Mode</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Temporarily restrict access for system maintenance
                    </p>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                    />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Integrations Section */}
            <div>
              <h3 className="text-md font-medium text-gray-900 dark:text-white mb-4">Integrations</h3>

              <div className="space-y-4">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Connected Services</h4>

                {/* Accounting Software */}
                <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-md">
                  <div>
                    <h5 className="text-sm font-medium text-gray-900 dark:text-white">Accounting Software</h5>
                    <p className="text-xs text-green-600 dark:text-green-400">Connected</p>
                  </div>
                  <button className="px-3 py-1 text-sm text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                    Disconnect
                  </button>
                </div>

                {/* Calendar Integration */}
                <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-md">
                  <div>
                    <h5 className="text-sm font-medium text-gray-900 dark:text-white">Calendar Integration</h5>
                    <p className="text-xs text-green-600 dark:text-green-400">Connected</p>
                  </div>
                  <button className="px-3 py-1 text-sm text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                    Disconnect
                  </button>
                </div>

                {/* Time Tracking Software */}
                <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-md">
                  <div>
                    <h5 className="text-sm font-medium text-gray-900 dark:text-white">Time Tracking Software</h5>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Not Connected</p>
                  </div>
                  <button className="px-3 py-1 text-sm text-white bg-purple-600 hover:bg-purple-700 rounded-md">
                    Connect
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer with Save Button */}
          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 flex justify-end">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md"
            >
              <SettingsIcon className="h-4 w-4" />
              <span>Save Advanced Settings</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;
