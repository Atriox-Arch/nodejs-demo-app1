const test = require("node:test");
const assert = require("node:assert");
const { message } = require("./app");

test("Application message is correct", () => {
    assert.strictEqual(
        message,
        "Hello from my DevOps CI/CD Pipeline!"
    );
});