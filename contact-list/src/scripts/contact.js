const Database = require("./contact-collection");

const allContacts = Database.load(contactDatabase);

const displayContact = (contact) => {
  const name = `Name: ${contact.firstName} ${contact.lastName}`;
  const phone = `Phone: ${contact.phoneNum}`;
  const address = `Address: ${contact.address}`;
  const fullContact = name + phone + address;
  return fullContact;
}

console.log(displayContact(allContacts[1]));