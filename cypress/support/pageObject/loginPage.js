export class LoginPage {
    openLoginPage() {
        cy.visit('/')
        return this
    }
    inputUser() {
        cy.fixture('users').then((user) => {
            // Email from fixture
            cy.get('[title="Username"] > .MuiInput-input').type(user.email);
        })
        return this
    }
    inputPass() {
        cy.fixture('users').then((user) => {
            // Password from fixture
            cy.get('[title="Password"] > .MuiInput-input').type(user.correct_password);
        })
        return this
    }
    clickLoginButton(){
        cy.get('.css-1xshq1t').click()
        return this
    }
    acceptCoockies() {
        cy.contains('Accept all').click()
        return this
    }
}

export const loginPage = new LoginPage()