import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
import tensorflow as tf
import numpy as np
from joblib import dump,load
from tensorflow import keras

sc = StandardScaler()
sc2 = StandardScaler()
def load_data(file:str):
    data = pd.read_csv(file,sep=';')    
    return data

def split_scale_data(x,y):
    x_train,x_test,y_train,y_test = train_test_split(x,y,test_size=0.2857,random_state=0)
    x_scaled = sc.fit_transform(x_train)
    y_scaled = sc.fit_transform(y_train.reshape(-1,1))
    xt_scaled = sc.fit_transform(x_test)
    yt_scaled = sc.fit_transform(y_test.reshape(-1,1))
    list = [x_scaled,y_scaled,xt_scaled,yt_scaled]
    dump(sc, 'std_scaler1.bin', compress=True)
    # dump(sc2, 'std_scaler2.bin', compress=True)
    return list

def train(file:str):
    data = load_data(file)
    datax = data.iloc[:,0:-1].values
    datay = data.iloc[:,-1].values
    split_scaled = split_scale_data(datax,datay)
    x_train = split_scaled[0]
    x_test = split_scaled[2]
    y_train = split_scaled[1]
    y_test = split_scaled[3]
    model = keras.models.Sequential([
        keras.layers.Dense(units=10,activation='relu',input_shape=(13,)),    
        keras.layers.Dense(units=1)
    ])
    model.compile(loss='mean_squared_error',optimizer=tf.keras.optimizers.Adam(learning_rate=0.01))
    history=model.fit(x_train,y_train,epochs=10,validation_data=(x_test,y_test))
    eva = model.evaluate(x_test,y_test)
    model.save('model.h5')
    return print(np.mean(datax[0]))

def predict():    
    model = keras.models.load_model('model.h5')
    data = load_data('new_model_test2.csv')
    datax = data.iloc[:,0:13].values
    datay = data.iloc[:,-1].values
    sc = load('std_scaler1.bin')
    datax = sc.transform(datax)
    ynew = model.predict(datax)
    print(sc2.inverse_transform(ynew))
    # print('hasil2 {result2}')
def test(file):
    data = load_data(file)
    datax = data.iloc[:,0:-1].values
    datay = data.iloc[:,-1].values
    split_scaled = split_scale_data(datax,datay)
    x_train = split_scaled[0]
    x_test = split_scaled[2]
    y_train = split_scaled[1]
    y_test = split_scaled[3]
    # model = keras.models.load_model('model.h5')
    # result = model.predict(x_test,y_test)
    return print(x_test.info())
train('new_model_training.csv')
# test('new_model_training.csv')

# predict()


    

