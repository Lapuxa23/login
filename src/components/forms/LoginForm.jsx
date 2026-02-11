import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearError, login } from '../../features/auth/authSlice'
import '../../styles/form.css'

export default function LoginForm() {
    const dispatch = useDispatch()
    const { isLoading, error } = useSelector((state) => state.auth)

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target

        if (error) {
            dispatch(clearError())
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(login(formData))
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Вход</h2>

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Пароль"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={6}
            />

            {error && <p className="form__message form__message--error">{error}</p>}

            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Загрузка...' : 'Войти'}
            </button>

            <p className="form__footer">
                Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
            </p>
        </form>
    )
}
