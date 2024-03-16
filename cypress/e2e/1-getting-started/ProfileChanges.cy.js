describe('Login page', () => {
    beforeEach(() => {
        cy.visit('/')
    })
//Changing Password from Password Tab
    it('Correct log in', () => {
        cy.fixture('users').then((user) => {

            // Email from fixture
            cy.get('[title="Username"] > .MuiInput-input').type(user.email);
            // Password from fixture
            cy.get('[title="Password"] > .MuiInput-input').type(user.correct_password);

        })
        cy.get('.css-1xshq1t').click()
        //The main page should be visible
        cy.get('.css-czc5e9 > :nth-child(1)').should('be.visible')
        cy.get('.MuiAvatar-root').click()
        //Choose Profile tab
        cy.get('.MuiTabs-flexContainer > :nth-child(3) > .MuiButtonBase-root > .MuiTypography-root').click()
        cy.get(':nth-child(1) > .css-15mij0t').should('be.visible')
        cy.get('#mui-32-label').should('contain.text','First Name')
        cy.get('[type="text"]').eq(1).should('contain.value','auto test')
        cy.get('#mui-33-label').should('contain.text','Last Name')
        cy.get('[type="text"]').eq(2).should('contain.value','auto test')
        cy.get(':nth-child(2) > .css-15mij0t').should('contain.text','Contact information')
        cy.get('#mui-34-label').should('contain.text','Email')
        cy.get('[type="text"]').eq(3).should('contain.value','testautocy@gmail.com')
        cy.get('#mui-35-label').should('contain.text','Phone')
        cy.get('[type="text"]').eq(4).type('123123')
        cy.get('#mui-36-label').should('contain.text','Mobile')
        cy.get('[type="text"]').eq(5).type('12Qwsxzaq@')
        cy.get('#mui-37-label').should('contain.text','Address 1')
        cy.get('[type="text"]').eq(6).type('123123')
        cy.get('#mui-38-label').should('contain.text','Address 2')
        cy.get('[type="text"]').eq(7).type('12Qwsxzaq@')
        cy.get('#mui-39-label').should('contain.text','City')
        cy.get('[type="text"]').eq(8).type('123123')
        cy.get('#mui-40-label').should('contain.text','State')
        cy.get('[type="text"]').eq(9).type('12Qwsxzaq@')
        cy.get('#mui-41-label').should('contain.text','Zip')
        cy.get('[type="text"]').eq(10).type('123123')
        cy.get(':nth-child(2) > .css-1gfbk2v > .MuiInput-root > .MuiSelect-select').click()
        cy.get('[data-value="United Kingdom"]').click()
        cy.get(':nth-child(3) > .css-15mij0t').should('contain.text','Preferences')
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInput-root > .MuiSelect-select').click()
        cy.contains('(UTC-07:00) Arizona').click()
        cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInput-root > .MuiSelect-select').click()
        cy.get(':nth-child(4) > .css-15mij0t').should('contain.text','Preferred Language')
        cy.contains('French').click()
        cy.get('#mui-42-label').should('contain.text','Title')
        cy.get('[type="text"]').eq(11).type('text')
        cy.get('#mui-43-label').should('contain.text','Department')
        cy.get('[type="text"]').eq(12).type('state department')
        cy.get('#mui-44-label').should('contain.text','Supervisor')
        cy.get('[type="text"]').eq(13).type('Supervisor')
        cy.get('#mui-45-label').should('contain.text','Notes')
        cy.get('[type="text"]').eq(14).type('for notes')
        cy.get('#mui-46-label').should('contain.text','Billing code')
        cy.get('[type="text"]').eq(15).type('code 432')
        //Click Cancel
        cy.get('.css-1yr8k4a > .MuiTypography-root').click()

        //Open Again and check that the changes are not saved
        cy.get('.MuiAvatar-root').click()
        //Choose Profile tab
        cy.get('.MuiTabs-flexContainer > :nth-child(3) > .MuiButtonBase-root > .MuiTypography-root').click()
        cy.get(':nth-child(1) > .css-15mij0t').should('be.visible')
        cy.get('[type="text"]').eq(1).should('contain.value','auto test')
        cy.get('[type="text"]').eq(2).should('contain.value','auto test')
        cy.get('[type="text"]').eq(3).should('contain.value','testautocy@gmail.com')
        cy.get('[type="text"]').eq(4).should('have.value','')
        cy.get('[type="text"]').eq(5).should('have.value','')
        cy.get('[type="text"]').eq(6).should('have.value','')
        cy.get('[type="text"]').eq(7).should('have.value','')
        cy.get('[type="text"]').eq(8).should('have.value','')
        cy.get('[type="text"]').eq(9).should('have.value','')
        cy.get('[type="text"]').eq(10).should('have.value','')
        cy.get(':nth-child(2) > .css-1gfbk2v > .MuiInput-root > .MuiSelect-select').click()
        cy.get('[data-value="United States"]').click()
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInput-root > .MuiSelect-select').click({force:true})
        cy.contains('(UTC-05:00) Eastern Time (US & Canada)').click({force:true})
        cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInput-root > .MuiSelect-select').click({force:true})
        cy.contains('English (US)').click({force:true})
        cy.get('[type="text"]').eq(11).should('have.value','')
        cy.get('[type="text"]').eq(12).should('have.value','')
        cy.get('[type="text"]').eq(13).should('have.value','')
        cy.get('[type="text"]').eq(14).should('have.value','')
        cy.get('[type="text"]').eq(15).should('have.value','')
        //Click Cancel
        cy.get('.css-1yr8k4a > .MuiTypography-root').click({force:true})

        //Save changes
        cy.get('.MuiAvatar-root').click()
        //Choose Profile tab
        cy.get('.MuiTabs-flexContainer > :nth-child(3) > .MuiButtonBase-root > .MuiTypography-root').click()
        cy.get(':nth-child(1) > .css-15mij0t').should('be.visible')
        cy.get('[type="text"]').eq(1).should('contain.value','auto test')
        cy.get('[type="text"]').eq(2).should('contain.value','auto test')
        cy.get('[type="text"]').eq(3).should('contain.value','testautocy@gmail.com')
        cy.get('[type="text"]').eq(4).type('123123')
        cy.get('[type="text"]').eq(5).type('12Qwsxzaq@')
        cy.get('[type="text"]').eq(6).type('123123')
        cy.get('[type="text"]').eq(7).type('12Qwsxzaq@')
        cy.get('[type="text"]').eq(8).type('123123')
        cy.get('[type="text"]').eq(9).type('12Qwsxzaq@')
        cy.get('[type="text"]').eq(10).type('123123')
        cy.get(':nth-child(2) > .css-1gfbk2v > .MuiInput-root > .MuiSelect-select').click()
        cy.get('[data-value="United Kingdom"]').click()
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInput-root > .MuiSelect-select').click()
        cy.contains('(UTC-07:00) Arizona').click()
        cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInput-root > .MuiSelect-select').click()
        cy.contains('French').click()
        cy.get('[type="text"]').eq(11).type('text')
        cy.get('[type="text"]').eq(12).type('state department')
        cy.get('[type="text"]').eq(13).type('Supervisor')
        cy.get('[type="text"]').eq(14).type('for notes')
        cy.get('[type="text"]').eq(15).type('code 432')
        //Click Save
        cy.get('.css-z7g8xj').click()
        cy.wait(5000)
        //Success message
        cy.get('.css-1w1y9ry').should('contain.text','Success')
        cy.get('.css-qo8fdw').should('contain.text','The profile was successfully updated')
        cy.get('.MuiButton-sizeLarge').click()
        // Log out
        cy.get('.css-1oexzeo').should('be.visible')
        cy.get('[title="Username"] > .MuiInput-input').should('contain.text','')
        cy.get('[title="Password"] > .MuiInput-input').should('contain.text','')

        //Delete all the data
        cy.fixture('users').then((user) => {

            // Email from fixture
            cy.get('[title="Username"] > .MuiInput-input').type(user.email);
            // Password from fixture
            cy.get('[title="Password"] > .MuiInput-input').type(user.correct_password);

        })

        cy.get('.css-1xshq1t').click()
        cy.get('.MuiAvatar-root').click()
        cy.get('.MuiTabs-flexContainer > :nth-child(3) > .MuiButtonBase-root > .MuiTypography-root').click()
        cy.get(':nth-child(1) > .css-15mij0t').should('be.visible')
        cy.get('[type="text"]').eq(1).should('contain.value','auto test')
        cy.get('[type="text"]').eq(2).should('contain.value','auto test')
        cy.get('[type="text"]').eq(3).should('contain.value','testautocy@gmail.com')
        cy.get('[type="text"]').eq(4).clear('')
        cy.get('[type="text"]').eq(5).clear('')
        cy.get('[type="text"]').eq(6).clear('')
        cy.get('[type="text"]').eq(7).clear('')
        cy.get('[type="text"]').eq(8).clear('')
        cy.get('[type="text"]').eq(9).clear('')
        cy.get('[type="text"]').eq(10).clear('')
        cy.get(':nth-child(2) > .css-1gfbk2v > .MuiInput-root > .MuiSelect-select').click({force:true})
        cy.contains('United States').click({force:true})
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInput-root > .MuiSelect-select').click({force:true})
        cy.contains('(UTC-05:00) Eastern Time (US & Canada)').click({force:true})
        cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInput-root > .MuiSelect-select').click({force:true})
        cy.contains('English (US)').click({force:true})
        cy.get('[type="text"]').eq(11).clear('', {force:true})
        cy.get('[type="text"]').eq(12).clear('', {force:true})
        cy.get('[type="text"]').eq(13).clear('', {force:true})
        cy.get('[type="text"]').eq(14).clear('', {force:true})
        cy.get('[type="text"]').eq(15).clear('', {force:true})
        //Click Save
        cy.get('.css-z7g8xj').click()
        cy.wait(5000)
        cy.get('.css-1w1y9ry').should('contain.text','Success')
        cy.get('.css-qo8fdw').should('contain.text','The profile was successfully updated')
        cy.get('.MuiButton-sizeLarge').click()
        cy.get('.css-1oexzeo').should('be.visible')
        cy.get('[title="Username"] > .MuiInput-input').should('contain.text','')
        cy.get('[title="Password"] > .MuiInput-input').should('contain.text','')



    })



})