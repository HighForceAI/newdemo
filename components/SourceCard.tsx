interface SourceCardProps {
  appType: 'gmail' | 'salesforce' | 'slack' | 'drive' | 'github' | 'quickbooks' | 'sheets';
  title: string;
  subtitle?: string;
  onClick: () => void;
}

const appConfig = {
  gmail: {
    logo: '/logos/gmail.webp',
    name: 'Gmail',
    bgColor: 'bg-red-50',
    iconBg: 'bg-red-100'
  },
  salesforce: {
    logo: '/logos/salesforce.png',
    name: 'Salesforce',
    bgColor: 'bg-blue-50',
    iconBg: 'bg-blue-100'
  },
  slack: {
    logo: '/logos/slack.png',
    name: 'Slack',
    bgColor: 'bg-purple-50',
    iconBg: 'bg-purple-100'
  },
  drive: {
    logo: '/logos/drive.png',
    name: 'Google Drive',
    bgColor: 'bg-blue-50',
    iconBg: 'bg-blue-100'
  },
  sheets: {
    logo: '/logos/google-sheets.png',
    name: 'Google Sheets',
    bgColor: 'bg-green-50',
    iconBg: 'bg-green-100'
  },
  github: {
    logo: 'https://cdn.simpleicons.org/github',
    name: 'GitHub',
    bgColor: 'bg-gray-50',
    iconBg: 'bg-gray-100'
  },
  quickbooks: {
    logo: '/logos/quickbooks.png',
    name: 'QuickBooks',
    bgColor: 'bg-green-50',
    iconBg: 'bg-green-100'
  }
};

export default function SourceCard({ appType, title, subtitle, onClick }: SourceCardProps) {
  const config = appConfig[appType];

  return (
    <button
      onClick={onClick}
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
          <p className="text-sm font-medium text-gray-900 truncate group-hover:text-gray-700 transition-colors leading-6">
            {title}
          </p>
          {subtitle && (
            <p className="text-xs text-gray-500 truncate mt-0.5">
              {subtitle}
            </p>
          )}
          <p className="text-xs text-gray-400 mt-1">
            {config.name}
          </p>
        </div>

        {/* Hover indicator */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </button>
  );
}
