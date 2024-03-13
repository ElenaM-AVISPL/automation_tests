describe('Login page', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Correct log in', () => {
        cy.fixture('users').then((user) => {

            // Ввод электронной почты из фикстуры
            cy.get('[title="Username"] > .MuiInput-input').type(user.email);
            // Ввод правильного пароля из фикстуры
            cy.get('[title="Password"] > .MuiInput-input').type(user.correct_password);

        })
        cy.get('.css-1xshq1t').click()
        //The main page should be visible
        cy.get('.css-czc5e9 > :nth-child(1) > .MuiGrid-item > .MuiButtonBase-root').click()
        cy.get('[href="/assets"] > .MuiGrid-root > .MuiTypography-root').click()
        //Choose the room for Pause Monitoring
        cy.get(':nth-child(7) > .css-1g6tcg4 > .css-10v05w1 > .jss58 > .jss59 > .MuiButton-root').click()
        cy.get(':nth-child(1) > span[aria-label=""] > .MuiButton-root').click()
        cy.get('.MuiGrid-direction-xs-column > .MuiTextField-root > .MuiOutlinedInput-root').type('15 min by autotests')
        cy.get('.css-z7g8xj').click()
        cy.get('.css-muew5m > .MuiGrid-item > .MuiTypography-root').should('contain.text',"Monitoring status : Paused")
        cy.get('.css-1n5dmg6 > .MuiPaper-root').click()
        cy.get('.css-muew5m > .MuiGrid-item > .MuiTypography-root').should('contain.text',"Monitoring status : Paused")
        cy.get('.MuiGrid-root > .MuiButton-root').click()
        cy.wait(900000)
        cy.get('.css-muew5m > .MuiGrid-item > .MuiTypography-root').should('contain.text',"Monitoring status")

    })



})