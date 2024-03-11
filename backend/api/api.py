from flask import Blueprint, jsonify, request
from ..extensions import db
from ..models import Message

api = Blueprint('api', __name__)


@api.route('/api/message/<int:id>', methods=['GET'])
def get_message(id):
    message = Message.query.filter_by(id=id).first()
    if message:
        return {'user': message.name, 'email': message.email, 'message': message.message}
    else:
        return {'message': 'User not found'}, 400

@api.route('/api/messages', methods=['GET'])
def get_messages():
    messages = Message.query.all()
    json_messages = list(map(lambda message: message.to_json(), messages))
    return jsonify({"messages": json_messages})

    
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
    except Exception as e:
        return jsonify({'message': str(e)}), 400
    
    return jsonify({'message': 'Contact Created!'}), 201
        