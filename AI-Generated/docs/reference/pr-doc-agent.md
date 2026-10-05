# PR Doc Agent (@createdocs) reference

## Trigger grammar

| Comment | Effect |
| --- | --- |
| `@createdocs` | Plan docs from the PR diff |
| `/createdocs` | Same trigger |
| `scope=howto,reference` | Restrict Diátaxis quadrants |
| `--focus "castling"` | Soft planning hint |
| `--dry-run` | Report only; no file writes/commits |

## Workflow

File: `.github/workflows/pr-doc-agent.yml`

- Events: `issue_comment` on PRs, or `workflow_dispatch` with `pr_number` + `comment`
- Installs `pr-doc-agent` from `Harshk10-star/docsagent` using `GH_PAT`
- Sets `PR_DOC_AGENT_OUTPUT_ROOT=AI-Generated`
- Commits only `AI-Generated/` when not dry-run

## Secrets / vars

| Name | Required | Purpose |
| --- | --- | --- |
| `GH_PAT` | yes (private package) | Install docsagent |
| `OPENAI_API_KEY` | no | Live model; mock without it |
| `PR_DOC_AGENT_MODEL` | no (var) | Defaults to `gpt-4.1-mini` |

## Output layout

```text
AI-Generated/
  docs/
    tutorials/
    how-to/
    explanation/
    reference/
```
