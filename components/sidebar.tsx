"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LogOut,
  LayoutDashboard,
  Search as SearchIcon,
  Settings,
  MessageSquare,
  ChevronDown,
  ChevronRight,
  Clock,
  Trash2,
  FileText,
  Users,
  Calendar,
  MoreHorizontal,
  FileBarChart,
} from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { getChatHistory, deleteChat, type ChatHistoryItem } from "@/lib/api";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface SidebarProps {
  user?: any;
}

export default function Sidebar({ user }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { signOut, isDemoMode } = useAuth();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState<ChatHistoryItem[]>([]);
  const [loadingHistory, setLoadingHistory] = useState(false);
  const [historyExpanded, setHistoryExpanded] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Mock chat history for demo - using actual chat IDs from demo-data.ts
  const mockChats = [
    { id: "chat_001", title: "ACME Corp project status", created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString() },
    { id: "chat_002", title: "Q4 Revenue Analysis", created_at: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString() },
    { id: "chat_003", title: "Client Meeting Notes", created_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString() },
  ];

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const navigation = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Reports", href: "/daily-reports", icon: FileBarChart },
    { name: "Teams", href: "/team", icon: Users },
  ];

  // Load chat history only once when user is available
  useEffect(() => {
    if (user && chatHistory.length === 0) {
      loadChatHistory();
    }
  }, [user]);

  const loadChatHistory = async () => {
    try {
      setLoadingHistory(true);
      const result = await getChatHistory();
      setChatHistory(result.chats || []);
    } catch (error) {
      console.error("Failed to load chat history:", error);
    } finally {
      setLoadingHistory(false);
    }
  };

  const handleDeleteChat = async (chatId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await deleteChat(chatId);
      setChatHistory((prev) => prev.filter((chat) => chat.id !== chatId));
      toast({
        title: "Chat deleted",
        description: "Chat has been deleted successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to delete chat",
      });
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (hours < 1) return "Just now";
    if (hours < 24) return `${hours}h ago`;
    if (days === 1) return "Yesterday";
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="w-64 h-full rounded-3xl p-6 flex flex-col" style={{ backgroundColor: '#E3E4EA', border: 'none', boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.08)' }}>
      {/* Logo */}
      <div className="mb-8">
        <Link href="/">
          <div className="cursor-pointer hover:opacity-80 transition-opacity">
            <img src="/highforce-logo-cropped.png" alt="HighForce" className="h-16 w-auto" style={{ objectFit: 'contain', objectPosition: 'left center' }} />
          </div>
        </Link>
      </div>

      {/* Search */}
      <div className="relative mb-3">
        {pathname === "/search" && (
          <div className="absolute top-1/2 -translate-y-1/2 w-1 rounded-r-full z-10" style={{ left: '-20px', height: '34px', backgroundColor: '#2c8492' }} />
        )}
        <button
          onClick={() => router.push("/search")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-normal transition-colors ${
            pathname === "/search"
              ? "bg-white text-gray-800 shadow-sm"
              : "text-gray-700 hover:bg-[#2c8492]/20"
          }`}
        >
          <SearchIcon className="h-4 w-4" />
          <span>Search</span>
        </button>
      </div>

      {/* Navigation */}
      <nav className="space-y-2 mb-6">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link key={item.name} href={item.href}>
              <div className="relative mb-3">
                {isActive && (
                  <div className="absolute top-1/2 -translate-y-1/2 w-1 rounded-r-full z-10" style={{ left: '-20px', height: '34px', backgroundColor: '#2c8492' }} />
                )}
                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-normal transition-colors ${
                    isActive
                      ? "bg-white text-gray-800 shadow-sm"
                      : "text-gray-700 hover:bg-[#2c8492]/20"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </button>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Chat History Section - Always show with mock data */}
      <div className="border-t border-gray-300 pt-4 pb-4 flex-1">
        <button
          onClick={() => setHistoryExpanded(!historyExpanded)}
          className="w-full flex items-center justify-between px-4 py-3 text-sm font-normal text-gray-500 rounded-xl transition-colors"
        >
          <span>Recent Chats</span>
          <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${historyExpanded ? '' : '-rotate-90'}`} />
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            historyExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mt-3 space-y-1">
            {mockChats.map((chat) => (
              <div key={chat.id} className="relative group/chat mb-1 rounded-xl hover:bg-[#2c8492]/20 transition-colors">
                <div
                  onClick={() => router.push(`/search?chat_id=${chat.id}`)}
                  className="w-full h-auto py-2 px-4 pr-10 text-sm font-normal text-gray-700 rounded-xl cursor-pointer relative"
                >
                  <div>
                    <p className="text-sm font-normal truncate">
                      {chat.title}
                    </p>
                    <p className="text-xs text-gray-600 font-light mt-0.5">
                      {formatTimestamp(chat.created_at)}
                    </p>
                  </div>
                </div>
                {/* Gradient fade overlay */}
                <div className="absolute right-0 top-0 bottom-0 w-20 pointer-events-none opacity-0 group-hover/chat:opacity-100 transition-opacity rounded-r-xl" style={{ background: 'linear-gradient(to right, transparent, #E3E4EA 60%)' }} />
                {/* Delete button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteChat(chat.id, e);
                  }}
                  className="absolute right-2 top-2 p-1 transition-all opacity-0 group-hover/chat:opacity-100"
                  style={{ color: '#2c8492' }}
                >
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* User Section */}
      <div className="mt-auto">
        <button className="w-full flex items-center gap-3 mb-4 px-4 py-3 rounded-xl text-gray-700 hover:bg-[#2c8492]/20 transition-colors">
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2c8492' }}>
            <span className="text-white text-xs font-medium">
              {user?.email?.[0]?.toUpperCase() || "U"}
            </span>
          </div>
          <div className="flex-1 min-w-0 text-left">
            <p className="text-sm font-light truncate text-gray-800">
              {mounted && user ? (user.user_metadata?.name || user.email?.split("@")[0]) : "Loading..."}
            </p>
            <p className="text-xs text-gray-600 font-light">Admin</p>
          </div>
        </button>

        <div className="space-y-3">
          {/* Hide Settings in demo mode */}
          {!isDemoMode && (
            <button
              onClick={() => router.push("/connections")}
              className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-[#2c8492]/20 rounded-xl text-sm font-normal transition-colors"
            >
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </button>
          )}
          <button
            onClick={() => signOut()}
            className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-[#2c8492]/20 rounded-xl text-sm font-normal transition-colors"
          >
            <LogOut className="h-4 w-4" />
            <span>Log out</span>
          </button>
        </div>
      </div>
    </div>
  );
}
