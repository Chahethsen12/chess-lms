// Famous chess games with AI annotations
export interface FamousGame {
  id: string;
  title: string;
  white: string;
  black: string;
  event: string;
  year: number;
  result: string;
  pgn: string;
  description: string;
  annotations?: Record<number, string>;
}

export const famousGames: FamousGame[] = [
  {
    id: 'immortal',
    title: 'The Immortal Game',
    white: 'Adolf Anderssen',
    black: 'Lionel Kieseritzky',
    event: 'Casual Game, London',
    year: 1851,
    result: '1-0',
    pgn: '1.e4 e5 2.f4 exf4 3.Bc4 Qh4+ 4.Kf1 b5 5.Bxb5 Nf6 6.Nf3 Qh6 7.d3 Nh5 8.Nh4 Qg5 9.Nf5 c6 10.g4 Nf6 11.Rg1 cxb5 12.h4 Qg6 13.h5 Qg5 14.Qf3 Ng8 15.Bxf4 Qf6 16.Nc3 Bc5 17.Nd5 Qxb2 18.Bd6 Bxg1 19.e5 Qxa1+ 20.Ke2 Na6 21.Nxg7+ Kd8 22.Qf6+ Nxf6 23.Be7#',
    description: 'Anderssen sacrifices both rooks, a bishop, and his queen to deliver checkmate. A masterpiece of romantic chess.',
    annotations: {
      16: 'Sacrificing the rook to open lines',
      17: 'Another piece sacrifice!',
      18: 'The bishop joins the attack',
      20: 'Setting up the final combination',
      22: 'Beautiful checkmate pattern'
    }
  },
  {
    id: 'evergreen',
    title: 'The Evergreen Game',
    white: 'Adolf Anderssen',
    black: 'Jean Dufresne',
    event: 'Casual Game, Berlin',
    year: 1852,
    result: '1-0',
    pgn: '1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.b4 Bxb4 5.c3 Ba5 6.d4 exd4 7.O-O d3 8.Qb3 Qf6 9.e5 Qg6 10.Re1 Nge7 11.Ba3 b5 12.Qxb5 Rb8 13.Qa4 Bb6 14.Nbd2 Bb7 15.Ne4 Qf5 16.Bxd3 Qh5 17.Nf6+ gxf6 18.exf6 Rg8 19.Rad1 Qxf3 20.Rxe7+ Nxe7 21.Qxd7+ Kxd7 22.Bf5+ Ke8 23.Bd7+ Kf8 24.Bxe7#',
    description: 'Another Anderssen masterpiece featuring a brilliant queen sacrifice and forced checkmate.',
    annotations: {
      19: 'The queen sacrifice begins',
      20: 'Rook takes on e7 with check',
      21: 'Queen sacrifice!',
      24: 'Beautiful bishop checkmate'
    }
  },
  {
    id: 'opera',
    title: 'The Opera Game',
    white: 'Paul Morphy',
    black: 'Duke of Brunswick & Count Isouard',
    event: 'Paris Opera House',
    year: 1858,
    result: '1-0',
    pgn: '1.e4 e5 2.Nf3 d6 3.d4 Bg4 4.dxe5 Bxf3 5.Qxf3 dxe5 6.Bc4 Nf6 7.Qb3 Qe7 8.Nc3 c6 9.Bg5 b5 10.Nxb5 cxb5 11.Bxb5+ Nbd7 12.O-O-O Rd8 13.Rxd7 Rxd7 14.Rd1 Qe6 15.Bxd7+ Nxd7 16.Qb8+ Nxb8 17.Rd8#',
    description: 'Morphy plays a perfect attacking game against two consultation players during an opera performance.',
    annotations: {
      12: 'Rook enters with devastating effect',
      13: 'Exchange sacrifice for the attack',
      15: 'Clearing the way for the queen',
      16: 'Queen sacrifice!',
      17: 'Smothered mate-like finish'
    }
  },
  {
    id: 'kasparov-topalov',
    title: 'Kasparov\'s Immortal',
    white: 'Garry Kasparov',
    black: 'Veselin Topalov',
    event: 'Hoogovens Wijk aan Zee',
    year: 1999,
    result: '1-0',
    pgn: '1.e4 d6 2.d4 Nf6 3.Nc3 g6 4.Be3 Bg7 5.Qd2 c6 6.f3 b5 7.Nge2 Nbd7 8.Bh6 Bxh6 9.Qxh6 Bb7 10.a3 e5 11.O-O-O Qe7 12.Kb1 a6 13.Nc1 O-O-O 14.Nb3 exd4 15.Rxd4 c5 16.Rd1 Nb6 17.g3 Kb8 18.Na5 Ba8 19.Bh3 d5 20.Qf4+ Ka7 21.Rhe1 d4 22.Nd5 Nbxd5 23.exd5 Qd6 24.Rxd4 cxd4 25.Re7+ Kb6 26.Qxd4+ Kxa5 27.b4+ Ka4 28.Qc3 Qxd5 29.Ra7 Bb7 30.Rxb7 Qc4 31.Qxf6 Kxa3 32.Qxa6+ Kxb4 33.c3+ Kxc3 34.Qa1+ Kd2 35.Qb2+ Kd1 36.Bf1 Rd2 37.Rd7 Rxd7 38.Bxc4 bxc4 39.Qxh8 Rd3 40.Qa8 c3 41.Qa4+ Ke1 42.f4 f5 43.Kc1 Rd2 44.Qa7',
    description: 'Kasparov sacrifices his rook and chases the black king across the entire board for a stunning win.',
    annotations: {
      24: 'Rook sacrifice to expose the king',
      26: 'King hunt begins!',
      27: 'Driving the king further up',
      32: 'King on a6 - incredible position',
      33: 'The king keeps running'
    }
  },
  {
    id: 'game-of-century',
    title: 'Game of the Century',
    white: 'Donald Byrne',
    black: 'Bobby Fischer',
    event: 'Rosenwald Memorial',
    year: 1956,
    result: '0-1',
    pgn: '1.Nf3 Nf6 2.c4 g6 3.Nc3 Bg7 4.d4 O-O 5.Bf4 d5 6.Qb3 dxc4 7.Qxc4 c6 8.e4 Nbd7 9.Rd1 Nb6 10.Qc5 Bg4 11.Bg5 Na4 12.Qa3 Nxc3 13.bxc3 Nxe4 14.Bxe7 Qb6 15.Bc4 Nxc3 16.Bc5 Rfe8+ 17.Kf1 Be6 18.Bxb6 Bxc4+ 19.Kg1 Ne2+ 20.Kf1 Nxd4+ 21.Kg1 Ne2+ 22.Kf1 Nc3+ 23.Kg1 axb6 24.Qb4 Ra4 25.Qxb6 Nxd1 26.h3 Rxa2 27.Kh2 Nxf2 28.Re1 Rxe1 29.Qd8+ Bf8 30.Nxe1 Bd5 31.Nf3 Ne4 32.Qb8 b5 33.h4 h5 34.Ne5 Kg7 35.Kg1 Bc5+ 36.Kf1 Ng3+ 37.Ke1 Bb4+ 38.Kd1 Bb3+ 39.Kc1 Ne2+ 40.Kb1 Nc3+ 41.Kc1 Rc2#',
    description: '13-year-old Bobby Fischer plays a brilliant queen sacrifice against a grandmaster.',
    annotations: {
      17: 'Queen sacrifice incoming!',
      18: 'The queen is taken',
      19: 'Knight check starts the combination',
      41: 'Beautiful checkmate by the young Fischer'
    }
  },
  {
    id: 'deep-blue',
    title: 'Deep Blue vs Kasparov Game 6',
    white: 'Deep Blue',
    black: 'Garry Kasparov',
    event: 'IBM Man vs Machine',
    year: 1997,
    result: '1-0',
    pgn: '1.e4 c6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Nd7 5.Ng5 Ngf6 6.Bd3 e6 7.N1f3 h6 8.Nxe6 Qe7 9.O-O fxe6 10.Bg6+ Kd8 11.Bf4 b5 12.a4 Bb7 13.Re1 Nd5 14.Bg3 Kc8 15.axb5 cxb5 16.Qd3 Bc6 17.Bf5 exf5 18.Rxe7 Bxe7 19.c4',
    description: 'The decisive game where Deep Blue defeated the world champion, marking a historic moment in AI.',
    annotations: {
      8: 'Shocking knight sacrifice',
      10: 'Bishop delivers check on g6',
      18: 'Kasparov resigns - a historic moment'
    }
  },
  {
    id: 'tal-miller',
    title: 'Tal\'s Magic',
    white: 'Mikhail Tal',
    black: 'Larry Miller',
    event: 'US Open',
    year: 1988,
    result: '1-0',
    pgn: '1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Bg5 e6 7.f4 Be7 8.Qf3 Qc7 9.O-O-O Nbd7 10.g4 b5 11.Bxf6 Nxf6 12.g5 Nd7 13.f5 Nc5 14.f6 gxf6 15.gxf6 Bf8 16.Rg1 h5 17.Qh3 Bb7 18.Bh3 O-O-O 19.Nf5 exf5 20.Nd5 Bxd5 21.Rxd5 Ne6 22.Bg2 Kb8 23.Rd3 Qb6 24.Rb3 Qa5 25.exf5 Nc5 26.Ra3 Qc7 27.Qxh5 d5 28.Qf3 Be7 29.Qxd5 Rxd5 30.Bxd5 Bxf6 31.Rg8+ Rxg8 32.Bxg8',
    description: 'The Magician from Riga demonstrates his legendary attacking style.',
    annotations: {
      13: 'Typical Tal pawn sacrifice',
      14: 'Opening up the position',
      19: 'Knight sacrifice on f5!'
    }
  },
  {
    id: 'carlsen-anand',
    title: 'Carlsen Becomes Champion',
    white: 'Magnus Carlsen',
    black: 'Viswanathan Anand',
    event: 'World Championship',
    year: 2013,
    result: '1-0',
    pgn: '1.Nf3 d5 2.g3 g6 3.Bg2 Bg7 4.d4 c6 5.O-O Nf6 6.b3 O-O 7.Bb2 Bf5 8.c4 Nbd7 9.Nc3 dxc4 10.bxc4 Nb6 11.c5 Nc4 12.Bc1 Nd5 13.Qb3 Na5 14.Qa3 Nc4 15.Qb3 Na5 16.Qa3 Nc4 17.Qb3 a5 18.Nxd5 cxd5 19.Ba3 Be4 20.Rac1 Na3 21.Qxa3 Bxf3 22.Bxf3 e6 23.e3 Re8 24.Bb5 Ra6 25.Rc3 Qg5 26.Bd7 Ree6 27.Rcc1 e5 28.Be1 exd4 29.exd4 Re4 30.Bf3 Re7 31.c6 Rxc6 32.Rxc6 bxc6 33.Qa4 Qd8 34.Rc1 c5 35.Qxa5 cxd4 36.Rxc8 Qxc8 37.Qxd5 Re1 38.Qd7 Qxd7 39.Bxd7 Rd1 40.Bc6 d3 41.Kf1 Bf6 42.Ke1 Rc1 43.Kd2 Rc2+ 44.Kd1 Rxa2 45.Be3 Kg7 46.Bxd3',
    description: 'Carlsen clinches his first World Championship title in the 5th game of the match.',
    annotations: {
      35: 'Winning the d-pawn',
      40: 'Carlsen converts the endgame',
      46: 'Anand resigns - Carlsen is champion!'
    }
  },
  {
    id: 'polgar-kasparov',
    title: 'Polgar Beats Kasparov',
    white: 'Judit Polgar',
    black: 'Garry Kasparov',
    event: 'Russia vs Rest of World',
    year: 2002,
    result: '1-0',
    pgn: '1.e4 e5 2.Nf3 Nc6 3.Bb5 Nf6 4.O-O Nxe4 5.d4 Nd6 6.Bxc6 dxc6 7.dxe5 Nf5 8.Qxd8+ Kxd8 9.Nc3 Ke8 10.h3 Be7 11.Bg5 Bxg5 12.Nxg5 h6 13.Nf3 Be6 14.Rad1 Rd8 15.Rfe1 Rxd1 16.Rxd1 Ke7 17.Nd4 Nxd4 18.Rxd4 Rd8 19.Rxd8 Kxd8 20.f4 Kc8 21.Kf2 Kb8 22.Ke3 Kc8 23.Ne2 Kd7 24.Nd4 Bd5 25.g4 Ke7 26.Nb3 g5 27.c3 gxf4+ 28.Kxf4 c5 29.Nd2 Ke6 30.a3 c6 31.Nc4 c4 32.Nd6 Be6 33.Nb5 a6 34.Nc7+ Kf5 35.Nxe6 Kxe6 36.Ke4 f5+ 37.gxf5+ Kf7 38.Kd5 b5 39.e6+ Kf6 40.Kc6 Ke7 41.Kb6 h5 42.Kxa6',
    description: 'The greatest female chess player beats the world champion Kasparov.',
    annotations: {
      33: 'Polgar takes control',
      39: 'The e-pawn becomes decisive',
      42: 'Historic victory!'
    }
  },
  {
    id: 'spassky-fischer',
    title: 'Fischer\'s Poisoned Pawn',
    white: 'Boris Spassky',
    black: 'Bobby Fischer',
    event: 'World Championship, Reykjavik',
    year: 1972,
    result: '0-1',
    pgn: '1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Bg5 e6 7.f4 Qb6 8.Qd2 Qxb2 9.Nb3 Qa3 10.Bd3 Be7 11.O-O Nbd7 12.Kh1 h6 13.Bh4 g5 14.fxg5 Nh5 15.Rab1 Qxa2 16.Nxa2 Bxg5 17.Bxg5 hxg5 18.Nc3 Ndf6 19.e5 dxe5 20.Ne4 Rh4 21.Nxf6+ Nxf6 22.Qc3 e4 23.Be2 Nd5 24.Qa3 f5 25.c4 Nf4 26.Bg4 Kf7 27.Bxf5 exf5 28.Nc5 Bd7 29.Qc3 a5 30.Nd3 Ra6 31.Nxf4 gxf4 32.Qd4 f3 33.Qf6+ Ke8 34.gxf3 Rf4 35.fxe4 fxe4 36.Qa1 Rf3 37.Rxb7 Bc6 38.Rb1 e3 39.Qc3 Rxf1+ 40.Rxf1 a4 41.Rf3 Bd5',
    description: 'Fischer plays the risky Poisoned Pawn variation and defeats the World Champion.',
    annotations: {
      7: 'The Poisoned Pawn variation',
      8: 'Fischer takes the pawn!',
      41: 'Spassky resigns - Fischer takes the lead'
    }
  }
];
