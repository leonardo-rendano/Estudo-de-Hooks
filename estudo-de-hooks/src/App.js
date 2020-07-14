import React, { useState, useEffect } from 'react';

export default function App() {

  const [ numero, setNumero ] = useState('')
  const [ segundoNumero, setSegundoNumero ] = useState('')
  const [ resultado, setResultado ] = useState('')

  const somar = () => {
    const numeroConvertido = parseInt(numero)
    const segNumeroConvertido = parseInt(segundoNumero)

    setResultado( numeroConvertido + segNumeroConvertido )
  }

  useEffect(() => {
    console.log('Variável número ', numero )
  });

  return(
    <div>
      Primeiro número: <br /><br />
      <input type="text" valur={numero} onChange={ e => setNumero(e.target.value) }/> <br /><br />

      Segundo número: <br /><br />
      <input type="text" valur={numero} onChange={ e => setSegundoNumero(e.target.value) } /> <br /><br />

      <button onClick={somar} > Somar </button> <br /><br />

      Resultado
      <input type="text" value={resultado} />
    </div>
  );
}