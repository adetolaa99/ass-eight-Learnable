// Observer class
class PhoneNumberObserver {
  constructor() {}

  // Method to be called by the Telephone class to notify it
  update(number) {
    console.log(`Phone number dialed: ${number}`);
  }
}

class SpecificMessageObserver {
  constructor() {}

  // Method to be called by the Telephone class to notify it
  update(number) {
    console.log("Now Dialling 2347023232");
  }
}

// Telephone class
class Telephone {
  constructor() {
    this.phoneNumbers = new Set();
    this.observers = [];
  }

  // Method to add a phone number
  addPhoneNumber(number) {
    this.phoneNumbers.add(number);
  }

  // Method to remove a phone number
  removePhoneNumber(number) {
    this.phoneNumbers.delete(number);
  }

  // Method to dial a phone number
  dialPhoneNumber(number) {
    if (this.phoneNumbers.has(number)) {
      console.log(`Dialing ${number}...`);
      this.notifyObservers(number); // Notify observers
    } else {
      console.log(`Phone number ${number} not found.`);
    }
  }

  // Method to add an observer
  addObserver(observer) {
    this.observers.push(observer);
  }

  // Method to remove an observer
  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  // Method to notify all observers
  notifyObservers(number) {
    this.observers.forEach((observer) => observer.update(number));
  }
}

// Creating observers
const printNumberObserver = new PhoneNumberObserver();
const specificMessageObserver = new SpecificMessageObserver();

// Example
const myTelephone = new Telephone();

// Adding observers to the telephone class
myTelephone.addObserver(printNumberObserver);
myTelephone.addObserver(specificMessageObserver);

myTelephone.addPhoneNumber("09061566384");
myTelephone.dialPhoneNumber("09061566384");

// Removing an observer
myTelephone.removeObserver(printNumberObserver);
myTelephone.dialPhoneNumber("09061566384");
