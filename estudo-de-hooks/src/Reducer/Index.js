import React, { useState } from 'react';

import useStore from './somaReducer' //useStore que veio exportado do somaReducer

export default function ReducerHook() {

  const [ numero, setNumero ] = useState('')
  const [ segundoNumero, setSegundoNumero ] = useState('')

  const [ store, dispatch ] = useStore()
  

  const somar = () => {
    const numeroInt = parseInt(numero)
    const segNumeroint = parseInt(segundoNumero)
    
    dispatch({
      type: 'SOMA',
      payload: numeroInt + segNumeroint
    })
  }

  const subtrair = () => {
    const numeroInt = parseInt(numero)
    const segNumeroint = parseInt(segundoNumero)
    
    dispatch({
      type: 'SUBTRAÇÃO',
      payload: numeroInt - segNumeroint
    })
  }


  return(
    <div>
      Primeiro número: <br /><br />
      <input type="text" value={numero}
             onChange={ e => setNumero(e.target.value) }/> <br /><br />

      Segundo número: <br /><br />
      <input type="text" value={segundoNumero}
             onChange={ e => setSegundoNumero(e.target.value) } /> <br /><br />

      <button onClick={somar} > Somar </button> 
      <button onClick={subtrair} > Subtrair </button> <br /><br />

      Resultado
      <input type="text" value={store.resultado} readOnly />
    </div>
  );
}