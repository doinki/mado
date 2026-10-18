---
name: conventional-commits
description: Generate a git commit message compliant with Conventional Commits 1.0.0 (and the de facto @commitlint/config-conventional rules) from currently staged changes. Outputs Korean by default, or another language if the user explicitly requests it. Trigger when the user asks for a commit message — e.g. "/conventional-commits", "write a commit message", or any equivalent. Scope is limited to producing the message text; executing `git commit` is outside this skill's responsibility.
---

# Conventional Commits

## When to Use

The user asks for a commit message from currently staged changes.

## When NOT to Use

The user wants a generic explanation of Conventional Commits — answer normally.

## Core Policies

These rules MUST NOT be violated under any circumstance.

1. **Act on the current state.** Generate immediately from the current staged state on every invocation; never ask the user about type, scope, or body inclusion, and never reuse cached results.
2. **Output language.** Default to Korean. If the user explicitly requests a different language in this invocation, use that language instead. Type and footer keywords and the optional scope token always stay English.
3. **Output discipline.** Emit the message as a single `plaintext` fenced code block conforming to the reference spec, with content in the language from Policy 2 — no preamble, no analysis recap inside the block. Use imperative present tense in the description ("add", "fix", "remove" — not "added", "adds", "adding") for English output; for other languages, use the language's neutral, action-oriented register. The only exception to this block-only format is the empty-staging notice in Workflow step 2.

## Workflow

1. **Load the reference.** Read `references/conventional-commits-1.0.0.md` (alongside this `SKILL.md`); defer to it when in doubt.

2. **Scan staged scale (fail-fast).** Run `git diff --staged --stat`.
   - If empty, reply with the single line below (in the language from Core Policy 2) and stop:
     > No staged changes found. Run `git add` and try again.
   - Otherwise, record the **list of changed files** and classify the change as small / moderate / large.

3. **Gather priors.** Before reading the diff, collect interpretation signals: run `git branch --show-current` (a name like `feature/payment-retry` is a prior for type via the prefix `feature/` / `fix/` / `hotfix/` / `refactor/` / `docs/`, scope via the trailing slug, and footers via embedded issue keys like `PROJ-123` or `#456` becoming `Refs:` / `Closes:` candidates), then `git log -n 10 --stat` to learn the repo's commit conventions (header tone, common scopes, body style, footer usage); for commits that touch any file from step 2 or clearly share its feature area, inspect with `git show <sha>` to recover the "why" the diff alone cannot show, and skip commits with no overlap.

4. **Read the diff.**
   - **Small or moderate:** run `git diff --staged` and read it whole.
   - **Large:** start with `git diff --staged` for the overall picture, then drill into high-signal files via `git diff --staged -- <path>` — prioritizing largest change volume; public APIs, configuration, schemas, or data models; and paths that reveal the primary intent. **Stop drilling** once you can answer every item in step 5; summarize the rest from `--stat`.

5. **Analyze intent.**
   - **What and why.** State the dominant behavioral or structural delta in one sentence, and the motivation behind it. Use this why-source priority (higher beats lower when they disagree): user's extra explanation in the current turn → branch name and embedded issue keys from step 3 → new comments, docstrings, or test descriptions added in the diff → recent related commit messages from step 3 → the code itself.

   - **Type.** Pick exactly one from the de facto standard set enforced by `@commitlint/config-conventional`: `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test`. Apply these path-class heuristics first, then refine with diff semantics:
     - Only `*.md`, `docs/**`, `README*`, `LICENSE` → `docs`.
     - Only `*test*`, `tests/**`, `__tests__/**`, `*.spec.*` → `test`.
     - Only `.github/workflows/**`, `.gitlab-ci.yml`, `.circleci/**`, `Jenkinsfile` → `ci`.
     - Only build/dependency files (`package.json`, lockfiles, `Dockerfile`, `pyproject.toml`, `go.mod`, `Cargo.toml`, `Makefile`) → `build`.
     - Only formatting/whitespace/import-order changes with no behavior change → `style`.
     - Diff is purely a revert of an earlier commit → `revert`, with a `Refs: <sha>` footer naming the reverted SHA(s).
     - Diff adds a new user-visible capability → `feat`.
     - Diff repairs a stated or evident defect → `fix`.
     - Same external behavior, restructured internals → `refactor`.
     - Measurable speed, memory, or throughput improvement (with the diff showing the mechanism) → `perf`.
     - Maintenance with no user-visible effect and none of the above → `chore`.
     - When two types compete, prefer `fix` > `feat` > `perf` > `refactor` > any maintenance type (`test`, `docs`, `build`, `ci`, `style`) > `chore`.

   - **Scope token.** Add when nearly all changes fall within one clearly-named area (top-level directory, module, feature flag) or the branch-name slug from step 3 matches; omit when changes span multiple areas or no obvious name dominates.

   - **Breaking change.** Flag if the change forces consumers to modify their code, configuration, schema, CLI usage, or deployment — e.g., removed/renamed public APIs; changed function or method signatures; removed/renamed configuration keys or environment variables; non-backward-compatible schema migrations; changed CLI flags or output formats. Indicate per the reference (`!` after type/scope and/or a `BREAKING CHANGE: <description>` footer). Otherwise record "none."

   - **Mixed intent.** When changes mix unrelated types, pick the type for the dominant change by volume and significance, and mention the secondary changes briefly in the body. Do not ask the user.

   - **Body.** Include when the "why" is non-obvious from the header, when there are secondary changes to mention, or when there is a breaking change to describe. Otherwise omit.

6. **Compose and output.** Write the message from the step-5 decisions and emit per Core Policy 3. For Korean output, also apply the Korean Writing Rules.

## Korean Writing Rules

- **Header:** no trailing period; ending with an action noun (추가, 수정, 변경, 삭제, 개선) reads naturally; keep around **25–40 Korean characters**.
- **Body:** declarative endings (`-습니다`, `-합니다`); explain **what** and **why**, skip **how**; omit entirely for trivial changes.
