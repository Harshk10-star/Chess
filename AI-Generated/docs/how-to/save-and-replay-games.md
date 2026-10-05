# Save a game and replay it

## Goal

Persist a played game to MongoDB and open it in the replay view.

## Steps

1. Play moves on `/` until you want to store the game.
2. Trigger save in the UI (posts `{ moves }` to `POST http://localhost:3001/`).
3. Open `http://localhost:3001/games` to see stored games.
4. Click a game link. It opens  
   `http://localhost:3000/chess-game/<id>?moves=<urlencoded JSON>`  
   where `GameView` reconstructs the board with forward/back controls.

## Preconditions

- API and MongoDB are running.
- The client move list shape matches `{ beforeX, beforeY, piece, x, y }`.

## Pitfalls

- Castle moves encode destination as values `>= 10` (see move encoding reference). Replay logic depends on that convention.
- `GET /games` returns an EJS HTML page, not JSON — use the rendered links, not a raw API client expecting JSON.
