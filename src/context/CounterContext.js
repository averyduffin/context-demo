import React, { useReducer } from 'react'
import { reducer, INITIAL_STATE } from '../oldReduxActionsReducer'


const StateContext = React.createContext()
const DispatchContext = React.createContext()

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>)
}

export const useStateContext = () => {
  const context = React.useContext(StateContext)
  if (context === undefined) throw new Error('useStateContext must be used within context provider')
  return context
}

export const useDispatchContext = () => {
  const context = React.useContext(DispatchContext)
  if (context === undefined) throw new Error('useDispatchContext must be used within context provider')
  return context
}
