const Database = require("./contact-collection");

const allContacts = Database.load("ContactDatabase");

const displayContact = (contact) => {
  const name = `Name: ${contact.firstName} ${contact.lastName}\n`;
  const phone = `Phone: ${contact.phoneNum}\n`;
  const address = `Address: ${contact.address}\n\n`;
  const fullContact = name + phone + address;
  return fullContact;
}

console.log(displayContact(allContacts.contactCollection[1]));

module.exports = displayContact;