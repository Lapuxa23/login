import { Link } from 'react-router-dom'
import '../../styles/form.css'

export default function LoginForm() {
  return (
    <main className="auth-page">
      <form className="form" onSubmit={(event) => event.preventDefault()}>
        <h1>Вход</h1>

        <label>
          Email
          <input type="email" placeholder="Email" required />
        </label>

        <label>
          Пароль
          <input type="password" placeholder="Password" minLength={6} required />
        </label>

        <button type="submit">Войти</button>
      </form>

      <p className="auth-page__hint">
        Ещё нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
      </p>
    </main>
  )
}
