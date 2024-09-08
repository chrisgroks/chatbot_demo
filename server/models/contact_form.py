from datetime import datetime
import re
from sqlalchemy import Column, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import validates
import uuid

from models.metadata import MetaDataSingleton

Base = declarative_base(metadata=MetaDataSingleton())

class ContactForm(Base):
    __tablename__ = "contact_form"

    name = Column(String(50), nullable=False)
    email = Column(String(120), nullable=False)
    message = Column(String(500), nullable=False)
    created_at = Column(DateTime, primary_key=True, default=datetime.utcnow, nullable=False)
    
    def to_json(self):

        return {
            "name": self.name,
            "email": self.email,
            "message": self.message,
            "created_at": self.created_at,
        }