import { Vehicle } from "./Vehicle";

describe("Vehicle", () => {
    it("should return correct toString", () => {
        const vehicle = new Vehicle();
        vehicle.id = "id-1";
        vehicle.vin = "vin";

        expect(vehicle.toString()).toBe(`id: id-1 | vin: vin`)
    });
})