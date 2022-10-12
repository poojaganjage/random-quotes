import React from 'react';

function Buttons({onHandleClick, color}) {
  // const handleClick = () => {
  //   onHandleClick();
  // }
  return (
    <div className='buttons'>
      {/* <button style={{color: "#ffffff", backgroundColor: color}} className="button" onClick={handleClick}>New Quote</button> */}
      <button style={{color: "#ffffff", backgroundColor: color}} className="button" onClick={onHandleClick}>New Quote</button>
    </div>
  );
}
export default Buttons;
