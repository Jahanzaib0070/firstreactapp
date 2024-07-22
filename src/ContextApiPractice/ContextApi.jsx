import React, { createContext, useContext } from "react";
import CompA from "./CompA";

const FirstName = createContext();
const LastName = createContext();

const ContextApi = ()=>{
    return <>
        <FirstName.Provider value={"Mohammad"}>
            <LastName.Provider value={"Jahanzaib"}>
                <CompA />
            </LastName.Provider>
        </FirstName.Provider>
    </>
}

export default ContextApi;
export {FirstName, LastName};