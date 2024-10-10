import styles from "./result.module.css";
import badPerson from "../../assets/bad-person.svg";
import goodPerson from "../../assets/good-person.svg";

const categoryMessage = {
  good: "O cliente foi categorizado como de baixo risco.",
  bad: "O cliente foi categorizado como de alto risco.",
};

const creditMessage = {
  good: "Este cliente pode ser considerado para concessão de crédito.",
  bad: "Não é recomendado conceder crédito a este cliente.",
};

const image = (img) => {
  return <img src={img} />;
};

const images = {
  good: image(goodPerson),
  bad: image(badPerson),
};

const ResultPage = ({ risk, setPage }) => {
  console.log(risk);

  return (
    <div className={styles.resultPage}>
      <div className={styles.image}>{images[risk]}</div>
      <div className={styles.messageContainer}>
        <span className={styles.categoryMessage}>{categoryMessage[risk]}</span>
        <span className={styles.creditMessage}>{creditMessage[risk]}</span>
        <button onClick={() => setPage("home")}>Voltar</button>
      </div>
    </div>
  );
};

export default ResultPage;
