import React, { useState } from 'react';
import { 
  Search, 
  Plus,
  ChevronDown,
  BarChart2
} from 'lucide-react';

function TrainingCourses() {
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');
  
  // State for selected category filter
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  
  // State for selected format filter
  const [selectedFormat, setSelectedFormat] = useState('All Formats');
  
  // Sample courses data
  const courses = [
    {
      id: 1,
      title: 'Effective Communication',
      category: 'Soft Skills',
      format: 'Online',
      duration: '8 hours',
      enrollment: {
        current: 45,
        total: 50
      },
      completionRate: 78
    },
    {
      id: 2,
      title: 'Advanced Excel',
      category: 'Technical',
      format: 'Hybrid',
      duration: '6 hours',
      enrollment: {
        current: 32,
        total: 40
      },
      completionRate: 65
    },
    {
      id: 3,
      title: 'Project Management Essentials',
      category: 'Management',
      format: 'In-person',
      duration: '16 hours',
      enrollment: {
        current: 28,
        total: 30
      },
      completionRate: 92
    },
    {
      id: 4,
      title: 'Introduction to Python',
      category: 'Technical',
      format: 'Online',
      duration: '12 hours',
      enrollment: {
        current: 60,
        total: 80
      },
      completionRate: 56
    },
    {
      id: 5,
      title: 'Time Management',
      category: 'Soft Skills',
      format: 'Online',
      duration: '4 hours',
      enrollment: {
        current: 75,
        total: 80
      },
      completionRate: 88
    }
  ];
  
  // Popular courses data (sorted by enrollment)
  const popularCourses = [
    {
      id: 5,
      title: 'Time Management',
      category: 'Soft Skills',
      enrollmentCount: 75
    },
    {
      id: 4,
      title: 'Introduction to Python',
      category: 'Technical',
      enrollmentCount: 60
    },
    {
      id: 1,
      title: 'Effective Communication',
      category: 'Soft Skills',
      enrollmentCount: 45
    }
  ];
  
  // Course categories data
  const courseCategories = [
    {
      name: 'Technical',
      count: 10,
      percentage: 42
    },
    {
      name: 'Soft Skills',
      count: 8,
      percentage: 33
    },
    {
      name: 'Management',
      count: 4,
      percentage: 17
    },
    {
      name: 'Compliance',
      count: 2,
      percentage: 8
    }
  ];
  
  // Calculate statistics
  const totalCourses = courses.length;
  const enrolledLearners = courses.reduce((total, course) => total + course.enrollment.current, 0);
  const avgCompletion = Math.round(
    courses.reduce((total, course) => total + course.completionRate, 0) / courses.length
  );
  const onlineCourses = courses.filter(course => course.format === 'Online').length;
  
  // Function to handle search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  
  // Function to handle category filter change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  
  // Function to handle format filter change
  const handleFormatChange = (e) => {
    setSelectedFormat(e.target.value);
  };
  
  // Function to handle add new course
  const handleAddNewCourse = () => {
    alert('Add new course');
  };
  
  // Function to handle view details
  const handleViewDetails = (id) => {
    alert(`View details for course ID: ${id}`);
  };
  
  // Function to handle edit course
  const handleEditCourse = (id) => {
    alert(`Edit course ID: ${id}`);
  };
  
  // Filter courses based on search query, category, and format
  const filteredCourses = courses.filter(course => {
    const matchesSearch = searchQuery === '' || 
      course.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All Categories' || course.category === selectedCategory;
    
    const matchesFormat = selectedFormat === 'All Formats' || course.format === selectedFormat;
    
    return matchesSearch && matchesCategory && matchesFormat;
  });
  
  // Function to get completion rate color
  const getCompletionRateColor = (rate) => {
    if (rate >= 80) return 'bg-green-500';
    if (rate >= 60) return 'bg-yellow-500';
    return 'bg-orange-500';
  };
  
  // Function to get format badge
  const getFormatBadge = (format) => {
    switch (format) {
      case 'Online':
        return (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            {format}
          </span>
        );
      case 'Hybrid':
        return (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            {format}
          </span>
        );
      case 'In-person':
        return (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            {format}
          </span>
        );
      default:
        return null;
    }
  };
  
  // Available categories
  const categories = ['All Categories', 'Technical', 'Soft Skills', 'Management', 'Compliance'];
  
  // Available formats
  const formats = ['All Formats', 'Online', 'Hybrid', 'In-person'];
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Training Courses</h1>
        <button 
          onClick={handleAddNewCourse}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm"
        >
          <Plus className="h-4 w-4" />
          <span>Add New Course</span>
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Courses */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border-l-4 border-blue-500">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Courses</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{totalCourses}</p>
        </div>
        
        {/* Enrolled Learners */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border-l-4 border-green-500">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Enrolled Learners</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{enrolledLearners}</p>
        </div>
        
        {/* Avg. Completion */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border-l-4 border-yellow-500">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Avg. Completion</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{avgCompletion}%</p>
        </div>
        
        {/* Online Courses */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border-l-4 border-orange-500">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Online Courses</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{onlineCourses}</p>
        </div>
      </div>
      
      {/* Course Catalog Section */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Course Catalog</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Browse and search all available training courses
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={handleSearch}
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="appearance-none pl-4 pr-10 py-2 border border-gray-300 dark:border-gray-700 rounded-md w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </div>
            </div>
            
            <div className="relative">
              <select
                value={selectedFormat}
                onChange={handleFormatChange}
                className="appearance-none pl-4 pr-10 py-2 border border-gray-300 dark:border-gray-700 rounded-md w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              >
                {formats.map((format, index) => (
                  <option key={index} value={format}>{format}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Courses Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Course Title
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Format
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Duration
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Enrollment
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Completion Rate
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
              {filteredCourses.map((course) => (
                <tr key={course.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{course.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-400">{course.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getFormatBadge(course.format)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-400">{course.duration}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {course.enrollment.current} users
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mr-2 max-w-[120px]">
                        <div 
                          className={`h-2.5 rounded-full ${getCompletionRateColor(course.completionRate)}`}
                          style={{ width: `${course.completionRate}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {course.completionRate}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleViewDetails(course.id)}
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                        title="Details"
                      >
                        <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md">
                          Details
                        </span>
                      </button>
                      <button 
                        onClick={() => handleEditCourse(course.id)}
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                        title="Edit"
                      >
                        <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md">
                          Edit
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Popular Courses and Categories Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Popular Courses */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Popular Courses</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Most enrolled courses
            </p>
          </div>
          
          <div className="p-6 space-y-6">
            {popularCourses.map((course) => (
              <div key={course.id} className="flex items-center justify-between">
                <div>
                  <h3 className="text-md font-medium text-gray-900 dark:text-white">{course.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{course.category}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">{course.enrollmentCount}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">enrolled</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Course Categories */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Course Categories</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Distribution of courses by category
            </p>
          </div>
          
          <div className="p-6 space-y-4">
            {courseCategories.map((category, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">{category.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {category.count} courses ({category.percentage}%)
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${
                      index === 0 ? 'bg-blue-500' : 
                      index === 1 ? 'bg-green-500' : 
                      index === 2 ? 'bg-purple-500' : 
                      'bg-yellow-500'
                    }`}
                    style={{ width: `${category.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating Action Button */}
      <button 
        onClick={handleAddNewCourse}
        className="fixed bottom-6 right-6 p-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg"
      >
        <Plus className="h-6 w-6" />
      </button>
    </div>
  );
}

export default TrainingCourses;
