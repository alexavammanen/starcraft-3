import React from "react";
import './Torstai.css';
import {Board} from "./Board";
import {useState} from "react";
import { useEffect } from "react";
import { Scoreboard } from "./Scoreboard";

const intialBoard=['','','','','','','','','','','','','','','','','',''];




export const Torstai = ()=>{

    const[gameState, setGameState]=useState(intialBoard);
    const[Xis, setIsXTurn] = useState(true);
    const[status, setStatus] = useState('');
   const[scores, setScores] = useState({xScore : 0 , oScore : 0});
    
   useEffect(() =>{
        const winner =chekkWinner();


    if(winner === null){
        return;
    }
    if (winner === "T"){
        setScores({xScore: scores.xScore, oScore : scores.oScore + 1})
    }
    else{
        setScores({xScore: scores.xScore  + 1, oScore : scores.oScore})
    }
   },[status])
   
   
   
   useEffect(()=>{
        const winner = chekkWinner();
        if(winner){
            setStatus(`Winner: ${winner}`);


        }else if(!gameState.includes('')){
            setStatus("kanaa meni ees");

        }else{
            setStatus(`${Xis ? 't' : 'T'}'ees`);
        }

    },[gameState])
       


    const onSquareClik = (index) =>{
        let strings = Array.from(gameState);
        if(status.includes("Winner")){
            return;
        }


        if (strings[index] !== '') {


            return;


        }
        strings[index] = Xis ? 't' : 'T';
        setGameState(strings);
        setIsXTurn(!Xis);
        

    }

    const chekkWinner = () => {
        const lines =[
            [0,1,2,3,4],
            [5,6,7,8,9,10],
            [11,12,13,14],
            [0,1,2,3],

            [0,5,10],
            [1,6,11],
            [2,7,12],
            [3,8,13],

            [0,6,12],
            [1,7,13],
            [2,8,10],
            [3,9,11],

            [4,8,11],
            [14,15,16,17],

        ];
        for (let i = 0; i < lines.length; i++){
            const [a,b,c,d,e,f] = lines[i];
            if(gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState [c] && gameState[a] === gameState[d] && gameState[a] === gameState[e] && gameState[a === gameState[f]]){
                return gameState[a];

            }

        }
        return null;

    }



    return(
            <div>
                <Scoreboard scores={scores}/>

                <h1>

                    tiistai ja Torstai



                </h1>
                <Board gameState={gameState} onSquareClik={onSquareClik}/>
                
                
                {!status.includes("Winner") && (


                    <>
                    <span>{status  }     </span>
                    <button onClick={()=>{
                        setGameState(intialBoard);
                        setIsXTurn(true);


                    }}>
                       rest jos voit 
                    </button>


                    </>


                )}
                {status.includes("Winner") && (


                <>
                <span>{status  }     </span>
                <button onClick={()=>{
            setGameState(intialBoard);
                 setIsXTurn =(true);


                }}>
                    rest jos voit again? 
                    </button>


                </>


                    )}

                    </div>





    )







}