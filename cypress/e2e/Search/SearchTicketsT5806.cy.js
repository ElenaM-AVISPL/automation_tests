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
        cy.get('[value="Ticket"]').click()
        cy.get('.css-1aqcxf > .MuiToggleButton-root.Mui-selected').should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get('.css-1aqcxf > .MuiToggleButton-root.Mui-selected').should('contain.text', 'Ticket')
        cy.get('.css-sl0nme > .MuiOutlinedInput-root').should('contain.text', 'Id')

        //Search a Concrete Ticket
        cy.get('input').eq(1).type('1094322')
        cy.get('.css-1oldft0 > .MuiTypography-root').click()
        cy.get('.css-14ct5id').should('contain.text', '1 ticket')

        //Search a fault ticket
        cy.get('.MuiGrid-root .MuiGrid-item > a > img').click()
        cy.get('.css-36fdah > .MuiGrid-container > .MuiGrid-root').click()
        cy.get('[value="Ticket"]').click()
        cy.get('.css-1aqcxf > .MuiToggleButton-root.Mui-selected').should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get('.css-1aqcxf > .MuiToggleButton-root.Mui-selected').should('contain.text', 'Ticket')
        cy.get('.css-sl0nme > .MuiOutlinedInput-root').should('contain.text', 'Id')
        cy.get('input').eq(1).type('0123432')
        cy.get('.css-1oldft0 > .MuiTypography-root').click()
        cy.get('.css-14ct5id').should('contain.text', '0 ticket')

        //Search by Location from basic Search
        cy.get('.MuiGrid-root .MuiGrid-item > a > img').click()
        cy.get('.css-36fdah > .MuiGrid-container > .MuiGrid-root').click()
        cy.get('[value="Ticket"]').click()
        cy.get('.css-1aqcxf > .MuiToggleButton-root.Mui-selected').should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get('.css-1aqcxf > .MuiToggleButton-root.Mui-selected').should('contain.text', 'Ticket')
        cy.get('.MuiSelect-select').click()
        cy.contains('Location').click()
        cy.get('input').eq(1).type('Austin, Tx')
        cy.get('.css-1oldft0 > .MuiTypography-root').click()
        cy.wait(1000)
        cy.get('.css-14ct5id').invoke('text').then(text => {
            const firstDigit = parseInt(text.trim()[0]);
            expect(firstDigit).to.be.above(0);
        })

        //Search for Ticket with ID from Advanced
        cy.get('.MuiGrid-root .MuiGrid-item > a > img').click()
        cy.get('.css-36fdah > .MuiGrid-container > .MuiGrid-root').click()
        cy.get('.MuiGrid-root > :nth-child(2) > .MuiButton-root > .MuiTypography-root').click()
        cy.get('.MuiTabs-flexContainer > :nth-child(4)').click()
        cy.get('[type="text"]').eq(1).type('1094322')
        cy.get('.css-z7g8xj').click()
        cy.get('.css-14ct5id').should('contain.text', '1 ticket')

        //Search for Ticket with different data from Advanced
        cy.get('.MuiGrid-root .MuiGrid-item > a > img').click()
        cy.get('.css-36fdah > .MuiGrid-container > .MuiGrid-root').click()
        cy.get('.MuiGrid-root > :nth-child(2) > .MuiButton-root > .MuiTypography-root').click()
        cy.get('.MuiTabs-flexContainer > :nth-child(4)').click()
        cy.get('[type="text"]').eq(1).type('1094300')
        cy.get('[type="text"]').eq(2).type('Austin, Tx')
        cy.get('[type="text"]').eq(3).type('Adapter Room')
        cy.get('.css-z7g8xj').click()
        cy.get('.css-14ct5id').should('contain.text', '1 ticket')
        cy.get('.css-10v05w1 > .MuiGrid-root > .MuiButton-root').should('contain.text','1094300')

    })






})