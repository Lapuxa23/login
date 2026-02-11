import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearError, register } from '../../features/auth/authSlice'
import '../../styles/form.css'

export default function RegisterForm() {
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
        dispatch(register(formData))
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Регистрация</h2>

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
                {isLoading ? 'Загрузка...' : 'Создать аккаунт'}
            </button>

            <p className="form__footer">
                Уже есть аккаунт? <Link to="/login">Войти</Link>
            </p>
        </form>
    )
}
