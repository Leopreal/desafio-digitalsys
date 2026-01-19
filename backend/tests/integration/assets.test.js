const request = require("supertest");
const app = require("../../src/app");
const { clearAssets } = require("../../src/store/assetsStore");

describe("Assets API Integration Tests", () => {
  beforeEach(() => {
    clearAssets();
  });
  // teste para vazio
  it("returns an empty list when no assets exist", async () => {
    const response = await request(app).get("/assets");

    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });
  // rota post
  it("should register a new asset", async () => {
    const payload = {
      symbol: "BTC",
      amount: 0.5,
      price_paid: 25000,
    };

    const response = await request(app).post("/assets").send(payload);

    expect(response.status).toBe(201);
  });

  it("lists all registered assets", async () => {
    await request(app).post("/assets").send({
      symbol: "BTC",
      amount: 0.5,
      price_paid: 25000,
    });
    // rota get
    const response = await request(app).get("/assets");

    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      {
        symbol: "BTC",
        amount: 0.5,
        price_paid: 25000,
      },
    ]);
  });
});
