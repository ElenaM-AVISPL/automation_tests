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
        cy.get('.css-1aqcxf > .MuiToggleButton-root.Mui-selected').should('have.css','background-color', 'rgb(255, 255, 255)')
        cy.get('.css-1aqcxf > .MuiToggleButton-root.Mui-selected').should('contain.text', 'Device')
        cy.get('.css-sl0nme > .MuiOutlinedInput-root').should('contain.text','Device Name')

        //Search One Concrete Device
        cy.get('input').eq(1).type('Cisco c20')
        cy.get('.css-1oldft0 > .MuiTypography-root').click()
        cy.get('.css-14ct5id').should('contain.text', '1 Device')
        cy.get('.MuiButton-root').eq(14).should('contain.text', 'Cisco C20')

        //Search Multiple Devices
        cy.get('.css-1x8cww1').click()
        cy.get('.css-1aqcxf > .MuiToggleButton-root.Mui-selected').should('have.css','background-color', 'rgb(255, 255, 255)')
        cy.get('.css-1aqcxf > .MuiToggleButton-root.Mui-selected').should('contain.text', 'Device')
        cy.get('.css-sl0nme > .MuiOutlinedInput-root').should('contain.text','Device Name')
        cy.get('input').eq(1).type('Cisco')
        cy.get('.css-1oldft0 > .MuiTypography-root').click()
        cy.wait(3000)
        cy.get('.css-14ct5id').invoke('text').then(text => {
            const firstDigit = parseInt(text.trim()[0]);
            expect(firstDigit).to.be.above(0);
        })

        //Search by Location from basic Search
        cy.get('.MuiGrid-root .MuiGrid-item > a > img').click()
        cy.get('.css-36fdah > .MuiGrid-container > .MuiGrid-root').click()
        cy.get('[value="Device"]').click()
        cy.get('.css-1aqcxf > .MuiToggleButton-root.Mui-selected').should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get('.css-1aqcxf > .MuiToggleButton-root.Mui-selected').should('contain.text', 'Device')
        cy.get('.MuiSelect-select').click()
        cy.contains('Room Name').click()
        cy.get('input').eq(1).type('Adapter Room')
        cy.get('.css-1oldft0 > .MuiTypography-root').click()
        cy.wait(3000)
        cy.get('.css-14ct5id').invoke('text').then(text => {
            const firstDigit = parseInt(text.trim()[0]);
            expect(firstDigit).to.be.above(0);
        })

            //Advances Search for a specific Device
        cy.get('.MuiGrid-root .MuiGrid-item > a > img').click()
        cy.get('.css-36fdah > .MuiGrid-container > .MuiGrid-root').click()
        cy.get('.MuiGrid-root > :nth-child(2) > .MuiButton-root > .MuiTypography-root').click()
        cy.get('input').eq(2).type('Cisco C40')
        cy.get('input').eq(3).type('Toronto John A MacDonald')
        cy.get('input').eq(5).type('Toronto')
        cy.get(':nth-child(5) > .MuiOutlinedInput-root > .MuiSelect-select').click()
        cy.get('[data-value="Canada"]').click()
        cy.get('input').eq(8).type('FTT1825000I')
        cy.get('input').eq(9).type('E4:C7:22:67:A0:3A')
        cy.get('input').eq(11).type('callserver-us1.vc.joinme.video')
        cy.get(':nth-child(15) > .MuiOutlinedInput-root > .MuiSelect-select').click()
        cy.get('[data-value="Codecs"]').click()
        cy.get(':nth-child(16) > .MuiOutlinedInput-root > .MuiSelect-select').click()
        cy.get('[data-value="Single Codecs"]').click()
        cy.get('input').eq(18).type('Cisco')
        cy.get('input').eq(19).type('C40')
        cy.get('.css-z7g8xj').click()
        cy.get('.css-14ct5id').should('contain.text', '1 Device')
        cy.get('.MuiButton-root').eq(15).should('contain.text', 'Cisco C40')
    })


})