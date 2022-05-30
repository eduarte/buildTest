import { v4 as uuidv4 } from "uuid";
const baseURL = Cypress.env("api-url-todo");
const myuuid = uuidv4();
let todo_id = "";

describe("Testing TODO APP", function () {
  
  describe("POST", function () {
    it("Should Create a Todo task", function () {
      cy.request({
        method: "POST",
        url: `${baseURL}/add-todo`,
        body: {
          name: `test-${myuuid}`,
          description: `description-${myuuid}`,
          status: true
        },
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.message).to.contain('Todo added');
        expect(response.body.todo.name).to.include(`test-${myuuid}`);
        expect(response.body.todo.description).to.include(`description-${myuuid}`);
        expect(response.body.todo.status).to.be.true;
        todo_id = response.body.todo._id;
      });
    });
  });

  describe("GET", function () {
    it("Should Get TODOS", function () {
      cy.request({
        method: "GET",
        url: `${baseURL}/todos`
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.todos.length).to.be.greaterThan(0);
      });
    });
  });

  describe("PUT", function () {
    it("Should Update the TODO Task", function () {
      cy.request({
        method: "PUT",
        url: `${baseURL}/edit-todo/${todo_id}`,
        body: {
          status: false,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.contain('Todo updated');
        const todos = response.body.todos;
        todos.filter((obj) => {
          if(obj._id === todo_id){
            expect(obj.status).to.be.false;
          }
        });
      });
    });
  });

  describe("DELETE", function () {
    it("Should Delete the TODO Task", function () {
      cy.request({
        method: "DELETE",
        url: `${baseURL}/delete-todo/${todo_id}`,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.contain('Todo deleted');
        const todos = response.body.todos;
        const result = todos.some((obj) => {
          return obj._id === todo_id;
        });
        expect(result).to.be.false;
      });
    });
  });
});
