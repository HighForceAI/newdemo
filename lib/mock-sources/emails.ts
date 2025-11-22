import { Source } from '../demo-data';

// 15 realistic Gmail emails for Summit Strategy Consulting
export const mockEmails: Source[] = [
  {
    id: 'email_001',
    appType: 'gmail',
    title: 'Re: Q4 Digital Transformation Project',
    subtitle: 'Heidi Sheppard - ACME Corp',
    metadata: {
      from: 'Heidi Sheppard <heidi@acmecorp.com>',
      to: 'Hayden Woodburn <hayden@summitconsulting.com>',
      date: 'Nov 18, 2025 2:34 PM',
      subject: 'Re: Q4 Digital Transformation Project'
    },
    content: `Hi Hayden,

Thank you for the comprehensive proposal. The board reviewed it last week and we're very impressed with your approach to our digital transformation initiative.

A few key points we'd like to discuss:

1. Timeline: Can we accelerate Phase 1 to complete by end of Q1 instead of Q2? We have a board presentation in March and would love to show progress.

2. Budget: The $450K estimate is within our approved range. However, we'd like to understand the breakdown for the cloud migration component.

3. Team: Your proposed team structure looks solid. Will Nicole Howell be the lead consultant? We worked with her on the CRM project last year and she was fantastic.

4. Next Steps: Can we schedule a kickoff meeting for the week of December 2nd? I'd like to get the executive team aligned before the holidays.

Looking forward to moving forward with this partnership.

Best regards,
Heidi Sheppard
VP of Digital Strategy
ACME Corporation`
  },

  {
    id: 'email_002',
    appType: 'gmail',
    title: 'Initial Proposal Request',
    subtitle: 'Heidi Sheppard - ACME Corp',
    metadata: {
      from: 'Heidi Sheppard <heidi@acmecorp.com>',
      to: 'Hayden Woodburn <hayden@summitconsulting.com>',
      date: 'Nov 10, 2025 10:15 AM',
      subject: 'Digital Transformation Initiative - Request for Proposal'
    },
    content: `Hi Hayden,

I hope this email finds you well. I'm reaching out regarding a significant digital transformation initiative we're planning for 2026.

ACME Corp is looking to modernize our technology stack and improve operational efficiency. Based on your firm's reputation in cloud migrations and enterprise modernization, we'd like to invite you to submit a proposal.

Project Scope:
- Cloud infrastructure migration (currently on-premise)
- Legacy system replacement
- Data analytics platform implementation
- Change management support

Timeline: Ideally starting Q1 2026, 12-month duration
Budget Range: $400K-$500K

Could we schedule a discovery call next week to discuss our requirements in detail?

Looking forward to hearing from you.

Best,
Heidi Sheppard
VP of Digital Strategy
ACME Corporation`
  },

  {
    id: 'email_003',
    appType: 'gmail',
    title: 'Vertex Project - Final Deliverables',
    subtitle: 'Brent Soto - Vertex Systems',
    metadata: {
      from: 'Brent Soto <brent@vertexsys.com>',
      to: 'William Marquez <william@summitconsulting.com>',
      date: 'Nov 19, 2025 4:22 PM',
      subject: 'Final Deliverables Review - Cloud Migration'
    },
    content: `Hi William,

I wanted to touch base on the final deliverables for our cloud migration project. We're extremely pleased with the progress and the December 15th completion date looks solid.

For the final review meeting, please prepare:
- Infrastructure architecture documentation
- Migration runbooks
- Disaster recovery procedures
- Team training materials

Also, the executive team has asked me to pass along their appreciation. The project has come in on time and on budget, which is rare in our experience. We'll definitely be providing a reference and would love to explore future projects together.

Final payment ($85K) will be processed on December 15th as agreed.

Thanks again for all the great work.

Brent Soto
CTO, Vertex Systems`
  },

  {
    id: 'email_004',
    appType: 'gmail',
    title: 'TechStart - AI Implementation Scope',
    subtitle: 'David Park - TechStart Inc',
    metadata: {
      from: 'David Park <dpark@techstart.io>',
      to: 'Hayden Woodburn <hayden@summitconsulting.com>',
      date: 'Nov 17, 2025 11:05 AM',
      subject: 'AI Implementation - Scope Clarification Needed'
    },
    content: `Hi Hayden,

Thanks for the initial consultation last week. Our team has been discussing the AI implementation project internally and we have a few questions before moving forward.

Specifically, we need clarification on:

1. Data Requirements: How much historical data do we need to provide for the initial model training? We have about 3 years of customer interaction data.

2. Integration: Can your solution integrate with our existing Salesforce instance and customer support platform?

3. Timeline: You mentioned 4-6 months. Can we see a detailed project plan with milestones?

4. Pricing: The $125K estimate - is that inclusive of the first year of support and maintenance?

Our budget is approved and we're targeting a Q1 2026 start. Just want to ensure we're aligned on scope before signing the SOW.

Best,
David Park
Head of Product, TechStart Inc`
  },

  {
    id: 'email_005',
    appType: 'gmail',
    title: 'DataCorp - Success Story Request',
    subtitle: 'Lisa Wang - DataCorp',
    metadata: {
      from: 'Lisa Wang <lwang@datacorp.com>',
      to: 'Hayden Woodburn <hayden@summitconsulting.com>',
      date: 'Nov 16, 2025 9:30 AM',
      subject: 'Reference Request - Analytics Platform Project'
    },
    content: `Hi Hayden,

I hope you're doing well! We've been live with the analytics platform for about a month now and the results have been fantastic. The executive team is thrilled with the insights we're now able to generate.

I'm reaching out because we'd like to feature this as a success story. Would you be open to:

1. A joint case study highlighting the implementation and results?
2. Potential speaking opportunity at our annual user conference in March?
3. Introduction to 2-3 companies in our network who could benefit from similar work?

Also, separately - we're planning a Phase 2 expansion for Q2 2026. Would love to discuss adding predictive analytics capabilities. Budget would be in the $150-200K range.

Let me know your thoughts!

Best,
Lisa Wang
VP Analytics, DataCorp`
  },

  {
    id: 'email_006',
    appType: 'gmail',
    title: 'FinServe - Quarterly Business Review',
    subtitle: 'Jessie Montoya - FinServe Solutions',
    metadata: {
      from: 'Jessie Montoya <jessie@finserve.com>',
      to: 'Hayden Woodburn <hayden@summitconsulting.com>',
      date: 'Nov 15, 2025 3:15 PM',
      subject: 'QBR Scheduling - Q4 2025'
    },
    content: `Hi Hayden,

Time for our quarterly business review! The modernization project we completed in early November has been running smoothly.

Key metrics since go-live:
- System performance improved 45%
- User adoption at 92%
- Zero critical incidents
- Customer satisfaction scores up 23%

I'd like to schedule our QBR for the first or second week of December to review these results and discuss 2026 planning. We're considering expanding the platform to our European operations and want to get your thoughts.

How does your calendar look?

Best,
Jessie Montoya
Director of Technology, FinServe Solutions`
  },

  {
    id: 'email_007',
    appType: 'gmail',
    title: 'Partnership Opportunity - CloudScale',
    subtitle: 'Amanda Foster - CloudScale Partners',
    metadata: {
      from: 'Amanda Foster <afoster@cloudscale.com>',
      to: 'Hayden Woodburn <hayden@summitconsulting.com>',
      date: 'Nov 14, 2025 1:45 PM',
      subject: 'Strategic Partnership Discussion'
    },
    content: `Hi Hayden,

I'm Amanda Foster, VP of Partnerships at CloudScale. We're a cloud cost optimization platform and we're building a network of implementation partners.

I came across Summit Strategy Consulting through a mutual client and was impressed by your cloud migration expertise. I'd love to explore a potential partnership where:

1. We refer cloud migration opportunities to you
2. You recommend CloudScale for cost optimization
3. We provide your clients with preferred pricing (20% discount)
4. Joint marketing opportunities

We currently work with 15+ consulting firms and the model has been very successful for both parties.

Would you be open to a brief call to explore this?

Best regards,
Amanda Foster
VP Partnerships, CloudScale`
  },

  {
    id: 'email_008',
    appType: 'gmail',
    title: 'New Lead - GlobalManufacturing Co',
    subtitle: 'James Mitchell - GlobalManufacturing',
    metadata: {
      from: 'James Mitchell <jmitchell@globalmfg.com>',
      to: 'Hayden Woodburn <hayden@summitconsulting.com>',
      date: 'Nov 13, 2025 10:30 AM',
      subject: 'ERP Modernization Project Inquiry'
    },
    content: `Hello,

I was referred to Summit Strategy Consulting by Jessie Montoya at FinServe Solutions. We're a mid-sized manufacturing company looking to modernize our ERP system.

Current Situation:
- Running on legacy SAP system (15+ years old)
- Integration challenges with modern tools
- Reporting is manual and time-consuming
- Team of 120 people across 3 locations

We're exploring options for either upgrading to SAP S/4HANA or migrating to a cloud-based ERP like NetSuite or Microsoft Dynamics.

Budget: $300-400K
Timeline: Planning to start Q2 2026

Would you be available for an exploratory conversation? Robert spoke very highly of your work.

Thanks,
James Mitchell
Director of IT, GlobalManufacturing Co`
  },

  {
    id: 'email_009',
    appType: 'gmail',
    title: 'Re: Proposal Feedback - TechStart',
    subtitle: 'David Park - TechStart Inc',
    metadata: {
      from: 'David Park <dpark@techstart.io>',
      to: 'Hayden Woodburn <hayden@summitconsulting.com>',
      date: 'Nov 19, 2025 2:50 PM',
      subject: 'Re: AI Implementation Proposal - Moving Forward'
    },
    content: `Hi Hayden,

Thanks for addressing all our questions so thoroughly. The team reviewed the updated proposal and we're ready to move forward.

A few confirmations:
- $125K total cost for implementation + first year support ✓
- 4-6 month timeline with monthly milestones ✓
- Integration with Salesforce and Zendesk ✓
- Quarterly model retraining included ✓

Next steps:
1. Legal review of MSA (should take 1-2 weeks)
2. Kickoff meeting - targeting week of January 6th
3. Initial payment (50% deposit) upon contract signing

I'll keep you posted on legal review progress. Assuming no issues, we should have signed contracts by mid-December.

Excited to get started!

David Park
Head of Product, TechStart Inc`
  },

  {
    id: 'email_010',
    appType: 'gmail',
    title: 'Referral - Enterprise Solutions Needed',
    subtitle: 'Isabella Reynolds - NetLogic Corp',
    metadata: {
      from: 'Isabella Reynolds <isabella@netlogic.com>',
      to: 'Hayden Woodburn <hayden@summitconsulting.com>',
      date: 'Nov 12, 2025 4:10 PM',
      subject: 'Introduction via Lisa Wang (DataCorp)'
    },
    content: `Hi Hayden,

Lisa Wang from DataCorp recommended I reach out to you. We're looking for help with a complex enterprise integration project.

About NetLogic:
- B2B SaaS company, 200 employees
- $50M ARR
- Rapid growth creating technical debt

Challenge:
We've acquired two competitors in the past year and now have three separate platforms that need to be unified. Customer data is fragmented, billing is manual, and reporting is a nightmare.

We need a strategic partner who can help us:
- Design unified architecture
- Plan phased migration approach
- Maintain service continuity during transition
- Train our technical team

Budget: $600-800K
Timeline: 18-month project, starting Q1 2026

This is a complex undertaking and Lisa assured me you have the expertise. Would you be interested in learning more?

Best,
Isabella Reynolds
COO, NetLogic Corp`
  },

  {
    id: 'email_011',
    appType: 'gmail',
    title: 'ACME - Introduction to CTO',
    subtitle: 'Heidi Sheppard - ACME Corp',
    metadata: {
      from: 'Heidi Sheppard <heidi@acmecorp.com>',
      to: 'Hayden Woodburn <hayden@summitconsulting.com>',
      date: 'Nov 8, 2025 11:20 AM',
      subject: 'Introduction to Lisa Park, our CTO'
    },
    content: `Hi Hayden,

Following up on our discovery call yesterday. I wanted to introduce you to Lisa Park, our CTO. Lisa will be the technical evaluator for the digital transformation project.

Lisa - Hayden and I discussed the modernization initiative. I've forwarded you the initial proposal. Please review the technical architecture sections and let me know if you have any concerns or questions.

Hayden - Lisa has deep AWS experience and will want to dive into the cloud migration approach. She's particularly interested in the data warehouse modernization component.

I'm thinking we should have a technical deep-dive call next week with Lisa, Hayden, and perhaps your lead architect?

Let me know what works for both of you.

Best,
Sarah`
  },

  {
    id: 'email_012',
    appType: 'gmail',
    title: 'Vertex - Mid-Project Check-in',
    subtitle: 'Brent Soto - Vertex Systems',
    metadata: {
      from: 'Brent Soto <brent@vertexsys.com>',
      to: 'William Marquez <william@summitconsulting.com>',
      date: 'Oct 28, 2025 3:45 PM',
      subject: 'Project Status - Looking Great'
    },
    content: `Hi William,

Quick note to say the cloud migration is progressing beautifully. We just completed the test environment migration and everything performed better than expected.

Highlights:
- Database migration completed 2 days ahead of schedule
- Performance testing shows 60% improvement in query speed
- Zero data integrity issues
- Team training going smoothly

We're on track for the December 15 completion date. Actually, we might even finish a few days early at this pace.

The executive team is very happy. I'll make sure we're quick with the final payment once we wrap.

Keep up the excellent work!

Michael`
  },

  {
    id: 'email_013',
    appType: 'gmail',
    title: 'Contract Renewal - DataCorp',
    subtitle: 'Lisa Wang - DataCorp',
    metadata: {
      from: 'Lisa Wang <lwang@datacorp.com>',
      to: 'Hayden Woodburn <hayden@summitconsulting.com>',
      date: 'Nov 11, 2025 9:15 AM',
      subject: 'Annual Support Contract Renewal'
    },
    content: `Hi Hayden,

Our annual support contract is up for renewal in January. Given how well the analytics platform has performed, we'd like to renew and actually expand the support scope.

Current: $2K/month for platform support
Proposed: $3.5K/month for platform support + optimization consulting

The additional $1.5K would cover:
- Monthly performance optimization reviews
- Quarterly feature enhancement recommendations
- Priority support (4-hour response time)
- One strategic planning session per quarter

This would be a 12-month commitment ($42K annual value). Thoughts?

Also, separately - I'm serious about that Phase 2 expansion we discussed. Can we schedule time in early December to scope it out?

Best,
Lisa`
  },

  {
    id: 'email_014',
    appType: 'gmail',
    title: 'Summit Team - Q4 Goals Check-in',
    subtitle: 'Internal - Nicole Howell',
    metadata: {
      from: 'Nicole Howell <nicole@summitconsulting.com>',
      to: 'Team <team@summitconsulting.com>',
      date: 'Nov 18, 2025 8:30 AM',
      subject: 'Q4 Goals - We\'re Crushing It!'
    },
    content: `Team,

Quick update on our Q4 goals:

Revenue Target: $1.1M
Current: $505K closed, $683K weighted pipeline
Projection: $1.188M (108% of target!)

This is outstanding work. The ACME opportunity alone, if it closes, would put us at 140% of target.

Key wins this quarter:
- DataCorp project turned into ongoing support contract
- Vertex delivering early and under budget (great for references)
- Strong pipeline going into 2026
- Team utilization healthy at 78%

Let's keep the momentum going through year-end. Great job everyone!

JM`
  },

  {
    id: 'email_015',
    appType: 'gmail',
    title: 'Conference Speaking Opportunity',
    subtitle: 'CloudTech Summit',
    metadata: {
      from: 'Events Team <events@cloudtechsummit.com>',
      to: 'Hayden Woodburn <hayden@summitconsulting.com>',
      date: 'Nov 10, 2025 2:20 PM',
      subject: 'Speaker Invitation - CloudTech Summit 2026'
    },
    content: `Dear Hayden,

We're organizing CloudTech Summit 2026 (March 15-17, San Francisco) and would love to have you as a speaker.

We came across your work on enterprise cloud migrations and think your expertise would be valuable for our audience of 2,000+ IT leaders and practitioners.

Proposed Session:
"Enterprise Cloud Migration: Lessons from 50+ Implementations"
45-minute keynote + 15-minute Q&A

Benefits:
- Speaking fee: $5,000
- Exposure to qualified leads (our attendee list is CEO/CTO level)
- All expenses covered
- Recording distributed to 10K+ summit registrants

Previous speakers have reported significant business development opportunities from our events. Last year's migration track generated an average of 15 qualified leads per speaker.

Interested? We need to confirm speakers by December 1st.

Best regards,
CloudTech Summit Events Team`
  }
];
