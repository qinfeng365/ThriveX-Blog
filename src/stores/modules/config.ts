import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Layout, Web } from '@/types/app/project';

interface ConfigState {
  // 是否暗黑模式
  isDark: boolean;
  setIsDark: (status: boolean) => void;

  // 网站配置
  web: Web;
  setWeb: (data: Web) => void;

  // 主题配置
  theme: Layout;
  setTheme: (data: Layout) => void;
}

export default create(
  persist<ConfigState>(
    (set) => ({
      isDark: false,
      setIsDark: (status: boolean) => set(() => ({ isDark: status })),

      web: {} as Web,
      setWeb: (data: Web) => set(() => ({ web: data })),

      theme: {} as Layout,
      setTheme: (data: Layout) => set(() => ({ theme: data }))
    }),
    {
      name: 'config_storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
)