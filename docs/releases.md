# Releases and deployment

Merge small changes into `main` through pull requests. Release Drafter automatically prepares the next version, tag name, and release notes from merged PRs.

1. Wait for the checks and `Draft release` workflow to pass on `main`.
2. Open the draft under [Releases](https://github.com/omastorm/website/releases).
3. Review the version and notes, then click **Publish release**.
4. Check the `Deploy` workflow for the result.

Features bump the minor version, breaking changes bump the major, and other changes bump the patch. PR titles become short release-note entries with conventional prefixes removed. See [CONTRIBUTING.md](../CONTRIBUTING.md) for the required title and commit format.

The draft targets the commit used to generate its notes. Publishing creates the tag and deploys that commit. The deployment checks that it belongs to `main`, runs `mise run check`, and uploads only `site/` to the Pages production branch `main`. Drafts, prereleases, and tag pushes alone do not deploy.

## Cloudflare setup

In repository Settings → Environments → `production`, add these environment secrets:

- `CLOUDFLARE_ACCOUNT_ID`: the account hosting the Pages project.
- `CLOUDFLARE_API_TOKEN`: a token with **Account → Cloudflare Pages → Edit**, scoped to that account.

The Pages project's production branch must be `main`. Keep automatic Git deployments disabled if Git integration is enabled; GitHub releases control production deployment.

If deployment fails, fix the reported configuration problem and rerun the failed workflow. To roll back immediately, use the Pages deployment history; then revert the change on `main` and publish a new release.
