function Login() {
  return (
    <section className="page">
      <p className="eyebrow">Acceso seguro</p>
      <h1>Login</h1>
      <p className="lead">Ingresa tus credenciales para continuar.</p>
      <form className="card form-card" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="email">Correo</label>
        <input id="email" type="email" placeholder="correo@dominio.com" />

        <label htmlFor="password">Contraseña</label>
        <input id="password" type="password" placeholder="••••••••" />

        <button type="submit">Ingresar</button>
      </form>
    </section>
  );
}

export default Login;
