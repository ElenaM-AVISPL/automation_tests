import {loginPage} from "../../support/pageObject/loginPage";
describe('Login page', () => {
    beforeEach(() => {
        loginPage.openLoginPage()
        loginPage.inputUser()
        loginPage.inputPass()
        loginPage.clickLoginButton()
        loginPage.acceptCoockies()
    })

    it('Change Password - Cancel', () => {

        cy.wait(2000)
        //The main page should be visible
        cy.get('.css-czc5e9 > :nth-child(1) > .MuiGrid-item > .MuiButtonBase-root').click()
        cy.get('[href="/assets"] > .MuiGrid-root > .MuiTypography-root').click()
        cy.wait(3000)
        cy.get('.css-1d7v3j3 > .MuiGrid-item > .MuiButton-root').click()
        //Choose Assets -> Accounts
        //Accout for autotest should be visible
        cy.get('.MuiList-root > [tabindex="0"]').click()
        //cy.get(':nth-child(1) > .css-1g6tcg4 > .css-10v05w1 > .jss88 > .jss89 > .MuiButton-root').should('be.visible')
        cy.contains('Account for autotests')
        //Choose users tab
        cy.get('#c7f75ed5-d514-4791-890a-3524734fe3b9users').click()
        cy.contains('testautocy+1@gmail.com').click()
        cy.get('.MuiGrid-direction-xs-column > :nth-child(3) > .MuiButton-root').should('contain.text','Reset Password').click()
        cy.contains('Reset Password')
        cy.get('.MuiGrid-grid-xs-4 > .MuiGrid-root > .MuiBox-root').should('contain.text','Password must have')
        cy.get('ul > :nth-child(1)').should('contain.text','At least One number')
        cy.get('ul > :nth-child(2)').should('contain.text','At least One uppercase latin character')
        cy.get('ul > :nth-child(3)').should('contain.text','At least One lowercase latin character')
        cy.get('ul > :nth-child(4)').should('contain.text','At least One special character')
        cy.get('ul > :nth-child(5)').should('contain.text','8 characters minimum')
        cy.get('.MuiDialogActions-root > .css-1dnniyh').should('be.visible')
        cy.get('[type="password"]').eq(0).type('12Qwsxzaq@')
        cy.get('[type="password"]').eq(1).type('12Qwsxzaq@')
        //Click Cancel and changes are not saved
        cy.get('.MuiDialogActions-root > .css-1dnniyh').click()
        cy.get('.css-1dnniyh').eq(0).click()
        //Log out and log in with the old password
        cy.get('.MuiButtonBase-root > .MuiAvatar-root').click()
        //Log out
        cy.get('.MuiButton-sizeLarge').click()
        cy.get('.css-1oexzeo').should('be.visible')
        //Try to login with the new password
        cy.get('[title="Username"] > .MuiInput-input').type('testautocy+1@gmail.com')
        cy.get('[title="Password"] > .MuiInput-input').type('12Qwsxzaq@')
        cy.get('.css-1xshq1t').click()
        cy.wait(5000)
        //Error 'Symphony authentication failed' appears
        cy.get('.MuiAlert-message').should('contain.text','Symphony authentication failed')

    })
    it('Change Password - Save', () => {

        //The main page should be visible
        cy.get('.css-czc5e9 > :nth-child(1) > .MuiGrid-item > .MuiButtonBase-root').click()
        cy.get('[href="/assets"] > .MuiGrid-root > .MuiTypography-root').click()
        cy.get('.css-1d7v3j3 > .MuiGrid-item > .MuiButton-root').click()
        //Choose Assets -> Accounts
        //Accout for autotest should be visible
        cy.get('.MuiList-root > [tabindex="0"]').click()
        cy.get(':nth-child(1) > .css-1g6tcg4 > .css-10v05w1 > .jss88 > .jss89 > .MuiButton-root').should('be.visible')

        //Choose users tab
        cy.get('#c7f75ed5-d514-4791-890a-3524734fe3b9users').click()
        cy.get(':nth-child(1) > .css-1g6tcg4 > .css-10v05w1 > .MuiGrid-container > .css-9y94a1 > .css-1orwh6x > .jss145 > .jss146 > .MuiButton-root').click()
        cy.get('.MuiGrid-direction-xs-column > :nth-child(3) > .MuiButton-root').should('contain.text','Reset Password').click()
        cy.contains('Reset Password')
        cy.get('.MuiGrid-grid-xs-4 > .MuiGrid-root > .MuiBox-root').should('contain.text','Password must have')
        cy.get('ul > :nth-child(1)').should('contain.text','At least One number')
        cy.get('ul > :nth-child(2)').should('contain.text','At least One uppercase latin character')
        cy.get('ul > :nth-child(3)').should('contain.text','At least One lowercase latin character')
        cy.get('ul > :nth-child(4)').should('contain.text','At least One special character')
        cy.get('ul > :nth-child(5)').should('contain.text','8 characters minimum')
        cy.get('.MuiDialogActions-root > .css-1dnniyh').should('be.visible')
        cy.get('[type="password"]').eq(0).type('12Qwsxzaq@')
        cy.get('[type="password"]').eq(1).type('12Qwsxzaq@')
        cy.get('.MuiDialogActions-root > .css-z7g8xj').click()
        //Click Save and changes are saved
        cy.get('.css-z7g8xj').eq(0).click()
        //Log out and log in with the new password
        cy.get('.MuiButtonBase-root > .MuiAvatar-root').click()
        //Log out and Log in with the new password
        cy.get('.MuiButton-sizeLarge').click()
        cy.get('.css-1oexzeo').should('be.visible')
        cy.get('[title="Username"] > .MuiInput-input').type('testautocy+1@gmail.com')
        cy.get('[title="Password"] > .MuiInput-input').type('12Qwsxzaq@')
        cy.get('.css-1xshq1t').click()
        //The main page should be visible
        cy.get('.css-u4p24i > :nth-child(1) > .MuiTypography-root').click()
        //Log out
        cy.get('.MuiButtonBase-root > .MuiAvatar-root').click()
        cy.get('.MuiButton-sizeLarge').click()
        cy.get('.css-1oexzeo').should('be.visible')
    })


        it('Change Password to the old one - Save', () => {
            //Change the password to the old one
            //The main page should be visible
            cy.get('.css-czc5e9 > :nth-child(1) > .MuiGrid-item > .MuiButtonBase-root').click()
            cy.get('[href="/assets"] > .MuiGrid-root > .MuiTypography-root').click()
            cy.get('.css-1d7v3j3 > .MuiGrid-item > .MuiButton-root').click()
            //Choose Assets -> Accounts
            //Accout for autotest should be visible
            cy.get('.MuiList-root > [tabindex="0"]').click()
            cy.contains('Account for autotests')
            //Choose users tab
            cy.get('#c7f75ed5-d514-4791-890a-3524734fe3b9users').click()
            cy.get(':nth-child(1) > .css-1g6tcg4 > .css-10v05w1 > .MuiGrid-container > .css-9y94a1 > .css-1orwh6x > .jss145 > .jss146 > .MuiButton-root').click()
            cy.get('.MuiGrid-direction-xs-column > :nth-child(3) > .MuiButton-root').should('contain.text','Reset Password').click()
            cy.contains('Reset Password')
            cy.get('.MuiGrid-grid-xs-4 > .MuiGrid-root > .MuiBox-root').should('contain.text','Password must have')
            cy.get('ul > :nth-child(1)').should('contain.text','At least One number')
            cy.get('ul > :nth-child(2)').should('contain.text','At least One uppercase latin character')
            cy.get('ul > :nth-child(3)').should('contain.text','At least One lowercase latin character')
            cy.get('ul > :nth-child(4)').should('contain.text','At least One special character')
            cy.get('ul > :nth-child(5)').should('contain.text','8 characters minimum')
            cy.get('.MuiDialogActions-root > .css-1dnniyh').should('be.visible')
            cy.get('[type="password"]').eq(0).type('12Qwsxzaq!')
            cy.get('[type="password"]').eq(1).type('12Qwsxzaq!')
            cy.get('.MuiDialogActions-root > .css-z7g8xj').click()
            //Click Save and changes are saved
            cy.get('.css-z7g8xj').eq(0).click()
            //Log out and log in with the new password
            cy.get('.MuiButtonBase-root > .MuiAvatar-root').click()
            //Log out and Log in with the new password
            cy.get('.MuiButton-sizeLarge').click()
            cy.get('.css-1oexzeo').should('be.visible')
            cy.wait(2000)
            cy.get('[title="Username"] > .MuiInput-input').type('testautocy+1@gmail.com')
            cy.get('[title="Password"] > .MuiInput-input').type('12Qwsxzaq!')
            cy.get('.css-1xshq1t').click()
            //The main page should be visible
            cy.get('.css-u4p24i > :nth-child(1) > .MuiTypography-root').click()
            //Log out
            cy.get('.MuiButtonBase-root > .MuiAvatar-root').click()
            cy.get('.MuiButton-sizeLarge').click()
            cy.get('.css-1oexzeo').should('be.visible')
        })

    after(()=>{
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
    })

    })