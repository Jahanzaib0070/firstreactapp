import React, { createContext } from "react";
import CompA from "./CompA";

const myName = createContext();
const ContextApi = ()=>{    

    return (<>
        <myName.Provider value={"Mohammad Jahanzaib"}>
            <CompA />
        </myName.Provider>
    </>);
}

export default ContextApi;
export {myName};