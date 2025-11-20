"use client";

import { useAuth } from "@/contexts/auth-context";

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      {/* New Sidebar */}
      <div className="w-72 p-6">
        <div className="h-full bg-gradient-to-b from-indigo-100/80 to-cyan-100/80 rounded-3xl p-6 flex flex-col">
          {/* Logo */}
          <div className="mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">HighForce</p>
                <p className="text-xs text-gray-600">Intelligence</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 bg-white rounded-xl text-gray-800 font-medium text-sm shadow-sm">
              <span>📊</span>
              <span>Dashboard</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-white/50 rounded-xl font-medium text-sm">
              <span>👥</span>
              <span>Clients</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-white/50 rounded-xl font-medium text-sm">
              <span>📁</span>
              <span>Reports</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-white/50 rounded-xl font-medium text-sm">
              <span>👤</span>
              <span>Team</span>
            </button>
          </nav>

          {/* Storage Indicator */}
          <div className="mb-6 bg-white/60 rounded-2xl p-4">
            <p className="text-xs text-gray-600 mb-1">Available Storage</p>
            <p className="text-sm font-semibold text-gray-800 mb-2">500 GB</p>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '45%' }}></div>
              </div>
              <span className="text-sm font-medium text-gray-700">45%</span>
            </div>
          </div>

          {/* User Profile */}
          <div className="mb-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  {user?.email?.[0]?.toUpperCase() || "U"}
                </span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">
                  {user?.email?.split("@")[0] || "User"}
                </p>
                <p className="text-xs text-gray-600">Admin</p>
              </div>
            </div>
          </div>

          {/* Log Out */}
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-white/50 rounded-xl font-medium text-sm">
            <span>🚪</span>
            <span>Log Out</span>
          </button>
        </div>
      </div>

      {/* Main Content Area - Crisp White */}
      <div className="flex-1 p-6">
        <div className="h-full bg-white rounded-3xl shadow-xl p-8">
          {/* Content will go here */}
        </div>
      </div>
    </div>
  );
}
