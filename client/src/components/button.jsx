import styles from "./css/button.module.css";

const Button = ({ text, onClick, disabled }) => {
  return (
    <button 
      disabled={disabled}
    className={styles.Button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
