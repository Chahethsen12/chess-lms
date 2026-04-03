import { Module } from './types.js';

export const level2Modules: Module[] = [
  {
    id: 'M2.1',
    level: 2,
    title: 'Opening Principles',
    description: 'Master the three golden rules of chess openings: center control, piece development, and king safety.',
    order: 1,
    xpReward: 120,
    prerequisites: ['M1.6'],
    content: {
      overview: 'The opening phase sets the stage for the entire game. Strong players follow time-tested principles: control the center, develop pieces quickly, and castle early to protect the king. These principles will guide you in any opening position.',
      sections: [
        {
          title: 'Control the Center',
          content: `The four central squares (d4, d5, e4, e5) are the most important real estate on the board. Pieces placed in or near the center:

- **Control more squares** - A knight on e4 attacks 8 squares; a knight on a1 attacks only 2
- **Have more mobility** - Central pieces can quickly reach either side of the board
- **Exert pressure** - Central pawns restrict enemy piece movement

**Key Moves:** 1.e4, 1.d4, 1.Nf3, 1.c4 are all excellent opening moves that fight for the center.

**Avoid:** Moving the same piece twice in the opening, or playing too many pawn moves without developing pieces.`,
          fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1',
          highlights: [
            { square: 'd4', color: 'rgba(79, 152, 163, 0.5)' },
            { square: 'd5', color: 'rgba(79, 152, 163, 0.5)' },
            { square: 'e4', color: 'rgba(232, 175, 52, 0.5)' },
            { square: 'e5', color: 'rgba(79, 152, 163, 0.5)' },
          ],
        },
        {
          title: 'Develop Your Pieces',
          content: `Development means moving your pieces from their starting squares to active positions. Follow this order:

1. **Open with a center pawn** (e4 or d4)
2. **Develop knights before bishops** - Knights have only one good square initially; bishops can wait
3. **Don't move the queen too early** - She can be chased around by enemy pieces
4. **Connect your rooks** - Castle and move the queen so rooks can see each other

**The "Move Every Piece Once" Rule:** Try to develop all your minor pieces (knights and bishops) before moving any piece twice.

**Development Count:** After 10 moves, you should have at least 4 pieces developed plus castled.`,
          fen: 'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
          arrows: [
            { from: 'b1', to: 'c3', color: 'green' },
            { from: 'c1', to: 'g5', color: 'green' },
          ],
        },
        {
          title: 'King Safety - Castling',
          content: `Castling accomplishes two goals at once:

1. **Moves the king to safety** - Away from the open center files
2. **Activates the rook** - Brings it toward the center

**When to Castle:**
- Castle early (usually within the first 10 moves)
- Castle before launching an attack
- Castle before opening the center

**Kingside vs Queenside:**
- **Kingside (O-O):** Faster (king moves only 2 squares), usually safer
- **Queenside (O-O-O):** Takes longer to set up, but rook lands on d-file immediately

**Warning Signs - Don't Castle Into:**
- Open files pointing at your king
- Advanced enemy pawns near your castled position
- A strong enemy attack already brewing`,
          fen: 'r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 5 5',
          arrows: [
            { from: 'e1', to: 'g1', color: 'blue' },
            { from: 'h1', to: 'f1', color: 'blue' },
          ],
        },
        {
          title: 'Common Opening Mistakes',
          content: `Avoid these beginner traps:

**1. Moving the same piece multiple times**
\`\`\`
1.e4 e5 2.Nf3 Nc6 3.Ng5?? 
\`\`\`
Moving the knight twice while other pieces sit idle.

**2. Bringing the queen out early**
\`\`\`
1.e4 e5 2.Qh5?!
\`\`\`
The queen can be chased: 2...Nc6 3.Bc4 g6 4.Qf3 Nf6 - Black develops with tempo.

**3. Neglecting development for pawn moves**
\`\`\`
1.e4 e5 2.a3?! a6?! 3.h3?! h6?!
\`\`\`
Both sides waste time on pointless pawn moves.

**4. Delaying castling**
Leaving the king in the center invites tactical disasters.`,
          fen: 'r1bqkbnr/pppp1ppp/2n5/4p2Q/4P3/8/PPPP1PPP/RNB1KBNR b KQkq - 1 2',
        },
      ],
      keyConceptBoards: [
        {
          title: 'Ideal Development',
          fen: 'r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 w - - 0 8',
          description: 'Both sides have followed opening principles: center pawns advanced, all minor pieces developed, and kings castled to safety.',
          highlights: [
            { square: 'd4', color: 'rgba(79, 152, 163, 0.3)' },
            { square: 'e4', color: 'rgba(79, 152, 163, 0.3)' },
            { square: 'd5', color: 'rgba(79, 152, 163, 0.3)' },
            { square: 'e5', color: 'rgba(79, 152, 163, 0.3)' },
          ],
        },
        {
          title: 'Poor Development Example',
          fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P2Q/8/PPPP1PPP/RNB1KBNR b KQkq - 1 2',
          description: 'White has brought the queen out too early. After 2...Nc6, Black develops with tempo by threatening the queen.',
          arrows: [
            { from: 'b8', to: 'c6', color: 'green' },
            { from: 'c6', to: 'h4', color: 'red' },
          ],
        },
      ],
      quizQuestions: [
        {
          id: 'M2.1-Q1',
          question: 'What are the four central squares that you should fight to control?',
          type: 'multiple_choice',
          options: ['a1, a8, h1, h8', 'd4, d5, e4, e5', 'c3, c6, f3, f6', 'b2, b7, g2, g7'],
          correctAnswer: 'd4, d5, e4, e5',
          explanation: 'The central squares d4, d5, e4, and e5 are the most important squares to control in the opening.',
        },
        {
          id: 'M2.1-Q2',
          question: 'Which pieces should generally be developed before bishops?',
          type: 'multiple_choice',
          options: ['Queens', 'Rooks', 'Knights', 'Pawns'],
          correctAnswer: 'Knights',
          explanation: 'Knights should be developed before bishops because knights typically have only one or two good developing squares, while bishops have more flexibility.',
        },
        {
          id: 'M2.1-Q3',
          question: 'Why is it bad to bring the queen out early?',
          type: 'multiple_choice',
          options: ['The queen moves too slowly', 'The queen can be attacked and chased, losing time', 'The queen is too powerful', 'The queen should protect the king'],
          correctAnswer: 'The queen can be attacked and chased, losing time',
          explanation: 'When the queen comes out early, opponent pieces can develop while attacking the queen, gaining tempo.',
        },
        {
          id: 'M2.1-Q4',
          question: 'Castling accomplishes which two goals?',
          type: 'multiple_choice',
          options: ['Attacks the opponent and defends pawns', 'Moves the king to safety and activates the rook', 'Develops the queen and protects the bishop', 'Controls the center and attacks the king'],
          correctAnswer: 'Moves the king to safety and activates the rook',
          explanation: 'Castling tucks the king away in the corner for safety while bringing the rook toward the center where it can be more active.',
        },
        {
          id: 'M2.1-Q5',
          question: 'In the opening, how many pieces should typically be developed after 10 moves?',
          type: 'multiple_choice',
          options: ['1-2 pieces', '2-3 pieces', 'At least 4 pieces plus castled', 'All 8 pieces'],
          correctAnswer: 'At least 4 pieces plus castled',
          explanation: 'After 10 moves, you should aim to have developed at least 4 minor pieces (knights and bishops) and castled your king.',
        },
      ],
    },
  },
  {
    id: 'M2.2',
    level: 2,
    title: 'Basic Tactics - Forks, Pins, and Skewers',
    description: 'Learn three fundamental tactical patterns that win material in chess.',
    order: 2,
    xpReward: 150,
    prerequisites: ['M2.1'],
    content: {
      overview: 'Tactics are short-term sequences that win material or create decisive advantages. The three most common tactical patterns are the fork (one piece attacks two), the pin (a piece cannot move without exposing a more valuable piece), and the skewer (like a reverse pin). Mastering these patterns will dramatically improve your game.',
      sections: [
        {
          title: 'The Fork',
          content: `A **fork** occurs when one piece attacks two or more enemy pieces simultaneously. The opponent can only save one, so you win material.

**Knight Forks** are especially powerful because knights can attack pieces that cannot attack back:

\`\`\`
1.Nf7+ (Fork!) Kg8 2.Nxd8
\`\`\`

**Types of Forks:**
- **Knight fork:** Most common, attacks over pieces
- **Pawn fork:** Often overlooked, creates strong threats
- **Queen fork:** Very powerful but can be blocked
- **Bishop fork:** Works on diagonals
- **Rook fork:** Works on ranks and files

**Key Pattern:** Always check if your knights can reach squares that attack multiple pieces, especially the king + another piece (royal fork).`,
          fen: 'r1bqkb1r/pppp1ppp/2n2n2/4N3/4P3/8/PPPP1PPP/RNBQKB1R w KQkq - 0 4',
          arrows: [
            { from: 'e5', to: 'd7', color: 'red' },
            { from: 'e5', to: 'f7', color: 'red' },
            { from: 'e5', to: 'c6', color: 'red' },
          ],
        },
        {
          title: 'The Pin',
          content: `A **pin** occurs when an attacking piece threatens an enemy piece that cannot move without exposing a more valuable piece behind it.

**Two Types of Pins:**
1. **Absolute Pin:** The piece behind is the king - the pinned piece CANNOT legally move
2. **Relative Pin:** The piece behind is valuable but not the king - moving is legal but loses material

**Pin Examples:**
- Bishop pins knight to king (absolute)
- Rook pins queen to king (absolute)
- Bishop pins knight to queen (relative)

**Exploiting Pins:**
- Pile up attackers on the pinned piece
- The pinned piece cannot participate in defense
- Sometimes pinned pieces can be captured for free`,
          fen: 'r1bqk2r/pppp1ppp/2n2n2/4p3/1bB1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 4 5',
          arrows: [
            { from: 'b4', to: 'e1', color: 'red' },
          ],
          highlights: [
            { square: 'c3', color: 'rgba(255, 0, 0, 0.5)' },
          ],
        },
        {
          title: 'The Skewer',
          content: `A **skewer** is like a reverse pin: the more valuable piece is in front and must move, exposing the piece behind to capture.

**How Skewers Work:**
1. Attack a valuable piece (usually king or queen)
2. The valuable piece MUST move
3. Capture the piece that was behind it

**Common Skewer Patterns:**
- Bishop skewers king, wins queen behind
- Rook skewers king, wins rook behind
- Queen skewers king on back rank

**Skewer Setup:**
\`\`\`
1.Bb5+ Kf8 (King must move)
2.Bxd7 (Win the queen!)
\`\`\`

**Remember:** Skewers work along lines (diagonals, ranks, files) just like pins, but the valuable piece is in front.`,
          fen: '4k3/3q4/8/1B6/8/8/8/4K3 w - - 0 1',
          arrows: [
            { from: 'b5', to: 'e8', color: 'red' },
            { from: 'b5', to: 'd7', color: 'orange' },
          ],
        },
        {
          title: 'Finding Tactics',
          content: `Tactics don't appear by magic - you must create the conditions for them:

**1. Look for Undefended Pieces**
Every undefended piece is a potential target for a fork.

**2. Look for Pieces on the Same Line**
King and queen on the same diagonal? Pin or skewer opportunity!

**3. Ask "Checks and Captures"**
Before each move, ask: "What checks can I give? What can I capture?"

**4. Improve Piece Positions**
Move your pieces to active squares where they threaten multiple things.

**Practice Method:**
After your opponent moves, always ask:
- Are any of their pieces undefended?
- Are any pieces lined up (same rank, file, or diagonal)?
- Can I give a check that also attacks something else?`,
          fen: 'r2qkb1r/ppp2ppp/2np1n2/4p3/2B1P1b1/2NP1N2/PPP2PPP/R1BQK2R w KQkq - 0 6',
        },
      ],
      keyConceptBoards: [
        {
          title: 'Classic Knight Fork',
          fen: 'r2q1rk1/ppp2ppp/3b4/3Nn3/8/8/PPP2PPP/R1BQ1RK1 w - - 0 12',
          description: 'White plays Nf6+! The knight forks the king on g8 and queen on d8. Black must move the king, and White wins the queen.',
          arrows: [
            { from: 'd5', to: 'f6', color: 'green' },
            { from: 'f6', to: 'g8', color: 'red' },
            { from: 'f6', to: 'd8', color: 'red' },
          ],
        },
        {
          title: 'Deadly Pin',
          fen: 'r1b1k2r/ppppqppp/2n2n2/4p3/1bB1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 6',
          description: 'The bishop on b4 pins the knight on c3 to the king on e1. The knight cannot move! White should break the pin with a3 or Bd2.',
          arrows: [
            { from: 'b4', to: 'c3', color: 'red' },
            { from: 'b4', to: 'e1', color: 'red' },
          ],
        },
      ],
      quizQuestions: [
        {
          id: 'M2.2-Q1',
          question: 'What is a fork in chess?',
          type: 'multiple_choice',
          options: ['When a piece is blocked from moving', 'When one piece attacks two or more pieces at once', 'When you sacrifice material', 'When you promote a pawn'],
          correctAnswer: 'When one piece attacks two or more pieces at once',
          explanation: 'A fork is a tactic where a single piece attacks two or more enemy pieces simultaneously, typically winning material.',
        },
        {
          id: 'M2.2-Q2',
          question: 'What is the difference between an absolute pin and a relative pin?',
          type: 'multiple_choice',
          options: ['Absolute pins use bishops, relative pins use rooks', 'In an absolute pin the piece behind is the king; in a relative pin it is not', 'Absolute pins win material, relative pins do not', 'There is no difference'],
          correctAnswer: 'In an absolute pin the piece behind is the king; in a relative pin it is not',
          explanation: 'An absolute pin involves the king - the pinned piece cannot legally move. A relative pin involves another valuable piece - moving is legal but loses material.',
        },
        {
          id: 'M2.2-Q3',
          question: 'How is a skewer different from a pin?',
          type: 'multiple_choice',
          options: ['A skewer only works with rooks', 'In a skewer, the more valuable piece is in front and must move', 'A skewer attacks three pieces', 'There is no difference'],
          correctAnswer: 'In a skewer, the more valuable piece is in front and must move',
          explanation: 'In a skewer, the more valuable piece is attacked first and must move, exposing the less valuable piece behind it to capture.',
        },
        {
          id: 'M2.2-Q4',
          question: 'Which piece is most famous for delivering forks?',
          type: 'multiple_choice',
          options: ['Queen', 'Bishop', 'Knight', 'Rook'],
          correctAnswer: 'Knight',
          explanation: 'Knights are especially effective at forking because they attack in an unusual pattern and can attack pieces that cannot attack them back.',
        },
        {
          id: 'M2.2-Q5',
          question: 'What should you look for to find tactical opportunities?',
          type: 'multiple_choice',
          options: ['Only check possibilities', 'Pieces lined up on the same rank, file, or diagonal', 'Your opponent\'s pawn structure', 'How many pieces you have developed'],
          correctAnswer: 'Pieces lined up on the same rank, file, or diagonal',
          explanation: 'Pieces aligned on the same line (rank, file, or diagonal) create opportunities for pins and skewers. Also look for undefended pieces for forks.',
        },
      ],
    },
  },
  {
    id: 'M2.3',
    level: 2,
    title: 'Basic Trades - When to Capture',
    description: 'Learn piece values and when exchanging pieces is favorable.',
    order: 3,
    xpReward: 130,
    prerequisites: ['M2.2'],
    content: {
      overview: 'Not all captures are equal! Understanding when to trade pieces and when to avoid trades is a crucial skill. This lesson covers piece values, favorable exchanges, and the strategic considerations behind trading.',
      sections: [
        {
          title: 'Piece Values',
          content: `Every piece has a point value that helps evaluate trades:

| Piece | Value |
|-------|-------|
| Pawn | 1 |
| Knight | 3 |
| Bishop | 3 |
| Rook | 5 |
| Queen | 9 |
| King | Infinite |

**Important Notes:**
- These are approximate values; position matters!
- Two minor pieces (6 points) are usually better than a rook (5)
- Queen ≈ Two rooks (but not always)
- Bishop pair is worth slightly more (+0.5)

**Material Count:**
Add up your pieces vs opponent's pieces to evaluate who is ahead.`,
          fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        },
        {
          title: 'Favorable Trades',
          content: `A trade is **favorable** when you gain material or positional advantage:

**Material Wins:**
- Trading a knight (3) for a rook (5) = winning the exchange (+2)
- Trading a bishop (3) for a queen (9) = huge win (+6)
- Trading a pawn (1) for a knight (3) = winning material (+2)

**Strategic Trades:**
- Trade your bad bishop for opponent's good bishop
- Trade pieces when ahead in material
- Trade attacking pieces when under attack

**Example:**
\`\`\`
Position: Your bishop attacks opponent's rook
1.Bxd5 (bishop takes rook)
Result: You traded 3 points for 5 points = +2
\`\`\``,
          fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
          arrows: [
            { from: 'c4', to: 'f7', color: 'red' },
          ],
        },
        {
          title: 'When NOT to Trade',
          content: `Sometimes capturing is a mistake:

**1. Don't trade into a worse position**
\`\`\`
Taking a piece that was blocking your attack
Trading an active piece for a passive one
\`\`\`

**2. Don't trade when behind in material**
If you're down material, keep pieces on for counterplay chances.

**3. Don't trade when you have the attack**
Attackers need pieces! Don't simplify when attacking the king.

**4. Avoid "automatic" captures**
Just because you CAN capture doesn't mean you SHOULD.

**Ask Before Every Capture:**
- What do I get vs. what do I give up?
- Does this help or hurt my position?
- Does this help my opponent?`,
          fen: 'r1b1kb1r/pppp1ppp/2n2n2/4N3/2B1P3/8/PPPP1PPP/RNBQK2R b KQkq - 0 4',
        },
        {
          title: 'The Exchange',
          content: `**"Winning the exchange"** specifically means trading a minor piece (knight or bishop, worth 3) for a rook (worth 5).

**When Winning the Exchange is Good:**
- In most positions, having a rook vs. a minor piece is an advantage
- Rooks shine in open positions with fewer pawns
- The endgame often favors the rook

**When Winning the Exchange is Bad:**
- If the knight has a powerful outpost
- If the position is very closed (rooks have no open files)
- If you give up compensation (like a strong attack)

**Sacrificing the Exchange:**
Strong players sometimes deliberately give up the exchange for:
- A crushing attack on the king
- Dominating minor piece position
- Permanent structural damage to opponent`,
          fen: 'r4rk1/pp2bppp/2n1pn2/q1pp4/2PP4/P1NBPN2/1P3PPP/R2QK2R w KQ - 0 10',
        },
      ],
      keyConceptBoards: [
        {
          title: 'Winning Material',
          fen: 'r1bqkb1r/pppp1ppp/2n2n2/4N3/2B1P3/8/PPPP1PPP/RNBQK2R w KQkq - 0 4',
          description: 'White can play Nxc6, trading knight for knight (equal). But Bxf7+ wins a pawn while attacking the king!',
          arrows: [
            { from: 'c4', to: 'f7', color: 'green' },
          ],
        },
        {
          title: 'Bad Trade',
          fen: 'r1bqkb1r/pppp1ppp/2n2n2/4p3/2BPP3/5N2/PPP2PPP/RNBQK2R b KQkq - 0 4',
          description: 'Black should NOT play exd4. This trades a central pawn and opens lines for White\'s pieces. Better is d6 to maintain the center.',
          highlights: [
            { square: 'e5', color: 'rgba(255, 0, 0, 0.5)' },
            { square: 'd4', color: 'rgba(255, 0, 0, 0.5)' },
          ],
        },
      ],
      quizQuestions: [
        {
          id: 'M2.3-Q1',
          question: 'What is the approximate point value of a knight?',
          type: 'multiple_choice',
          options: ['1 point', '3 points', '5 points', '9 points'],
          correctAnswer: '3 points',
          explanation: 'A knight is worth approximately 3 points, the same as a bishop.',
        },
        {
          id: 'M2.3-Q2',
          question: 'What does "winning the exchange" mean?',
          type: 'multiple_choice',
          options: ['Trading queens', 'Trading a minor piece for a rook', 'Trading all your pieces', 'Winning the game'],
          correctAnswer: 'Trading a minor piece for a rook',
          explanation: 'Winning the exchange means trading a knight or bishop (worth 3) for a rook (worth 5), gaining 2 points of material.',
        },
        {
          id: 'M2.3-Q3',
          question: 'When should you generally avoid trading pieces?',
          type: 'multiple_choice',
          options: ['When ahead in material', 'When you have the attack', 'When the position is equal', 'When in the endgame'],
          correctAnswer: 'When you have the attack',
          explanation: 'When you have an attacking position, you need your pieces to deliver checkmate. Trading reduces your attacking force.',
        },
        {
          id: 'M2.3-Q4',
          question: 'How many points is a queen worth approximately?',
          type: 'multiple_choice',
          options: ['5 points', '7 points', '9 points', '12 points'],
          correctAnswer: '9 points',
          explanation: 'The queen is worth approximately 9 points, making it the most valuable piece after the king.',
        },
        {
          id: 'M2.3-Q5',
          question: 'Two minor pieces (knight + bishop) are usually worth more than:',
          type: 'multiple_choice',
          options: ['A queen', 'A rook', 'Two rooks', 'A pawn'],
          correctAnswer: 'A rook',
          explanation: 'Two minor pieces (6 points total) are usually worth more than a single rook (5 points).',
        },
      ],
    },
  },
  {
    id: 'M2.4',
    level: 2,
    title: 'Checkmate Patterns',
    description: 'Learn smothered mate, Anastasia\'s mate, and Legal\'s mate.',
    order: 4,
    xpReward: 160,
    prerequisites: ['M2.3'],
    content: {
      overview: 'Beautiful checkmate patterns have been named and studied for centuries. Learning these patterns helps you recognize winning opportunities in your games and avoid falling victim to them yourself. We\'ll study three elegant mates: the smothered mate, Anastasia\'s mate, and Legal\'s mate.',
      sections: [
        {
          title: 'Smothered Mate',
          content: `A **smothered mate** occurs when a knight delivers checkmate to a king that is completely surrounded by its own pieces.

**Classic Pattern:**
\`\`\`
White: Qg8+! Rxg8 (forced)
       Nf7# (smothered mate!)
\`\`\`

**Key Elements:**
1. The king is trapped by its own pieces
2. A queen sacrifice forces the king into the corner
3. The knight delivers mate

**Why It Works:**
- The knight attacks squares the king's own pieces block
- No piece can interpose against a knight check
- The queen sacrifice clears the knight's path

**Historical Note:** This pattern appears in a famous game from 1619 and countless games since.`,
          fen: '6rk/5Npp/8/8/8/8/8/4Q2K w - - 0 1',
          arrows: [
            { from: 'e1', to: 'g8', color: 'yellow' },
          ],
          highlights: [
            { square: 'h8', color: 'rgba(255, 0, 0, 0.5)' },
          ],
        },
        {
          title: 'Anastasia\'s Mate',
          content: `**Anastasia's Mate** combines a knight and rook to trap the king on the edge of the board.

**The Pattern:**
- Knight controls escape squares
- Rook delivers checkmate on the h-file (or a-file)
- Enemy pawn blocks the king's escape

**Example Sequence:**
\`\`\`
1.Ne7+ Kh8
2.Qxh7+! Kxh7
3.Rh1# (Anastasia's mate)
\`\`\`

**Key Setup:**
- Knight on e7 (or similar square controlling king's flight)
- Rook ready to deliver mate on the open file
- Pawn on g7 blocks the king's escape

**Named After:** A character in a 19th-century novel who used this mating pattern.`,
          fen: '4r1k1/3n1ppp/8/3NQ3/8/8/5PPP/4R1K1 w - - 0 1',
          arrows: [
            { from: 'd5', to: 'e7', color: 'green' },
            { from: 'e1', to: 'e8', color: 'red' },
          ],
        },
        {
          title: 'Legal\'s Mate',
          content: `**Legal's Mate** is a classic trap from the opening involving a queen sacrifice.

**The Trap:**
\`\`\`
1.e4 e5 2.Nf3 d6 3.Bc4 Bg4 
4.Nc3 g6? 5.Nxe5! Bxd1?? 
6.Bxf7+ Ke7 7.Nd5#
\`\`\`

**Why Black Falls for It:**
- Taking the queen seems like a huge win
- Black misses the forced checkmate

**Key Elements:**
1. The queen is sacrificed (Nxe5 attacks it)
2. If Black takes the queen (Bxd1)
3. Bxf7+ forces the king to move
4. Nd5 delivers checkmate

**Lesson:** Always check for forced mates before capturing "free" material!`,
          fen: 'r2qkbnr/ppp2p1p/3p2p1/4N3/2B1P3/2N5/PPPP1PPP/R1BbK2R w KQkq - 0 6',
          arrows: [
            { from: 'c4', to: 'f7', color: 'green' },
            { from: 'c3', to: 'd5', color: 'green' },
          ],
        },
        {
          title: 'Recognizing Mating Patterns',
          content: `To find checkmates in your games, look for these elements:

**Trapped King Signs:**
- King stuck on back rank with no escape squares
- King surrounded by its own pieces
- King in the corner

**Attacking Piece Coordination:**
- Pieces working together to cover escape squares
- One piece delivering check, others controlling exits
- Possibility of sacrifices to force the pattern

**Practice Method:**
1. Set up the patterns on a board
2. Play them out until automatic
3. In games, ask "Is there a mating pattern here?"

**Remember:** Even if you don't find mate, looking for patterns often reveals strong moves.`,
          fen: 'r1b2rk1/pppp1Npp/8/2b1q3/3n4/8/PPPPQPPP/R1B1KB1R w KQ - 0 1',
        },
      ],
      keyConceptBoards: [
        {
          title: 'Smothered Mate Final Position',
          fen: '6rk/5Npp/8/8/8/8/8/7K w - - 0 1',
          description: 'After Qg8+! Rxg8, Nf7# is checkmate. The king on h8 is completely smothered by its own pieces.',
          arrows: [
            { from: 'f7', to: 'h8', color: 'red' },
          ],
          highlights: [
            { square: 'g8', color: 'rgba(255, 0, 0, 0.3)' },
            { square: 'g7', color: 'rgba(255, 0, 0, 0.3)' },
            { square: 'h7', color: 'rgba(255, 0, 0, 0.3)' },
          ],
        },
        {
          title: 'Legal\'s Mate Final Position',
          fen: 'r2q1bnr/ppp1kB1p/3pN1p1/8/4P3/8/PPPP1PPP/R1B1K2R b KQ - 0 7',
          description: 'After Bxf7+ Ke7, Nd5# is checkmate. The knight and bishop coordinate perfectly to trap the king.',
          arrows: [
            { from: 'd5', to: 'e7', color: 'red' },
            { from: 'd5', to: 'c7', color: 'orange' },
            { from: 'f7', to: 'e6', color: 'orange' },
          ],
        },
      ],
      quizQuestions: [
        {
          id: 'M2.4-Q1',
          question: 'What piece delivers the final checkmate in a smothered mate?',
          type: 'multiple_choice',
          options: ['Queen', 'Rook', 'Bishop', 'Knight'],
          correctAnswer: 'Knight',
          explanation: 'In a smothered mate, a knight delivers checkmate to a king that is trapped by its own pieces.',
        },
        {
          id: 'M2.4-Q2',
          question: 'What is typically sacrificed to set up a smothered mate?',
          type: 'multiple_choice',
          options: ['A pawn', 'A knight', 'A rook', 'The queen'],
          correctAnswer: 'The queen',
          explanation: 'The classic smothered mate involves sacrificing the queen to force the enemy rook to block its own king.',
        },
        {
          id: 'M2.4-Q3',
          question: 'In Legal\'s Mate, what is Black\'s mistake?',
          type: 'multiple_choice',
          options: ['Moving the king too early', 'Capturing the "free" queen instead of seeing the mate', 'Not castling', 'Trading queens'],
          correctAnswer: 'Capturing the "free" queen instead of seeing the mate',
          explanation: 'Black grabs the queen without noticing that White has a forced checkmate sequence with the knights and bishop.',
        },
        {
          id: 'M2.4-Q4',
          question: 'Anastasia\'s Mate typically uses which two pieces to deliver mate?',
          type: 'multiple_choice',
          options: ['Queen and bishop', 'Knight and rook', 'Two knights', 'Queen and rook'],
          correctAnswer: 'Knight and rook',
          explanation: 'Anastasia\'s Mate uses a knight to control escape squares while a rook delivers checkmate on the edge file.',
        },
        {
          id: 'M2.4-Q5',
          question: 'What should you always check before capturing a "free" piece?',
          type: 'multiple_choice',
          options: ['Your clock time', 'Whether there is a forced checkmate', 'Your opponent\'s rating', 'How many pieces you have'],
          correctAnswer: 'Whether there is a forced checkmate',
          explanation: 'Before grabbing material, always check if your opponent has a forced checkmate or strong tactical sequence.',
        },
      ],
    },
  },
  {
    id: 'M2.5',
    level: 2,
    title: 'Pawn Structure Basics',
    description: 'Understand isolated, doubled, and passed pawns and their impact on the game.',
    order: 5,
    xpReward: 140,
    prerequisites: ['M2.4'],
    content: {
      overview: 'Pawns are the soul of chess. The way your pawns are arranged - your pawn structure - determines the character of the position. Some structures are strong, others weak. Understanding pawn structures will help you make better strategic decisions throughout the game.',
      sections: [
        {
          title: 'Isolated Pawns',
          content: `An **isolated pawn** has no friendly pawns on adjacent files to support it.

**Weaknesses of Isolated Pawns:**
- Cannot be defended by other pawns
- The square in front is a potential outpost for enemy pieces
- Requires pieces to defend it
- Often a target in the endgame

**Strengths of Isolated Pawns:**
- Pieces get active squares around it
- Open files next to it can be useful
- Creates dynamic play in the middlegame

**Classic Example: The Isolated Queen Pawn (IQP)**
\`\`\`
White pawns on: a2, b2, d4, f2, g2, h2
The d4 pawn is isolated - no pawns on c or e files
\`\`\`

**Strategy:** Blockade the isolated pawn by putting a piece in front of it!`,
          fen: '8/pp3ppp/4p3/3pP3/3P4/8/PP3PPP/8 w - - 0 1',
          highlights: [
            { square: 'd4', color: 'rgba(255, 165, 0, 0.5)' },
            { square: 'd5', color: 'rgba(255, 0, 0, 0.3)' },
          ],
        },
        {
          title: 'Doubled Pawns',
          content: `**Doubled pawns** are two pawns of the same color on the same file.

**How They Occur:**
- Usually from a capture toward the center
- Example: After Bxc6 bxc6, Black has doubled c-pawns

**Weaknesses:**
- Less mobile (one blocks the other)
- Create "holes" in the pawn structure
- Often weak in endgames
- One fewer pawn for creating a passed pawn

**Compensations:**
- Often gain an open file
- May control important squares
- Can be accepted for the bishop pair

**When Doubled Pawns Are OK:**
- When they control important central squares
- When there are plenty of pieces (middlegame)
- When you got compensation (like the bishop pair)`,
          fen: 'r1bqkbnr/pp1ppppp/2p5/8/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3',
          arrows: [
            { from: 'f1', to: 'b5', color: 'blue' },
          ],
        },
        {
          title: 'Passed Pawns',
          content: `A **passed pawn** has no enemy pawns blocking its path or on adjacent files that could capture it.

**Why Passed Pawns Are Powerful:**
- They threaten to promote to a queen
- Must be constantly watched
- Tie down enemy pieces
- Increase in value as pieces are traded

**The Rule of the Square:**
Can the king catch the pawn? Draw a square from the pawn to the promotion square. If the king can step into it, the king catches the pawn.

**Protected Passed Pawn:**
A passed pawn defended by another pawn is especially strong - the defender cannot be removed by the enemy king.

**Strategic Goals:**
1. Create passed pawns
2. Advance them safely
3. Use them to tie down enemy pieces`,
          fen: '8/5pk1/8/3P4/8/8/8/4K3 w - - 0 1',
          arrows: [
            { from: 'd5', to: 'd8', color: 'green' },
          ],
          highlights: [
            { square: 'd5', color: 'rgba(0, 255, 0, 0.5)' },
          ],
        },
        {
          title: 'Other Pawn Structures',
          content: `**Backward Pawns:**
A pawn that cannot advance safely and cannot be supported by adjacent pawns.
- Often a weakness because it's stuck
- The square in front is weak

**Pawn Chains:**
Pawns connected diagonally (e.g., d4-e5-f6).
- Attack at the base of the chain
- The chain's head is usually advanced

**Pawn Islands:**
Groups of connected pawns separated by files with no pawns.
- Fewer pawn islands = healthier structure
- More islands = more weaknesses to defend

**Pawn Majority:**
Having more pawns on one side of the board.
- Can create a passed pawn by advancing
- Valuable in endgames`,
          fen: '8/ppp2ppp/8/3p4/3PP3/8/PPP2PPP/8 w - - 0 1',
          highlights: [
            { square: 'd4', color: 'rgba(0, 255, 0, 0.3)' },
            { square: 'd5', color: 'rgba(255, 0, 0, 0.3)' },
            { square: 'e4', color: 'rgba(0, 255, 0, 0.3)' },
          ],
        },
      ],
      keyConceptBoards: [
        {
          title: 'Isolated Queen Pawn',
          fen: 'r1bqr1k1/pp3ppp/2n1pn2/3p4/3P4/2PBPN2/PP3PPP/R1BQR1K1 w - - 0 10',
          description: 'White has an isolated d4 pawn. Black should blockade it with a knight on d5. White should use the active pieces around the IQP to attack.',
          highlights: [
            { square: 'd4', color: 'rgba(255, 165, 0, 0.5)' },
          ],
          arrows: [
            { from: 'f6', to: 'd5', color: 'blue' },
          ],
        },
        {
          title: 'Protected Passed Pawn',
          fen: '8/8/8/2Pp4/3P4/8/8/8 w - - 0 1',
          description: 'The c5 pawn is a protected passed pawn. The d4 pawn defends it, so even if the enemy king attacks c5, it can safely advance.',
          highlights: [
            { square: 'c5', color: 'rgba(0, 255, 0, 0.5)' },
          ],
          arrows: [
            { from: 'd4', to: 'c5', color: 'green' },
          ],
        },
      ],
      quizQuestions: [
        {
          id: 'M2.5-Q1',
          question: 'What is an isolated pawn?',
          type: 'multiple_choice',
          options: ['A pawn that has been captured', 'A pawn with no friendly pawns on adjacent files', 'A pawn on the edge of the board', 'Two pawns on the same file'],
          correctAnswer: 'A pawn with no friendly pawns on adjacent files',
          explanation: 'An isolated pawn has no friendly pawns on the files next to it, meaning it cannot be defended by other pawns.',
        },
        {
          id: 'M2.5-Q2',
          question: 'What is a passed pawn?',
          type: 'multiple_choice',
          options: ['A pawn that has moved twice', 'A pawn with no enemy pawns blocking or able to capture it', 'A pawn that has captured another piece', 'A pawn protected by the king'],
          correctAnswer: 'A pawn with no enemy pawns blocking or able to capture it',
          explanation: 'A passed pawn has no enemy pawns in front of it or on adjacent files, giving it a clear path to promotion.',
        },
        {
          id: 'M2.5-Q3',
          question: 'How do doubled pawns usually occur?',
          type: 'multiple_choice',
          options: ['Moving a pawn twice', 'When a pawn captures toward the center', 'When two pawns advance together', 'When a pawn promotes'],
          correctAnswer: 'When a pawn captures toward the center',
          explanation: 'Doubled pawns typically result from a pawn capturing a piece, landing on the same file as another friendly pawn.',
        },
        {
          id: 'M2.5-Q4',
          question: 'What is the best way to deal with an opponent\'s isolated pawn?',
          type: 'multiple_choice',
          options: ['Ignore it', 'Trade it off immediately', 'Blockade it with a piece', 'Push your pawns past it'],
          correctAnswer: 'Blockade it with a piece',
          explanation: 'The best strategy against an isolated pawn is to blockade it by placing a piece (often a knight) in front of it, preventing its advance.',
        },
        {
          id: 'M2.5-Q5',
          question: 'Why is a protected passed pawn especially strong?',
          type: 'multiple_choice',
          options: ['It can capture backward', 'It is defended by another pawn, so the king cannot easily attack it', 'It moves faster', 'It is worth more points'],
          correctAnswer: 'It is defended by another pawn, so the king cannot easily attack it',
          explanation: 'A protected passed pawn is defended by another pawn, meaning the enemy king cannot simply capture it.',
        },
      ],
    },
  },
  {
    id: 'M2.6',
    level: 2,
    title: 'Simple Endgames',
    description: 'Master the essential endgames: King + Queen vs King and King + Rook vs King.',
    order: 6,
    xpReward: 170,
    prerequisites: ['M2.5'],
    content: {
      overview: 'Knowing how to win basic endgames is essential. If you reach a winning position but don\'t know the technique, you might draw or even lose! In this lesson, you\'ll learn the precise methods to deliver checkmate with a queen or rook against a lone king.',
      sections: [
        {
          title: 'King + Queen vs King',
          content: `This is the easiest checkmate to deliver. The method is simple:

**The Box Method:**
1. Use the queen to create a "box" around the enemy king
2. Make the box smaller and smaller
3. Bring your king to help
4. Deliver checkmate on the edge of the board

**Key Rules:**
- Keep your queen at knight's distance from the enemy king (to avoid stalemate)
- Never give check unless it forces the king to the edge
- Be patient - don't stalemate!

**Common Stalemate Trap:**
\`\`\`
Wrong: Qg7?? (stalemate if king is on h8!)
Right: Qf6 (king must go to h8, then Qg7#)
\`\`\`

**The mate is always on the edge of the board.**`,
          fen: '8/8/8/4k3/8/8/4Q3/4K3 w - - 0 1',
          arrows: [
            { from: 'e2', to: 'a6', color: 'blue' },
            { from: 'a6', to: 'h6', color: 'blue' },
          ],
        },
        {
          title: 'Queen Checkmate Technique',
          content: `**Step-by-Step Process:**

**Step 1: Create the box**
\`\`\`
1.Qa6 (cuts off the king on the 6th rank)
\`\`\`

**Step 2: Shrink the box**
\`\`\`
1...Ke4 2.Qa4+ Kd3 3.Qa3+ Kd4 4.Qa1 
(King forced back)
\`\`\`

**Step 3: Bring your king**
\`\`\`
4...Ke4 5.Ke2 Kf4 6.Qf1+ Ke4 7.Qf3+ 
\`\`\`

**Step 4: Deliver mate**
\`\`\`
7...Ke5 8.Kd3 Kd6 9.Qf6+ Kd7 10.Kd4 Ke8 11.Qe6+ Kf8 12.Ke5 Kg7 13.Qe7+ Kg8 14.Kf6 Kh8 15.Qg7#
\`\`\`

**Always be aware of stalemate - check that the king has a move!**`,
          fen: '8/8/Q7/8/4k3/8/4K3/8 w - - 0 1',
          arrows: [
            { from: 'a6', to: 'e6', color: 'red' },
          ],
        },
        {
          title: 'King + Rook vs King',
          content: `This takes more moves but follows a clear method.

**The Box Method (with rook):**
1. Use the rook to cut off the king on a rank or file
2. Bring your king closer
3. Push the enemy king to the edge using your king
4. Deliver checkmate

**Key Technique - Waiting Move:**
Sometimes your king arrives but you need to wait for the enemy king to move. Make a "waiting move" with the rook on the other side of the board.

**Example:**
\`\`\`
Position: White Kb5, Rd1; Black Ka7
1.Rd7+ Ka8 2.Kb6 Kb8 3.Rd8#
\`\`\`

**It takes up to 16 moves to mate with rook and king.**`,
          fen: '8/8/8/4k3/8/8/4R3/4K3 w - - 0 1',
          arrows: [
            { from: 'e2', to: 'a2', color: 'blue' },
          ],
        },
        {
          title: 'Rook Checkmate Technique',
          content: `**The Full Process:**

**Step 1: Cut off the king**
\`\`\`
1.Re4 (King confined to d5 and above)
\`\`\`

**Step 2: Advance your king**
\`\`\`
1...Kd5 2.Kd2 Kc5 3.Kd3 Kd5 4.Kc3
\`\`\`

**Step 3: Push opponent's king back**
\`\`\`
4...Kc5 5.Rc4+ Kd5 6.Kd3
\`\`\`

**Step 4: Repeat until king reaches edge**
Keep shrinking the box with rook checks and king advances.

**Step 5: Deliver mate on the edge**
\`\`\`
Final: Ka8, Kb6, Ra1# or Ra8#
\`\`\`

**The Waiting Move Trick:**
If it's your move and you can't check, move the rook to the opposite side of the board (from Ra7 to Rh7). This forces the enemy king to move, letting you check it back.`,
          fen: '8/8/8/3k4/4R3/3K4/8/8 w - - 0 1',
          arrows: [
            { from: 'd3', to: 'c4', color: 'green' },
            { from: 'e4', to: 'e5', color: 'red' },
          ],
        },
      ],
      keyConceptBoards: [
        {
          title: 'Queen Checkmate',
          fen: '7k/6Q1/5K2/8/8/8/8/8 b - - 0 1',
          description: 'The final position of King + Queen vs King. The queen controls all escape squares while giving check. This is mate!',
          arrows: [
            { from: 'g7', to: 'h8', color: 'red' },
            { from: 'g7', to: 'g8', color: 'red' },
            { from: 'g7', to: 'h7', color: 'red' },
            { from: 'f6', to: 'g6', color: 'orange' },
          ],
        },
        {
          title: 'Rook Checkmate',
          fen: 'k7/R7/1K6/8/8/8/8/8 b - - 0 1',
          description: 'The final position of King + Rook vs King. The rook delivers check on the back rank while the white king controls escape squares.',
          arrows: [
            { from: 'a7', to: 'a8', color: 'red' },
            { from: 'b6', to: 'b7', color: 'orange' },
            { from: 'b6', to: 'a6', color: 'orange' },
          ],
        },
      ],
      quizQuestions: [
        {
          id: 'M2.6-Q1',
          question: 'In K+Q vs K, where is the checkmate delivered?',
          type: 'multiple_choice',
          options: ['In the center of the board', 'On the edge of the board', 'In the corner only', 'Anywhere'],
          correctAnswer: 'On the edge of the board',
          explanation: 'Checkmate with a queen is delivered on the edge of the board, where the enemy king has fewer escape squares.',
        },
        {
          id: 'M2.6-Q2',
          question: 'What is the main danger when mating with a queen?',
          type: 'multiple_choice',
          options: ['Losing the queen', 'Stalemate', 'Running out of time', 'The king escaping'],
          correctAnswer: 'Stalemate',
          explanation: 'The queen is so powerful that she can accidentally take away all the enemy king\'s moves without giving check, resulting in stalemate (a draw).',
        },
        {
          id: 'M2.6-Q3',
          question: 'In the "box method," what does the queen or rook create?',
          type: 'multiple_choice',
          options: ['A barrier the enemy king cannot cross', 'A attack on the enemy pieces', 'A defensive position', 'A pawn structure'],
          correctAnswer: 'A barrier the enemy king cannot cross',
          explanation: 'The box method uses the queen or rook to create a "box" that limits the enemy king\'s movement, gradually shrinking it until mate.',
        },
        {
          id: 'M2.6-Q4',
          question: 'What is a "waiting move" in K+R vs K?',
          type: 'multiple_choice',
          options: ['Passing your turn', 'Moving the rook to the other side of the board to pass the move to your opponent', 'Moving your king backward', 'Offering a draw'],
          correctAnswer: 'Moving the rook to the other side of the board to pass the move to your opponent',
          explanation: 'A waiting move shifts the rook to the opposite side of the board, maintaining the barrier while forcing the enemy king to move.',
        },
        {
          id: 'M2.6-Q5',
          question: 'Why do you bring your king forward in basic checkmates?',
          type: 'multiple_choice',
          options: ['To protect the queen/rook', 'To control escape squares and help push the enemy king back', 'To avoid stalemate', 'To threaten checkmate faster'],
          correctAnswer: 'To control escape squares and help push the enemy king back',
          explanation: 'Your king is essential for controlling squares the rook/queen cannot reach and for pushing the enemy king toward the edge.',
        },
      ],
    },
  },
];
