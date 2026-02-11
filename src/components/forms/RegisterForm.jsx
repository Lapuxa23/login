import { Link } from 'react-router-dom'
import '../../styles/form.css'

export default function RegisterForm() {
  return (
    <main className="auth-page">
      <form className="form" onSubmit={(event) => event.preventDefault()}>
        <h1>Регистрация</h1>

        <label>
          Имя
          <input type="text" placeholder="Ваше имя" required />
        </label>

        <label>
          Email
          <input type="email" placeholder="Email" required />
        </label>

        <label>
          Пароль
          <input type="password" placeholder="Минимум 6 символов" minLength={6} required />
        </label>

        <button type="submit">Создать аккаунт</button>
      </form>

      <p className="auth-page__hint">
        Уже есть аккаунт? <Link to="/login">Войти</Link>
      </p>
    </main>
  )
}
