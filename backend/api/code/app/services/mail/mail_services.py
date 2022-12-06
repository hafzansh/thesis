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
class Mail():
    def create_file(self,data):
        path = self.create_figure(data)
        folder_id = self.create_archive(path)
        return folder_id
    def copytree(self,src, dst, symlinks=False, ignore=None):
        # isExist = os.path.exists(f'{fpath}/model/')
        # if not isExist:
        #     os.makedirs(f'{fpath}/model/')
        for item in os.listdir(src):
            s = os.path.join(src, item)
            d = os.path.join(dst, item)
            if os.path.isdir(s):
                shutil.copytree(s, d, symlinks, ignore)
            else:
                shutil.copy2(s, d)
    def create_figure(self,data):        
        loss = json.loads(data.loss)
        result = json.loads(data.result)
        path = 'temp/'+data.path[7:]
        df_loss = pd.DataFrame.from_records(loss)
        df_result = pd.DataFrame.from_records(result)        
        df_result['City'] = df_result['City'].replace([1,2,3,4,5,6,7,8,9,10,11,12,13],kota)
        city = df_result['City']
        test_data = df_result['Test Data']
        prediction = df_result['Prediction']
        df1 = pd.DataFrame({'City':city,'Test Data':test_data})
        df2 = pd.DataFrame({'City':city,'Prediction':prediction})
        sns.set()
        fig,axes = plt.subplots(2,1,figsize=(15,16))        
        axes[0].set_title('Test Data - Prediction Comparison')
        lp = sns.lineplot(ax=axes[0],data=df1,x="City",y="Test Data",color='red',label='Test Data')
        lp = sns.lineplot(ax=axes[0],data=df2,x="City",y="Prediction",label='Prediction')
        lp.set(xlabel=None,ylabel=None)
        lp.tick_params(labelrotation=20)
        axes[1].set_title('Training Loss - Validation Loss Comparison')
        lp2 = sns.lineplot(ax=axes[1],data=df_loss,color='red')
        lp2.set(xlabel="Epoch")
        isExist = os.path.exists(path)
        if not isExist:
            os.makedirs(path)
            os.makedirs(f'{path}/model')            
        plt.savefig(f'{path}/figure.png',dpi=300,bbox_inches='tight')
        self.create_report(df_result,data,df_loss,path)
        return path[5:]

    def create_report(self,df_result,data,df_loss,path):
        templateLoader = jinja2.FileSystemLoader(searchpath="./app/templates/")
        templateEnv = jinja2.Environment(loader=templateLoader)
        TEMPLATE_FILE = "model_template_report.html"
        template = templateEnv.get_template(TEMPLATE_FILE)
        outputText = template.render(df=df_result,param=data,loss=df_loss,rate="{:.8f}".format(float(data.rate)),stop=len(df_loss))
        html_file = open(f'{path}/Model Report.html', 'w')
        html_file.write(outputText)
        html_file.close()                
        options = {'enable-local-file-access': None}
        pdfkit.from_file(f'{path}/Model Report.html', f'{path}/Model Report.pdf',options=options)
        npath = path[5:]
        self.copytree(f'assets/{npath}',f'temp/{npath}/model/')
        # self.create_archive(npath)
    def create_archive(self,path):
        shutil.make_archive(f'temp/{path}/Model','zip',f'temp/{path}/model/')
        folder_id = gdrive_service.create_folder(path)
        gdrive_service.upload(f'temp/{path}/','Model.zip','application/zip',folder_id)           
        gdrive_service.upload(f'temp/{path}/','Model Report.pdf','application/pdf',folder_id)           
        return folder_id
mail_services = Mail()