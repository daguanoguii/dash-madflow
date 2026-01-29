import { Routes, Route, useLocation } from 'react-router-dom'
import { Login } from '../pages/LoginPage'
import { SingUp } from '../pages/SingUp'
import { PageTransition } from '../components/PageTransition'
import { AnimatePresence } from 'framer-motion'

export const AppRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
    <Routes location={location} key={location.pathname}>

      <Route path="/login" element={<PageTransition>  
                                      <Login /> 
                                    </PageTransition>} 
                                  />
      
      <Route path="/register" element={<PageTransition>
                                          <SingUp />
                                      </PageTransition>} 
                                      />
    </Routes>
    </AnimatePresence>
  )
}