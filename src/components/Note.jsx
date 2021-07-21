import React from "react";

function Note(props) {
  function removeNote() {
    props.SetTitle((prevTitles) => {
      return prevTitles.filter((title, index) => {
        return index !== props.newId;
      });
    });
  }

  return (
    <div className="note" id={props.newId}>
      <h1>{props.CurrentTitle}</h1>
      <p>{props.content}</p>
      <button onClick={removeNote}>DELETE</button>
    </div>
  );
}

export default Note;
