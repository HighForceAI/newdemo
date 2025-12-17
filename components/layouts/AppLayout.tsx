"use client";

import { ReactNode } from 'react';
import Sidebar from '@/components/sidebar';
import { useAuth } from '@/contexts/auth-context';

interface AppLayoutProps {
  children: ReactNode;
  /**
   * Whether to show the bottom search bar
   * Used on dashboard and search pages
   */
  showSearchBar?: boolean;
  /**
   * Custom search bar component to render at the bottom
   */
  searchBarComponent?: ReactNode;
}

/**
 * AppLayout - Main application layout component
 * 
 * Layout Structure:
 * - Fixed full-height sidebar extending to all screen edges (left, top, bottom)
 * - Content area with left margin to accommodate sidebar
 * - Content wrapper with padding and white rounded card
 * 
 * This layout is designed to be responsive and work across all device sizes.
 * The sidebar is 256px wide (16rem / w-64) which is a standard width for navigation.
 */
export default function AppLayout({ 
  children, 
  showSearchBar = false,
  searchBarComponent 
}: AppLayoutProps) {
  const { user } = useAuth();

  return (
    <div className="flex min-h-screen bg-white">
      {/* 
        Sidebar Container
        - Fixed positioning to stay in place during scroll
        - Extends full height from top to bottom
        - No padding or margins - touches all edges
        - Z-index ensures it stays above page background but below modals
      */}
      <aside
        className="fixed left-0 top-0 bottom-0 w-64 overflow-hidden"
        style={{ 
          backgroundColor: '#E3E4EA',
          zIndex: 40
        }}
        aria-label="Main navigation"
      >
        <Sidebar user={user} />
      </aside>

      {/* 
        Main Content Area
        - Margin-left matches sidebar width to prevent overlap
        - Min-height ensures full viewport coverage
        - Flex container for proper content flow
      */}
      <main 
        className="flex-1 min-h-screen"
        style={{ marginLeft: '16rem' }} // 16rem = 256px = w-64
      >
        {/* 
          Content Wrapper
          - Provides padding around the white content card
          - Padding creates the "floating" effect
          - Min-height accounts for padding to maintain full height
        */}
        <div className="p-6 min-h-screen">
          {/* 
            Content Card
            - White background with rounded corners
            - Shadow for elevation/depth
            - Overflow hidden to contain child elements
            - Min-height ensures content fills available space
          */}
          <div 
            className="bg-white rounded-3xl shadow-lg overflow-hidden"
            style={{ 
              minHeight: 'calc(100vh - 3rem)', // 3rem = 48px total vertical padding
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
          >
            {children}
          </div>
        </div>

        {/* 
          Optional Search Bar
          - Absolutely positioned at bottom of viewport
          - Only rendered when showSearchBar is true
          - Z-index ensures it floats above content
        */}
        {showSearchBar && searchBarComponent && (
          <div 
            className="fixed bottom-0"
            style={{ 
              left: '16rem', // Aligns with content area (after sidebar)
              right: 0,
              zIndex: 30,
              pointerEvents: 'none' // Allows clicks through to content
            }}
          >
            <div style={{ pointerEvents: 'auto' }}>
              {searchBarComponent}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

