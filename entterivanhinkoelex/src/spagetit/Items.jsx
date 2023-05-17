import React from "react";



import {Item} from "./Item";
import {items} from "./Itemdabase";

export const Items =()=>{
    return(
        <div>
            {
                items.map(({img,title,title2,title3})=>
                <Item 
                    img={img}
                    title={title}
                    title2={title2}
                    title3={title3}
                
                
                />
                
                )
                
                
                


            }




        </div>



    )


}











