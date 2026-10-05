# Game Status Indicator UI Elements and Behavior

## Overview

The game status indicator feature provides a set of UI elements that display the current state of the game above the board. It dynamically updates to reflect the active player's turn, check or checkmate conditions, and the total number of moves played.

## DOM Elements

The feature introduces the following DOM elements, each identified by a unique ID:

- `game-status`: The container element that holds all status information.
- `turn-status`: Displays which player's turn it is (e.g., "White's turn" or "Black's turn").
- `move-count`: Shows the total number of moves played in the game.

Each element is a block-level container (e.g., `<div>`) and is updated dynamically as the game state changes.

## Dynamic Status Messages

The content of the status elements updates based on the internal game state:

- **Turn Indication (`turn-status`)**
  - Displays "White's turn" or "Black's turn" depending on the active player.

- **Check and Checkmate Status (`game-status` container)**
  - If the active player is in check, the message "Check" is appended.
  - If the active player is in checkmate, the message "Checkmate" replaces the turn indication.

- **Move Count (`move-count`)**
  - Displays the total number of half-moves (plies) played, formatted as "Moves: N" where N is an integer.

## Styling and Accessibility

- The `game-status` container has the attribute `aria-live="polite"` to announce updates to assistive technologies without interrupting the user.
- Each status element uses semantic HTML and is styled via CSS classes (not detailed here) to ensure clear visibility and readability.

## Examples of Status Messages

| Game State           | `turn-status` Content | `move-count` Content | `game-status` Additional Message |
|----------------------|----------------------|---------------------|----------------------------------|
| White's turn, no check | "White's turn"      | "Moves: 10"        | (none)                           |
| Black's turn, in check | "Black's turn"      | "Moves: 15"        | "Check"                        |
| White's turn, checkmate | (replaced by) "Checkmate" | "Moves: 20"        | (none)                           |

## Internal State Usage

The status messages are computed from the internal game state, which includes:

- `activePlayer`: Indicates the current player to move (`'white'` or `'black'`).
- `isCheck`: Boolean flag indicating if the active player is in check.
- `isCheckmate`: Boolean flag indicating if the active player is in checkmate.
- `moveCount`: Integer representing the total number of half-moves played.

These values are used to update the DOM elements accordingly whenever the game state changes.

---

**Parameters:**

- None (status elements are updated internally based on game state).

**Returns:**

- None (DOM elements are updated in place).

**Constraints:**

- The feature requires the game state to be accurately maintained and updated externally.
- The DOM elements must exist in the document before updates occur.

**Usage Shape:**

```html
<div id="game-status" aria-live="polite">
  <div id="turn-status"></div>
  <div id="move-count"></div>
</div>
```

Updates to these elements are performed programmatically by the game logic.
