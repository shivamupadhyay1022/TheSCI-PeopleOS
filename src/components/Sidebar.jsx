import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Home,
  Users,
  Clock,
  CalendarClock,
  CircleDollarSign,
  UserPlus,
  BarChart3,
  GraduationCap,
  UserCog,
  Settings as SettingsIcon,
  ChevronRight,
  FileText,
  XCircle,
  ClipboardCheck,
} from "lucide-react";

const Sidebar = ({ togglesidebar }) => {
  // We don't need t from useTranslation() anymore as we're using hardcoded English labels
  const {} = useTranslation();
  const [openMenus, setOpenMenus] = useState({});

  // Toggle dropdown menu
  const toggleMenu = (menuId) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };

  // Menu items structure
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <Home className="h-5 w-5" />,
      path: "/",
      hasChildren: false,
    },
    {
      id: "employees",
      label: "Employees",
      icon: <Users className="h-5 w-5" />,
      hasChildren: true,
      children: [
        { id: "all-employees", label: "All Employees", path: "/employees" },
        {
          id: "employee-onboarding",
          label: "Employee Onboarding",
          path: "/employee-onboarding",
        },
        {
          id: "employee-documents",
          label: "Employee Documents",
          path: "/employee-documents",
        },
        { id: "org-chart", label: "Organization Chart", path: "/org-chart" },
        {
          id: "freelancer-management",
          label: "Freelancer & Contractor",
          path: "/freelancer-management",
        },
        {
          id: "employee-profile",
          label: "Employee Profile",
          path: "/employee-profile",
        },
        { id: "departments", label: "Departments", path: "/departments" },
      ],
    },
    {
      id: "attendance",
      label: "Attendance",
      icon: <Clock className="h-5 w-5" />,
      hasChildren: true,
      children: [
        {
          id: "attendance-tracking",
          label: "Attendance Tracking",
          path: "/attendance-tracking",
        },
        {
          id: "attendance-list",
          label: "Attendance List",
          path: "/attendance-list",
        },
        { id: "timesheet", label: "Timesheet", path: "/timesheet" },
        { id: "overtime", label: "Overtime", path: "/overtime" },
      ],
    },
    {
      id: "leave-management",
      label: "Leave Management",
      icon: <CalendarClock className="h-5 w-5" />,
      path: "/leave-management",
      hasChildren: false,
    },
    {
      id: "payroll",
      label: "Payroll",
      icon: <CircleDollarSign className="h-5 w-5" />,
      hasChildren: true,
      children: [
        {
          id: "payroll-processing",
          label: "Payroll Processing",
          path: "/payroll-processing",
        },
        {
          id: "salary-structure",
          label: "Salary Structure",
          path: "/salary-structure",
        },
        { id: "payslips", label: "Payslips", path: "/payslips" },
        {
          id: "tax-configuration",
          label: "Tax Configuration",
          path: "/tax-configuration",
        },
        {
          id: "expense-reimbursement",
          label: "Expense Reimbursement",
          path: "/expense-reimbursement",
        },
      ],
    },
    {
      id: "recruitment",
      label: "Recruitment",
      icon: <UserPlus className="h-5 w-5" />,
      hasChildren: true,
      children: [
        { id: "job-postings", label: "Job Postings", path: "/job-postings" },
        { id: "candidates", label: "Candidates", path: "/candidates" },
        {
          id: "ai-resume-screening",
          label: "AI Resume Screening",
          path: "/ai-resume-screening",
        },
        {
          id: "interview-management",
          label: "Interview Management",
          path: "/interview-management",
        },
      ],
    },
    {
      id: "performance",
      label: "Performance",
      icon: <BarChart3 className="h-5 w-5" />,
      hasChildren: true,
      children: [
        { id: "kpi-dashboard", label: "KPI Dashboard", path: "/kpi-dashboard" },
        {
          id: "performance-review",
          label: "Performance Review",
          path: "/performance-review",
        },
        {
          id: "goal-management",
          label: "Goal Management",
          path: "/goal-management",
        },
      ],
    },
    {
      id: "training",
      label: "Training",
      icon: <GraduationCap className="h-5 w-5" />,
      hasChildren: true,
      children: [
        {
          id: "training-programs",
          label: "Training Programs",
          path: "/training-programs",
        },
        {
          id: "training-courses",
          label: "Training Courses",
          path: "/training-courses",
        },
        {
          id: "certifications",
          label: "Certifications",
          path: "/certifications",
        },
        { id: "trainers", label: "Trainers", path: "/trainers" },
      ],
    },
    {
      id: "self-service",
      label: "Self Service",
      icon: <UserCog className="h-5 w-5" />,
      hasChildren: true,
      children: [
        { id: "profile", label: "Profile", path: "/profile" },
        { id: "leave", label: "Leave", path: "/leave" },
        { id: "my-payslips", label: "Payslips", path: "/my-payslips" },
        {
          id: "attendance-self",
          label: "Attendance",
          path: "/attendance-self",
        },
        { id: "surveys", label: "Surveys & Feedback", path: "/surveys" },
      ],
    },
    {
      id: "admin",
      label: "Admin",
      icon: <SettingsIcon className="h-5 w-5" />,
      hasChildren: true,
      children: [
        {
          id: "roles-permissions",
          label: "Roles & Permissions",
          path: "/roles-permissions",
        },
        { id: "audit-logs", label: "Audit Logs", path: "/audit-logs" },
        {
          id: "document-expiry",
          label: "Document Expiry",
          path: "/document-expiry",
        },
        {
          id: "compliance-reports",
          label: "Compliance Reports",
          path: "/compliance-reports",
        },
      ],
    },
    {
      id: "advanced",
      label: "Advanced",
      icon: <ClipboardCheck className="h-5 w-5" />,
      hasChildren: true,
      children: [
        {
          id: "multi-company",
          label: "Multi-Company Management",
          path: "/multi-company",
        },
        {
          id: "notification-management",
          label: "Notification Management",
          path: "/notification-management",
        },
        {
          id: "api-integrations",
          label: "API Integrations",
          path: "/api-integrations",
        },
        {
          id: "driven-insights",
          label: "Driven Insights",
          path: "/driven-insights",
        },
        { id: "workflows", label: "Workflows", path: "/workflows" },
        { id: "integrations", label: "Integrations", path: "/integrations" },
        {
          id: "multi-language",
          label: "Multi-Language Support",
          path: "/multi-language",
        },
      ],
    },
    {
      id: "reports",
      label: "Reports",
      icon: <FileText className="h-5 w-5" />,
      path: "/reports",
      hasChildren: false,
    },
    {
      id: "settings",
      label: "Settings",
      icon: <SettingsIcon className="h-5 w-5" />,
      path: "/settings",
      hasChildren: false,
    },
  ];

  return (
    <div className="flex h-full w-64 flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <div className="flex h-[61px] justify-between items-center px-4 py-3">
        <h1 className="text-xl flex gap-2 font-semibold text-purple-600 dark:text-purple-400 md:text-2xl">
          <img className="h-8" src="/sciicon.png" />
          SCI-PeopleOS
        </h1>
        <button
          onClick={togglesidebar}
          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
        >
          <XCircle className="h-5 w-5" />
        </button>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 overflow-y-auto py-2">
        {menuItems.map((item) => (
          <div key={item.id} className="mb-1">
            {item.hasChildren ? (
              <div>
                <button
                  onClick={() => toggleMenu(item.id)}
                  className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${
                      openMenus[item.id] ? "rotate-90" : ""
                    }`}
                  />
                </button>
                {openMenus[item.id] && (
                  <div className="ml-10 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.id}
                        to={child.path}
                        className={({ isActive }) =>
                          `block px-4 py-2 text-sm ${
                            isActive
                              ? "text-purple-600 dark:text-purple-400"
                              : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                          }`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 text-sm ${
                    isActive
                      ? "text-purple-600 dark:text-purple-400 font-medium"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            )}
          </div>
        ))}
      </nav>

      {/* Clock In/Out Button */}
      <div className="p-4">
        <NavLink to="/attendance-tracking">
          <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Clock In/Out</span>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
