function Inicio() {
  return (
    <section className="page">
      <p className="eyebrow">Plantilla principal</p>
      <h1>Inicio</h1>
      <p className="lead">
        Bienvenido al panel principal con una estructura limpia y moderna.
      </p>
      <div className="cards-grid">
        <article className="card">
          <h3>Novedades</h3>
          <p>Revisa actualizaciones importantes de la plataforma.</p>
        </article>
        <article className="card">
          <h3>Progreso</h3>
          <p>Consulta tus avances y tareas recientes de manera rápida.</p>
        </article>
      </div>
    </section>
  );
}

export default Inicio;
