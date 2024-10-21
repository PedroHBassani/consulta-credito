import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import StandardScaler

class CreditRiskModel:
    def __init__(self, csv_file):
        self.data = pd.read_csv(csv_file)
        self.model = None
        self.scaler = None
        self._preprocess_data()

    def _preprocess_data(self):
        self.data['Risk'] = self.data['Risk'].map({'good': 1, 'bad': 0})
        self.data = pd.get_dummies(self.data, drop_first=True)
        self.data.dropna(inplace=True)

    def train(self):
        X = self.data.drop('Risk', axis=1)
        y = self.data['Risk']
        
        self.scaler = StandardScaler()
        X_scaled = self.scaler.fit_transform(X)

        X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

        self.model = LogisticRegression(max_iter=1000)
        self.model.fit(X_train, y_train)

        y_pred = self.model.predict(X_test)
        print("Acurácia:", accuracy_score(y_test, y_pred))

    def predict(self, input_data):
        input_df = pd.DataFrame([input_data])
        input_df = pd.get_dummies(input_df, drop_first=True)

        input_df = input_df.reindex(columns=self.data.drop('Risk', axis=1).columns, fill_value=0)
        input_scaled = self.scaler.transform(input_df)

        prediction = self.model.predict(input_scaled)
        return 'good' if prediction[0] == 1 else 'bad'
