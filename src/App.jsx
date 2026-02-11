import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import { logout } from './features/auth/authSlice'

export default function App() {
    const dispatch = useDispatch()
    const { token, userId } = useSelector((state) => state.auth)

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={token ? <Navigate to="/profile" /> : <Navigate to="/login" />}
                />
                <Route
                    path="/login"
                    element={token ? <Navigate to="/profile" /> : <LoginPage />}
                />
                <Route
                    path="/register"
                    element={token ? <Navigate to="/profile" /> : <RegisterPage />}
                />
                <Route
                    path="/profile"
                    element={
                        token ? (
                            <main className="form form--profile">
                                <h2>Профиль</h2>
                                <p className="form__message">Вы успешно авторизованы.</p>
                                {userId && <p className="form__message">ID пользователя: {userId}</p>}
                                <button type="button" onClick={() => dispatch(logout())}>
                                    Выйти
                                </button>
                            </main>
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}
