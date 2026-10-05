# Board, pieces, and move encoding

## Board

- `positions` is an 8×8 array: row `0` is black’s back rank, row `7` is white’s.
- Empty squares are `null`.

## Piece IDs

Prefix `w` = white, `b` = black:

| ID | Piece |
| --- | --- |
| `wpawn` / `bpawn` | Pawn |
| `wrook` / `brook` | Rook |
| `wknight` / `bknight` | Knight |
| `wbishop` / `bbishop` | Bishop |
| `wqueen` / `bqueen` | Queen |
| `wking` / `bking` | King |

## Move object

```ts
{
  beforeX: number; // from row
  beforeY: number; // from col
  piece: string;   // piece id after move / promotion
  x: number;       // to row (or encoded castling)
  y: number;       // to col (or encoded castling)
}
```

## Castling encoding

When castling, destination coordinates are encoded as values `>= 10` so replay can restore rook placement:

| Side | Castle | Encoded `(x, y)` used when recording |
| --- | --- | --- |
| White | Queenside (left) | `(17, 12)` |
| White | Kingside (right) | `(17, 16)` |
| Black | Queenside (left) | `(10, 12)` |
| Black | Kingside (right) | `(10, 16)` |

`GameView` decodes with `x % 10` / `y % 10` for the king’s landing square.

## Client routes

| Path | Component | Purpose |
| --- | --- | --- |
| `/` | `Main` | Live game |
| `/chess-game/:id` | `GameView` | Replay via `?moves=` query |
