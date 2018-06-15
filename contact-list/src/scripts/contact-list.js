const Database = require("./contact-collection");
const displayContact = require("./contact");

const ContactDatabase = Database.load("ContactDatabase");
const allContacts = ContactDatabase.contactCollection;

const showContactList = () => {
  const fragment = document.createDocumentFragment();

  allContacts.forEach(contact => {
    const paragraph = document.createElement("p");
    paragraph.textContent = displayContact(contact);
    fragment.appendChild(paragraph);
  });

  const listSection = document.querySelector("#contact-list");
  listSection.appendChild(fragment);
};