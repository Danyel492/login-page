import { React, useState } from 'react'
import { FaUser, FaLock } from 'react-icons/fa'
import './Login.css'

export const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        
        alert(`Enviando dados: Usuário: ${username} - Senha: ${password}`)
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Acesse o sistema</h1>
                <div className='input-field'>
                    <input
                        type="email"
                        placeholder='E-mail'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <FaUser className='icon' />
                </div>
                <div className='input-field'>
                    <input
                    type="password"
                    placeholder='Senha'
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaLock className='icon' />
                </div>

                <div className="recal-forget">
                    <label>
                        <input type="checkbox" />
                        Lembre de mim
                    </label>
                    <a href="#"> Esqueceu a senha?</a>
                </div>
                <button>Entrar</button>
                <div className="signup-link">
                    <p>Não tem uma conta? <a href="#">Registrar-se</a></p>
                </div>
            </form>
        </div>
    )
}