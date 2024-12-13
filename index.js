// Write your solution in this file!
// Declare a global variable called customerName
var customerName = 'bob';

// Function that uppercases the global customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function that declares a global variable bestCustomer and assigns it to 'not bob'
function setBestCustomer() {
  bestCustomer = 'not bob'; // Implicitly creates a global variable
}

// Function that overwrites the bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a constant in global scope called leastFavoriteCustomer
const leastFavoriteCustomer = 'some customer';

// Function that attempts to change the leastFavoriteCustomer constant
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'another customer'; // This will throw an error
}
