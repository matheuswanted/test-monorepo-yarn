import { Vehicle } from "@test-monorepo/models";

export class App {
    public run(): Promise<void> {
        console.log("hello world");
        const v = new Vehicle();
        v.vin = "vehicle vin";

        console.log(`vin: ${v.vin}`);
        return Promise.resolve();
    }
}
