import os
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

    def train(self,data,node:int,size:float,rate:float):
        raw_data = pd.DataFrame.from_dict(data)
        x = raw_data.iloc[:,0:-1].values
        y = raw_data.iloc[:,-1].values
        scaled = self.split_scale_data(self,x,y,size)
        x_train = scaled[0]
        x_test = scaled[2]
        y_train = scaled[1]
        y_test = scaled[3]
        model = keras.models.Sequential([
            keras.layers.Dense(units=node,activation='relu',input_shape=(12,)),    
            keras.layers.Dense(units=1)
        ])
        model.compile(loss='mean_squared_error',optimizer=tf.keras.optimizers.Adam(learning_rate=rate))
        history=model.fit(x_train,y_train,epochs=50,validation_data=(x_test,y_test))
        path = self.folder_path + str(uuid.uuid4().hex)
        isExist = os.path.exists(path)
        
        eva = model.evaluate(x_test,y_test)
        model_result = model.predict(x_test)
        acc = [np.round((model_result/y_test*100),2)]
        mae = mean_absolute_error(y_test,model_result)
        test_data = pd.DataFrame(y_test.flatten(),columns=["Test Data"])
        test_data["Prediction"] = model_result.flatten()
        test_data["MAE"] = test_data[["Test Data","Prediction"]].mean(axis=1)
        test_data["Accuracy"] = np.round(test_data["Prediction"],2)/np.round(test_data["Test Data"],2)*100
        test_data.round(2)
        result = test_data.to_json()
        
        if not isExist:
            os.makedirs(path)
            model.save(path+'/model.h5')
            dump(self.x_scaler, path+'/scaler_x.bin', compress=True)
            dump(self.y_scaler, path+'/scaler_y.bin', compress=True)
        return result


    def split_scale_data(self,x,y,size):
        x_train,x_test,y_train,y_test = train_test_split(x,y,test_size=size,random_state=0)
        x_scaled = self.x_scaler.fit_transform(x_train)
        xt_scaled = self.x_scaler.fit_transform(x_test)
        y_scaled = self.y_scaler.fit_transform(y_train.reshape(-1,1))        
        yt_scaled = self.y_scaler.fit_transform(y_test.reshape(-1,1))
        result = [x_scaled,y_scaled,xt_scaled,yt_scaled]
        return result

ml_model = MLModel()