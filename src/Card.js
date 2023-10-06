import React, {useState} from "react";
import "./Card.css"

function Card({name, image}) {
    const [{angle, x, y}] = useState({
        angle: Math.random() * 90 -45,
        x: Math.random() * 40 -20,
        y: Math.random() * 40 - 20,
    })
    const transform = `translate(${x}px, ${y}px) rotate(${angle} degrees)`
    return <img
        className="Card"
        alt={name}
        src={image}
        style={{transform}}/>
}

export default Card