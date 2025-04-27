import React, { useState } from 'react';
import { 
  Plus,
  Search,
  ChevronDown,
  Check,
  MoreHorizontal,
  Globe,
  Languages
} from 'lucide-react';

function MultiLanguageSupport() {
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample languages data
  const languages = [
    {
      id: 1,
      name: 'English (US)',
      code: 'en-US',
      flag: '🇺🇸',
      direction: 'LTR',
      status: 'active',
      completion: 98,
      isDefault: true
    },
    {
      id: 2,
      name: 'Spanish',
      code: 'es',
      flag: '🇪🇸',
      direction: 'LTR',
      status: 'active',
      completion: 92,
      isDefault: false
    },
    {
      id: 3,
      name: 'French',
      code: 'fr',
      flag: '🇫🇷',
      direction: 'LTR',
      status: 'active',
      completion: 85,
      isDefault: false
    },
    {
      id: 4,
      name: 'German',
      code: 'de',
      flag: '🇩🇪',
      direction: 'LTR',
      status: 'active',
      completion: 91,
      isDefault: false
    },
    {
      id: 5,
      name: 'Japanese',
      code: 'ja',
      flag: '🇯🇵',
      direction: 'LTR',
      status: 'active',
      completion: 75,
      isDefault: false
    },
    {
      id: 6,
      name: 'Arabic',
      code: 'ar',
      flag: '🇦🇪',
      direction: 'RTL',
      status: 'inactive',
      completion: 60,
      isDefault: false
    },
    {
      id: 7,
      name: 'Portuguese (Brazil)',
      code: 'pt-BR',
      flag: '🇧🇷',
      direction: 'LTR',
      status: 'inactive',
      completion: 70,
      isDefault: false
    },
    {
      id: 8,
      name: 'Chinese (Simplified)',
      code: 'zh-CN',
      flag: '🇨🇳',
      direction: 'LTR',
      status: 'active',
      completion: 83,
      isDefault: false
    }
  ];
  
  // Function to handle add language
  const handleAddLanguage = () => {
    alert('Add new language');
  };
  
  // Function to handle set as default
  const handleSetAsDefault = (id) => {
    alert(`Set language ${id} as default`);
  };
  
  // Function to handle download
  const handleDownload = (id) => {
    alert(`Download language ${id}`);
  };
  
  // Function to handle activate
  const handleActivate = (id) => {
    alert(`Activate language ${id}`);
  };
  
  // Count active languages
  const activeLanguages = languages.filter(language => language.status === 'active').length;
  
  // Calculate average completion
  const averageCompletion = Math.round(
    languages.reduce((sum, language) => sum + language.completion, 0) / languages.length
  );
  
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
  
  // Function to get completion bar color
  const getCompletionColor = (percentage) => {
    if (percentage >= 90) {
      return 'bg-green-500';
    } else if (percentage >= 70) {
      return 'bg-blue-500';
    } else {
      return 'bg-orange-500';
    }
  };
  
  // Filter languages based on search query
  const filteredLanguages = languages.filter(language => 
    language.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    language.code.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Multi-Language Support</h1>
        <button
          onClick={handleAddLanguage}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md"
        >
          <Plus className="h-4 w-4" />
          <span>Add Language</span>
        </button>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Languages */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Total Languages
                </span>
                <span className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                  {languages.length}
                </span>
              </div>
              <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Active Languages */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Active Languages
                </span>
                <span className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                  {activeLanguages}
                </span>
              </div>
              <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                <Languages className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Average Completion */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Average Completion
                </span>
                <span className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                  {averageCompletion}%
                </span>
              </div>
              <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                <Check className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Language Management */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Language Management</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Configure languages and translations for your HRMS
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
          <div className="relative w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search languages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm dark:bg-gray-800 dark:text-white"
            />
          </div>
          <div className="relative">
            <button
              className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm"
            >
              <span>All Languages</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        {/* Languages Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Language
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Code
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Direction
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Completion
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Default
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
              {filteredLanguages.map((language) => (
                <tr key={language.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">{language.flag}</span>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {language.name}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {language.code}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {language.direction}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(language.status)}`}>
                      {language.status === 'active' ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className={`${getCompletionColor(language.completion)} h-2.5 rounded-full`} 
                        style={{ width: `${language.completion}%` }}
                      ></div>
                    </div>
                    <div className="mt-1 text-xs text-right text-gray-500 dark:text-gray-400">
                      {language.completion}%
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {language.isDefault ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        Default
                      </span>
                    ) : (
                      <button
                        onClick={() => handleSetAsDefault(language.id)}
                        className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Set as Default
                      </button>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      {language.status === 'active' ? (
                        <button
                          onClick={() => handleDownload(language.id)}
                          className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          Download
                        </button>
                      ) : (
                        <button
                          onClick={() => handleActivate(language.id)}
                          className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          Activate
                        </button>
                      )}
                      <button className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
                        <MoreHorizontal className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MultiLanguageSupport;
