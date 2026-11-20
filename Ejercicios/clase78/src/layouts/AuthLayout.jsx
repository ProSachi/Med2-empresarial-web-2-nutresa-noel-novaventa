import { Outlet, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

function AuthLayout() {
  return (
    <div className="layout-container auth-layout">
      {/* Barra lateral en la derecha */}
      <Sidebar />

      {/* Encabezado exclusivo para usuarios logeados */}
      <header className="layout-header auth-header">
        <div className="header-brand">
          <Link to="/recomendaciones" className="brand-logo">
            <span className="brand-dot auth-dot"></span>
            NutriSabor
          </Link>
          <span className="layout-badge badge-auth">Vista para Logeados</span>
        </div>

        {/* Información del usuario autenticado */}
        <div className="auth-user-bar">
          <div className="user-profile">
            <span className="user-avatar" aria-hidden="true">MG</span>
            <div className="user-details">
              <span className="user-name">Mariana Gómez</span>
              <span className="user-status">● Sesión Activa</span>
            </div>
          </div>
          <Link to="/login" className="btn-logout" title="Cerrar sesión actual">
            Cerrar Sesión
          </Link>
        </div>
      </header>

      {/* Barra de bienvenida para usuarios autenticados */}
      <div className="auth-banner">
        <div className="auth-banner-inner">
          <span className="auth-banner-icon">🔒</span>
          <div>
            <strong>Zona Privada NutriSabor:</strong> Acceso a contenido exclusivo y recomendaciones personalizadas según tus preferencias nutricionales.
          </div>
        </div>
      </div>

      {/* Contenido dinámico para usuarios autenticados mediante Outlet */}
      <main className="content layout-main auth-main">
        <Outlet />
      </main>

      {/* Pie de página para vista autenticada */}
      <footer className="layout-footer auth-footer">
        <p>NutriSabor Portal Privado · Datos protegidos y personalizados</p>
        <div className="footer-links">
          <Link to="/recomendaciones">Mis Recomendaciones</Link>
          <span>·</span>
          <Link to="/inicio">Ir al Inicio Público</Link>
        </div>
      </footer>
    </div>
  );
}

export default AuthLayout;
