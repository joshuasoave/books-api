const router = require("../controllers/books");
const request = require("supertest");
const app = require("../server");

const currentFiction = router.get("/currentFiction");

describe("GET /books/currentFiction", () => {
  it("should return all books", async () => {
    const res = await request(app).get("/books/currentFiction");
    console.log(res.body);
    expect(res.statusCode).toEqual(200);
    expect(res.body.results.books.length).toBeGreaterThan(0);
  });
});
