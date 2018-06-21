const Database = require("./database-methods");
const displayContact = require("./contact");


const showContactList = () => {
  const ContactDatabase = Database.load("ContactDatabase");
  const allContacts = ContactDatabase.contactCollection;

  const fragment = document.createDocumentFragment();

  allContacts.forEach(contact => {
    fragment.appendChild(displayContact(contact));
  });

  const listSection = document.querySelector("#contact-list");
  listSection.appendChild(fragment);
};

module.exports = showContactList();