import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Mail, 
  Phone, 
  Star, 
  GraduationCap, 
  Award,
  Download,
  Edit,
  Trash2,
  MoreVertical,
  ExternalLink,
  Calendar,
  Users
} from 'lucide-react';

function Trainers() {
  // Sample trainers data
  const [trainers, setTrainers] = useState([
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      avatar: 'SJ',
      email: 'sarah.johnson@example.com',
      phone: '+1 (555) 123-4567',
      type: 'Internal',
      department: 'Engineering',
      position: 'Senior Software Architect',
      expertise: ['Software Development', 'Cloud Architecture', 'DevOps'],
      rating: 4.8,
      bio: 'Dr. Sarah Johnson has over 15 years of experience in software development and architecture. She specializes in cloud-native applications and DevOps practices.',
      certifications: [
        'AWS Certified Solutions Architect',
        'Google Cloud Professional Architect',
        'Certified Kubernetes Administrator'
      ],
      upcomingSessions: 2,
      completedSessions: 24
    },
    {
      id: 2,
      name: 'Michael Chen',
      avatar: 'MC',
      email: 'michael.chen@example.com',
      phone: '+1 (555) 987-6543',
      type: 'Internal',
      department: 'Product',
      position: 'Product Manager',
      expertise: ['Product Management', 'Agile Methodologies', 'User Research'],
      rating: 4.5,
      bio: 'Michael Chen is a seasoned product manager with expertise in agile methodologies and user-centered design. He has successfully launched multiple products.',
      certifications: [
        'Certified Scrum Product Owner',
        'Professional Product Manager',
        'Design Thinking Certification'
      ],
      upcomingSessions: 1,
      completedSessions: 18
    },
    {
      id: 3,
      name: 'Emily Davis',
      avatar: 'ED',
      email: 'emily.davis@example.com',
      phone: '+1 (555) 234-5678',
      type: 'External',
      organization: 'Leadership Institute',
      position: 'Leadership Coach',
      expertise: ['Leadership Development', 'Executive Coaching', 'Team Building'],
      rating: 4.9,
      bio: 'Emily Davis is an executive coach with a focus on leadership development and team dynamics. She has worked with Fortune 500 companies to develop their leadership teams.',
      certifications: [
        'Certified Executive Coach',
        'Leadership Development Certification',
        'Team Performance Coach'
      ],
      upcomingSessions: 3,
      completedSessions: 32
    },
    {
      id: 4,
      name: 'Robert Wilson',
      avatar: 'RW',
      email: 'robert.wilson@example.com',
      phone: '+1 (555) 345-6789',
      type: 'External',
      organization: 'Tech Training Solutions',
      position: 'Technical Trainer',
      expertise: ['Data Science', 'Machine Learning', 'Python Programming'],
      rating: 4.7,
      bio: 'Robert Wilson is a data science expert with extensive experience in machine learning and AI. He has trained teams at major tech companies on advanced data science techniques.',
      certifications: [
        'TensorFlow Certified Developer',
        'Microsoft Certified: Azure Data Scientist Associate',
        'Python Data Science Certification'
      ],
      upcomingSessions: 0,
      completedSessions: 15
    },
    {
      id: 5,
      name: 'Jennifer Lee',
      avatar: 'JL',
      email: 'jennifer.lee@example.com',
      phone: '+1 (555) 456-7890',
      type: 'Internal',
      department: 'Human Resources',
      position: 'HR Director',
      expertise: ['HR Policies', 'Compliance Training', 'Employee Relations'],
      rating: 4.6,
      bio: 'Jennifer Lee has over a decade of experience in human resources management. She specializes in compliance training and developing HR policies.',
      certifications: [
        'SHRM Senior Certified Professional',
        'Certified Compliance Training Specialist',
        'Workplace Mediator Certification'
      ],
      upcomingSessions: 1,
      completedSessions: 22
    }
  ]);

  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [expertiseFilter, setExpertiseFilter] = useState('All');
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  // Type options
  const typeOptions = ['All', 'Internal', 'External'];
  
  // Expertise options (derived from data)
  const expertiseOptions = ['All', ...new Set(trainers.flatMap(trainer => trainer.expertise))];

  // Filter trainers
  const filteredTrainers = trainers.filter(trainer => {
    // Search filter
    const searchMatch = 
      trainer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trainer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trainer.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trainer.expertise.some(exp => exp.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Type filter
    const typeMatch = typeFilter === 'All' || trainer.type === typeFilter;
    
    // Expertise filter
    const expertiseMatch = expertiseFilter === 'All' || trainer.expertise.includes(expertiseFilter);
    
    return searchMatch && typeMatch && expertiseMatch;
  });

  // Handle new trainer
  const handleAddTrainer = () => {
    console.log('Add new trainer');
  };

  // Handle trainer selection
  const handleTrainerSelect = (trainer) => {
    setSelectedTrainer(trainer);
  };

  // Handle trainer edit
  const handleEditTrainer = (trainerId) => {
    console.log('Edit trainer', trainerId);
  };

  // Handle trainer delete
  const handleDeleteTrainer = (trainerId) => {
    console.log('Delete trainer', trainerId);
  };

  // Render star rating
  const StarRating = ({ rating }) => {
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Trainers</h1>
        <div className="flex space-x-2">
          <button 
            onClick={() => console.log('Export data')}
            className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-gray-50 dark:hover:bg-gray-750"
          >
            <Download size={16} />
            <span>Export</span>
          </button>
          <button 
            onClick={handleAddTrainer}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center space-x-2"
          >
            <Plus size={16} />
            <span>Add Trainer</span>
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
              placeholder="Search trainers..."
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Type Filter */}
          <div className="w-full md:w-48">
            <select
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md py-2 px-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              {typeOptions.map(type => (
                <option key={type} value={type}>{type} Trainers</option>
              ))}
            </select>
          </div>
          
          {/* Expertise Filter */}
          <div className="w-full md:w-64">
            <select
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md py-2 px-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              value={expertiseFilter}
              onChange={(e) => setExpertiseFilter(e.target.value)}
            >
              {expertiseOptions.map(expertise => (
                <option key={expertise} value={expertise}>{expertise}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Trainers List */}
        <div className="w-full lg:w-2/5 space-y-4">
          {filteredTrainers.map(trainer => (
            <div 
              key={trainer.id} 
              className={`bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden cursor-pointer transition-all hover:shadow-md ${
                selectedTrainer && selectedTrainer.id === trainer.id ? 'ring-2 ring-purple-500' : ''
              }`}
              onClick={() => handleTrainerSelect(trainer)}
            >
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-800 dark:text-purple-300 font-medium text-lg">
                      {trainer.avatar}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">{trainer.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {trainer.type === 'Internal' 
                          ? `${trainer.position}, ${trainer.department}` 
                          : `${trainer.position}, ${trainer.organization}`}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300">
                    {trainer.type}
                  </span>
                </div>
                
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Mail className="h-4 w-4 mr-1" />
                    <span className="truncate">{trainer.email}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Phone className="h-4 w-4 mr-1" />
                    <span>{trainer.phone}</span>
                  </div>
                </div>
                
                <div className="mt-3">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Rating</div>
                    <StarRating rating={trainer.rating} />
                  </div>
                </div>
                
                <div className="mt-3 flex flex-wrap gap-1">
                  {trainer.expertise.map((exp, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
                
                <div className="mt-3 grid grid-cols-2 gap-2 text-center">
                  <div className="bg-gray-50 dark:bg-gray-750 rounded p-2">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{trainer.upcomingSessions}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Upcoming</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-750 rounded p-2">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{trainer.completedSessions}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Completed</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Empty State */}
          {filteredTrainers.length === 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 text-center">
              <GraduationCap className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No trainers found</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Try adjusting your search or filter criteria.
              </p>
              <div className="mt-6">
                <button
                  onClick={handleAddTrainer}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  <Plus className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                  Add New Trainer
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Trainer Details */}
        <div className="w-full lg:w-3/5">
          {selectedTrainer ? (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
              {/* Header */}
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-800 dark:text-purple-300 font-medium text-xl">
                      {selectedTrainer.avatar}
                    </div>
                    <div className="ml-4">
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white">{selectedTrainer.name}</h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {selectedTrainer.type === 'Internal' 
                          ? `${selectedTrainer.position}, ${selectedTrainer.department}` 
                          : `${selectedTrainer.position}, ${selectedTrainer.organization}`}
                      </p>
                      <div className="mt-1">
                        <StarRating rating={selectedTrainer.rating} />
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleEditTrainer(selectedTrainer.id)}
                      className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                      <Edit size={16} />
                    </button>
                    <button 
                      onClick={() => handleDeleteTrainer(selectedTrainer.id)}
                      className="p-2 text-gray-400 hover:text-red-600 dark:hover:text-red-400"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Contact Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-gray-400 mr-2" />
                        <a href={`mailto:${selectedTrainer.email}`} className="text-sm text-purple-600 dark:text-purple-400 hover:underline">
                          {selectedTrainer.email}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-gray-400 mr-2" />
                        <a href={`tel:${selectedTrainer.phone}`} className="text-sm text-gray-700 dark:text-gray-300">
                          {selectedTrainer.phone}
                        </a>
                      </div>
                      {selectedTrainer.type === 'External' && (
                        <div className="flex items-center">
                          <ExternalLink className="h-5 w-5 text-gray-400 mr-2" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {selectedTrainer.organization}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Training Stats */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Training Statistics</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 dark:bg-gray-750 rounded-lg p-4 text-center">
                        <Calendar className="h-6 w-6 text-purple-500 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">{selectedTrainer.upcomingSessions}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Upcoming Sessions</div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-750 rounded-lg p-4 text-center">
                        <Users className="h-6 w-6 text-purple-500 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">{selectedTrainer.completedSessions}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Completed Sessions</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bio */}
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Biography</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {selectedTrainer.bio}
                  </p>
                </div>
                
                {/* Expertise */}
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Areas of Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedTrainer.expertise.map((exp, index) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Certifications */}
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Certifications</h3>
                  <div className="space-y-3">
                    {selectedTrainer.certifications.map((cert, index) => (
                      <div key={index} className="flex items-start">
                        <Award className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-8 flex justify-end space-x-3">
                  <button className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-750">
                    View Schedule
                  </button>
                  <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm">
                    Assign to Training
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 text-center h-full flex flex-col justify-center">
              <GraduationCap className="mx-auto h-16 w-16 text-gray-300 dark:text-gray-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Select a Trainer</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                Select a trainer from the list to view their detailed profile, expertise, and training history.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Trainers;
