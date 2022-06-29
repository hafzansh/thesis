import pandas as pd
x = [
  {
    "kota": "1",
    "luas_panen": 43666,
    "luas_lahan": 74902,
    "produktivitas": 21.04,
    "stasiun": "1",
    "suhu_min": 21.21,
    "suhu_max": 33.85,
    "suhu_avg": 24.51,
    "humidity_avg": 83.71,
    "curah_hujan": 2903,
    "hari_hujan": 212,
    "penyinaran": 42.5,
    "produksi": 91857
  },
  {
    "kota": "2",
    "luas_panen": 20484,
    "luas_lahan": 31873,
    "produktivitas": 19.63,
    "stasiun": "1",
    "suhu_min": 21.21,
    "suhu_max": 33.85,
    "suhu_avg": 24.51,
    "humidity_avg": 83.71,
    "curah_hujan": 2903,
    "hari_hujan": 212,
    "penyinaran": 42.5,
    "produksi": 40205
  }
  ]
a = pd.DataFrame.from_dict(x)
b = a.iloc[:,0:-1].values
print(a)
print(b)