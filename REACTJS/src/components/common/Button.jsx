import React from "react";
import "./Button.css";

function Button(props) {
    const variant = props.variant ? `btn-${props.variant}` : "";
    const size = props.size ? `btn-${props.size}` : "btn-medium";

    return (
        <button onClick={props.onclick} className={`btn ${variant} ${size}`}>
            {props.children}
        </button>
    );
}

export default Button;
