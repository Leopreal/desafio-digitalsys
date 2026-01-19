const request = require("supertest");
const app = require("../../src/app");

describe("Assets API Integration Tests", () => {
  // rota post
  it("should register a new asset", async () => {
    const payload = {
      symbol: "BTC",
      amount: 0.5,
      price_paid: 25000,
    };
    const response = await request(app).post("/assets").send(payload);

    expect(response.status).toBe(201);

    // rota get
    const listAssetsResponse = await request(app).get("/assets").expect(200);
    expect(listAssetsResponse.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          symbol: "BTC",
          amount: 0.5,
          price_paid: 25000,
        }),
      ]),
    );
  });
});
