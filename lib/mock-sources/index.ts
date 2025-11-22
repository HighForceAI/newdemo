// Centralized mock sources for Summit Strategy Consulting demo

import { mockEmails } from './emails';
import { mockSlackMessages } from './slack';
import { mockSalesforceDeals } from './salesforce';
import { mockDriveDocs } from './drive';
import { mockSheets } from './sheets';
import { mockQuickBooksRecords } from './quickbooks';

// Export organized by type
export const sources = {
  emails: mockEmails,
  slack: mockSlackMessages,
  salesforce: mockSalesforceDeals,
  drive: mockDriveDocs,
  sheets: mockSheets,
  quickbooks: mockQuickBooksRecords
};

// Export flat array of all sources
export const allSources = [
  ...mockEmails,
  ...mockSlackMessages,
  ...mockSalesforceDeals,
  ...mockDriveDocs,
  ...mockSheets,
  ...mockQuickBooksRecords
];

// Helper to get sources by IDs
export const getSourcesByIds = (ids: string[]) => {
  return allSources.filter(source => ids.includes(source.id));
};

// Helper to get sources by app type
export const getSourcesByAppType = (appType: string) => {
  return allSources.filter(source => source.appType === appType);
};

// Export counts for reference
export const sourceCounts = {
  emails: mockEmails.length,
  slack: mockSlackMessages.length,
  salesforce: mockSalesforceDeals.length,
  drive: mockDriveDocs.length,
  sheets: mockSheets.length,
  quickbooks: mockQuickBooksRecords.length,
  total: allSources.length
};
