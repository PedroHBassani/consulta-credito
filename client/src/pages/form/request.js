import axios from "axios";

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

  const response = await axios.post("http://localhost:5000/risk", {
    idade,
    sexo,
    trabalho,
    valorCredito,
    duracao,
    finalidade,
    moradia,
    contaPoupanca: accounts[contaPoupanca],
    contaCorrente: accounts[contaCorrente],
  });

  return response;
};

export default requestRisk;
