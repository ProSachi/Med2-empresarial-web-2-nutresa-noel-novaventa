import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  // Por defecto oculta al cargar la página
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);
  const sidebarContainerRef = useRef(null);

  // Limpieza de temporizador al desmontar
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Abrir automáticamente con mouse in (cancela temporizador de cierre si existe)
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  // Cerrar con un retraso de 2 segundos (2000 ms) con mouse out
  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  };

  // Cierre inmediato al dar clic en botón
  const handleClose = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(false);
  };

  // Alternar apertura/cierre al dar clic en la pestaña
  const handleToggle = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen((prev) => !prev);
  };

  // Cerrar al dar clic fuera de la barra lateral
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        sidebarContainerRef.current &&
        !sidebarContainerRef.current.contains(event.target)
      ) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div
        ref={sidebarContainerRef}
        className={`sidebar-container ${isOpen ? 'is-open' : 'is-closed'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Pestaña flotante visible en el borde derecho:
            Muestra '<' para abrir (cuando está cerrada) y '>' para cerrar (cuando está abierta) */}
        <button
          type="button"
          className="sidebar-tab-trigger"
          onClick={handleToggle}
          aria-label={isOpen ? 'Cerrar barra lateral' : 'Abrir barra lateral'}
          title={isOpen ? 'Cerrar barra lateral (>)' : 'Abrir barra lateral (<)'}
        >
          <span className="tab-arrow">{isOpen ? '>' : '<'}</span>
        </button>

        {/* Panel lateral ubicado en la parte derecha */}
        <aside className="sidebar-drawer" aria-label="Menú lateral">
          <div className="sidebar-header">
            <h2 className="sidebar-brand">NutriSabor</h2>
            <button
              type="button"
              className="sidebar-close-btn"
              onClick={handleClose}
              aria-label="Cerrar barra lateral"
              title="Cerrar barra lateral"
            >
              &gt;
            </button>
          </div>

          <p className="sidebar-section-title">Navegación</p>

          <nav
            className="sidebar-nav"
            id="primary-navigation"
            aria-label="Navegación principal"
          >
            <NavLink to="/inicio" onClick={handleClose}>
              Inicio
            </NavLink>
            <NavLink to="/acercade" onClick={handleClose}>
              Acerca de
            </NavLink>
            <NavLink to="/login" onClick={handleClose}>
              Login
            </NavLink>
            <NavLink to="/recomendaciones" onClick={handleClose}>
              Recomendaciones
            </NavLink>
          </nav>

          <div className="sidebar-footer">
            <small>NutriSabor © 2026</small>
          </div>
        </aside>
      </div>

      {/* Backdrop para cerrar al hacer clic fuera */}
      {isOpen && (
        <div
          className="sidebar-backdrop"
          onClick={handleClose}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export default Sidebar;
