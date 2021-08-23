describe('Lambda Eats app', () => {
  beforeEach(() => {
    // make sure each test starts with fresh data
    cy.visit('http://localhost:3005')
  })

  // create helpers to collect dom elements
  const sizeInput = () => cy.get('select[name=size]')
  const sauceInput = () => cy.get('input[name=sauce]')
  const toppingsInput = () => cy.get('input[name=toppings]')
  const foobarInput = () => cy.get('input[name=foobar]')
  const submitBtn= () => cy.get('button[id="order-button"]')
  
  
 

  it('Sanity check to make sure that tests work', () => {
    //  "it" is a test
    // "expect" is an assertion
    expect(1+2).to.equal(3)
    expect(2+2).not.to.equal(5)
    expect({}).not.to.equal({}) // equal ie ===
    expect({}).to.eql({}) // equ ie ==
  })



  it('The proper elements are showing', () => {
    sizeInput().should('exist')
    sauceInput().should('exist')
    toppingsInput().should('exist')
    foobarInput().should('not.exist')
    submitBtn().should('exist')
    
  })

  it('can select multiple toppings', () => {

    toppingsInput().check(["pepperoni" ,"spicy","bacon"], { force: true })
    cy.get(':checked').should('be.checked')

    
  })




})





