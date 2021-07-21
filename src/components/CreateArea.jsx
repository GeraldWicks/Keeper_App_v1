import React, { useState } from "react";

function CreateArea(props) {
  const [newTitle, SetNewTitle] = useState("");
  const [newDescription, SetNewDescription] = useState("");
  const [warning, SetWarning] = useState("");

  function handleChange() {
    if (newTitle === "" || newDescription === "") {
      SetWarning("Please insert some Content");
    } else {
      props.SetTitle((oldArray) => [...oldArray, newTitle]);
      props.SetDescription((oldArray) => [...oldArray, newDescription]);

      SetNewTitle("");
      SetNewDescription("");
      SetWarning("");
    }
  }

  return (
    <div className="form">
      <div>
        <input
          name="title"
          onChange={(event) => SetNewTitle(event.target.value)}
          placeholder="Title"
          value={newTitle}
        />
        <textarea
          name="content"
          onChange={(event) => SetNewDescription(event.target.value)}
          placeholder="Take a note..."
          rows="3"
          value={newDescription}
        />
        <p>{warning}</p>
        <button onClick={handleChange}>+</button>
      </div>
    </div>
  );
}

export default CreateArea;
