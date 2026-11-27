import { useState } from 'react';

export function EspejoTexto() {
  const [password, setPassword] = useState("");

  return (
    <div style={{ padding: '20px', background: '#f3f4f6', borderRadius: '8px', maxWidth: '350px' }}>
      <h4>Seguridad de Accesos</h4>
      <input 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Escribe tu clave nueva"
        style={{ padding: '8px', width: '100%' }}
      />
      <p>Longitud actual: <strong>{password.length} caracteres</strong></p>
      
      {/* Renderizado condicional basado en la propiedad .length del estado */}
      {password.length < 8 && (
        <span style={{ color: 'red', fontWeight: 'bold', fontSize: '13px' }}>
         La contraseña debe tener mínimo 8 caracteres.
        </span>
      )}
    </div>
  );
}
