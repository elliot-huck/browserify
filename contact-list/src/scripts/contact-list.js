const Database = require("./database-methods");
const displayContact = require("./contact");
const contactDatabase = require("./contact-collection");


const showContactList = () => {
  // Database.save(contactDatabase, "ContactDatabase");
  const ContactDatabase = Database.load("ContactDatabase");
  console.log(ContactDatabase);
  const allContacts = ContactDatabase.contactCollection;

  const fragment = document.createDocumentFragment();

  allContacts.forEach(contact => {
    fragment.appendChild(displayContact(contact));
  });

  const listSection = document.querySelector("#contact-list");
  while (listSection.firstChild) {
    listSection.removeChild(listSection.firstChild);
  }
  listSection.appendChild(fragment);
};

module.exports = showContactList;