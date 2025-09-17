describe('CSSLocators', () =>{

    it('CSSLocators', () => {

        cy.visit("http://www.automationpractice.pl/index.php")

        cy.get(".search_query").type("T-Shirts")        //class locator

        cy.get("[name = 'submit_search']").click()

        cy.get(".lighter").contains("T-Shirts")         // Assertions
    })
})