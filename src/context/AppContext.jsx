import React, { createContext, useContext, useState } from "react";

const MyContext = createContext({
    myButton: false,
    setMyButton: () => {},
    myAppState: 0,
    setMyAppState: () => {},
});

export const MyContextProvider = ({ children }) => {
    const [myButton, setMyButton] = useState(false);
    const [myAppState, setMyAppState] = useState(0);

    return (
        <MyContext.Provider
            value={{
                myButton,
                setMyButton,
                myAppState,
                setMyAppState,
            }}
        >
            {children}
        </MyContext.Provider>
    );
};

// Hook personnalisé pour utiliser le contexte
export const useMyContext = () => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error("useMyContext must be used within a MyContextProvider");
    }
    return context;
};
