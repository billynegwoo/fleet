import { useEffect, useState } from 'react'
import { useTheme } from '~/contexts/ThemeContext'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative h-12 w-12 rounded-full border-2 border-steampunk-border bg-steampunk-surface p-2 transition-colors hover:bg-steampunk-hover dark:border-steampunk-accent"
      aria-label="Toggle theme"
    >
      <div className="gear-animation absolute inset-0 m-auto h-6 w-6 text-steampunk-gear">
        {theme === 'dark' ? (
          <GearIcon className="h-6 w-6 animate-spin-slow" />
        ) : (
          <SunIcon className="h-6 w-6" />
        )}
      </div>
    </button>
  )
}

function GearIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0z"/>
      <path d="M12 0L9.5 1.5l-3-1L4 3 2.5 6l-2 2.5L2 12l-1.5 3.5 1 3L4 21l2.5 1.5L9 24h6l2.5-1.5 3-1L23 19l1.5-2.5 1-3L24 12l1.5-3.5-1-3L21 3l-2.5-1.5-3 1L13 0H9zm0 2h2l2 1.5 2.5-1L20 4l1.5 2 1 2.5L24 12l-1.5 3.5 1 2.5L21 20l-2 1.5-2.5-1L13 22h-2l-2-1.5-2.5 1L4 20l-1.5-2-1-2.5L0 12l1.5-3.5-1-2.5L3 4l2-1.5 2.5 1L11 2h1z"/>
    </svg>
  )
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM11 0h2v4h-2V0zM11 20h2v4h-2v-4zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zM0 11v2h4v-2H0zM20 11v2h4v-2h-4zM3.515 19.071l2.121-2.121 1.414 1.414-2.121 2.121-1.414-1.414zM16.95 5.636l2.121-2.121 1.414 1.414-2.121 2.121-1.414-1.414z"/>
    </svg>
  )
} 