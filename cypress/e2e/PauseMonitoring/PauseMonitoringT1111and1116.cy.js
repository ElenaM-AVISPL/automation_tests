import {loginPage} from "../../support/pageObject/loginPage";

describe('Pause Monitoring', () => {
    beforeEach(() => {
        loginPage.openLoginPage()
        loginPage.inputUser()
        loginPage.inputPass()
        loginPage.clickLoginButton()
        loginPage.acceptCoockies()
    })

    it('Pause Monitoring Room for 15 min(T1111and1116)', () => {
        //The main page should be visible
        cy.get('.css-czc5e9 > :nth-child(1) > .MuiGrid-item > .MuiButtonBase-root').click()
        cy.get('[href="/assets"] > .MuiGrid-root > .MuiTypography-root').click()

        //Choose Link UP Rooms
        cy.get('[value="Online"]').click()
        //Choose Room
        cy.contains('Cisco SX80 Rm').click()
        //Choose a device for Pause for 30 min
        cy.get('[aria-label="SX80"]').click()
        cy.get('[data-testid="PauseIcon"]').click()
        //Check all the visible headers
        cy.get('.MuiGrid-item > .MuiGrid-root > .MuiTypography-root').should('be.visible')
        cy.get('.css-1gfbk2v > .MuiOutlinedInput-root > .MuiSelect-select').should('contain.text','15 Minutes')
        cy.get('.css-1gfbk2v > .MuiOutlinedInput-root > .MuiSelect-select').click()
        cy.get('[data-value="30"]').click()
        cy.get('.MuiFormControlLabel-root').should('not.be.checked')
        cy.get('.MuiFormControlLabel-root').should('contain.text','Close all tickets')
        //Check that Cancel button rejects all the changes
        cy.contains('Cancel').click()
        cy.get(':nth-child(1) > span[aria-label=""] > .MuiButton-root').should('have.class', 'false')
        //cy.get('.MuiGrid-root .MuiGrid-item').should('contain.text', 'Monitoring Status')
        //Click save and pause monitoring of Room for 30 min
        cy.get('[data-testid="PauseIcon"]').click()
        cy.get('.MuiGrid-item > .MuiGrid-root > .MuiTypography-root').should('be.visible')
        cy.get('.css-1gfbk2v > .MuiOutlinedInput-root > .MuiSelect-select').should('contain.text','30 Minutes')
        //The Device is paused for 30 min
        cy.get('.MuiButtonBase-root').contains('OK').click()
        cy.get('[data-testid="PlayArrowIcon"]').should('be.visible')
        //cy.get('.jss272').should('contain.text','Monitoring status : Paused')
        cy.get('[data-testid="LinkIcon"] > path').should('have.css','color', 'rgb(79, 88, 125)')
        cy.get('[data-testid="KeyIcon"] > path').should('have.css','color', 'rgb(255, 255, 255)')
        cy.get('[data-testid="CloudIcon"] > path').should('have.css','color', 'rgb(79, 88, 125)')
        //Move back to Room View
        cy.get('.MuiGrid-root > .MuiButton-root').click()
        cy.get('[data-testid="PauseIcon"]').click()
        //Pause the room for 15 min
        cy.get('.MuiGrid-item > .MuiGrid-root > .MuiTypography-root').should('be.visible')
        cy.get('.css-1gfbk2v > .MuiOutlinedInput-root > .MuiSelect-select').should('contain.text','15 Minutes')
        cy.get('.MuiButtonBase-root').contains('OK').click()
        cy.get('[data-testid="PlayArrowIcon"]').should('be.visible')
        cy.get('.jss272').should('contain.text','Monitoring status : Paused')
        //Check Link/Login/API are down
        cy.get('[data-testid="QuestionMarkIcon"] > path').should('have.css','color', 'rgb(79, 88, 125)')
        cy.get('[data-testid="QuestionMarkIcon"] > path').should('have.css','color', 'rgb(79, 88, 125)')
        cy.get('[data-testid="QuestionMarkIcon"] > path').should('have.css','color', 'rgb(79, 88, 125)')
        //Check the other Device is paused for 15 min
        cy.get('[aria-label="Generic Laptop"]').click()
        //cy.get('.jss342').should('contain.text','Monitoring status : Paused')
        cy.get('[data-testid="LinkIcon"] > path').should('have.css','color', 'rgb(79, 88, 125)')
        //Wait for 15 minites
        cy.wait(960000)
        //Device is up after 15 min
        cy.get('.jss341').should('contain.text','Monitoring status')
        //Wait 3 min for getting the Device back
        cy.wait(180000)
        cy.get('[data-testid="LinkIcon"] > path').should('have.css','color', 'rgb(0, 214, 109)')
        //Room is Up after 15 min
        cy.get('.MuiGrid-root > .MuiButton-root').click()
        cy.get('[data-testid="PauseIcon"]').should('be.visible')
        cy.get('.css-muew5m > .MuiGrid-item > .MuiTypography-root').should('contain.text','Monitoring status')
        //Check the other Device that was paused for 30 min
        cy.get('[aria-label="SX80"]').click()
        cy.get('[data-testid="PlayArrowIcon"]').should('be.visible')
        //cy.get('.jss411').should('contain.text','Monitoring status : Paused')
        cy.get('[data-testid="LinkIcon"] > path').should('have.css','color', 'rgb(79, 88, 125)')
        cy.get('[data-testid="KeyIcon"] > path').should('have.css','color', 'rgb(255, 255, 255)')
        cy.get('[data-testid="CloudIcon"] > path').should('have.css','color', 'rgb(79, 88, 125)')
        //Wait for 15 minutes more
        cy.wait(900000)
        cy.get('[data-testid="PauseIcon"]').should('be.visible')
        //cy.get('.jss272').should('contain.text','Monitoring status')
        cy.get('[data-testid="LinkIcon"] > path').should('have.css','color', 'rgb(0, 214, 109)')
        cy.get('[data-testid="KeyIcon"] > path').should('have.css','color', 'rgb(255, 255, 255)')
        cy.get('[data-testid="CloudIcon"] > path').should('have.css','color', 'rgb(0, 214, 109)')







    })



})