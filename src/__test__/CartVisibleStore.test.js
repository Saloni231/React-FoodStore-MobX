import storeVisible from "../store/stores/CartVisibleStore";

describe("Cart Visible Store", () => {
    it("testing initial value", () => {
        expect(storeVisible.isVisible).toBe(false);
    })

    it("toggle is visible", () => {
        storeVisible.toggleCart();
        expect(storeVisible.isVisible).toBe(true);
    })
})