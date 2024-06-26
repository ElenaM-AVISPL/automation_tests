import {loginPage} from "../../support/pageObject/loginPage";

describe('Build you own Report', () => {
    beforeEach(() => {
        loginPage.openLoginPage()
        loginPage.inputUser()
        loginPage.inputPass()
        loginPage.clickLoginButton()
        loginPage.acceptCoockies()
    })

    it('Create/Delete Reports', () => {

        //Open Report -> Dropdown
        cy.get('.css-czc5e9 > :nth-child(1) > .MuiGrid-item > .MuiButtonBase-root').click()
        cy.get('[href="/bi/reports"] > .MuiGrid-root > .MuiTypography-root').click()
        cy.get('.MuiButton-endIcon>[data-testid="ArrowDropDownIcon"]>path').click()
        cy.get('[value="Build Your Own Report"]').click()
        //Checking the fields and Adding the New Report
        cy.get('.MuiPaper-root > .MuiGrid-root > .MuiButton-root > .MuiTypography-root').should('contain.text', 'Add new report')
        cy.get('[data-testid="AddIcon"').should('contain.text', '')
        cy.get('.MuiPaper-root > .MuiGrid-root > .MuiButton-root').click()
        cy.get('.MuiPaper-root > .MuiGrid-root > .MuiTypography-body1').should('contain.text', 'New report')
        cy.get('.css-17opruk').eq(0).should('contain.text', '')
        cy.get('.css-17opruk').eq(1).should('contain.text', '')
        cy.get('.css-z7g8xj').should('not.exist')
        cy.get('.css-1dnniyh > .MuiTypography-root').should('contain.text', 'Cancel')
        cy.get('.css-17opruk').eq(0).type('123hmtest4')
        cy.get('.css-z7g8xj').click()
        cy.wait(10000)
        //Find the adding Report in the list
        cy.get('.MuiButton-endIcon>[data-testid="ArrowDropDownIcon"]>path').click()
        cy.get('[value="Build Your Own Report"]').click()
        cy.contains('123hmtest4')
        cy.wait(10000)
        cy.get(':nth-child(1) > .css-e7pkoy > .css-17wzzwz > .MuiCheckbox-root > .PrivateSwitchBase-input').check()
        cy.get('[aria-label="Delete"] > .MuiButtonBase-root').click()
        //Delete Report
        cy.get('.css-1cthddb.MuiDialogTitle-root').should('contain.text', 'Delete Report')
        cy.get('.MuiDialogContent-root > .MuiTypography-root').should('contain.text', 'Are you sure you want to delete this report?')
        cy.get('.css-1dnniyh > .MuiTypography-root').should('contain.text', 'Cancel')
        cy.get('.css-1q77095 > .MuiTypography-root').should('contain.text', 'Delete Report').click()
        cy.get('body').should('not.contain', '123hmtest4')
        // Log out
        cy.get('.MuiAvatar-root').click()
        cy.get('.MuiButton-sizeLarge').click()
        cy.get('[title="Username"] > .MuiInput-input').should('contain.text','')
        cy.get('[title="Password"] > .MuiInput-input').should('contain.text','')
        // Log out

        //cy.get('[title="Username"] > .MuiInput-input').should('contain.text', '')
        //cy.get('[title="Password"] > .MuiInput-input').should('contain.text', '')

    })
    })