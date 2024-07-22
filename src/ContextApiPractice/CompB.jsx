import React, { useContext } from "react";
import {FirstName, LastName } from "./ContextApi";

const CompB = ()=>{
    const fName = useContext(FirstName);
    const lName = useContext(LastName);

    return <>
        <h1>My name is {fName} {lName}</h1>
    </>
}

export default CompB;