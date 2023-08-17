import { Link } from "react-router-dom";
import './ActorCard.css';

export default function ActorCard({actor}) {
  // generate random color with hexadecimal code
  function generateRandomColor(){
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
  }

  return (
    <>
      <div className="actor-card" style={{ backgroundColor: generateRandomColor() }} >
        <div className="actor-info">
          <h2>{actor}</h2>                    
        </div>
      </div>            
    </>
  )
}