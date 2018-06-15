

const ContactDatabase = {
  contactCollection: [
    {
      firstName: `Alice`,
      lastName: `Anderson`,
      phoneNum: `123-456-7890`,
      address: `123 Abc St`
    },
    {
      firstName: `Bob`,
      lastName: `Brown`,
      phoneNum: `314-159-2653`,
      address: `314 Pi Ave`
    }
  ]
};

const Database = Object.create({}, {
  save: {
    value: (databaseObject, localStorageKey) => {
      const stringifiedDatabase = JSON.stringify(databaseObject);
      localStorage.setItem(localStorageKey, stringifiedDatabase);
    }
  },
  load: {
    value: (localStorageKey) => {
      const databaseString = localStorage.getItem(localStorageKey);
      return JSON.parse(databaseString);
    }
  }
});

Database.save(ContactDatabase, "ContactDatabase");

module.exports = Database;
