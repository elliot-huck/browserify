// Function to display a single contact object

const displayContact = (contact) => {
  const name = `Name: ${contact.firstName} ${contact.lastName}\n`;
  const phone = `Phone: ${contact.phoneNum}\n`;
  const address = `Address: ${contact.address}\n`;
  const fullContact = name + phone + address;
  return fullContact;
};

module.exports = displayContact;