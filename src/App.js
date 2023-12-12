import { useContext, useRef } from "react";
import "./App.css";
import styles from "./App.module.css";
import { Application } from "./context";

function App() {
  return (
    <div>
      <Functionality />
    </div>
  );
}
function Functionality() {
  const { stored } = useContext(Application);
  const { setStored } = useContext(Application);
  function handleButton(id) {
    const data = [...stored];
    data.splice(id, 1);
    setStored(data);
  }
  return (
    <>
      <Form />
      <div className={styles.container}>
        {stored.map((data, i) => (
          <Tasks
            title={data.title}
            key={i}
            id={i}
            todo={data.todo}
            handleButton={handleButton}
          />
        ))}
      </div>
    </>
  );
}

function Tasks({ title, todo, handleButton, id }) {
  return (
    <div className={styles.stored}>
      <p className={styles.title}>{title}</p>
      <p className={styles.para}>{todo}</p>
      <button className={styles.btn_2} onClick={() => handleButton(id)}>
        &times;
      </button>
    </div>
  );
}

function Form() {
  const {
    handleTitleChange,
    title,
    handleSubmitButton,
    handleMazmoonChange,
    todo,
  } = useContext(Application);
  return (
    <>
      <div className={styles.app}>to do app</div>
      <form className={styles.inputs} onSubmit={handleSubmitButton}>
        <input
          type="text"
          placeholder="Title"
          onChange={handleTitleChange}
          value={title}
        />
        <input
          type="text"
          placeholder="Discription"
          onChange={handleMazmoonChange}
          value={todo}
        />
        <button className={styles.btn} onClick={handleSubmitButton}>
          Add
        </button>
      </form>
    </>
  );
}
export default App;
