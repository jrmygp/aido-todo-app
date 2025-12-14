const request = require("supertest");
const app = require("../app");

describe("Todo API", () => {
  describe("POST /todos", () => {
    it("should create a todo successfully", async () => {
      const response = await request(app).post("/todos").send({
        title: "Belajar interview",
        status: "pending",
      });

      expect(response.statusCode).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveProperty("id");
      expect(response.body.data.title).toBe("Belajar interview");
      expect(response.body.data.status).toBe("pending");
    });

    it("should fail if title is empty", async () => {
      const response = await request(app).post("/todos").send({
        status: "pending",
      });

      expect(response.statusCode).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe("Title can't is required");
    });

    it("should fail if status is invalid", async () => {
      const response = await request(app).post("/todos").send({
        title: "Belajar interview",
        status: "invalid",
      });

      expect(response.statusCode).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe("Status must be pending or done");
    });
  });
});
