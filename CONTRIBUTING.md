# Contributing

Outside pull requests are currently closed. Issues are available for maintainer planning.

## Before implementation

When contributions open, start with a bug report or feature request. Wes must approve the scope and approach and apply the `approved` label before implementation begins. Link that issue in the pull request.

Keep each pull request focused on one agreed change. Discuss architecture changes and new dependencies before introducing them.

## Development

Follow the setup in [README.md](README.md). Run:

```sh
mise run format
mise run check
```

For visual changes, include narrow and wide screenshots and check both color schemes. For interaction changes, verify keyboard use and the affected controls.

Write for readers. Keep docs concise and comments limited to necessary reasoning. Leave implementation history in Git.

AI-assisted contributions have the same requirements: understand every change, verify it, and be able to explain the approach.

## Review

Describe the user-visible result, link the approved issue, and report the checks you ran. Wes reviews changes before merging. Pull requests are squash merged.

## Recognition

We use All Contributors. Maintainers update `.all-contributorsrc` and run `mise run contributors` to regenerate [CONTRIBUTORS.md](CONTRIBUTORS.md). Include documentation, design, testing, and other contributions alongside code.
