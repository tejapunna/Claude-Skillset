<div align="center">

# 🧰 Claude-Skillset

**My complete Claude Code setup: plugins, skills, MCP servers, agents and commands, installed with one command.**

![Plugins](https://img.shields.io/badge/plugins-11-7c3aed?style=flat-square)
![Skills](https://img.shields.io/badge/skills-140%2B-2563eb?style=flat-square)
![MCP servers](https://img.shields.io/badge/MCP_servers-18-059669?style=flat-square)
![Agents](https://img.shields.io/badge/agents-35-d97706?style=flat-square)
![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-475569?style=flat-square)

</div>

---

## ⚡ Quick start

```sh
git clone https://github.com/tejapunna/Claude-Skillset.git && node Claude-Skillset/install.mjs
```

> [!TIP]
> On Windows PowerShell 5.1, use `;` instead of `&&`. PowerShell 7, bash and zsh all work as shown.

Then restart Claude Code and run `/plugin` and `/mcp` to see everything.

### Requirements

| Tool | Why |
|---|---|
| [Node.js](https://nodejs.org) 18+ | Runs the installer, the `skills` CLI and most MCP servers |
| [git](https://git-scm.com) | Clones this repo |
| [Claude Code](https://claude.com/claude-code) | The `claude` CLI must be on your PATH |

---

## 📑 Contents

- [What gets installed](#-what-gets-installed)
- [API keys](#-api-keys)
- [How the installer works](#️-how-the-installer-works)
- [Plugins](#-plugins)
- [Skills](#-skills)
- [Agents](#-agents)
- [Commands and rules](#-commands-and-rules)
- [MCP servers](#-mcp-servers)
- [Repo layout](#-repo-layout)

---

## 📦 What gets installed

| | Count | Where it comes from |
|---|---:|---|
| 🔌 **Plugins** | 11 | 7 GitHub plugin marketplaces |
| 🧠 **Skills from GitHub** | 34 | Installed with the [`skills`](https://github.com/vercel-labs/skills) CLI |
| 📚 **Bundled skills** | 108 | Copied from [`claude/skills/`](claude/skills) |
| 🤖 **Agents** | 35 | Copied from [`claude/agents/`](claude/agents) |
| ⌨️ **Slash commands** | 70+ | Copied from [`claude/commands/`](claude/commands) |
| 📏 **Rules** | 10 packs | Copied from [`claude/rules/`](claude/rules) |
| 🔗 **MCP servers** | 18 | Defined in [`mcp-servers.json`](mcp-servers.json) |

Plugins also bring their own skills (for example docx, pdf, pptx and xlsx from `example-skills`), so the total is well over 140.

---

## 🔑 API keys

This repo contains **no secrets**. Some MCP servers need a key. Set the ones you use as environment variables **before** running the installer:

| Variable | Used by |
|---|---|
| `HOSTINGER_API_TOKEN` | hostinger-hosting, -domains, -dns, -billing, -reach |
| `CONTEXT7_API_KEY` | context7 |
| `APIFY_TOKEN` | apify |
| `MYSQL_HOST` `MYSQL_PORT` `MYSQL_USER` `MYSQL_PASS` | mysql |

<details>
<summary>Setting a variable</summary>

```sh
# bash / zsh
export CONTEXT7_API_KEY=your-key
```

```powershell
# PowerShell
$env:CONTEXT7_API_KEY = "your-key"
```

</details>

Skipped one? Set it and run the installer again, or put the value straight into `~/.claude.json`.

---

## ⚙️ How the installer works

[`install.mjs`](install.mjs) is one dependency-free Node script. It runs four steps:

1. **Plugins:** adds each marketplace with `claude plugin marketplace add`, then installs every plugin at user scope.
2. **Skills from GitHub:** runs `npx skills add <repo> -g` for each source.
3. **Bundled files:** copies `claude/skills`, `agents`, `commands`, `rules` and `CLAUDE.md` into `~/.claude/`.
4. **MCP servers:** merges `mcp-servers.json` into `~/.claude.json` at user scope, filling in your environment variables.

> [!NOTE]
> Bundled files overwrite files with the same name in `~/.claude/`. Running the installer again is safe: MCP servers you've already configured are left as they are.

---

## 🔌 Plugins

| Plugin | What it adds | Marketplace |
|---|---|---|
| **superpowers** | Brainstorming, TDD, debugging and planning workflows | [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) |
| **ponytail** | Keeps code minimal: no over-engineering | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) |
| **frontend-design** | Distinctive, non-generic UI design guidance | [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) |
| **code-simplifier** | Simplifies and cleans recently changed code | anthropics/claude-plugins-official |
| **postman** | API design, testing, mocking and monitoring | anthropics/claude-plugins-official |
| **vercel** | Deploys, env vars, AI SDK, Next.js guidance | anthropics/claude-plugins-official |
| **remember** | Memory across sessions (installed, off by default) | anthropics/claude-plugins-official |
| **example-skills** | Anthropic's skills: docx, pdf, pptx, xlsx, canvas, MCP builder and more | [anthropics/skills](https://github.com/anthropics/skills) |
| **terrashark** | Terraform expertise | [LukasNiessen/terrashark](https://github.com/LukasNiessen/terrashark) |
| **brag** | Turns a project into a launch video | [latent-spaces/brag](https://github.com/latent-spaces/brag) |
| **logo-design** | Logo design from brief to final SVG files | [kaankiziltug/logo-design-skill](https://github.com/kaankiziltug/logo-design-skill) |

---

## 🧠 Skills

### From GitHub (34)

<details>
<summary><b>🎞️ Animation and design</b> · <a href="https://github.com/emilkowalski/skill">emilkowalski/skill</a> (15)</summary>

apple-design · animate · animate-expo · animation-performance · animation-vocabulary · ask-sonner · break-ui · emil-design-eng · find-animation-opportunities · improve-animations · mobile-native · pick-ui-library · prototype · review-animations · write-swift

</details>

<details>
<summary><b>🗄️ PlanetScale databases</b> · <a href="https://github.com/planetscale/skills">planetscale/skills</a> (15)</summary>

planetscale-autonomous-execution-mode · planetscale-best-practices-matrix · planetscale-change-gates-and-approval-contract · planetscale-codebase-sqlcommenter-instrumentation · planetscale-customer-report-template · planetscale-mcp-agent-operating-model · planetscale-postgres-safety-review · planetscale-pscale-cli-automation · planetscale-query-insights-and-tags · planetscale-readonly-inventory · planetscale-safe-orchestrator · planetscale-schema-recommendations-agent-loop · planetscale-traffic-control-recommendations · planetscale-vitess-safety-review · planetscale-webhook-automation-recommendations

</details>

<details>
<summary><b>🧩 Other</b> (4)</summary>

| Skill | Source |
|---|---|
| ui-ux-pro-max | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) |
| shadcn | [shadcn/ui](https://github.com/shadcn/ui) |
| find-skills | [vercel-labs/skills](https://github.com/vercel-labs/skills) |
| animated-sprites | [elithrar/dotfiles](https://github.com/elithrar/dotfiles) |

</details>

### Bundled in this repo (108)

<details>
<summary><b>💳 Cashfree payments</b> (18)</summary>

getting-started · pg · eligible-payment-modes · auto-collect · bbps-cou · changelog · common-mistakes · cross-border · migrate-from-juspay · migrate-from-payu · migrate-from-razorpay · payouts · progress-and-skill-feedback · secure-id · settlements-and-reconciliation · subscriptions · upgrade-advisor · validation-and-testing

</details>

<details>
<summary><b>🛡️ Spartan AI Toolkit</b> (28)</summary>

| Area | Skills |
|---|---|
| Backend | api-endpoint-creator · backend-api-design · database-patterns · database-table-creator · kotlin-best-practices · testing-strategies |
| Design | design-intelligence · design-workflow |
| Ops and QA | ops-investigate-alert · ops-oncall-log · browser-qa · security-checklist |
| Terraform | terraform-best-practices · terraform-module-creator · terraform-review · terraform-security-audit · terraform-service-scaffold |
| Product and startup | brainstorm · competitive-teardown · idea-validation · market-research · startup-pipeline · web-to-prd |
| Fundraising and content | investor-materials · investor-outreach · content-engine · article-writing · deep-research |

</details>

<details>
<summary><b>🦸 Superpowers workflows</b> (14)</summary>

brainstorming · dispatching-parallel-agents · executing-plans · finishing-a-development-branch · receiving-code-review · requesting-code-review · subagent-driven-development · systematic-debugging · test-driven-development · using-git-worktrees · using-superpowers · verification-before-completion · writing-plans · writing-skills

</details>

<details>
<summary><b>🅰️ Anthropic examples</b> (14)</summary>

academy-guide · algorithmic-art · brand-guidelines · canvas-design · claude-api · doc-coauthoring · frontend-design · internal-comms · mcp-builder · skill-creator · slack-gif-creator · theme-factory · web-artifacts-builder · webapp-testing

</details>

<details>
<summary><b>⚛️ Frontend, React and mobile</b> (17)</summary>

astro · nextjs-app-router-patterns · react-best-practices · react-native-architecture · react-state-management · tanstack-query-expert · zustand-store-ts · tailwind-design-system · ui-design-system · progressive-web-app · web-performance-optimization · expo-deployment · chrome-extension-developer · senior-frontend · senior-fullstack · senior-backend · senior-architect

</details>

<details>
<summary><b>🔧 Backend, search, SEO and more</b> (17)</summary>

| Area | Skills |
|---|---|
| Backend and data | drizzle-orm-expert · fastapi-endpoint · zod-validation-expert · upstash-qstash · js-security-audit |
| SEO and commerce | seo-optimizer · roier-seo · shopify-apps · shopify-development |
| Search and scraping | exa-search · firecrawl-scraper · tavily-web |
| Misc | blockrun · discernment-nudge · gepeto · karpathy-guidelines · pinokio |

</details>

### Optional extras

These aren't installed by the script. Add them yourself if you want them:

| Tool | Install |
|---|---|
| [get-shit-done](https://github.com/gsd-build/get-shit-done) | `npx get-shit-done-cc@latest` |
| [claude-mem](https://github.com/thedotmack/claude-mem) | See the project README |

---

## 🤖 Agents

35 subagents you can hand work to, in [`claude/agents/`](claude/agents).

<details>
<summary>Show all agents</summary>

| Area | Agents |
|---|---|
| Workflow | advisor · explorer · researcher · research-planner · worker · task-decomposition-expert · phase-reviewer · code-reviewer · unused-code-cleaner |
| Architecture | backend-architect · solution-architect-cto · sre-architect · infrastructure-expert |
| Backend | backend-developer · micronaut-backend-expert · api-documenter |
| Frontend | frontend-developer · fullstack-developer · expert-nextjs-developer · nextjs-architecture-expert · react-performance-optimization · javascript-pro · typescript-pro · mobile-developer · playwright-tester |
| Design | ui-designer · ui-ux-designer · ai-designer · design-critic · cli-ui-designer · game-designer |
| Growth | seo-analyzer · seo-specialist · hackathon-ai-strategist · idea-killer |

</details>

---

## ⌨️ Commands and rules

| | What's included |
|---|---|
| **Commands** | `/spartan` smart router plus 70 `/spartan:*` workflows (spec, plan, build, debug, pr-ready, review, deploy, tf-*, ux and more), `/code-review`, `/todo` |
| **Rules** | core · database · backend-micronaut · frontend-react · shared-backend · ux-design · infrastructure · product · ops · research |
| **CLAUDE.md** | Global instructions for the Spartan engineering workflow |

---

## 🔗 MCP servers

| Server | What it does | Key needed |
|---|---|---|
| **context7** | Up-to-date library and framework docs | `CONTEXT7_API_KEY` |
| **memory** | Persistent knowledge graph | – |
| **filesystem** | File access in your home folder | – |
| **chrome-devtools** | Drive and inspect Chrome | – |
| **playwright-server** | Browser automation (Microsoft Playwright MCP) | – |
| **executeautomation-playwright-server** | Browser automation, API calls and codegen | – |
| **next-devtools** | Next.js dev server insights and docs | – |
| **DeepGraph Next.js MCP** | Code graph search over the Next.js source | – |
| **DeepGraph TypeScript MCP** | Code graph search over the TypeScript source | – |
| **ios-simulator** | Control the iOS simulator (macOS only) | – |
| **apify** | Web scraping with Apify Actors | `APIFY_TOKEN` |
| **mysql** | Query a MySQL database | `MYSQL_*` |
| **meta-ads** | Meta Ads (signs in through your browser) | – |
| **hostinger-hosting** | Hosting, sites and deploys | `HOSTINGER_API_TOKEN` |
| **hostinger-domains** | Domain management | `HOSTINGER_API_TOKEN` |
| **hostinger-dns** | DNS records | `HOSTINGER_API_TOKEN` |
| **hostinger-billing** | Billing and subscriptions | `HOSTINGER_API_TOKEN` |
| **hostinger-reach** | Email marketing | `HOSTINGER_API_TOKEN` |

The postman and vercel plugins add their own MCP servers on top of these.

---

## 🗂️ Repo layout

```
Claude-Skillset/
├── install.mjs          # one-shot installer
├── mcp-servers.json     # MCP server definitions (keys as ${VAR} placeholders)
└── claude/              # copied into ~/.claude/
    ├── CLAUDE.md
    ├── agents/
    ├── commands/
    ├── rules/
    └── skills/
```

---

<div align="center">

Bundled skills belong to their original authors and keep their own licenses.

</div>
