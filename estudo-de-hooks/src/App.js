import React, { useState } from 'react';

export default function App() {

  const [ numero, setNumero ] = useState()
  const [ segundoNumero, setSegundoNumero ] = useState()
  const [ resultado, setResultado ] = useState()

  const somar = () => {
    const numeroFormatado = parseInt(numero)
    const numeroFormatado2 = parseInt(segundoNumero)

    setResultado( numeroFormatado + numeroFormatado2 )
  }

  return(
    <div>
      Primeiro número: <br />
      <input type="text" value={numero} onChange={e => setNumero(e.target.value)} /> <br />
      Segundo número: <br />

      <input type="text" value={segundoNumero} onChange={e => setSegundoNumero(e.target.value)} /> <br />

      Resultado: <br />
      <input type="text" value={resultado} /> <br />

      <button onClick={somar} > Somar </button>
    </div>
  );
}