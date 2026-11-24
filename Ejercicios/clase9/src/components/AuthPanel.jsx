import { FormularioLogin } from './FormularioLogin'
import { FormularioRegistro } from './FormularioRegistro'

export function AuthPanel({ vistaActiva, setVistaActiva, onConfirmacion }) {
  return (
    <section className="acceso">
      <div className="acciones">
        <button
          className={vistaActiva === 'login' ? 'activo' : ''}
          type="button"
          onClick={() => setVistaActiva('login')}
        >
          Login
        </button>
        <button
          className={vistaActiva === 'register' ? 'activo' : ''}
          type="button"
          onClick={() => setVistaActiva('register')}
        >
          Register
        </button>
      </div>

      {vistaActiva === 'login' ? (
        <FormularioLogin onConfirmacion={onConfirmacion} />
      ) : (
        <FormularioRegistro onConfirmacion={onConfirmacion} />
      )}
    </section>
  )
}
