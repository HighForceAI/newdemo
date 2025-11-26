// Demo data for Summit Strategy Consulting
import { mockEmails } from './mock-sources/emails';
import { mockSlackMessages } from './mock-sources/slack';
import { mockSalesforceDeals } from './mock-sources/salesforce';
import { mockDriveDocs } from './mock-sources/drive';
import { mockSheets } from './mock-sources/sheets';
import { mockQuickBooksRecords } from './mock-sources/quickbooks';

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
    sheetData?: {
      headers: string[];
      rows: string[][];
    };
    // QuickBooks-specific metadata
    type?: string;
    amount?: string;
    status?: string;
    dueDate?: string;
    paidDate?: string;
    customer?: string;
    vendor?: string;
    employee?: string;
    period?: string;
    netIncome?: string;
    revenue?: string;
    totalAR?: string;
    overdueAmount?: string;
    totalRevenue?: string;
    since?: string;
    accountBalance?: string;
    totalLiability?: string;
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
    subtitle: 'Heidi Sheppard - ACME Corp',
    metadata: {
      from: 'Heidi Sheppard <schen@acmecorp.com>',
      to: 'Demo <demo@highforce.ai>',
      date: 'Nov 18, 2025 2:34 PM',
      subject: 'Re: Q4 Digital Transformation Project'
    },
    content: `Hi Demo,

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
Sarah mentioned board approval is likely but wants to see Phase 1 accelerated. Need to revise timeline and present updated proposal.`
  },

  team_slack: {
    id: 'src_003',
    appType: 'slack',
    title: '#client-acme',
    subtitle: 'Team discussion',
    metadata: {
      channel: 'client-acme',
      participants: ['Demo', 'Nicole Howell', 'William Marquez'],
      date: 'Nov 19, 2025'
    },
    content: `Nicole Howell  11:24 AM
Hey team - just got off the call with Heidi Sheppard from ACME. They're ready to move forward! 🎉

Hayden  11:25 AM
That's awesome! What's the timeline looking like?

Nicole Howell  11:26 AM
They want Phase 1 done by end of Q1. That's aggressive but doable if we staff it properly.

William Marquez  11:28 AM
I can free up bandwidth in January. The Vertex project wraps up Dec 15.

Hayden  11:30 AM
Perfect. Let me update the SOW and send it over by EOD. Sarah wants a kickoff meeting first week of December.

Nicole Howell  11:32 AM
Sounds good. Also heads up - they specifically asked for me to lead based on the CRM project. Hope that works with everyone's schedule?

Hayden  11:33 AM
Absolutely, you've got the relationship. Let's make this one a reference account.

William Marquez  11:35 AM
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
    subtitle: 'Heidi Sheppard - ACME Corp',
    metadata: {
      from: 'Heidi Sheppard <schen@acmecorp.com>',
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
Heidi Sheppard
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
      participants: ['Demo', 'Nicole Howell', 'Jessie Montoya'],
      date: 'Nov 12, 2025'
    },
    content: `Hayden  2:15 PM
Just had a great discovery call with ACME Corp. They're serious about this transformation project.

Nicole Howell  2:17 PM
Nice! What's the size we're looking at?

Hayden  2:18 PM
They mentioned $400-500K budget range. 12-month engagement starting Q1.

Jessie Montoya  2:20 PM
That's perfect timing. We have capacity in Q1. What's the competition look like?

Hayden  2:22 PM
They're talking to Deloitte and McKinsey. But I think we have an advantage - they specifically mentioned liking our approach on similar projects.

Nicole Howell  2:25 PM
I worked with their CTO on a CRM project 2 years ago. Should I reach out?

Hayden  2:26 PM
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

Heidi Sheppard (VP Digital Strategy) responded to your proposal on November 18th. The board has reviewed and approved moving forward. She specifically mentioned being "very impressed with your approach."

**Client Requirements:**
- Accelerate Phase 1 timeline to Q1 instead of Q2 (driven by March board presentation)
- Request detailed breakdown for the $180K cloud migration component
- Preference for Nicole Howell as lead consultant based on previous CRM project success
- Kickoff meeting during week of December 2nd

---

## Team Readiness

Your team discussed this in the client-acme Slack channel on November 19th:
- Nicole Howell confirmed availability to lead
- William Marquez available starting January after Vertex project completes
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

**ACME Corp**: Heidi Sheppard responded positively to proposal. Wants kickoff meeting Dec 2nd week. Action needed: Update SOW with accelerated timeline.

---

## Active Projects

**Vertex Systems**: Project wrapping Dec 15 per team Slack. William Marquez freeing up for new assignments.

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
  },
  {
    id: 'chat_004',
    title: 'NetLogic team coordination',
    created_at: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    messages: [
      {
        role: 'user',
        content: 'Are we properly coordinating between sales and delivery on the NetLogic opportunity?'
      },
      {
        role: 'assistant',
        content: `I've analyzed coordination on the NetLogic opportunity ($700K, your largest potential deal) across Slack, Gmail, Drive, and Salesforce.

---

## Coordination Status: Partially Effective

You're coordinating well on **commercial aspects** (budget, timeline, relationship) but under-coordinating on **technical capability assessment**. The November 25th discovery call is in 5 days, and there's no evidence of delivery team validation happening.

---

## What's Working

**Gmail:** Isabella Reynolds' (NetLogic COO) referral from Lisa Wang (DataCorp) shows strong relationship foundation. Lisa said *"I assured her you have the expertise"* - putting her 95/100 customer health score at stake.

**Drive:** Discovery call notes properly identify the challenge: consolidating three platforms (Ruby/Rails, Node.js, Python/Django) post-acquisition. Attendees include Hayden and Nicole Howell.

**Salesforce:** Opportunity tracked at $700K, 40% probability. Notes show Big 4 eliminated (too expensive), positioning you well.

**Slack:** When Hayden posted about NetLogic, Nicole immediately responded asking about size and timeline - good initial coordination.

---

## Critical Gap: Capability Assessment

Your Drive notes list *"Identify capability gaps (do we need specialist partner?)"* as a discovery call objective. **The problem:** This assessment should happen BEFORE the client call, not during it.

**Technical Complexity:**
- Three different tech stacks + databases to unify
- Customer data fragmentation across all platforms
- Live service continuity required during migration
- $700K over 18 months = thin margins if underestimated

**Pattern Recognition:**
You lost RetailCo ($280K) because they wanted proven e-commerce expertise. Salesforce notes: *"Better to pass than win project we're not ideal for."* NetLogic is similar - M&A integration isn't your core strength (cloud migration is).

---

## The Referral Pressure Dynamic

Lisa Wang's referral creates subtle pressure to say yes. QuickBooks shows DataCorp at $362K lifetime value with $175K Phase 2 pending. Her November email mentioned introducing you to 2-3 companies - NetLogic is first. Success here opens more $700K referrals. Failure shuts down the engine and risks the DataCorp relationship.

Your team might feel this pressure without discussing it explicitly.

---

## Team Capacity vs Capability

**Nicole Howell:** Dashboard alert shows capacity constraint - mentioned by name in 3 client emails. Already allocated to ACME (38%) and requested for NetLogic. If both close, she's over-allocated.

**William Marquez:** Vertex ends Dec 15, committed to ACME Jan 6. Strong technical skills but no M&A integration specialty.

**Isabella Reynolds:** Available (50% internal time) but ML/AI focused, not integration architecture.

**The Reality:** You have hours (78% utilization) but potentially lack M&A integration expertise. Question isn't "do we have time?" but "do we have the right skills and are we being honest about it?"

---

## Actions Required This Week

**Before Nov 25 Discovery Call:**

1. **Technical Workshop** - Hayden, Nicole, William, Isabella
   - Honest capability assessment: Can we deliver at 90%+ confidence?
   - Decision: Direct delivery, partner model, or professional decline

2. **Partner Research** (if needed)
   - Identify integration specialists for co-delivery
   - Have partnership option ready for call

3. **Reference Validation**
   - Do you have M&A integration references?
   - If not, signals capability gap

**The Missing Coordination:**
No Slack thread shows delivery team pressure-testing the technical approach. Compare to ACME: #client-acme channel had Nicole confirming availability, William committing to Jan 6 start, team consensus. NetLogic needs same validation depth.

---

## Bottom Line

**Status:** Coordinating on sales but not delivery readiness.

**Risk:** Walking into client call uncertain about delivery approach, with referral pressure influencing objectivity.

**Fix:** 2-hour technical workshop this week. Make build-vs-partner-vs-pass decision before the client sees you. Lisa Wang's credibility (and yours) depends on honest capability assessment, not optimistic assumptions.`,
        sources: [
          mockEmails[9],   // NetLogic referral email
          mockDriveDocs[3], // NetLogic Discovery Call Notes
          mockSalesforceDeals[5], // NetLogic deal
          mockSlackMessages[1],  // Sales pipeline coordination
          mockSheets[2]    // Team utilization
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
  sourceCount?: string;
}

export const mockDailyReports: Record<string, DailyReport[]> = {
  '2025-11-20': [
    {
      id: 'report_001',
      type: 'client_relationships',
      title: 'Client Relationships & Pipeline',
      icon: '',
      sourceCount: '8 emails • 4 Slack channels • 3 deals • 1 proposal • 1 budget sheet • 3 QuickBooks records',
      summary: 'ACME Corp deal showing strong board approval with $112.5K deposit invoice generated - QuickBooks payment tracking confirms financial commitment beyond verbal interest. NetLogic referral from DataCorp (lifetime value $1.26M per QB customer record) represents $700K opportunity. Client sentiment trending 83% positive with referral flywheel generating 2.5x larger deals. QuickBooks AR aging shows healthy 18-day average payment cycle. Two expansion opportunities totaling $400K with DataCorp recurring revenue validated in accounting system. Key insight: invoice generation preceding contract signature predicts deal velocity.',
      content: `## Executive Summary

Your pipeline is tracking at **108% of Q4 target**, with $1.188M projected versus the $1.1M goal. The ACME Corp opportunity has reached a critical inflection point - board approval has been confirmed and they've requested an accelerated timeline. Based on cross-platform analysis of email language, Slack team readiness, and budget preparation, the Salesforce probability estimate of 75% should be updated to **85%**.

Beyond active deals, expansion opportunities are emerging from your existing client base. DataCorp is proposing a Phase 2 expansion worth $175K, and FinServe has signaled interest in European operations rollout estimated at $225K. Together, these represent **$400K in low-risk revenue** from accounts where you've already proven value.

The most significant strategic insight: your referral engine is working. Deals sourced from satisfied clients are averaging **2.5x larger** than cold outbound opportunities and closing at a 90% rate compared to 45% for non-referred leads.

---

## ACME Corporation - The Full Story

November 18th brought a game-changing email from Heidi Sheppard at ACME Corp. On the surface, it's a positive response to your proposal. But analyzing the language reveals this is much more significant than standard sales progress.

Sarah wrote: *"The board reviewed it last week and we're very impressed with your approach to our digital transformation initiative."* Board reviews at the proposal stage are rare in enterprise deals - they typically happen after verbal commitments are made internally. Getting board time means:
- Budget is definitively allocated (not pending approval)
- Sarah has strong internal influence
- Project is strategic priority with board-level visibility

**The Four Requests - What They Mean:**

Sarah made four specific asks in her email. First, she wants to **accelerate Phase 1 completion to Q1** instead of Q2. The driver is a March board presentation, creating a hard external deadline. This isn't a negotiable timeline - it's a forcing function that actually works in your favor because compressed timelines increase close probability.

Second, she asks for a detailed breakdown of the **$180K cloud migration component**. This tells us she's building an internal business case, likely for CFO approval of the payment schedule. Your Google Sheets budget tracker already contains exactly this breakdown.

Third, and perhaps most significantly, she asks if **Nicole Howell will be the lead consultant**, referencing their collaboration on last year's CRM project where Jennifer "was fantastic." Named person requests based on prior successful delivery eliminate the primary risk factor in enterprise deals - execution capability doubt.

Fourth, she wants to schedule a kickoff meeting for the **week of December 2nd**. This is two weeks before the Christmas holiday freeze. The aggressiveness of this timing confirms their urgency to get contracts signed before year-end.

**What Your Systems Show:**

Your Salesforce record shows this deal at 75% probability in "Proposal Sent" stage. But the cross-platform data tells a different story. The Slack conversation in #client-acme from November 19th shows Jennifer has confirmed her availability to lead, and William Marquez has committed to a January 6th start date that perfectly aligns with the Vertex project completion. Your budget sheet has the detailed breakdown they've requested. All the pieces are in place.

The email language, timeline urgency, and named consultant request together indicate a **verbal commitment**. Update the Salesforce probability to 85% and move the stage to "Negotiation."

On competitive positioning, your Salesforce notes reveal that McKinsey Digital was eliminated in October - their proposal came in at over $800K with feedback that their approach felt "too corporate and impersonal." Deloitte is still competing, but you have Jennifer's proven delivery history with this client and your boutique firm's agility versus large firm bureaucracy.

---

## Financial Commitment Signals - QuickBooks Intelligence

A critical advancement in your pipeline analysis comes from integrating QuickBooks financial data with sales activity. Traditional CRM tracking shows ACME at "Proposal Sent" stage, but your accounting system reveals something more significant: **Invoice #1037 for $112,500 was generated on October 16th** - a full month before the formal proposal was even sent.

This isn't standard procedure. Invoices preceding signed contracts indicate internal confidence about deal closure. Your finance team doesn't generate invoices speculatively - this suggests back-channel confirmation or procurement directives that didn't flow through normal Salesforce tracking.

The invoice is now 5 days overdue, but QuickBooks notes show Heidi Sheppard confirmed payment is processing through their AP system. The delay isn't concern - it's bureaucracy. The fact that an invoice exists at all transforms this from a "proposal sent" opportunity to a "payment processing" reality.

**DataCorp's Financial Footprint:**
Your QuickBooks customer record for DataCorp tells the complete monetization story. The initial project generated $320K in four milestone payments, all received on time or early. This converted to a $2K monthly support contract on autopay via ACH - zero payment friction, never late. The customer record shows a lifetime value of $362K with Phase 2 expansion budgeted at $175K.

But the most valuable metric in that customer record isn't revenue - it's the customer health score of **95/100** calculated from payment history, communication responsiveness, and expansion activity. This quantifies what sales calls "strong relationship" into a concrete leading indicator.

The QuickBooks accounts receivable aging report reveals operational excellence that supports aggressive growth. Your average collection cycle is **18 days against Net 30 terms** - clients are paying 12 days early on average. Only one invoice is currently outstanding (ACME's $112.5K), and it has documented payment confirmation. This collection efficiency means revenue projections convert to cash with minimal delay or writeoff risk.

---

## Client Expansion - The Hidden Revenue Stream

The most valuable insight from analyzing your client communications isn't about new deals - it's about what's happening with existing accounts. The DataCorp relationship demonstrates your real business model in action, and QuickBooks validates the financial execution.

The journey started when you delivered their analytics platform between July and October for $320K. The project exceeded expectations, reducing their reporting time from 40 hours per month to just 2 hours. In November, this success converted into an ongoing support contract at $2K per month. Then on November 16th, Lisa Wang sent an email proposing Phase 2 expansion focused on predictive analytics, with a budget of $150-200K already approved.

But the value extends beyond direct revenue. Lisa has become an active advocate - offering to do a joint case study, inviting you to speak at their user conference, and providing referrals. That referral to NetLogic represents a potential $700K deal.

**The Total Impact:** $320K initial + $24K annual support + $175K Phase 2 + $700K referral value = **$1.26M from a single client acquisition**. This 4x multiplier on the original project represents your actual business model - not transactional project work, but building client ecosystems.

FinServe is following the same trajectory. Their modernization project delivered in early November produced exceptional results: 45% performance improvement, 92% user adoption, zero critical incidents. Jessie Montoya's November 15th email scheduling the quarterly business review specifically mentions wanting to "discuss 2026 planning" with focus on European operations expansion. Based on the original US project scope of $185K, a European rollout would likely run $200-250K given GDPR compliance, multi-language support, and multiple instance requirements.

---

## New Opportunities - Referral Intelligence

The NetLogic opportunity represents something significant - not just the $700K potential value, but what it reveals about your market position. On November 12th, Isabella Reynolds, the COO of NetLogic Corp, sent an email introduction facilitated by Lisa Wang from DataCorp. The key phrase was *"Lisa assured me you have the expertise."*

Lisa Wang's endorsement carries unusual weight. She's selective about referrals because her reputation is on the line. You delivered $2M in identified opportunities for DataCorp through the analytics platform - she's seen your work quality firsthand. When she tells another COO that you have the expertise for a complex $700K integration project, she's putting her credibility behind that statement.

The NetLogic challenge is post-acquisition integration. They've acquired two competitors in the past year and now operate three separate platforms with different technology stacks - Ruby/Rails, Node.js, and Python/Django, each with different databases. Customer data is fragmented, billing is completely manual, and reporting is nearly impossible. They need to consolidate these into a single unified system while maintaining service continuity.

The budget of **$600-800K over 18 months** is already approved at the board level. They've talked to Big 4 firms but found them too expensive and bureaucratic. Your discovery call is scheduled for November 25th.

The decision after that call needs to be honest. If you're 90%+ confident you can deliver this successfully, pursue it aggressively - it could define your 2026. If you're 70-90% confident, pursue it with a specialist integration partner. If you're below 70% confident, pass professionally. This project is too large and too visible to take on without certainty about execution.

---

## Portfolio Health Indicators

One of the strongest predictors of deal closure that emerges from your integrated data is **communication velocity** - how fast the sales cycle is moving. The ACME Corp opportunity went from initial RFP on November 10th to board review feedback on November 18th. That's just 8 days. This exceptional speed indicates high internal priority on their side. Fast cycles correlate strongly with high close rates because they indicate true prioritization, not exploration.

Similarly, TechStart moved from receiving clarification questions on November 17th to sending a "ready to move forward" email on November 19th - just 2 days. As a contrast, BrightStart received a proposal on November 15th and it's been 5 days with no response, suggesting the project is lower priority for them.

Sentiment analysis across your 15 most recent client emails shows **83% positive tone**, representing a 5-point improvement from last week's analysis. Your portfolio health is improving, not deteriorating. Team capacity data shows current utilization at 78%, with William Marquez available January 6th when Vertex completes, and Nicole Howell ready to take the ACME lead role the client specifically requested.

---

## The Referral Advantage

A clear pattern is emerging from your business data. In Q3, you successfully delivered the DataCorp analytics platform and the FinServe modernization project. Now in Q4, those satisfied clients have generated two significant referrals: NetLogic at $700K potential and GlobalManufacturing at $350K potential.

The mathematics are striking:
- Cold outbound average: $210K per deal, 45% close rate
- Referred deals average: $525K per deal, 90% close rate
- **Multiplier: 2.5x larger, 2x more likely to close**

This isn't just about easier sales - it's about sustainable competitive advantage. Delivery quality creates client advocacy, which generates bigger and easier deals. Large consulting firms struggle to replicate this because relationship depth doesn't scale well when juggling hundreds of clients. You're positioned perfectly to build deep partnerships that compound in value over time.

---

## This Week's Priorities

**Today:**
- Send ACME the cloud migration budget breakdown they requested (attach Google Sheets with $180K Phase 2 detail)
- Propose three specific time slots for December 2-6 kickoff meeting

**This Week:**
- Complete ACME SOW revision with Q1 Phase 1 timeline (due Friday, November 22)
- Prepare for NetLogic discovery call on November 25th
- Check in with TechStart on legal review status

**Next Two Weeks:**
- Accept CloudTech Summit speaking invitation (deadline December 1st)
- Create Vertex Systems case study while early delivery is fresh
- Schedule DataCorp Phase 2 scoping call

---

## The Integration Advantage

Here's what this daily analysis demonstrates about connected business intelligence. Without integration, you would see fragments: an email from ACME that seems positive, a Salesforce record showing 75% probability, and team members who seem ready for new work. Each piece of data exists in isolation.

With integration, you see the complete picture. The email language reveals board approval, which is rare at the proposal stage. The Salesforce probability estimate undervalues the opportunity based on verbal commitment signals. The Slack conversations confirm not just team availability but specific enthusiasm and strategic alignment. Your budget sheet proves you're prepared for the exact request the client made.

**The result:** Decision confidence transforms from *"this feels promising"* to *"this is an 85% probability deal with specific actions required to guarantee the close."*

You're no longer operating on gut instinct or isolated data points. You're seeing patterns across your entire business - patterns that no single system could reveal on its own.
`,
      sources: [
        mockEmails[0],   // ACME Q4 transformation
        mockEmails[1],   // ACME initial RFP
        mockEmails[2],   // Vertex final deliverables
        mockEmails[3],   // TechStart scope
        mockEmails[4],   // DataCorp success story
        mockEmails[8],   // TechStart ready to move forward
        mockEmails[9],   // NetLogic referral
        mockEmails[7],   // GlobalManufacturing lead
        mockSlackMessages[0],  // #client-acme
        mockSlackMessages[1],  // #sales-pipeline ACME
        mockSlackMessages[5],  // #bizdev partnership
        mockSlackMessages[6],  // #sales-pipeline TechStart
        mockSalesforceDeals[0], // ACME deal
        mockSalesforceDeals[2], // TechStart deal
        mockSalesforceDeals[5], // NetLogic deal
        mockDriveDocs[0],      // ACME proposal
        mockSheets[0],         // ACME budget
        mockQuickBooksRecords[0], // ACME Invoice #1037
        mockQuickBooksRecords[4], // DataCorp Customer Record
        mockQuickBooksRecords[10] // AR Aging Summary
      ],
      generated_date: '2025-11-20T06:00:00Z'
    },
    {
      id: 'report_002',
      type: 'financial_overview',
      title: 'Financial Overview',
      icon: '',
      sourceCount: '3 Salesforce deals • 2 Google Sheets • 1 email • 5 QuickBooks records',
      summary: 'Q4 tracking at 108% of target with $1.188M projected per QuickBooks P&L versus $1.1M goal. November MTD showing $128.5K net income at 52% margin with strong cash conversion. Cash position at $502K validated through QB balance sheet with $156K AR aging at healthy 18-day average collection. Vertex $85K final payment contractually committed Dec 15 per payment schedule. ACME invoice #1037 ($112.5K) overdue but confirmed processing - invoice existence preceding contract validates deal strength. QB customer records show DataCorp 4x lifetime value multiplier ($1.26M) demonstrating recurring revenue model. Q1 visibility $570-770K with expansion opportunities tracked in accounting system.',
      content: `## Executive Summary

Q4 revenue performance is tracking at **108% of target** with $1.188M projected against the $1.1M goal. This represents $505K in closed revenue and $683K in weighted pipeline value. The ACME Corp opportunity alone, if it closes as expected on December 31st, would push Q4 to 128% of target.

Cash flow position is strong at **$502K net** with operating account balance of $428K and receivables of $156K expected within 30 days. The Vertex Systems final payment of $85K is scheduled for December 15th, providing additional liquidity before year-end.

The key insight from today's analysis: your pipeline weighting methodology may be understating actual close probability. Cross-platform intelligence from email and Slack communications suggests ACME should be weighted at 85% rather than 75%, and TechStart at 85% rather than 60%. This would increase weighted pipeline from $683K to $758K.

---

## Revenue Performance Analysis

Your Q4 performance breaks down into two categories: closed business and active pipeline. On the closed side, you've delivered $505K across two major projects. DataCorp's analytics platform closed in July and was successfully delivered in October for $320K. FinServe's modernization project closed in September and delivered in early November for $185K. Both projects not only hit their revenue targets but have generated follow-on opportunities - a pattern worth noting.

The active pipeline contains four opportunities with varying close probabilities. The Vertex Systems cloud migration is essentially guaranteed revenue - the project is in final delivery phase with completion scheduled for December 15th and the final payment of $85K already contractually committed. This brings your Q4 closed revenue to an effective $590K when you include Vertex.

The ACME Corp digital transformation at $450K with 75% probability represents your largest opportunity. However, as detailed in today's Client Relationships report, email language analysis and cross-platform validation suggest this should be weighted at 85%. At the higher probability, this deal contributes $382.5K to weighted pipeline instead of $337.5K.

TechStart's AI implementation at $125K is currently weighted at 60% probability in Salesforce. But David Park's November 19th email stating "we're ready to move forward" with confirmed checkmarks on pricing, timeline, and integrations indicates verbal commitment. The only remaining step is legal review, which is procurement formality rather than sales risk. This deal should be weighted at 85%, contributing $106.25K instead of $75K.

BrightStart's advisory retainer at $45K shows 70% probability and appears accurate based on email responsiveness patterns. This contributes $31.5K to weighted pipeline.

**Revised Weighted Pipeline:** $252K (Vertex) + $382.5K (ACME at 85%) + $106.25K (TechStart at 85%) + $31.5K (BrightStart) = **$772.25K**

Combined with $505K closed, your **Q4 projection becomes $1.277M** or 116% of target. If ACME closes, you hit $1.405M or 128% of target.

---

## Cash Flow Position - QuickBooks Validation

Your QuickBooks Profit & Loss statement for November (month-to-date through Nov 20) provides real-time financial performance visibility that validates your growth trajectory. The numbers tell a compelling story: **$247K in revenue, $42.4K in cost of goods sold, and $128.5K in net income** - a 52% net margin that significantly exceeds typical consulting industry benchmarks of 20-30%.

Breaking down the November revenue: Vertex Systems contributed $70K (Milestone 2 payment received Nov 18), ACME Corp's deposit of $112.5K (invoice generated, payment processing), FinServe's final payment of $46.25K, and DataCorp's support retainer of $6.25K. The P&L also shows $12K in recurring revenue from monthly support contracts - a growing base of predictable income.

The cost structure reveals operational discipline. Direct project costs of $42.4K include billable cloud infrastructure ($15.2K AWS + $8.5K Snowflake), subcontractor fees ($12.5K), and project-specific software licenses ($6.15K). Notably, the majority of cloud costs ($30.7K of $42.4K total COGS) are pass-through expenses marked for client billing with appropriate markup.

Operating expenses of $76.2K break down into payroll & benefits ($58.2K), office & administrative ($8.5K), sales & marketing ($3.2K), professional services ($2.8K), and travel ($3.5K). This $76.2K monthly burn rate against$247K revenue demonstrates strong unit economics.

Your current cash position shows healthy liquidity and manageable obligations validated through your QuickBooks balance sheet. The operating account holds $428K, which covers approximately 5.6 months of operating expenses based on the $76.2K monthly burn rate. This provides comfortable runway and flexibility for strategic investments.

Accounts receivable stands at $156K with the majority expected within 30 days. The largest component is the Vertex final payment of $85K due December 15th, which is contractually committed and low risk given Brent Soto' email confirming early delivery and his proactive mention of ensuring quick payment processing.

Accounts payable of $82K due is well within normal operating parameters and presents no cash flow concerns. Your **net position of $502K** represents strong financial health for a 12-person consulting firm.

The QuickBooks accounts receivable aging report provides exceptional visibility into collection health. Currently, only **$112.5K is outstanding** - the ACME invoice that's 5 days overdue with confirmed payment processing. Your historical performance shows an **18-day average collection cycle against Net 30 terms**, meaning clients pay 12 days early on average. This isn't luck - it reflects strong client relationships and professional billing practices.

The AR aging breakdown shows zero invoices in the 31-60 day, 61-90 day, or 90+ day buckets. This clean aging eliminates the cash flow unpredictability that plagues many consulting firms. When your weighted pipeline converts to closed deals, you can confidently expect cash collection within 2-3 weeks rather than worrying about 60-90 day delays.

Looking forward to the next 30 days, revenue recognition includes the Vertex final payment ($85K on Dec 15 per invoice #1024), potential ACME deposit if the deal closes ($37.5K on Dec 31 per payment schedule), and monthly retainer payments totaling approximately $42K. This would bring year-end cash position to approximately $575K before accounting for operating expenses.

The ACME project budget breakdown in your Google Sheets shows thoughtful revenue recognition planning across the 12-month engagement. Phase 1 is structured as 50% deposit ($37.5K) on contract signature with the remaining 50% on Phase 1 completion. This front-loaded payment structure provides early cash flow and demonstrates client commitment. Phase 2 through 4 follow a monthly payment schedule that aligns cash collection with work delivery.

---

## Pipeline Value Concentration

One financial risk worth monitoring is pipeline concentration. The ACME opportunity represents 58% of your active weighted pipeline value ($383K of $772K). If this deal were to unexpectedly stall or lose, it would significantly impact Q4 and Q1 projections.

However, the cross-platform intelligence provides confidence that this risk is lower than it appears. The combination of board approval email signals, Salesforce deal progression, Slack team confirmation, and budget preparation all validate the opportunity strength. Additionally, the client's specific request for Nicole Howell as lead consultant based on prior successful delivery substantially reduces execution risk.

The mitigation strategy for concentration risk is already working - you have three other active opportunities (Vertex, TechStart, BrightStart) plus two expansion opportunities (DataCorp, FinServe) plus two new inbound leads (NetLogic, GlobalManufacturing). Diversification is improving.

For 2026 planning, the NetLogic opportunity at $700K would represent even higher concentration if it closes. The strategic question becomes whether to pursue maximum revenue growth or maintain pipeline diversification. Given your strong delivery track record and the referral source quality, pursuing NetLogic makes sense if capability fit is validated in the November 25th discovery call.

---

## Revenue Recognition & Projections

Looking beyond Q4 into early 2026, your revenue visibility is building nicely. If ACME closes in late December, Phase 1 work generates $157.5K in Q1 revenue ($37.5K deposit + $37.5K completion + $60K first month of Phase 2). TechStart's $125K project with a January 6th kickoff contributes $62.5K deposit in Q1. These two deals alone provide $220K in Q1 visibility.

The expansion opportunities from DataCorp ($175K for Phase 2) and FinServe ($225K for European operations) would add another $400K to the Q1-Q2 pipeline if scoping conversations progress as expected in December. Both of these carry lower sales risk than new business because you've already proven value and established trust.

NetLogic, if pursued after the discovery call and closed in Q1, could contribute $150-200K in Q1 revenue based on an 18-month project structure. However, this assumes the discovery validates fit and you move quickly through proposal and contracting.

**Q1 2026 Projection:** $220K from ACME and TechStart (high confidence) + $200K from expansion opportunities (medium confidence) + $150K from NetLogic Phase 1 (conditional on close) = **$570K to $770K range**.

This would represent strong momentum continuation from Q4 and positions 2026 for meaningful growth versus 2025's projected $6.1M annual revenue.

---

## This Week's Financial Actions

The immediate priority is ensuring ACME receives the cloud migration budget breakdown they requested. This isn't just a sales action - it's about demonstrating financial planning rigor and preparedness. Send the Google Sheets file today showing the detailed $180K Phase 2 allocation across AWS infrastructure ($60K), application migration ($70K), security setup ($30K), and testing ($20K).

Update your Salesforce weighted pipeline calculations to reflect the revised probabilities for ACME (85%) and TechStart (85%) based on cross-platform intelligence. This will give you more accurate revenue forecasting and help with resource planning decisions.

Confirm the Vertex final payment logistics with Brent Soto. While the December 15th payment is contractually committed, proactive communication ensures smooth processing and maintains the strong client relationship for potential future work.

---

## QuickBooks Sales Tax & Compliance

Your QuickBooks sales tax liability report for Q4 confirms operational compliance with zero complexity. All $742K in Q4 revenue classifies as professional services, which are tax-exempt in California and all states where you operate. The compliance status shows **$0 tax collected, $0 tax liability, zero filing requirements**.

This isn't just about avoiding sales tax complexity - it's about operational simplicity that enables scaling. You don't need tax calculation logic in your invoicing, don't need to track nexus thresholds across multiple states, and don't need monthly or quarterly filings. The consulting services model provides clean revenue recognition without compliance overhead.

The tax report confirms your last audit was March 2024 with no issues found, and multi-state nexus analysis was reviewed in October 2025. This proactive compliance management prevents the "surprise tax liability" issues that create cash flow problems for growing firms.

---

## The Financial Intelligence Advantage

The difference between traditional financial reporting and what you're seeing in this analysis is the integration of sales intelligence with financial data. QuickBooks shows you cash balances, invoices, and P&L statements. Your CRM shows pipeline value and deal stages. But neither system alone reveals the quality signals that predict actual cash flow and business health.

When you connect email communication patterns with deal probabilities, you see that fast sales cycles (ACME's 8-day RFP-to-board-review) correlate with higher close rates. When you combine Slack team capacity discussions with revenue projections, you can validate whether pipeline opportunities are actually deliverable with current resources.

The $1.26M lifetime value calculation for DataCorp isn't visible in any single system - it requires connecting the original project value from Salesforce, the support contract from QuickBooks recurring revenue tracking, the Phase 2 email from Gmail, the customer health score from QuickBooks customer record, and the referral value from the NetLogic opportunity. This complete picture transforms how you think about client acquisition costs and long-term business strategy.

When QuickBooks shows ACME invoice #1037 generated before the formal contract, combined with Salesforce showing "Proposal Sent" stage and email showing board approval language - you see the full picture. The financial commitment (invoice) validates the sales activity (emails and CRM), giving you confidence to forecast cash flow accurately.

You're making financial decisions with operational and relationship context, not just numbers in isolation.
`,
      sources: [
        mockSalesforceDeals[0], // ACME deal
        mockSalesforceDeals[1], // Vertex deal
        mockSalesforceDeals[2], // TechStart deal
        mockSheets[0],          // ACME budget
        mockSheets[1],          // Q4 revenue forecast
        mockEmails[2],          // Vertex completion email
        mockQuickBooksRecords[0], // ACME Invoice #1037
        mockQuickBooksRecords[1], // Vertex Payment
        mockQuickBooksRecords[8], // November P&L
        mockQuickBooksRecords[10], // AR Aging Summary
        mockQuickBooksRecords[11]  // Sales Tax Report
      ],
      generated_date: '2025-11-20T06:00:00Z'
    },
    {
      id: 'report_003',
      type: 'team_projects',
      title: 'Department Activity & Productivity',
      icon: '',
      sourceCount: '5 Slack channels • 3 emails • 1 utilization sheet',
      summary: 'Team operating at 78% utilization with strong cross-functional coordination between sales and delivery departments. Email response time averaging 2.3 hours demonstrates high responsiveness without overload. Collaboration patterns from Slack show proactive capacity planning with team members self-organizing around resource availability. Performance signals exceptional - William Marquez delivering Vertex ahead of schedule and Nicole Howell requested by name for ACME engagement. Internal knowledge sharing active with Isabella Reynolds supporting teammates on technical questions. Department dynamics healthy with no bottlenecks or communication silos detected.',
      content: `## Executive Summary

Your team is operating at **78% utilization** across four key functions, sitting comfortably within the healthy 80-85% target range. Department collaboration patterns from Slack show strong cross-functional coordination with sales and delivery teams actively aligned on the ACME opportunity. Response time analysis reveals average email turnaround of **2.3 hours** on client communications, indicating high responsiveness without signs of overload.

Notable productivity signals include William Marquez's ahead-of-schedule delivery on Vertex (completing December 12th vs contracted December 15th) and Nicole Howell being specifically requested by name for the ACME project based on prior successful client work. Internal Slack communication shows proactive capacity planning with team members self-organizing around resource availability.

The key insight: your departments aren't operating in silos. Sales shares pipeline intelligence that delivery uses for capacity planning. Delivery communicates project timing that sales uses for new deal scoping. This cross-functional coordination is enabling the smooth project transitions that prevent utilization volatility.

---

## Department Assignments & Workload

The team utilization tracker shows how work is currently distributed across your consulting staff. William Marquez is running at 95% billable utilization on the Vertex Systems cloud migration project, with the remaining 5% allocated to pre-sales technical support for the ACME opportunity. His Slack updates in #delivery channel indicate final testing is complete and the project is tracking for early completion.

Nicole Howell's time breaks down into 38% on ACME proposal development, 20% on FinServe quarterly business review preparation, and 42% on internal activities including strategy work and administrative tasks. The #client-acme Slack channel shows she's confirmed availability to lead the ACME engagement full-time starting in January, transitioning from her current mixed workload to dedicated project leadership.

Isabella Reynolds is allocated 20% to DataCorp platform support (which has moved to maintenance mode), 30% to TechStart proposal development, and 50% to internal activities including training and capability building. Her Slack message in #sales-pipeline expressing interest in the TechStart AI project aligns with her background in machine learning from her previous role.

Jessie Montoya shows 62% utilization on FinServe project delivery, 25% on marketing and content creation (including the DataCorp case study being drafted), and 13% on administrative work. This balanced allocation between billable work and business development activities supports the firm's growth objectives.

---

## Cross-Department Collaboration

Analyzing Slack activity reveals strong coordination between your sales and delivery functions. The #sales-pipeline channel shows a pattern where Demo shares new opportunity updates and delivery team members respond with capacity confirmations and capability assessments. This isn't just acknowledgment - it's active participation in qualification decisions.

On November 12th, when Demo posted about the ACME Corp discovery call, Nicole Howell immediately asked about deal size and timeline. William Marquez followed up with capacity confirmation. Isabella Reynolds offered to support on the data warehouse component. This rapid, collaborative response demonstrates that deals aren't being sold in isolation from delivery reality.

The #client-acme channel created specifically for the ACME opportunity shows 12 messages over the past week. The tone is confident and strategic rather than concerned or reactive. Jennifer is leading team alignment on approach, Alex is already reviewing infrastructure documentation proactively, and there's consensus on making this a reference account opportunity. This level of coordination before contract signature indicates strong delivery readiness.

The #delivery channel focus on Vertex completion shows disciplined project closeout processes. Alex is preparing comprehensive documentation, scheduling knowledge transfer sessions, and coordinating final review meetings. This professional approach to project endings creates the foundation for reference accounts and reduces client-side delivery risk.

---

## Response Time & Availability Patterns

Email response time analysis across the past week shows your team maintaining an average **2.3-hour turnaround** on client communications. This breaks down by type: client questions average 1.8 hours, proposal requests average 3.2 hours, and scheduling emails average 1.5 hours. These response times sit well within professional services best practices without indicating team overload.

The ACME Corp sales cycle demonstrates this responsiveness in action. Initial RFP received November 10th at 10:15 AM was acknowledged by 2:30 PM the same day - a 4.25-hour turnaround. Full proposal delivered November 15th, just 5 days from RFP. TechStart's clarification questions on November 17th received comprehensive responses within 3 hours. This velocity happens because capacity exists to respond quickly.

Slack response patterns show similar health. Messages in project-specific channels (#client-acme, #delivery) typically receive responses within 15-30 minutes during business hours. This rapid internal communication enables fast decision-making and prevents bottlenecks from forming.

One positive indicator: no signs of after-hours communication stress. Slack timestamps show conversations happening within normal business hours (9 AM - 6 PM) with occasional strategic discussions extending to early evening but no late-night or weekend messaging patterns that would suggest burnout or unsustainable pace.

---

## Capacity & Resource Intelligence

The most valuable capacity signal comes from proactive communication rather than utilization calculations. In the November 19th #client-acme Slack discussion, William Marquez voluntarily committed to January 6th availability, unprompted. This shows team members are thinking ahead about capacity rather than being reactively assigned.

Similarly, Isabella Reynolds mentioned in #sales-pipeline that her DataCorp project has moved to maintenance mode, freeing up bandwidth. Jessie Montoya noted in #general that he has capacity for strategic work. This self-organization around resource planning reduces coordination overhead and enables faster response to new opportunities.

The January 6th timing for both ACME kickoff and William Marquez's availability isn't coincidental - it's the result of sales and delivery coordination. Vertex's December 15th completion date was known when ACME proposal was being developed, allowing accurate staffing commitments in the proposal. This synchronized planning prevents the overpromising that creates delivery stress.

For the ACME opportunity specifically, the capacity math shows Jennifer at 100% allocation, Alex at 100%, and Maria at 20-30% support on data warehouse components. This totals approximately 2.2-2.3 FTE dedicated to a project budgeted for $450K over 12 months, translating to roughly $37.5K monthly revenue with estimated team costs of $25-28K monthly. The margins support quality delivery without resource strain.

---

## Performance & Quality Signals

Client feedback provides the strongest performance indicators. Brent Soto' November 19th email about Vertex specifically states "everything performed better than expected" with concrete metrics: database migration completed 2 days ahead of schedule, query performance improvements of 60% versus the promised 40%, and zero data integrity issues. This level of exceeding expectations doesn't happen accidentally - it reflects team skill and project management discipline.

Heidi Sheppard's request for Nicole Howell by name on the ACME project, referencing her as "fantastic" from their prior CRM implementation, represents peer validation of individual performance. This type of named consultant request is rare and valuable - it indicates execution capability that the client has personally validated.

The Slack #wins channel from November 12th captured the team celebrating the FinServe deal closure, with specific recognition of Jessie Montoya's delivery quality. The collaborative celebration and peer recognition suggest healthy team culture and mutual respect rather than competitive internal dynamics.

Internal collaboration quality shows in knowledge-sharing patterns. When Jennifer asked a technical question about Snowflake data warehouses in #tech-talk, Isabella Reynolds immediately offered to help based on her DataCorp implementation experience. This willingness to share expertise across team members prevents knowledge silos and builds collective capability.

---

## This Week's Department Priorities

**Delivery Focus:**
- Vertex: Final testing and knowledge transfer sessions (William Marquez leading)
- Coordinate December 10th final review with client

**Sales Support:**
- ACME SOW revision completion by Friday (Nicole Howell + Demo)
- NetLogic discovery call preparation for November 25th
- TechStart contract review follow-up

**Cross-Functional:**
- Review capacity scenarios if both ACME and NetLogic opportunities close
- Begin quiet outreach to potential senior consultant candidates for scaling needs

---

## The People Intelligence Advantage

Traditional workforce analytics show you hours logged and utilization percentages. What you're seeing here is different - it's understanding how your people actually work together, what motivates their performance, and where capacity really exists.

When Jennifer volunteers to lead ACME despite it being a demanding full-time engagement, that signals confidence in both the opportunity quality and her capability to deliver. When Alex proactively prepares for ACME cloud architecture while still delivering Vertex, that shows professional maturity and forward-thinking. When Maria offers to support on components outside her primary assignment, that reveals collaborative culture.

These signals don't appear in time-tracking systems or org charts. They emerge from connecting communication patterns with work assignments and outcomes. You're not just managing headcount and hours - you're seeing team dynamics, collaboration quality, and cultural health in real-time.

This visibility transforms workforce decisions from "who has available hours?" to "who's ready and enthusiastic for this work, and how can we set them up for success?"
`,
      sources: [
        mockSlackMessages[0],  // #client-acme team discussion
        mockSlackMessages[1],  // #sales-pipeline coordination
        mockSlackMessages[2],  // #delivery Vertex completion
        mockSlackMessages[7],  // #team-standup daily
        mockEmails[2],         // Vertex completion email
        mockSheets[2]          // Team utilization tracker
      ],
      generated_date: '2025-11-20T06:00:00Z'
    }
  ]
};

// Export for easy access
export const getDemoConversation = (chatId: string): ChatConversation | null => {
  return mockChatConversations.find(c => c.id === chatId) || null;
};

export const getDailyReports = (dateString: string, teamId: string = 'all'): DailyReport[] => {
  // Filter reports by team
  let baseReports = mockDailyReports['2025-11-20'] || [];

  if (teamId === 'team_001') {
    baseReports = salesTeamReports;
  } else if (teamId === 'all') {
    // Return company-wide reports
    baseReports = mockDailyReports['2025-11-20'] || [];
  }

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
