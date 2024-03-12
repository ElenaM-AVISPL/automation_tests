describe('Login page', () => {
    beforeEach(() => {
      cy.visit('https://chi-qa-ui.vnocsymphony.com/')
    })
  
    it('Change password/Cancel', () => {
     
      cy.get('[title="Username"] > .MuiInput-input').type('elena.melnychenko@avispl.com')
      cy.get('[title="Password"] > .MuiInput-input').type('12Qwsxzaq!')
      cy.get('.css-1xshq1t').click()
      //The main page should be visible
      cy.get('.css-czc5e9 > :nth-child(1)').should('be.visible')
      cy.get('.MuiAvatar-img').click()
      //Change password
      cy.get(':nth-child(4) > .MuiButtonBase-root > .MuiTypography-root').click()
      cy.get('#mui-32').type('12Qwsxzaq!')
      cy.get('#mui-33').type('12Qwsxzaq@')
      cy.get('#mui-34').type('12Qwsxzaq@')
      //Click cancel - the changes should not be changed
      cy.get('.css-1ul47bz > .MuiButton-root').should('contain.text','Cancel').click()
      cy.wait(10000)
      cy.get('.MuiAvatar-img').click()
      //Log out
      cy.get('.MuiButton-sizeLarge').click()
      cy.get('.css-1oexzeo').should('be.visible')
      //Log in
      cy.get('[title="Username"] > .MuiInput-input').type('elena.melnychenko@avispl.com')
      cy.get('[title="Password"] > .MuiInput-input').type('12Qwsxzaq!')
      cy.get('.css-1xshq1t').click()
      //The main page should be visible
      cy.get('.css-czc5e9 > :nth-child(1)').should('be.visible')
      cy.get('.MuiAvatar-img').click()
      //Change password
      cy.get(':nth-child(4) > .MuiButtonBase-root > .MuiTypography-root').click()
      cy.get('#mui-90').type('12Qwsxzaq!')
      cy.get('#mui-91').type('12Qwsxzaq@')
      cy.get('#mui-92').type('12Qwsxzaq@')
      cy.get('.MuiGrid-wrap-xs-nowrap > .MuiButton-root').should('contain.text','Change').click()
      cy.get('.MuiGrid-wrap-xs-nowrap > .MuiButton-root').click()
      //Log out
      cy.get('.MuiButton-sizeLarge').click()
      cy.get('.css-1oexzeo').should('be.visible')
      //Try to log in with old data
      cy.get('[title="Username"] > .MuiInput-input').type('elena.melnychenko@avispl.com')
      cy.get('[title="Password"] > .MuiInput-input').type('12Qwsxzaq!')
      cy.get('.css-1xshq1t').click()
      //The error appears 'Symphony authentication failed'
      //Log in the new password
      cy.get('[title="Username"] > .MuiInput-input').clear().type('elena.melnychenko@avispl.com')
      cy.get('[title="Password"] > .MuiInput-input').clear().type('12Qwsxzaq@')
      cy.get('.css-1xshq1t').click()
      //The main page should be visible
      cy.get('.css-czc5e9 > :nth-child(1)').should('be.visible')
      cy.get('.MuiAvatar-img').click()
      //Change password
      cy.get(':nth-child(4) > .MuiButtonBase-root > .MuiTypography-root').click()
      cy.get('#mui-138').type('12Qwsxzaq@')
      cy.get('#mui-139').type('12Qwsxzaq!')
      cy.get('#mui-140').type('12Qwsxzaq!')
      cy.get('.MuiGrid-wrap-xs-nowrap > .MuiButton-root').should('contain.text','Change').click()
      cy.get('.MuiGrid-wrap-xs-nowrap > .MuiButton-root').click()
      //Log out
      cy.get('.MuiButton-sizeLarge').click()
      cy.get('.css-1oexzeo').should('be.visible')
      //Try to log in with old data
      cy.get('[title="Username"] > .MuiInput-input').type('elena.melnychenko@avispl.com')
      cy.get('[title="Password"] > .MuiInput-input').type('12Qwsxzaq!')
      cy.get('.css-1xshq1t').click()
      //The user can be logged in with the correct data


  
  
    })
})