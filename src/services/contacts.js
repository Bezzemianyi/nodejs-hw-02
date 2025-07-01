import contactCollection from '../db/models/contact.js';

export const getContacts = () => contactCollection.find();
export const getContactsById = (id) => contactCollection.findOne({ _id: id });
