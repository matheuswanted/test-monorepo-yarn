import { App } from "./app";

describe("Index", () => {
    it("should run", async () => {
        await new App().run();
    });
});