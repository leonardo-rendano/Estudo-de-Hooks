import React, { useState } from 'react';

import useStore from './somaReducer'

export default function ReducerHook() {

  const [ numero, setNumero ] = useState('')
  const [ segundoNumero, setSegundoNumero ] = useState('')

  const [ store, dispatch ] = useStore()
  

  const somar = () => {
    const numeroConvertido = parseInt(numero)
    const segNumeroConvertido = parseInt(segundoNumero)
    
    dispatch({
      type: 'SOMA',
      payload: numeroConvertido + segNumeroConvertido
    })
  }

  

  return(
    <div>
      Primeiro número: <br /><br />
      <input type="text" value={numero}
             onChange={ e => setNumero(e.target.value) }/> <br /><br />

      Segundo número: <br /><br />
      <input type="text" value={numero}
             onChange={ e => setSegundoNumero(e.target.value) } /> <br /><br />

      <button onClick={somar} > Somar </button> <br /><br />

      Resultado
      <input type="text" value={store.resultado} />
    </div>
  );
}