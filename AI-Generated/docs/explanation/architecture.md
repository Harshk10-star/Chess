# Chess application architecture

Chess is a browser game with a thin persistence API.

## Pieces

| Layer | Role |
| --- | --- |
| React client (`src/`) | Board UI, turn state, move validation, check/checkmate, castling, promotion |
| Express API (`server/`) | Persist move lists to MongoDB; list games via EJS |
| MongoDB | Collection model `chessGame` with `movesP[]` |

## Client routes

- `/` — live play (`Main`)
- `/chess-game/:id` — replay a saved move list (`GameView`)

## Why validation lives in the client

Move legality is implemented as per-piece helpers (`PawnValid`, `RookValid`, …) plus `Check` / `CheckMate`. The server stores whatever move list the client posts; it does not re-validate chess rules. That keeps the API small, but means saved games trust the client that produced them.

## Persistence model

Each saved document is a sequence of moves:

```text
{ beforeX, beforeY, piece, x, y }
```

Castling uses encoded `x`/`y` values (`>= 10`) so replay can reconstruct rook motion without a separate move type field.

## Documentation sandbox

Agent-written docs stay under `AI-Generated/`. Product code under `src/` and `server/` is out of bounds for `@createdocs` file writes.
