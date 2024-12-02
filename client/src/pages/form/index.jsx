import Button from "../../components/button";
import Field from "../../components/field";
import SelectField from "../../components/select-field";
import styles from "./form.module.css";
import { useState } from "react";
import requestRisk from "./request";

const accountOptions = [
  "Não Aplicado",
  "Pouco",
  "Moderado",
  "Rico",
  "Bastante Rico",
];

const porpuseOptions = [
  "Carro",
  "Negócio",
  "Rádio/TV",
  "Móveis/equipamentos",
  "Educação",
  "Eletrodomésticos",
  "Reparos",
  "Férias/outros",
];

const jobs = [
  "sem qualificação e não residente",
  "sem qualificação e residente",
  "qualificado",
  "altamente qualificado",
];

const verifyFormValues = (formValues, setError) => {
  if (formValues.idade === "") {
    setError("Preencha a idade");
    return false;
  }

  if (formValues.valorCredito === "") {
    setError("Preencha o valor do crédito");
    return false;
  }

  if (formValues.duracao === "") {
    setError("Preencha a duração");
    return false;
  }

  if (
    formValues.idade <= 0 ||
    formValues.valorCredito <= 0 ||
    formValues.duracao <= 0
  ) {
    setError("Preencha todos os campos com valores positivos");
    return false;
  }

  setError("");
  return true;
};

const FormPage = ({ onResult }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    idade: "",
    sexo: "Masculino",
    trabalho: "sem qualificação e não residente",
    valorCredito: "",
    duracao: "",
    finalidade: "Carro",
    moradia: "Própria",
    contaPoupanca: "Não Aplicado",
    contaCorrente: "Não Aplicado",
  });

  const handleChange = (field, value) => {
    setFormValues({ ...formValues, [field]: value });
  };

  const handleSubmit = async () => {
    if (!verifyFormValues(formValues, setError)) {
      return;
    }
    setLoading(true);
    const response = await requestRisk(formValues);
    setLoading(false);
    onResult(response.data.risk);
  };

  return (
    <>
      {error && <h2 className={styles.error}>Erro: {error}</h2>}
      <div className={styles.formPage}>
        <div className={styles.section}>
          <Field
            title="Idade"
            type={"number"}
            value={formValues.idade}
            onChange={(e) => handleChange("idade", e.target.value)}
          />
          <SelectField
            title="Sexo"
            value={formValues.sexo}
            onChange={(e) => handleChange("sexo", e.target.value)}
            options={["Masculino", "Feminino"]}
          />
          <SelectField
            title="Fontes de renda"
            value={formValues.trabalho}
            onChange={(e) => handleChange("trabalho", e.target.value)}
            options={jobs}
          />
        </div>
        <div className={styles.section}>
          <Field
            title="Valor do crédito"
            value={formValues.valorCredito}
            onChange={(e) => handleChange("valorCredito", e.target.value)}
          />
          <Field
            title="Duração (meses)"
            value={formValues.duracao}
            onChange={(e) => handleChange("duracao", e.target.value)}
          />
          <SelectField
            title="Finalidade"
            value={formValues.finalidade}
            onChange={(e) => handleChange("finalidade", e.target.value)}
            options={porpuseOptions}
          />
        </div>
        <div className={styles.section}>
          <SelectField
            title="Moradia"
            value={formValues.moradia}
            onChange={(e) => handleChange("moradia", e.target.value)}
            options={["Própria", "Alugada", "Cedido"]}
          />
          <SelectField
            title="Conta Poupança"
            value={formValues.contaPoupanca}
            onChange={(e) => handleChange("contaPoupanca", e.target.value)}
            options={accountOptions}
          />
          <SelectField
            title="Conta Corrente"
            value={formValues.contaCorrente}
            onChange={(e) => handleChange("contaCorrente", e.target.value)}
            options={accountOptions}
          />
        </div>
      </div>
      <div className={styles.buttons}>
        <Button
          disabled={loading}
          text={loading ? "Carregando..." : "Enviar"}
          onClick={handleSubmit}
        />
      </div>
    </>
  );
};

export default FormPage;
