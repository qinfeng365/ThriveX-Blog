import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface ConfigState {
  isDark: boolean;
  setIsDark: (status: boolean) => void
}

export default create(
  persist<ConfigState>(
    (set) => ({
      // 是否暗黑模式
      isDark: false,
      setIsDark: (status: boolean) => set(() => ({ isDark: status })),
    }),
    {
      name: 'config_storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
)