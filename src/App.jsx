import { useEffect, useState } from 'react'
import { Home, Users, Settings, Mail } from 'lucide-react'
import { NavBar } from './components/NavBar'
import { GridComponent } from './components/GridComponent'
import AboutSection from './components/AboutSection'
import ConferenceThemes from './components/ConferenceThemes'
import CollaboratorsSection from './components/CollaboratorsSection'
import LoadingLines from './components/LoadingLines'
import ScrollProgressBar from './components/ui/scroll-progress-bar'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'Schedule', url: '#', icon: Users },
    { name: 'Registration', url: '#', icon: Settings },
    { name: 'Publications', url: '#', icon: Mail },
  ]

  if (isLoading) {
    return <LoadingLines />
  }

  return (
    <div className="min-h-[200vh] w-full relative bg-slate-950">
      <ScrollProgressBar type="bar" color="#3b82f6" strokeSize={4} />
      <NavBar items={navItems} />
      <GridComponent />
      <AboutSection />
      <ConferenceThemes />
      <CollaboratorsSection />
    </div>
  )
}
