import React from "react";
import { myName } from "./ContextApi";

const CompC = ()=>{
    return <>
        <myName.Consumer>
        {
            (name)=>{
                return <h1>My name is {name}</h1>
            }
        }
        </myName.Consumer>
    </>
}

export default CompC;