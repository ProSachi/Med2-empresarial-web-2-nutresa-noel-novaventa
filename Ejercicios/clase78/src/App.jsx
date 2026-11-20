import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import Inicio from './components/Inicio';
import Acercade from './components/Acercade';
import Login from './components/Login';
import Recomendaciones from './components/Recomendaciones';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirección raíz a /inicio */}
        <Route path="/" element={<Navigate to="/inicio" replace />} />

        {/* Vista Completa - MainLayout para Inicio, Acerca de y Login */}
        <Route element={<MainLayout />}>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/acercade" element={<Acercade />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Vista para Logeados - AuthLayout para Recomendaciones */}
        <Route element={<AuthLayout />}>
          <Route path="/recomendaciones" element={<Recomendaciones />} />
        </Route>

        {/* Ruta comodín de redirección */}
        <Route path="*" element={<Navigate to="/inicio" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
