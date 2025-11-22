"use client";

import { X, DollarSign, Calendar, TrendingUp, User, Building2, Mail, Users, Clock, FileText, ArrowLeft } from "lucide-react";
import { useEffect } from "react";

interface SourceData {
  appType: 'gmail' | 'salesforce' | 'slack' | 'drive' | 'github' | 'quickbooks' | 'sheets';
  title: string;
  content: string;
  metadata?: {
    from?: string;
    to?: string;
    date?: string;
    subject?: string;
    // Salesforce specific
    dealValue?: string;
    stage?: string;
    closeDate?: string;
    // Slack specific
    channel?: string;
    participants?: string[];
    // Drive/Sheets specific
    lastModified?: string;
    owner?: string;
    // Sheets specific
    sheetData?: {
      headers: string[];
      rows: string[][];
    };
  };
}

interface SourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBack?: () => void;
  source: SourceData;
}

const appConfig = {
  gmail: { logo: '/logos/gmail.webp', name: 'Gmail', color: '#EA4335' },
  salesforce: { logo: '/logos/salesforce.png', name: 'Salesforce', color: '#00A1E0' },
  slack: { logo: '/logos/slack.png', name: 'Slack', color: '#4A154B' },
  drive: { logo: '/logos/drive.png', name: 'Google Drive', color: '#4285F4' },
  sheets: { logo: '/logos/google-sheets.png', name: 'Google Sheets', color: '#34A853' },
  github: { logo: 'https://cdn.simpleicons.org/github', name: 'GitHub', color: '#181717' },
  quickbooks: { logo: '/logos/quickbooks.png', name: 'QuickBooks', color: '#2CA01C' }
};

export default function SourceModal({ isOpen, onClose, onBack, source }: SourceModalProps) {
  const config = appConfig[source.appType];

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Render app-specific layout
  const renderContent = () => {
    switch (source.appType) {
      case 'salesforce':
        return renderSalesforceLayout();
      case 'gmail':
        return renderGmailLayout();
      case 'slack':
        return renderSlackLayout();
      case 'drive':
      case 'sheets':
        return renderDocumentLayout();
      default:
        return renderDefaultLayout();
    }
  };

  const renderSalesforceLayout = () => (
    <div className="flex-1 overflow-y-auto px-8 py-6 bg-gray-50 rounded-b-3xl">
      {/* Key Metrics Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-2xl p-4 border border-gray-200">
          <div className="flex items-center gap-2 text-gray-500 text-xs font-medium mb-2">
            <DollarSign className="h-4 w-4" />
            <span>AMOUNT</span>
          </div>
          <p className="text-2xl font-semibold text-gray-900">{source.metadata?.dealValue || 'N/A'}</p>
        </div>
        <div className="bg-white rounded-2xl p-4 border border-gray-200">
          <div className="flex items-center gap-2 text-gray-500 text-xs font-medium mb-2">
            <TrendingUp className="h-4 w-4" />
            <span>STAGE</span>
          </div>
          <p className="text-lg font-semibold text-gray-900">{source.metadata?.stage || 'N/A'}</p>
        </div>
        <div className="bg-white rounded-2xl p-4 border border-gray-200">
          <div className="flex items-center gap-2 text-gray-500 text-xs font-medium mb-2">
            <Calendar className="h-4 w-4" />
            <span>CLOSE DATE</span>
          </div>
          <p className="text-sm font-semibold text-gray-900">{source.metadata?.closeDate || 'N/A'}</p>
        </div>
      </div>

      {/* Details Section */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 mb-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Opportunity Details</h3>
        <div className="space-y-4">
          {source.metadata?.owner && (
            <div className="flex items-start gap-3">
              <User className="h-5 w-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500 font-medium">Opportunity Owner</p>
                <p className="text-sm text-gray-900 font-medium">{source.metadata.owner}</p>
              </div>
            </div>
          )}
          <div className="border-t border-gray-100 pt-4">
            <div className="whitespace-pre-wrap text-sm text-gray-700 leading-relaxed">
              {source.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGmailLayout = () => (
    <div className="flex-1 overflow-y-auto">
      {/* Email Header */}
      <div className="px-8 py-4 bg-gray-50 border-b border-gray-200">
        <div className="space-y-3">
          {source.metadata?.subject && (
            <div>
              <p className="text-xs text-gray-500 font-medium mb-1">Subject</p>
              <p className="text-base font-semibold text-gray-900">{source.metadata.subject}</p>
            </div>
          )}
          <div className="grid grid-cols-2 gap-4 text-sm">
            {source.metadata?.from && (
              <div>
                <p className="text-xs text-gray-500 font-medium mb-1">From</p>
                <p className="text-sm text-gray-900">{source.metadata.from}</p>
              </div>
            )}
            {source.metadata?.to && (
              <div>
                <p className="text-xs text-gray-500 font-medium mb-1">To</p>
                <p className="text-sm text-gray-900">{source.metadata.to}</p>
              </div>
            )}
            {source.metadata?.date && (
              <div className="col-span-2">
                <p className="text-xs text-gray-500 font-medium mb-1">Date</p>
                <p className="text-sm text-gray-900">{source.metadata.date}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Email Body */}
      <div className="px-8 py-6">
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <div className="whitespace-pre-wrap text-sm text-gray-800 leading-relaxed">
            {source.content}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSlackLayout = () => (
    <div className="flex-1 overflow-y-auto px-8 py-6 bg-gray-50 rounded-b-3xl">
      {/* Channel Info */}
      <div className="bg-white rounded-2xl p-4 border border-gray-200 mb-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-500 font-medium">Channel:</span>
          <span className="text-gray-900 font-semibold">#{source.metadata?.channel}</span>
          {source.metadata?.participants && (
            <>
              <span className="text-gray-400 mx-2">•</span>
              <Users className="h-4 w-4 text-gray-400" />
              <span className="text-gray-600">{source.metadata.participants.length} participants</span>
            </>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200">
        <div className="whitespace-pre-wrap text-sm text-gray-800 leading-relaxed font-mono">
          {source.content}
        </div>
      </div>
    </div>
  );

  const renderDocumentLayout = () => {
    // Special rendering for Google Sheets with table data
    if (source.appType === 'sheets' && source.metadata?.sheetData) {
      const { headers, rows } = source.metadata.sheetData;
      return (
        <div className="flex-1 overflow-y-auto px-8 py-6 bg-gray-50 rounded-b-3xl">
          {/* Document Info */}
          <div className="bg-white rounded-2xl p-4 border border-gray-200 mb-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              {source.metadata?.owner && (
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">Owner</p>
                    <p className="text-sm text-gray-900 font-medium">{source.metadata.owner}</p>
                  </div>
                </div>
              )}
              {source.metadata?.lastModified && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">Last Modified</p>
                    <p className="text-sm text-gray-900 font-medium">{source.metadata.lastModified}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Spreadsheet Table - Excel Style */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden" style={{ border: '1px solid #d1d5db' }}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f3f4f6' }}>
                    {headers.map((header, idx) => (
                      <th
                        key={idx}
                        className="px-3 py-2 text-left text-xs font-semibold text-gray-700"
                        style={{
                          borderRight: idx < headers.length - 1 ? '1px solid #e5e7eb' : 'none',
                          borderBottom: '1px solid #d1d5db'
                        }}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, rowIdx) => {
                    const isSubtotal = row[1]?.includes('Subtotal') || row[1]?.includes('TOTAL');
                    return (
                      <tr
                        key={rowIdx}
                        style={{
                          backgroundColor: isSubtotal ? '#f9fafb' : 'white'
                        }}
                      >
                        {row.map((cell, cellIdx) => (
                          <td
                            key={cellIdx}
                            className={`px-3 py-2 text-sm ${isSubtotal ? 'font-semibold' : ''}`}
                            style={{
                              borderRight: cellIdx < row.length - 1 ? '1px solid #e5e7eb' : 'none',
                              borderBottom: '1px solid #e5e7eb',
                              color: '#1f2937',
                              whiteSpace: 'nowrap'
                            }}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }

    // Regular document layout for Drive
    return (
      <div className="flex-1 overflow-y-auto px-8 py-6 bg-gray-50 rounded-b-3xl">
        {/* Document Info */}
        <div className="bg-white rounded-2xl p-4 border border-gray-200 mb-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            {source.metadata?.owner && (
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-500">Owner</p>
                  <p className="text-sm text-gray-900 font-medium">{source.metadata.owner}</p>
                </div>
              </div>
            )}
            {source.metadata?.lastModified && (
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-500">Last Modified</p>
                  <p className="text-sm text-gray-900 font-medium">{source.metadata.lastModified}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Document Content */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
          <div className="prose prose-sm max-w-none">
            <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
              {source.content}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderDefaultLayout = () => (
    <div className="flex-1 overflow-y-auto px-8 py-6">
      <div className="prose prose-sm max-w-none">
        <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
          {source.content}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Full screen backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal centered on full screen */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ pointerEvents: 'none' }}
      >
        <div
          className="bg-white rounded-3xl w-[90vw] max-w-5xl h-[85vh] flex flex-col shadow-2xl"
          style={{ pointerEvents: 'auto' }}
          onClick={(e) => e.stopPropagation()}
        >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-200">
          <div className="flex items-center gap-4">
            {onBack && (
              <button
                onClick={onBack}
                className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                title="Back to list"
                aria-label="Back to list"
              >
                <ArrowLeft className="h-5 w-5 text-gray-500" />
              </button>
            )}
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white border border-gray-200">
              <img src={config.logo} alt={config.name} className="w-7 h-7 object-contain" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{source.title}</h2>
              <p className="text-sm text-gray-500 mt-0.5">{config.name}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* App-specific content */}
        {renderContent()}
        </div>
      </div>
    </>
  );
}
