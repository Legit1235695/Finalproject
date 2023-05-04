import React from "react";
import { useState } from "react";

const ComponentHook=()=>
{
    const[currentValue,updateValue]= useState(0)
    
    return(
        <div>
            <button type="submit" onClick={()=>updateValue(currentValue-1)} >-</button>
            <input type="text" value={currentValue}/>
            <button type="submit" onClick={()=>updateValue(currentValue+1)} >+</button>
            <button type="submit" onClick={()=>updateValue(8)}> Reset</button>
        </div>
    )
}

export default ComponentHook;