// Function to display a single contact object

const displayContact = (contact) => {
  const contactSection = document.createElement("section");

  const name = document.createElement("h4");
  name.textContent = `Name: ${contact.firstName} ${contact.lastName}`;
  contactSection.appendChild(name);

  const phone = document.createElement("p");
  phone.textContent = `Phone: ${contact.phoneNum}`;
  contactSection.appendChild(phone);

  const address = document.createElement("p");
  address.textContent = `Address: ${contact.address}`;
  contactSection.appendChild(address);

  return contactSection;
};

module.exports = displayContact;