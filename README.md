# git-branch-to-npm-tag

translate a valid git branch into a valid npm tag

## Why

We have libraries, and we make branches on them, and then we want to use them to test downstream programs. Publishing to npm makes these branch-versions accessible to downstream installation.

By default, `npm publish` will also update the `latest` tag, which changes the default version people get when they install your library. I don't want them to get a branch-version! I want them to get the most recent versioned release.

So, for these branch versions, we'll do `npm publish --tag ${branchName}` ... except that not all valid git branch names are valid NPM tags. In particular, forward-slash is common in git branch names (I name my branches jessitron/whatever so people know they're mine). npm tags do not want a forward slash.

This also prefixes the branch name with "branch:" so that they'll group together.

I recommend deleting the branch tags when you delete the branch. `npm dist-tag rm <package> <tag>`
