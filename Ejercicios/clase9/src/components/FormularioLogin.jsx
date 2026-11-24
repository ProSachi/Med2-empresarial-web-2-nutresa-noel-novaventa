import { useState } from 'react'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function FormularioLogin({ onConfirmacion }) {
  const [formulario, setFormulario] = useState({
    correo: '',
    password: '',
  })
  const [error, setError] = useState('')

  const manejarCambio = (evento) => {
    const { name, value } = evento.target
    setFormulario((previo) => ({ ...previo, [name]: value }))
  }

  const validarTipos = () => {
    if (!EMAIL_REGEX.test(formulario.correo)) {
      return 'Ingresá un correo válido.'
    }

    if (formulario.password.length < 6) {
      return 'La contraseña debe tener mínimo 6 caracteres.'
    }

    return ''
  }

  const procesarFormulario = (evento) => {
    evento.preventDefault()

    const mensajeError = validarTipos()
    setError(mensajeError)

    if (mensajeError) {
      return
    }

    console.log('Login silencioso:', formulario)
    onConfirmacion('Login confirmado. Bienvenido/a a la fanpage.')
    setFormulario({ correo: '', password: '' })
  }

  return (
    <form className="formulario" onSubmit={procesarFormulario} noValidate>
      <h3>Login</h3>

      <input
        type="email"
        name="correo"
        placeholder="Correo"
        value={formulario.correo}
        onChange={manejarCambio}
      />

      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={formulario.password}
        onChange={manejarCambio}
      />

      {error && <p className="error">{error}</p>}

      <button type="submit">Ingresar</button>
    </form>
  )
}
