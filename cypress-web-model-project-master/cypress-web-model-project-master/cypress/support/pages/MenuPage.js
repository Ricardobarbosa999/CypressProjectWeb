let menuPage = function() {    

    this.clickUser = () =>{
        cy.get('#users').click()
    }    
}

export default new menuPage()