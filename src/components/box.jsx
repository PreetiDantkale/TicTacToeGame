import React from 'react'

const style = {
	width: "150px",
	height: "150px",
	display: "grid",
	gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)"
};
const arr = [...Array(9)]

const Box = (props) => (
  <div style={style}>
    {
      arr.map((_, pos) =>
      <button name={pos} onClick={()=> props.onClick(pos)}> {props.value[pos]}
      </button>)
    }

  </div>
)
export default Box;