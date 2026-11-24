const DATOS_GTA_VI = [
  { etiqueta: 'Estudio', valor: 'Rockstar Games' },
  { etiqueta: 'Ubicación', valor: 'Vice City (Leonida)' },
  { etiqueta: 'Protagonistas', valor: 'Lucia y Jason' },
  { etiqueta: 'Lanzamiento estimado', valor: '2026' },
]

export function DatosGta() {
  return (
    <section className="datos">
      {DATOS_GTA_VI.map((dato) => (
        <article key={dato.etiqueta} className="dato">
          <h2>{dato.etiqueta}</h2>
          <p>{dato.valor}</p>
        </article>
      ))}
    </section>
  )
}
