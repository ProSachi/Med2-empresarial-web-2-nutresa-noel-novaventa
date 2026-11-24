import { useState } from 'react'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const TEL_REGEX = /^\+?\d{7,15}$/

export function FormularioRegistro({ onConfirmacion }) {
  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
    password: '',
    telefono: '',
  })
  const [error, setError] = useState('')

  const manejarCambio = (evento) => {
    const { name, value } = evento.target
    setFormulario((previo) => ({
      ...previo,
      [name]: value,
    }))
  }

  const validarTipos = () => {
    if (formulario.nombre.trim().length < 3) {
      return 'El nombre debe tener al menos 3 caracteres.'
    }

    if (!EMAIL_REGEX.test(formulario.correo)) {
      return 'Ingresá un correo válido.'
    }

    if (formulario.password.length < 8) {
      return 'La contraseña debe tener mínimo 8 caracteres.'
    }

    if (!TEL_REGEX.test(formulario.telefono)) {
      return 'Ingresá un teléfono válido (7 a 15 dígitos).'
    }

    return ''
  }

  const enviar = (evento) => {
    evento.preventDefault()

    const mensajeError = validarTipos()
    setError(mensajeError)

    if (mensajeError) {
      return
    }

    console.log('Registro silencioso:', formulario)
    onConfirmacion('Registro confirmado. Usuario creado con éxito.')
    setFormulario({ nombre: '', correo: '', password: '', telefono: '' })
  }

  return (
    <form className="formulario" onSubmit={enviar} noValidate>
      <h3>Register</h3>

      <input
        type="text"
        name="nombre"
        value={formulario.nombre}
        onChange={manejarCambio}
        placeholder="Nombre completo"
      />

      <input
        type="email"
        name="correo"
        value={formulario.correo}
        onChange={manejarCambio}
        placeholder="Correo"
      />

      <input
        type="password"
        name="password"
        value={formulario.password}
        onChange={manejarCambio}
        placeholder="Contraseña"
      />

      <input
        type="tel"
        name="telefono"
        value={formulario.telefono}
        onChange={manejarCambio}
        placeholder="Teléfono"
      />

      {error && <p className="error">{error}</p>}

      <button type="submit">Registrar</button>
    </form>
  )
}
