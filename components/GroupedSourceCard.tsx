"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Source } from "@/lib/demo-data";
import SourceModal from "./SourceModal";

interface GroupedSourceCardProps {
  appType: 'gmail' | 'salesforce' | 'slack' | 'drive' | 'github' | 'quickbooks' | 'sheets';
  sources: Source[];
  count: number;
}

const appConfig = {
  gmail: { logo: '/logos/gmail.webp', name: 'Gmail', plural: 'emails' },
  salesforce: { logo: '/logos/salesforce.png', name: 'Salesforce', plural: 'records' },
  slack: { logo: '/logos/slack.png', name: 'Slack', plural: 'messages' },
  drive: { logo: '/logos/drive.png', name: 'Google Drive', plural: 'documents' },
  sheets: { logo: '/logos/google-sheets.png', name: 'Google Sheets', plural: 'sheets' },
  github: { logo: 'https://cdn.simpleicons.org/github', name: 'GitHub', plural: 'items' },
  quickbooks: { logo: 'https://cdn.simpleicons.org/quickbooks', name: 'QuickBooks', plural: 'records' }
};

export default function GroupedSourceCard({ appType, sources, count }: GroupedSourceCardProps) {
  const config = appConfig[appType];
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedSource, setSelectedSource] = useState<Source | null>(null);

  return (
    <>
      {/* Grouped Card */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="group w-full bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl p-4 transition-all duration-200 hover:shadow-md hover:border-gray-300 text-left"
      >
        <div className="flex items-start gap-3">
          {/* App Logo */}
          <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
            <img
              src={config.logo}
              alt={config.name}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 group-hover:text-gray-700 transition-colors leading-6">
              {count} {config.plural}
            </p>
            <p className="text-xs text-gray-500 truncate mt-0.5">
              Click to view all
            </p>
            <p className="text-xs text-gray-400 mt-1">
              {config.name}
            </p>
          </div>

          {/* Expand indicator */}
          <div className="transition-all">
            <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
          </div>
        </div>
      </button>

      {/* Expanded List Modal */}
      {isExpanded && (
        <>
          {/* Full screen backdrop */}
          <div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsExpanded(false)}
          />

          {/* Modal centered on full screen */}
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ pointerEvents: 'none' }}
          >
            <div
              className="bg-white rounded-3xl w-[90vw] max-w-2xl max-h-[80vh] flex flex-col shadow-2xl"
              style={{ pointerEvents: 'auto' }}
              onClick={(e) => e.stopPropagation()}
            >
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <img src={config.logo} alt={config.name} className="w-8 h-8 object-contain" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{count} {config.plural}</h3>
                  <p className="text-sm text-gray-500">{config.name}</p>
                </div>
              </div>
            </div>

            {/* Source List */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-3">
                {sources.map((source, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsExpanded(false);
                      setSelectedSource(source);
                    }}
                    className="w-full bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl p-4 transition-all text-left group"
                  >
                    <p className="text-sm font-medium text-gray-900 group-hover:text-gray-700 mb-1">
                      {source.title}
                    </p>
                    {source.subtitle && (
                      <p className="text-xs text-gray-500">
                        {source.subtitle}
                      </p>
                    )}
                    <div className="flex items-center justify-end mt-2">
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Close button */}
            <div className="px-6 py-4 border-t border-gray-200">
              <button
                onClick={() => setIsExpanded(false)}
                className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-medium text-gray-700 transition-colors"
              >
                Close
              </button>
            </div>
            </div>
          </div>
        </>
      )}

      {/* Individual Source Modal */}
      {selectedSource && (
        <SourceModal
          isOpen={!!selectedSource}
          onClose={() => setSelectedSource(null)}
          source={selectedSource}
        />
      )}
    </>
  );
}
