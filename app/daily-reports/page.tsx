"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/sidebar";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ButtonGroup } from "@/components/ui/button-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Users } from "lucide-react";
import { getDailyReports, DailyReport } from "@/lib/demo-data";
import { mockTeams } from "@/lib/teams-data";
import ReportCard from "@/components/ReportCard";
import ReportModal from "@/components/ReportModal";

export default function ReportsPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedWeek, setSelectedWeek] = useState<Date>(new Date());
  const [selectedMonth, setSelectedMonth] = useState<Date>(new Date());
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState<DailyReport | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<string>('all');

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

  const getWeekRange = (date: Date): { start: Date; end: Date } => {
    const start = new Date(date);
    const day = start.getDay();
    const diff = start.getDate() - day;
    start.setDate(diff);
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    return { start, end };
  };

  const formatWeekRange = (date: Date): string => {
    const { start, end } = getWeekRange(date);
    return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${end.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
  };

  const formatMonth = (date: Date): string => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const reports = getDailyReports(formatDateToString(selectedDate), selectedTeam);

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      if (activeTab === 'daily') setSelectedDate(date);
      else if (activeTab === 'weekly') setSelectedWeek(date);
      else setSelectedMonth(date);
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

  const navigateWeek = (direction: 'prev' | 'next') => {
    const newDate = new Date(selectedWeek);
    if (direction === 'prev') {
      newDate.setDate(newDate.getDate() - 7);
    } else {
      newDate.setDate(newDate.getDate() + 7);
    }
    setSelectedWeek(newDate);
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(selectedMonth);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setSelectedMonth(newDate);
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
          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'daily' | 'weekly' | 'monthly')} className="w-full">
            {/* Daily Tab */}
            <TabsContent value="daily" className="mt-0">
              <div className="mb-8">
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

              <div className="mb-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                  <ButtonGroup>
                    <Button
                      variant={activeTab === 'daily' ? 'default' : 'outline'}
                      onClick={() => setActiveTab('daily')}
                      className="font-normal"
                      style={activeTab === 'daily' ? { backgroundColor: '#2c8492' } : {}}
                    >
                      Daily
                    </Button>
                    <Button
                      variant={activeTab === 'weekly' ? 'default' : 'outline'}
                      onClick={() => setActiveTab('weekly')}
                      className="font-normal"
                      style={activeTab === 'weekly' ? { backgroundColor: '#2c8492' } : {}}
                    >
                      Weekly
                    </Button>
                    <Button
                      variant={activeTab === 'monthly' ? 'default' : 'outline'}
                      onClick={() => setActiveTab('monthly')}
                      className="font-normal"
                      style={activeTab === 'monthly' ? { backgroundColor: '#2c8492' } : {}}
                    >
                      Monthly
                    </Button>
                  </ButtonGroup>

                  <Select value={selectedTeam} onValueChange={setSelectedTeam}>
                    <SelectTrigger className="w-[200px]">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <SelectValue />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Teams</SelectItem>
                      {mockTeams.map(team => (
                        <SelectItem key={team.id} value={team.id}>
                          {team.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  </div>

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
              </div>

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
            </TabsContent>

            {/* Weekly Tab */}
            <TabsContent value="weekly" className="mt-0">
              <div className="mb-8">
                <h1 className="text-3xl font-normal text-gray-900">
                  Week of {formatWeekRange(selectedWeek)}
                </h1>
                <p className="text-base text-gray-400 font-light mt-2">Viewing all end of week reports</p>
              </div>

              <div className="mb-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                  <ButtonGroup>
                    <Button
                      variant={activeTab === 'daily' ? 'default' : 'outline'}
                      onClick={() => setActiveTab('daily')}
                      className="font-normal"
                      style={activeTab === 'daily' ? { backgroundColor: '#2c8492' } : {}}
                    >
                      Daily
                    </Button>
                    <Button
                      variant={activeTab === 'weekly' ? 'default' : 'outline'}
                      onClick={() => setActiveTab('weekly')}
                      className="font-normal"
                      style={activeTab === 'weekly' ? { backgroundColor: '#2c8492' } : {}}
                    >
                      Weekly
                    </Button>
                    <Button
                      variant={activeTab === 'monthly' ? 'default' : 'outline'}
                      onClick={() => setActiveTab('monthly')}
                      className="font-normal"
                      style={activeTab === 'monthly' ? { backgroundColor: '#2c8492' } : {}}
                    >
                      Monthly
                    </Button>
                  </ButtonGroup>

                  <Select value={selectedTeam} onValueChange={setSelectedTeam}>
                    <SelectTrigger className="w-[200px]">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <SelectValue />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Teams</SelectItem>
                      {mockTeams.map(team => (
                        <SelectItem key={team.id} value={team.id}>
                          {team.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="lg" onClick={() => navigateWeek('prev')} className="font-normal">
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      Previous Week
                    </Button>
                    <Button variant="outline" size="lg" onClick={() => navigateWeek('next')} className="font-normal">
                      Next Week
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
                          selected={selectedWeek}
                          onSelect={handleDateSelect}
                          captionLayout="dropdown"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>

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
            </TabsContent>

            {/* Monthly Tab */}
            <TabsContent value="monthly" className="mt-0">
              <div className="mb-8">
                <h1 className="text-3xl font-normal text-gray-900">
                  Month of {formatMonth(selectedMonth)}
                </h1>
                <p className="text-base text-gray-400 font-light mt-2">Viewing all end of month reports</p>
              </div>

              <div className="mb-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                  <ButtonGroup>
                    <Button
                      variant={activeTab === 'daily' ? 'default' : 'outline'}
                      onClick={() => setActiveTab('daily')}
                      className="font-normal"
                      style={activeTab === 'daily' ? { backgroundColor: '#2c8492' } : {}}
                    >
                      Daily
                    </Button>
                    <Button
                      variant={activeTab === 'weekly' ? 'default' : 'outline'}
                      onClick={() => setActiveTab('weekly')}
                      className="font-normal"
                      style={activeTab === 'weekly' ? { backgroundColor: '#2c8492' } : {}}
                    >
                      Weekly
                    </Button>
                    <Button
                      variant={activeTab === 'monthly' ? 'default' : 'outline'}
                      onClick={() => setActiveTab('monthly')}
                      className="font-normal"
                      style={activeTab === 'monthly' ? { backgroundColor: '#2c8492' } : {}}
                    >
                      Monthly
                    </Button>
                  </ButtonGroup>

                  <Select value={selectedTeam} onValueChange={setSelectedTeam}>
                    <SelectTrigger className="w-[200px]">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <SelectValue />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Teams</SelectItem>
                      {mockTeams.map(team => (
                        <SelectItem key={team.id} value={team.id}>
                          {team.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="lg" onClick={() => navigateMonth('prev')} className="font-normal">
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      Previous Month
                    </Button>
                    <Button variant="outline" size="lg" onClick={() => navigateMonth('next')} className="font-normal">
                      Next Month
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
                          selected={selectedMonth}
                          onSelect={handleDateSelect}
                          captionLayout="dropdown"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>

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
            </TabsContent>
          </Tabs>
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
