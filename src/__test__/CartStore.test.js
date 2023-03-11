import storeCart from "../store/stores/CartStore";

describe("Cart Store", () => {
    it("adding new item to cart", () => {
        storeCart.addItemToCart({
            id: 1,
            name: "item1",
            price: 10,
            image: "image.png"
        })

        expect(storeCart.items.length).toBe(1);
        expect(storeCart.totalAmount).toBe(10);
    })

    it("adding existing item to cart", () => {
        storeCart.addItemToCart({
            id: 1,
            name: "item1",
            price: 10,
            image: "image.png"
        })

        expect(storeCart.items.length).toBe(1);
        expect(storeCart.totalAmount).toBe(20);
    })

    it("reducing number of items from cart", () => {
        storeCart.removeItemToCart({
            id: 1,
            name: "item1",
            price: 10,
            image: "image.png"
        })

        expect(storeCart.items.length).toBe(1);
        expect(storeCart.totalAmount).toBe(10)
    })

    it("removing item from cart", () => {
        storeCart.removeItemToCart({
            id: 1,
            name: "item1",
            price: 10,
            image: "image.png"
        })

        expect(storeCart.items.length).toBe(0);
        expect(storeCart.totalAmount).toBe(0)
    })
})