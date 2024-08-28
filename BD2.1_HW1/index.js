const express = require('express');
const app = express();
const PORT = 3000;
//Define the  an Object on the server: person
let person = {
  firstName: "Amit",
  lastName: "Sharma",
  gender: "male",
  age:  30,
  isMember: true,
}
//Endpoint 1: Return the person object
app.get("/person", (req, res) => {
  res.json(person);
});
// function to get the full name of the person
function getFullName(person){
  return person.firstName + " " + person.lastName;
}
//Endpoint 2: Access the full name of the person
app.get("/person/fullname", (req, res) => {
  let fullName = getFullName(person);
  res.json({fullName: fullName});
});
// function to get the first name and gender of the person
function getFirstNameAndGender(person){
  return {
    firstName: person.firstName,
    Gender: person.gender,
  };
}
//Endpoint 3: Access just the first name and gender of the person
app.get("/person/firstname-gender", (req, res) => {
  let firstNameAndGender = getFirstNameAndGender(person);
  res.json(firstNameAndGender);
});
// function to increament the age of the person
function getIncrementedAgeObject(person){
  person.age = person.age + 1;
  return person;
}
//Endpoint 4: Increament the age of the person and returnthe updated object
app.get("/person/increment-age", (req, res) => {
  let updatedObject= getIncrementedAgeObject(person);
  res.json(updatedObject);
});
// function to get the full name and membership of the person
function getFullNameAndMembership(person){
   return{
     fullName: getFullName(person),
     isMember: person.isMember
   }
}
//Endpoint 5: Return the full name and membership status of the person
app.get("/person/fullname-membership", (req, res) => {
  let FullNameAndMembership = getFullNameAndMembership(person);
  res.json(FullNameAndMembership);
});
// function to calculate final price with discount for members
function getFinalPrice(cartTotal,isMember){
  let finalPrice;
  if(isMember === true) {
    finalPrice = cartTotal - cartTotal * 0.1;
  }else{
    finalPrice = cartTotal;
  }
  return finalPrice;
}
//Endpoint 6: Get the final price after discount for members
app.get("/person/final-price", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let finalPrice = getFinalPrice(cartTotal,person.isMember);
  res.json({finalPrice: finalPrice});
});
// function to calculate shipping cost based on cart total and membership status
function getShippingCost(cartTotal,isMember){
  let finalShippingCost;
  if(cartTotal >500 && isMember === true) {
    finalShippingCost = 0
  }else{
    finalShippingCost = 90
  }
  return finalShippingCost;
}
//Endpoint 7:Get shipping cost based on cart total and membership status
app.get("/person/shipping-cost", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let shippingCost =  getShippingCost(cartTotal,person.isMember);
  res.json({shippingCost: shippingCost.toFixed(2)});
});




app.listen(PORT,() => {
  console.log("Server is running on https://localhost:" + PORT);
});