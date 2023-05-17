import React from "react";
import { Outlet,Link } from "react-router-dom";



export const Router=()=>{
    return(
        <>
        <div>
            <ul>
                <li>
                    <Link to = "/">kanaus paistue</Link>


                </li>


                <li>
                    <Link to="Puu" >Puu</Link>

                </li>
                <li>
                    <Link to="Items">eesti</Link>

                </li>
                <li>
                    <Link to="/Pata">Pata</Link>


                </li>
                <li>
                    <Link to="List">Listitmta</Link>


                </li>
                <li>
                    <Link to="Torstai">Torstai</Link>


                </li>


            </ul>

        </div>
        
         <Outlet/>
        </>

    );

}