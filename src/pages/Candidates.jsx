import React, { useState } from 'react';
import { 
  Search, 
  Plus,
  Eye,
  Calendar,
  MessageSquare,
  Download,
  Star,
  ChevronDown,
  Circle
} from 'lucide-react';

function Candidates() {
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');
  
  // State for filters
  const [positionFilter, setPositionFilter] = useState('All Positions');
  const [stageFilter, setStageFilter] = useState('All Stages');
  
  // Sample candidates data
  const candidates = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      appliedFor: 'Senior Software Engineer',
      stage: 'Screening',
      rating: 5,
      appliedDate: '2023-05-18'
    },
    {
      id: 2,
      name: 'Emily Johnson',
      email: 'emily.johnson@example.com',
      appliedFor: 'HR Manager',
      stage: 'Screening',
      rating: 4,
      appliedDate: '2023-03-22'
    },
    {
      id: 3,
      name: 'Michael Williams',
      email: 'michael.williams@example.com',
      appliedFor: 'Marketing Specialist',
      stage: 'Applied',
      rating: 0,
      appliedDate: '2023-04-05'
    },
    {
      id: 4,
      name: 'Sarah Brown',
      email: 'sarah.brown@example.com',
      appliedFor: 'Senior Software Engineer',
      stage: 'Final Interview',
      rating: 5,
      appliedDate: '2023-03-10'
    },
    {
      id: 5,
      name: 'David Miller',
      email: 'david.miller@example.com',
      appliedFor: 'HR Manager',
      stage: 'Offer',
      rating: 4,
      appliedDate: '2023-05-15'
    }
  ];
  
  // Calculate statistics
  const statistics = {
    applied: 8, // Hardcoded for demo
    screening: 5, // Hardcoded for demo
    interviewing: 10, // Hardcoded for demo
    offer: 2 // Hardcoded for demo
  };
  
  // Available positions and stages for filters
  const positions = ['All Positions', 'Senior Software Engineer', 'HR Manager', 'Marketing Specialist', 'Product Designer', 'Financial Analyst'];
  const stages = ['All Stages', 'Applied', 'Screening', 'Phone Interview', 'Technical Interview', 'Final Interview', 'Offer', 'Hired', 'Rejected'];
  
  // Function to handle view candidate
  const handleViewCandidate = (id) => {
    alert(`View candidate ID: ${id}`);
  };
  
  // Function to handle schedule interview
  const handleScheduleInterview = (id) => {
    alert(`Schedule interview for candidate ID: ${id}`);
  };
  
  // Function to handle send message
  const handleSendMessage = (id) => {
    alert(`Send message to candidate ID: ${id}`);
  };
  
  // Function to handle download resume
  const handleDownloadResume = (id) => {
    alert(`Download resume for candidate ID: ${id}`);
  };
  
  // Function to handle add candidate
  const handleAddCandidate = () => {
    alert('Add new candidate');
  };
  
  // Function to format date
  const formatDate = (dateString) => {
    if (!dateString) return '—';
    return dateString;
  };
  
  // Filter candidates based on search query and filters
  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = searchQuery === '' || 
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.appliedFor.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesPosition = positionFilter === 'All Positions' || candidate.appliedFor === positionFilter;
    const matchesStage = stageFilter === 'All Stages' || candidate.stage === stageFilter;
    
    return matchesSearch && matchesPosition && matchesStage;
  });
  
  // Get stage color class
  const getStageColorClass = (stage) => {
    switch (stage) {
      case 'Applied':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Screening':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Phone Interview':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Technical Interview':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'Final Interview':
        return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200';
      case 'Offer':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Hired':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200';
      case 'Rejected':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };
  
  // Render star rating
  const renderRating = (rating) => {
    if (rating === 0) return <span className="text-gray-500 dark:text-gray-400">Not rated</span>;
    
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
    );
  };
  
  return (
    <div className="space-y-6 relative">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Candidates</h1>
        <button 
          onClick={handleAddCandidate}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm"
        >
          <Plus className="h-4 w-4" />
          <span>Add Candidate</span>
        </button>
      </div>

      {/* Candidate Management Section */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Candidate Management</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Track and manage all job applicants in one place
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search */}
            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search candidates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
              {/* Position Filter */}
              <div className="relative w-full sm:w-40">
                <select
                  value={positionFilter}
                  onChange={(e) => setPositionFilter(e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800 dark:text-white"
                >
                  {positions.map((position) => (
                    <option key={position} value={position}>
                      {position}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
              
              {/* Stage Filter */}
              <div className="relative w-full sm:w-40">
                <select
                  value={stageFilter}
                  onChange={(e) => setStageFilter(e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800 dark:text-white"
                >
                  {stages.map((stage) => (
                    <option key={stage} value={stage}>
                      {stage}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Candidates Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Applied For
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Stage
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Rating
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Applied Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
              {filteredCandidates.map((candidate) => (
                <tr key={candidate.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-blue-600 dark:text-blue-400">{candidate.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{candidate.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{candidate.appliedFor}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStageColorClass(candidate.stage)}`}>
                      {candidate.stage}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {renderRating(candidate.rating)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-400">{formatDate(candidate.appliedDate)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-3">
                      <button 
                        onClick={() => handleViewCandidate(candidate.id)}
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                        title="View"
                      >
                        <Eye className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={() => handleScheduleInterview(candidate.id)}
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                        title="Schedule"
                      >
                        <Calendar className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={() => handleSendMessage(candidate.id)}
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                        title="Message"
                      >
                        <MessageSquare className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={() => handleDownloadResume(candidate.id)}
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                        title="Download Resume"
                      >
                        <Download className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Applied */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Applied</h3>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-4">
              {statistics.applied}
            </p>
          </div>
        </div>
        
        {/* Screening */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Screening</h3>
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mt-4">
              {statistics.screening}
            </p>
          </div>
        </div>
        
        {/* Interviewing */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Interviewing</h3>
            <p className="text-3xl font-bold text-orange-600 dark:text-orange-400 mt-4">
              {statistics.interviewing}
            </p>
          </div>
        </div>
        
        {/* Offer Stage */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Offer Stage</h3>
            <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-4">
              {statistics.offer}
            </p>
          </div>
        </div>
      </div>
      
      {/* Floating Action Button */}
      <button 
        onClick={handleAddCandidate}
        className="fixed bottom-6 right-6 p-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg"
      >
        <Plus className="h-6 w-6" />
      </button>
    </div>
  );
}

export default Candidates;
