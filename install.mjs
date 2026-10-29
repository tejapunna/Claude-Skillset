#!/usr/bin/env node
// Restores this Claude Code setup on a new machine: plugins, skills, MCP servers, agents, commands, rules.
// Needs: Node 18+, git, and the `claude` CLI on PATH. Safe to re-run.
import { execSync } from 'node:child_process';
import { cpSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const claudeDir = join(homedir(), '.claude');

const run = (cmd) => {
  console.log(`> ${cmd}`);
  try {
    execSync(cmd, { stdio: 'inherit' });
  } catch {
    console.warn('  ^ failed, continuing');
  }
};

const marketplaces = [
  'anthropics/claude-plugins-official',
  'anthropics/skills',
  'obra/superpowers-marketplace',
  'DietrichGebert/ponytail',
  'LukasNiessen/terrashark',
  'latent-spaces/brag',
  'kaankiziltug/logo-design-skill',
];

const plugins = [
  'ponytail@ponytail',
  'frontend-design@claude-plugins-official',
  'superpowers@superpowers-marketplace',
  'example-skills@anthropic-agent-skills',
  'code-simplifier@claude-plugins-official',
  'terrashark@terrashark',
  'postman@claude-plugins-official',
  'brag@brag',
  'logo-design@logo-design-skill',
  'vercel@claude-plugins-official',
  'remember@claude-plugins-official',
];

// Skills managed by the `skills` CLI (github repo -> skill names)
const skillSources = {
  'emilkowalski/skill': ['apple-design', 'animate', 'animate-expo', 'animation-performance', 'animation-vocabulary', 'ask-sonner', 'break-ui', 'emil-design-eng', 'find-animation-opportunities', 'improve-animations', 'mobile-native', 'pick-ui-library', 'prototype', 'review-animations', 'write-swift'],
  'planetscale/skills': ['planetscale-autonomous-execution-mode', 'planetscale-best-practices-matrix', 'planetscale-change-gates-and-approval-contract', 'planetscale-codebase-sqlcommenter-instrumentation', 'planetscale-customer-report-template', 'planetscale-mcp-agent-operating-model', 'planetscale-postgres-safety-review', 'planetscale-pscale-cli-automation', 'planetscale-query-insights-and-tags', 'planetscale-readonly-inventory', 'planetscale-safe-orchestrator', 'planetscale-schema-recommendations-agent-loop', 'planetscale-traffic-control-recommendations', 'planetscale-vitess-safety-review', 'planetscale-webhook-automation-recommendations'],
  'vercel-labs/skills': ['find-skills'],
  'elithrar/dotfiles': ['animated-sprites'],
  'nextlevelbuilder/ui-ux-pro-max-skill': ['ui-ux-pro-max'],
  'shadcn/ui': ['shadcn'],
};

console.log('\n== Plugins ==');
for (const m of marketplaces) run(`claude plugin marketplace add ${m}`);
for (const p of plugins) run(`claude plugin install ${p} -s user`);
run('claude plugin disable remember@claude-plugins-official'); // installed but disabled on the source machine

console.log('\n== Skills (skills CLI) ==');
for (const [src, names] of Object.entries(skillSources)) {
  run(`npx -y skills add ${src} -g -a claude-code -y -s ${names.join(' ')}`);
}

console.log('\n== Bundled skills, agents, commands, rules, CLAUDE.md ==');
for (const item of ['skills', 'agents', 'commands', 'rules', 'CLAUDE.md']) {
  cpSync(join(here, 'claude', item), join(claudeDir, item), { recursive: true });
  console.log(`  copied ${item} -> ${join(claudeDir, item)}`);
}

console.log('\n== MCP servers (user scope) ==');
const env = { HOME: homedir(), ...process.env };
const missing = new Set();
const raw = readFileSync(join(here, 'mcp-servers.json'), 'utf8').replace(/\$\{(\w+)\}/g, (m, name) => {
  if (env[name]) return env[name].replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  missing.add(name);
  return m;
});
const servers = JSON.parse(raw);
const configPath = join(homedir(), '.claude.json');
const config = existsSync(configPath) ? JSON.parse(readFileSync(configPath, 'utf8')) : {};
config.mcpServers ??= {};
// Keep entries you already configured; only replace ones that still have unfilled ${VAR} placeholders.
for (const [name, def] of Object.entries(servers)) {
  const current = config.mcpServers[name];
  if (!current || JSON.stringify(current).includes('${')) config.mcpServers[name] = def;
}
writeFileSync(configPath, JSON.stringify(config, null, 2));
console.log(`  ${Object.keys(servers).length} servers merged into ${configPath}`);
if (missing.size) {
  console.log(`  Set these env vars and re-run, or edit ${configPath} by hand: ${[...missing].join(', ')}`);
}

console.log('\nDone. Restart Claude Code, then run /plugin and /mcp to check.');
