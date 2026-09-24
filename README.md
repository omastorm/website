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

| Task                    | Purpose                                 |
| ----------------------- | --------------------------------------- |
| `mise run dev`          | Preview the site locally                |
| `mise run format`       | Format source and configuration         |
| `mise run check`        | Check formatting, HTML, and local links |
| `mise run contributors` | Update the contributor list             |

Node is pinned in `mise.toml`. Development dependencies are pinned in `package.json` and `package-lock.json`. CI runs `mise run check`.

## Site files

- `site/index.html`: page content, styles, and interactions.
- `site/media/`: screenshots and demo posters.
- `site/mark*`: icons.
- `site/_headers`, `robots.txt`, and `sitemap.xml`: hosting and search metadata.

The site describes the released Omarchy plugin. Installation and support links point to its public repository. Update those links when the replacement application is available.

Cloudflare Pages currently serves the site. Upload only `site/`. Deployment is managed separately from CI.

## Contributing

Outside pull requests are currently closed. See [CONTRIBUTING.md](CONTRIBUTING.md) for the review process and [CONTRIBUTORS.md](CONTRIBUTORS.md) for credits.

## License

[MIT](LICENSE). Keep the data and map attribution on the website when updating screenshots or content.
