import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import "./styles/darkTheme.css";
import Dashboard from "./pages/Dashboard.jsx";
import Employees from "./pages/Employees.jsx";
import EmployeeOnboarding from "./pages/EmployeeOnboarding.jsx";
import EmployeeDocuments from "./pages/EmployeeDocuments.jsx";
import EmployeeProfile from "./pages/EmployeeProfile.jsx";
import Departments from "./pages/Departments.jsx";
import OrgChart from "./pages/OrgChart.jsx";
import FreelancerManagement from "./pages/FreelancerManagement.jsx";
import AttendanceTracking from "./pages/AttendanceTracking.jsx";
import Overtime from "./pages/Overtime.jsx";
import Timesheet from "./pages/Timesheet.jsx";
import PerformanceReview from "./pages/PerformanceReview.jsx";
import Trainers from "./pages/Trainers.jsx";
import Workflows from "./pages/Workflows.jsx";
import Integrations from "./pages/Integrations.jsx";
import LeaveManagement from "./pages/LeaveManagement.jsx";
import SalaryStructure from "./pages/SalaryStructure.jsx";
import PayrollProcessing from "./pages/PayrollProcessing.jsx";
import Payslips from "./pages/Payslips.jsx";
import TaxConfiguration from "./pages/TaxConfiguration.jsx";
import ExpenseReimbursement from "./pages/ExpenseReimbursement.jsx";
import JobPostings from "./pages/JobPostings.jsx";
import Candidates from "./pages/Candidates.jsx";
import AIResumeScreening from "./pages/AIResumeScreening.jsx";
import InterviewManagement from "./pages/InterviewManagement.jsx";
import GoalManagement from "./pages/GoalManagement.jsx";
import KPIDashboard from "./pages/KPIDashboard.jsx";
import TrainingPrograms from "./pages/TrainingPrograms.jsx";
import TrainingCourses from "./pages/TrainingCourses.jsx";
import Certifications from "./pages/Certifications.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import MyLeave from "./pages/MyLeave.jsx";
import MyPayslips from "./pages/MyPayslips.jsx";
import MyAttendance from "./pages/MyAttendance.jsx";
import EmployeeSurveys from "./pages/EmployeeSurveys.jsx";
import AuditLogs from "./pages/AuditLogs.jsx";
import DocumentExpiry from "./pages/DocumentExpiry.jsx";
import RolesPermissions from "./pages/RolesPermissions.jsx";
import ComplianceReports from "./pages/ComplianceReports.jsx";
import MultiCompanyManagement from "./pages/MultiCompanyManagement.jsx";
import MultiLanguageSupport from "./pages/MultiLanguageSupport.jsx";
import NotificationManagement from "./pages/NotificationManagement.jsx";
import APIIntegrations from "./pages/APIIntegrations.jsx";
import DrivenInsights from "./pages/DrivenInsights.jsx";
import Reports from "./pages/Reports.jsx";
import Settings from "./pages/Settings.jsx";
import { ThemeProvider } from './contexts/ThemeContext';

import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Changed default to false

  const togglesidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <ThemeProvider>
      <div
        className={`flex flex-col flex-1 transition-all duration-300 md:${
          sidebarOpen ? "ml-64" : "ml-0"
        } h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100`}
      >
        {/* Sidebar */}
        <div
          className={`fixed block inset-y-0 left-0 z-30 w-64 transform shadow-lg transition-transform duration-300 ease-in-out ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar togglesidebar={togglesidebar} />
        </div>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
            onClick={togglesidebar}
          />
        )}

        {/* Main content */}
        <div className="flex flex-col flex-1 transition-all duration-300 h-full">
          <Navbar togglesidebar={togglesidebar} />
          <main className="flex-1 overflow-y-auto p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/employee-onboarding" element={<EmployeeOnboarding />} />
              <Route path="/employee-documents" element={<EmployeeDocuments />} />
              <Route path="/employee-profile" element={<EmployeeProfile />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/org-chart" element={<OrgChart />} />
              <Route path="/freelancer-management" element={<FreelancerManagement />} />
              <Route path="/attendance-tracking" element={<AttendanceTracking />} />
              <Route path="/overtime" element={<Overtime />} />
              <Route path="/timesheet" element={<Timesheet />} />
              <Route path="/leave-management" element={<LeaveManagement />} />
              <Route path="/salary-structure" element={<SalaryStructure />} />
              <Route path="/payroll-processing" element={<PayrollProcessing />} />
              <Route path="/payslips" element={<Payslips />} />
              <Route path="/tax-configuration" element={<TaxConfiguration />} />
              <Route path="/expense-reimbursement" element={<ExpenseReimbursement />} />
              <Route path="/job-postings" element={<JobPostings />} />
              <Route path="/candidates" element={<Candidates />} />
              <Route path="/ai-resume-screening" element={<AIResumeScreening />} />
              <Route path="/interview-management" element={<InterviewManagement />} />
              <Route path="/performance-review" element={<PerformanceReview />} />
              <Route path="/goal-management" element={<GoalManagement />} />
              <Route path="/kpi-dashboard" element={<KPIDashboard />} />
              <Route path="/training-programs" element={<TrainingPrograms />} />
              <Route path="/training-courses" element={<TrainingCourses />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/trainers" element={<Trainers />} />
              <Route path="/profile" element={<MyProfile />} />
              <Route path="/leave" element={<MyLeave />} />
              <Route path="/my-payslips" element={<MyPayslips />} />
              <Route path="/attendance-self" element={<MyAttendance />} />
              <Route path="/surveys" element={<EmployeeSurveys />} />
              <Route path="/audit-logs" element={<AuditLogs />} />
              <Route path="/document-expiry" element={<DocumentExpiry />} />
              <Route path="/roles-permissions" element={<RolesPermissions />} />
              <Route path="/compliance-reports" element={<ComplianceReports />} />
              <Route path="/multi-company" element={<MultiCompanyManagement />} />
              <Route path="/multi-language" element={<MultiLanguageSupport />} />
              <Route path="/notification-management" element={<NotificationManagement />} />
              <Route path="/api-integrations" element={<APIIntegrations />} />
              <Route path="/driven-insights" element={<DrivenInsights />} />
              <Route path="/workflows" element={<Workflows />} />
              <Route path="/integrations" element={<Integrations />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
              {/* other routes here */}
            </Routes>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
export default App
