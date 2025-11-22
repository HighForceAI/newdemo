"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/sidebar";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { getDailyReports, DailyReport } from "@/lib/demo-data";
import ReportCard from "@/components/ReportCard";
import ReportModal from "@/components/ReportModal";

export default function DailyReportsPage() {
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState<DailyReport | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 10);
    return () => clearTimeout(timer);
  }, []);

  const formatDateToString = (date: Date): string => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const reports = getDailyReports(formatDateToString(selectedDate));

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date);
      setCalendarOpen(false);
    }
  };

  const navigateDay = (direction: 'prev' | 'next') => {
    const newDate = new Date(selectedDate);
    if (direction === 'prev') {
      newDate.setDate(newDate.getDate() - 1);
    } else {
      newDate.setDate(newDate.getDate() + 1);
    }
    setSelectedDate(newDate);
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar - fixed position, always visible */}
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

      {/* Main content with fade-in */}
      <div
        className={`flex-1 overflow-y-auto p-8 pt-12 transition-opacity duration-1000 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ willChange: isLoaded ? 'auto' : 'opacity' }}
      >
        <div className="max-w-7xl mx-auto" style={{ minWidth: '800px' }}>
          {/* Header with Date and Calendar */}
          <div className="flex items-end justify-between mb-12">
            {/* Left: Selected Date Display */}
            <div>
              <h1 className="text-3xl font-normal text-gray-900">
                {selectedDate.toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </h1>
              <p className="text-base text-gray-400 font-light mt-2">Viewing all reports for this day</p>
            </div>

            {/* Right: Date Navigation */}
            <div className="flex gap-2">
              <Button variant="outline" size="lg" onClick={() => navigateDay('prev')} className="font-normal">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous Day
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigateDay('next')} className="font-normal">
                Next Day
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
              <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="lg" className="font-normal">
                    <CalendarIcon className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="end">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleDateSelect}
                    captionLayout="dropdown"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Report Cards */}
          <div className="grid grid-cols-1 gap-6">
            {reports.map((report) => (
              <ReportCard
                key={report.id}
                title={report.title}
                icon={report.icon}
                summary={report.summary}
                sourceCount={report.sources.length}
                sources={report.sources}
                onClick={() => setSelectedReport(report)}
              />
            ))}
          </div>

          {/* Empty State */}
          {reports.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400">No reports available for this date</p>
            </div>
          )}
        </div>
      </div>

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
