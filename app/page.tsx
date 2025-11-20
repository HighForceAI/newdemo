"use client";

import { useAuth } from "@/contexts/auth-context";
import Sidebar from "@/components/sidebar";

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="flex h-screen bg-white">
      {/* Light grey bubble nav bar */}
      <div className="p-4">
        <div className="rounded-3xl overflow-hidden" style={{ height: 'calc(100vh - 32px)', backgroundColor: '#EDEEF8' }}>
          <Sidebar user={user} />
        </div>
      </div>

      {/* Empty white space - nothing else */}
      <div className="flex-1"></div>
    </div>
  );
}
