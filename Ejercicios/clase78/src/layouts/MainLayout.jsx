import { Outlet, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

function MainLayout() {
  return (
    <div className="layout-container main-layout">
      {/* Barra lateral en la derecha */}
      <Sidebar />

      {/* Encabezado de Vista Completa (Pública) */}
      <header className="layout-header main-header">
        <div className="header-brand">
          <Link to="/inicio" className="brand-logo">
            <span className="brand-dot"></span>
            NutriSabor
          </Link>
          <span className="layout-badge badge-public">Vista Completa</span>
        </div>

        <nav className="header-quick-nav">
          <Link to="/inicio">Inicio</Link>
          <Link to="/acercade">Acerca de</Link>
          <Link to="/login" className="btn-login-quick">Iniciar Sesión</Link>
        </nav>
      </header>

      {/* Contenido dinámico mediante Outlet */}
      <main className="content layout-main">
        <Outlet />
      </main>

      {/* Pie de página institucional */}
      <footer className="layout-footer main-footer">
        <p>NutriSabor · Plataforma de Bienestar y Alimentación Saludable</p>
        <div className="footer-links">
          <Link to="/inicio">Inicio</Link>
          <span>·</span>
          <Link to="/acercade">Acerca de</Link>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;
