# Demo: Human-in-the-Loop @createdocs Approve on PR

## Overview

This document describes the `@createdocs approve on PR` human-in-the-loop demo feature. It provides a reference for the parameters, return values, constraints, and usage patterns related to the approval process triggered on a pull request (PR) within the `@createdocs` workflow.

## Details

### Parameters

| Parameter      | Type    | Description                                         | Required |
|----------------|---------|-----------------------------------------------------|----------|
| `pr_id`        | string  | The unique identifier of the pull request to approve. | Yes      |
| `approver_id`  | string  | The identifier of the human approver performing the approval. | Yes      |
| `approval_note`| string  | Optional note or comment provided by the approver.  | No       |

### Returns

| Field          | Type    | Description                                         |
|----------------|---------|-----------------------------------------------------|
| `status`       | string  | The result of the approval action, e.g., `approved`, `rejected`, or `pending`. |
| `timestamp`    | string  | ISO 8601 formatted timestamp when the approval was recorded. |
| `details`      | object  | Additional metadata about the approval event, such as approver info and notes. |

### Constraints

- The `pr_id` must correspond to an existing open pull request.
- The `approver_id` must be authorized to approve PRs within the `@createdocs` workflow.
- Approval actions are final and trigger downstream processes; re-approval requires a new PR or manual override.

### Usage Example

```json
{
  "pr_id": "PR-12345",
  "approver_id": "user-67890",
  "approval_note": "Reviewed and approved for merge."
}
```

Expected return:

```json
{
  "status": "approved",
  "timestamp": "2024-06-01T12:34:56Z",
  "details": {
    "approver_id": "user-67890",
    "note": "Reviewed and approved for merge."
  }
}
```

This reference covers the core interface and expected behavior of the human-in-the-loop approval step in the `@createdocs` demo workflow on pull requests.