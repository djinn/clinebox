# Cline Kanban — Cloudflare Deploy

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/cline/kanban)

One-click deployment of [Cline Kanban](https://github.com/cline/kanban) on Cloudflare Containers.

## What is Cline Kanban?

A web app that runs CLI coding agents in parallel. Each task card gets its own terminal and git worktree. Link cards together for autonomous dependency chains with auto-commit.

> **npx kanban** — A replacement for your IDE better suited for running many agents in parallel and reviewing diffs.

[Learn more →](https://github.com/cline/kanban)

---

## Deploy

Click the button above. You will need:

- A [Cloudflare account](https://dash.cloudflare.com/signup) with **Workers Paid Plan** and **Containers beta** access
- A [GitHub OAuth App](https://github.com/settings/developers) for login
  - **Authorization callback URL**: `https://{your-worker}.workers.dev/api/auth/github/callback`

Cloudflare automatically clones the repo, provisions resources, and deploys the stack.

---

## License

Apache-2.0 — same as [Cline Kanban](https://github.com/cline/kanban).
