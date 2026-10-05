# How move validation is structured

## Goal of this design

Each piece type has its own validity module. `Main` selects a piece, then calls the matching validator before updating the 8×8 `positions` grid and appending to `moves`.

## Flow

1. User selects a piece tile → `selectedPiece` set.
2. User clicks a destination → `updatePositions` / `setMoves`.
3. Validator for that piece type checks geometry, blocking, and whether the move leaves/puts the king in check (via `Check` helpers).
4. On success, `setting` mutates `positions`, records the move, and flips `turn`.

## Trade-offs

- **Pros:** Piece rules stay isolated; easy to tweak one piece without touching others.
- **Cons:** Shared concerns (check, king tracking, castling flags) are threaded through many function parameters; checkmate timing has historically been fragile (see comments in `Main.js`).
- **Server trust:** Persistence does not enforce rules, so invalid clients could save illegal games.

Understanding this split helps when adding features like en passant, clocks, or server-side validation.
