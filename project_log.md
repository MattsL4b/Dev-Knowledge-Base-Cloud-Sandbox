# Project Kickoff & Learning Log: Dev Knowledge Base & Cloud Sandbox

---

## 1. Project Overview & Architecture
- **Goal:** Build an interactive Dev Knowledge Base and Cloud PAAS Sandbox to showcase software engineering maturity, DevOps capabilities, and Cloud-native practices.
- **Target Stack:**
  * **Frontend & Content:** Astro (SSG/SSR, Islands Architecture) + TypeScript
  * **Edge & Serverless Execution:** Cloudflare Pages & Cloudflare Workers
  * **Environment:** Linux (WSL2 / Ubuntu) on Windows using VS Code Remote Development

---

## 2. Core Concepts & Architectural Insights Learned

### Architectural Decisions
- **Astro vs. Traditional React:**
  * Astro ships 0 KB client-side JavaScript by default using static-first rendering.
  * Uses **Islands Architecture**—static HTML rendered by default, with dynamic client-side components (like React) embedded only where needed.
- **Cloudflare Pages/Workers vs. Traditional PaaS (e.g., Render/Heroku):**
  * Traditional PaaS deploys code to centralized virtual servers (e.g., single regional server).
  * Cloudflare executes serverless code at the **Edge** across 300+ global data centers, reducing latency and scaling automatically.

### Environment & Tooling Dynamics
- **Python vs. Node.js Ecosystem:**
  * **No `venv` needed:** Node.js manages dependencies via `./node_modules/` local to the project.
  * **No `__init__.py` files:** Node.js / TypeScript imports modules dynamically without requiring explicit package initialization files.
  * **Dependencies Tracking:** Handled strictly via `package.json` and `package-lock.json`.
- **Node Version Management:**
  * Node binaries/executables are installed globally per machine via `nvm` (Node Version Manager).
  * Node versions are pinned per-project using an `.nvmrc` file (e.g., `echo "20" > .nvmrc`).
- **Linux Terminal & Shell Commands:**
  * **`source ~/.bashrc`:** Reloads and applies changes made to the shell configuration file immediately in the current terminal session without needing to restart the window.
  * **Piping to bash (`curl ... | bash`):** Downloads and executes shell setup scripts (requires trailing `| bash`).
  * **Terminal Prompt Customization (`PS1`):** Custom functions can be added to `~/.bashrc` to append active Git branch names directly to the prompt path for enhanced situational awareness.

### Troubleshooting & Git Standards
- **WSL2 DNS Resolution Fix:**
  * Fixed `ETIMEDOUT` errors on `npm` by disabling automatic `/etc/resolv.conf` generation in `/etc/wsl.conf` (`generateResolvConf = false`) and binding static DNS servers (`8.8.8.8` & `1.1.1.1`).
- **Git Identity & Authentication:**
  * Local Git commits require configuring `user.name` and `user.email`.
  * HTTPS Git remote pushes require a GitHub **Personal Access Token (PAT)** with `repo` scope instead of standard account passwords.
  * Credentials can be cached locally using `git config --global credential.helper store`.
- **Branch Protection & Feature Branch Workflow:**
  * Protected `main` branch to prevent direct pushes.
  * Standardized development process around dedicated feature branches (e.g., `feature/ticket-x-...`), Pull Requests (PRs), and merging into `main`.
- **Cloudflare Deployment Engine Alignments:**
  * Fixed `EBADENGINE` warnings by upgrading runtime targeting to Node 22 (`NODE_VERSION = 22` in Cloudflare dashboard and `.nvmrc`).
  * Cloudflare Pages automatically generates branch preview builds for non-main branches and triggers production deployments on `main` merges.
- **Astro 5 Content Layer Architecture:**
  * Schema definition lives at `src/content.config.ts` using the Content Layer API (`defineCollection`, `zod`, and `glob` loaders).
  * Static page generation uses dynamic routes (`src/pages/docs/[id].astro`), `getStaticPaths()`, and `render(entry)` to convert Markdown into HTML components at build time.

---

## 3. Work Completed So Far

- [x] Defined project architecture and DevOps showcase goals.
- [x] Configured GitHub Project Kanban Board with initial backlog tickets.
- [x] Configured WSL2 (Ubuntu) and VS Code integration on Windows.
- [x] Installed `nvm` (Node Version Manager) and set up Node.js LTS in Ubuntu.
- [x] Created project directory `dev_knowledge_sandbox` and linked it to GitHub.
- [x] **Ticket 1 Completed:** Initialized Astro project, added Cloudflare adapter, configured Git PAT authentication.
- [x] Configured repository branch protection rules on `main`.
- [x] **Ticket 2 Completed:**
  - [x] Created feature branch `feature/ticket-2-cloudflare-pages`.
  - [x] Connected GitHub repository to Cloudflare Pages.
  - [x] Configured build settings (`Framework preset: Astro`, Build command: `npm run build`, Output dir: `dist`).
  - [x] Fixed `package.json` naming mismatch (`dev-knowledge-sandbox`).
  - [x] Aligned Node runtime environment variable (`NODE_VERSION = 22`).
  - [x] Verified automated preview and production build deployments.
  - [x] Merged feature branch PR into `main` and moved Ticket 2 to **Done**.
- [x] **Ticket 3 Completed:**
  - [x] Created feature branch for content schema implementation.
  - [x] Defined Zod-validated Content Collection schema in `src/content.config.ts`.
  - [x] Added sample Markdown article (`wsl2-networking-dns.md`).
  - [x] Configured dynamic page layout with `getStaticPaths()` in `src/pages/docs/[id].astro`.
  - [x] Verified local build compilation (`npm run build`) and Cloudflare preview build.
  - [x] Merged feature branch PR into `main` and moved Ticket 3 to **Done**.
---

## 4. Next Steps (Ticket 3 Checklist)

1. [ ] Create feature branch: `git checkout -b feature/ticket-3-content-schema`.
2. [ ] Define Content Collections schema in `src/content/config.ts` using Astro `zod` validation.
3. [ ] Create sample knowledge base Markdown/MDX entries (e.g., architecture, Linux networking, Cloudflare Edge).
4. [ ] Build a dynamic content route (`src/pages/knowledge/[...slug].astro`) to render content dynamically.
5. [ ] Push feature branch, open PR, verify Cloudflare preview build, and merge into `main`.

## 4. Next Steps (Ticket 4 Checklist)

1. [ ] Create feature branch: `git checkout -b feature/ticket-4-ui-layout-styling`.
2. [ ] Integrate Tailwind CSS / styling system for layout consistency.
3. [ ] Create reusable layout wrappers (`BaseLayout.astro`, `Header.astro`, `Footer.astro`).
4. [ ] Build article listing/navigation view on the homepage (`src/pages/index.astro`).
5. [ ] Verify preview build on Cloudflare, open PR, and merge into `main`.