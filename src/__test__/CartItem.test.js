import { render, screen } from "@testing-library/react";
import storeCart from "../store/stores/CartStore";
import CartComponent from "../Components/CartComponent";
import storeVisible from "../store/stores/CartVisibleStore";
import CartItem from "../Components/CartItem";

describe("Cart Item", () =>{

    //adding item into cart
    storeCart.addItemToCart({
        id: 1,
            name: "item1",
            price: 10,
            image: "image.png"
    })

    it("item name", async() => {

        render(<CartItem key={storeCart.items[0].id}
            item={storeCart.items[0]}
            onAdd={storeCart.addItemToCart}
            onRemove={storeCart.removeItemToCart} />)

        await screen.findByText("item1");

        expect(screen.getByText("item1")).toBeInTheDocument();

    })
})