import axios from "axios";

const URL = "http://127.0.0.1:5000";

const accounts = {
  "Não Aplicado": "NA",
  Pouco: "little",
  Moderado: "moderate",
  Rico: "rich",
  "Bastante Rico": "quite rich",
};

const sex = {
  masculino: "male",
  feminino: "female",
};

const porpuse = {
  Carro: "car",
  Negócio: "business",
  "Rádio/TV": "radio/TV",
  "Móveis/equipamentos": "furniture/equipment",
  Educação: "education",
  Eletrodomésticos: "domestic appliances",
  Reparos: "repairs",
  "Férias/outros": "vacation/others",
};

const housing = {
  Própria: "own",
  Alugada: "rent",
  Cedido: "free",
};

const toInt = (value) => {
  return parseInt(value);
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
    Age: toInt(idade),
    Sex: sex[sexo],
    Job: toInt(trabalho),
    Housing: housing[moradia],
    "Saving accounts": accounts[contaPoupanca],
    "Checking account": accounts[contaCorrente],
    "Credit amount": toInt(valorCredito),
    Duration: toInt(duracao),
    Purpose: porpuse[finalidade],
  };

  console.log(body);

  return await axios.post(`${URL}/predict`, body);
};

export default requestRisk;
