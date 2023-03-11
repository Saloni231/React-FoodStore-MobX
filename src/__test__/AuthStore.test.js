import storeAuth from "../store/stores/AuthStore";

describe("Auth Store", () => {
  it("setting a token", () => {
    storeAuth.setToken("saloni@gmail.com");

    expect(storeAuth.token).toMatch("saloni@gmail.com");
  });

  it("get token duration", () => {
    const duartion = storeAuth.getTokenDuration();
    expect(duartion).toBeGreaterThan(0);
  });

  it("get token", () => {
    const token = storeAuth.getAuthToken();
    expect(token).toMatch("saloni@gmail.com");
  });

  it("log out", () => {
    storeAuth.logOut();

    expect(storeAuth.token).toBe(null);
    expect(storeAuth.tokenDuration).toBe(null);
  });

  it("getting token after log out", () => {
    const token = storeAuth.getAuthToken();
    expect(token).toBe(null);
  });
});
