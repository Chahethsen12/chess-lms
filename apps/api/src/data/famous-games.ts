export interface FamousGame {
  id: string;
  title: string;
  white: string;
  black: string;
  event: string;
  year: number;
  result: '1-0' | '0-1' | '1/2-1/2';
  pgn: string;
  description: string;
  keyMoments: Array<{
    moveNumber: number;
    fen: string;
    comment: string;
    isKey: boolean;
  }>;
  themes: string[];
}

export const FAMOUS_GAMES: FamousGame[] = [
  {
    id: 'morphy-opera',
    title: 'The Opera Game',
    white: 'Paul Morphy',
    black: 'Duke of Brunswick & Count Isouard',
    event: 'Paris Opera House',
    year: 1858,
    result: '1-0',
    pgn: '1. e4 e5 2. Nf3 d6 3. d4 Bg4 4. dxe5 Bxf3 5. Qxf3 dxe5 6. Bc4 Nf6 7. Qb3 Qe7 8. Nc3 c6 9. Bg5 b5 10. Nxb5 cxb5 11. Bxb5+ Nbd7 12. O-O-O Rd8 13. Rxd7 Rxd7 14. Rd1 Qe6 15. Bxd7+ Nxd7 16. Qb8+ Nxb8 17. Rd8#',
    description: 'Morphy demonstrates rapid development and devastating piece coordination in this brilliant miniature played during an opera performance.',
    keyMoments: [
      { moveNumber: 7, fen: 'r1bqkb1r/ppp2ppp/2n2n2/4p3/2B1P3/1Q3N2/PPP2PPP/RNB1K2R b KQkq - 0 7', comment: 'Morphy attacks f7 immediately, putting pressure on Black', isKey: true },
      { moveNumber: 13, fen: 'r2qkb1r/pp1n1ppp/4p3/1B2p1B1/4P3/1Q6/PPP2PPP/2KR3R b kq - 0 13', comment: 'The stunning Rxd7 sacrifice begins the combination', isKey: true },
      { moveNumber: 17, fen: '1n1Rkb1r/pp3ppp/4p3/4p3/4P3/1Q6/PPP2PPP/2K4R b k - 1 17', comment: 'A beautiful queen sacrifice leads to checkmate', isKey: true },
    ],
    themes: ['sacrifice', 'development', 'attack', 'mating-pattern'],
  },
  {
    id: 'kasparov-topalov',
    title: "Kasparov's Immortal",
    white: 'Garry Kasparov',
    black: 'Veselin Topalov',
    event: 'Wijk aan Zee',
    year: 1999,
    result: '1-0',
    pgn: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 Bg7 5. Qd2 c6 6. f3 b5 7. Nge2 Nbd7 8. Bh6 Bxh6 9. Qxh6 Bb7 10. a3 e5 11. O-O-O Qe7 12. Kb1 a6 13. Nc1 O-O-O 14. Nb3 exd4 15. Rxd4 c5 16. Rd1 Nb6 17. g3 Kb8 18. Na5 Ba8 19. Bh3 d5 20. Qf4+ Ka7 21. Rhe1 d4 22. Nd5 Nbxd5 23. exd5 Qd6 24. Rxd4 cxd4 25. Re7+ Kb6 26. Qxd4+ Kxa5 27. b4+ Ka4 28. Qc3 Qxd5 29. Ra7 Bb7 30. Rxb7 Qc4 31. Qxf6 Kxa3 32. Qxa6+ Kxb4 33. c3+ Kxc3 34. Qa1+ Kd2 35. Qb2+ Kd1 36. Bf1 Rd2 37. Rd7 Rxd7 38. Bxc4 bxc4 39. Qxh8 Rd3 40. Qa8 c3 41. Qa4+ Ke1 42. f4 f5 43. Kc1 Rd2 44. Qa7 1-0',
    description: "One of the most spectacular games ever played, featuring a king hunt where Black's king is chased from c8 to d1.",
    keyMoments: [
      { moveNumber: 24, fen: 'r2r2k1/1b2qp1p/pn3np1/N1ppP2Q/1pRP4/P4PP1/1PP4P/1K1R3B b - - 0 24', comment: 'Kasparov sacrifices the exchange to open lines', isKey: true },
      { moveNumber: 26, fen: '3r2k1/1b2Rp1p/pk3np1/N2pP2Q/1p1q4/P4PP1/1PP4P/1K5B b - - 0 26', comment: "The king hunt begins - Black's king will be chased across the board", isKey: true },
    ],
    themes: ['attack', 'king-hunt', 'sacrifice', 'calculation'],
  },
  {
    id: 'byrne-fischer',
    title: 'The Game of the Century',
    white: 'Donald Byrne',
    black: 'Bobby Fischer',
    event: 'Rosenwald Memorial',
    year: 1956,
    result: '0-1',
    pgn: '1. Nf3 Nf6 2. c4 g6 3. Nc3 Bg7 4. d4 O-O 5. Bf4 d5 6. Qb3 dxc4 7. Qxc4 c6 8. e4 Nbd7 9. Rd1 Nb6 10. Qc5 Bg4 11. Bg5 Na4 12. Qa3 Nxc3 13. bxc3 Nxe4 14. Bxe7 Qb6 15. Bc4 Nxc3 16. Bc5 Rfe8+ 17. Kf1 Be6 18. Bxb6 Bxc4+ 19. Kg1 Ne2+ 20. Kf1 Nxd4+ 21. Kg1 Ne2+ 22. Kf1 Nc3+ 23. Kg1 axb6 24. Qb4 Ra4 25. Qxb6 Nxd1 26. h3 Rxa2 27. Kh2 Nxf2 28. Re1 Rxe1 29. Qd8+ Bf8 30. Nxe1 Bd5 31. Nf3 Ne4 32. Qb8 b5 33. h4 h5 34. Ne5 Kg7 35. Kg1 Bc5+ 36. Kf1 Ng3+ 37. Ke1 Bb4+ 38. Kd1 Bb3+ 39. Kc1 Ne2+ 40. Kb1 Nc3+ 41. Kc1 Ra1# 0-1',
    description: 'A 13-year-old Bobby Fischer plays one of the most brilliant games in chess history, featuring a stunning queen sacrifice.',
    keyMoments: [
      { moveNumber: 17, fen: 'r3r1k1/pp3pbp/2p3p1/2B1P3/2B5/q1n2N2/P4PPP/3RK2R b K - 0 17', comment: 'Fischer sacrifices his queen with ...Be6!!', isKey: true },
      { moveNumber: 19, fen: 'r3r1k1/pp3pbp/1Qp3p1/8/2b5/2n2N2/P4PPP/3R1K1R b - - 0 19', comment: 'The combination continues with a knight windmill', isKey: true },
    ],
    themes: ['queen-sacrifice', 'combination', 'windmill', 'prodigy'],
  },
  {
    id: 'anderssen-kieseritzky',
    title: 'The Immortal Game',
    white: 'Adolf Anderssen',
    black: 'Lionel Kieseritzky',
    event: 'London',
    year: 1851,
    result: '1-0',
    pgn: '1. e4 e5 2. f4 exf4 3. Bc4 Qh4+ 4. Kf1 b5 5. Bxb5 Nf6 6. Nf3 Qh6 7. d3 Nh5 8. Nh4 Qg5 9. Nf5 c6 10. g4 Nf6 11. Rg1 cxb5 12. h4 Qg6 13. h5 Qg5 14. Qf3 Ng8 15. Bxf4 Qf6 16. Nc3 Bc5 17. Nd5 Qxb2 18. Bd6 Bxg1 19. e5 Qxa1+ 20. Ke2 Na6 21. Nxg7+ Kd8 22. Qf6+ Nxf6 23. Be7# 1-0',
    description: 'Anderssen sacrifices both rooks and his queen in one of the most famous attacking games ever played.',
    keyMoments: [
      { moveNumber: 18, fen: 'rn2kb1r/p1pp1ppp/3B1n2/1p1N3P/4P1P1/3P4/PqP5/R3K1R1 b Qkq - 0 18', comment: 'Anderssen sacrifices his first rook with Bd6!', isKey: true },
      { moveNumber: 23, fen: 'r1b1k1b1/p1pp1pNp/n4n2/1p2P2P/6P1/3P4/P1P5/q3KB2 b q - 0 23', comment: 'The final position - checkmate with a quiet bishop move after sacrificing the queen', isKey: true },
    ],
    themes: ['gambit', 'sacrifice', 'attack', 'romantic-chess'],
  },
  {
    id: 'carlsen-anand-2013',
    title: 'Carlsen Becomes Champion',
    white: 'Magnus Carlsen',
    black: 'Viswanathan Anand',
    event: 'World Championship',
    year: 2013,
    result: '1-0',
    pgn: '1. Nf3 d5 2. g3 g6 3. c4 dxc4 4. Qa4+ Nc6 5. Bg2 Bg7 6. Nc3 e5 7. Qxc4 Nge7 8. O-O O-O 9. d3 h6 10. Bd2 Nd4 11. Nxd4 exd4 12. Ne4 c6 13. Bb4 Be6 14. Qc1 Bd5 15. a4 b6 16. Bxe7 Qxe7 17. a5 Rab8 18. Re1 Rfc8 19. axb6 axb6 20. Qf4 Rd8 21. h4 Kh7 22. Nd2 Be5 23. Qg4 h5 24. Qh3 Be6 25. Qh1 c5 26. Ne4 Kg7 27. Ng5 b5 28. e3 dxe3 29. Rxe3 Bd4 30. Re2 c4 31. Nxe6+ fxe6 32. Be4 cxd3 33. Rd2 Qb4 34. Rad1 Bxb2 35. Qf3 Bf6 36. Rxd3 Rxd3 37. Rxd3 Rd8 38. Rxd8 Bxd8 39. Bd3 Qd4 40. Bxb5 Qf6 41. Qb7+ Be7 42. Kg2 g5 43. hxg5 Qxg5 44. Bc4 h4 45. Qc7 hxg3 46. Qxe7+ Kh6 47. fxg3 Qe5 48. Kf2 Qf5+ 49. Qf6+ Qxf6+ 50. Kxf6 Kg5 51. Bxe6 1-0',
    description: "The game that made Magnus Carlsen World Champion, showing his trademark technical endgame mastery.",
    keyMoments: [
      { moveNumber: 44, fen: '8/2Q1bpk1/4p3/1p4q1/2B4p/6P1/5PK1/8 b - - 0 44', comment: "Carlsen's Bc4 sets up the winning endgame", isKey: true },
    ],
    themes: ['endgame', 'technique', 'world-championship'],
  },
  {
    id: 'karpov-kasparov-1985',
    title: 'The Octopus Knight',
    white: 'Anatoly Karpov',
    black: 'Garry Kasparov',
    event: 'World Championship',
    year: 1985,
    result: '0-1',
    pgn: '1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nb5 d6 6. c4 Nf6 7. N1c3 a6 8. Na3 d5 9. cxd5 exd5 10. exd5 Nb4 11. Be2 Bc5 12. O-O O-O 13. Bf3 Bf5 14. Bg5 Re8 15. Qd2 b5 16. Rad1 Nd3 17. Nab1 h6 18. Bh4 b4 19. Na4 Bd6 20. Bg3 Rc8 21. b3 g5 22. Bxd6 Qxd6 23. g3 Nd7 24. Bg2 Qf6 25. a3 a5 26. axb4 axb4 27. Qa2 Bg6 28. d6 g4 29. Qd2 Kg7 30. f3 Qxd6 31. fxg4 Qd4+ 32. Kh1 Nf6 33. Rf4 Ne4 34. Qxd3 Nf2+ 35. Rxf2 Bxd3 36. Rfd2 Qe3 37. Rxd3 Rc1 38. Nb2 Qf2 39. Nd2 Rxd1+ 40. Nxd1 Re1+ 0-1',
    description: "Kasparov's knight on d3 dominates the position like an octopus with its tentacles reaching everywhere.",
    keyMoments: [
      { moveNumber: 16, fen: 'r1bqr1k1/5ppp/p4n2/1p1P1b2/1nB5/P1N2B2/1P1Q1PPP/R2R2K1 b - - 0 16', comment: 'The legendary Nd3 move - the octopus knight takes its position', isKey: true },
    ],
    themes: ['positional', 'knight', 'world-championship', 'piece-placement'],
  },
  {
    id: 'tal-hjartarson-1988',
    title: "Tal's Last Brilliancy",
    white: 'Mikhail Tal',
    black: 'Johann Hjartarson',
    event: 'World Cup',
    year: 1988,
    result: '1-0',
    pgn: '1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. Nc3 d6 6. Be2 Nf6 7. O-O Be7 8. Be3 O-O 9. f4 e5 10. Nb3 exf4 11. Bxf4 Be6 12. Qd2 d5 13. exd5 Nxd5 14. Nxd5 Qxd5 15. Qxd5 Bxd5 16. Bc4 Be6 17. Rad1 Rad8 18. Rxd8 Rxd8 19. Bxe6 fxe6 20. Nc5 Bxc5+ 21. Bxc5 Rd5 22. b4 Kf7 23. a4 a6 24. Rf3 Ke8 25. Rg3 Kf7 26. h4 h6 27. Kf2 Ke8 28. Kf3 Kf7 29. Ke4 Rd1 30. Kf5 Rf1+ 31. Ke5 Re1+ 32. Kd6 Rd1+ 33. Ke7 1-0',
    description: 'The Magician from Riga shows his attacking genius one last time before his health declined.',
    keyMoments: [
      { moveNumber: 32, fen: '8/4Rkpp/p1nKp2p/2B5/Pp5P/6R1/2P3P1/3r4 b - - 0 32', comment: "Tal's king marches forward - Ke7 threatens unstoppable promotion ideas", isKey: true },
    ],
    themes: ['attack', 'king-activity', 'endgame', 'calculation'],
  },
  {
    id: 'capablanca-marshall-1918',
    title: "Marshall's Gift",
    white: 'Jose Raul Capablanca',
    black: 'Frank Marshall',
    event: 'New York',
    year: 1918,
    result: '1-0',
    pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d5 9. exd5 Nxd5 10. Nxe5 Nxe5 11. Rxe5 Nf6 12. Re1 Bd6 13. h3 Ng4 14. Qf3 Qh4 15. d4 Nxf2 16. Re2 Bg4 17. hxg4 Bh2+ 18. Kf1 Bg3 19. Rxf2 Qh1+ 20. Ke2 Bxf2 21. Bd2 Bh4 22. Qh3 Rae8+ 23. Kd3 Qf1+ 24. Kc2 Bf2 25. Qf3 Qg1 26. Bd5 c5 27. dxc5 Bxc5 28. b4 Bd6 29. a4 a5 30. axb5 axb4 31. Ra6 bxc3 32. Nxc3 Bb4 33. b6 Bxc3 34. Bxc3 h6 35. b7 Re3 36. Bxf7+ 1-0',
    description: 'Marshall unveils his famous gambit against Capablanca, who defends brilliantly to convert the win.',
    keyMoments: [
      { moveNumber: 8, fen: 'r1bq1rk1/2pp1ppp/p1n2n2/1pb1p3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 b - - 0 8', comment: 'The Marshall Attack begins - a gambit Marshall had prepared for years', isKey: true },
    ],
    themes: ['gambit', 'defense', 'opening-theory', 'preparation'],
  },
  {
    id: 'deep-blue-kasparov-1997',
    title: 'The Machine Wins',
    white: 'Deep Blue',
    black: 'Garry Kasparov',
    event: 'IBM Match',
    year: 1997,
    result: '1-0',
    pgn: '1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nd7 5. Ng5 Ngf6 6. Bd3 e6 7. N1f3 h6 8. Nxe6 Qe7 9. O-O fxe6 10. Bg6+ Kd8 11. Bf4 b5 12. a4 Bb7 13. Re1 Nd5 14. Bg3 Kc8 15. axb5 cxb5 16. Qd3 Bc6 17. Bf5 exf5 18. Rxe7 Bxe7 19. c4 1-0',
    description: 'The historic game where a computer first defeated the reigning World Champion in a match.',
    keyMoments: [
      { moveNumber: 8, fen: 'r1bqkb1r/pp1n1pp1/2p1pn1p/6N1/3PP3/3B4/PPP2PPP/R1BQK2R w KQkq - 0 8', comment: 'Nxe6! The shocking sacrifice that caught Kasparov off guard', isKey: true },
      { moveNumber: 19, fen: '2kr3r/p3b1p1/2b4p/1p3p2/2PP4/3Q2B1/1P3PPP/4R1K1 b - - 0 19', comment: 'c4 - a quiet but crushing move, Kasparov resigned', isKey: true },
    ],
    themes: ['computer-chess', 'sacrifice', 'historic', 'calculation'],
  },
  {
    id: 'fischer-spassky-1972',
    title: "Game 6 - Fischer's Masterpiece",
    white: 'Bobby Fischer',
    black: 'Boris Spassky',
    event: 'World Championship',
    year: 1972,
    result: '1-0',
    pgn: '1. c4 e6 2. Nf3 d5 3. d4 Nf6 4. Nc3 Be7 5. Bg5 O-O 6. e3 h6 7. Bh4 b6 8. cxd5 Nxd5 9. Bxe7 Qxe7 10. Nxd5 exd5 11. Rc1 Be6 12. Qa4 c5 13. Qa3 Rc8 14. Bb5 a6 15. dxc5 bxc5 16. O-O Ra7 17. Be2 Nd7 18. Nd4 Qf8 19. Nxe6 fxe6 20. e4 d4 21. f4 Qe7 22. e5 Rb8 23. Bc4 Kh8 24. Qh3 Nf8 25. b3 a5 26. f5 exf5 27. Rxf5 Nh7 28. Rcf1 Qd8 29. Qg3 Re7 30. h4 Rbb7 31. e6 Rbc7 32. Qe5 Qe8 33. a4 Qd8 34. R1f2 Qe8 35. R2f3 Qd8 36. Bd3 Qe8 37. Qe4 Nf6 38. Rxf6 gxf6 39. Rxf6 Kg8 40. Bc4 Kh8 41. Qf4 1-0',
    description: 'Fischer plays the English Opening for the first time in his career and creates a masterpiece.',
    keyMoments: [
      { moveNumber: 1, fen: 'rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq c3 0 1', comment: '1.c4! Fischer surprises everyone by abandoning his beloved 1.e4', isKey: true },
      { moveNumber: 38, fen: '4q2k/2r1r2p/4Pp1p/p1pQ1R2/P1Bp3P/1P6/6P1/5R1K b - - 0 38', comment: 'Rxf6! The exchange sacrifice breaks through', isKey: true },
    ],
    themes: ['positional', 'pawn-structure', 'world-championship', 'exchange-sacrifice'],
  },
];

export function getFamousGameById(id: string): FamousGame | undefined {
  return FAMOUS_GAMES.find(game => game.id === id);
}

export function getFamousGamesByTheme(theme: string): FamousGame[] {
  return FAMOUS_GAMES.filter(game => game.themes.includes(theme));
}

export function getAllFamousGames(): FamousGame[] {
  return FAMOUS_GAMES;
}
