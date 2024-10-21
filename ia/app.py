from flask import Flask, request, jsonify
from model import CreditRiskModel

app = Flask(__name__)

model = CreditRiskModel('german_credit_data.csv')
model.train()

@app.route('/predict', methods=['POST'])
def predict():
    input_data = request.json
    risk = model.predict(input_data)
    return jsonify({'risk': risk})

if __name__ == '__main__':
    app.run(debug=True)
