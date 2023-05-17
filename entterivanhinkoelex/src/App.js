import React from "react";
import {Messages} from "./spagetit/message";
import {Puu} from "./spagetit/Puu";
import { Puu2 } from "./spagetit/Puu2";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Router} from "./spagetit/Router";
import {Pata} from "./spagetit/Pata";
import {Items} from "./spagetit/Items";
import {List} from "./spagetit/List";
import {Torstai} from "./tiistai/Torstai";

function App() {
  return (
    <BrowserRouter>

      <div >                                   
    
        <Routes>
              
          <Route path='/' element= {<Router/>}>
                  
              <Route index element={<Messages/>}/>
              <Route path="Puu" element={<Puu/>}/>
              <Route path="pata" element={<Pata/>}/>
              <Route path="Items" element={<Items/>}/>
              <Route path="list" element={<List/>}/>
              <Route path="Torstai" element={<Torstai/>}/>
           </Route>
            
        </Routes>
      </div>
                 
                  

  
    </BrowserRouter>
  );
}

export default App;
