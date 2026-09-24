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

## PR titles and commits

Every PR title and commit message must use Conventional Commits:

```text
feat: add a coverage map
fix: keep the install button visible on mobile
chore(deps): update development tools
feat!: replace the installation instructions
```

Use `feat`, `fix`, `perf`, `refactor`, `style`, `docs`, `test`, `build`, `ci`, `chore`, or `revert`. A scope is optional. Follow [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/). Our repository convention uses lowercase types and scopes, and descriptions that start lowercase; preserve names such as GitHub within the description. Use `!` in the PR title for breaking changes and explain the impact in the PR body.

Use `feat` for new website capabilities, `fix` for website bugs, and `ci` for workflow automation.

Write the description for readers: say what changes, in plain language. The PR title becomes the squash commit and release-note entry. Features bump the minor version, breaking changes bump the major, and other changes bump the patch. The conventional prefix is removed from release notes.

CI checks the PR title and every commit in the PR. Rebase and reword invalid commits before merging; do not add merge commits to the branch. Keep the checked PR title as the squash commit title.

To check locally:

```sh
PR_TITLE="feat: add a coverage map" mise run pr-title
COMMIT_FROM=origin/main COMMIT_TO=HEAD mise run commits
```

## Recognition

We use All Contributors. Maintainers update `.all-contributorsrc` and run `mise run contributors` to regenerate the [README contributor section](README.md#contributors). Include documentation, design, testing, and other contributions alongside code.
