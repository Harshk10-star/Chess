# HTTP API reference

Base URL (local): `http://localhost:3001`

## `POST /`

Save a game’s move list.

**Body (JSON):**

```json
{
  "moves": [
    {
      "beforeX": 6,
      "beforeY": 4,
      "piece": "wpawn",
      "x": 4,
      "y": 4
    }
  ]
}
```

**Behavior:** Creates a `chessGame` document with `movesP` set to `moves`. No response body contract is relied on by the client beyond HTTP success.

## `GET /games`

Lists saved games as an HTML page (`views/games.ejs`).

Each list item links to:

```text
http://localhost:3000/chess-game/<mongoId>?moves=<encodeURIComponent(JSON.stringify(movesP))>
```

## MongoDB

- Connection: `mongodb://127.0.0.1:27017/Chess`
- Model name: `chessGame`
- Schema field: `movesP[]` with `beforeX`, `beforeY`, `piece`, `x`, `y` (numbers/string)
