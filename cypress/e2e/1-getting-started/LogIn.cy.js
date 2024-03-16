describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/')

  })

  it('Correct log in', () => {
    cy.fixture('users').then((user) => {

      // Email from fixture
      cy.get('[title="Username"] > .MuiInput-input').type(user.email);
      // Password from fixture
      cy.get('[title="Password"] > .MuiInput-input').type(user.correct_password);

    })
    cy.get('.css-1xshq1t').click()
    //The main page should be visible
    cy.get('.css-czc5e9 > :nth-child(1)').should('be.visible')
    cy.get('.MuiAvatar-root').click()
    //Log out
    cy.get('.MuiButton-sizeLarge').click()
    cy.get('.css-1oexzeo').should('be.visible')
    cy.get('[title="Username"] > .MuiInput-input').should('contain.text','')
    cy.get('[title="Password"] > .MuiInput-input').should('contain.text','')



  })

  it('InCorrect log in', () => {
    //Use incorrect data
    cy.get('[title="Username"] > .MuiInput-input').type('elena.melnychenko1@avispl.com')
    cy.get('[title="Password"] > .MuiInput-input').type('12Qwsxzaq!')
    cy.get('.css-1xshq1t').click()
    //Error 'Symphony authentication failed' appears 
    cy.get('.MuiAlert-message').should('contain.text','Symphony authentication failed')
    //Use deactivated users
    cy.get('[title="Username"] > .MuiInput-input').clear().type('elena.melnychenko+17@avispl.com')
    cy.get('[title="Password"] > .MuiInput-input').clear().type('12Qwsxzaq@')
    cy.get('.css-1xshq1t').click()
    //Error "Sorry, but your users account was deactivated. Please contact your administrator." appears
    cy.get('.css-qo8fdw').should('contain.text','Sorry, but your user account was deactivated. Please contact your administrator.')
    cy.get('.css-19lndbj > .MuiTypography-root').click()
    //The error view
    cy.get('.css-1qm1lh > .MuiTypography-root').should('contain.text','Sorry, but your user account was deactivated. Please contact your administrator.')
    cy.get(':nth-child(1) > .MuiGrid-container > .MuiGrid-grid-xs-2 > .MuiBox-root > .MuiTypography-root').should('contain.text','Error')
    cy.get(':nth-child(1) > .MuiGrid-container > .MuiGrid-grid-xs-10 > .MuiTypography-root').should('contain.text','SymphonyUserNotActiveException')
    cy.get(':nth-child(2) > .MuiGrid-container > .MuiGrid-grid-xs-2 > .MuiBox-root').should('contain.text','Message')
    cy.get(':nth-child(2) > .MuiGrid-container > .MuiGrid-grid-xs-10 > .MuiTypography-root').should('contain.text','User is not active')
    cy.get(':nth-child(3) > .MuiGrid-container > .MuiGrid-grid-xs-2 > .MuiBox-root > .MuiTypography-root').should('contain.text','Error Code')
    cy.get('.css-13ellyg').should('contain.text','Copy Error')
    cy.get('.css-z7g8xj').should('contain.text','Close').click()
  })
})