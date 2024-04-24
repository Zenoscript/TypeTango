import React, { ChangeEvent, useEffect, useState } from "react";
import "./App.css";

function App() {
  const source = "This is a typing example";
  const [destination, setDestination] = useState("");
  const [typo, setTypo]= useState(false)

  // functio handle typing effect
  const func = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if(e.target.value.length <1){
    setDestination(newValue); // Update destination state

      const wantedSpans = document.getElementsByClassName("letters");

      // Convert HTMLCollection to an array for easier manipulation
      const spansArray = Array.from(wantedSpans);
      
      // Loop through each element and update its styles
      spansArray.forEach(span => {
        const spanElement = span as HTMLElement; // Type assertion
        spanElement.style.color = "white"; // Set color to red
        spanElement.style.backgroundColor = "transparent"; // Set background color to blue
        return spanElement.style.textDecoration = "none"; // Remove underline
      });
      

    }else{
    const dest = newValue.length - 1;
    setDestination(newValue); // Update destination state
  
    if (newValue.length >= 0) {
      if (newValue.length < destination.length) {
        // Handle backspace logic
        const elementToBeBlack = document.getElementById(`${source[newValue.length]}${newValue.length}`);
        if (elementToBeBlack) {
          elementToBeBlack.style.color = "white";
          elementToBeBlack.style.backgroundColor = "transparent";
          elementToBeBlack.style.textDecoration = "none";
        }
      } else {
        const letterFound = document.getElementById(`${newValue[dest]}${dest}`);
        if (source[dest] === newValue[dest]) {
          if (letterFound) {
            letterFound.style.color = "green";
            letterFound.style.textDecoration = "underline";
          }
        } else {
          const isSpace = source[e.target.value.length - 1] === ' '
          console.log('isSpace', isSpace)
          if (letterFound) {
            if (isSpace) {
              letterFound.style.backgroundColor = 'red';
            letterFound.style.textDecoration = "underline";

            }else{
              letterFound.style.color = "red";
            letterFound.style.textDecoration = "underline";

            }
          } else {
            const actualLetterFound = document.getElementById(`${source[dest]}${dest}`);
            const actualLetterFoundNext = document.getElementById(`${source[dest+1]}${dest+1}`);
            if (isSpace) {
              if(actualLetterFound){
                actualLetterFound.style.backgroundColor = 'red';
                if(actualLetterFoundNext){

                  actualLetterFoundNext.style.textDecoration = "underline";
                }

              }
            }else{
              if(actualLetterFound){
                actualLetterFound.style.color = "red";
                if(actualLetterFoundNext){

                  actualLetterFoundNext.style.textDecoration = "underline";
                }

              }
            }
          }
        }
      }
    }
  }
  };

  const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    // Disable arrow keys
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
    }
  };

  const handleMouseDown = (e:React.MouseEvent<HTMLInputElement>) => {
    // Prevent mouse click events
    e.preventDefault();
  };


  

  return (
    <div className="container">

    <div className="game-board">
      
      <h1 style={{fontSize: '3rem'}}>
      {source.split("").map((char, i) => {
          return (
            <span id={`${char}${i}`} style={i === 0?{ color: "white", textDecoration: 'underline'}: {color: 'white', textDecoration: 'none'}} className="letters">
              {char}
            </span>
          );
        })}
      </h1>
      <input type="text" onChange={(e) => func(e)} style={{width: '450px', fontSize: '2rem'}} value={destination} placeholder="start typing..." className="game-typing-space" onKeyDown={(e)=>handleKeyDown(e)} onMouseDown={handleMouseDown} autoFocus/>
      </div>
    </div>
  );
}

export default App;
