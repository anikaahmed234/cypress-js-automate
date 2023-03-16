describe('Adding to the cart', () => {
  it('addingProduct', () => {

    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('nav').trigger('mouseover')

    cy.get('#ui-id-4')
      .contains('Women')
      .then(($li) => {
        cy.wrap($li).trigger('mouseover')
      });

    cy.get('#ui-id-9')
      .contains('Tops')
      .then(($li) => {
        cy.wrap($li).trigger('mouseover')
      });

    cy.get('#ui-id-11')
      .contains('Jackets')
      .then(($li) => {
        cy.wrap($li).click()
      });

    cy.wait(1000)

//    cy.get('#sorter')
//      .should('contain', '')
//      .find('option:selected')
//      .should('contain', 'Price ')
//      .click()

     cy.scrollTo(0, 500)
     cy.get('img[alt="Neve Studio Dance Jacket"]').click();

     cy.wait(3000)

     cy.get('#option-label-size-143-item-169').click()
     cy.get('#option-label-color-93-item-50').click()
     cy.get('#qty').clear().type(3)
     cy.contains('Add to Cart').click()
     cy.wait(3000)
     cy.contains('My Cart').click()

     cy.wait(3000)
     cy.get('.product-item-details > .actions > .primary').click()
     cy.wait(6000)
     cy.get('#option-label-size-143-item-168').click()
     cy.get('#option-label-color-93-item-49').click()
     cy.get('#qty').clear().type(6)
     cy.get('#product-updatecart-button > span').click()
     cy.wait(3000)
     cy.scrollTo(0, 400)
     cy.get('#block-discount-heading').click()
     cy.get('#coupon_code').type('456gf')
     cy.get('.action.apply.primary').click()
     cy.wait(3000)
     cy.get('.methods > :nth-child(1) > .action').click()
     cy.wait(3000)
     cy.contains('Item in Cart').click()
     cy.contains('View Details').click()
     cy.contains('Next').scrollIntoView()

  })
})