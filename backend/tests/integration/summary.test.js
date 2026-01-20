const request = require("supertest");
const app = require("../../src/app");

describe("Summary API Integration Tests", () => {
  it("should return the summary of assets", async () => {
    await request(app).post("/assets").send({
      symbol: "ETH",
      amount: 2,
      price_paid: 1500,
    });

    await request(app).post("/assets").send({
      symbol: "BTC",
      amount: 0.1,
      price_paid: 3000,
    });
    const response = await request(app).get("/summary");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      total_invested: 4500,
      total_assets: 2,
      assets: [
        { symbol: "ETH", amount: 2, price_paid: 1500 },
        { symbol: "BTC", amount: 0.1, price_paid: 3000 },
      ],
    });

  });
});
