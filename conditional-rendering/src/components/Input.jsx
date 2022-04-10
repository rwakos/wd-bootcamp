import React from "react";

const Input = (props) => {
    return (
        <input
            key={props.id}
            type={props.type}
            placeholder={props.placeholder}
        />
    );
} 

export default Input;
