import pandas as pd
import numpy as np
from lightgbm import LGBMClassifier
from imblearn.over_sampling import SMOTE

class CreditRiskModel:
    def __init__(self, csv_file):
        self.data = pd.read_csv(csv_file)
        self.model = None
        self._preprocess_data()

    def _preprocess_data(self):
        self.data['Risk'] = self.data['Risk'].map({'good': 1, 'bad': 0})
        self.data = pd.get_dummies(self.data, drop_first=True)
        self.data.dropna(inplace=True)

    def train(self):
        X = self.data.drop('Risk', axis=1).values
        y = self.data['Risk'].values

        smote = SMOTE(random_state=42)
        X, y = smote.fit_resample(X, y)
        
        train_size = int(0.8 * len(X))
        X_train, X_test = X[:train_size], X[train_size:]
        y_train, y_test = y[:train_size], y[train_size:]

        self.model = LGBMClassifier(
            n_estimators=200,
            max_depth=8,
            learning_rate=0.1,
            random_state=42
        )
        self.model.fit(X_train, y_train)

        y_pred = self.model.predict(X_test)
        accuracy = np.mean(y_pred == y_test)
        print(f"Acurácia do modelo: {accuracy * 100:.2f}%")
        return accuracy

    def predict(self, input_data):
        input_df = pd.DataFrame([input_data])
        input_df = pd.get_dummies(input_df, drop_first=True)
        input_df = input_df.reindex(columns=self.data.drop('Risk', axis=1).columns, fill_value=0)
        prediction = self.model.predict(input_df.values)
        return 'good' if prediction[0] == 1 else 'bad'
