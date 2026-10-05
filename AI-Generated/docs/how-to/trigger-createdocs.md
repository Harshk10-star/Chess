# Trigger PR Doc Agent with @createdocs

## Goal

Generate or update documentation from a pull request diff, writing only under `AI-Generated/`.

## Steps

1. Merge the agent workflow (or use this PR’s branch) and add repo secrets:
   - `OPENAI_API_KEY` (optional; mock mode without it)
   - `GH_PAT` with read access to private `Harshk10-star/docsagent`
2. Open any PR that changes the surfaces you want documented.
3. Comment:

```text
@createdocs --dry-run
```

4. Review the bot report comment (plan + drafts).
5. Comment again without `--dry-run` to write files and commit under `AI-Generated/` only:

```text
@createdocs scope=howto,reference
```

## Preconditions

- Workflow file: `.github/workflows/pr-doc-agent.yml`
- Folder exists: `AI-Generated/`

## Pitfalls

- Without `GH_PAT`, the Action cannot install the private agent package.
- The agent is PR-diff scoped — it will not invent a full-repo docs set from an empty PR.
- Paths outside `AI-Generated/` are remapped back into the sandbox.
