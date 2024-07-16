import React from "react";

function Add(x,y){
    let add = x+y;
    return add;
}
function Subtract(x,y){
    let sub = x-y;
    return sub;
}
function Multiply(x,y){
    let mul = x*y;
    return mul;
}
function Divide(x,y){
    let div = x/y;
    div = div.toFixed(2);
    return div;
}
function Calculator(x,y){

    return (
        <>
            <h1>
                <ul type="1">
                    <li>The sum is {Add(5,9)}</li>
                    <li>The subtract is {Subtract(80,35)}</li>
                    <li>The multiply is {Multiply(3,9)}</li>
                    <li>The division is {Divide(2,3)}</li>
                </ul>
            </h1>
        </>
    );
}

export default Calculator;