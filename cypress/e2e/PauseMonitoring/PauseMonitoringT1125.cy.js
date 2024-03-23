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
        //Choose a device
        cy.get('[aria-label="SX80"]').click()
        cy.get('[data-testid="PauseIcon"]').click()

        //Check all the visible headers
        cy.get('.MuiGrid-item > .MuiGrid-root > .MuiTypography-root').should('be.visible')
        cy.get('.css-1gfbk2v > .MuiOutlinedInput-root > .MuiSelect-select').should('contain.text', '15 Minutes')
        cy.get('.css-1gfbk2v > .MuiOutlinedInput-root > .MuiSelect-select').click()
        cy.get('[data-value="60"]').click()
        cy.get('.MuiFormControlLabel-root').should('not.be.checked')
        cy.get('.MuiFormControlLabel-root').should('contain.text', 'Close all tickets')
        cy.get('.MuiButtonBase-root').contains('OK').click()

        //Check the Device is down
        cy.get('[data-testid="PlayArrowIcon"]').should('be.visible')
        cy.get('[data-testid="PlayArrowIcon"]').trigger('mouseenter');
        cy.get('.MuiTooltip-tooltip > div').should('contain.text', 'Paused until :');
        cy.get('.MuiTooltip-tooltip > div').should('contain', 'with the comments:');
        cy.get('.MuiTooltip-tooltip > div').should('contain', 'auto test auto test paused monitoring on');
        //cy.get('.jss411').should('contain.text','Monitoring status : Paused')
        cy.get('[data-testid="LinkIcon"] > path').should('have.css', 'color', 'rgb(79, 88, 125)')
        cy.get('[data-testid="KeyIcon"] > path').should('have.css', 'color', 'rgb(255, 255, 255)')
        cy.get('[data-testid="CloudIcon"] > path').should('have.css', 'color', 'rgb(79, 88, 125)')
        //Move back to Room detail
        cy.get('.MuiGrid-root > .MuiButton-root').click()
        cy.get('[data-testid="PauseIcon"]').should('be.visible')
        //Wait 10 minutes
        cy.wait(60000)
        cy.get('[aria-label="SX80"]').click()
        cy.get('[data-testid="PlayArrowIcon"]').click()
        cy.get(':nth-child(1) > .MuiGrid-item > .MuiGrid-root > .MuiTypography-root').should('contain.text', 'Pause Monitoring')
        cy.get('.MuiGrid-direction-xs-column > .MuiTypography-body1').should('contain.text', 'Are you sure you want to resume monitoring?')
        //Resume the Device
        cy.get('.MuiButtonBase-root').contains('OK').click()

        //Wait for the Device to Link Up
        cy.wait(18000)
        cy.get('[data-testid="PauseIcon"]').should('be.visible')
        //cy.get('.jss272').should('contain.text','Monitoring status')
        cy.get('[data-testid="LinkIcon"] > path').should('have.css', 'color', 'rgb(0, 214, 109)')
        cy.get('[data-testid="KeyIcon"] > path').should('have.css', 'color', 'rgb(255, 255, 255)')
        cy.get('[data-testid="CloudIcon"] > path').should('have.css', 'color', 'rgb(0, 214, 109)')


    })

})



