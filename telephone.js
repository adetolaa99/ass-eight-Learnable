// Observer class
class Observer {
    constructor(name) {
       this.name = name;
    }
   
    // Method to be called by the Telephone class to notify it
    update(number) {
       console.log(`${this.name} notified: ${number} dialed.`);
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
   
    // Method to notify all observers
    notifyObservers(number) {
       this.observers.forEach(observer => observer.update(number));
    }
   }
   
   // Example usage
   const myTelephone = new Telephone();
   
   // Adding phone numbers
   myTelephone.addPhoneNumber('123-456-7890');
   myTelephone.addPhoneNumber('098-765-4321');
   
   // Creating observers
   const printNumberObserver = new Observer('Print Number Observer');
   const specificMessageObserver = new Observer('Specific Message Observer');
   
   // Overriding the update method for the specific message observer
   specificMessageObserver.update = function(number) {
    console.log('Now Dialling 2347023232');
   };
   
   // Adding observers to the telephone class
   myTelephone.addObserver(printNumberObserver);
   myTelephone.addObserver(specificMessageObserver);
   
   // Dialing a phone number
   myTelephone.dialPhoneNumber('123-456-7890'); // This will notify the observers
   
   // Removing a phone number
   myTelephone.removePhoneNumber('098-765-4321');
   
   // Attempting to dial a removed number
   myTelephone.dialPhoneNumber('098-765-4321'); // This will not notify the observers
   