import React from "react";
import  { useState } from "react";

export const Puu2 = () =>{

    const[count, setCount] = useState(0);



    function countClikcs(){

        setCount (0);




    }

    return(

        <div>


            <button onClick={countClikcs}> painoit: {count} kanasa</button>
            

        </div>
            
            
                
            
            
        

    );

}