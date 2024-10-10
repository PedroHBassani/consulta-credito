import styles from "./css/select-field.module.css";

const SelectField = ({ title, options, onChange, value }) => {
  return (
    <div className={styles.selectField}>
      <label>{title}</label>
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
