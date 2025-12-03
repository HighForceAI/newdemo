import { Source } from '../demo-data';

// 10 Google Drive documents for Summit Strategy Consulting
export const mockDriveDocs: Source[] = [
  {
    id: 'drive_001',
    appType: 'drive',
    title: 'ACME Digital Transformation - Proposal v3.2',
    subtitle: 'Google Docs',
    metadata: {
      lastModified: 'Nov 17, 2025',
      owner: 'Nicole Howell'
    },
    content: `SUMMIT STRATEGY CONSULTING
Digital Transformation Proposal

CLIENT: ACME Corporation
PREPARED FOR: Heidi Sheppard, VP of Digital Strategy
DATE: November 17, 2025

EXECUTIVE SUMMARY

ACME Corporation stands at a critical juncture in its digital evolution. Your current technology infrastructure, while stable, limits your ability to scale operations and compete in an increasingly digital marketplace. This proposal outlines a comprehensive 12-month digital transformation program designed to modernize your technology stack, enhance operational efficiency, and position ACME for sustainable growth.

PROPOSED SOLUTION

Phase 1: Assessment & Planning (Months 1-2)
- Current state analysis
- Future state architecture design
- Migration roadmap development
- Risk assessment and mitigation planning
Investment: $75,000

Phase 2: Cloud Migration (Months 3-5)
- AWS infrastructure setup
- Application migration
- Data center consolidation
- Security and compliance implementation
Investment: $180,000

Phase 3: Platform Modernization (Months 6-9)
- Legacy system replacement
- API development and integration
- Modern data warehouse implementation
- Analytics platform deployment
Investment: $140,000

Phase 4: Optimization & Enablement (Months 10-12)
- Performance tuning
- Team training and change management
- Documentation and knowledge transfer
- Ongoing support framework
Investment: $55,000

TOTAL INVESTMENT: $450,000

TEAM STRUCTURE
Lead Consultant: Nicole Howell (AWS Certified Solutions Architect)
Cloud Engineer: William Marquez (10+ years infrastructure experience)
Data Architect: Isabella Reynolds
Change Management: Jessie Montoya

EXPECTED OUTCOMES
- 40% reduction in infrastructure costs
- 60% improvement in system performance
- Enhanced security and compliance posture
- Scalable platform for future growth

We're excited about the opportunity to partner with ACME Corporation on this transformative initiative.`
  },

  {
    id: 'drive_002',
    appType: 'drive',
    title: 'Vertex Systems - Final Delivery Checklist',
    subtitle: 'Google Docs',
    metadata: {
      lastModified: 'Nov 19, 2025',
      owner: 'William Marquez'
    },
    content: `VERTEX SYSTEMS CLOUD MIGRATION
Final Delivery Checklist

Project: AWS Cloud Migration
Client: Vertex Systems
Completion: December 15, 2025
Lead: William Marquez

DELIVERABLES STATUS

Infrastructure Documentation ✓
├─ Architecture diagrams (completed)
├─ Network topology documentation (completed)
├─ Security configuration guide (completed)
└─ Disaster recovery procedures (completed)

Migration Runbooks ✓
├─ Application migration procedures (completed)
├─ Database migration steps (completed)
├─ Rollback procedures (completed)
└─ Validation checklists (completed)

Training Materials ✓
├─ AWS console training guide (completed)
├─ Monitoring and alerting guide (completed)
├─ Incident response procedures (completed)
└─ Cost optimization best practices (completed)

Knowledge Transfer Sessions
├─ Technical team training (Nov 25-26)
├─ Operations team training (Nov 27-29)
├─ Executive overview (Dec 2)
└─ Q&A session (Dec 5)

Final Review Meeting: December 10, 2025
Final Payment Trigger: December 15, 2025
Amount: $70,000

CLIENT FEEDBACK
Brent Soto (CTO): "Exceptional work. Ahead of schedule and exceeding expectations."

POST-PROJECT ACTIONS
- Request reference confirmation
- Case study development
- LinkedIn recommendations
- Add to portfolio
- Follow up for future opportunities (6 months)`
  },

  {
    id: 'drive_003',
    appType: 'drive',
    title: 'TechStart AI Implementation - Technical Approach',
    subtitle: 'Google Docs',
    metadata: {
      lastModified: 'Nov 16, 2025',
      owner: 'Isabella Reynolds'
    },
    content: `TECHSTART AI IMPLEMENTATION
Technical Architecture Document

Project: Customer Support Automation
Client: TechStart Inc
Prepared by: Isabella Reynolds
Date: November 16, 2025

SOLUTION OVERVIEW

Custom machine learning model to automate Tier 1 customer support responses, integrated with existing Salesforce and Zendesk infrastructure.

TECHNICAL ARCHITECTURE

Data Pipeline:
- Historical support tickets (3 years) → Data lake (AWS S3)
- Automated ETL for ongoing ticket ingestion
- Data cleaning and preprocessing
- Feature engineering pipeline

Model Development:
- Natural Language Processing using transformer models
- Custom training on TechStart domain-specific data
- Response generation and ranking
- Confidence scoring for automation decisions

Integration Layer:
- Salesforce API integration for ticket creation
- Zendesk webhook listeners
- Real-time response API
- Human handoff logic for low-confidence cases

Infrastructure:
- AWS SageMaker for model training and deployment
- Lambda functions for API layer
- RDS for metadata storage
- CloudWatch for monitoring

EXPECTED OUTCOMES
- 60% reduction in Tier 1 ticket volume
- 24/7 instant responses
- Improved customer satisfaction (faster response times)
- Support team can focus on complex issues

TIMELINE
Month 1-2: Data pipeline setup and initial model training
Month 3-4: Integration development and testing
Month 5-6: Pilot deployment and optimization

ONGOING SUPPORT
Year 1 included in $125K total cost:
- Monthly model retraining
- Performance monitoring
- Bug fixes and enhancements
- Quarterly optimization reviews`
  },

  {
    id: 'drive_004',
    appType: 'drive',
    title: 'NetLogic Discovery Call Notes',
    subtitle: 'Google Docs',
    metadata: {
      lastModified: 'Nov 12, 2025',
      owner: 'Hayden Woodburn'
    },
    content: `NETLOGIC CORP - DISCOVERY CALL NOTES
November 12, 2025

Attendees:
- Isabella Reynolds (COO, NetLogic)
- Tom Richardson (CTO, NetLogic)
- Hayden (Summit Strategy)
- Nicole Howell (Summit Strategy)

COMPANY BACKGROUND
- B2B SaaS company
- $50M ARR, 200 employees
- Acquired two competitors in past 12 months
- Now struggling with technical integration

CURRENT CHALLENGE
Three separate platforms post-acquisition:
1. Original NetLogic platform (Ruby on Rails, PostgreSQL)
2. Acquisition #1 - CompeteX (Node.js, MongoDB)
3. Acquisition #2 - DataSync (Python/Django, MySQL)

Pain Points:
- Customers have different login portals
- Billing is completely manual (nightmare)
- No unified reporting
- Customer data fragmented
- Support team managing three separate ticket systems

REQUIREMENTS
- Unified customer experience
- Single billing system
- Consolidated reporting
- Maintain service during migration
- Complete within 18 months

DECISION MAKERS
- Isabella Reynolds (budget owner, champion)
- Tom Richardson (technical evaluator)
- Board (final approval - already indicated support)

BUDGET
$600-800K approved
Flexible on phasing and payment terms

TIMELINE
- Q1 2026: Architecture and planning
- Q2-Q3 2026: Phased migration
- Q4 2026: Optimization and training

COMPETITION
They've talked to Accenture ($1.2M+ pricing - too expensive)
Big 4 firms (same issue)
They want boutique firm with flexibility

OUR ADVANTAGE
- Right-sized for their needs
- Referral from Lisa Wang carries weight
- Competitive pricing
- Demonstrated execution on complex projects

NEXT STEPS
- Technical deep dive scheduled for Nov 28
- Need to bring in integration architect for call
- Proposal due by Dec 10
- Decision expected mid-January

NOTES
This could be our biggest project ever. Complex but achievable. Isabella Reynolds is a strong champion. Need to nail the technical approach.`
  },

  {
    id: 'drive_005',
    appType: 'drive',
    title: 'Q4 2025 Business Review',
    subtitle: 'Google Docs',
    metadata: {
      lastModified: 'Nov 20, 2025',
      owner: 'Hayden Woodburn'
    },
    content: `SUMMIT STRATEGY CONSULTING
Q4 2025 Business Review

Period: October 1 - November 20, 2025

REVENUE PERFORMANCE

Closed Deals:
- DataCorp Analytics Platform: $320K (Closed Jul 22, delivered Oct 31)
- FinServe Modernization: $185K (Closed Sep 10, delivered Nov 8)
Total Closed: $505K

Active Pipeline:
- ACME Digital Transformation: $450K (75% probability)
- Vertex Cloud Migration: $280K (90% probability, closing Dec 15)
- TechStart AI Implementation: $125K (60% probability)
- BrightStart Advisory: $45K (70% probability)
Weighted Pipeline: $683K

Q4 Target: $1.1M
Projected: $1.188M (108% of target)

CLIENT SATISFACTION

Recent Feedback:
- Vertex: "Exceptional work, ahead of schedule"
- DataCorp: "Platform exceeded expectations"
- FinServe: "Zero critical incidents, 92% adoption"

Reference Willingness: 100% of closed clients

TEAM UTILIZATION

Current: 78%
Target Range: 80-85%
Status: Healthy capacity for new work

Available Capacity Q1 2026:
- William Marquez: Full (Vertex completing)
- Isabella Reynolds: 80% (DataCorp maintenance is light)
- Nicole Howell: 50% (can lead new project)

STRATEGIC INITIATIVES

Wins:
✓ Strong quarter financially
✓ High client satisfaction
✓ Building reference base
✓ Referral engine starting to work

Challenges:
- Need to add 2-3 consultants if both ACME and NetLogic close
- E-commerce capability gap identified (RetailCo loss)
- Delivery capacity constraints at 100% utilization

GOALS FOR Q1 2026
1. Close ACME ($450K)
2. Deliver Vertex successfully (reference account)
3. Start TechStart project
4. Advance NetLogic through discovery
5. Hire 2 senior consultants (if needed)

CASH FLOW
Operating Balance: $428K
A/R Outstanding: $156K
A/P Due: $82K
Net Position: $502K (Strong)

Financial health is excellent. Ready for growth.`
  },

  {
    id: 'drive_006',
    appType: 'drive',
    title: 'DataCorp Case Study Draft',
    subtitle: 'Google Docs',
    metadata: {
      lastModified: 'Nov 16, 2025',
      owner: 'Jessie Montoya'
    },
    content: `CASE STUDY: DATACORP ANALYTICS TRANSFORMATION

Client: DataCorp
Industry: B2B Data Services
Project: Enterprise Analytics Platform
Duration: 3 months
Investment: $320,000

THE CHALLENGE

DataCorp, a rapidly growing B2B data services company, was struggling with manual reporting processes. Their data analysts spent 40+ hours per month creating executive reports using spreadsheets and SQL queries.

As the company scaled from $20M to $50M in revenue, the manual approach became unsustainable. Leadership needed real-time visibility into business metrics but lacked the infrastructure to support it.

THE SOLUTION

Summit Strategy Consulting designed and implemented a modern analytics platform built on:
- Snowflake data warehouse for centralized data storage
- Automated ETL pipelines for data integration
- Power BI dashboards for executive visibility
- Self-service analytics tools for business users

THE RESULTS

Efficiency Gains:
- Reporting time reduced from 40 hours/month to 2 hours/month
- Executive dashboards updated in real-time vs weekly
- Ad-hoc analysis time reduced by 75%

Business Impact:
- Faster decision-making with real-time data
- Identified $2M in revenue optimization opportunities
- Reduced customer churn by 15% through predictive analytics
- Platform ROI achieved in 6 months

Client Testimonial:
"The analytics platform has transformed how we run our business. What used to take days now happens instantly. Summit Strategy delivered exceptional value." - Lisa Wang, VP Analytics

WHAT'S NEXT

DataCorp has engaged Summit Strategy for:
- Ongoing platform support ($2K/month)
- Phase 2 expansion (predictive analytics - $150K)
- Strategic advisory services

This project demonstrates Summit Strategy's ability to deliver measurable business outcomes through thoughtful technology implementation.`
  },

  {
    id: 'drive_007',
    appType: 'drive',
    title: 'Summit Strategy - Company Overview',
    subtitle: 'Google Docs',
    metadata: {
      lastModified: 'Nov 5, 2025',
      owner: 'Hayden Woodburn'
    },
    content: `SUMMIT STRATEGY CONSULTING
Company Overview

ABOUT US

Summit Strategy Consulting is a boutique technology consulting firm specializing in cloud migrations, enterprise modernization, and data platform implementations.

Founded: 2020
Team Size: 12 consultants
Headquarters: San Francisco, CA
Revenue (2024): $4.2M
Growth Rate: 45% YoY

SERVICES

Cloud Migration & Modernization
- AWS, Azure, GCP migrations
- Infrastructure as Code
- Container orchestration
- Legacy system modernization

Data & Analytics
- Data warehouse implementation
- ETL pipeline development
- Analytics platform deployment
- Business intelligence solutions

Enterprise Integration
- API development
- System consolidation
- M&A technical integration
- Platform unification

Strategic Advisory
- Technology strategy
- Architecture design
- Vendor selection
- Technical due diligence

CLIENTS

Served 30+ clients across industries:
- Financial Services: 8 clients
- Technology/SaaS: 12 clients
- Manufacturing: 5 clients
- Healthcare: 3 clients
- Professional Services: 4 clients

Average Project Size: $250K
Typical Duration: 3-6 months
Client Retention: 85%

TEAM EXPERTISE

Technical Skills:
- Cloud Platforms (AWS, Azure, GCP)
- Programming (Python, Java, Node.js)
- Databases (PostgreSQL, MongoDB, MySQL, Snowflake)
- DevOps & CI/CD
- Machine Learning / AI

Certifications:
- 8 AWS Certified Solutions Architects
- 4 Azure Certified Engineers
- 3 GCP Professional Cloud Architects

COMPETITIVE ADVANTAGES

1. Right-Sized Expertise
   - More capable than freelancers
   - More affordable and agile than Big 4
   - Deep technical expertise without overhead

2. Proven Delivery
   - 95% on-time delivery rate
   - 100% client reference willingness
   - Strong case study portfolio

3. Business Focus
   - Technology serves business goals
   - ROI-driven approach
   - Executive communication skills

GROWTH TRAJECTORY

2024: $4.2M revenue, 8 team members
2025 Projected: $6.1M revenue, 12 team members
2026 Target: $9M revenue, 18 team members

Investment Thesis:
Growing demand for mid-market cloud and data expertise. Large firms too expensive, freelancers lack bandwidth. We're positioned perfectly in the middle.`
  }
];
