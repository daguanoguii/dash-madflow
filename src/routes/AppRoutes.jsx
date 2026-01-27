
import { Routes, Route } from 'react-router-dom'
import { Login } from '../pages/LoginPage'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      <Route path="/teste" element={<h1>Router funcionando 🎯</h1>} />
    </Routes>
  )
}