# Consultar crédito

## Descrição

Este projeto foi desenvolvido para a disciplina de ABEX VI, com objetivo de criar um sistema de consulta de crédito para verificar a confiabilidade de um cliente.

## Dataset

<<<<<<< HEAD
O dataset utilizado para treinamento do modelo de Machine Learning foi o [German Credit Risk](https://www.kaggle.com/datasets/uciml/german-credit).
=======
O dataset utilizado para treinamento do modelo de Machine Learning foi o [German Credit Risk](https://www.kaggle.com/datasets/uciml/german-credit). 
>>>>>>> 4dba6a919add3d7badb7475902eb543c10a7cc51
E disponível [aqui](https://www.kaggle.com/code/abdullahmazari/credit-card-risk-prediction) com o risco.

## Requisitos

- Python 3.12.4
- Node.js 18.17.1

## Instalação

1. Clone o repositório:

   ```sh
   git clone https://github.com/PedroHBassani/consulta-credito
   cd consulta-credito
   ```

2. Frontend:

   ```sh
   cd client
   npm install
   npm run dev
   ```

3. Backend:

   ```sh
   cd ia
   py -m pip install -r requirements.txt
   ```

4. Treine o modelo:

   ```sh
    py model.py
   ```

5. Execute o backend:

   ```sh
   py app.py
   ```

## Autores

- [Pedro Bassani](https://github.com/PedroHBassani)
- [Murilo Debortoli](https://github.com/MuriloDebortoli)
