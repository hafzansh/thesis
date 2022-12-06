import os,shutil
from zipapp import create_archive
import pandas as pd
import json
import seaborn as sns
import numpy as np
import matplotlib.pyplot as plt
import jinja2
import pdfkit
from app.services.google.gdrive_services import gdrive_service
kota = [
    'Tanah Laut',
    'Kotabaru',
    'Banjar',
    'Barito Kuala',
    'Tapin',
    'Hulu Sungai Selatan',
    'Hulu Sungai Tengah',
    'Hulu Sungai Utara',
    'Tabalong',
    'Tanah Bumbu',
    'Balangan',
    'Kota Banjarmasin',
    'Kota Banjarbaru'
]
class PredictMail():
    def create_file(self,data,path):
        self.create_file(data,path)
        
    def create_figure(self,data,path):        
        path = 'temp/'+path   
        isExist = os.path.exists(path)
        if not isExist:
            os.makedirs(path)                     
        pred_data = json.loads(data.data)     
        df = pd.DataFrame.from_records(pred_data)
        df['kota'] = df['kota'].replace(['1','2','3','4','5','6','7','8','9','10','11','12','13'],kota)        
        sns.set()
        plt.figure(figsize=(25,9))
        g = sns.barplot(
            data=df,x="kota",y="result",hue="tahun",palette="dark",alpha=.6,
        )
        g.set(ylabel=None,xlabel=None)
        for p in g.patches:
            g.annotate(format(round(p.get_height()/1000), '.0f')+"K Ton", 
                        (p.get_x() + p.get_width() / 2., p.get_height()), 
                        ha = 'center', va = 'center', 
                        size=12,
                        rotation=90,
                        xytext = (2, 28), 
                        textcoords = 'offset points')
        sns.despine(left=True, bottom=True)
        plt.savefig(f'{path}/predict.png',dpi=300,bbox_inches='tight')
        
        self.create_report(df,path)
        file_id = self.create_archive(path)
        return file_id

    def create_report(self,data,path):
        templateLoader = jinja2.FileSystemLoader(searchpath="./app/templates/")
        templateEnv = jinja2.Environment(loader=templateLoader)
        TEMPLATE_FILE = "prediction_template_report.html"
        template = templateEnv.get_template(TEMPLATE_FILE)
        outputText = template.render(body=data)
        html_file = open(f'{path}/Prediction Report.html', 'w')
        html_file.write(outputText)
        html_file.close()                
        options = {'enable-local-file-access': None,'orientation':'landscape'}
        pdfkit.from_file(f'{path}/Prediction Report.html', f'{path}/Prediction Report.pdf',options=options)        
        # self.create_archive(npath)
    def create_archive(self,path):        
        id = gdrive_service.upload(f'{path}/','Prediction Report.pdf','application/pdf','1ZQpChSqNvO1gjHjZrmFYTxcVud4cxGf0')           
        return id
predict_mail_services = PredictMail()