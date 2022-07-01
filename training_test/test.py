import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
import numpy as np
from joblib import dump,load

sc = StandardScaler()
sc2 = StandardScaler()

data = pd.read_csv('new_model_training.csv',sep=';')    
datax = data.iloc[:,0:-1].values
datay = data.iloc[:,-1].values

x_train,x_test,y_train,y_test = train_test_split(datax,datay,test_size=0.2857,random_state=0)
x_scaled = sc.fit_transform(x_train)
y_scaled = sc2.fit_transform(y_train.reshape(-1,1))
xt_scaled = sc.fit_transform(x_test)
yt_scaled = sc2.fit_transform(y_test.reshape(-1,1))

list = [x_scaled,y_scaled,xt_scaled,yt_scaled]
x_train = list[0]
x_test = list[2]
y_train = list[1]
y_test = list[3]
# dump(sc, 'std_scaler1.bin', compress=True)    
print(datax)

    