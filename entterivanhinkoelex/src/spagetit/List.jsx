import React from "react";
import { useState } from "react";



//laskut= [1,2,3]//e
//verot=[87,52,12]//e
//ilmastaroskaa=[...laskut, ...verot]//e






export const List =()=>{

    function refreshPage() {
        setContent([]);
        setInputValue('');
        
      }

    const [content,setContent] = useState([]);
    const [inputValue,setInputValue] = useState([]);

    const removeHandler = (kasittelia)=>{
    const   removeItem = content.filter((item,index)=>{
            return kasittelia !== index;

        });
        setContent(removeItem)

        
    }


    return  (
            <div>
                <div>
                    <form
                    onSubmit={(event)=>{



                        event.preventDefault()
                        const temp = [inputValue,...content];
                        //setContent[inputValue,...content];
                        setContent(temp);
                        setInputValue('');



                    }}

                    
                    
                    
                    
                    
                    
                    >
                        <input type = "text" placeholder="aines osats"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)
                        
                    }
                        
                        
                        requiered    />
                        <input type="submit"value="susway"/>
                        {
                            content.map((Item,index)=>(
                                <ul>
                                    
                                    <li>
                                    
                                        <h2 key={index}>{Item}
                                        
                                            
                                        </h2>

                                        <button onClick={refreshPage}> refers versio 2</button>
                                        <button onClick={()=>removeHandler(index)}> refers versio 2</button>


                                    </li>





                                </ul>


                            ))

                        }

                        





                    </form>
                    <button onClick={refreshPage}> refers versio 2</button>

                    





                </div>









            </div>














    )









}





































































































