import { useContext } from "react";
import { Application } from "./context";
import styles from "./App.module.css";
import { IoIosSave } from "react-icons/io";
export default function Form() {
  const {
    handleTitleChange,
    title,
    handleSubmitButton,
    handleDiscription,
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
          onChange={handleDiscription}
          value={todo}
        />
        <button className={styles.btn} onClick={handleSubmitButton}>
          <IoIosSave />
        </button>
      </form>
    </>
  );
}
