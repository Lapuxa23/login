import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import ProductsPage from './pages/products/ProductsPage'
import ProductDetailsPage from './pages/products/ProductDetailsPage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import './App.css'

function MainNavigation() {
  return (
    <nav className="main-nav" aria-label="Основная навигация">
      <Link to="/products">Каталог</Link>
      <Link to="/login">Вход</Link>
      <Link to="/register">Регистрация</Link>
    </nav>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to="/products" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
