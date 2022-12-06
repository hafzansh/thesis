import os
from pydantic import Json
import tensorflow as tf
import pandas as pd
import uuid
import numpy as np
from joblib import dump,load
from tensorflow import keras
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error

class MLModel:
    x_scaler = StandardScaler()
    y_scaler = StandardScaler()
    folder_path = 'assets/'
    path =''    
    mae = ''
    history:Json = ''
    train_result:Json = ''

    def train(self,data,node:int,size:float,rate:float,epoch:int):
        raw_data = pd.DataFrame.from_dict(data)
        x = raw_data.iloc[:,0:-1].values
        y = raw_data.iloc[:,-1].values
        scaled = self.split_scale_data(x,y,size)
        x_train = scaled[0]
        x_test = scaled[2]
        y_train = scaled[1]
        y_test = scaled[3]

        model = keras.models.Sequential([
            keras.layers.Dense(units=node,activation='relu',input_shape=(13,)),    
            keras.layers.Dense(units=1)
        ])
        model.compile(loss='mean_absolute_error',optimizer=tf.keras.optimizers.Adam(learning_rate=rate))
        history=model.fit(x_train,y_train,epochs=epoch,validation_data=(x_test,y_test))
        history_json = pd.DataFrame(history.history['loss'],columns=["loss"])  
        history_json["val_loss"] = history.history['val_loss']
        self.history = history_json.to_json(orient='records')
        self.path = self.folder_path + str(uuid.uuid4().hex)
        isExist = os.path.exists(self.path)
                
        model_result = model.predict(x_test)


        
        inversed_x = self.x_scaler.inverse_transform(x_test)
        inversed_year = np.round(inversed_x[:,1].flatten()).astype(int)
        inversed_city = np.round(inversed_x[:,0].flatten()).astype(int)
        test_data = pd.DataFrame(inversed_city,columns=["City"])        
        test_data["Year"] = inversed_year
        test_data["Test Data"] = y_test.flatten()
        test_data["Prediction"] = model_result.flatten()
        test_data["MAE"] = test_data[["Test Data","Prediction"]].mean(axis=1)
        test_data.round(2)
        self.mae = np.round(mean_absolute_error(y_test,model_result),2)        
        result = test_data.to_json(orient='records')
        self.train_result = result
        
        if not isExist:
            os.makedirs(self.path)
            model.save(self.path+'/model.h5')
            dump(self.x_scaler, self.path+'/scaler_x.bin', compress=True)
            dump(self.y_scaler, self.path+'/scaler_y.bin', compress=True)

        return test_data.to_json(orient='records')


    def split_scale_data(self,x,y,size):
        x_train,x_test,y_train,y_test = train_test_split(x,y,test_size=size,random_state=0)
        x_scaled = self.x_scaler.fit_transform(x_train)
        xt_scaled = self.x_scaler.fit_transform(x_test)
        y_scaled = self.y_scaler.fit_transform(y_train.reshape(-1,1))        
        yt_scaled = self.y_scaler.fit_transform(y_test.reshape(-1,1))
        result = [x_scaled,y_scaled,xt_scaled,yt_scaled]
        return result

ml_model = MLModel()