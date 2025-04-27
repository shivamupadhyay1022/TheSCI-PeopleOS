import React, { useState } from 'react';
import { 
  Search, 
  Upload,
  Filter,
  SortDesc,
  MessageSquare,
  Check,
  X,
  Eye
} from 'lucide-react';

function AIResumeScreening() {
  // State for job description
  const [jobDescription, setJobDescription] = useState('');
  
  // State for auto-shortlist threshold
  const [shortlistThreshold, setShortlistThreshold] = useState(75);
  
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');
  
  // State for active tab
  const [activeTab, setActiveTab] = useState('all');
  
  // Sample candidates data
  const candidates = [
    {
      id: 1,
      name: 'John Doe 1',
      position: 'Frontend Developer',
      matchPercentage: 92,
      updatedDays: 2,
      roleFit: 95,
      skillsMatch: {
        matched: 15,
        total: 20
      },
      skills: ['React', 'TypeScript', 'Node.js'],
      moreSkills: 12,
      status: 'shortlisted'
    },
    {
      id: 2,
      name: 'John Doe 2',
      position: 'Frontend Developer',
      matchPercentage: 92,
      updatedDays: 2,
      roleFit: 95,
      skillsMatch: {
        matched: 15,
        total: 20
      },
      skills: ['React', 'TypeScript', 'Node.js'],
      moreSkills: 12,
      status: 'shortlisted'
    },
    {
      id: 3,
      name: 'John Doe 3',
      position: 'Frontend Developer',
      matchPercentage: 68,
      updatedDays: 2,
      roleFit: 70,
      skillsMatch: {
        matched: 8,
        total: 20
      },
      skills: ['React', 'TypeScript', 'Node.js'],
      moreSkills: 5,
      status: 'pending'
    },
    {
      id: 4,
      name: 'John Doe 4',
      position: 'Frontend Developer',
      matchPercentage: 68,
      updatedDays: 2,
      roleFit: 70,
      skillsMatch: {
        matched: 8,
        total: 20
      },
      skills: ['React', 'TypeScript', 'Node.js'],
      moreSkills: 5,
      status: 'rejected'
    },
    {
      id: 5,
      name: 'John Doe 5',
      position: 'Frontend Developer',
      matchPercentage: 68,
      updatedDays: 2,
      roleFit: 70,
      skillsMatch: {
        matched: 8,
        total: 20
      },
      skills: ['React', 'TypeScript', 'Node.js'],
      moreSkills: 5,
      status: 'rejected'
    },
    {
      id: 6,
      name: 'John Doe 6',
      position: 'Frontend Developer',
      matchPercentage: 68,
      updatedDays: 2,
      roleFit: 70,
      skillsMatch: {
        matched: 8,
        total: 20
      },
      skills: ['React', 'TypeScript', 'Node.js'],
      moreSkills: 5,
      status: 'rejected'
    }
  ];
  
  // Function to handle view candidate
  const handleViewCandidate = (id) => {
    alert(`View candidate ID: ${id}`);
  };
  
  // Function to handle message candidate
  const handleMessageCandidate = (id) => {
    alert(`Message candidate ID: ${id}`);
  };
  
  // Function to handle approve candidate
  const handleApproveCandidate = (id) => {
    alert(`Approve candidate ID: ${id}`);
  };
  
  // Function to handle reject candidate
  const handleRejectCandidate = (id) => {
    alert(`Reject candidate ID: ${id}`);
  };
  
  // Function to handle upload resumes
  const handleUploadResumes = () => {
    alert('Upload resumes');
  };
  
  // Function to handle select from job postings
  const handleSelectFromJobPostings = () => {
    alert('Select from job postings');
  };
  
  // Function to handle filter
  const handleFilter = () => {
    alert('Filter candidates');
  };
  
  // Function to handle sort
  const handleSort = () => {
    alert('Sort candidates');
  };
  
  // Filter candidates based on search query and active tab
  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = searchQuery === '' || 
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (activeTab === 'all') {
      return matchesSearch;
    } else if (activeTab === 'shortlisted') {
      return matchesSearch && candidate.status === 'shortlisted';
    } else if (activeTab === 'pending') {
      return matchesSearch && candidate.status === 'pending';
    } else if (activeTab === 'rejected') {
      return matchesSearch && candidate.status === 'rejected';
    }
    
    return matchesSearch;
  });
  
  // Get match color class
  const getMatchColorClass = (percentage) => {
    if (percentage >= 90) {
      return 'text-green-600';
    } else if (percentage >= 70) {
      return 'text-yellow-600';
    } else {
      return 'text-orange-600';
    }
  };
  
  // Get role fit color class
  const getRoleFitColorClass = (percentage) => {
    if (percentage >= 90) {
      return 'bg-green-500';
    } else if (percentage >= 70) {
      return 'bg-yellow-500';
    } else {
      return 'bg-orange-500';
    }
  };
  
  // Get skills match color class
  const getSkillsMatchColorClass = (percentage) => {
    if (percentage >= 75) {
      return 'bg-green-500';
    } else if (percentage >= 50) {
      return 'bg-yellow-500';
    } else {
      return 'bg-orange-500';
    }
  };
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">AI Resume Screening</h1>
        <div className="flex space-x-2">
          <button 
            onClick={handleFilter}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-300"
          >
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
          <button 
            onClick={handleSort}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-300"
          >
            <SortDesc className="h-4 w-4" />
            <span>Sort</span>
          </button>
          <button 
            onClick={handleUploadResumes}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm"
          >
            <Upload className="h-4 w-4" />
            <span>Upload Resumes</span>
          </button>
        </div>
      </div>

      {/* Job Description Section */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Job Description</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Compare candidates against this job description
          </p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <input
                type="text"
                placeholder="Select or paste job description..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <button 
              onClick={handleSelectFromJobPostings}
              className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-300"
            >
              Select from Job Postings
            </button>
          </div>
          
          <div className="mt-4 flex items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">Auto-shortlist candidates above:</span>
            <div className="relative inline-block w-16 mr-2">
              <input
                type="number"
                min="0"
                max="100"
                value={shortlistThreshold}
                onChange={(e) => setShortlistThreshold(parseInt(e.target.value))}
                className="w-full px-2 py-1 text-center border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">%</span>
          </div>
        </div>
      </div>
      
      {/* Search Bar */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search by name, skills or experience..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
        />
      </div>
      
      {/* Tabs */}
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setActiveTab('all')}
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === 'all'
              ? 'border-b-2 border-purple-500 text-purple-600 dark:text-purple-400'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
          }`}
        >
          All Candidates
        </button>
        <button
          onClick={() => setActiveTab('shortlisted')}
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === 'shortlisted'
              ? 'border-b-2 border-purple-500 text-purple-600 dark:text-purple-400'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
          }`}
        >
          Shortlisted
        </button>
        <button
          onClick={() => setActiveTab('pending')}
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === 'pending'
              ? 'border-b-2 border-purple-500 text-purple-600 dark:text-purple-400'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
          }`}
        >
          Pending Review
        </button>
        <button
          onClick={() => setActiveTab('rejected')}
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === 'rejected'
              ? 'border-b-2 border-purple-500 text-purple-600 dark:text-purple-400'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
          }`}
        >
          Rejected
        </button>
      </div>
      
      {/* Candidate Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCandidates.map((candidate) => (
          <div key={candidate.id} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
            <div className="p-4">
              {/* Header */}
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{candidate.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{candidate.position}</p>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-semibold ${getMatchColorClass(candidate.matchPercentage)}`}>
                    {candidate.matchPercentage}% Match
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Updated {candidate.updatedDays} ago
                  </p>
                </div>
              </div>
              
              {/* Role Fit */}
              <div className="mb-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Role Fit</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{candidate.roleFit}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${getRoleFitColorClass(candidate.roleFit)}`}
                    style={{ width: `${candidate.roleFit}%` }}
                  ></div>
                </div>
              </div>
              
              {/* Skills Match */}
              <div className="mb-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Skills Match</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {candidate.skillsMatch.matched}/{candidate.skillsMatch.total} skills
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${getSkillsMatchColorClass((candidate.skillsMatch.matched / candidate.skillsMatch.total) * 100)}`}
                    style={{ width: `${(candidate.skillsMatch.matched / candidate.skillsMatch.total) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {candidate.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
                {candidate.moreSkills > 0 && (
                  <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 rounded-md">
                    +{candidate.moreSkills} more
                  </span>
                )}
              </div>
              
              {/* Actions */}
              <div className="flex justify-between">
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleViewCandidate(candidate.id)}
                    className="px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      View
                    </span>
                  </button>
                  <button 
                    onClick={() => handleMessageCandidate(candidate.id)}
                    className="px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    <MessageSquare className="h-3 w-3" />
                  </button>
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleApproveCandidate(candidate.id)}
                    className="p-1 text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 bg-green-100 dark:bg-green-900 rounded-md"
                  >
                    <Check className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => handleRejectCandidate(candidate.id)}
                    className="p-1 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 bg-red-100 dark:bg-red-900 rounded-md"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AIResumeScreening;
