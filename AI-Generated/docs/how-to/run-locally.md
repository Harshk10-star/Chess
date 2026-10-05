# Run Chess locally

## Goal

Start the React client, Express API, and MongoDB so you can play and save games.

## Steps

1. Install MongoDB Community and ensure it listens on `127.0.0.1:27017`.
2. Install client deps at the repo root: `npm install`.
3. Install API deps: `cd server && npm install`.
4. Start the API: `node index.js` (port **3001**).
5. Start the client: from repo root, `npm start` (port **3000**).

## Preconditions

- Ports 3000 and 3001 are free.
- CORS is enabled on the API; the client calls `http://localhost:3001`.

## Pitfalls

- If MongoDB is down, `POST /` save calls fail even though the board still works in-memory.
- The API database name is hard-coded as `Chess`.
