const Database = require("./database-methods");
const showContactList = require("./contact-list");

const contactForm = () => {

  const contactDatabase = Database.load("ContactDatabase");
  const allContacts = contactDatabase.contactCollection;

  const createInput = (name) => {
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", name);
    return input;
  };

  const createForm = () => {
    const formSection = document.querySelector("#contact-form");
    const fragment = document.createDocumentFragment();

    const fields = [`First name: `, `Last name: `, `Phone number: `, `Street address: `];

    fields.forEach(e => {
      const inputLabel = document.createTextNode(e);
      const inputName = e.split(" ")[0].toLowerCase();
      const input = createInput(inputName);
      fragment.appendChild(inputLabel);
      fragment.appendChild(input);
    });

    const submitButton = document.createElement("button");
    submitButton.textContent = `Submit`;
    submitButton.setAttribute("id", "submit");
    fragment.appendChild(submitButton);

    formSection.appendChild(fragment);

  };

  createForm();

  const submitForm = () => {
    const allInputs = document.querySelectorAll(`input`);
    const inputValues = [];
    allInputs.forEach(inputField => {
      inputValues.push(inputField.value);
    });
    if (inputValues.includes("")) {
      alert("You must have all input fields filled to add a new contact");
      return;
    } else {
      const newContact = {
        firstName: allInputs[0].value,
        lastName: allInputs[1].value,
        phoneNum: allInputs[2].value,
        address: allInputs[3].value
      };
      allContacts.push(newContact);
      contactDatabase.contactCollection = allContacts;
      Database.save(contactDatabase, "ContactDatabase");
      allInputs.forEach(inputField => inputField.value = "");
      showContactList();
    }


  };

  const formSubmit = document.querySelector(`#submit`);
  formSubmit.addEventListener(`click`, submitForm);

};
module.exports = contactForm;