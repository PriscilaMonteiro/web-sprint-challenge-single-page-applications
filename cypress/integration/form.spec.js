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


  // describe('Filling out the inputs', () => {
  //   it('Can navigate to the site', () => {
  //     cy.url().should('include', 'localhost')
  //   })

  //   it('Submit button starts out disabled', () => {
  //     submitBtn().should('be.disabled')
  //   })

  //   it('Can type in the input', () => {
  //     nameInput()
  //       .should('have.value', '')
  //       .type('Priscila')
  //       .should('have.value', 'Priscila')

  //     emailInput()
  //       .should('have.value', '')
  //       .type('pririmonteiro@teste.com')
  //       .should('have.value', 'pririmonteiro@teste.com' )

  //     passwordInput()
  //       .should('have.value', '')
  //       .type('1234567')
  //       .should('have.value', '1234567' )
  //   })

  //   it('can check Yes', () => {
  //     termsInput().check('yes')
  //     cy.get(':checked').should('be.checked')
  //   })

  // })



})





