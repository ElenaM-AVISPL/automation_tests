import {loginPage} from "../../support/pageObject/loginPage";

describe('TestChannelAddDelete', () => {
    beforeEach(() => {
        loginPage.openLoginPage()
        loginPage.inputUser()
        loginPage.inputPass()
        loginPage.clickLoginButton()
        loginPage.acceptCoockies()
    })

    it('Create a Channel', () => {
//The main page should be visible
        cy.get('.css-czc5e9 > :nth-child(1) > .MuiGrid-item > .MuiButtonBase-root').click()
        cy.get('[href="/assets"] > .MuiGrid-root > .MuiTypography-root').click()
        cy.get('.css-1d7v3j3 > .MuiGrid-item > .MuiButton-root').click()
        //Choose Assets -> Accounts
        //Automation account should be visible
        cy.get('.MuiList-root > [tabindex="0"]').click()
        //Click Administration tab and check the visible icons
        cy.get('.MuiTabs-flexContainer > :nth-child(2) > .MuiButtonBase-root').click()
        cy.get('[aria-label="Add"] > .MuiButtonBase-root').should('be.visible')
        cy.get('[aria-label="Export"] > .MuiButtonBase-root').should('be.visible')
        cy.get('[aria-label="Columns"] > .MuiButtonBase-root').should('be.visible')
        cy.get('[aria-label="Refresh"] > .MuiButtonBase-root').should('be.visible')
        //Click Add Account button
        cy.get('[aria-label="Add"] > .MuiButtonBase-root').click()
        //Channel button and add the channel
        cy.get('.MuiGrid-container > .MuiButton-root').should('contain.text','Edit Channels')
        cy.get('.MuiGrid-container > .MuiButton-root').click()
        cy.get('.css-1wxaqej > .MuiGrid-wrap-xs-nowrap > .MuiTypography-root').should('contain.text','Edit Channels (0)')
        cy.get('.css-1wxaqej > .MuiGrid-wrap-xs-nowrap > .MuiGrid-root > [aria-label="Add"]').click()
        cy.get('.css-1wxaqej > .MuiGrid-wrap-xs-nowrap > .MuiTypography-root').should('contain.text','Add Channel')
        cy.get('input').last().type('4test')
        cy.contains('Save').click()
        //The changes are saved
        cy.wait(1000)
        cy.get('.MuiPaper-root > .MuiGrid-direction-xs-column > .css-9ninui > .MuiGrid-root').should('contain.text','4test')
        //Try to save the Channel with same name and the error appears
        cy.get('.css-1wxaqej > .MuiGrid-wrap-xs-nowrap > .MuiGrid-root > [aria-label="Add"]').click()
        cy.get('input').last().type('4test')
        cy.contains('Save').click()
        cy.wait(2000)
        cy.get('[direction="up"] > .MuiPaper-root').should('contain.text','ErrorChannel name is already used')
        cy.get('[aria-label="Close"]').click()
        cy.get('[aria-label="Close"]').click()
        //Check that the New channel is in the Channel dropdown
        cy.get('.MuiGrid-direction-xs-column > .MuiGrid-container > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiSelect-select').click()
        cy.get('.MuiList-root').should('contain.text','4test')
        cy.get('body').click()
        cy.get('.MuiGrid-container > .MuiButton-root').click()
        cy.contains('4test').click()
        cy.wait(1000)
        cy.get('[aria-label="Delete"]').eq(1).click()
        cy.wait(1000)
        cy.get('.MuiGrid-direction-xs-column > :nth-child(1) > .MuiGrid-wrap-xs-nowrap > .MuiTypography-root').should('contain.text','Delete Channel')
        cy.get('.MuiGrid-direction-xs-column-reverse > :nth-child(1) > .MuiGrid-item > .MuiTypography-body1').should('contain.text','Please confirm you want to remove the selected channels.')
        cy.contains('Confirm').click()
        cy.get('.css-1q3d0xc > .MuiPaper-root > .MuiGrid-direction-xs-column').should('not.contain.text','4test')
        cy.wait(1000)



    })
    after(()=>{
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
    })
})