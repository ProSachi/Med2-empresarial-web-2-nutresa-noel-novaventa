import { useState } from 'react'
import { AuthPanel } from '../components/AuthPanel'
import { DatosGta } from '../components/DatosGta'
import { HeroSection } from '../components/HeroSection'
import { ModalConfirmacion } from '../components/ModalConfirmacion'
import './HomePage.css'

export function HomePage() {
  const [vistaActiva, setVistaActiva] = useState('login')
  const [modal, setModal] = useState({ abierto: false, mensaje: '' })

  const mostrarConfirmacion = (mensaje) => {
    setModal({ abierto: true, mensaje })
  }

  const cerrarModal = () => {
    setModal({ abierto: false, mensaje: '' })
  }

  return (
    <main className="page">
      <HeroSection />
      <DatosGta />
      <AuthPanel
        vistaActiva={vistaActiva}
        setVistaActiva={setVistaActiva}
        onConfirmacion={mostrarConfirmacion}
      />
      {modal.abierto && (
        <ModalConfirmacion mensaje={modal.mensaje} onClose={cerrarModal} />
      )}
    </main>
  )
}
