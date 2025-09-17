describe("XPathLocators", () => {

    it('find no. of products', () => {
        
        cy.visit("http://www.automationpractice.pl/index.php")
        
        cy.xpath("//a[text()='Women']").click()
        
        cy.xpath("//ul[@class='product_list grid row']/li").should('have.length', 7)
    })
})