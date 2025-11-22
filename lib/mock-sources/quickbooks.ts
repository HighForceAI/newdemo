import { Source } from '../demo-data';

// 12 realistic QuickBooks records for Summit Strategy Consulting
export const mockQuickBooksRecords: Source[] = [
  {
    id: 'qb_001',
    appType: 'quickbooks',
    title: 'Invoice #1037 - ACME Corp',
    subtitle: 'Invoice - Overdue',
    metadata: {
      type: 'Invoice',
      amount: '$112,500',
      status: 'Overdue',
      dueDate: 'Nov 15, 2025',
      customer: 'ACME Corporation'
    },
    content: `Invoice Details:

Invoice Number: 1037
Customer: ACME Corporation
Contact: Heidi Sheppard
Invoice Date: October 16, 2025
Due Date: November 15, 2025
Amount Due: $112,500.00

Line Items:
1. Digital Transformation - Phase 1 Discovery
   Quantity: 1
   Rate: $75,000.00
   Amount: $75,000.00
   Description: Initial assessment and planning phase for digital transformation project

2. Technical Architecture Design
   Quantity: 1
   Rate: $37,500.00
   Amount: $37,500.00
   Description: Cloud migration architecture and roadmap development

Subtotal: $112,500.00
Tax: $0.00 (Tax-exempt consulting services)
Total: $112,500.00

Payment Terms: Net 30
Status: OVERDUE (5 days past due)

Notes:
First milestone payment for ACME digital transformation project. Customer confirmed payment processing delayed due to internal approval workflows. Expected payment by Nov 22 per email from Heidi Sheppard.

Linked Transactions:
- Estimate #100 (converted to invoice)
- Time Activity entries (Oct 1-15)

Action Required: Follow up with accounts receivable contact`
  },

  {
    id: 'qb_002',
    appType: 'quickbooks',
    title: 'Payment Received - Vertex Systems',
    subtitle: 'Payment - $70,000',
    metadata: {
      type: 'Payment',
      amount: '$70,000',
      status: 'Deposited',
      date: 'Nov 18, 2025',
      customer: 'Vertex Systems'
    },
    content: `Payment Details:

Payment Number: 163
Customer: Vertex Systems
Contact: Brent Soto
Payment Date: November 18, 2025
Payment Method: ACH Transfer
Reference Number: ACH-VTX-20251118
Amount: $70,000.00

Applied To:
Invoice #1024 - Cloud Migration Milestone 2
  Invoice Amount: $70,000.00
  Payment Applied: $70,000.00
  Balance Remaining: $0.00

Deposit Information:
Deposited to: Operating Account (****4532)
Deposit Date: November 18, 2025
Bank Confirmation: Cleared

Customer Account Summary:
Previous Balance: $70,000.00
Payment Received: -$70,000.00
Current Balance: $0.00

Remaining Project Value: $85,000 (Final milestone due Dec 15)

Notes:
Third of four milestone payments for Vertex cloud migration project. Payment received ahead of schedule. Final milestone ($85K) due upon project completion on December 15, 2025.

Transaction Status: Reconciled`
  },

  {
    id: 'qb_003',
    appType: 'quickbooks',
    title: 'Bill - AWS Services November',
    subtitle: 'Bill - Due Dec 5',
    metadata: {
      type: 'Bill',
      amount: '$8,432.18',
      status: 'Unpaid',
      dueDate: 'Dec 5, 2025',
      vendor: 'Amazon Web Services'
    },
    content: `Bill Details:

Bill Number: AWS-NOV-2025
Vendor: Amazon Web Services, Inc.
Vendor Contact: aws-invoicing@amazon.com
Bill Date: November 1, 2025
Due Date: December 5, 2025
Amount Due: $8,432.18

Line Items:
1. EC2 Compute Instances
   Amount: $4,250.00
   Account: Cloud Infrastructure Expenses
   Project: Vertex Systems Migration

2. S3 Storage Services
   Amount: $1,180.50
   Account: Cloud Infrastructure Expenses
   Project: Multiple Projects

3. RDS Database Instances
   Amount: $2,450.00
   Account: Cloud Infrastructure Expenses
   Project: Vertex Systems Migration

4. Data Transfer
   Amount: $551.68
   Account: Cloud Infrastructure Expenses
   Project: Multiple Projects

Subtotal: $8,432.18
Tax: $0.00
Total: $8,432.18

Payment Terms: Net 30
Category: Operating Expense - Billable to Client

Notes:
November cloud infrastructure costs. Majority ($6,700) is billable to Vertex Systems client project. Remaining $1,732.18 represents internal dev/test environments and overhead.

Client Billing:
- Vertex Systems project markup: 15%
- To be included in December invoice

Approval Status: Approved by William Marquez (Project Lead)`
  },

  {
    id: 'qb_004',
    appType: 'quickbooks',
    title: 'Estimate #145 - TechStart AI Implementation',
    subtitle: 'Estimate - Pending',
    metadata: {
      type: 'Estimate',
      amount: '$125,000',
      status: 'Pending',
      date: 'Nov 12, 2025',
      customer: 'TechStart Inc'
    },
    content: `Estimate Details:

Estimate Number: 145
Customer: TechStart Inc
Contact: David Park, Head of Product
Estimate Date: November 12, 2025
Expiration Date: December 12, 2025
Total Amount: $125,000.00

Project: AI-Powered Customer Support Automation

Phase 1: Data Pipeline & Model Development (Months 1-2)
- Data pipeline architecture and setup: $25,000
- Historical data processing and cleaning: $15,000
- ML model development and training: $20,000
Subtotal: $60,000

Phase 2: Integration & Testing (Months 3-4)
- Salesforce API integration: $12,000
- Zendesk webhook implementation: $12,000
- Real-time response API development: $15,000
- Testing and validation: $8,000
Subtotal: $47,000

Phase 3: Deployment & Optimization (Months 5-6)
- Production deployment: $8,000
- Performance optimization: $5,000
- Team training and documentation: $5,000
Subtotal: $18,000

First Year Support & Maintenance: Included
- Monthly model retraining
- Performance monitoring
- Bug fixes and enhancements
- Quarterly optimization reviews

Grand Total: $125,000.00

Payment Schedule:
- 50% ($62,500) upon contract signing
- 25% ($31,250) at Phase 2 completion
- 25% ($31,250) at final delivery

Terms: Net 30
Valid Until: December 12, 2025

Status: Sent to customer, awaiting legal review
Probability: 60%
Expected Close: December 20, 2025

Notes:
Customer has approved budget. Currently in legal review of Master Services Agreement. David Park confirmed timeline works for their Q1 2026 launch goals.`
  },

  {
    id: 'qb_005',
    appType: 'quickbooks',
    title: 'Customer - DataCorp (Active Account)',
    subtitle: 'Customer Record',
    metadata: {
      type: 'Customer',
      totalRevenue: '$362,000',
      status: 'Active',
      since: 'Jul 2025',
      accountBalance: '$2,000'
    },
    content: `Customer Details:

Customer Name: DataCorp
Display Name: DataCorp - Lisa Wang
Customer Type: Strategic Account
Status: Active

Primary Contact:
Name: Lisa Wang
Title: VP Analytics
Email: lwang@datacorp.com
Phone: (415) 555-0142
Mobile: (415) 555-0198

Billing Address:
DataCorp
350 Market Street, Suite 1200
San Francisco, CA 94102
United States

Shipping Address: Same as billing

Account Summary:
Customer Since: July 22, 2025
Total Revenue (Lifetime): $362,000.00
Current Balance: $2,000.00 (Monthly retainer - current)
Credit Limit: None
Payment Terms: Net 30
Preferred Payment Method: ACH

Projects & Revenue:
1. Analytics Platform Implementation: $320,000 (Completed Oct 2025)
2. Monthly Support Retainer: $2,000/month (Ongoing since Nov 2025)
3. Phase 2 Expansion (Pipeline): $175,000 (Expected Q1 2026)

Payment History:
- Milestone 1 ($80,000): Paid on time
- Milestone 2 ($80,000): Paid on time
- Milestone 3 ($80,000): Paid on time
- Final payment ($80,000): Paid early
- Monthly retainers: Autopay via ACH (never late)

Customer Health Score: 95/100 (Excellent)
Reference Account: Yes - Enthusiastic advocate
Upsell Potential: High

Notes:
DataCorp is a model client. Project delivered successfully, now on recurring support contract. Lisa Wang actively refers new business to us (NetLogic referral worth $700K). Discussing Phase 2 expansion for Q1 2026. Case study in development. Invited us to speak at their annual conference (March 2026).

Customer Tags: Strategic, Reference Account, Recurring Revenue, Referral Source

Sales Rep: Isabella Reynolds
Account Manager: Hayden Woodburn`
  },

  {
    id: 'qb_006',
    appType: 'quickbooks',
    title: 'Vendor Bill - Snowflake Computing',
    subtitle: 'Bill - Paid',
    metadata: {
      type: 'Bill',
      amount: '$4,250.00',
      status: 'Paid',
      paidDate: 'Nov 10, 2025',
      vendor: 'Snowflake Computing'
    },
    content: `Bill Details:

Bill Number: SNOW-OCT-2025-8842
Vendor: Snowflake Computing, Inc.
Vendor Contact: billing@snowflake.com
Bill Date: October 31, 2025
Due Date: November 30, 2025
Paid Date: November 10, 2025
Amount: $4,250.00

Account: Cloud Services - Data Warehouse
Category: Billable Expense

Usage Summary:
- Data storage: 2.5 TB
- Compute credits: 850 credits
- Data transfer: 180 GB
Billing Period: October 1-31, 2025

Project Allocation:
DataCorp Analytics Platform: $4,250.00 (100%)

Payment Information:
Payment Method: Corporate Credit Card (****7821)
Payment Date: November 10, 2025
Confirmation: SNW-PMT-20251110-4422

Client Billing:
Billed to: DataCorp
Markup: 20%
Client Invoice Amount: $5,100.00
Invoice #: 1035
Invoice Status: Paid

Notes:
October Snowflake costs for DataCorp analytics platform. Usage within expected parameters. Platform now in production with steady usage patterns. Client billed with 20% markup as per MSA.

Approval: Isabella Reynolds (Project Lead)
Status: Reconciled and closed`
  },

  {
    id: 'qb_007',
    appType: 'quickbooks',
    title: 'Invoice #1041 - FinServe Solutions',
    subtitle: 'Invoice - Paid',
    metadata: {
      type: 'Invoice',
      amount: '$46,250',
      status: 'Paid',
      paidDate: 'Nov 20, 2025',
      customer: 'FinServe Solutions'
    },
    content: `Invoice Details:

Invoice Number: 1041
Customer: FinServe Solutions
Contact: Jessie Montoya, Director of Technology
Invoice Date: November 8, 2025
Due Date: December 8, 2025
Paid Date: November 20, 2025
Amount: $46,250.00

Line Items:
1. System Modernization - Final Milestone
   Quantity: 1
   Rate: $46,250.00
   Amount: $46,250.00
   Description: Final delivery and go-live support for modernization project
   Project: FinServe Modernization Q4 2025

Payment Details:
Subtotal: $46,250.00
Tax: $0.00
Total: $46,250.00
Amount Paid: $46,250.00
Balance: $0.00

Payment Information:
Payment Method: ACH Transfer
Reference: ACH-FINSERVE-112025
Payment Date: November 20, 2025
Days to Payment: 12 days (18 days early)

Project Summary:
Total Project Value: $185,000
Payment Schedule:
- Deposit (25%): $46,250 - Paid Sep 15
- Milestone 1 (25%): $46,250 - Paid Oct 10
- Milestone 2 (25%): $46,250 - Paid Nov 1
- Final (25%): $46,250 - Paid Nov 20

All payments received on time or early.

Customer Satisfaction: Excellent
- System performance improved 45%
- User adoption at 92%
- Zero critical incidents
- Customer satisfaction scores up 23%

Follow-up Opportunities:
- QBR scheduled Dec 5
- European expansion discussion (potential $200-250K)
- Annual support contract renewal

Notes:
Outstanding project delivery. Client extremely satisfied. Jessie Montoya confirmed reference willingness and already referred GlobalManufacturing Co (new opportunity worth $350K).

Status: Closed - Paid in Full`
  },

  {
    id: 'qb_008',
    appType: 'quickbooks',
    title: 'Expense Report - William Marquez Travel',
    subtitle: 'Expense - Approved',
    metadata: {
      type: 'Expense',
      amount: '$1,847.65',
      status: 'Approved',
      date: 'Nov 15, 2025',
      employee: 'William Marquez'
    },
    content: `Expense Report Details:

Report Number: EXP-2025-11-015
Employee: William Marquez
Department: Consulting Services
Report Date: November 15, 2025
Period: November 10-14, 2025
Total Amount: $1,847.65

Expense Category Breakdown:

Airfare:
- SFO to Austin (Vertex on-site) - $425.00
- Austin to SFO (return) - $462.00
Subtotal: $887.00
Project: Vertex Systems Cloud Migration

Hotel:
- Hilton Austin Downtown (3 nights)
- Rate: $189/night
- Total: $567.00 + $64.26 taxes/fees = $631.26
Subtotal: $631.26
Project: Vertex Systems Cloud Migration

Ground Transportation:
- Uber to SFO: $45.00
- Uber from Austin airport: $32.00
- Uber to Austin airport: $28.50
- Uber from SFO: $52.00
Subtotal: $157.50
Project: Vertex Systems Cloud Migration

Meals:
- Client dinner (4 attendees): $124.89
- Per diem (3 days): $47.00
Subtotal: $171.89
Project: Vertex Systems Cloud Migration

Total: $1,847.65

Billing Status: 100% Billable to Vertex Systems
Client Invoice: To be included in December billing
Markup: 15% (per contract)
Client Charge: $2,124.80

Receipts: All attached and verified
Approval Chain:
- Employee: William Marquez (Submitted Nov 15)
- Manager: Hayden Woodburn (Approved Nov 16)
- Finance: Pending reimbursement

Reimbursement:
Method: Direct deposit
Expected: Nov 22, 2025 payroll

Notes:
On-site visit to Vertex Systems for final project review and knowledge transfer sessions. Client meeting very successful - Brent Soto confirmed early completion and final payment.`
  },

  {
    id: 'qb_009',
    appType: 'quickbooks',
    title: 'Profit & Loss - November 2025',
    subtitle: 'Report',
    metadata: {
      type: 'Report',
      period: 'November 2025',
      netIncome: '$128,450',
      revenue: '$247,000',
      date: 'Nov 20, 2025'
    },
    content: `SUMMIT STRATEGY CONSULTING
Profit & Loss Statement
November 1-20, 2025 (Month to Date)

INCOME
Consulting Revenue
  Project Revenue: $235,000.00
    Vertex Systems: $70,000.00
    ACME Corp (deposit): $112,500.00
    FinServe Solutions: $46,250.00
    DataCorp (support): $6,250.00

  Recurring Revenue: $12,000.00
    Monthly support contracts: $12,000.00

Total Income: $247,000.00

COST OF GOODS SOLD
Direct Project Costs: $42,350.00
  Cloud infrastructure (AWS): $15,200.00
  Cloud infrastructure (Snowflake): $8,500.00
  Subcontractor fees: $12,500.00
  Software licenses (project-specific): $6,150.00

Total COGS: $42,350.00

GROSS PROFIT: $204,650.00
Gross Margin: 82.9%

OPERATING EXPENSES

Payroll & Benefits: $58,200.00
  Salaries: $45,000.00
  Payroll taxes: $6,750.00
  Health insurance: $4,200.00
  401k matching: $2,250.00

Office & Administrative: $8,500.00
  Office rent: $3,500.00
  Utilities & internet: $850.00
  Office supplies: $420.00
  Software subscriptions: $2,100.00
  Insurance: $1,630.00

Sales & Marketing: $3,200.00
  Website hosting: $150.00
  Marketing tools: $450.00
  Conference sponsorship: $2,000.00
  Client entertainment: $600.00

Professional Services: $2,800.00
  Accounting & bookkeeping: $1,500.00
  Legal fees: $1,300.00

Travel & Expenses: $3,500.00
  Client travel: $2,850.00
  Local transportation: $650.00

Total Operating Expenses: $76,200.00

NET OPERATING INCOME: $128,450.00
Operating Margin: 52.0%

OTHER INCOME/(EXPENSE)
Interest income: $145.00
Bank fees: -($95.00)

NET OTHER INCOME: $50.00

NET INCOME: $128,500.00
Net Margin: 52.0%

YEAR-TO-DATE COMPARISON
Nov 2025 (MTD): $128,500
Nov 2024 (same period): $87,200
Growth: +47.4%

KEY METRICS
Revenue per consultant: $20,583/month
Billable utilization: 78%
Average project margin: 83%
Cash collected: $188,500 (76% of revenue)

Notes:
Strong month driven by Vertex milestone payment and FinServe final payment. ACME deposit received but project hasn't started (will recognize revenue in Q1). Operating expenses well-controlled. Net margin healthy at 52%.

Accounts Receivable Outstanding: $58,500
Upcoming Receipts Expected: $70,000 (Vertex final payment Dec 15)`
  },

  {
    id: 'qb_010',
    appType: 'quickbooks',
    title: 'Invoice #1045 - NetLogic Discovery Phase',
    subtitle: 'Draft Invoice',
    metadata: {
      type: 'Invoice',
      amount: '$35,000',
      status: 'Draft',
      date: 'Nov 20, 2025',
      customer: 'NetLogic Corp'
    },
    content: `Invoice Details (DRAFT):

Invoice Number: 1045 (Draft)
Customer: NetLogic Corp
Contact: Isabella Reynolds, COO
Invoice Date: (To be finalized)
Due Date: (Net 30 from invoice date)
Amount: $35,000.00

Line Items:
1. Enterprise Integration - Discovery Phase
   Quantity: 1
   Rate: $35,000.00
   Amount: $35,000.00
   Description: Comprehensive discovery and architecture planning for post-acquisition platform integration

Scope of Work:
- Current state assessment (3 platforms)
- Technical architecture review
- Data mapping and analysis
- Integration strategy development
- Migration roadmap and timeline
- Risk assessment
- Detailed implementation proposal

Deliverables:
- Current state documentation
- Future state architecture design
- Phased migration plan
- Resource requirements
- Cost estimate for full implementation
- Executive presentation

Timeline: 3 weeks
Team: Hayden Woodburn, Nicole Howell, Technical Architect

Subtotal: $35,000.00
Tax: $0.00
Total: $35,000.00

Payment Terms: Net 30
Deposit Required: $17,500 (50%) upon SOW signature

Status: DRAFT - Pending contract negotiation

Notes:
Discovery phase for potential $700K enterprise integration project. Isabella Reynolds (COO) is champion. They acquired two competitors and need to unify three separate platforms. Complex project but referral from Lisa Wang (DataCorp) gives us strong credibility.

Next Steps:
1. Finalize SOW for discovery phase
2. Contract negotiation (targeting Dec 15)
3. Discovery phase Jan 6-27, 2026
4. Full project proposal by Feb 10, 2026
5. Main project start: Q1 2026

This draft will be converted to formal invoice upon SOW signature.`
  },

  {
    id: 'qb_011',
    appType: 'quickbooks',
    title: 'Accounts Receivable Aging Summary',
    subtitle: 'Report - As of Nov 20',
    metadata: {
      type: 'Report',
      totalAR: '$112,500',
      overdueAmount: '$112,500',
      date: 'Nov 20, 2025',
      period: 'As of Nov 20, 2025'
    },
    content: `ACCOUNTS RECEIVABLE AGING SUMMARY
As of November 20, 2025

Customer Status Overview:

CURRENT (0-30 days): $0.00
No outstanding invoices in current period

1-30 DAYS PAST DUE: $112,500.00

ACME Corporation
  Invoice #1037
  Invoice Date: Oct 16, 2025
  Due Date: Nov 15, 2025
  Days Overdue: 5 days
  Amount: $112,500.00
  Contact: Heidi Sheppard
  Last Contact: Nov 18 (payment confirmed processing)
  Expected Payment: Nov 22, 2025
  Risk Level: Low (communicated delay, payment approved)

31-60 DAYS PAST DUE: $0.00
No invoices in this category

61-90 DAYS PAST DUE: $0.00
No invoices in this category

90+ DAYS PAST DUE: $0.00
No invoices in this category

TOTAL ACCOUNTS RECEIVABLE: $112,500.00

Collection Summary:
Total Outstanding: $112,500.00
Overdue Amount: $112,500.00
Percentage Overdue: 100%
Average Days to Payment (all customers): 18 days
Current A/R as % of Monthly Revenue: 45.5%

Customer Payment Trends (Last 6 months):
- DataCorp: Always on time or early
- Vertex Systems: Always on time or early
- FinServe: Average 5 days early
- ACME Corp: New customer, first invoice (small delay communicated)

Actions Taken:
Nov 18: Email follow-up with Heidi Sheppard
Nov 18: Confirmed payment approved, processing through AP
Expected Resolution: Nov 22, 2025

Collections Risk Assessment: LOW
- Only one overdue invoice
- Small delay (5 days)
- Customer communication excellent
- Payment confirmed in process
- Large project ($450K) moving forward
- Strong client relationship

Upcoming Receivables (Not yet due):
Dec 15: Vertex Systems - $85,000 (final milestone)

Notes:
Overall A/R health is excellent. ACME delay is not concerning - they explained internal approval process and confirmed payment processing. Historic collection performance is outstanding with average 18-day payment cycle (better than 30-day terms).

Recommended Actions:
1. Friendly follow-up with ACME on Nov 22 if payment not received
2. No escalation needed at this time
3. Continue monitoring`
  },

  {
    id: 'qb_012',
    appType: 'quickbooks',
    title: 'Sales Tax Liability Report - Q4 2025',
    subtitle: 'Report',
    metadata: {
      type: 'Report',
      period: 'Q4 2025',
      totalLiability: '$0.00',
      date: 'Nov 20, 2025',
      status: 'Compliant'
    },
    content: `SALES TAX LIABILITY REPORT
Fourth Quarter 2025 (Oct 1 - Nov 20)

Tax Summary:

Taxable Sales: $0.00
Non-Taxable Sales: $742,000.00
Tax Collected: $0.00
Tax Liability: $0.00

Explanation:
Summit Strategy Consulting provides professional consulting services which are generally exempt from sales tax in California and all states where we operate.

Service Classification: Professional Services - Tax Exempt
Primary Services:
- Technology consulting
- Software implementation
- Strategic advisory
- Cloud migration services
- Data platform development

Revenue Breakdown by Type:
Consulting Services (Tax-Exempt): $730,000.00
Support & Maintenance (Tax-Exempt): $12,000.00

Revenue by Customer Location:
California: $628,000.00 (Tax-exempt services)
Texas: $70,000.00 (Tax-exempt services)
New York: $44,000.00 (Tax-exempt services)

Total Q4 Revenue (Oct 1 - Nov 20): $742,000.00
Total Tax Collected: $0.00
Total Tax Liability: $0.00

Compliance Status: ✓ COMPLIANT

State Registrations:
California: Active, exempt services
Texas: Not required, exempt services
New York: Not required, exempt services

Filing Requirements:
No sales tax filing required for Q4 2025 due to exempt service classification.

Last Audit: March 2024 (No issues found)
Next Review: March 2026

Important Notes:
1. All revenue derived from tax-exempt professional services
2. No taxable product sales in current period
3. Resale of cloud services (AWS, Snowflake) billed as part of exempt consulting services
4. Compliance confirmed with CA BOE regulations
5. Multi-state nexus analysis current (reviewed Oct 2025)

If service mix changes to include taxable products or SaaS offerings, consult with tax advisor immediately.

Tax Advisor: Martinez & Associates CPAs
Last Consultation: September 2025
Next Review: January 2026

Status: No action required`
  }
];
