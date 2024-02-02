import { useContext } from "react";
import "./App.css";
import styles from "./App.module.css";
import { Application } from "./context";
import Form from "./Form";
import { RxCross2 } from "react-icons/rx";

function App() {
  return (
    <div>
      <Functionality />
    </div>
  );
}
function Functionality() {
  const { stored } = useContext(Application);
  const { handleButton } = useContext(Application);

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
      <div className={styles.flex}>
        <p className={styles.bold}>Title :</p>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.flex}>
        <p className={styles.bold}>Discription :</p>
        <p className={styles.para}>{todo}</p>
      </div>
      <button className={styles.btn_2} onClick={() => handleButton(id)}>
        <RxCross2 />
      </button>
    </div>
  );
}

export default App;
