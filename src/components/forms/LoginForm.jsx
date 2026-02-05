import '../../styles/form.css'

export default function LoginForm() {
    return (
        <form className="form">
            <h2>Login</h2>

            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button type="submit">Login</button>
        </form>
    )
}
