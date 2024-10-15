const newUser = require("../fixtures/newUser.json");
const ubdateUser = require("../fixtures/ubdateUser.json");


describe('API-test user ', () => {

  it("creating a user", () => {
    cy.request("POST", "/", newUser).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.message).to.eql(newUser.id)
     });
  });

  it("get a user by username", () => {
    cy.request("GET", "/Petr98").then((response) => {
      expect(response.status).to.equal(200);
    });
  })
  
   it("update a user's name", () => {
     cy.request("GET", "/login?username=Petr98&password=1111",
     ).then((response) => {
       expect(response.status).to.equal(200);
       cy.request("PUT", "/Petr98", ubdateUser).then((response) => {
         expect(response.status).to.equal(200);
       });
      cy.request("GET", "/Petr908").then((response) => {
         expect(response.status).to.equal(200);
      });
     });
   });

   it("delete a user", () => {
     cy.request("DELETE", "/Petr908").then((response) => {
       expect(response.status).to.equal(200);
     });
     cy.request({ method: "GET", url: "/Petr908", failOnStatusCode: false }).then(
       (response) => {
         expect(response.status).to.equal(404);
       });
    });

})

