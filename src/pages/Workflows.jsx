import React, { useState } from 'react';
import {
  Plus,
  Search,
  Filter,
  Play,
  Pause,
  Edit,
  Trash2,
  ChevronDown,
  ChevronUp,
  Download,
  ArrowRight,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
  Settings,
  Users,
  FileText,
  Mail,
  Calendar,
  Bell
} from 'lucide-react';

function Workflows() {
  // Sample workflows data
  const [workflows, setWorkflows] = useState([
    {
      id: 1,
      name: 'Employee Onboarding',
      description: 'Automates the onboarding process for new employees',
      status: 'Active',
      category: 'HR',
      createdBy: 'Jane Smith',
      createdAt: '2023-03-15',
      lastModified: '2023-05-20',
      triggers: ['New employee added'],
      steps: [
        { id: 101, name: 'Send welcome email', type: 'Email', status: 'Automatic', assignee: 'System' },
        { id: 102, name: 'Create IT accounts', type: 'Task', status: 'Manual', assignee: 'IT Department' },
        { id: 103, name: 'Schedule orientation', type: 'Calendar', status: 'Automatic', assignee: 'HR Manager' },
        { id: 104, name: 'Assign training modules', type: 'Task', status: 'Automatic', assignee: 'System' },
        { id: 105, name: 'First week check-in', type: 'Email', status: 'Automatic', assignee: 'System' }
      ],
      stats: {
        completed: 42,
        inProgress: 3,
        failed: 1
      }
    },
    {
      id: 2,
      name: 'Leave Approval',
      description: 'Manages the leave request and approval process',
      status: 'Active',
      category: 'HR',
      createdBy: 'Michael Chen',
      createdAt: '2023-02-10',
      lastModified: '2023-04-05',
      triggers: ['Leave request submitted'],
      steps: [
        { id: 201, name: 'Notify manager', type: 'Notification', status: 'Automatic', assignee: 'System' },
        { id: 202, name: 'Manager approval', type: 'Approval', status: 'Manual', assignee: 'Manager' },
        { id: 203, name: 'Update leave balance', type: 'System', status: 'Automatic', assignee: 'System' },
        { id: 204, name: 'Notify employee', type: 'Email', status: 'Automatic', assignee: 'System' }
      ],
      stats: {
        completed: 156,
        inProgress: 12,
        failed: 3
      }
    },
    {
      id: 3,
      name: 'Performance Review Cycle',
      description: 'Manages the quarterly performance review process',
      status: 'Inactive',
      category: 'Performance',
      createdBy: 'David Wilson',
      createdAt: '2023-01-20',
      lastModified: '2023-05-15',
      triggers: ['Quarterly schedule', 'Manual trigger'],
      steps: [
        { id: 301, name: 'Initiate review cycle', type: 'System', status: 'Automatic', assignee: 'System' },
        { id: 302, name: 'Self-assessment', type: 'Form', status: 'Manual', assignee: 'Employee' },
        { id: 303, name: 'Manager assessment', type: 'Form', status: 'Manual', assignee: 'Manager' },
        { id: 304, name: 'Schedule review meeting', type: 'Calendar', status: 'Automatic', assignee: 'System' },
        { id: 305, name: 'Finalize review', type: 'Task', status: 'Manual', assignee: 'Manager' },
        { id: 306, name: 'Update HR records', type: 'System', status: 'Automatic', assignee: 'System' }
      ],
      stats: {
        completed: 98,
        inProgress: 0,
        failed: 5
      }
    },
    {
      id: 4,
      name: 'Expense Approval',
      description: 'Manages the expense submission and approval process',
      status: 'Active',
      category: 'Finance',
      createdBy: 'Emily Davis',
      createdAt: '2023-04-05',
      lastModified: '2023-05-10',
      triggers: ['Expense report submitted'],
      steps: [
        { id: 401, name: 'Validate expense report', type: 'System', status: 'Automatic', assignee: 'System' },
        { id: 402, name: 'Manager approval', type: 'Approval', status: 'Manual', assignee: 'Manager' },
        { id: 403, name: 'Finance review', type: 'Approval', status: 'Manual', assignee: 'Finance Department' },
        { id: 404, name: 'Process payment', type: 'System', status: 'Automatic', assignee: 'System' },
        { id: 405, name: 'Notify employee', type: 'Email', status: 'Automatic', assignee: 'System' }
      ],
      stats: {
        completed: 87,
        inProgress: 9,
        failed: 2
      }
    },
    {
      id: 5,
      name: 'Employee Offboarding',
      description: 'Automates the offboarding process for departing employees',
      status: 'Active',
      category: 'HR',
      createdBy: 'Jane Smith',
      createdAt: '2023-03-20',
      lastModified: '2023-05-18',
      triggers: ['Employee termination recorded'],
      steps: [
        { id: 501, name: 'Exit interview scheduling', type: 'Calendar', status: 'Automatic', assignee: 'HR Manager' },
        { id: 502, name: 'Revoke system access', type: 'Task', status: 'Automatic', assignee: 'IT Department' },
        { id: 503, name: 'Equipment return checklist', type: 'Form', status: 'Manual', assignee: 'Manager' },
        { id: 504, name: 'Final payroll processing', type: 'Task', status: 'Manual', assignee: 'Finance Department' },
        { id: 505, name: 'Send farewell email', type: 'Email', status: 'Automatic', assignee: 'System' }
      ],
      stats: {
        completed: 28,
        inProgress: 2,
        failed: 0
      }
    }
  ]);

  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [expandedWorkflow, setExpandedWorkflow] = useState(null);

  // Status options
  const statusOptions = ['All', 'Active', 'Inactive'];

  // Category options (derived from data)
  const categoryOptions = ['All', ...new Set(workflows.map(workflow => workflow.category))];

  // Filter workflows
  const filteredWorkflows = workflows.filter(workflow => {
    // Search filter
    const searchMatch =
      workflow.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      workflow.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      workflow.createdBy.toLowerCase().includes(searchQuery.toLowerCase());

    // Status filter
    const statusMatch = statusFilter === 'All' || workflow.status === statusFilter;

    // Category filter
    const categoryMatch = categoryFilter === 'All' || workflow.category === categoryFilter;

    return searchMatch && statusMatch && categoryMatch;
  });

  // Toggle workflow expansion
  const toggleWorkflowExpansion = (workflowId) => {
    setExpandedWorkflow(expandedWorkflow === workflowId ? null : workflowId);
  };

  // Handle new workflow
  const handleNewWorkflow = () => {
    console.log('Create new workflow');
  };

  // Handle workflow activation/deactivation
  const handleToggleStatus = (workflowId, currentStatus) => {
    const newStatus = currentStatus === 'Active' ? 'Inactive' : 'Active';
    console.log(`Change workflow ${workflowId} status to ${newStatus}`);

    // Update the workflow status in the state
    setWorkflows(workflows.map(workflow =>
      workflow.id === workflowId ? { ...workflow, status: newStatus } : workflow
    ));
  };

  // Status badge component
  const StatusBadge = ({ status }) => {
    let bgColor, textColor, icon;

    switch (status) {
      case 'Active':
        bgColor = 'bg-green-100 dark:bg-green-900';
        textColor = 'text-green-800 dark:text-green-300';
        icon = <CheckCircle className="h-4 w-4 mr-1" />;
        break;
      case 'Inactive':
        bgColor = 'bg-gray-100 dark:bg-gray-700';
        textColor = 'text-gray-800 dark:text-gray-300';
        icon = <Pause className="h-4 w-4 mr-1" />;
        break;
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

  // Step type icon component
  const StepTypeIcon = ({ type }) => {
    switch (type) {
      case 'Email':
        return <Mail className="h-4 w-4 text-blue-500" />;
      case 'Task':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'Calendar':
        return <Calendar className="h-4 w-4 text-purple-500" />;
      case 'Approval':
        return <CheckCircle className="h-4 w-4 text-orange-500" />;
      case 'Form':
        return <FileText className="h-4 w-4 text-indigo-500" />;
      case 'Notification':
        return <Bell className="h-4 w-4 text-yellow-500" />;
      case 'System':
      default:
        return <Settings className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Workflow Automation</h1>
        <div className="flex space-x-2">
          <button
            onClick={() => console.log('Export data')}
            className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-gray-50 dark:hover:bg-gray-750"
          >
            <Download size={16} />
            <span>Export</span>
          </button>
          <button
            onClick={handleNewWorkflow}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center space-x-2"
          >
            <Plus size={16} />
            <span>New Workflow</span>
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
              placeholder="Search workflows..."
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

          {/* Category Filter */}
          <div className="w-full md:w-48">
            <select
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md py-2 px-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              {categoryOptions.map(category => (
                <option key={category} value={category}>{category} Category</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Workflows List */}
      <div className="space-y-4">
        {filteredWorkflows.map(workflow => (
          <div key={workflow.id} className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
            {/* Workflow Header */}
            <div
              className="p-4 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-750"
              onClick={() => toggleWorkflowExpansion(workflow.id)}
            >
              <div className="flex items-center mb-3 md:mb-0">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-800 dark:text-purple-300">
                  <Settings className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <div className="text-lg font-medium text-gray-900 dark:text-white flex items-center">
                    {workflow.name}
                    <span className="ml-2">
                      <StatusBadge status={workflow.status} />
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {workflow.description}
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Category</div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">{workflow.category}</div>
                </div>

                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Created By</div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">{workflow.createdBy}</div>
                </div>

                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Last Modified</div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {new Date(workflow.lastModified).toLocaleDateString()}
                  </div>
                </div>

                <div className="flex items-center">
                  {expandedWorkflow === workflow.id ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </div>
            </div>

            {/* Expanded Workflow Details */}
            {expandedWorkflow === workflow.id && (
              <div className="border-t border-gray-200 dark:border-gray-700">
                {/* Workflow Stats */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 dark:bg-gray-750">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Completed</div>
                    <div className="text-xl font-bold text-green-600 dark:text-green-400">{workflow.stats.completed}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 dark:text-gray-400">In Progress</div>
                    <div className="text-xl font-bold text-blue-600 dark:text-blue-400">{workflow.stats.inProgress}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Failed</div>
                    <div className="text-xl font-bold text-red-600 dark:text-red-400">{workflow.stats.failed}</div>
                  </div>
                </div>

                {/* Workflow Triggers */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Triggers</h3>
                  <div className="flex flex-wrap gap-2">
                    {workflow.triggers.map((trigger, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300"
                      >
                        <Play className="h-3 w-3 mr-1" />
                        {trigger}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Workflow Steps */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Workflow Steps</h3>

                  <div className="space-y-3">
                    {workflow.steps.map((step, index) => (
                      <div key={step.id} className="flex items-start">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                          <StepTypeIcon type={step.type} />
                        </div>
                        <div className="ml-3 flex-grow">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="text-sm font-medium text-gray-900 dark:text-white">{step.name}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                {step.type} • {step.status} • Assigned to: {step.assignee}
                              </div>
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              Step {index + 1}
                            </div>
                          </div>
                        </div>
                        {index < workflow.steps.length - 1 && (
                          <div className="mx-3 h-6 flex items-center">
                            <ArrowRight className="h-4 w-4 text-gray-400" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-4 bg-gray-50 dark:bg-gray-750 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleStatus(workflow.id, workflow.status);
                    }}
                    className={`px-4 py-2 rounded-md text-sm flex items-center space-x-1 ${
                      workflow.status === 'Active'
                        ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                        : 'bg-green-600 hover:bg-green-700 text-white'
                    }`}
                  >
                    {workflow.status === 'Active' ? (
                      <>
                        <Pause className="h-4 w-4" />
                        <span>Deactivate</span>
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4" />
                        <span>Activate</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log('Edit workflow', workflow.id);
                    }}
                    className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-750 flex items-center space-x-1"
                  >
                    <Edit className="h-4 w-4" />
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log('Run workflow', workflow.id);
                    }}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm flex items-center space-x-1"
                  >
                    <Play className="h-4 w-4" />
                    <span>Run Now</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredWorkflows.length === 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 text-center">
          <Settings className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No workflows found</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Try adjusting your search or filter criteria.
          </p>
          <div className="mt-6">
            <button
              onClick={handleNewWorkflow}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <Plus className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Create New Workflow
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Workflows;
