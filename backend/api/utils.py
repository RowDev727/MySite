import json
import requests
import os

def send_slack_alert(name, email, message):
    data = {
        'text': f'''New Message!
        
{name}
{email}
{message}'''
    }

    webhook = os.environ.get('slack_webhook')
    requests.post(webhook, json.dumps(data))
    #print('Slack alert sent!')
    print(webhook)
    
