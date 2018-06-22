// Simple database methods to save and load from local storage
// Required by: 

const Database = Object.create({}, {
  save: {
    value: (databaseObject, localStorageKey) => {
      const stringifiedDatabase = JSON.stringify(databaseObject);
      localStorage.setItem(localStorageKey, stringifiedDatabase);
    }
  },
  load: {
    value: localStorageKey => {
      const databaseString = localStorage.getItem(localStorageKey);
      return JSON.parse(databaseString);
    }
  }
});

module.exports = Database;