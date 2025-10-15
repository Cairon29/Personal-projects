import pandas as pd
import mlflow
import mlflow.sklearn
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import StandardScaler
from sklearn.datasets import fetch_california_housing
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
from sklearn.metrics import r2_score

import numpy as np


california = fetch_california_housing()
print(california)

california_df = pd.DataFrame(california.data, columns=california.feature_names) #type:ignore
california_df['MedHouseVal'] = california.target

print(california_df)
california_df.head()

data = california_df.drop('MedHouseVal', axis=1)
values = california_df[['MedHouseVal']]

x = np.array(data)
y = np.array(values)

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.3, random_state=2)


sc = StandardScaler()

x_train_std = sc.fit_transform(x_train)
x_test_std = sc.transform(x_test)

with mlflow.start_run():
    
    model = LinearRegression()
    model.fit(x_train_std, y_train)
    y_pred = model.predict(x_test_std)
    
    mse = mean_squared_error(y_test, y_test)
    n_estimators = 100
      
    mlflow.log_param("n_estimators", n_estimators)
    mlflow.log_metric("rmse", mse)
    mlflow.sklearn.log_model(model, "model")
    print(y_pred)
    # print("MSE:", mean_squared_error(y_test, y_test))
    # print('MAE', mean_absolute_error(y_test, y_pred))
    print('F2 score', r2_score(y_test, y_pred))

