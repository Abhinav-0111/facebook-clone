import { useReducer } from "react";
import ContextApi from "./ContextApi";

function ContextState({ reducer, initialState, children }) {
    return (
        <>
            <ContextApi.Provider value={useReducer(reducer, initialState)}>
                {children}
            </ContextApi.Provider>
        </>
    );
}

export default ContextState;
