import json
import requests

def send_slack_alert(name, email, message):
    data = {
        'text': f'''New Message!
        
{name}
{email}
{message}'''
    }

    webhook = "https://hooks.slack.com/services/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"
    requests.post(webhook, json.dumps(data))
    #print('Slack alert sent!')
    print(webhook)
    
