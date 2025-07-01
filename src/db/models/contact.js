import { Schema, model } from 'mongoose';

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  isFavourite: {
    type: Boolean,
    default: false,
    required: true,
  },
  contactType: {
    type: String,
    enum: ['work', 'home', 'personal'],
    default: ' personal',
    required: true,
  },
});

const contactCollection = model('contact', contactSchema);

export default contactCollection;
