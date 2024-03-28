from .extensions import db

class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    message = db.Column(db.String(255), nullable=False)
    
    def __repr__(self):
        return f'<Message {self.name}, {self.email}, {self.message}>'
    
    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "message": self.message
        }
        
        
class NewsLetterContact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(50), unique=True, nullable=False)

    def __repr__(self):
        return f'<NewsLetterContact {self.email}>'
        
    def to_json(self):
        return {
            "id": self.id,
            "email": self.email
        }
        
        
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.Text(), nullable=False)