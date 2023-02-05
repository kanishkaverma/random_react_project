import { useState, createContext, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { LoginPage } from './components/LoginPage'
import { pb } from "../utils/pocketbase"
import { LogoutButton } from './components/LogoutButton'
import { LandingPage } from './components/LandingPage'



export const userContext = createContext<any>(null)

function App() {
  const [user, setuser] = useState<any | null>(null)

  useEffect(() => {
    setuser(pb.authStore.model)
  }, [pb.authStore.isValid])


  return (
    <>
      <userContext.Provider value={{ user, setuser }}>
        {user ? <LandingPage /> : <LoginPage />}
        {pb.authStore.isValid && <LogoutButton />}
      </userContext.Provider >
    </>
  )
}

export default App
