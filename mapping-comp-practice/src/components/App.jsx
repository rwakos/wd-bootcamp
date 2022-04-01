import React from "react";
import { CreateEntry } from "./Entry";
import emojipedia from "../emojipedia";

function App() {

const filtered = emojipedia.map((emoji)=>{ 
  return emoji.meaning.substring(0,100);
 });

console.log("filtered", filtered);


  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(CreateEntry)}
      </dl>
    </div>
  );
}

export default App;
