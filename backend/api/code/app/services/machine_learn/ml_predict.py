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

class PredictModel:

    def predict(self,data):
        path = data.path
        x_scaler = load(path+'/scaler_x.bin')
        y_scaler = load(path+'/scaler_y.bin')
        model = keras.models.load_model(path+'/model.h5')
        kota= data.kota 
        tahun= data.tahun 
        luas_panen= data.luas_panen 
        luas_lahan= data.luas_lahan 
        produktivitas= data.produktivitas 
        stasiun= data.stasiun 
        suhu_min= data.suhu_min 
        suhu_max= data.suhu_max 
        suhu_avg= data.suhu_avg 
        humidity_avg= data.humidity_avg 
        curah_hujan= data.curah_hujan 
        hari_hujan= data.hari_hujan 
        penyinaran= data.penyinaran 
        x = np.array([kota,tahun,luas_panen,luas_lahan,produktivitas,stasiun,suhu_min,suhu_max,suhu_avg,humidity_avg,curah_hujan,hari_hujan,penyinaran])
        x_scaled = x_scaler.transform(x.reshape(1,-1))
        result = model.predict(x_scaled)
        final = y_scaler.inverse_transform(result.reshape(1,-1))        
        tf.keras.backend.clear_session()
        res_value = final.flatten().tolist()
        body = [{
            "kota": kota,
            "tahun": tahun,
            "luas_panen": luas_panen,
            "luas_lahan": luas_lahan,
            "produktivitas": produktivitas,
            "stasiun": stasiun,
            "suhu_min": suhu_min,
            "suhu_max": suhu_max,
            "suhu_avg": suhu_avg,
            "humidity_avg": humidity_avg,
            "curah_hujan": curah_hujan,
            "hari_hujan": hari_hujan,
            "penyinaran": penyinaran,
            "result": res_value[0]
        }]
        return body


    def predicts(self,base):
        path = base.path
        raw_data = pd.json_normalize(base.data)
        data = raw_data.values
        x_scaler = load(path+'/scaler_x.bin')
        y_scaler = load(path+'/scaler_y.bin')
        model = keras.models.load_model(path+'/model.h5')
        x_scaled = x_scaler.transform(data)
        predicted = model.predict(x_scaled)
        result = y_scaler.inverse_transform(predicted.reshape(-1,1))
        df_result = pd.DataFrame(result,columns=["result"])
        df_base = pd.DataFrame(raw_data)
        df_result = pd.concat([df_base,df_result],axis=1,join='inner')
        json_result = df_result.to_json(orient="records")
        keras.backend.clear_session()
        return json_result
predict_model = PredictModel()