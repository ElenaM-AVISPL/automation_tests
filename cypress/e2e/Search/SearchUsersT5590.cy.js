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
        cy.get('[value="User"]').click()
        cy.get('.css-1aqcxf > .MuiToggleButton-root.Mui-selected').should('have.css','background-color', 'rgb(255, 255, 255)')
        cy.get('.css-sl0nme > .MuiOutlinedInput-root').should('contain.text','Username')

        //Search some Concrete Users
        cy.get('input').eq(1).type('testauto')
        cy.get('.css-1oldft0 > .MuiTypography-root').click()
        cy.get('.css-14ct5id').should('contain.text', '3 Users')

        //Search one Users
        cy.get('.MuiGrid-root .MuiGrid-item > a > img').click()
        cy.get('.css-36fdah > .MuiGrid-container > .MuiGrid-root').click()
        cy.get('.MuiGrid-root > :nth-child(2) > .MuiButton-root > .MuiTypography-root').click()
        cy.get('.MuiTabs-flexContainer > :nth-child(2)').click()

        //Choose Role
        cy.get('.css-mq27tw > .MuiOutlinedInput-root > .MuiSelect-select').click()
        cy.get('[data-value="21"]').click()
        cy.get('.css-z7g8xj').click()
        cy.wait(1000)
        cy.get('.css-14ct5id').invoke('text').then(text => {
            const firstDigit = parseInt(text.trim()[0]);
            expect(firstDigit).to.be.above(0);

        })
            //Use different data
        cy.get('.MuiGrid-root .MuiGrid-item > a > img').click()
        cy.get('.css-36fdah > .MuiGrid-container > .MuiGrid-root').click()
        cy.get('.MuiGrid-root > :nth-child(2) > .MuiButton-root > .MuiTypography-root').click()
        cy.get('.MuiTabs-flexContainer > :nth-child(2)').click()

        //Choose Name
        cy.get('[type="text"]').eq(1).type('testauto')
        cy.get('.css-z7g8xj').click()
        cy.get('.css-14ct5id').should('contain.text', '3 Users')

        //Concrete data
        cy.get('.MuiGrid-root .MuiGrid-item > a > img').click()
        cy.get('.css-36fdah > .MuiGrid-container > .MuiGrid-root').click()
        cy.get('.MuiGrid-root > :nth-child(2) > .MuiButton-root > .MuiTypography-root').click()
        cy.get('.MuiTabs-flexContainer > :nth-child(2)').click()

        //Choose Name and Email
        cy.get('[type="text"]').eq(2).type('auto test')
        cy.get('[type="text"]').eq(3).type('auto test')
        cy.get('[type="text"]').eq(4).type('testautocy@gmail.com')
        cy.get('.css-z7g8xj').click()
        cy.get('.css-14ct5id').should('contain.text', '1 User')
        cy.get('.jss120 > .MuiButton-root').should('contain.text','testautocy@gmail.com')





    })


})