import React from "react";
import {Square} from "./Square"



export const Board =({gameState, onSquareClik})=>{


    return(

        <div className="square">
            <div className="row">

                <Square className="b-bottom-r"
                state={gameState[0]}
                onClick={()=>onSquareClik(0)}
                />
                <Square className="b-bottom-r"
                state={gameState[1]}
                onClick={()=>onSquareClik(1)}
                />
                <Square className="b-bottom-r"
                state={gameState[2]}
                onClick={()=>onSquareClik(2)}
                />
                <Square className="b-bottom-r"
                state={gameState[3]}
                onClick={()=>onSquareClik(3)}
                />
                <Square className="b-bottom-r"
                state={gameState[4]}
                onClick={()=>onSquareClik(4)}
                />
                <Square className="b-bottom"state={gameState[5]}
                onClick={()=>onSquareClik(5)}
                />
            </div>
            <div className="row">
                <Square className="b-bottom" 
                state={gameState[6]}
                onClick={()=>onSquareClik(6)}
                />
                <Square className="b-bottom"
                state={gameState[7]}
                onClick={()=>onSquareClik(7)}
                />
                <Square className="b-bottom"
                state={gameState[8]}
                onClick={()=>onSquareClik(8)}
                />
                <Square className="b-bottom"
                state={gameState[9]}
                onClick={()=>onSquareClik(9)}
                />
                <Square className="b-bottom"
                state={gameState[10]}
                onClick={()=>onSquareClik(10)}
                />
                <Square className="b-bottom-r"
                state={gameState[11]}
                onClick={()=>onSquareClik(11)}
                />
            </div>
            <div className="row">
                <Square className="b-bottom-l"state={gameState[12]}
                onClick={()=>onSquareClik(12)}
                />
                <Square className="b-bottom-l"state={gameState[13]}
                onClick={()=>onSquareClik(13)}
                />
                <Square className="b-bottom-l"state={gameState[14]}
                onClick={()=>onSquareClik(14)}
                />
                <Square className="b-bottom-l"state={gameState[15]}
                onClick={()=>onSquareClik(15)}
                />
                <Square className="b-bottom"state={gameState[16]}
                onClick={()=>onSquareClik(16)}
                />
                <Square className="b-bottom" state={gameState[17]}
                onClick={()=>onSquareClik(17)}
                />
            </div>   
        
        </div>

    );

}

