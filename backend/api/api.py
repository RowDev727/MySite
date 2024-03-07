from flask import Blueprint, jsonify, request
from ..extensions import db
from ..models import User

api = Blueprint('api', __name__)


@api.route('/api/contact', methods=['GET'])
def get_contact():
    contact = User.query.filter_by(id=3).first()
    return {'user': contact.name, 'email': contact.email}

@api.route('/api/contacts', methods=['GET'])
def get_contacts():
    contacts = User.query.all()
    json_contacts = list(map(lambda contact: contact.to_json(), contacts))
    return jsonify({"contacts": json_contacts})
    
@api.route('/api/create_contact', methods=['POST'])
def create_contact():
    name = request.json.get('name')
    email = request.json.get('email')
    
    if not name or not email:
        return (
            jsonify({'message': 'You must include a name and email'}), 400
        )
        
    new_contact = User(name=name, email=email)
    
    try:
        db.session.add(new_contact)
        db.session.commit()
    except Exception as e:
        return jsonify({'message': str(e)}), 400
    
    return jsonify({'message': 'Contact Created!'}), 201
        