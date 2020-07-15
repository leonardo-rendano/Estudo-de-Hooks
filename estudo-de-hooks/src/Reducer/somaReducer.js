import { useReducer } from 'react';

const STATE_INICIAL = {
  resultado: ''
}

const somaReducer = (state = STATE_INICIAL, action) => {
  switch( action.type ) { //TODA ACTION DEVE VIR ACOMPANHADA DA PROPRIEDADE "TYPE"!!
    case 'SOMA':
      return {...state, resultado: action.payload} //DADO QUE ESTÁ VINDO JUNTO COM A ACTION
    default:
      return state;
  }
}

const useStore = () => useReducer(somaReducer, STATE_INICIAL)
export default useStore;