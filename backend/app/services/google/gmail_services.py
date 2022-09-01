import base64
from email.message import EmailMessage
import os, shutil
from app.services.google.google_services import Create_Service
from dotenv import load_dotenv
import jinja2
import uuid
load_dotenv()
folder_id = os.environ.get("model_folder_id")
# CLIENT = os.environ.get("CLIENT_SECRET")
CLIENT = "app/core/client_secret.json"
API = 'gmail'
VERSION = 'v1'
SCOPES = ['https://www.googleapis.com/auth/gmail.send']
class GMail():
    service = Create_Service(CLIENT,API,VERSION,SCOPES)
    def create_template(self,param):
        id = uuid.uuid4().hex
        templateLoader = jinja2.FileSystemLoader(searchpath="app/templates/")
        templateEnv = jinja2.Environment(loader=templateLoader)
        TEMPLATE_FILE = "email_template.html"
        template = templateEnv.get_template(TEMPLATE_FILE)
        outputText = template.render(body=param)
        html_file = open(f'temp/{id}.html', 'w')
        html_file.write(outputText)
        html_file.close()
        return id

    def send_email(self,param):
        message = EmailMessage()
        
        body = """
            <b>Test</b> 
        """
        id = self.create_template(param)
        with open(f'temp/{id}.html','r') as f:
            body = f.read()
        # message.set_content(body)            
        message['To'] = 'muhammadhafiez86@gmail.com'
        message['From'] = 'jst.padikalsel@gmail.com'
        message['Subject'] = 'Model Data - JST.Padi'
        message.add_header('Content-Type','text/html')
        message.set_payload(body)
        # message.add_header('Content-Transfer-Encoding','quoted=printable')
        # encoded message
        encoded_message = base64.urlsafe_b64encode(message.as_bytes()) \
            .decode()

        create_message = {
            'raw': encoded_message
        }
        # pylint: disable=E1101
        send_message = (self.service.users().messages().send
                        (userId="me", body=create_message).execute())
        print(F'Message Id: {send_message["id"]}')
gmail_service = GMail()   