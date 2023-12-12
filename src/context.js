import { createContext, useState } from "react";

const Application = createContext();
function Context({ children }) {
  const [title, settitle] = useState("");
  const [todo, setTodo] = useState("");
  const [stored, setStored] = useState([]);
  const handleTitleChange = (e) => {
    settitle(e.target.value);
  };
  const handleMazmoonChange = (e) => {
    setTodo(e.target.value);
  };
  function handleSubmitButton(e) {
    e.preventDefault();
    setStored([...stored, { title, todo }]);
    settitle("");
    setTodo("");
  }
  return (
    <Application.Provider
      value={{
        title,
        settitle,
        todo,
        setTodo,
        stored,
        setStored,
        handleMazmoonChange,
        handleTitleChange,
        handleSubmitButton,
      }}
    >
      {children}
    </Application.Provider>
  );
}

export { Context, Application };
