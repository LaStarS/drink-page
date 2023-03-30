import React, { useState } from "react";

function Form({ getAllRecipe }) {
  let [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleChange} />
        <button>Search</button>
      </form>
    </div>
  );
}

export default Form;
