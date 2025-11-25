"use client";

import Image from 'next/image';
import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/sidebar";
import { ArrowUp, Plus, Mic, Calendar, AlertTriangle, TrendingUp, Info, ChevronDown, SlidersHorizontal, Flag, MoreVertical, Check, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { getDailyReports } from "@/lib/demo-data";
import { mockActionItems, mockAlerts } from "@/lib/dashboard-data";
import SourceModal from "@/components/SourceModal";
import ReportModal from "@/components/ReportModal";

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [selectedSource, setSelectedSource] = useState<any>(null);
  const [selectedActionItem, setSelectedActionItem] = useState<any>(null);
  const [selectedReport, setSelectedReport] = useState<any>(null);
  const [actionFilters, setActionFilters] = useState<string[]>([]);
  const [actionSort, setActionSort] = useState<string>('date');
  const [flaggedActions, setFlaggedActions] = useState<string[]>([]);
  const [completedActions, setCompletedActions] = useState<string[]>([]);
  const [showCompleted, setShowCompleted] = useState<'none' | '30' | '60' | '90' | 'all'>('none');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 10);
    return () => clearTimeout(timer);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchInput)}`);
    }
  };

  // Get today's reports
  const today = new Date();
  const dateString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  const reports = getDailyReports(dateString);

  // Filter and sort action items
  let filteredActions = showCompleted === 'none'
    ? mockActionItems.filter(action => !completedActions.includes(action.id))
    : mockActionItems.filter(action => completedActions.includes(action.id));

  if (actionFilters.length > 0) {
    filteredActions = filteredActions.filter(action => actionFilters.includes(action.source.appType));
  }

  const sortedActions = [...filteredActions].sort((a, b) => {
    // Flagged items first
    const aFlagged = flaggedActions.includes(a.id);
    const bFlagged = flaggedActions.includes(b.id);
    if (aFlagged && !bFlagged) return -1;
    if (!aFlagged && bFlagged) return 1;

    // Then by date
    if (actionSort === 'date') {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    return 0;
  });

  const toggleFilter = (appType: string) => {
    setActionFilters(prev =>
      prev.includes(appType)
        ? prev.filter(f => f !== appType)
        : [...prev, appType]
    );
  };

  const getAlertColor = (level: string) => {
    switch (level) {
      case 'critical': return 'bg-red-50 border-red-200 text-red-900';
      case 'important': return 'bg-orange-50 border-orange-200 text-orange-900';
      case 'opportunity': return 'bg-blue-50 border-blue-200 text-blue-900';
      default: return 'bg-gray-50 border-gray-200 text-gray-900';
    }
  };

  const getAlertIcon = (level: string) => {
    switch (level) {
      case 'critical': return <AlertTriangle className="h-4 w-4 text-red-600" />;
      case 'important': return <TrendingUp className="h-4 w-4 text-orange-600" />;
      case 'opportunity': return <Info className="h-4 w-4 text-blue-600" />;
      default: return <Info className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Grey bubble sidebar wrapper - fixed position, always visible */}
      <div className="fixed left-0 top-0 bottom-0 p-6" style={{ width: 'calc(256px + 48px)', zIndex: 50 }}>
        <div className="rounded-3xl" style={{ height: 'calc(100vh - 48px)', backgroundColor: '#E3E4EA', boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.08)', overflow: 'hidden' }}>
          <Sidebar user={user} />
        </div>
      </div>

      {/* Loading overlay - only covers content area */}
      {!isLoaded && (
        <div className="fixed bg-white z-40" style={{ left: 'calc(256px + 48px)', top: 0, right: 0, bottom: 0 }} />
      )}

      {/* Spacer for fixed sidebar */}
      <div style={{ width: 'calc(256px + 48px)', flexShrink: 0 }} />

      {/* Main content area with fade-in */}
      <div
        className={`flex-1 overflow-y-auto p-8 pt-12 transition-opacity duration-1000 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ willChange: isLoaded ? 'auto' : 'opacity' }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid grid-cols-3 gap-6" style={{ minWidth: '900px' }}>
            {/* Left Column - Main Content */}
            <div className="col-span-2 space-y-6" style={{ minWidth: '600px' }}>
              {/* Daily Reports Summary */}
              <div>
                <h2 className="text-3xl font-normal text-gray-900 mb-4">Today's Awareness Reports</h2>
                <div className="grid grid-cols-3 gap-4">
                  {reports.map((report) => {
                    const uniqueApps = [...new Set(report.sources.map(s => s.appType))];
                    const appLogos = uniqueApps.map(appType => {
                      switch(appType) {
                        case 'gmail': return '/logos/gmail.webp';
                        case 'salesforce': return '/logos/salesforce.png';
                        case 'slack': return '/logos/slack.png';
                        case 'drive': return '/logos/drive.png';
                        case 'sheets': return '/logos/google-sheets.png';
                        case 'quickbooks': return '/logos/quickbooks.png';
                        default: return '';
                      }
                    });

                    return (
                      <button
                        key={report.id}
                        onClick={() => setSelectedReport(report)}
                        className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md hover:border-gray-300 transition-all text-left group flex flex-col"
                        style={{ height: '255px' }}
                      >
                        <h3 className="text-sm font-semibold text-gray-900 mb-3 group-hover:text-gray-700">
                          {report.title}
                        </h3>
                        <div className="flex-1 overflow-y-auto mb-2">
                          <p className="text-xs text-gray-500" style={{ lineHeight: '1.6' }}>
                            {report.summary}
                          </p>
                        </div>

                        {/* Source logos */}
                        <div className="flex items-center gap-2 mb-3 pt-3 border-t border-gray-100">
                          {appLogos.map((logo, idx) => (
                            <Image
                              key={idx}
                              src={logo}
                              alt="source"
                              width={16}
                              height={16}
                              className="object-contain"
                              priority
                            />
                          ))}
                        </div>

                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Calendar className="h-3 w-3" />
                          <span>View full report →</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Key Action Items */}
              <div className="flex flex-col" style={{ maxHeight: '400px' }}>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-3xl font-normal text-gray-900 mb-0">Key Action Items</h2>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="gap-2 hover:bg-accent hover:text-accent-foreground">
                        <SlidersHorizontal className="h-4 w-4" />
                        <span className="text-xs">Filter</span>
                        <ChevronDown className="h-3 w-3" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setActionFilters([])}>
                        {actionFilters.length === 0 ? '✓ ' : ''}All Sources
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => toggleFilter('gmail')} className="gap-2">
                        <Image src="/logos/gmail.webp" alt="Gmail" width={16} height={16} className="object-contain" />
                        {actionFilters.includes('gmail') ? '✓ ' : ''}Gmail
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => toggleFilter('slack')} className="gap-2">
                        <Image src="/logos/slack.png" alt="Slack" width={16} height={16} className="object-contain" />
                        {actionFilters.includes('slack') ? '✓ ' : ''}Slack
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => toggleFilter('drive')} className="gap-2">
                        <Image src="/logos/drive.png" alt="Drive" width={16} height={16} className="object-contain" />
                        {actionFilters.includes('drive') ? '✓ ' : ''}Drive
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => toggleFilter('sheets')} className="gap-2">
                        <Image src="/logos/google-sheets.png" alt="Sheets" width={16} height={16} className="object-contain" />
                        {actionFilters.includes('sheets') ? '✓ ' : ''}Sheets
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => toggleFilter('salesforce')} className="gap-2">
                        <Image src="/logos/salesforce.png" alt="Salesforce" width={16} height={16} className="object-contain" />
                        {actionFilters.includes('salesforce') ? '✓ ' : ''}Salesforce
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                          Completed Items
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem onClick={() => setShowCompleted('none')}>
                            {showCompleted === 'none' ? '✓ ' : ''}Hide Completed
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setShowCompleted('30')}>
                            {showCompleted === '30' ? '✓ ' : ''}Last 30 Days
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setShowCompleted('60')}>
                            {showCompleted === '60' ? '✓ ' : ''}Last 60 Days
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setShowCompleted('90')}>
                            {showCompleted === '90' ? '✓ ' : ''}Last 90 Days
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setShowCompleted('all')}>
                            {showCompleted === 'all' ? '✓ ' : ''}All Completed
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="bg-gray-50 rounded-2xl p-1 flex-1 overflow-y-auto">
                  <div className="space-y-1">
                    {sortedActions.map((action, idx) => (
                      <div
                        key={action.id}
                        onClick={() => {
                          setSelectedSource(action.source);
                          setSelectedActionItem(action);
                        }}
                        className="w-full bg-white hover:bg-gray-50 rounded-xl p-4 transition-all duration-700 ease-in-out cursor-pointer group flex items-start gap-4 animate-in fade-in slide-in-from-top-2"
                        style={{ animationDelay: `${idx * 50}ms`, animationDuration: '600ms' }}
                      >
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-1">
                            <p className="text-sm text-gray-900 flex-1 group-hover:text-gray-700">
                              {action.title}
                            </p>
                            <div className="flex items-center gap-1 flex-shrink-0 ml-3">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setFlaggedActions(prev =>
                                    prev.includes(action.id) ? prev.filter(id => id !== action.id) : [...prev, action.id]
                                  );
                                }}
                                className={`p-1 rounded hover:bg-gray-100 transition-colors ${
                                  flaggedActions.includes(action.id) ? 'text-red-500' : 'text-gray-400'
                                }`}
                              >
                                <Flag className={`h-4 w-4 ${flaggedActions.includes(action.id) ? 'fill-current' : ''}`} />
                              </button>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <button
                                    onClick={(e) => e.stopPropagation()}
                                    className="p-1 rounded hover:bg-gray-100 transition-colors text-gray-400"
                                  >
                                    <MoreVertical className="h-4 w-4" />
                                  </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem onClick={(e) => {
                                    e.stopPropagation();
                                    if (completedActions.includes(action.id)) {
                                      setCompletedActions(completedActions.filter(id => id !== action.id));
                                    } else {
                                      setCompletedActions([...completedActions, action.id]);
                                    }
                                  }}>
                                    {completedActions.includes(action.id) && <Check className="h-4 w-4 mr-2" />}
                                    {!completedActions.includes(action.id) && <div className="w-4 h-4 mr-2" />}
                                    {completedActions.includes(action.id) ? 'Unmark as Done' : 'Mark as Done'}
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    className="text-red-600 focus:text-red-600 focus:bg-red-50"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setCompletedActions([...completedActions, action.id]);
                                    }}
                                  >
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <p className="text-xs text-gray-400">{action.createdAt}</p>
                            <div className="flex items-center gap-1.5 px-2 py-0.5 bg-white border border-gray-200 rounded-full max-w-xs">
                              <Image
                                src={action.source.appType === 'gmail' ? '/logos/gmail.webp' :
                                     action.source.appType === 'slack' ? '/logos/slack.png' :
                                     action.source.appType === 'drive' ? '/logos/drive.png' :
                                     action.source.appType === 'sheets' ? '/logos/google-sheets.png' :
                                     '/logos/salesforce.png'}
                                alt={action.source.appType}
                                width={12}
                                height={12}
                                className="object-contain flex-shrink-0"
                                priority
                              />
                              <span className="text-xs text-gray-500 truncate">{action.source.title}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Alerts */}
            <div className="col-span-1 flex flex-col" style={{ maxHeight: '730px', minWidth: '300px' }}>
              <h2 className="text-3xl font-normal text-gray-900 mb-4">Alerts</h2>
              <div className="space-y-3 overflow-y-auto flex-1 rounded-2xl">
                {mockAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className={`rounded-2xl p-4 border-2 ${getAlertColor(alert.level)} relative`}
                  >
                    <button className={`absolute top-1.5 right-1.5 p-0.5 rounded hover:bg-black/5 transition-colors ${
                      alert.level === 'critical' ? 'text-red-600' :
                      alert.level === 'important' ? 'text-orange-600' :
                      'text-blue-600'
                    }`}>
                      <MoreVertical className="h-4 w-4" />
                    </button>
                    <div className="flex items-start gap-3 mb-2 pr-8">
                      {getAlertIcon(alert.level)}
                      <h3 className="text-sm font-semibold flex-1">{alert.title}</h3>
                    </div>
                    <p className="text-xs mb-2" style={{ lineHeight: '1.5' }}>
                      {alert.message}
                    </p>
                    <p className="text-xs opacity-75 italic">
                      {alert.impact}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar at Bottom */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center px-8" style={{ left: 'calc(256px + 48px)' }}>
          <div className="w-full max-w-3xl" style={{ minWidth: '400px' }}>
            <form onSubmit={handleSearchSubmit}>
              <div className="relative">
                <div className="relative bg-white/95 backdrop-blur-xl rounded-full border border-gray-300" style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                  <div className="flex items-center gap-3 pl-4 pr-6 py-3">
                    <button
                      type="button"
                      className="w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-gray-200"
                    >
                      <Plus className="h-6 w-6 text-gray-600" style={{ strokeWidth: 1.7 }} />
                    </button>
                    <textarea
                      value={searchInput}
                      onChange={(e) => {
                        setSearchInput(e.target.value);
                        const target = e.target as HTMLTextAreaElement;
                        target.style.height = 'auto';
                        target.style.height = Math.min(target.scrollHeight, 400) + 'px';
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSearchSubmit(e);
                        }
                      }}
                      placeholder="Ask HighForce anything..."
                      className="flex-1 bg-transparent border-0 focus:outline-none focus:ring-0 text-gray-900 placeholder-gray-400 text-sm resize-none max-h-[400px] overflow-y-auto"
                      rows={1}
                      style={{ height: '20px', lineHeight: '20px' }}
                    />
                    <button
                      type="button"
                      className="w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-gray-200"
                    >
                      <Mic className="h-5 w-5 text-gray-600" />
                    </button>
                    <button
                      type="submit"
                      disabled={!searchInput.trim()}
                      className="w-10 h-10 flex-shrink-0 rounded-full text-white flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
                      style={{ backgroundColor: '#2c8492' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#258290'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2c8492'}
                    >
                      <ArrowUp className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

      {/* Source Modal */}
      {selectedSource && (
        <SourceModal
          isOpen={!!selectedSource}
          onClose={() => {
            setSelectedSource(null);
            setSelectedActionItem(null);
          }}
          source={selectedSource}
          actionItem={selectedActionItem}
        />
      )}

      {/* Report Modal */}
      {selectedReport && (
        <ReportModal
          isOpen={!!selectedReport}
          onClose={() => setSelectedReport(null)}
          report={selectedReport}
        />
      )}
    </div>
  );
}
