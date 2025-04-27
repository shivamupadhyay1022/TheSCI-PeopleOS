import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Calendar,
  Camera,
  Edit,
  User
} from 'lucide-react';

function MyProfile() {
  // Sample user data
  const [userData, setUserData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    jobTitle: 'Software Developer',
    email: 'john.doe@company.com',
    phone: '555-123-4567',
    hireDate: '2022-01-15',
    dateOfBirth: '1990-05-15',
    maritalStatus: 'Single',
    gender: 'Male',
    nationality: 'United States',
    address: '123 Main St, Apt 4B, New York, NY 10001',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States',
    emergencyContact: {
      name: 'Jane Doe',
      relationship: 'Spouse',
      phone: '555-765-4321',
      email: 'jane.doe@example.com'
    }
  });
  
  // Function to handle change profile picture
  const handleChangeProfilePicture = () => {
    alert('Change profile picture');
  };
  
  // Function to handle edit personal information
  const handleEditPersonalInfo = () => {
    alert('Edit personal information');
  };
  
  // Function to handle edit contact information
  const handleEditContactInfo = () => {
    alert('Edit contact information');
  };
  
  // Function to handle edit emergency contact
  const handleEditEmergencyContact = () => {
    alert('Edit emergency contact');
  };
  
  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
  };
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">My Profile</h1>
      </div>

      {/* Profile Overview */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <div className="p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Profile Picture */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <button 
              onClick={handleChangeProfilePicture}
              className="absolute bottom-0 right-0 p-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-full"
            >
              <Camera className="h-4 w-4" />
            </button>
          </div>
          
          {/* Basic Info */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{userData.firstName} {userData.lastName}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{userData.jobTitle}</p>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-center md:justify-start text-sm text-gray-500 dark:text-gray-400">
                <Mail className="h-4 w-4 mr-2" />
                <span>{userData.email}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start text-sm text-gray-500 dark:text-gray-400">
                <Phone className="h-4 w-4 mr-2" />
                <span>{userData.phone}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Hired on {formatDate(userData.hireDate)}</span>
              </div>
            </div>
          </div>
          
          {/* Change Profile Picture Button (Mobile) */}
          <div className="md:hidden mt-2">
            <button 
              onClick={handleChangeProfilePicture}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-300"
            >
              <Camera className="h-4 w-4" />
              <span>Change Profile Picture</span>
            </button>
          </div>
          
          {/* Change Profile Picture Button (Desktop) */}
          <div className="hidden md:block ml-auto">
            <button 
              onClick={handleChangeProfilePicture}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-300"
            >
              <Camera className="h-4 w-4" />
              <span>Change Profile Picture</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Personal Information Section */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Personal Information</h2>
          </div>
          <button 
            onClick={handleEditPersonalInfo}
            className="p-1.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300"
            title="Edit"
          >
            <Edit className="h-4 w-4" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">First Name</label>
              <div className="mt-1 text-sm text-gray-900 dark:text-white">{userData.firstName}</div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Last Name</label>
              <div className="mt-1 text-sm text-gray-900 dark:text-white">{userData.lastName}</div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Date of Birth</label>
              <div className="mt-1 text-sm text-gray-900 dark:text-white">{formatDate(userData.dateOfBirth)}</div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Gender</label>
              <div className="mt-1 text-sm text-gray-900 dark:text-white">{userData.gender}</div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Marital Status</label>
              <div className="mt-1 text-sm text-gray-900 dark:text-white">{userData.maritalStatus}</div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Nationality</label>
              <div className="mt-1 text-sm text-gray-900 dark:text-white">{userData.nationality}</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Information Section */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Contact Information</h2>
          </div>
          <button 
            onClick={handleEditContactInfo}
            className="p-1.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300"
            title="Edit"
          >
            <Edit className="h-4 w-4" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Email Address</label>
              <div className="mt-1 text-sm text-gray-900 dark:text-white">{userData.email}</div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Phone Number</label>
              <div className="mt-1 text-sm text-gray-900 dark:text-white">{userData.phone}</div>
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Address</label>
              <div className="mt-1 text-sm text-gray-900 dark:text-white">{userData.address}</div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">City</label>
              <div className="mt-1 text-sm text-gray-900 dark:text-white">{userData.city}</div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">State</label>
              <div className="mt-1 text-sm text-gray-900 dark:text-white">{userData.state}</div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">ZIP Code</label>
              <div className="mt-1 text-sm text-gray-900 dark:text-white">{userData.zipCode}</div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Country</label>
              <div className="mt-1 text-sm text-gray-900 dark:text-white">{userData.country}</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Emergency Contact Section */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Emergency Contact</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Who to contact in case of emergency
            </p>
          </div>
          <button 
            onClick={handleEditEmergencyContact}
            className="p-1.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300"
            title="Edit"
          >
            <Edit className="h-4 w-4" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Contact Name</label>
              <div className="mt-1 text-sm text-gray-900 dark:text-white">{userData.emergencyContact.name}</div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Relationship</label>
              <div className="mt-1 text-sm text-gray-900 dark:text-white">{userData.emergencyContact.relationship}</div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Phone Number</label>
              <div className="mt-1 text-sm text-gray-900 dark:text-white">{userData.emergencyContact.phone}</div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">Email Address</label>
              <div className="mt-1 text-sm text-gray-900 dark:text-white">{userData.emergencyContact.email}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
