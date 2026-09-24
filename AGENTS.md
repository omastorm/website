# Working in this repository

## Scope

This repository contains the Omastorm website. Public files live in `site/`; repository tooling stays outside it. Preserve the static site unless the task calls for an architectural change.

Keep product claims and installation instructions accurate for the released application. Do not redirect working product links to private or unfinished repositories.

## Commands

- Install tools: `mise install`
- Install dependencies: `mise run setup`
- Preview: `mise run dev`
- Format: `mise run format`
- Verify: `mise run check`

Use mise tasks for repeatable commands. Pin dependency versions and update the lockfile with dependency changes.

## Changes

Use Conventional Commits for every commit and PR title; see CONTRIBUTING.md for types and local checks. Write PR titles as readable release-note entries.

Keep the change focused on the request. Preserve unrelated work. Add dependencies only when existing tools cannot reasonably handle the task.

Write concise, human-facing documentation. Comments should explain necessary reasoning. Do not leave session notes, task breadcrumbs, chat references, or PR linkbacks in source or docs.

Use semantic HTML, accessible names, visible keyboard focus, and reduced-motion preferences for new animation. Keep attribution intact.

## Verification

Run `mise run check` before handing off a change. For visual or interaction changes, check narrow and wide screens, light and dark themes, keyboard navigation, and affected controls in a browser.

Report what changed, what was verified, and any remaining limitation. Deployments require an explicit request.
