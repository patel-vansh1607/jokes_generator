import React from "react";
import './button.css'


const Button = ({callApi}) => {
    return (
    <button  className="joke-button" onClick={callApi}>
        Click to generate a joke.
    </button> 
    )
}

export default Button;