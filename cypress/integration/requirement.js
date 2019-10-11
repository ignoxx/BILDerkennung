describe('Test the requirements', function () {
    it('text "Twitter" should be NOT', function () {
        cy.visit('')

        var input = "Twitter"
        var expected = "NOT"

        cy.get('#articleText').type(input)

        cy.get('#submitBtn').click()

        cy.get('#resultText').should('be', expected);
    })

    it('text "Unbekannte" should be BILD', function () {
        cy.visit('')

        var input = "Unbekannte"
        var expected = "BILD"

        cy.get('#articleText').type(input)

        cy.get('#submitBtn').click()

        cy.get('#resultText').should('be', expected);
    })
})