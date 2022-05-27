import { v4 as uuidv4 } from "uuid";
const baseURL = Cypress.env("api-url-heroku");
const myuuid = uuidv4();
let authorization = "";

describe("User Tests", function () {
  before(function () {
    cy.fixture("user").then((user) => {
      this.user = user;
    });
  });
  
  describe("POST", function () {
    it("Should Create a User with Valid Data", function () {
      cy.request({
        method: "POST",
        url: `${baseURL}/user/register`,
        body: {
          name: this.user.name,
          email: `${myuuid}@build.com`,
          password: this.user.password,
          age: this.user.age,
        },
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.user.email).to.include(myuuid);
        authorization = `Bearer ${response.body.token}`;
      });
    });
  });

  describe("GET", function () {
    it("Should Retreive a User", function () {
      cy.request({
        method: "GET",
        url: `${baseURL}/user/me`,
        headers: {
          authorization,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.include(this.user.name);
        expect(response.body.email).to.include(myuuid);
        expect(response.body.age).to.equals(this.user.age);
        expect(response.body.id).to.not.be.null;
      });
    });
  });

  describe("PUT", function () {
    it("Should update user age", function () {
      cy.request({
        method: "PUT",
        url: `${baseURL}/user/me`,
        headers: {
          authorization,
        },
        body: {
          age: 35,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data.age).to.eq(35);
        this.user.age = 35;
      });
    });
  });

  describe("DELETE", function () {
    it("Should Delete the user", function () {
      cy.request({
        method: "DELETE",
        url: `${baseURL}/user/me`,
        headers: {
          authorization,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.include(this.user.name);
        expect(response.body.email).to.include(myuuid);
        expect(response.body.age).to.equals(this.user.age);
      });
    });
  });
});
