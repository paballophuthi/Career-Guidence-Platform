import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Navbar from './components/common/Navbar'
import Home from './pages/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import AdminDashboard from './components/admin/AdminDashboard'
import InstituteDashboard from './components/institute/InstituteDashboard'
import StudentDashboard from './components/student/StudentDashboard'
import CompanyDashboard from './components/company/CompanyDashboard'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/institute" element={<InstituteDashboard />} />
            <Route path="/student" element={<StudentDashboard />} />
            <Route path="/company" element={<CompanyDashboard />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
