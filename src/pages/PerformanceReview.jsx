import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Calendar, 
  Star, 
  BarChart3, 
  ChevronDown, 
  ChevronUp,
  Download,
  Edit,
  Trash2,
  User,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';

function PerformanceReview() {
  // Sample performance review data
  const [reviews, setReviews] = useState([
    {
      id: 1,
      employee: {
        id: 101,
        name: 'John Doe',
        position: 'Software Engineer',
        department: 'Engineering',
        avatar: 'JD'
      },
      reviewPeriod: 'Q1 2023',
      reviewDate: '2023-04-15',
      reviewer: 'Jane Smith',
      status: 'Completed',
      overallRating: 4.5,
      ratings: {
        jobKnowledge: 4,
        workQuality: 5,
        attendance: 4,
        communication: 4,
        teamwork: 5
      },
      strengths: 'Excellent technical skills, proactive problem solver, great team player',
      areasOfImprovement: 'Could improve documentation practices',
      goals: [
        'Complete advanced React certification',
        'Mentor junior developers',
        'Improve code review process'
      ],
      comments: 'John has been an outstanding performer this quarter. His contributions to Project X were critical to its success.'
    },
    {
      id: 2,
      employee: {
        id: 102,
        name: 'Sarah Johnson',
        position: 'UX Designer',
        department: 'Design',
        avatar: 'SJ'
      },
      reviewPeriod: 'Q1 2023',
      reviewDate: '2023-04-14',
      reviewer: 'Michael Chen',
      status: 'Completed',
      overallRating: 4.2,
      ratings: {
        jobKnowledge: 4,
        workQuality: 5,
        attendance: 4,
        communication: 4,
        teamwork: 4
      },
      strengths: 'Creative design solutions, excellent user research skills, good collaboration',
      areasOfImprovement: 'Could improve on meeting deadlines',
      goals: [
        'Lead the redesign of the mobile app',
        'Conduct user testing sessions',
        'Create a design system'
      ],
      comments: 'Sarah has shown great creativity and user-centered thinking in her designs.'
    },
    {
      id: 3,
      employee: {
        id: 103,
        name: 'Michael Chen',
        position: 'Product Manager',
        department: 'Product',
        avatar: 'MC'
      },
      reviewPeriod: 'Q1 2023',
      reviewDate: '2023-04-16',
      reviewer: 'David Wilson',
      status: 'Completed',
      overallRating: 4.8,
      ratings: {
        jobKnowledge: 5,
        workQuality: 5,
        attendance: 5,
        communication: 5,
        teamwork: 4
      },
      strengths: 'Strategic thinking, excellent stakeholder management, clear communication',
      areasOfImprovement: 'Could delegate more tasks to team members',
      goals: [
        'Launch new product feature',
        'Improve cross-team collaboration',
        'Develop product roadmap for Q3-Q4'
      ],
      comments: 'Michael has been instrumental in aligning the team and stakeholders around our product vision.'
    },
    {
      id: 4,
      employee: {
        id: 104,
        name: 'Emily Davis',
        position: 'Marketing Specialist',
        department: 'Marketing',
        avatar: 'ED'
      },
      reviewPeriod: 'Q1 2023',
      reviewDate: null,
      reviewer: 'Robert Johnson',
      status: 'Pending',
      overallRating: null,
      ratings: {
        jobKnowledge: null,
        workQuality: null,
        attendance: null,
        communication: null,
        teamwork: null
      },
      strengths: '',
      areasOfImprovement: '',
      goals: [
        'Increase social media engagement',
        'Launch email marketing campaign',
        'Improve content strategy'
      ],
      comments: ''
    },
    {
      id: 5,
      employee: {
        id: 105,
        name: 'David Wilson',
        position: 'Engineering Manager',
        department: 'Engineering',
        avatar: 'DW'
      },
      reviewPeriod: 'Q1 2023',
      reviewDate: null,
      reviewer: 'Lisa Thompson',
      status: 'In Progress',
      overallRating: null,
      ratings: {
        jobKnowledge: 4,
        workQuality: 4,
        attendance: 5,
        communication: null,
        teamwork: null
      },
      strengths: 'Strong technical leadership, good mentoring skills',
      areasOfImprovement: '',
      goals: [
        'Improve team velocity',
        'Reduce technical debt',
        'Implement CI/CD pipeline'
      ],
      comments: 'Partial review completed. Need to discuss communication and teamwork aspects.'
    }
  ]);

  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [departmentFilter, setDepartmentFilter] = useState('All');
  const [periodFilter, setPeriodFilter] = useState('All');
  const [expandedReview, setExpandedReview] = useState(null);

  // Status options
  const statusOptions = ['All', 'Completed', 'In Progress', 'Pending'];
  
  // Department options (derived from data)
  const departmentOptions = ['All', ...new Set(reviews.map(review => review.employee.department))];
  
  // Period options (derived from data)
  const periodOptions = ['All', ...new Set(reviews.map(review => review.reviewPeriod))];

  // Filter reviews
  const filteredReviews = reviews.filter(review => {
    // Search filter
    const searchMatch = 
      review.employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.employee.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.employee.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (review.reviewer && review.reviewer.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Status filter
    const statusMatch = statusFilter === 'All' || review.status === statusFilter;
    
    // Department filter
    const departmentMatch = departmentFilter === 'All' || review.employee.department === departmentFilter;
    
    // Period filter
    const periodMatch = periodFilter === 'All' || review.reviewPeriod === periodFilter;
    
    return searchMatch && statusMatch && departmentMatch && periodMatch;
  });

  // Toggle review expansion
  const toggleReviewExpansion = (reviewId) => {
    setExpandedReview(expandedReview === reviewId ? null : reviewId);
  };

  // Handle new review
  const handleNewReview = () => {
    console.log('Create new performance review');
  };

  // Render star rating
  const StarRating = ({ rating }) => {
    if (rating === null) return <span className="text-gray-400 dark:text-gray-500">Not rated</span>;
    
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && (
          <div className="relative">
            <Star className="h-4 w-4 text-gray-300 dark:text-gray-600" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300 dark:text-gray-600" />
        ))}
        <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">{rating.toFixed(1)}</span>
      </div>
    );
  };

  // Status badge component
  const StatusBadge = ({ status }) => {
    let bgColor, textColor, icon;
    
    switch (status) {
      case 'Completed':
        bgColor = 'bg-green-100 dark:bg-green-900';
        textColor = 'text-green-800 dark:text-green-300';
        icon = <CheckCircle className="h-4 w-4 mr-1" />;
        break;
      case 'In Progress':
        bgColor = 'bg-blue-100 dark:bg-blue-900';
        textColor = 'text-blue-800 dark:text-blue-300';
        icon = <Clock className="h-4 w-4 mr-1" />;
        break;
      case 'Pending':
      default:
        bgColor = 'bg-yellow-100 dark:bg-yellow-900';
        textColor = 'text-yellow-800 dark:text-yellow-300';
        icon = <AlertCircle className="h-4 w-4 mr-1" />;
        break;
    }
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor} ${textColor}`}>
        {icon}
        {status}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Performance Reviews</h1>
        <div className="flex space-x-2">
          <button 
            onClick={() => console.log('Export data')}
            className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-gray-50 dark:hover:bg-gray-750"
          >
            <Download size={16} />
            <span>Export</span>
          </button>
          <button 
            onClick={handleNewReview}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center space-x-2"
          >
            <Plus size={16} />
            <span>New Review</span>
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
              placeholder="Search reviews..."
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
                <option key={status} value={status}>{status} Status</option>
              ))}
            </select>
          </div>
          
          {/* Department Filter */}
          <div className="w-full md:w-48">
            <select
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md py-2 px-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
            >
              {departmentOptions.map(dept => (
                <option key={dept} value={dept}>{dept} Department</option>
              ))}
            </select>
          </div>
          
          {/* Period Filter */}
          <div className="w-full md:w-48">
            <select
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md py-2 px-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              value={periodFilter}
              onChange={(e) => setPeriodFilter(e.target.value)}
            >
              {periodOptions.map(period => (
                <option key={period} value={period}>{period}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Performance Reviews List */}
      <div className="space-y-4">
        {filteredReviews.map(review => (
          <div key={review.id} className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
            {/* Review Header */}
            <div 
              className="p-4 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-750"
              onClick={() => toggleReviewExpansion(review.id)}
            >
              <div className="flex items-center mb-3 md:mb-0">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-800 dark:text-purple-300 font-medium">
                  {review.employee.avatar}
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {review.employee.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {review.employee.position} • {review.employee.department}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Review Period</div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">{review.reviewPeriod}</div>
                </div>
                
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Reviewer</div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">{review.reviewer || 'Not assigned'}</div>
                </div>
                
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Status</div>
                  <StatusBadge status={review.status} />
                </div>
                
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Overall Rating</div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {review.overallRating ? <StarRating rating={review.overallRating} /> : 'Not rated'}
                  </div>
                </div>
                
                <div className="flex items-center">
                  {expandedReview === review.id ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </div>
            </div>
            
            {/* Expanded Review Details */}
            {expandedReview === review.id && (
              <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Performance Ratings */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Performance Ratings</h3>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-700 dark:text-gray-300">Job Knowledge</span>
                        <div className="w-32">
                          {review.ratings.jobKnowledge !== null ? (
                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-purple-600" 
                                style={{ width: `${(review.ratings.jobKnowledge / 5) * 100}%` }}
                              ></div>
                            </div>
                          ) : (
                            <span className="text-xs text-gray-400 dark:text-gray-500">Not rated</span>
                          )}
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {review.ratings.jobKnowledge !== null ? review.ratings.jobKnowledge : '-'}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-700 dark:text-gray-300">Work Quality</span>
                        <div className="w-32">
                          {review.ratings.workQuality !== null ? (
                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-purple-600" 
                                style={{ width: `${(review.ratings.workQuality / 5) * 100}%` }}
                              ></div>
                            </div>
                          ) : (
                            <span className="text-xs text-gray-400 dark:text-gray-500">Not rated</span>
                          )}
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {review.ratings.workQuality !== null ? review.ratings.workQuality : '-'}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-700 dark:text-gray-300">Attendance</span>
                        <div className="w-32">
                          {review.ratings.attendance !== null ? (
                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-purple-600" 
                                style={{ width: `${(review.ratings.attendance / 5) * 100}%` }}
                              ></div>
                            </div>
                          ) : (
                            <span className="text-xs text-gray-400 dark:text-gray-500">Not rated</span>
                          )}
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {review.ratings.attendance !== null ? review.ratings.attendance : '-'}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-700 dark:text-gray-300">Communication</span>
                        <div className="w-32">
                          {review.ratings.communication !== null ? (
                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-purple-600" 
                                style={{ width: `${(review.ratings.communication / 5) * 100}%` }}
                              ></div>
                            </div>
                          ) : (
                            <span className="text-xs text-gray-400 dark:text-gray-500">Not rated</span>
                          )}
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {review.ratings.communication !== null ? review.ratings.communication : '-'}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-700 dark:text-gray-300">Teamwork</span>
                        <div className="w-32">
                          {review.ratings.teamwork !== null ? (
                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-purple-600" 
                                style={{ width: `${(review.ratings.teamwork / 5) * 100}%` }}
                              ></div>
                            </div>
                          ) : (
                            <span className="text-xs text-gray-400 dark:text-gray-500">Not rated</span>
                          )}
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {review.ratings.teamwork !== null ? review.ratings.teamwork : '-'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Overall Rating</div>
                      <div className="text-lg font-medium text-gray-900 dark:text-white">
                        {review.overallRating ? <StarRating rating={review.overallRating} /> : 'Not rated yet'}
                      </div>
                    </div>
                  </div>
                  
                  {/* Feedback and Goals */}
                  <div>
                    <div className="mb-4">
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Strengths</h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {review.strengths || 'No strengths recorded yet'}
                      </p>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Areas for Improvement</h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {review.areasOfImprovement || 'No areas for improvement recorded yet'}
                      </p>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Goals</h3>
                      {review.goals && review.goals.length > 0 ? (
                        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                          {review.goals.map((goal, index) => (
                            <li key={index}>{goal}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-gray-700 dark:text-gray-300">No goals set yet</p>
                      )}
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Comments</h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {review.comments || 'No comments recorded yet'}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-6 flex justify-end space-x-3">
                  {review.status !== 'Completed' && (
                    <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm">
                      {review.status === 'Pending' ? 'Start Review' : 'Continue Review'}
                    </button>
                  )}
                  <button className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-750">
                    <Edit size={16} className="inline mr-1" />
                    Edit
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Empty State */}
      {filteredReviews.length === 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 text-center">
          <BarChart3 className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No reviews found</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Try adjusting your search or filter criteria.
          </p>
          <div className="mt-6">
            <button
              onClick={handleNewReview}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <Plus className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Create New Review
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PerformanceReview;
