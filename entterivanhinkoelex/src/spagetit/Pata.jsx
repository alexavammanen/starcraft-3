import React from "react";
import { Outlet,Link } from "react-router-dom";
import { useState,useEffect } from "react";


























export const Pata = ()=>{


    
    function countClikcs(){

        setCount(count +1);
        


    }
    

    useEffect(()=>{
        setTimeout(function(){

            setCount(count +1);
            




        },1000,count2,
        
        
        
        
        
        );



    }
    
    
    
    
    
    
    )
    useEffect(()=>{
        setTimeout(function(){

            setCount2(count2 +1);
            




        },1000,
        
        
        
        
        
        );



    }
    
    
    
    
    
    
    )

    useEffect(()=>{
        setTimeout(function(){

            setCount3(konstan3 +1);
            




        },1000,
        
        
        
        
        
        );



    }
    
    
    
    
    
    
    )



    const[count, setCount] = useState(0);
    const[count2, setCount2] = useState(0);
    const[konstan3, setCount3] = useState(0);



    return(
        <div>
            <h1>





                pata on avalmis {count} kohtausta?
            </h1>

<button onClick={countClikcs}> painoit: {count} padan ajastin sekotus</button>
<button onClick={countClikcs}> painoit: {count2} padan vispispilöinti</button>













        </div>

    )




    }
