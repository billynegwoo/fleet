import { Toaster } from 'sonner'
import { useTheme } from '~/contexts/ThemeContext'

export function ToasterWithTheme() {
  const { theme } = useTheme()
  return (
    <Toaster
      position="top-right"
      richColors
      theme={theme}
      toastOptions={{
        style: {
          background: theme === 'dark' ? 'var(--steampunk-surface)' : 'white',
          border: theme === 'dark'
            ? '1px solid var(--steampunk-border)'
            : '1px solid var(--gray-200)',
          color: theme === 'dark' ? 'var(--steampunk-text)' : 'var(--gray-900)',
        }
      }}
    />
  )
} 