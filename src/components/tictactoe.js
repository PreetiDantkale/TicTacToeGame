import React, {useState} from "react"
import Box from './box'

const playerWon = (box) => {

  let lines = [
    [0, 1, 2],[3, 4, 5], [6, 7, 8],
    [0, 3, 6],[1, 4, 7], [2, 5, 8],
    [0, 4, 8],[2, 4, 6]
  ];
  for (let i=0; i< lines.length; i++) {
    let [a, b, c] = lines[i];
    if (box[a] !== "" && box[a] === box[b] && box[a] === box[c]) {
      return true;
    }
  }
  return false;
}
const TicTacToe = () => {
  const arr = Array(9).fill("");
  const [box, setBox] =  useState(arr)
  const [player, setPlayer] = useState("x")

  const changeBox = (position) => {
    if (box[position] != ""){
      return;
    }
    const dupBox = [...box];
    dupBox[position] = player;
    setBox(dupBox);
    //console.log(playerWon(dupBox));
    if (playerWon(dupBox)){
    // console.log(playerWon(dupBox));
      alert(player + " won")
      setPlayer("");
      return;
    }
    if (dupBox.indexOf("") == -1){
      setPlayer("");
    } 
    else {
      let nextplayer = (player == 'x') ? '0' : "x"
      setPlayer(nextplayer)
    }
  }
  return (
    <div>
      <Box onClick={changeBox} value={box} />
    </div>
  )
}
export default TicTacToe;