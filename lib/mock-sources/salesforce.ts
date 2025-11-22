import { Source } from '../demo-data';

// 10 Salesforce deal records for Summit Strategy Consulting
export const mockSalesforceDeals: Source[] = [
  {
    id: 'sf_001',
    appType: 'salesforce',
    title: 'ACME Corp - Digital Transformation',
    subtitle: 'Deal Record',
    metadata: {
      dealValue: '$450,000',
      stage: 'Proposal Sent',
      closeDate: 'Dec 31, 2025',
      owner: 'Demo'
    },
    content: `Opportunity Details:

Account: ACME Corporation
Contact: Heidi Sheppard, VP of Digital Strategy
Type: New Business
Amount: $450,000
Probability: 75%
Expected Close: December 31, 2025

Description:
Comprehensive digital transformation initiative including:
- Cloud infrastructure migration (AWS)
- Legacy system modernization
- Data analytics platform implementation
- Change management and training

Key Decision Makers:
- Heidi Sheppard (Champion)
- Michael Roberts (CFO - Economic Buyer)
- Lisa Park (CTO - Technical Evaluator)

Competition:
- McKinsey Digital (eliminated)
- Deloitte Digital (still competing)

Next Steps:
1. Executive alignment meeting - Week of Dec 2
2. SOW finalization
3. Contract negotiation
4. Planned start date: January 6, 2026

Notes:
Sarah mentioned board approval is likely but wants to see Phase 1 accelerated. Need to revise timeline and present updated proposal. Nicole Howell requested as lead consultant based on prior CRM project success.`
  },

  {
    id: 'sf_002',
    appType: 'salesforce',
    title: 'Vertex Systems - Cloud Migration',
    subtitle: 'Deal Record - Closed Won',
    metadata: {
      dealValue: '$280,000',
      stage: 'Closed Won',
      closeDate: 'Aug 15, 2025',
      owner: 'William Marquez'
    },
    content: `Opportunity Details:

Account: Vertex Systems
Contact: Brent Soto, CTO
Type: New Business
Amount: $280,000
Probability: 100% (Closed Won)
Close Date: August 15, 2025

Description:
AWS cloud migration project for mid-sized manufacturing company

Deliverables:
- Infrastructure as Code (Terraform)
- Application containerization
- Database migration (Oracle to RDS)
- CI/CD pipeline setup
- Team training and knowledge transfer

Timeline:
Start: September 1, 2025
End: December 15, 2025
Status: Final phase - on track for early completion

Payment Schedule:
- Initial deposit: $70K (paid)
- Milestone 1: $70K (paid)
- Milestone 2: $70K (paid)
- Final payment: $70K (due Dec 15)

Client Satisfaction: Excellent
Reference Status: Confirmed willing to provide references

Notes:
Project executing ahead of schedule. Client extremely satisfied. Strong potential for future work. Brent Soto praised team expertise and professionalism.`
  },

  {
    id: 'sf_003',
    appType: 'salesforce',
    title: 'TechStart - AI Implementation',
    subtitle: 'Deal Record',
    metadata: {
      dealValue: '$125,000',
      stage: 'Proposal Sent',
      closeDate: 'Dec 20, 2025',
      owner: 'Demo'
    },
    content: `Opportunity Details:

Account: TechStart Inc
Contact: David Park, Head of Product
Type: New Business
Amount: $125,000
Probability: 60%
Expected Close: December 20, 2025

Description:
AI-powered customer support automation system

Scope:
- Custom ML model development
- Integration with Salesforce and Zendesk
- Training data pipeline
- Automated response system
- First year support and maintenance

Timeline: 4-6 months
Start Date: January 2026

Decision Criteria:
- Technical capability (we're strong)
- Pricing (competitive)
- Integration complexity (their systems are modern - good fit)

Competition:
- In-house development (they don't have ML expertise)
- Larger consulting firms (too expensive)

Next Steps:
- Answered clarification questions Nov 17
- Awaiting legal review of MSA
- Targeting contract signature mid-December

Notes:
David Park very engaged. Budget approved. Main risk is internal legal process timeline. Isabella Reynolds interested in leading this project given her AI/ML background.`
  },

  {
    id: 'sf_004',
    appType: 'salesforce',
    title: 'DataCorp - Analytics Platform',
    subtitle: 'Deal Record - Closed Won',
    metadata: {
      dealValue: '$320,000',
      stage: 'Closed Won',
      closeDate: 'Jul 22, 2025',
      owner: 'Isabella Reynolds'
    },
    content: `Opportunity Details:

Account: DataCorp
Contact: Lisa Wang, VP Analytics
Type: New Business
Amount: $320,000
Probability: 100% (Closed Won)
Close Date: July 22, 2025

Description:
Enterprise analytics platform implementation

Deliverables:
- Data warehouse architecture (Snowflake)
- ETL pipeline development
- Executive dashboard suite
- Self-service analytics tools
- Power BI integration

Timeline:
Start: August 1, 2025
End: October 31, 2025
Status: Successfully delivered

Outcome:
- Platform launched on time
- Client extremely satisfied
- Turned into ongoing support contract ($2K/month)
- Phase 2 expansion opportunity identified ($150-200K)
- Case study opportunity
- Speaking invitation at client conference

Reference Status: Enthusiastic advocate

Notes:
This is becoming a model client relationship. Lisa Wang is now actively referring other companies to us. Strong potential for long-term partnership.`
  },

  {
    id: 'sf_005',
    appType: 'salesforce',
    title: 'FinServe - Modernization Project',
    subtitle: 'Deal Record - Closed Won',
    metadata: {
      dealValue: '$185,000',
      stage: 'Closed Won',
      closeDate: 'Sep 10, 2025',
      owner: 'Jessie Montoya'
    },
    content: `Opportunity Details:

Account: FinServe Solutions
Contact: Jessie Montoya, Director of Technology
Type: New Business
Amount: $185,000
Probability: 100% (Closed Won)
Close Date: September 10, 2025

Description:
Legacy system modernization for financial services company

Scope:
- Application modernization
- API development
- Database optimization
- Security enhancements
- User training

Timeline:
Start: September 15, 2025
End: November 8, 2025
Status: Successfully completed

Results:
- System performance improved 45%
- User adoption at 92%
- Zero critical incidents post-launch
- Customer satisfaction scores up 23%

Follow-on Opportunities:
- European operations expansion (mentioned in QBR)
- Estimated value: $200-250K
- Timeline: Q2 2026

Reference Status: Confirmed - will provide references

Notes:
Jessie Montoya is a strong advocate. Mentioned us to GlobalManufacturing (new lead). QBR scheduled for early December to discuss expansion.`
  },

  {
    id: 'sf_006',
    appType: 'salesforce',
    title: 'NetLogic - Enterprise Integration',
    subtitle: 'Deal Record',
    metadata: {
      dealValue: '$700,000',
      stage: 'Discovery',
      closeDate: 'Jan 31, 2026',
      owner: 'Demo'
    },
    content: `Opportunity Details:

Account: NetLogic Corp
Contact: Isabella Reynolds, COO
Type: New Business
Amount: $700,000
Probability: 40%
Expected Close: January 31, 2026

Description:
Complex enterprise integration following multiple acquisitions

Challenge:
NetLogic acquired two competitors and now operates three separate platforms. Need unified architecture for customers, billing, and reporting.

Scope:
- Architecture design and planning
- Phased migration strategy
- Data consolidation
- Platform unification
- Team training

Timeline: 18 months
Start: Q1 2026

Decision Criteria:
- Technical complexity (high - need experienced team)
- M&A integration experience (we have some)
- Budget (approved at $600-800K)

Competition:
- Big 4 consulting firms (more expensive, less agile)
- Build in-house (too slow, risky)

Next Steps:
- Discovery call scheduled for week of Nov 25
- Likely need to bring in integration specialist
- This could be our largest deal ever

Notes:
Referral from Lisa Wang (DataCorp). Strong endorsement. This is a complex project that could establish us in the M&A integration space.`
  },

  {
    id: 'sf_007',
    appType: 'salesforce',
    title: 'GlobalManufacturing - ERP Modernization',
    subtitle: 'Deal Record',
    metadata: {
      dealValue: '$350,000',
      stage: 'Qualification',
      closeDate: 'Feb 28, 2026',
      owner: 'Demo'
    },
    content: `Opportunity Details:

Account: GlobalManufacturing Co
Contact: James Mitchell, Director of IT
Type: New Business
Amount: $350,000
Probability: 30%
Expected Close: February 28, 2026

Description:
ERP system modernization for manufacturing company

Current State:
- Legacy SAP system (15+ years old)
- 120 employees across 3 locations
- Integration challenges with modern tools

Options Under Consideration:
- SAP S/4HANA upgrade
- NetSuite migration
- Microsoft Dynamics 365 migration

Budget: $300-400K
Timeline: Q2 2026 start

Decision Criteria:
- ERP expertise (need to demonstrate)
- Manufacturing industry experience
- Change management capability

Competition:
- SAP consulting partners
- NetSuite implementation partners
- Other generalist consultancies

Next Steps:
- Schedule discovery call
- Understand detailed requirements
- Determine if we need ERP specialist partner

Notes:
Inbound referral from FinServe. Early stage but qualified lead. Will need to assess our ERP capabilities vs partnering with specialist.`
  },

  {
    id: 'sf_008',
    appType: 'salesforce',
    title: 'RetailCo - Digital Commerce Platform',
    subtitle: 'Deal Record - Lost',
    metadata: {
      dealValue: '$280,000',
      stage: 'Closed Lost',
      closeDate: 'Oct 15, 2025',
      owner: 'Nicole Howell'
    },
    content: `Opportunity Details:

Account: RetailCo
Contact: Susan Williams, VP Digital
Type: New Business
Amount: $280,000
Probability: 0% (Closed Lost)
Close Date: October 15, 2025

Description:
E-commerce platform modernization

Reason Lost:
Client chose Shopify Plus implementation partner with deeper e-commerce specialization.

Loss Analysis:
- We were strong on technical architecture
- Weak on e-commerce domain expertise
- Pricing was competitive
- Client wanted proven e-commerce track record

Lessons Learned:
- Need to be selective about opportunities outside our core expertise
- E-commerce requires specific domain knowledge
- Better to pass than win project we're not ideal for

Positive Notes:
- Professional process
- Client appreciated our honesty about fit
- Left door open for infrastructure work in future

Actions:
- Add e-commerce capability gap to skill assessment
- Consider partnership with e-commerce specialist
- Focus on our strengths (cloud, data, enterprise integration)`
  },

  {
    id: 'sf_009',
    appType: 'salesforce',
    title: 'HealthTech - Compliance Platform',
    subtitle: 'Deal Record',
    metadata: {
      dealValue: '$220,000',
      stage: 'Nurture',
      closeDate: 'Mar 31, 2026',
      owner: 'Jessie Montoya'
    },
    content: `Opportunity Details:

Account: HealthTech Solutions
Contact: Dr. Emily Rodriguez, VP Product
Type: New Business
Amount: $220,000
Probability: 25%
Expected Close: March 31, 2026

Description:
HIPAA-compliant data platform for healthcare startup

Requirements:
- HIPAA compliance architecture
- Secure data storage and processing
- Audit logging
- Patient data anonymization
- Integration with EHR systems

Timeline: Not urgent - exploring options
Budget: Approved but flexible on timing

Decision Factors:
- Healthcare compliance expertise (we'd need to partner)
- Security credentials
- References in healthcare vertical

Competition:
- Healthcare-specialized consulting firms
- In-house development

Status:
Early stage nurture. They're doing research, not ready to buy. Keep warm for Q1 2026.

Next Steps:
- Monthly check-in emails
- Share relevant case studies
- Introduce when timing is right

Notes:
Met at CloudTech conference. Interesting opportunity but need healthcare compliance partner. Park for now, revisit in Q1.`
  },

  {
    id: 'sf_010',
    appType: 'salesforce',
    title: 'BrightStart - Startup Advisory',
    subtitle: 'Deal Record',
    metadata: {
      dealValue: '$45,000',
      stage: 'Proposal Sent',
      closeDate: 'Dec 10, 2025',
      owner: 'Isabella Reynolds'
    },
    content: `Opportunity Details:

Account: BrightStart Analytics
Contact: Tom Chen, Founder & CEO
Type: New Business
Amount: $45,000
Probability: 70%
Expected Close: December 10, 2025

Description:
Technology advisory for early-stage startup

Scope:
- Architecture review and recommendations
- Technology stack optimization
- Vendor selection guidance
- Technical hiring strategy
- 6-month advisory retainer

Timeline: January - June 2026
Monthly: $7,500/month

Decision Criteria:
- Startup experience (we have some)
- Flexibility and responsiveness
- Value for money

Competition:
- Other boutique consultancies
- Going without advisor

Next Steps:
- Waiting on feedback from proposal sent Nov 15
- Follow up call scheduled for Nov 21

Notes:
Smaller deal but good for steady recurring revenue. Tom Chen is well-connected in startup community - could lead to referrals. Low effort, high relationship value.`
  }
];
