from flask import Flask
from flask_restx import Api, Resource
from .config import DevConfig
from .extensions import api, db, migrate, cors

def create_app(config_class=DevConfig):
    # Initialize flask app
    app = Flask(__name__)
    
    # Set config object
    app.config.from_object(DevConfig)
    
    # Initialize restx api object
    api.init_app(app)
    db.init_app(app)
    migrate.init_app(app, db)
    cors.init_app(app)
    
    
    # Import Blueprints
    from backend.api.api import api_bp
    
    # Register Blueprint
    app.register_blueprint(api_bp)
    
    # Required application context for database creation
    with app.app_context():
        db.create_all()
        
    return app
    

