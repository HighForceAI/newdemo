"use client";

import { Suspense, useEffect, useState, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";
import Sidebar from "@/components/sidebar";
import SourceCard from "@/components/SourceCard";
import SourceModal from "@/components/SourceModal";
import GroupedSourceCard from "@/components/GroupedSourceCard";
import { Loader2, ArrowUp, Plus, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import SmartMarkdown from '@/components/SmartMarkdown';
import { mockChatConversations, getDemoConversation, Source as DemoSource } from "@/lib/demo-data";

interface Message {
  role: "user" | "assistant";
  content: string;
  sources?: DemoSource[];
}

function SearchPageContent() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loadingChat, setLoadingChat] = useState(false);
  const [currentChatId, setCurrentChatId] = useState<string | null>(null);
  const [selectedSource, setSelectedSource] = useState<DemoSource | null>(null);
  const [loadingTextIndex, setLoadingTextIndex] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [streamingText, setStreamingText] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [recentChats, setRecentChats] = useState<Array<{id: string, title: string, created_at: string}>>([]);
  const [autoScroll, setAutoScroll] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Calculate textarea height based on line count
  const lineCount = input.split('\n').length;
  const textareaHeight = Math.min(lineCount * 20 + 20, 300);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);


  const loadingTexts = [
    "Searching",
    "Analyzing",
    "Processing",
    "Finding",
    "Reviewing",
    "Examining",
    "Scanning",
    "Investigating",
    "Coalescing",
    "Manifesting",
    "Brewing",
    "Synthesizing",
    "Aggregating",
    "Compiling",
    "Orchestrating",
    "Curating",
    "Assembling",
    "Materializing",
    "Conjuring",
    "Foraging",
    "Mining",
    "Excavating",
    "Harvesting",
    "Distilling",
    "Weaving",
    "Crafting",
    "Summoning",
    "Channeling",
    "Divining",
    "Contemplating",
  ];

  // Cycle through loading texts
  useEffect(() => {
    if (loadingChat) {
      const interval = setInterval(() => {
        setLoadingTextIndex((prev) => (prev + 1) % loadingTexts.length);
      }, 5000);
      return () => clearInterval(interval);
    } else {
      setLoadingTextIndex(0);
    }
  }, [loadingChat]);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  // Check for query parameter from dashboard
  useEffect(() => {
    const query = searchParams.get("q");
    if (query && messages.length === 0) {
      setInput(query);
      // Auto-submit the query
      setTimeout(() => {
        handleSearch(query);
      }, 100);
    }
  }, [searchParams]);

  // Load existing chat if chat_id is present
  useEffect(() => {
    const chatId = searchParams.get("chat_id");
    if (chatId && chatId !== currentChatId) {
      setCurrentChatId(chatId);
      loadChatMessages(chatId);
    }
  }, [searchParams]);

  const loadChatMessages = (chatId: string) => {
    const conversation = getDemoConversation(chatId);
    if (conversation) {
      setMessages(conversation.messages);
    }
  };

  const scrollToBottom = () => {
    if (autoScroll) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingText, autoScroll]);

  // Detect manual scroll to disable auto-scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 50;
      setAutoScroll(isAtBottom);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (queryText?: string) => {
    const searchQuery = queryText || input;
    if (!searchQuery.trim()) return;

    const userMessage: Message = { role: "user", content: searchQuery };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoadingChat(true);

    // Create new chat ID
    const newChatId = `chat_${Date.now()}`;
    const chatTitle = searchQuery.substring(0, 50) + (searchQuery.length > 50 ? '...' : '');

    // Update URL to reflect new chat
    router.push(`/search?chat_id=${newChatId}`);
    setCurrentChatId(newChatId);

    // 6 second delay before streaming starts
    setTimeout(() => {
      setLoadingChat(false);

      // Always use the NetLogic chat (chat_004) for demo purposes
      const demoConvo = mockChatConversations.find(c => c.id === 'chat_004');

      if (demoConvo && demoConvo.messages[1]) {
        const responseContent = demoConvo.messages[1].content;
        const responseSources = demoConvo.messages[1].sources || [];

        // Start streaming
        setIsStreaming(true);
        setStreamingText("");

        let currentIndex = 0;
        const streamInterval = setInterval(() => {
          if (currentIndex < responseContent.length) {
            setStreamingText(responseContent.substring(0, currentIndex + 1));
            currentIndex += Math.floor(Math.random() * 5) + 3; // Stream 3-7 characters at a time (50% faster)

            if (currentIndex >= responseContent.length) {
              setStreamingText(responseContent);
              setIsStreaming(false);
              clearInterval(streamInterval);

              // Add complete message with sources
              setMessages((prev) => [...prev, {
                role: "assistant",
                content: responseContent,
                sources: responseSources
              }]);
              setStreamingText("");

              // After 2 seconds, add chat to Recent Chats with streaming title
              setTimeout(() => {
                // Save to localStorage so sidebar can pick it up
                const newChat = {
                  id: newChatId,
                  title: chatTitle,
                  created_at: new Date().toISOString()
                };

                const existingChats = JSON.parse(localStorage.getItem('demoChats') || '[]');
                localStorage.setItem('demoChats', JSON.stringify([newChat, ...existingChats]));

                // Trigger storage event for sidebar to update
                window.dispatchEvent(new Event('storage'));
              }, 2000);
            }
          }
        }, 20); // 20ms per chunk (faster from 30ms)

      } else {
        // Generic response for unmatched queries
        setMessages((prev) => [...prev, {
          role: "assistant",
          content: "I understand you're asking about " + searchQuery + ". Based on your connected data sources, I don't have specific information about this query in the demo environment. Try asking about ACME Corp, NetLogic coordination, revenue analysis, or recent client communications.",
          sources: []
        }]);
      }
    }, 6000); // 6 second delay
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-white">
        {/* Loading - no spinner, just white screen */}
      </div>
    );
  }

  if (!user) return null;

  return (
    <>
      {/* Loading overlay for main content only */}
      {!isLoaded && (
        <div className="fixed bg-white z-50" style={{ left: 'calc(256px + 48px)', top: 0, right: 0, bottom: 0 }} />
      )}

      {/* Main Content container */}
      <div
        className={`flex-1 flex flex-col overflow-hidden transition-opacity duration-1000 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ willChange: isLoaded ? 'auto' : 'opacity' }}
      >
        {/* Messages Area */}
        <div
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto flex justify-center"
          style={{ paddingTop: '24px', paddingBottom: messages.length > 0 ? 'calc(180px + 5vh)' : '24px' }}
        >
          <div className={`w-full space-y-4 ${messages.length > 0 ? 'pt-20' : ''} px-4`} style={{ maxWidth: 'calc(55rem + 2rem)' }}>
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] pt-[10vh]">
                <h2 className="text-2xl font-normal text-gray-900 mb-3">Welcome back, Hayden</h2>
                <p className="text-gray-600 text-center max-w-md mb-8 text-base font-light">
                  Search across all your connected documents, emails, and data sources
                </p>

                {/* Search Bar */}
                <div className="w-full mb-8 px-4" style={{ maxWidth: '55rem', minWidth: '400px' }}>
                  <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
                    <div className="relative">
                      <div className={`relative bg-white/95 backdrop-blur-xl border border-gray-300 transition-all duration-150 ease-out ${textareaHeight > 40 ? 'rounded-3xl' : 'rounded-full'}`} style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                        <div className="flex items-center gap-3 pl-4 pr-6 py-3">
                          <button
                            type="button"
                            className="w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-gray-200"
                          >
                            <Plus className="h-6 w-6 text-gray-600" style={{ strokeWidth: 1.7 }} />
                          </button>
                          <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleSearch();
                              }
                            }}
                            placeholder="Ask HighForce anything..."
                            className="flex-1 bg-transparent border-0 focus:outline-none focus:ring-0 text-gray-900 placeholder-gray-400 text-sm resize-none max-h-[400px] overflow-y-auto transition-all duration-150 ease-out"
                            disabled={loadingChat}
                            rows={1}
                            style={{ height: textareaHeight + 'px', lineHeight: '20px' }}
                          />
                          <button
                            type="button"
                            className="w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-gray-200"
                          >
                            <Mic className="h-5 w-5 text-gray-600" />
                          </button>
                          <button
                            type="submit"
                            disabled={!input.trim() || loadingChat}
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

                {/* Suggestion chips */}
                <div className={`flex flex-wrap gap-3 justify-center max-w-2xl transition-opacity duration-500 ${input.trim() ? 'opacity-0' : 'opacity-100'}`}>
                  <Button
                    variant="outline"
                    onClick={() => setInput("Summarize recent business emails")}
                    className="font-normal"
                    style={{ boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)' }}
                  >
                    Recent business emails
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setInput("Show me financial documents")}
                    className="font-normal"
                    style={{ boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)' }}
                  >
                    Financial docs
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setInput("What meetings do I have this week?")}
                    className="font-normal"
                    style={{ boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)' }}
                  >
                    This week's meetings
                  </Button>
                </div>
              </div>
            )}

            {messages.map((message, idx) => (
              <div key={idx} className={message.role === "user" ? "flex justify-end" : "flex justify-start"}>
                {message.role === "user" ? (
                  <div className="bg-black text-white rounded-3xl px-6 py-4">
                    <p className="text-sm">{message.content}</p>
                  </div>
                ) : (
                  <div className="w-full">
                    <div className="bg-white rounded-2xl p-5">
                      <div className="prose prose-sm max-w-none prose-code:text-gray-900 prose-code:bg-gray-100">
                        <SmartMarkdown content={message.content} />
                      </div>

                      {/* Sources */}
                      {message.sources && message.sources.length > 0 && (() => {
                        // Group sources by app type
                        const grouped = message.sources.reduce((acc, source) => {
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
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                              Sources ({message.sources.length})
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
                        );
                      })()}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {loadingChat && (
              <div className="flex justify-start">
                <div className="w-full">
                  <div className="bg-white rounded-2xl p-5">
                    <span className="text-sm text-gray-600 animate-pulse font-normal">
                      {loadingTexts[loadingTextIndex]}...
                    </span>
                  </div>
                </div>
              </div>
            )}

            {isStreaming && streamingText && (
              <div className="flex justify-start">
                <div className="w-full">
                  <div className="bg-white rounded-2xl p-5">
                    <div className="prose prose-sm max-w-none prose-code:text-gray-900 prose-code:bg-gray-100">
                      <SmartMarkdown content={streamingText} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />

            {/* Spacer to ensure messages are visible above search bar */}
            {messages.length > 0 && <div style={{ height: '100px' }} />}
          </div>
        </div>

        {/* White block to hide messages behind search bar */}
        {messages.length > 0 && (
          <div className="fixed right-0 flex justify-center px-4 z-20 pointer-events-none" style={{ left: 'calc(256px + 48px)', bottom: 0, height: '80px' }}>
            <div className="w-full bg-white" style={{ maxWidth: '55rem' }}></div>
          </div>
        )}

        {/* Input Area - Fixed at bottom (only show when there are messages) */}
        {messages.length > 0 && (
        <div className="fixed bottom-6 right-0 flex justify-center px-4 z-30 pointer-events-none" style={{ left: 'calc(256px + 48px)' }}>
          <div className="w-full pointer-events-auto" style={{ maxWidth: '55rem', minWidth: '400px' }}>
            <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
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
                      value={input}
                      onChange={(e) => {
                        setInput(e.target.value);
                        const target = e.target as HTMLTextAreaElement;
                        target.style.height = 'auto';
                        target.style.height = Math.min(target.scrollHeight, 400) + 'px';
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSearch();
                        }
                      }}
                      placeholder="Ask HighForce anything..."
                      className="flex-1 bg-transparent border-0 focus:outline-none focus:ring-0 text-gray-900 placeholder-gray-400 text-sm resize-none max-h-[400px] overflow-y-auto"
                      disabled={loadingChat}
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
                      disabled={!input.trim() || loadingChat}
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
        )}
      </div>

      {/* Source Modal */}
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

export default function SearchPage() {
  const { user } = useAuth();

  return (
    <div className="flex h-screen bg-white">
      {/* Grey bubble sidebar wrapper - fixed position to prevent any movement */}
      <div className="fixed left-0 top-0 bottom-0 p-6" style={{ width: 'calc(256px + 48px)', zIndex: 10 }}>
        <div className="rounded-3xl" style={{ height: 'calc(100vh - 48px)', backgroundColor: '#E3E4EA', boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.08)', overflow: 'hidden' }}>
          <Sidebar user={user} />
        </div>
      </div>

      {/* Spacer for fixed sidebar */}
      <div style={{ width: 'calc(256px + 48px)', flexShrink: 0 }} />

      <Suspense fallback={
        <div className="flex-1 flex items-center justify-center bg-white">
          {/* Loading - no spinner */}
        </div>
      }>
        <SearchPageContent />
      </Suspense>
    </div>
  );
}
