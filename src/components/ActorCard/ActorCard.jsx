import { Link } from "react-router-dom";
// import './ActorCard.css';

export default function ActorCard({actor}) {
    
    return (
        <>
            <div className="actor-card" >
                <div className="actor-info">
                    <h2>{actor}</h2>                    
                </div>
            </div>            
        </>
    )
}