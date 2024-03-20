import {loginPage} from "../../support/pageObject/loginPage";
describe('Login page', () => {
    beforeEach(() => {
      loginPage.openLoginPage()
      loginPage.inputUser()
      loginPage.inputPass()
      loginPage.clickLoginButton()
      loginPage.acceptCoockies()
    })
  
    it('Change password/Cancel', () => {

      //The main page should be visible
      cy.get('.css-czc5e9 > :nth-child(1)').should('be.visible')
      cy.get('.MuiAvatar-root').click()

      //Change password
      cy.get(':nth-child(4) > .MuiButtonBase-root > .MuiTypography-root').click()
      cy.get('[type="password"]').eq(0).type('12Qwsxzaq!')
      cy.get('[type="password"]').eq(1).type('12Qwsxzaq@')
      cy.get('[type="password"]').eq(2).type('12Qwsxzaq@')

      //Click cancel - the changes should not be changed
      cy.get('.css-1ul47bz > .MuiButton-root').should('contain.text','Cancel').click()
      cy.get('.MuiAvatar-root').click()

      //Log out
      cy.get('.MuiButton-sizeLarge').click()
      cy.get('.css-1oexzeo').should('be.visible')

      //Log in
      cy.get('[title="Username"] > .MuiInput-input').type('testautocy@gmail.com')
      cy.get('[title="Password"] > .MuiInput-input').type('12Qwsxzaq!')
      cy.get('.css-1xshq1t').click()

      //The main page should be visible
      cy.get('.css-czc5e9 > :nth-child(1)').should('be.visible')
      cy.get('.MuiAvatar-root').click()

      //Change password
      cy.get(':nth-child(4) > .MuiButtonBase-root > .MuiTypography-root').click()
      cy.get('[type="password"]').eq(0).type('12Qwsxzaq!')
      cy.get('[type="password"]').eq(1).type('12Qwsxzaq@')
      cy.get('[type="password"]').eq(2).type('12Qwsxzaq@')
      cy.get('.MuiGrid-wrap-xs-nowrap > .MuiButton-root').should('contain.text','Change').click()
      cy.get('.MuiGrid-wrap-xs-nowrap > .MuiButton-root').click()

      //Log out
      cy.get('.MuiButton-sizeLarge').click()
      cy.get('.css-1oexzeo').should('be.visible')

      //Try to log in with old data
      cy.get('[title="Username"] > .MuiInput-input').type('testautocy@gmail.com')
      cy.get('[title="Password"] > .MuiInput-input').type('12Qwsxzaq!')
      cy.get('.css-1xshq1t').click()
      cy.wait(3000)
      //The error appears 'Symphony authentication failed'

      //Log in the new password
      cy.wait(3000)
      cy.get('[title="Username"] > .MuiInput-input').clear().type('testautocy@gmail.com')
      cy.get('[title="Password"] > .MuiInput-input').clear().type('12Qwsxzaq@')
      cy.wait(3000)
      cy.get('.css-1xshq1t').click()

      //The main page should be visible
      cy.get('.css-czc5e9 > :nth-child(1)').should('be.visible')
      cy.get('.MuiAvatar-root').click()

      //Change password
      cy.get(':nth-child(4) > .MuiButtonBase-root > .MuiTypography-root').click()
      cy.get('[type="password"]').eq(0).type('12Qwsxzaq@')
      cy.get('[type="password"]').eq(1).type('12Qwsxzaq!')
      cy.get('[type="password"]').eq(2).type('12Qwsxzaq!')
      cy.get('.MuiGrid-wrap-xs-nowrap > .MuiButton-root').should('contain.text','Change').click()
      cy.get('.MuiGrid-wrap-xs-nowrap > .MuiButton-root').click()
      //Log out
      cy.get('.MuiButton-sizeLarge').click()
      cy.get('.css-1oexzeo').should('be.visible')
      //Try to log in with old data
      cy.get('[title="Username"] > .MuiInput-input').type('testautocy@gmail.com')
      cy.get('[title="Password"] > .MuiInput-input').type('12Qwsxzaq!')
      cy.get('.css-1xshq1t').click()
      cy.get('.css-czc5e9 > :nth-child(1)').should('be.visible')
      //The users can be logged in with the correct data


  
  
    })
})