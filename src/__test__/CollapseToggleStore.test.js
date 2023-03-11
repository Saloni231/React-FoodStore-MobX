import storeCollapse from "../store/stores/CollapseToggle";

describe("Collapse Toggle Store", () => {
    it("toggling value on path change", () => {
        storeCollapse.pathChangeHandler(false);

        expect(storeCollapse.toggle).toBe(false);
    })

    it("toggling value on button click", () => {
        storeCollapse.toggleHandler();

        expect(storeCollapse.toggle).toBe(true);
    })
})