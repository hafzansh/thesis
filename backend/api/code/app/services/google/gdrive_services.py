import os, shutil,glob
from app.services.google.google_services import Create_Service
from googleapiclient.http import MediaFileUpload
from dotenv import load_dotenv
load_dotenv()
folder_id = os.environ.get("model_folder_id")
# CLIENT = os.environ.get("CLIENT_SECRET")
CLIENT = "./token/client_secret.json"
API = 'drive'
VERSION = 'v3'
SCOPES = ['https://www.googleapis.com/auth/drive']
class UploadDrive():
    service = Create_Service(CLIENT,API,VERSION,SCOPES)
    def create_folder(self,name):
        file_metadata = {
            'name': name,
            'parents': [folder_id],
            'mimeType': 'application/vnd.google-apps.folder'
        }        
        file = self.service.files().create(body=file_metadata, fields='id'
                                      ).execute()
        return file.get("id")                                      
    def upload(self,path,file,type,id):
        file_metadata = {
        'name':file,
        'parents': [id]
        }
        media = MediaFileUpload(f'{path}'+'{0}'.format(file),mimetype=type)
        file = self.service.files().create(
            body=file_metadata,
            media_body=media,
            fields='id'
        ).execute()
        return file.get("id")        
gdrive_service = UploadDrive()
