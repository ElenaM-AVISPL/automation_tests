describe('Build you own Report', () => {
    beforeEach(() => {
        cy.visit('https://chi-qa-ui.vnocsymphony.com/')
    })

    it('Create/Delete Reports', () => {
        cy.fixture('users').then((user) => {

            // Email from fixture
            cy.get('[title="Username"] > .MuiInput-input').type(user.email);
            // Password from fixture
            cy.get('[title="Password"] > .MuiInput-input').type(user.correct_password);

        })
        cy.get('.css-1xshq1t').click()
        //Open Report -> Dropdown
        cy.get('.css-czc5e9 > :nth-child(1) > .MuiGrid-item > .MuiButtonBase-root').click()
        cy.get('[href="/bi/reports"] > .MuiGrid-root > .MuiTypography-root').click()
        cy.get('.MuiButton-endIcon>[data-testid="ArrowDropDownIcon"]>path').click()
        cy.get('[value="Build Your Own Report"]').click()
        //Checking the fields and Adding the New Report
        cy.get('.MuiPaper-root > .MuiGrid-root > .MuiButton-root > .MuiTypography-root').should('contain.text','Add new report')
        cy.get('[data-testid="AddIcon"').should('contain.text','')
        cy.get('.MuiPaper-root > .MuiGrid-root > .MuiButton-root').click()
        cy.get('.MuiPaper-root > .MuiGrid-root > .MuiTypography-body1').should('contain.text','New report')
        cy.get('.css-17opruk').eq(0).should('contain.text','')
        cy.get('.css-17opruk').eq(1).should('contain.text','')
        cy.get('.css-z7g8xj').should('not.exist')
        cy.get('.css-1dnniyh > .MuiTypography-root').should('contain.text','Cancel')
        cy.get('.css-17opruk').eq(0).type('123hmtest4')
        cy.get('.css-z7g8xj').click()
        cy.wait(10000)
        //Find the adding Report
        cy.get('.MuiButton-endIcon>[data-testid="ArrowDropDownIcon"]>path').click()
        cy.get('[value="Build Your Own Report"]').click()
        cy.get('.css-1q2ebru > .css-1hmyjv6').eq(0).should('contain.text','123hmtest4')
        cy.wait(10000)
        cy.get(':nth-child(1) > .css-e7pkoy > .css-17wzzwz > .MuiCheckbox-root > .PrivateSwitchBase-input').check()
        cy.get('[aria-label="Delete"] > .MuiButtonBase-root').click()
        //Delete Report
        cy.get('.css-1cthddb.MuiDialogTitle-root').should('contain.text','Delete Report')
        cy.get('.MuiDialogContent-root > .MuiTypography-root').should('contain.text','Are you sure you want to delete this report?')
        cy.get('.css-1dnniyh > .MuiTypography-root').should('contain.text','Cancel')
        cy.get('.css-1q77095 > .MuiTypography-root').should('contain.text','Delete Report').click()
    })
})