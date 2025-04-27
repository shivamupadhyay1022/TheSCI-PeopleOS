import React, { useState } from 'react';
import { 
  Plus,
  Building,
  Search,
  ExternalLink,
  Edit,
  Trash2,
  Globe,
  Users,
  DollarSign,
  MapPin
} from 'lucide-react';

function MultiCompanyManagement() {
  // State for active tab
  const [activeTab, setActiveTab] = useState('companies');
  
  // Sample companies data
  const companies = [
    {
      id: 1,
      name: 'PeopleOS Technologies Inc.',
      logo: '/company-logos/logo1.png',
      code: 'PEOS_US',
      location: 'United States',
      currency: 'USD',
      employees: 430,
      status: 'active'
    },
    {
      id: 2,
      name: 'PeopleOS UK Ltd',
      logo: '/company-logos/logo2.png',
      code: 'PEOS_UK',
      location: 'United Kingdom',
      currency: 'GBP',
      employees: 120,
      status: 'active'
    },
    {
      id: 3,
      name: 'PeopleOS Asia Pte. Ltd.',
      logo: '/company-logos/logo3.png',
      code: 'PEOS_SG',
      location: 'Singapore',
      currency: 'SGD',
      employees: 85,
      status: 'active'
    },
    {
      id: 4,
      name: 'PeopleOS India Pvt. Ltd.',
      logo: '/company-logos/logo4.png',
      code: 'PEOS_IN',
      location: 'India',
      currency: 'INR',
      employees: 220,
      status: 'active'
    },
    {
      id: 5,
      name: 'PeopleOS Australia Pty. Ltd.',
      logo: '/company-logos/logo5.png',
      code: 'PEOS_AU',
      location: 'Australia',
      currency: 'AUD',
      employees: 65,
      status: 'active'
    },
    {
      id: 6,
      name: 'PeopleOS Micro Recruiting',
      logo: '/company-logos/logo6.png',
      code: 'PEOS_MRU',
      location: 'United States',
      currency: 'USD',
      employees: 130,
      status: 'inactive'
    }
  ];
  
  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  // Function to handle add company
  const handleAddCompany = () => {
    alert('Add new company');
  };
  
  // Function to handle edit company
  const handleEditCompany = (id) => {
    alert(`Edit company ${id}`);
  };
  
  // Function to handle delete company
  const handleDeleteCompany = (id) => {
    alert(`Delete company ${id}`);
  };
  
  // Function to handle preview data
  const handlePreviewData = () => {
    alert('Preview data');
  };
  
  // Count active companies
  const activeCompanies = companies.filter(company => company.status === 'active').length;
  
  // Count unique locations
  const uniqueLocations = [...new Set(companies.map(company => company.location))].length;
  
  // Count total employees
  const totalEmployees = companies.reduce((sum, company) => sum + company.employees, 0);
  
  // Function to get status badge color
  const getStatusColor = (status) => {
    switch(status) {
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'inactive':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };
  
  // Function to render company logo or placeholder
  const renderCompanyLogo = (company) => {
    return (
      <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
        {company.logo ? (
          <img src={company.logo} alt={company.name} className="h-full w-full object-cover" />
        ) : (
          <Building className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        )}
      </div>
    );
  };
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Multi-Company Management</h1>
        <button
          onClick={handleAddCompany}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md"
        >
          <Plus className="h-4 w-4" />
          <span>Add Company</span>
        </button>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Companies */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Total Companies
                </span>
                <span className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                  {companies.length}
                </span>
              </div>
              <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                <Building className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Active */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Active
                </span>
                <span className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                  {activeCompanies}
                </span>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                <Building className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Locations */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Locations
                </span>
                <span className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                  {uniqueLocations}
                </span>
              </div>
              <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Total Employees */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Total Employees
                </span>
                <span className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                  {totalEmployees}
                </span>
              </div>
              <div className="h-10 w-10 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                <Users className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Company Management */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Company Management</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Manage multiple companies and subsidiaries under your organization
          </p>
        </div>
        
        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-800">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => handleTabChange('companies')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'companies'
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Companies
            </button>
            <button
              onClick={() => handleTabChange('corporate-structure')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'corporate-structure'
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Corporate Structure
            </button>
            <button
              onClick={() => handleTabChange('global-settings')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'global-settings'
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Global Settings
            </button>
          </nav>
        </div>
        
        {/* Companies Tab Content */}
        {activeTab === 'companies' && (
          <div>
            <div className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
              <div className="relative w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search companies..."
                  className="pl-10 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                />
              </div>
              <button
                onClick={handlePreviewData}
                className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Preview Data</span>
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Company
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Code
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Location
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Currency
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Employees
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
                  {companies.map((company) => (
                    <tr key={company.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {renderCompanyLogo(company)}
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {company.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {company.code}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {company.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {company.currency}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {company.employees}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(company.status)}`}>
                          {company.status === 'active' ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() => handleEditCompany(company.id)}
                            className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                          >
                            <Edit className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => handleDeleteCompany(company.id)}
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
        
        {/* Corporate Structure Tab Content */}
        {activeTab === 'corporate-structure' && (
          <div className="p-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center">
              <Globe className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Corporate Structure</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Define the hierarchical structure of your organization and manage parent-child relationships between companies.
              </p>
              <button
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md"
              >
                Configure Corporate Structure
              </button>
            </div>
          </div>
        )}
        
        {/* Global Settings Tab Content */}
        {activeTab === 'global-settings' && (
          <div className="p-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center">
              <Globe className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Global Settings</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Configure global settings that apply across all companies in your organization.
              </p>
              <button
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md"
              >
                Manage Global Settings
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MultiCompanyManagement;
