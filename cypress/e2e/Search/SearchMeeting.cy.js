import {loginPage} from "../../support/pageObject/loginPage";

describe('Login page', () => {
    beforeEach(() => {
        loginPage.openLoginPage()
        loginPage.inputUser()
        loginPage.inputPass()
        loginPage.clickLoginButton()
        loginPage.acceptCoockies()
    })

    it('Correct log in', () => {
        //The main page should be visible
        cy.get('.css-czc5e9 > :nth-child(1)').should('be.visible')
        cy.get('.css-36fdah > .MuiGrid-container > .MuiGrid-root').click()

        //Choose Search button
        cy.get('[value="Meeting"]').click()
        cy.get('.css-1aqcxf > .MuiToggleButton-root.Mui-selected').should('have.css','background-color', 'rgb(255, 255, 255)')
        cy.get('.css-1aqcxf > .MuiToggleButton-root.Mui-selected').should('contain.text', 'Meeting')
        cy.get('.css-sl0nme > .MuiOutlinedInput-root').should('contain.text','Id')

        //Search some Concrete Meeting
        cy.get('input').eq(1).type('3104145')
        //cy.get('input').eq(2).clear().type('12192023')
        //cy.get('input').eq(3).clear().type('04212024')
        cy.wait(4000)
        cy.get('.css-1oldft0 > .MuiTypography-root').click()
        cy.get('.css-14ct5id').should('contain.text', '1 meeting')

        //Search for Meetings with date range from Advanced
        cy.get('.MuiGrid-root .MuiGrid-item > a > img').click()
        cy.get('.css-36fdah > .MuiGrid-container > .MuiGrid-root').click()
        cy.get('.MuiGrid-root > :nth-child(2) > .MuiButton-root > .MuiTypography-root').click()
        cy.get('.MuiTabs-flexContainer > :nth-child(3)').click()
        cy.get('.css-z7g8xj').click()
        cy.wait(2000)
        cy.get('.css-gopeee > .MuiBox-root > .MuiTypography-root').invoke('text').then(text => {
            const firstDigit = parseInt(text.trim()[0]);
            expect(firstDigit).to.be.above(0);
        });

        //Search Meeting with ID from Advanced
        cy.get('.MuiGrid-root .MuiGrid-item > a > img').click()
        cy.get('.css-36fdah > .MuiGrid-container > .MuiGrid-root').click()
        cy.get('.MuiGrid-root > :nth-child(2) > .MuiButton-root > .MuiTypography-root').click()
        cy.get('.MuiTabs-flexContainer > :nth-child(3)').click()
        cy.get('[type="text"]').eq(1).type('3104145')
        cy.get('.css-z7g8xj').click()
        cy.get('.css-14ct5id').should('contain.text', '1 meeting')


    })

    after(()=>{
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
    })


})