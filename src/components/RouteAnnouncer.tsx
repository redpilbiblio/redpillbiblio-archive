import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
export function RouteAnnouncer() {
  const location = useLocation()
  useEffect(() => {
    const main = document.getElementById('main-content')
    if (main) {
      main.focus()
    }
    const announcer = document.getElementById('route-announcer')
    if (announcer) {
      announcer.textContent = ''
      setTimeout(() => {
        announcer.textContent = 'Page loaded: ' + document.title
      }, 100)
    }
  }, [location.pathname])
  return (
    <div
      id="route-announcer"
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    />
  )
}
