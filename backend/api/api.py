from flask import Blueprint
from flask_restx import Resource
from ..extensions import api, db
from ..models import User

api_bp = Blueprint('api', __name__)


@api.route('/api/get_user_by_id/<id>')
class Get_User_By_Id(Resource):
    def get(self, id):
        user = User.query.filter_by(id=id).first()
        return {"name": user.name, "email": user.email} if user else {"name": "none"}
    
@api.route('/api/create_user/<name>/<email>')
class Create_User(Resource):
    def get(self, name, email):
        user = User(name=name, email=email)
        db.session.add(user)
        db.session.commit()
        return {"name": user.name, "email": user.email}