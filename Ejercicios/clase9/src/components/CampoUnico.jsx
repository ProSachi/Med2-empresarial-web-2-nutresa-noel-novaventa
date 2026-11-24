import { useState } from 'react';

export function CampoUnico() {
    const [texto, setTexto] = useState("");

    return (
        <input
            type="text"
            value={texto}
            onChange={(event) => setTexto(event.target.value)}
        />
    );
}
