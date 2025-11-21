import { ChevronRight } from "lucide-react";
import { Source } from "@/lib/demo-data";

interface ReportCardProps {
  title: string;
  icon: string;
  summary: string;
  sourceCount: number;
  sources: Source[];
  onClick: () => void;
}

const appConfig = {
  gmail: { logo: '/logos/gmail.webp', name: 'Gmail' },
  salesforce: { logo: '/logos/salesforce.png', name: 'Salesforce' },
  slack: { logo: '/logos/slack.png', name: 'Slack' },
  drive: { logo: '/logos/drive.png', name: 'Google Drive' },
  sheets: { logo: '/logos/google-sheets.webp', name: 'Google Sheets' },
  github: { logo: 'https://cdn.simpleicons.org/github', name: 'GitHub' },
  quickbooks: { logo: 'https://cdn.simpleicons.org/quickbooks', name: 'QuickBooks' }
};

export default function ReportCard({ title, icon, summary, sourceCount, sources, onClick }: ReportCardProps) {
  // Get unique app types from sources
  const appTypes = [...new Set(sources.map(s => s.appType))];
  const appCounts = appTypes.map(appType => ({
    appType,
    count: sources.filter(s => s.appType === appType).length,
    config: appConfig[appType]
  }));

  return (
    <button
      onClick={onClick}
      className="group w-full bg-white hover:bg-gray-50 border border-gray-200 rounded-3xl p-6 transition-all duration-200 hover:shadow-lg hover:border-gray-300 text-left"
    >
      <div className="flex items-start gap-6">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors mb-3">
            {title}
          </h3>
          <p className="text-sm text-gray-600 mb-4" style={{ lineHeight: '1.8', letterSpacing: '0.01em' }}>
            {summary}
          </p>

          {/* Source Logos as Horizontal String */}
          <div className="flex items-center gap-2 flex-wrap">
            {appCounts.map((app, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-gray-50 rounded-full px-3 py-1.5 border border-gray-200"
              >
                <img
                  src={app.config.logo}
                  alt={app.config.name}
                  className="w-4 h-4 object-contain"
                />
                <span className="text-xs text-gray-600 font-medium whitespace-nowrap">
                  {app.count} {app.count === 1 ? 'source' : 'sources'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Chevron top right */}
        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0 mt-1" />
      </div>
    </button>
  );
}

