from flask import Flask
from .config import DevConfig
from .extensions import db, migrate, cors

def create_app(config_class=DevConfig):
    # Initialize flask app
    app = Flask(__name__)
    
    # Set config object
    app.config.from_object(DevConfig)
    
    # Initialize restx api object
    db.init_app(app)
    migrate.init_app(app, db)
    cors.init_app(app)
    
    
    # Import Blueprints
    from backend.api.api import api
    
    # Register Blueprint
    app.register_blueprint(api)
    
    # Required application context for database creation
    with app.app_context():
        db.create_all()
        
    return app
    

