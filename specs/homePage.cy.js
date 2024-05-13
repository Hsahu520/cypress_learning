// import homePage from '../pages/homePage'

// describe('Home Page', () => {
//   beforeEach(() => {
//     homePage.goto()
//   })

//   it('should find an older post by loading more', () => {
//     const postTitle = 'Cypress.io Review'
//     homePage.findPostByLoadingMore(postTitle)

//     homePage.postTitleExists(postTitle).should('be.visible')
//   })

//   it('should display 7 posts per page', async () => {
//     homePage.posts().should('have.length', 7)
//   })
// })

describe('Cypress write/read file exercise', () => {
  it('write file', () => {
    cy.writeFile('writeFile/example.txt', 'Cypress is awesome!');
    cy.writeFile('writeFile/example.txt', ' Make e2e test great again!', {flag:'a+'});
    //This Cypress command appends ' Make e2e test great again!' to the existing 'example.txt' file, thanks to the {flag:'a+'}

  });

  it('read file', () => {
    cy.readFile('writeFile/example.txt').should('contain', 'Cypress')
  });
});
