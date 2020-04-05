import { checkForName } from "../nameChecker";

describe("Input Name Check Warning", () => {

    test("it returns warning for valid names", () => {
        global.alert = jest.fn();

        const validNames = [
            "Picard",
            "Janeway",
            "Kirk",
            "Archer",
            "Georgiou"
        ];

        validNames.forEach(name => {
            expect(checkForName(name)).toBe(global.alert("Welcome, Captain!"));

        });
    });
});