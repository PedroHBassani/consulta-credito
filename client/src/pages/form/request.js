import axios from "axios";

const URL = "http://127.0.0.1:5000";

const accounts = {
  "Não Aplicado": "NA",
  Pouco: "little",
  Moderado: "moderate",
  Rico: "rich",
  "Bastante Rico": "quite rich",
};

const porpuse = {
  car: "Carro",
  business: "Negócio",
  "radio/TV": "Rádio/TV",
  "furniture/equipment": "Móveis/equipamentos",
  education: "Educação",
  "domestic appliances": "Eletrodomésticos",
  repairs: "Reparos",
  "vacation/others": "Férias/outros",
};

const requestRisk = async (formValues) => {
  const {
    idade,
    sexo,
    trabalho,
    valorCredito,
    duracao,
    finalidade,
    moradia,
    contaPoupanca,
    contaCorrente,
  } = formValues;

  const body = {
    Age: idade,
    Sex: sexo,
    Job: trabalho,
    Housing: moradia,
    "Saving accounts": accounts[contaPoupanca],
    "Checking account": accounts[contaCorrente],
    "Credit amount": valorCredito,
    Duration: duracao,
    Purpose: finalidade,
  };

  console.log(body);

  return await axios.post(`${URL}/predict`, body);
};

export default requestRisk;
