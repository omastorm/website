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

See [the release guide](docs/releases.md) for publishing, Cloudflare setup, and rollbacks.

## Contributing

Outside pull requests are currently closed. See [CONTRIBUTING.md](CONTRIBUTING.md) for the review process.

## Contributors

Thanks to our contributors. [Contribution types](https://allcontributors.org/docs/en/emoji-key).

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://omastorm.com/"><img src="https://avatars.githubusercontent.com/u/324308?v=4?s=100" width="100px;" alt="Wesley Grimes"/><br /><sub><b>Wesley Grimes</b></sub></a><br /><a href="https://github.com/omastorm/website/commits?author=wesleygrimes" title="Code">💻</a> <a href="https://github.com/omastorm/website/commits?author=wesleygrimes" title="Documentation">📖</a> <a href="#maintenance-wesleygrimes" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/fearjet44"><img src="https://avatars.githubusercontent.com/u/314382095?v=4?s=100" width="100px;" alt="Justin Hagemeier"/><br /><sub><b>Justin Hagemeier</b></sub></a><br /><a href="https://github.com/omastorm/website/commits?author=fearjet44" title="Code">💻</a> <a href="https://github.com/omastorm/website/commits?author=fearjet44" title="Documentation">📖</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

Copyright © 2026 Wesley Grimes. All rights reserved. Reuse requires prior written permission; contact [info@omastorm.com](mailto:info@omastorm.com). See [LICENSE](LICENSE) and [retained notices](NOTICE).

Keep the data and map attribution intact.
