"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { DailyReport, Source as DemoSource } from "@/lib/demo-data";
import SmartMarkdown from "./SmartMarkdown";
import SourceCard from "./SourceCard";
import GroupedSourceCard from "./GroupedSourceCard";
import SourceModal from "./SourceModal";

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  report: DailyReport;
}

export default function ReportModal({ isOpen, onClose, report }: ReportModalProps) {
  const [selectedSource, setSelectedSource] = useState<DemoSource | null>(null);
  const pathname = usePathname();
  const isDashboard = pathname === '/';

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

  // Group sources by app type
  const grouped = report.sources.reduce((acc, source) => {
    if (!acc[source.appType]) acc[source.appType] = [];
    acc[source.appType].push(source);
    return acc;
  }, {} as Record<string, DemoSource[]>);

  const groupedCards = Object.entries(grouped).map(([appType, sources]) => ({
    appType: appType as any,
    sources,
    count: sources.length
  }));

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
          className="bg-white rounded-3xl w-[90vw] max-w-5xl h-[90vh] flex flex-col shadow-2xl"
          style={{ pointerEvents: 'auto' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-gray-200">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-1">{report.title}</h2>
              <p className="text-sm text-gray-400 mb-1">
                Daily Analysis - {new Date(report.generated_date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              {report.sourceCount && (
                <p className="text-sm text-gray-400">
                  {report.sourceCount}
                </p>
              )}
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {/* Report Content */}
          <div className="flex-1 overflow-y-auto px-8 py-6">
            <div className="prose prose-sm max-w-none mb-8">
              <SmartMarkdown content={report.content} />
            </div>

            {/* Sources Section */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
                Report Sources ({report.sources.length})
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {groupedCards.map((group, idx) =>
                  group.count === 1 ? (
                    <SourceCard
                      key={idx}
                      appType={group.appType}
                      title={group.sources[0].title}
                      subtitle={group.sources[0].subtitle}
                      onClick={() => setSelectedSource(group.sources[0])}
                    />
                  ) : (
                    <GroupedSourceCard
                      key={idx}
                      appType={group.appType}
                      sources={group.sources}
                      count={group.count}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

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
