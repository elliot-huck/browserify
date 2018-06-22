// This file is for calling all the functions that the modules are exporting

const showContactList = require("./contact-list.js");
const createContactForm = require("./contact-form.js");
const Database = require("./database-methods");
const contactDatabase = require("./contact-collection");

if (Database.load("ContactDatabase") === null) {
  Database.save(contactDatabase, "ContactDatabase");
}

showContactList();
createContactForm();

