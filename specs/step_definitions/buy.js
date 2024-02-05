import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Given('that I am on the start page :)', () => {
//   cy.visit('/');
// });

// When('I enter the letters {string} in the search field', (letters) => {
//   cy.get('#search').type(letters);
// });

// Then('I should see the product :){string}', (productName) => {
//   cy.get('div.product h2')
//     .contains(productName)
//     .parentsUntil('div.product')
//     .should('be.visible');
// });

// Already defined in search.js

When('I add the product {string} to the cart', (productName) => {
  // Finding the product with name and adds it to the cart
  cy.contains('div.product h2', productName)
    .siblings('button')
    .click();
});

Then('the product {string} should be in the cart', (productName) => {
  // checks if product is in the cart
  cy.get('#cart').should('contain', productName);
});


