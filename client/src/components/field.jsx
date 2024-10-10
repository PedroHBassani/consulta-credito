import styles from "./css/field.module.css";

const Field = ({ title, type = "text", value, onChange }) => {
  return (
    <div className={styles.field}>
      <label>{title}</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default Field;
