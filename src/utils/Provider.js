import { createContext, useReducer, useContext } from 'react'

const PortContext = createContext();

const initialState = {
    hamburger: false,
    mode:"light",
}

const reducers = (state, action) => {
    switch (action.type) {
        case "SET_HAMBURGER": return {
            ...state,
            hamburger: action.hamburger
        }
        case "SET_MODE": return {
            ...state,
            mode: action.mode
        }
        default:
            return state;
    }
}

export const useStateValues = () => useContext(PortContext);

export function PortContextProvider({ children }) {
    return (
        <PortContext.Provider value={useReducer(reducers, initialState)} >
            {children}
        </PortContext.Provider>
    )
}