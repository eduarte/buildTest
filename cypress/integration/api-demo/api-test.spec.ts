import { v4 as uuidv4 } from "uuid";
const baseURL = Cypress.env("api-url");
const myuuid = uuidv4();
let authorization = "";

describe("API Tests", function () {
  before(function () {});

  describe("Create User", function () {
    it("Should Create a User with Valid Data", function () {
      cy.fixture("apiUsers")
        .its("users")
        .then((userList) => {
          userList.forEach((user) => {
            cy.request({
              method: "POST",
              url: `${baseURL}api/users`,
              body: user,
            }).then((response) => {
              expect(response.status).to.eq(201);
              expect(response.body.id).to.eq(user.id);
              expect(response.body.firstName).to.include(user.firstName);
              expect(response.body.lastName).to.include(user.lastName);
              expect(response.body.gender).to.include(user.gender);
              expect(response.body.DOB).to.include(user.DOB);
            });
          });
        });

      
    });
  });

  describe("Updating a User", function () {
    it("Should update user DOB", function () {
      cy.request({
        method: "PUT",
        url: `${baseURL}api/users/1`,
        body: {
          last_name: "Bush",
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.last_name).to.include("Bush");
      });
    });
  });
 
});
