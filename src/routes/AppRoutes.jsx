
import { Routes, Route } from 'react-router-dom'
import { Login } from '../pages/LoginPage'
import { SingUp } from '../pages/Singup'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      <Route path="/register" element={<SingUp />} />
    </Routes>
  )
}