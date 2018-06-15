const Database = require("./contact-collection");
const displayContact = require("./contact");

const ContactDatabase = Database.load("ContactDatabase");
const allContacts = ContactDatabase.contactCollection;

const showContactList = () => {
  const fragment = document.createDocumentFragment();

  allContacts.forEach(contact => {
    fragment.appendChild(displayContact(contact));
  });

  const listSection = document.querySelector("#contact-list");
  listSection.appendChild(fragment);
};

module.exports = showContactList();