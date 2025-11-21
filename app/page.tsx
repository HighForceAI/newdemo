"use client";

import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/sidebar";
import { ArrowUp, Plus, Mic } from "lucide-react";
import { useState } from "react";

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchInput)}`);
    }
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Grey bubble sidebar wrapper */}
      <div className="p-6">
        <div className="rounded-3xl overflow-hidden" style={{ height: 'calc(100vh - 48px)', backgroundColor: '#E3E4EA' }}>
          <Sidebar user={user} />
        </div>
      </div>

      {/* Main content area with search bar at bottom */}
      <div className="flex-1 flex flex-col relative">
        <div className="flex-1"></div>

        {/* Search Bar at Bottom */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center px-8">
          <div className="w-full max-w-3xl">
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
                      placeholder="Ask me anything..."
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
      </div>
    </div>
  );
}
