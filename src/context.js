import { createContext, useState } from "react";

const Application = createContext();
function Context({ children }) {
  const [title, settitle] = useState("");
  const [todo, setTodo] = useState("");
  const [stored, setStored] = useState([]);
  const handleTitleChange = (e) => {
    settitle(e.target.value);
  };
  const handleDiscription = (e) => {
    setTodo(e.target.value);
  };
  function handleButton(id) {
    const data = [...stored];
    data.splice(id, 1);
    setStored(data);
  }
  function handleSubmitButton(e) {
    e.preventDefault();
    if (title && todo) {
      setStored([...stored, { title, todo }]);
      settitle("");
      setTodo("");
    } else return;
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
        handleDiscription,
        handleTitleChange,
        handleSubmitButton,
        handleButton,
      }}
    >
      {children}
    </Application.Provider>
  );
}

export { Context, Application };
