import React from "react";
import { useState } from "react";
import Square from "../Square/Square";
function Board(){
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true)

    const checkWinner = () => {
        console.log('in')
           const winner = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
console.log(state);
        for (let logic of winner){
            const [a,b,c] = logic;
            console.log(a,b,c);
            
            if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
                return state[a];
            }
            
        }
        return false;
    }
    const isWinner = checkWinner();

    const handleClick = (index) =>{
        if(state[index] !== null){
            return;
        }
           const copy = [...state];
           copy[index] = isXTurn ? "X" : "0";
           setState(copy);
           setIsXTurn(!isXTurn);
    }
    const Reset =() => {
        setState(Array(9).fill(null))
    }
        return( 
        <div className="board-container">
             {isWinner ? (<div className="win">{isWinner} won the game!! <br></br><br></br>
             <button className="reset" onClick={Reset}>Play Again</button>
             <br></br><br></br>
             <img
              class="img"
              alt="Yeahh!!"
              src="https://i.pinimg.com/originals/69/d1/a9/69d1a9de8989cfced22def4b3b87277c.gif"
             />
        </div>) : 
             (
             <><header id="head">My Tic-Tac-Toe Game</header>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <h2 id="turn">Turn for {isXTurn ? "X" : "0"} </h2>
            <div className="board-row">
                <Square onClick={() => handleClick(0)}value={state[0]}/>
                <Square onClick={() => handleClick(1)}value={state[1]}/>
                <Square onClick={() => handleClick(2)}value={state[2]}/>
            </div>
            <div className="board-row">
                <Square onClick={() => handleClick(3)}value={state[3]}/>
                <Square onClick={() => handleClick(4)}value={state[4]}/>
                <Square onClick={() => handleClick(5)}value={state[5]}/>
            </div>
            <div className="board-row">
                <Square onClick={() => handleClick(6)}value={state[6]}/>
                <Square onClick={() => handleClick(7)}value={state[7]}/>
                <Square onClick={() => handleClick(8)}value={state[8]}/>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="button">
            <button className="reset" onClick={Reset}>Reset</button>
            </div>
            </>)}        
        </div>
    )
}

export default Board;