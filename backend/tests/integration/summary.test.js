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
      total_invested: 3300,
      total_assets: 2,
      total_current_value: 7500,
      assets: [
        {
          symbol: "ETH",
          amount: 2,
          price_paid: 1500,
          current_price: 2000,
          current_value: 4000,
        },
        {
          symbol: "BTC",
          amount: 0.1,
          price_paid: 3000,
          current_price: 35000,
          current_value: 3500,
        },
      ],
    });
  });
});
