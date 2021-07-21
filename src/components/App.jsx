import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [Title, SetTitle] = useState([]);
  const [Description, SetDescription] = useState([]);
  var i = -1;

  function renderNote(title) {
    i++;
    return (
      <Note
        key={i}
        newId={i}
        CurrentTitle={title}
        content={Description[i]}
        Title={Title}
        SetTitle={SetTitle}
        Description={Description}
        SetDescription={SetDescription}
      />
    );
  }

  return (
    <div>
      <Header />
      <CreateArea
        Title={Title}
        SetTitle={SetTitle}
        Description={Description}
        SetDescription={SetDescription}
      />

      {Title.map(renderNote)}
    </div>
  );
}

export default App;
