import React, { useState } from 'react';
import { 
  Search, 
  Filter,
  Calendar,
  ChevronDown,
  Plus,
  DollarSign,
  Clock,
  FileText,
  CreditCard,
  Calendar as CalendarIcon
} from 'lucide-react';

function ExpenseReimbursement() {
  // State for active tab
  const [activeTab, setActiveTab] = useState('myRequests');
  
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');
  
  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  
  // Sample expense data
  const expenses = [
    {
      id: 1,
      amount: 124.50,
      category: 'Travel',
      description: 'Client meeting in Seattle',
      date: '2023-04-10',
      receiptUploaded: true,
      status: 'Approved'
    },
    {
      id: 2,
      amount: 63.25,
      category: 'Meals',
      description: 'Team lunch with product team',
      date: '2023-04-05',
      receiptUploaded: true,
      status: 'Pending'
    },
    {
      id: 3,
      amount: 349.99,
      category: 'Equipment',
      description: 'Headphones for remote work',
      date: '2023-03-28',
      receiptUploaded: true,
      status: 'Under Review'
    },
    {
      id: 4,
      amount: 199.00,
      category: 'Training',
      description: 'Online course for React development',
      date: '2023-03-15',
      receiptUploaded: true,
      status: 'Reimbursed'
    }
  ];
  
  // Calculate summary totals
  const summary = {
    reimbursed: expenses.filter(exp => exp.status === 'Reimbursed').reduce((sum, exp) => sum + exp.amount, 0),
    pending: expenses.filter(exp => exp.status === 'Pending').reduce((sum, exp) => sum + exp.amount, 0),
    underReview: expenses.filter(exp => exp.status === 'Under Review').reduce((sum, exp) => sum + exp.amount, 0),
    ytdTotal: expenses.reduce((sum, exp) => sum + exp.amount, 0)
  };
  
  // Available categories
  const categories = ['All Categories', 'Travel', 'Meals', 'Equipment', 'Training', 'Office Supplies', 'Other'];
  
  // Function to handle view details
  const handleViewDetails = (id) => {
    alert(`View details for expense ID: ${id}`);
  };
  
  // Function to handle cancel request
  const handleCancelRequest = (id) => {
    alert(`Cancel request for expense ID: ${id}`);
  };
  
  // Function to handle new expense claim
  const handleNewExpenseClaim = () => {
    alert('Create new expense claim');
  };
  
  // Function to format currency
  const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`;
  };
  
  // Function to format date
  const formatDate = (dateString) => {
    return dateString;
  };
  
  // Filter expenses based on active tab
  const filteredExpenses = expenses.filter(expense => {
    if (activeTab === 'myRequests') {
      return true; // Show all for demo
    } else if (activeTab === 'pendingApproval') {
      return expense.status === 'Pending';
    } else if (activeTab === 'allExpenses') {
      return true;
    }
    return true;
  });
  
  // Further filter based on search query and category
  const searchFilteredExpenses = filteredExpenses.filter(expense => {
    const matchesSearch = searchQuery === '' || 
      expense.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All Categories' || expense.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Get status color class
  const getStatusColorClass = (status) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Under Review':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Reimbursed':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Expense Reimbursement</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Submit, track, and manage your expense claims
          </p>
        </div>
        <button 
          onClick={handleNewExpenseClaim}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm"
        >
          <Plus className="h-4 w-4" />
          <span>New Expense Claim</span>
        </button>
      </div>

      {/* Overview Section */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Overview</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Your expense reimbursement summary
          </p>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Reimbursed Card */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600 dark:text-green-400">Reimbursed</p>
                <p className="text-xl font-semibold text-green-600 dark:text-green-400 mt-1">{formatCurrency(summary.reimbursed)}</p>
              </div>
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
            
            {/* Pending Card */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-yellow-600 dark:text-yellow-400">Pending</p>
                <p className="text-xl font-semibold text-yellow-600 dark:text-yellow-400 mt-1">{formatCurrency(summary.pending)}</p>
              </div>
              <div className="bg-yellow-100 dark:bg-yellow-900 p-3 rounded-full">
                <Clock className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
            </div>
            
            {/* Under Review Card */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Under Review</p>
                <p className="text-xl font-semibold text-blue-600 dark:text-blue-400 mt-1">{formatCurrency(summary.underReview)}</p>
              </div>
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            
            {/* YTD Total Card */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600 dark:text-purple-400">YTD Total</p>
                <p className="text-xl font-semibold text-purple-600 dark:text-purple-400 mt-1">{formatCurrency(summary.ytdTotal)}</p>
              </div>
              <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                <CreditCard className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by description, category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        
        {/* Filter Button */}
        <button className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 flex items-center gap-2">
          <Filter className="h-4 w-4" />
          <span>Filter</span>
        </button>
        
        {/* Date Range Button */}
        <button className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>Date Range</span>
        </button>
        
        {/* Categories Dropdown */}
        <div className="relative">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="appearance-none pl-4 pr-10 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('myRequests')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'myRequests'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            My Requests
          </button>
          <button
            onClick={() => setActiveTab('pendingApproval')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'pendingApproval'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Pending My Approval
          </button>
          <button
            onClick={() => setActiveTab('allExpenses')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'allExpenses'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            All Expenses
          </button>
        </nav>
      </div>
      
      {/* Expense Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {searchFilteredExpenses.map((expense) => (
          <div key={expense.id} className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">{formatCurrency(expense.amount)}</span>
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{expense.category}</span>
                </div>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColorClass(expense.status)}`}>
                  {expense.status}
                </span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{expense.description}</p>
              <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>{formatDate(expense.date)}</span>
                </div>
                {expense.receiptUploaded && (
                  <span className="flex items-center">
                    <FileText className="h-4 w-4 mr-1" />
                    <span>Receipt Uploaded</span>
                  </span>
                )}
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex justify-between">
              <button
                onClick={() => handleViewDetails(expense.id)}
                className="text-sm text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 font-medium"
              >
                View Details
              </button>
              {expense.status === 'Pending' && (
                <button
                  onClick={() => handleCancelRequest(expense.id)}
                  className="text-sm text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 font-medium"
                >
                  Cancel Request
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseReimbursement;
