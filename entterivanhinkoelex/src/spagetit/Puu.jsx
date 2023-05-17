import React from "react";
import  { useState } from "react";
import { Puu2 } from "./Puu2";

export const Puu = () =>{

    const[count, setCount] = useState(0);
    const[muu, sewtCount] = useState(0);



    function countClikcs(){

        setCount(count +1);
        


    }

    function kuele(){
        setCount(0)
    }

    return(

        <div>

            <button onClick={countClikcs}> painoit: {count} kanasa</button>
            <button onClick={kuele}>paisto</button>

        </div>
            


    );

}
