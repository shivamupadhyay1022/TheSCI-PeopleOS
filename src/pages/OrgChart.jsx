import React, { useState, useRef } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Search,
  Download,
  Printer,
  ZoomIn,
  ZoomOut,
  Users,
  Mail,
  Phone,
  Filter,
  LayoutGrid,
  AlignJustify,
  Image,
  FileText,
  Move
} from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function OrgChart() {
  // Refs
  const chartRef = useRef(null);
  const printFrameRef = useRef(null);

  // State variables
  const [zoomLevel, setZoomLevel] = useState(100);
  const [viewMode, setViewMode] = useState('vertical'); // 'vertical' or 'horizontal'
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [isDragging, setIsDragging] = useState(false);
  const [draggedNode, setDraggedNode] = useState(null);
  const [dropTarget, setDropTarget] = useState(null);
  const [expandedNodes, setExpandedNodes] = useState({
    'ceo': true,
    'cto': true,
    'cfo': true,
    'coo': true,
    'hr-director': true
  });

  // Available departments for filtering
  const departments = [
    'All',
    'Executive',
    'Technology',
    'Development',
    'Quality Assurance',
    'Finance',
    'Operations',
    'Human Resources'
  ];

  // Sample organization data
  const orgData = {
    id: 'ceo',
    name: 'John Smith',
    title: 'Chief Executive Officer',
    department: 'Executive',
    email: 'john.smith@company.com',
    phone: '+1 (555) 123-4567',
    imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    children: [
      {
        id: 'cto',
        name: 'Emily Davis',
        title: 'Chief Technology Officer',
        department: 'Technology',
        email: 'emily.davis@company.com',
        phone: '+1 (555) 234-5678',
        imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
        children: [
          {
            id: 'dev-director',
            name: 'Michael Chen',
            title: 'Development Director',
            department: 'Development',
            email: 'michael.chen@company.com',
            phone: '+1 (555) 345-6789',
            imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
            children: [
              {
                id: 'frontend-lead',
                name: 'Sarah Johnson',
                title: 'Frontend Lead',
                department: 'Development',
                email: 'sarah.johnson@company.com',
                phone: '+1 (555) 456-7890',
                imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
                children: []
              },
              {
                id: 'backend-lead',
                name: 'David Wilson',
                title: 'Backend Lead',
                department: 'Development',
                email: 'david.wilson@company.com',
                phone: '+1 (555) 567-8901',
                imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
                children: []
              }
            ]
          },
          {
            id: 'qa-director',
            name: 'Jessica Brown',
            title: 'QA Director',
            department: 'Quality Assurance',
            email: 'jessica.brown@company.com',
            phone: '+1 (555) 678-9012',
            imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg',
            children: []
          }
        ]
      },
      {
        id: 'cfo',
        name: 'Robert Taylor',
        title: 'Chief Financial Officer',
        department: 'Finance',
        email: 'robert.taylor@company.com',
        phone: '+1 (555) 789-0123',
        imageUrl: 'https://randomuser.me/api/portraits/men/7.jpg',
        children: [
          {
            id: 'finance-director',
            name: 'Amanda Martinez',
            title: 'Finance Director',
            department: 'Finance',
            email: 'amanda.martinez@company.com',
            phone: '+1 (555) 890-1234',
            imageUrl: 'https://randomuser.me/api/portraits/women/8.jpg',
            children: []
          },
          {
            id: 'accounting-manager',
            name: 'Thomas Lee',
            title: 'Accounting Manager',
            department: 'Finance',
            email: 'thomas.lee@company.com',
            phone: '+1 (555) 901-2345',
            imageUrl: 'https://randomuser.me/api/portraits/men/9.jpg',
            children: []
          }
        ]
      },
      {
        id: 'coo',
        name: 'Lisa Anderson',
        title: 'Chief Operations Officer',
        department: 'Operations',
        email: 'lisa.anderson@company.com',
        phone: '+1 (555) 012-3456',
        imageUrl: 'https://randomuser.me/api/portraits/women/10.jpg',
        children: [
          {
            id: 'operations-director',
            name: 'James White',
            title: 'Operations Director',
            department: 'Operations',
            email: 'james.white@company.com',
            phone: '+1 (555) 123-4567',
            imageUrl: 'https://randomuser.me/api/portraits/men/11.jpg',
            children: []
          }
        ]
      },
      {
        id: 'hr-director',
        name: 'Patricia Harris',
        title: 'HR Director',
        department: 'Human Resources',
        email: 'patricia.harris@company.com',
        phone: '+1 (555) 234-5678',
        imageUrl: 'https://randomuser.me/api/portraits/women/12.jpg',
        children: [
          {
            id: 'recruiting-manager',
            name: 'Daniel Clark',
            title: 'Recruiting Manager',
            department: 'Human Resources',
            email: 'daniel.clark@company.com',
            phone: '+1 (555) 345-6789',
            imageUrl: 'https://randomuser.me/api/portraits/men/13.jpg',
            children: []
          },
          {
            id: 'training-manager',
            name: 'Michelle Lewis',
            title: 'Training Manager',
            department: 'Human Resources',
            email: 'michelle.lewis@company.com',
            phone: '+1 (555) 456-7890',
            imageUrl: 'https://randomuser.me/api/portraits/women/14.jpg',
            children: []
          }
        ]
      }
    ]
  };

  // Function to toggle node expansion
  const toggleNode = (nodeId) => {
    setExpandedNodes({
      ...expandedNodes,
      [nodeId]: !expandedNodes[nodeId]
    });
  };

  // Function to increase zoom
  const zoomIn = () => {
    if (zoomLevel < 150) {
      setZoomLevel(zoomLevel + 10);
    }
  };

  // Function to decrease zoom
  const zoomOut = () => {
    if (zoomLevel > 50) {
      setZoomLevel(zoomLevel - 10);
    }
  };

  // Function to export as PDF
  const exportToPDF = async () => {
    if (!chartRef.current) return;

    try {
      // Create a clone of the chart to modify for export
      const chartClone = chartRef.current.cloneNode(true);
      const tempContainer = document.createElement('div');
      tempContainer.appendChild(chartClone);
      document.body.appendChild(tempContainer);

      // Apply simplified styles to avoid color function issues
      const allElements = tempContainer.querySelectorAll('*');
      allElements.forEach(el => {
        // Remove any problematic color styles that might use oklch
        if (window.getComputedStyle(el).color.includes('oklch')) {
          el.style.color = '#000000';
        }
        if (window.getComputedStyle(el).backgroundColor.includes('oklch')) {
          el.style.backgroundColor = '#ffffff';
        }
        if (window.getComputedStyle(el).borderColor.includes('oklch')) {
          el.style.borderColor = '#cccccc';
        }
      });

      // Generate canvas from the modified clone
      const canvas = await html2canvas(chartClone, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      // Clean up the temporary elements
      document.body.removeChild(tempContainer);

      // Create and save PDF
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: viewMode === 'horizontal' ? 'landscape' : 'portrait',
        unit: 'mm'
      });

      const imgWidth = 210;
      const imgHeight = canvas.height * imgWidth / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('organization-chart.pdf');
    } catch (error) {
      console.error('Error exporting to PDF:', error);
      alert('Failed to export as PDF: ' + error.message);
    }
  };

  // Function to export as PNG
  const exportToPNG = async () => {
    if (!chartRef.current) return;

    try {
      // Create a clone of the chart to modify for export
      const chartClone = chartRef.current.cloneNode(true);
      const tempContainer = document.createElement('div');
      tempContainer.appendChild(chartClone);
      document.body.appendChild(tempContainer);

      // Apply simplified styles to avoid color function issues
      const allElements = tempContainer.querySelectorAll('*');
      allElements.forEach(el => {
        // Remove any problematic color styles that might use oklch
        if (window.getComputedStyle(el).color.includes('oklch')) {
          el.style.color = '#000000';
        }
        if (window.getComputedStyle(el).backgroundColor.includes('oklch')) {
          el.style.backgroundColor = '#ffffff';
        }
        if (window.getComputedStyle(el).borderColor.includes('oklch')) {
          el.style.borderColor = '#cccccc';
        }
      });

      // Generate canvas from the modified clone
      const canvas = await html2canvas(chartClone, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      // Clean up the temporary elements
      document.body.removeChild(tempContainer);

      // Download the PNG
      const link = document.createElement('a');
      link.download = 'organization-chart.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Error exporting to PNG:', error);
      alert('Failed to export as PNG: ' + error.message);
    }
  };

  // Function to print the org chart
  const printChart = async () => {
    if (!chartRef.current) return;

    try {
      // Create a clone of the chart to modify for printing
      const chartClone = chartRef.current.cloneNode(true);
      const tempContainer = document.createElement('div');
      tempContainer.appendChild(chartClone);
      document.body.appendChild(tempContainer);

      // Apply simplified styles to avoid color function issues
      const allElements = tempContainer.querySelectorAll('*');
      allElements.forEach(el => {
        // Remove any problematic color styles that might use oklch
        if (window.getComputedStyle(el).color.includes('oklch')) {
          el.style.color = '#000000';
        }
        if (window.getComputedStyle(el).backgroundColor.includes('oklch')) {
          el.style.backgroundColor = '#ffffff';
        }
        if (window.getComputedStyle(el).borderColor.includes('oklch')) {
          el.style.borderColor = '#cccccc';
        }
      });

      // Open print window
      const printWindow = window.open('', '_blank');
      if (!printWindow) {
        alert('Please allow pop-ups to print the organization chart.');
        document.body.removeChild(tempContainer);
        return;
      }

      // Setup print window
      printWindow.document.write('<html><head><title>Organization Chart</title>');
      printWindow.document.write('<style>body { margin: 0; padding: 20px; }</style>');
      printWindow.document.write('</head><body>');

      // Generate canvas from the modified clone
      const canvas = await html2canvas(chartClone, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      // Clean up the temporary elements
      document.body.removeChild(tempContainer);

      // Add image to print window
      printWindow.document.write(`<img src="${canvas.toDataURL('image/png')}" style="max-width: 100%;" />`);
      printWindow.document.write('</body></html>');

      printWindow.document.close();
      printWindow.focus();

      // Print after images are loaded
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 500);
    } catch (error) {
      console.error('Error printing chart:', error);
      alert('Failed to print: ' + error.message);
    }
  };

  // Function to handle drag start
  const handleDragStart = (e, node) => {
    setIsDragging(true);
    setDraggedNode(node);
  };

  // Function to handle drag over
  const handleDragOver = (e, node) => {
    e.preventDefault();
    if (draggedNode && draggedNode.id !== node.id) {
      setDropTarget(node);
    }
  };

  // Function to handle drop
  const handleDrop = (e, targetNode) => {
    e.preventDefault();

    if (!draggedNode || draggedNode.id === targetNode.id) {
      setIsDragging(false);
      setDraggedNode(null);
      setDropTarget(null);
      return;
    }

    // In a real application, you would update the org structure here
    // For this demo, we'll just show an alert
    alert(`Moved ${draggedNode.name} under ${targetNode.name}`);

    setIsDragging(false);
    setDraggedNode(null);
    setDropTarget(null);
  };

  // Function to handle drag end
  const handleDragEnd = () => {
    setIsDragging(false);
    setDraggedNode(null);
    setDropTarget(null);
  };

  // Filter nodes based on department
  const filterNodesByDepartment = (node) => {
    if (filterDepartment === 'all') return true;

    const departmentMatches = node.department.toLowerCase() === filterDepartment.toLowerCase();

    // If this node matches, include it
    if (departmentMatches) return true;

    // If any children match, include this node
    if (node.children && node.children.length > 0) {
      return node.children.some(child => filterNodesByDepartment(child));
    }

    return false;
  };

  // Recursive function to render org chart nodes
  const renderOrgNode = (node, level = 0) => {
    // Skip nodes that don't match the department filter
    if (filterDepartment !== 'all' && !filterNodesByDepartment(node)) {
      return null;
    }

    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expandedNodes[node.id];
    const isDropTarget = dropTarget && dropTarget.id === node.id;

    // Determine node layout based on view mode
    const nodeLayout = viewMode === 'horizontal'
      ? { display: 'inline-block', verticalAlign: 'top', marginRight: '20px', marginBottom: '20px' }
      : { marginLeft: `${level * 20}px`, marginBottom: '10px' };

    // Determine children container layout based on view mode
    const childrenLayout = viewMode === 'horizontal'
      ? { display: 'flex', flexWrap: 'wrap', marginTop: '20px', paddingLeft: '40px' }
      : { paddingLeft: '40px', borderLeft: '2px solid #e5e7eb' };

    return (
      <div
        key={node.id}
        className="org-node"
        style={nodeLayout}
        draggable={true}
        onDragStart={(e) => handleDragStart(e, node)}
        onDragOver={(e) => handleDragOver(e, node)}
        onDrop={(e) => handleDrop(e, node)}
        onDragEnd={handleDragEnd}
      >
        <div
          className={`flex items-start p-4 mb-2 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow ${
            isDropTarget ? 'ring-2 ring-purple-500' : ''
          }`}
        >
          <div className="flex-shrink-0 mr-4 flex items-center">
            {hasChildren && (
              <button
                onClick={() => toggleNode(node.id)}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 mr-2"
              >
                {isExpanded ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
              </button>
            )}
            <Move className="h-4 w-4 text-gray-400 cursor-move" />
          </div>

          <div className="flex-shrink-0 mr-4">
            <img
              src={node.imageUrl}
              alt={node.name}
              className="h-12 w-12 rounded-full object-cover border-2 border-purple-500"
            />
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">{node.name}</h3>
            <p className="text-sm font-medium text-purple-600 dark:text-purple-400">{node.title}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{node.department}</p>

            <div className="mt-2 flex flex-col space-y-1">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Mail className="h-4 w-4 mr-1" />
                <span>{node.email}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Phone className="h-4 w-4 mr-1" />
                <span>{node.phone}</span>
              </div>
            </div>
          </div>
        </div>

        {hasChildren && isExpanded && (
          <div style={childrenLayout}>
            {node.children
              .filter(childNode => filterDepartment === 'all' || filterNodesByDepartment(childNode))
              .map(childNode => renderOrgNode(childNode, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Organization Chart</h1>
        <div className="flex space-x-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search employees..."
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        {/* View Mode */}
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">View:</span>
          <div className="flex border border-gray-300 dark:border-gray-700 rounded-md overflow-hidden">
            <button
              onClick={() => setViewMode('vertical')}
              className={`p-2 flex items-center ${
                viewMode === 'vertical'
                  ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
                  : 'bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <AlignJustify className="h-5 w-5" />
              <span className="ml-2 text-sm">Vertical</span>
            </button>
            <button
              onClick={() => setViewMode('horizontal')}
              className={`p-2 flex items-center ${
                viewMode === 'horizontal'
                  ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
                  : 'bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <LayoutGrid className="h-5 w-5" />
              <span className="ml-2 text-sm">Horizontal</span>
            </button>
          </div>
        </div>

        {/* Department Filter */}
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filter:</span>
          <select
            value={filterDepartment}
            onChange={(e) => setFilterDepartment(e.target.value.toLowerCase())}
            className="border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-2 text-sm"
          >
            {departments.map((dept) => (
              <option key={dept} value={dept.toLowerCase()}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        {/* Zoom Controls */}
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Zoom:</span>
          <button
            onClick={zoomOut}
            className="p-1 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            disabled={zoomLevel <= 50}
          >
            <ZoomOut className="h-5 w-5" />
          </button>
          <span className="text-sm text-gray-500 dark:text-gray-400">{zoomLevel}%</span>
          <button
            onClick={zoomIn}
            className="p-1 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            disabled={zoomLevel >= 150}
          >
            <ZoomIn className="h-5 w-5" />
          </button>
        </div>

        {/* Export Options */}
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Export:</span>
          <button
            onClick={exportToPDF}
            className="p-2 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center"
            title="Export as PDF"
          >
            <FileText className="h-5 w-5" />
            <span className="ml-1 text-sm">PDF</span>
          </button>
          <button
            onClick={exportToPNG}
            className="p-2 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center"
            title="Export as PNG"
          >
            <Image className="h-5 w-5" />
            <span className="ml-1 text-sm">PNG</span>
          </button>
          <button
            onClick={printChart}
            className="p-2 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center"
            title="Print"
          >
            <Printer className="h-5 w-5" />
            <span className="ml-1 text-sm">Print</span>
          </button>
        </div>
      </div>

      {/* Drag & Drop Hint */}
      <div className="bg-blue-50 dark:bg-blue-900 text-blue-800 dark:text-blue-200 p-3 rounded-md flex items-start">
        <div className="flex-shrink-0 mt-0.5">
          <Move className="h-5 w-5" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium">Drag & Drop Enabled</p>
          <p className="text-sm mt-1">You can drag employees to reorganize the chart. Drag an employee card and drop it onto another manager to reassign.</p>
        </div>
      </div>

      {/* Organization Chart */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 overflow-x-auto">
        <div
          ref={chartRef}
          style={{
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'top left',
            transition: 'transform 0.2s',
            minWidth: viewMode === 'horizontal' ? '1200px' : 'auto'
          }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-lg flex items-center">
              <Users className="h-5 w-5 mr-2" />
              <span className="font-medium">Company Organization</span>
            </div>
          </div>
          {renderOrgNode(orgData)}
        </div>
      </div>

      {/* Hidden iframe for printing */}
      <iframe
        ref={printFrameRef}
        style={{ display: 'none' }}
        title="Print Frame"
      />
    </div>
  );
}

export default OrgChart;
