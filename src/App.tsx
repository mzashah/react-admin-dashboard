import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { Dashboard } from './pages/Dashboard'
import { Analytics } from './pages/Analytics'
import { Users } from './pages/Users'
import { Settings } from './pages/Settings'
import { useThemeStore } from './store/theme'

export default function App() {
  const { isDark } = useThemeStore()

  return (
    <div className={isDark ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
          <Sidebar />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/users" element={<Users />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </div>
  )
}
