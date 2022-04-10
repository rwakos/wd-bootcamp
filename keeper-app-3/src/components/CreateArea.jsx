import React, {useState} from "react";
import { v4 as uuidv4 } from "uuid";
import Add from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const emptyArea = () => {
    return {
      title: "",
      content: ""
    };
  };
  const [input, setInputs] = useState(emptyArea());
  const [isExpanded, setExpanded] = useState(false);

  const handleChange = (event) => {
    const {name, value} = event.target;
    setInputs(prevItem => {
      return {...prevItem, [name]: value};
    });
  }

  return (
    <div>
      <form className="create-note" onSubmit={(event)=>{event.preventDefault();}}>
      { isExpanded && 
        <input 
          name="title" 
          placeholder="Title" 
          value={input.title} 
          onChange={handleChange} 
        />
      }
        <textarea 
          name="content" 
          placeholder="Take a note..." 
          rows={isExpanded ? "3" : "1"} 
          value={input.content} 
          onChange={handleChange} 
          onFocus={()=>{ setExpanded(true)}}
        />
        <Zoom in={isExpanded}>
        <Fab onClick={
            ()=>{
              props.onAdd({...input, id: uuidv4()});
              setInputs(emptyArea());
              setExpanded(false);
              }
            }
        >
        <Add />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
