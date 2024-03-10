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
      cy.get('.MuiButton-sizeLargeMuiTypography-root MuiTypography-body1 css-1epx0x7').click()
      cy.get('MuiTypography-root MuiTypography-caption css-3okvnn').type('12Qwsxzaq!')
      cy.get('MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl MuiInputBase-sizeSmall css-10wsote').type('12Qwsxzaq@')
      cy.get('MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputSizeSmall css-17opruk').type('12Qwsxzaq@')
      //Click cancel - the changes should not be changed
      cy.get('MuiTypography-root MuiTypography-caption css-3okvnn').should('contain.text','Cancel').click()
      cy.get('.MuiAvatar-img').click()
      //Log out
      cy.get('.MuiButton-sizeLarge').click()
      cy.get('.css-1oexzeo').should('be.visible')
      //Try to log in with old data
      cy.get('[title="Username"] > .MuiInput-input').type('elena.melnychenko@avispl.com')
      cy.get('[title="Password"] > .MuiInput-input').type('12Qwsxzaq!')
      cy.get('.css-1xshq1t').click()
      //The main page should be visible
      cy.get('.css-czc5e9 > :nth-child(1)').should('be.visible')

  
  
    })
})