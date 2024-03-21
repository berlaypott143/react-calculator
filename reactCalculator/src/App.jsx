import { useReducer } from 'react'
import './styles.css'
import DigitButtons from './DigitButtons'
import OperationButton from './OperationButton'

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CLEAR: 'clear',
  CHOOSE_OPERATION: 'choose-operation',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'
}

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      }
  }
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  )


  return (
    <div className='calculator-grid'>
      <div className='output'>
        <div className='previous-operand'>{previousOperand} {operation}</div>
        <div className='current-operand'>{currentOperand}</div>
      </div>
      <button className='span-two'>AC</button>
      <button>DEL</button>
      <OperationButton operation="÷" dispatch={dispatch} />
      <DigitButtons digit="1" dispatch={dispatch} />
      <DigitButtons digit="2" dispatch={dispatch} />
      <DigitButtons digit="3" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      <DigitButtons digit="4" dispatch={dispatch} />
      <DigitButtons digit="5" dispatch={dispatch} />
      <DigitButtons digit="6" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButtons digit="7" dispatch={dispatch} />
      <DigitButtons digit="8" dispatch={dispatch} />
      <DigitButtons digit="9" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButtons digit="." dispatch={dispatch} />
      <DigitButtons digit="0" dispatch={dispatch} />
      <button className='span-two'>=</button>
    </div>
  )
}

export default App
