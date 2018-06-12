export function gitBranchToNpmTag(branchName: string) {
    const safeName = branchName.replace(/\//g, "-");
    return "branch-" + safeName;
}
