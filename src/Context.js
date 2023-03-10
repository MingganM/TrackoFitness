import { createContext, useState } from "react";

export const mainContext = createContext();

export default function Context({children}){
    const [mainState, setMainState] = useState({
        workouts: []
    });

    return (
        <mainContext.Provider value={{...mainState, }}>
            {
                children
            }
        </mainContext.Provider>
    )
}