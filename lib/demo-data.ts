// Demo data for Summit Strategy Consulting

export interface Source {
  id: string;
  appType: 'gmail' | 'salesforce' | 'slack' | 'drive' | 'github' | 'quickbooks' | 'sheets';
  title: string;
  subtitle?: string;
  content: string;
  metadata?: {
    from?: string;
    to?: string;
    date?: string;
    subject?: string;
    dealValue?: string;
    stage?: string;
    closeDate?: string;
    channel?: string;
    participants?: string[];
    lastModified?: string;
    owner?: string;
  };
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  sources?: Source[];
}

export interface ChatConversation {
  id: string;
  title: string;
  created_at: string;
  messages: ChatMessage[];
}

// Mock Sources
export const mockSources: Record<string, Source> = {
  acme_email_1: {
    id: 'src_001',
    appType: 'gmail',
    title: 'Re: Q4 Digital Transformation Project',
    subtitle: 'Sarah Chen - ACME Corp',
    metadata: {
      from: 'Sarah Chen <schen@acmecorp.com>',
      to: 'Demo <demo@highforce.ai>',
      date: 'Nov 18, 2025 2:34 PM',
      subject: 'Re: Q4 Digital Transformation Project'
    },
    content: `Hi Demo,

Thank you for the comprehensive proposal. The board reviewed it last week and we're very impressed with your approach to our digital transformation initiative.

A few key points we'd like to discuss:

1. Timeline: Can we accelerate Phase 1 to complete by end of Q1 instead of Q2? We have a board presentation in March and would love to show progress.

2. Budget: The $450K estimate is within our approved range. However, we'd like to understand the breakdown for the cloud migration component.

3. Team: Your proposed team structure looks solid. Will Jennifer Martinez be the lead consultant? We worked with her on the CRM project last year and she was fantastic.

4. Next Steps: Can we schedule a kickoff meeting for the week of December 2nd? I'd like to get the executive team aligned before the holidays.

Looking forward to moving forward with this partnership.

Best regards,
Sarah Chen
VP of Digital Strategy
ACME Corporation`
  },

  acme_deal: {
    id: 'src_002',
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
Contact: Sarah Chen, VP of Digital Strategy
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
- Sarah Chen (Champion)
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
Sarah mentioned board approval is likely but wants to see Phase 1 accelerated. Need to revise timeline and present updated proposal.`
  },

  team_slack: {
    id: 'src_003',
    appType: 'slack',
    title: '#client-acme',
    subtitle: 'Team discussion',
    metadata: {
      channel: 'client-acme',
      participants: ['Demo', 'Jennifer Martinez', 'Alex Kumar'],
      date: 'Nov 19, 2025'
    },
    content: `Jennifer Martinez  11:24 AM
Hey team - just got off the call with Sarah Chen from ACME. They're ready to move forward! 🎉

Demo  11:25 AM
That's awesome! What's the timeline looking like?

Jennifer Martinez  11:26 AM
They want Phase 1 done by end of Q1. That's aggressive but doable if we staff it properly.

Alex Kumar  11:28 AM
I can free up bandwidth in January. The Vertex project wraps up Dec 15.

Demo  11:30 AM
Perfect. Let me update the SOW and send it over by EOD. Sarah wants a kickoff meeting first week of December.

Jennifer Martinez  11:32 AM
Sounds good. Also heads up - they specifically asked for me to lead based on the CRM project. Hope that works with everyone's schedule?

Demo  11:33 AM
Absolutely, you've got the relationship. Let's make this one a reference account.

Alex Kumar  11:35 AM
+1. I'll start prepping the cloud migration assessment.`
  },

  proposal_drive: {
    id: 'src_004',
    appType: 'drive',
    title: 'ACME Digital Transformation - Proposal v3.2',
    subtitle: 'Google Docs',
    metadata: {
      lastModified: 'Nov 17, 2025',
      owner: 'Demo'
    },
    content: `SUMMIT STRATEGY CONSULTING
Digital Transformation Proposal

CLIENT: ACME Corporation
PREPARED FOR: Sarah Chen, VP of Digital Strategy
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
Lead Consultant: Jennifer Martinez (AWS Certified Solutions Architect)
Cloud Engineer: Alex Kumar (10+ years infrastructure experience)
Data Architect: Maria Santos
Change Management: Robert Kim

EXPECTED OUTCOMES
- 40% reduction in infrastructure costs
- 60% improvement in system performance
- Enhanced security and compliance posture
- Scalable platform for future growth

We're excited about the opportunity to partner with ACME Corporation on this transformative initiative.`
  },

  budget_sheets: {
    id: 'src_005',
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
    content: '' // Will be rendered as table
  },

  acme_email_2: {
    id: 'src_006',
    appType: 'gmail',
    title: 'Initial Proposal Discussion',
    subtitle: 'Sarah Chen - ACME Corp',
    metadata: {
      from: 'Sarah Chen <schen@acmecorp.com>',
      to: 'Demo <demo@highforce.ai>',
      date: 'Nov 10, 2025 10:15 AM',
      subject: 'Digital Transformation Initiative - Request for Proposal'
    },
    content: `Hi Demo,

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
Sarah Chen
VP of Digital Strategy
ACME Corporation`
  },

  team_slack_2: {
    id: 'src_007',
    appType: 'slack',
    title: '#sales-pipeline',
    subtitle: 'Sales team discussion',
    metadata: {
      channel: 'sales-pipeline',
      participants: ['Demo', 'Jennifer Martinez', 'Robert Kim'],
      date: 'Nov 12, 2025'
    },
    content: `Demo  2:15 PM
Just had a great discovery call with ACME Corp. They're serious about this transformation project.

Jennifer Martinez  2:17 PM
Nice! What's the size we're looking at?

Demo  2:18 PM
They mentioned $400-500K budget range. 12-month engagement starting Q1.

Robert Kim  2:20 PM
That's perfect timing. We have capacity in Q1. What's the competition look like?

Demo  2:22 PM
They're talking to Deloitte and McKinsey. But I think we have an advantage - they specifically mentioned liking our approach on similar projects.

Jennifer Martinez  2:25 PM
I worked with their CTO on a CRM project 2 years ago. Should I reach out?

Demo  2:26 PM
Absolutely. Personal connection could be huge here. Let's make this one count.`
  }
};

// Mock Chat Conversations
export const mockChatConversations: ChatConversation[] = [
  {
    id: 'chat_001',
    title: 'ACME Corp project status',
    created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    messages: [
      {
        role: 'user',
        content: 'What\'s the status of the ACME Corp deal?'
      },
      {
        role: 'assistant',
        content: `I've analyzed the ACME Corp opportunity across Gmail, Salesforce, Slack, and Google Drive. Here's what I found:

---

## Deal Overview

The ACME Corporation Digital Transformation project is progressing well with strong buying signals.

**Key Metrics:**
- Deal Value: $450,000
- Stage: Proposal Sent
- Probability: 75%
- Expected Close: December 31, 2025

---

## Recent Client Activity

Sarah Chen (VP Digital Strategy) responded to your proposal on November 18th. The board has reviewed and approved moving forward. She specifically mentioned being "very impressed with your approach."

**Client Requirements:**
- Accelerate Phase 1 timeline to Q1 instead of Q2 (driven by March board presentation)
- Request detailed breakdown for the $180K cloud migration component
- Preference for Jennifer Martinez as lead consultant based on previous CRM project success
- Kickoff meeting during week of December 2nd

---

## Team Readiness

Your team discussed this in the client-acme Slack channel on November 19th:
- Jennifer Martinez confirmed availability to lead
- Alex Kumar available starting January after Vertex project completes
- Team consensus to prioritize this as a reference account opportunity

---

## Action Items

**Immediate Next Steps:**
1. Update SOW with revised Phase 1 timeline
2. Prepare detailed cloud migration budget breakdown
3. Schedule executive kickoff for early December

---

## Analysis

**Why This Deal Is Strong:**
The combination of board approval (email), high probability score (Salesforce), confirmed team capacity (Slack), and detailed budget preparation (Sheets) indicates a well-qualified opportunity. The client's specific requests show active engagement rather than passive interest.

**Timeline Urgency:**
The Q1 acceleration request suggests internal pressure to show progress. This creates urgency but also increases close probability.

**Competitive Position:**
Salesforce notes show McKinsey Digital eliminated, Deloitte still competing. Your team's prior successful delivery with Jennifer gives you relationship advantage.

**Revenue Impact:**
This deal would push Q4 revenue to 140% of target.`,
        sources: [
          mockSources.acme_email_1,
          mockSources.acme_email_2,
          mockSources.acme_deal,
          mockSources.team_slack,
          mockSources.team_slack_2,
          mockSources.proposal_drive,
          mockSources.budget_sheets
        ]
      }
    ]
  },
  {
    id: 'chat_002',
    title: 'Q4 Revenue Analysis',
    created_at: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    messages: [
      {
        role: 'user',
        content: 'Show me Q4 revenue projections'
      },
      {
        role: 'assistant',
        content: `Here's your Q4 2025 revenue analysis:

---

## Current Pipeline

- ACME Corp Digital Transformation: $450K (75% probability)
- Vertex Systems Cloud Migration: $280K (90% probability - closing Dec 15)
- TechStart AI Implementation: $125K (60% probability)

**Weighted Revenue**: $683K

---

## Closed Deals (Oct-Nov)

- DataCorp Analytics: $320K
- FinServe Modernization: $185K

---

## Q4 Performance

**Total Revenue**: $1.188M (target: $1.1M)

You're currently 8% above target, with strong momentum heading into year-end. The ACME deal closing in December would put Q4 at 40% above target.`,
        sources: [
          mockSources.acme_deal,
          mockSources.budget_sheets
        ]
      }
    ]
  },
  {
    id: 'chat_003',
    title: 'Client Meeting Notes',
    created_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    messages: [
      {
        role: 'user',
        content: 'Summarize recent client communications'
      },
      {
        role: 'assistant',
        content: `Recent client activity summary:

---

## High Priority

**ACME Corp**: Sarah Chen responded positively to proposal. Wants kickoff meeting Dec 2nd week. Action needed: Update SOW with accelerated timeline.

---

## Active Projects

**Vertex Systems**: Project wrapping Dec 15 per team Slack. Alex Kumar freeing up for new assignments.

---

## Key Opportunities

The ACME opportunity shows strong buying signals with board approval and specific next steps identified. Timeline acceleration request suggests urgency and commitment.`,
        sources: [
          mockSources.acme_email_1,
          mockSources.team_slack,
          mockSources.acme_deal
        ]
      }
    ]
  }
];

// Daily Reports
export interface DailyReport {
  id: string;
  type: 'client_relationships' | 'financial_overview' | 'team_projects';
  title: string;
  icon: string;
  summary: string;
  content: string;
  sources: Source[];
  generated_date: string;
}

export const mockDailyReports: Record<string, DailyReport[]> = {
  '2025-11-20': [
    {
      id: 'report_001',
      type: 'client_relationships',
      title: 'Client Relationships & Pipeline',
      icon: '',
      summary: 'ACME Corp deal advancing to final stages with board approval and timeline acceleration request. Client sentiment analysis shows 83% positive interactions across 47 total communications. Sarah Chen specifically requested Jennifer Martinez as lead consultant based on prior CRM project success. Competitive intelligence indicates McKinsey Digital eliminated, positioning improved against Deloitte. Team alignment confirmed via Slack with resource capacity validated for Q1 2026 start.',
      content: `# Daily Client Intelligence Report
**November 20, 2025**

I've analyzed 47 client interactions across Gmail, Salesforce, and Slack to provide insights on your client relationships and sales pipeline.

---

## Pipeline Highlights

**ACME Corporation - Digital Transformation ($450K)**
- **Status**: Proposal sent, board approved, 75% probability
- **Movement**: Client responded with timeline acceleration request
- **Next Action**: SOW revision needed by end of week
- **Risk Level**: Low - highly engaged client with budget approval

**Key Insight**: Sarah Chen's email mentions March board presentation as driver for Q1 acceleration. This creates urgency but also validates commitment.

---

## Client Communication Analysis

**Email Activity (Last 24 Hours)**:
- 12 client emails received
- 8 responses sent
- Average response time: 2.3 hours
- Sentiment: 83% positive

**Notable Interactions**:
- ACME Corp: Positive proposal feedback, specific next steps requested
- Vertex Systems: Project completion confirmed for Dec 15
- TechStart: Follow-up on AI implementation scope

---

## Team Discussions

Your team had 3 client-related Slack conversations:
- #client-acme: Jennifer Martinez confirmed as lead, team aligned on strategy
- #sales-pipeline: ACME deal positioning discussed, competitive analysis
- #delivery: Vertex project wrap-up planning

**Cross-Platform Insight**: Email shows client urgency (ACME), Salesforce confirms high probability, Slack demonstrates team readiness. All signals aligned for successful close.

---

## Action Items

1. Update ACME SOW with Q1 timeline revision
2. Schedule December kickoff meeting with Sarah Chen
3. Prepare cloud migration budget breakdown
4. Follow up with TechStart on scope clarification

---

## Competitive Intelligence

Salesforce notes indicate McKinsey Digital eliminated from ACME opportunity. Deloitte still competing. Your advantage: existing relationship through Jennifer Martinez and tailored approach.`,
      sources: [
        mockSources.acme_email_1,
        mockSources.acme_email_2,
        mockSources.acme_deal,
        mockSources.team_slack,
        mockSources.team_slack_2,
        mockSources.proposal_drive
      ],
      generated_date: '2025-11-20T06:00:00Z'
    },
    {
      id: 'report_002',
      type: 'financial_overview',
      title: 'Financial Overview',
      icon: '',
      summary: 'Q4 revenue performance tracking 8% above target at $1.188M projected versus $1.1M goal. Active pipeline shows $683K weighted value across three major opportunities with ACME Corp representing largest pending deal at $450K. Cash flow analysis reveals strong operating position at $502K net with accounts receivable of $156K expected within 30 days. Vertex Systems final payment of $85K scheduled for December 15th. Revenue recognition schedule for ACME project structured across 12 months with Phase 1 deposit representing initial $37.5K.',
      content: `# Daily Financial Summary
**November 20, 2025**

Analysis of revenue, pipeline, and financial health based on QuickBooks and Salesforce data.

---

## Revenue Performance

**Q4 2025 Status**:
- Target: $1.1M
- Actual (Closed): $505K
- Pipeline (Weighted): $683K
- **Projected Total**: $1.188M (108% of target)

**Recent Closures**:
- DataCorp Analytics: $320K (Closed Oct 28)
- FinServe Modernization: $185K (Closed Nov 12)

---

## Active Pipeline

**High Probability Deals**:
- ACME Corp Digital Transformation: $450K (75% prob) - Expected close Dec 31
- Vertex Systems Cloud Migration: $280K (90% prob) - Closing Dec 15
- TechStart AI Implementation: $125K (60% prob) - Q1 2026

**Weighted Pipeline Value**: $683K

---

## Cash Flow Analysis

**Current Position**:
- Operating Account Balance: $428K
- Accounts Receivable (Outstanding): $156K
- Accounts Payable (Due): $82K
- **Net Position**: $502K

**Revenue Recognition (Next 30 Days)**:
- Vertex final payment: $85K (Dec 15)
- ACME deposit (if closed): $37.5K (Dec 31)
- Monthly retainers: $42K

---

## Budget Utilization

The ACME project budget breakdown shows $450K total across 4 phases with detailed cost allocation. Phase 1 represents 16.7% of total project value with 2-month timeline.

**Resource Cost Planning**: Team assignments align with revenue projections. Jennifer Martinez and Alex Kumar allocation supports ACME delivery without impacting existing commitments.`,
      sources: [
        mockSources.acme_deal,
        mockSources.budget_sheets
      ],
      generated_date: '2025-11-20T06:00:00Z'
    },
    {
      id: 'report_003',
      type: 'team_projects',
      title: 'Team & Project Updates',
      icon: '',
      summary: 'Vertex Systems cloud migration project remains on schedule for December 15th completion freeing up Alex Kumar for January assignments. ACME Corp staffing plan confirmed with Jennifer Martinez as lead consultant leveraging existing client relationship from prior CRM implementation. Current team utilization at 78% provides capacity buffer for new Q1 engagements. Internal Slack activity shows strong cross-team alignment on ACME opportunity with no resource conflicts identified. Upcoming week includes Vertex final testing kickoff and ACME SOW revision with executive kickoff proposed for early December.',
      content: `# Team & Project Status
**November 20, 2025**

Daily summary of team activities, project progress, and resource allocation based on Slack and email communications.

---

## Active Projects

**Vertex Systems - Cloud Migration**:
- Status: Final phase, on track
- Completion: December 15, 2025
- Team: Alex Kumar (lead), Maria Santos
- Next Milestone: Final testing week of Dec 8

**Key Update**: Team Slack confirms Vertex wrapping on schedule, freeing up Alex Kumar for January assignments.

---

## Team Capacity Analysis

**Available Starting January 2026**:
- Alex Kumar: Full availability (Vertex complete)
- Jennifer Martinez: 50% capacity (can lead new project)
- Maria Santos: Continues on DataCorp support (20% capacity)

**ACME Project Staffing**:
- Lead: Jennifer Martinez (client requested, relationship exists)
- Cloud Engineering: Alex Kumar (available Jan 6)
- Support: To be assigned

**Capacity Assessment**: Team can support ACME engagement without additional hiring. Current utilization at 78%, target is 80-85%.

---

## Internal Collaboration

**Slack Activity Summary**:
- #client-acme: 12 messages - Deal strategy alignment
- #sales-pipeline: 8 messages - Pipeline review and forecasting
- #delivery: 15 messages - Vertex completion planning

**Cross-Team Insight**: Sales and delivery teams aligned on ACME opportunity. No resource conflicts identified. Jennifer's prior relationship with ACME creates confidence in successful delivery.

---

## Upcoming Commitments

**This Week**:
- Vertex final testing kickoff
- ACME SOW revision
- TechStart scope clarification call

**Next Week**:
- ACME executive kickoff (proposed)
- Vertex final delivery
- Q4 pipeline review meeting`,
      sources: [
        mockSources.team_slack,
        mockSources.team_slack_2
      ],
      generated_date: '2025-11-20T06:00:00Z'
    }
  ]
};

// Export for easy access
export const getDemoConversation = (chatId: string): ChatConversation | null => {
  return mockChatConversations.find(c => c.id === chatId) || null;
};

export const getDailyReports = (dateString: string): DailyReport[] => {
  // Always return the Nov 20 reports for any date (demo purposes)
  // Update the generated_date to match the selected date
  const baseReports = mockDailyReports['2025-11-20'] || [];

  return baseReports.map(report => ({
    ...report,
    generated_date: dateString + 'T06:00:00Z',
    content: report.content.replace('November 20, 2025', new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }))
  }));
};
