# Omastorm website

The website at [omastorm.com](https://omastorm.com). Plain HTML, CSS, and JavaScript in `site/`, served directly without a build step.

## Local development

Install [mise](https://mise.jdx.dev/getting-started.html), then run:

```sh
mise trust
mise install
mise run setup
mise run dev
```

Open http://127.0.0.1:8765.

| Task                    | Purpose                                            |
| ----------------------- | -------------------------------------------------- |
| `mise run dev`          | Preview the site locally                           |
| `mise run format`       | Format source and configuration                    |
| `mise run check`        | Check formatting, HTML, workflows, and local links |
| `mise run contributors` | Update the contributor list                        |

Node, actionlint, and ShellCheck are pinned in `mise.toml`. Development dependencies are pinned in `package.json` and `package-lock.json`. CI runs `mise run check`.

## Site files

- `site/index.html`: page content, styles, and interactions.
- `site/media/`: screenshots and demo posters.
- `site/mark*`: icons.
- `site/_headers`, `robots.txt`, and `sitemap.xml`: hosting and search metadata.

The site describes the released Omarchy plugin. Installation and support links point to its public repository. Update those links when the replacement application is available.

## Releases and deployment

Merge small changes into `main` through pull requests. Publishing a GitHub release deploys its tagged commit to the existing Cloudflare Pages project `omastorm`.

1. Wait for `Website checks` to pass on `main`.
2. Create a release with a new tag, such as `v0.1.0`, targeting the commit you want to ship on `main`.
3. Review the release notes and publish the release.
4. Check the `Deploy` workflow for the result.

The workflow verifies that the commit belongs to `main`, runs `mise run check`, and uploads only `site/` to the Pages production branch `main`. New commits on `main` do not change the release being deployed. Drafts, prereleases, and tag pushes alone do not deploy.

### Cloudflare setup

Add these repository Actions secrets:

- `CLOUDFLARE_ACCOUNT_ID`: the account hosting the Pages project.
- `CLOUDFLARE_API_TOKEN`: a token with **Account → Cloudflare Pages → Edit**, scoped to that account.

The Pages project's production branch must be `main`. Keep automatic Git deployments disabled if Git integration is enabled; GitHub releases control production deployment.

If deployment fails, fix the reported configuration problem and rerun the failed workflow. To roll back immediately, use the Pages deployment history; then revert the change on `main` and publish a new release.

## Contributing

Outside pull requests are currently closed. See [CONTRIBUTING.md](CONTRIBUTING.md) for the review process and [CONTRIBUTORS.md](CONTRIBUTORS.md) for credits.

## License

[MIT](LICENSE). Keep the data and map attribution on the website when updating screenshots or content.
