# Play your first Chess game

This tutorial walks you through running Chess locally and completing a short game.

## Prerequisites

- Node.js and npm
- MongoDB Community running locally (default `mongodb://127.0.0.1:27017`)

## 1. Install dependencies

From the repo root:

```bash
# React client
npm install

# Express API
cd server
npm install
cd ..
```

## 2. Start MongoDB

Start the MongoDB community service so the API can connect to database `Chess`.

## 3. Start the API

```bash
cd server
node index.js
```

You should see `Server is running!` on port **3001**.

## 4. Start the React client

In another terminal, from the repo root:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## 5. Make a few moves

1. White moves first — click a white piece, then a destination square.
2. Alternate turns with black.
3. Try castling later by moving the king two squares toward a rook when the path is clear.
4. When a pawn reaches the last rank, choose a promotion piece.

## 6. Save the game (optional)

Use the save control in the UI. The client posts the move list to `POST http://localhost:3001/`. You can later open saved games from the server’s `/games` page.

You now have a local Chess stack running and can play and persist a game.
