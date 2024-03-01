from flask_restx import Api
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

api = Api(doc='/docs')
db = SQLAlchemy()
migrate = Migrate()
cors = CORS()