import React, {useState} from "react";

const InputArea = (props) => {
    const [inputText, setInputText] = useState("");
    const handleChange = (event) => {
        const value = event.target.value;
        setInputText(value);
      };

    return (
        <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={
            ()=>{
                props.onAdd(inputText);
                setInputText("");
            }
            }>
          <span>Add</span>
        </button>
      </div>
    );
};

export default InputArea;