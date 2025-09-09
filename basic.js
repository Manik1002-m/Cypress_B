// cypress/e2e/firstTest.cy.js
describe('My First Cypress Test', () => {
  it('should visit a page and check title', () => {
    cy.visit('https://example.cypress.io')
    cy.title().should('include', 'Cypress')
  })
})




//locators
cy.get('#username')         // by ID
cy.get('.btn-primary')      // by class
cy.get('input[name="email"]') // by attribute
cy.contains('Submit')       // by visible text



//implicit/ explicit
// Implicit retry until visible
cy.get('#loading').should('be.visible')

// Explicit wait
cy.wait(5000) // wait 5 seconds
cy.get('#username', { timeout: 10000 }).should('exist')





// Dropdown
cy.get('select#country').select('India') // by visible text
cy.get('select#country').select('IN')    // by value



//Checkboxes and Radio buttons
cy.get('#acceptTerms').check().should('be.checked')

// Radio button
cy.get('input[type="radio"][value="male"]').check().should('be.checked')





//Alerts and Pop-ups
// Handle window:alert
cy.on('window:alert', (msg) => {
  expect(msg).to.contains('This is an alert')
})

// Handle window:confirm
cy.on('window:confirm', () => true) // Accept
cy.on('window:confirm', () => false) // Dismiss






//API Testing
cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
  .its('status')
  .should('eq', 200)

cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
    title: 'foo',
    body: 'bar',
    userId: 1
}).then((res) => {
    expect(res.status).to.eq(201)
})







//Handle iFrames in Cypress
// Install plugin
// npm install -D cypress-iframe

// Usage
import 'cypress-iframe'

cy.frameLoaded('#iframeId')
cy.iframe().find('button').click()





//Hooks
describe('Hooks Example', () => {
  before(() => { cy.log('Runs once before all tests') })
  beforeEach(() => { cy.visit('/login') })
  afterEach(() => { cy.log('Runs after each test') })
  after(() => { cy.log('Runs once after all tests') })

  it('Test 1', () => { cy.get('#username').should('be.visible') })
  it('Test 2', () => { cy.get('#password').should('be.visible') })
})






//POM in cypress
// cypress/pages/LoginPage.js
class LoginPage {
  visit() { cy.visit('/login') }
  enterUsername(name) { cy.get('#username').type(name) }
  enterPassword(pass) { cy.get('#password').type(pass) }
  submit() { cy.get('button[type="submit"]').click() }
}
export default LoginPage

// cypress/e2e/loginTest.cy.js
import LoginPage from '../pages/LoginPage'

describe('Login Test', () => {
  it('should login with valid credentials', () => {
    const login = new LoginPage()
    login.visit()
    login.enterUsername('manik')
    login.enterPassword('12345')
    login.submit()
    cy.url().should('include', '/dashboard')
  })
})
