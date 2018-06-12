import { gitBranchToNpmTag } from "../src";
import * as assert from "assert";

describe("git branch to npm tag", () => {

    it("prefixes it with branch-", () => {
        const input = "hello-branch";
        const result = gitBranchToNpmTag(input)
        assert.equal(result, "branch-" + input)
    })

    it("replaces slash with colon", () => {
        const input = "hello/branch";
        const result = gitBranchToNpmTag(input);
        assert(!result.includes("/"));
    })
})
