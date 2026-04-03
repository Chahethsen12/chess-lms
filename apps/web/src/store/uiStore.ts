import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'dark' | 'light';

interface UIState {
  theme: Theme;
  sidebarOpen: boolean;
  sidebarCollapsed: boolean;
  aiCoachPanelOpen: boolean;
  soundEnabled: boolean;
  animationsEnabled: boolean;
  boardTheme: 'default' | 'green' | 'blue' | 'wood';
  
  // Actions
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
  setAiCoachPanelOpen: (open: boolean) => void;
  toggleAiCoachPanel: () => void;
  setSoundEnabled: (enabled: boolean) => void;
  setAnimationsEnabled: (enabled: boolean) => void;
  setBoardTheme: (theme: UIState['boardTheme']) => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      theme: 'dark',
      sidebarOpen: true,
      sidebarCollapsed: false,
      aiCoachPanelOpen: false,
      soundEnabled: true,
      animationsEnabled: true,
      boardTheme: 'default',

      setTheme: (theme) => {
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.classList.add(theme);
        set({ theme });
      },

      toggleTheme: () => {
        set((state) => {
          const newTheme = state.theme === 'dark' ? 'light' : 'dark';
          document.documentElement.classList.remove('dark', 'light');
          document.documentElement.classList.add(newTheme);
          return { theme: newTheme };
        });
      },

      setSidebarOpen: (sidebarOpen) => set({ sidebarOpen }),
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      setSidebarCollapsed: (sidebarCollapsed) => set({ sidebarCollapsed }),
      
      setAiCoachPanelOpen: (aiCoachPanelOpen) => set({ aiCoachPanelOpen }),
      toggleAiCoachPanel: () => set((state) => ({ 
        aiCoachPanelOpen: !state.aiCoachPanelOpen 
      })),
      
      setSoundEnabled: (soundEnabled) => set({ soundEnabled }),
      setAnimationsEnabled: (animationsEnabled) => set({ animationsEnabled }),
      setBoardTheme: (boardTheme) => set({ boardTheme }),
    }),
    {
      name: 'chess-lms-ui',
    }
  )
);
