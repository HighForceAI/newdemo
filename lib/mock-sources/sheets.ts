import { Source } from '../demo-data';

// 3 Google Sheets for Summit Strategy Consulting
export const mockSheets: Source[] = [
  {
    id: 'sheet_001',
    appType: 'sheets',
    title: 'ACME Project Budget Tracker',
    subtitle: 'Google Sheets',
    metadata: {
      lastModified: 'Nov 18, 2025',
      owner: 'Demo',
      sheetData: {
        headers: ['Phase', 'Line Item', 'Amount', 'Timeline', 'Status'],
        rows: [
          ['Phase 1: Assessment', 'Discovery Workshops', '$25,000', 'Month 1', 'Planned'],
          ['Phase 1: Assessment', 'Technical Assessment', '$30,000', 'Month 1-2', 'Planned'],
          ['Phase 1: Assessment', 'Architecture Design', '$15,000', 'Month 2', 'Planned'],
          ['Phase 1: Assessment', 'Project Planning', '$5,000', 'Month 2', 'Planned'],
          ['', 'Phase 1 Subtotal', '$75,000', '', ''],
          ['Phase 2: Cloud Migration', 'AWS Infrastructure', '$60,000', 'Month 3-4', 'Planned'],
          ['Phase 2: Cloud Migration', 'Application Migration', '$70,000', 'Month 3-5', 'Planned'],
          ['Phase 2: Cloud Migration', 'Security Setup', '$30,000', 'Month 4-5', 'Planned'],
          ['Phase 2: Cloud Migration', 'Testing & Validation', '$20,000', 'Month 5', 'Planned'],
          ['', 'Phase 2 Subtotal', '$180,000', '', ''],
          ['Phase 3: Modernization', 'System Replacement', '$60,000', 'Month 6-7', 'Planned'],
          ['Phase 3: Modernization', 'API Development', '$40,000', 'Month 7-8', 'Planned'],
          ['Phase 3: Modernization', 'Data Warehouse', '$30,000', 'Month 8-9', 'Planned'],
          ['Phase 3: Modernization', 'Analytics Platform', '$10,000', 'Month 9', 'Planned'],
          ['', 'Phase 3 Subtotal', '$140,000', '', ''],
          ['Phase 4: Optimization', 'Performance Tuning', '$20,000', 'Month 10', 'Planned'],
          ['Phase 4: Optimization', 'Training', '$15,000', 'Month 11', 'Planned'],
          ['Phase 4: Optimization', 'Documentation', '$10,000', 'Month 11-12', 'Planned'],
          ['Phase 4: Optimization', 'Support Setup', '$10,000', 'Month 12', 'Planned'],
          ['', 'Phase 4 Subtotal', '$55,000', '', ''],
          ['', 'PROJECT TOTAL', '$450,000', '12 Months', 'In Progress']
        ]
      }
    },
    content: ''
  },

  {
    id: 'sheet_002',
    appType: 'sheets',
    title: 'Q4 2025 Revenue Forecast',
    subtitle: 'Google Sheets',
    metadata: {
      lastModified: 'Nov 20, 2025',
      owner: 'Demo',
      sheetData: {
        headers: ['Deal', 'Amount', 'Probability', 'Weighted', 'Expected Close', 'Status'],
        rows: [
          ['ACME Digital Transform', '$450,000', '75%', '$337,500', 'Dec 31', 'Proposal Sent'],
          ['Vertex Cloud Migration', '$280,000', '90%', '$252,000', 'Dec 15', 'Delivering'],
          ['TechStart AI Platform', '$125,000', '60%', '$75,000', 'Dec 20', 'Proposal Sent'],
          ['BrightStart Advisory', '$45,000', '70%', '$31,500', 'Dec 10', 'Proposal Sent'],
          ['', '', '', '', '', ''],
          ['', 'Pipeline Total', '$900,000', '', '$696,000', ''],
          ['', '', '', '', '', ''],
          ['DataCorp Analytics', '$320,000', '100%', '$320,000', 'Closed', 'Delivered'],
          ['FinServe Modernization', '$185,000', '100%', '$185,000', 'Closed', 'Delivered'],
          ['', '', '', '', '', ''],
          ['', 'Closed Total', '$505,000', '', '$505,000', ''],
          ['', '', '', '', '', ''],
          ['', 'Q4 TOTAL', '$1,405,000', '', '$1,201,000', ''],
          ['', 'Q4 Target', '$1,100,000', '', '', ''],
          ['', 'vs Target', '', '', '+109%', '']
        ]
      }
    },
    content: ''
  },

  {
    id: 'sheet_003',
    appType: 'sheets',
    title: 'Team Utilization - November 2025',
    subtitle: 'Google Sheets',
    metadata: {
      lastModified: 'Nov 20, 2025',
      owner: 'Demo',
      sheetData: {
        headers: ['Consultant', 'Project', 'Hours This Week', 'Billable %', 'Status'],
        rows: [
          ['William Marquez', 'Vertex Cloud Migration', '38', '95%', 'Active'],
          ['William Marquez', 'ACME Pre-sales', '2', '5%', 'Pre-sales'],
          ['', 'Total', '40', '100%', ''],
          ['', '', '', '', ''],
          ['Nicole Kelly', 'ACME Proposal', '15', '38%', 'Pre-sales'],
          ['Nicole Kelly', 'FinServe QBR Prep', '8', '20%', 'Active'],
          ['Nicole Kelly', 'Internal / Admin', '17', '42%', 'Internal'],
          ['', 'Total', '40', '100%', ''],
          ['', '', '', '', ''],
          ['Isabella Reynolds', 'DataCorp Support', '8', '20%', 'Support'],
          ['Isabella Reynolds', 'TechStart Proposal', '12', '30%', 'Pre-sales'],
          ['Isabella Reynolds', 'Internal / Training', '20', '50%', 'Internal'],
          ['', 'Total', '40', '100%', ''],
          ['', '', '', '', ''],
          ['Jessie Montoya', 'FinServe Project', '25', '62%', 'Active'],
          ['Jessie Montoya', 'Marketing / Content', '10', '25%', 'Internal'],
          ['Jessie Montoya', 'Admin', '5', '13%', 'Internal'],
          ['', 'Total', '40', '100%', ''],
          ['', '', '', '', ''],
          ['', 'TEAM AVERAGE', '', '78%', 'Healthy'],
          ['', 'TARGET RANGE', '', '80-85%', '']
        ]
      }
    },
    content: ''
  }
];
