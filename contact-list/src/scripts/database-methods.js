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

// Database.save(ContactDatabase, "ContactDatabase");

module.exports = Database;