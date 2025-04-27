import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Briefcase, 
  GraduationCap, 
  Award, 
  FileText, 
  Clock, 
  DollarSign,
  Edit,
  Download
} from 'lucide-react';

function EmployeeProfile() {
  // Sample employee data
  const [employee, setEmployee] = useState({
    id: 1,
    name: 'John Doe',
    email: 'john.doe@peopleapp.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main Street, San Francisco, CA 94107',
    birthDate: '15 Jan 1985',
    joinDate: '10 Mar 2020',
    position: 'Senior Software Engineer',
    department: 'Engineering',
    manager: 'Jane Smith',
    employeeId: 'EMP-2020-001',
    status: 'Active',
    workLocation: 'San Francisco HQ',
    workSchedule: 'Mon-Fri, 9:00 AM - 5:00 PM',
    salary: '$120,000 / year',
    bankInfo: 'Chase Bank - ****4567',
    education: [
      {
        degree: 'Master of Science in Computer Science',
        institution: 'Stanford University',
        year: '2010'
      },
      {
        degree: 'Bachelor of Science in Computer Engineering',
        institution: 'MIT',
        year: '2008'
      }
    ],
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes'],
    certifications: [
      {
        name: 'AWS Certified Solutions Architect',
        issuer: 'Amazon Web Services',
        date: 'Jan 2022',
        expires: 'Jan 2025'
      },
      {
        name: 'Certified Scrum Master',
        issuer: 'Scrum Alliance',
        date: 'Mar 2021',
        expires: 'Mar 2023'
      }
    ],
    documents: [
      {
        name: 'Employment Contract',
        type: 'PDF',
        uploadDate: '10 Mar 2020'
      },
      {
        name: 'NDA Agreement',
        type: 'PDF',
        uploadDate: '10 Mar 2020'
      },
      {
        name: 'Performance Review 2022',
        type: 'PDF',
        uploadDate: '15 Dec 2022'
      }
    ],
    emergencyContacts: [
      {
        name: 'Mary Doe',
        relationship: 'Spouse',
        phone: '+1 (555) 987-6543',
        email: 'mary.doe@example.com'
      }
    ]
  });

  // Tabs state
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Employee Profile</h1>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center space-x-2">
          <Edit size={16} />
          <span>Edit Profile</span>
        </button>
      </div>

      {/* Profile Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="h-32 w-32 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-300 text-4xl font-bold">
              {employee.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
          
          {/* Basic Info */}
          <div className="flex-grow">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{employee.name}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">{employee.position}</p>
            <p className="text-md text-gray-500 dark:text-gray-400">{employee.department}</p>
            
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Mail size={16} />
                <span>{employee.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Phone size={16} />
                <span>{employee.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <MapPin size={16} />
                <span>{employee.workLocation}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Calendar size={16} />
                <span>Joined: {employee.joinDate}</span>
              </div>
            </div>
            
            <div className="mt-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                {employee.status}
              </span>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="border-t border-gray-200 dark:border-gray-700">
          <nav className="flex overflow-x-auto">
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === 'personal'
                  ? 'border-b-2 border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Personal Information
            </button>
            <button
              onClick={() => setActiveTab('employment')}
              className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === 'employment'
                  ? 'border-b-2 border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Employment Details
            </button>
            <button
              onClick={() => setActiveTab('qualifications')}
              className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === 'qualifications'
                  ? 'border-b-2 border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Qualifications
            </button>
            <button
              onClick={() => setActiveTab('documents')}
              className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
                activeTab === 'documents'
                  ? 'border-b-2 border-purple-500 text-purple-600 dark:text-purple-400'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Documents
            </button>
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        {/* Personal Information Tab */}
        {activeTab === 'personal' && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Personal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Contact Information</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Email Address</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{employee.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Phone Number</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{employee.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Address</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{employee.address}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Personal Details</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Birth Date</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{employee.birthDate}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Emergency Contacts</h4>
              
              {employee.emergencyContacts.map((contact, index) => (
                <div key={index} className="mt-3 p-4 border border-gray-200 dark:border-gray-700 rounded-md">
                  <div className="flex justify-between">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{contact.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{contact.relationship}</p>
                  </div>
                  <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{contact.email}</span>
                    </div>
                  </div>
                </div>
              ))}
              
              <button className="mt-3 text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
                + Add Emergency Contact
              </button>
            </div>
          </div>
        )}
        
        {/* Employment Details Tab */}
        {activeTab === 'employment' && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Employment Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Job Information</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Briefcase className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Position</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{employee.position}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Briefcase className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Department</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{employee.department}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Manager</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{employee.manager}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Employee ID</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{employee.employeeId}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Work Details</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Join Date</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{employee.joinDate}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Work Location</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{employee.workLocation}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Work Schedule</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{employee.workSchedule}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Compensation</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Salary</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{employee.salary}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Bank Information</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{employee.bankInfo}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Qualifications Tab */}
        {activeTab === 'qualifications' && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Qualifications</h3>
            
            <div>
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Education</h4>
              
              <div className="space-y-4">
                {employee.education.map((edu, index) => (
                  <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-md">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="h-5 w-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{edu.degree}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{edu.institution}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Graduated: {edu.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="mt-3 text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
                + Add Education
              </button>
            </div>
            
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Skills</h4>
              
              <div className="flex flex-wrap gap-2">
                {employee.skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
              
              <button className="mt-3 text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
                + Add Skill
              </button>
            </div>
            
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Certifications</h4>
              
              <div className="space-y-4">
                {employee.certifications.map((cert, index) => (
                  <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-md">
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{cert.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          Issued: {cert.date} • Expires: {cert.expires}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="mt-3 text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
                + Add Certification
              </button>
            </div>
          </div>
        )}
        
        {/* Documents Tab */}
        {activeTab === 'documents' && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Documents</h3>
            
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 rounded-md">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Document Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Upload Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                  {employee.documents.map((doc, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-gray-400" />
                          <span>{doc.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {doc.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {doc.uploadDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
                          <Download className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <button className="mt-3 text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
              + Upload Document
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmployeeProfile;
