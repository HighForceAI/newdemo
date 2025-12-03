// Dashboard-specific data
import { Source } from './demo-data';

export interface ActionItem {
  id: string;
  title: string;
  createdAt: string;
  source: Source;
}

export interface Alert {
  id: string;
  level: 'critical' | 'important' | 'opportunity';
  title: string;
  message: string;
  impact: string;
}

// Key Action Items
export const mockActionItems: ActionItem[] = [
  {
    id: 'action_001',
    title: 'ACME SOW revision due Friday - Timeline acceleration to Q1 required for board presentation',
    createdAt: 'Nov 18, 2025',
    source: {
      id: 'src_acme_request',
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
Heidi Sheppard`
    }
  },
  {
    id: 'action_002',
    title: 'NetLogic discovery call tomorrow 9am - $700K deal, largest ever - decide pursue/partner/pass',
    createdAt: 'Nov 19, 2025',
    source: {
      id: 'src_netlogic_prep',
      appType: 'drive',
      title: 'NetLogic Discovery Call - Prep Notes',
      subtitle: 'Google Docs',
      metadata: {
        lastModified: 'Nov 19, 2025',
        owner: 'Hayden Woodburn'
      },
      content: `NETLOGIC DISCOVERY CALL - PREPARATION
November 25, 2025 at 9:00 AM

ATTENDEES
- Isabella Reynolds (COO, NetLogic)
- Tom Richardson (CTO, NetLogic)
- Hayden (Summit Strategy)
- Nicole Howell (Summit Strategy)

OBJECTIVES
1. Understand technical complexity of 3-platform integration
2. Identify capability gaps (do we need specialist partner?)
3. Assess cultural fit and decision-making process
4. Determine pursuit strategy: aggressive/partner/pass

KEY QUESTIONS TO ASK
- What are the biggest pain points with current 3-platform setup?
- What's driving the timeline (why now)?
- Who are the key technical stakeholders?
- What does success look like in 18 months?
- Have you evaluated build in-house vs consulting partner?

DECISION FRAMEWORK
- 90%+ confidence in delivery → Pursue aggressively
- 70-90% confidence → Pursue with integration specialist partner
- <70% confidence → Pass professionally, refer to specialist

COMPETITIVE ADVANTAGE
- Lisa Wang referral (strong endorsement)
- Right-sized vs Big 4 (they rejected Accenture for being too expensive)
- Technical depth in integrations and migrations

RISKS TO ASSESS
- Complexity beyond our current max project size (2x larger)
- 18-month commitment (long resource lock)
- Integration middleware expertise gap

STAKES
This could establish us in M&A integration space OR overextend capabilities. Be honest in assessment.`
    }
  },
  {
    id: 'action_003',
    title: 'Send ACME cloud budget breakdown today - CFO needs $180K Phase 2 detail for approval',
    createdAt: 'Nov 18, 2025',
    source: {
      id: 'src_budget_sheet',
      appType: 'sheets',
      title: 'ACME Project Budget Tracker',
      subtitle: 'Google Sheets',
      metadata: {
        lastModified: 'Nov 18, 2025',
        owner: 'Nicole Howell',
        sheetData: {
          headers: ['Component', 'Amount', 'Timeline', 'Notes'],
          rows: [
            ['AWS Infrastructure Setup', '$60,000', 'Month 3-4', 'VPC, networking, security groups'],
            ['Application Migration', '$70,000', 'Month 3-5', 'Containerization, deployment'],
            ['Security & Compliance', '$30,000', 'Month 4-5', 'IAM, encryption, audit logs'],
            ['Testing & Validation', '$20,000', 'Month 5', 'Performance, security, UAT'],
            ['', '', '', ''],
            ['Phase 2 Total', '$180,000', '3 months', 'Cloud Migration Component']
          ]
        }
      },
      content: ''
    }
  },
  {
    id: 'action_004',
    title: 'Vertex final review Dec 10th - $85K payment trigger, ensure reference commitment',
    createdAt: 'Nov 19, 2025',
    source: {
      id: 'src_vertex_completion',
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

I wanted to touch base on the final deliverables for our cloud migration project. We're extremely pleased with the progress and the December 15th completion date looks solid - actually, you might even finish a few days early at this pace.

For the final review meeting, please prepare:
- Infrastructure architecture documentation
- Migration runbooks
- Disaster recovery procedures
- Team training materials

The executive team has asked me to pass along their appreciation. The project has come in on time and on budget, which is rare in our experience. We'll definitely be providing a reference and would love to explore future projects together.

Final payment ($85K) will be processed on December 15th as agreed.

Thanks again for all the great work.

Brent Soto
CTO, Vertex Systems`
    }
  },
  {
    id: 'action_005',
    title: 'TechStart legal review stalled 5 days - Gentle nudge needed to maintain deal momentum',
    createdAt: 'Nov 20, 2025',
    source: {
      id: 'src_techstart_status',
      appType: 'slack',
      title: '#sales-pipeline',
      subtitle: 'TechStart status discussion',
      metadata: {
        channel: 'sales-pipeline',
        participants: ['Demo', 'Isabella Reynolds'],
        date: 'Nov 20, 2025'
      },
      content: `Hayden  9:15 AM
TechStart deal has been in legal review for 5 days now. David Park said "ready to move forward" on Nov 19 but no contract movement yet.

Isabella Reynolds  9:17 AM
That's normal for legal but worth a friendly check-in. Don't want it to stall during Thanksgiving week.

Hayden  9:18 AM
Good point. I'll send a gentle "happy to answer any questions" email to keep it top of mind.

Isabella Reynolds  9:20 AM
Perfect approach. Not pushy, just helpful.`
    }
  },
  {
    id: 'action_006',
    title: 'CloudTech Summit speaker deadline Dec 1 - Accept or decline, previous speakers avg 15 qualified leads',
    createdAt: 'Nov 10, 2025',
    source: {
      id: 'src_speaking_invite',
      appType: 'gmail',
      title: 'Speaker Invitation - CloudTech Summit 2026',
      subtitle: 'CloudTech Summit',
      metadata: {
        from: 'Events Team <events@cloudtechsummit.com>',
        to: 'Hayden Woodburn <hayden@summitconsulting.com>',
        date: 'Nov 10, 2025 2:20 PM',
        subject: 'Speaker Invitation - CloudTech Summit 2026'
      },
      content: `Dear Hayden,

We're organizing CloudTech Summit 2026 (March 15-17, San Francisco) and would love to have you as a speaker.

Proposed Session: "Enterprise Cloud Migration: Lessons from 50+ Implementations"
45-minute keynote + 15-minute Q&A

Benefits:
- Speaking fee: $5,000
- Exposure to 2,000+ IT leaders
- All expenses covered
- Previous speakers averaged 15 qualified leads

Interested? We need to confirm by December 1st.

Best regards,
CloudTech Summit Events Team`
    }
  }
];

// Urgent Alerts
export const mockAlerts: Alert[] = [
  {
    id: 'alert_001',
    level: 'critical',
    title: 'ACME forecast accuracy risk',
    message: 'Email shows board approval but Salesforce probability still at 75%. Update to 85% to avoid revenue planning error.',
    impact: '$450K deal being underweighted in Q4 forecast'
  },
  {
    id: 'alert_002',
    level: 'critical',
    title: 'Nicole Howell capacity constraint',
    message: 'Mentioned by name in 3 client emails this week (ACME, DataCorp, FinServe). High demand creates retention and allocation risk.',
    impact: 'Key person dependency across multiple high-value opportunities'
  },
  {
    id: 'alert_003',
    level: 'important',
    title: 'DataCorp expansion window closing',
    message: 'Lisa Wang mentioned "future projects" 3x in recent emails. Budget discussions typically freeze mid-December.',
    impact: '$175K Phase 2 opportunity may slip to Q1 if not scoped before year-end'
  },
  {
    id: 'alert_004',
    level: 'opportunity',
    title: 'Referral velocity increasing',
    message: 'NetLogic and GlobalManufacturing both came via referrals within 2 weeks. Pattern suggests Q4 delivery excellence generating Q1 pipeline.',
    impact: 'Referral deals 2.5x larger than cold outbound - prioritize relationship quality'
  },
  {
    id: 'alert_005',
    level: 'opportunity',
    title: 'Vertex early completion leverage',
    message: 'Project finishing 3 days ahead of schedule. Use this as proof point in ACME proposal and request LinkedIn recommendations from Brent Soto.',
    impact: 'Early delivery credibility strengthens $450K ACME close probability'
  }
];
