from flask import Blueprint, jsonify, request
from flask_jwt_extended import create_access_token, create_refresh_token, jwt_required
from werkzeug.security import check_password_hash
from ..extensions import db
from ..models import Message, NewsLetterContact, User
from .utils import send_slack_alert


api = Blueprint('api', __name__)

# Contact Form Routes
# Create a contact message
@api.route('/api/create_message', methods=['POST'])
def create_message():
    name = request.json.get('name')
    email = request.json.get('email')
    message = request.json.get('message')
    
    if not name or not email or not message:
        return (
            jsonify({'message': 'You must include a name, email and message'}), 400
        )
        
    new_message = Message(name=name, email=email, message=message)
    
    try:
        db.session.add(new_message)
        db.session.commit()
        send_slack_alert(name, email, message)
    except Exception as e:
        return jsonify({'message': str(e)}), 400
    
    return jsonify({'message': 'Contact Created!'}), 201
   

# Get contact message via id
@api.route('/api/message/<int:id>', methods=['GET'])
def get_message(id):
    message = Message.query.filter_by(id=id).first()
    if message:
        return {'user': message.name, 'email': message.email, 'message': message.message}
    else:
        return {'message': 'User not found'}, 400


# Get all contact messages
@api.route('/api/messages', methods=['GET'])
@jwt_required()
def get_messages():
    messages = Message.query.all()
    json_messages = list(map(lambda message: message.to_json(), messages))
    return jsonify({"messages": json_messages})



#Newsletter Routes 
# Create a newsletter contact subscription      
@api.route('/api/create_newsletter_contact', methods=['POST'])
def create_newsletter_contact():
    email = request.json.get('email')
    
    if not email:
        return (
            jsonify({'message': 'You must enter a valid email address!'}), 400
        )
        
    new_newsletter_contact = NewsLetterContact(email=email)
    
    try:
        db.session.add(new_newsletter_contact)
        db.session.commit()
    except Exception as e:
        return jsonify({'message': str(e)}), 400
    
    return jsonify({'message': 'Newsletter Contact Created!'}), 201


# Get all newsletter subscribers
@api.route('/api/contacts', methods=['GET'])
def get_contacts():
    contacts = NewsLetterContact.query.all()
    json_contacts = list(map(lambda contact: contact.to_json(), contacts))
    return jsonify({'messages': json_contacts})


# Authentication Routes
@api.route('/api/token', methods=['POST'])
def create_token():
    username = request.json.get('username', None)
    password = request.json.get('password', None)
    user = User.query.filter_by(username=username).first()
    
    if user and username == user.username and check_password_hash(user.password, password):
        access_token = create_access_token(identity=username)
        refresh_token = create_refresh_token(identity=username)
        
        return jsonify(
            {
                'access_token': access_token,
                'refresh_token': refresh_token
            }
        )
        
    return jsonify({'msg': 'Bad username or password'}), 401
    