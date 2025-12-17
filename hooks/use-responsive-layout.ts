"use client";

import { useEffect, useState } from 'react';

/**
 * Breakpoint definitions following Tailwind CSS conventions
 * These match standard device sizes and should be kept in sync with tailwind.config.js
 */
export const BREAKPOINTS = {
  sm: 640,   // Small devices (phones)
  md: 768,   // Medium devices (tablets)
  lg: 1024,  // Large devices (small laptops)
  xl: 1280,  // Extra large devices (desktops)
  '2xl': 1536 // 2X large devices (large desktops)
} as const;

/**
 * Layout configuration constants
 */
export const LAYOUT_CONFIG = {
  SIDEBAR_WIDTH: 256,        // 16rem in pixels
  CONTENT_PADDING: 24,       // 1.5rem in pixels
  MIN_CONTENT_WIDTH: 320,    // Minimum width for content to be usable
  MOBILE_BREAKPOINT: 768     // Below this width, switch to mobile layout
} as const;

interface ResponsiveLayoutState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  screenWidth: number;
  screenHeight: number;
  sidebarWidth: number;
  contentWidth: number;
  shouldCollapseSidebar: boolean;
}

/**
 * useResponsiveLayout Hook
 * 
 * Provides responsive layout information and utilities for the application.
 * Handles:
 * - Screen size detection
 * - Breakpoint matching
 * - Layout calculations
 * - Sidebar collapse logic
 * 
 * This hook ensures the layout adapts properly across all device sizes.
 * 
 * @returns ResponsiveLayoutState object with layout information
 */
export function useResponsiveLayout(): ResponsiveLayoutState {
  const [state, setState] = useState<ResponsiveLayoutState>(() => {
    // Initial state - use safe defaults for SSR
    if (typeof window === 'undefined') {
      return {
        isMobile: false,
        isTablet: false,
        isDesktop: true,
        screenWidth: 1920,
        screenHeight: 1080,
        sidebarWidth: LAYOUT_CONFIG.SIDEBAR_WIDTH,
        contentWidth: 1920 - LAYOUT_CONFIG.SIDEBAR_WIDTH,
        shouldCollapseSidebar: false
      };
    }

    const width = window.innerWidth;
    const height = window.innerHeight;
    const isMobile = width < BREAKPOINTS.md;
    const isTablet = width >= BREAKPOINTS.md && width < BREAKPOINTS.lg;
    const isDesktop = width >= BREAKPOINTS.lg;
    const shouldCollapseSidebar = width < LAYOUT_CONFIG.MOBILE_BREAKPOINT;
    
    return {
      isMobile,
      isTablet,
      isDesktop,
      screenWidth: width,
      screenHeight: height,
      sidebarWidth: shouldCollapseSidebar ? 0 : LAYOUT_CONFIG.SIDEBAR_WIDTH,
      contentWidth: width - (shouldCollapseSidebar ? 0 : LAYOUT_CONFIG.SIDEBAR_WIDTH),
      shouldCollapseSidebar
    };
  });

  useEffect(() => {
    // Debounce resize events for performance
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const isMobile = width < BREAKPOINTS.md;
        const isTablet = width >= BREAKPOINTS.md && width < BREAKPOINTS.lg;
        const isDesktop = width >= BREAKPOINTS.lg;
        const shouldCollapseSidebar = width < LAYOUT_CONFIG.MOBILE_BREAKPOINT;

        setState({
          isMobile,
          isTablet,
          isDesktop,
          screenWidth: width,
          screenHeight: height,
          sidebarWidth: shouldCollapseSidebar ? 0 : LAYOUT_CONFIG.SIDEBAR_WIDTH,
          contentWidth: width - (shouldCollapseSidebar ? 0 : LAYOUT_CONFIG.SIDEBAR_WIDTH),
          shouldCollapseSidebar
        });
      }, 150); // 150ms debounce
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return state;
}

/**
 * Utility function to check if a specific breakpoint is active
 */
export function useBreakpoint(breakpoint: keyof typeof BREAKPOINTS): boolean {
  const { screenWidth } = useResponsiveLayout();
  return screenWidth >= BREAKPOINTS[breakpoint];
}

/**
 * Utility function to get current breakpoint name
 */
export function useCurrentBreakpoint(): keyof typeof BREAKPOINTS | 'xs' {
  const { screenWidth } = useResponsiveLayout();
  
  if (screenWidth >= BREAKPOINTS['2xl']) return '2xl';
  if (screenWidth >= BREAKPOINTS.xl) return 'xl';
  if (screenWidth >= BREAKPOINTS.lg) return 'lg';
  if (screenWidth >= BREAKPOINTS.md) return 'md';
  if (screenWidth >= BREAKPOINTS.sm) return 'sm';
  return 'xs';
}

