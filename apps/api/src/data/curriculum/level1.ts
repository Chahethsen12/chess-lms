import { Module } from './types.js';

export const level1Modules: Module[] = [
  {
    id: 'M1.1',
    level: 1,
    title: 'The Chessboard Setup',
    description: 'Learn how the board is set up, including coordinates, ranks, and files.',
    order: 1,
    xpReward: 100,
    prerequisites: [],
    content: {
      overview: 'Every chess journey begins with understanding the battlefield. In this lesson, you will learn about the 64 squares, how to read coordinates, and how to set up the pieces correctly.',
      sections: [
        {
          title: 'The 64 Squares',
          content: `The chessboard consists of **64 squares** arranged in an 8×8 grid. The squares alternate between light and dark colors.

**Key Rule:** Always set up the board so that each player has a **light square in their right-hand corner**.

The board is divided into:
- **Files** (columns): Labeled a-h from left to right (from White's perspective)
- **Ranks** (rows): Labeled 1-8 from bottom to top (from White's perspective)

Each square has a unique name combining its file and rank, like \`e4\` or \`d7\`.`,
          fen: '8/8/8/8/8/8/8/8 w - - 0 1',
        },
        {
          title: 'Reading Coordinates',
          content: `To describe any square, we combine the **file letter** and **rank number**.

Examples:
- \`e4\` - The square in the e-file, 4th rank (center of the board)
- \`a1\` - Bottom-left corner (from White's view)
- \`h8\` - Top-right corner (from White's view)

**Practice:** Try to visualize where these squares are:
- \`d5\` (center area)
- \`g1\` (near White's king starting position)
- \`c7\` (near Black's pawn starting line)`,
          fen: '8/8/8/3P4/4P3/8/8/8 w - - 0 1',
          highlights: [
            { square: 'e4', color: 'rgba(79, 152, 163, 0.5)' },
            { square: 'd5', color: 'rgba(232, 175, 52, 0.5)' },
          ],
        },
        {
          title: 'Setting Up the Pieces',
          content: `Each player starts with **16 pieces**:
- 1 King
- 1 Queen
- 2 Rooks
- 2 Bishops
- 2 Knights
- 8 Pawns

**Setup rules:**
1. Rooks go in the corners (a1, h1 for White)
2. Knights go next to the rooks
3. Bishops go next to the knights
4. Queen goes on her own color (White queen on light square d1)
5. King goes on the remaining square (e1 for White)
6. Pawns fill the second rank

**Memory tip:** "Queen on her color" - the white queen starts on a light square (d1), the black queen on a dark square (d8).`,
          fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        },
      ],
      keyConceptBoards: [
        {
          title: 'The Starting Position',
          fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
          description: 'This is how every chess game begins. White always moves first.',
        },
        {
          title: 'Board Orientation',
          fen: '8/8/8/8/8/8/8/8 w - - 0 1',
          description: 'Remember: Light square on the right! Files go a-h, ranks go 1-8.',
          highlights: [
            { square: 'h1', color: 'rgba(79, 152, 163, 0.5)' },
          ],
        },
      ],
      quizQuestions: [
        {
          id: 'M1.1-Q1',
          question: 'What should be in the corner of the board closest to your right hand?',
          type: 'multiple_choice',
          options: ['A dark square', 'A light square', 'Your king', 'Your queen'],
          correctAnswer: 'A light square',
          explanation: 'The board should always be oriented with a light square in each player\'s right-hand corner.',
        },
        {
          id: 'M1.1-Q2',
          question: 'What is the name of the square at column e, row 4?',
          type: 'multiple_choice',
          options: ['4e', 'e4', 'E4', 'e-4'],
          correctAnswer: 'e4',
          explanation: 'Chess notation uses lowercase letter for the file followed by the number for the rank: e4.',
        },
        {
          id: 'M1.1-Q3',
          question: 'On which square does the White queen start?',
          type: 'multiple_choice',
          options: ['e1', 'd1', 'd8', 'e8'],
          correctAnswer: 'd1',
          explanation: 'The queen starts on her own color. White queen on the light square d1.',
        },
        {
          id: 'M1.1-Q4',
          question: 'How many squares are on a chessboard?',
          type: 'multiple_choice',
          options: ['32', '48', '64', '81'],
          correctAnswer: '64',
          explanation: 'A chessboard has 64 squares arranged in an 8×8 grid (8 × 8 = 64).',
        },
        {
          id: 'M1.1-Q5',
          question: 'What pieces go in the corners of the board?',
          type: 'multiple_choice',
          options: ['Knights', 'Bishops', 'Rooks', 'Queens'],
          correctAnswer: 'Rooks',
          explanation: 'Rooks start in the four corners of the board (a1, h1 for White; a8, h8 for Black).',
        },
      ],
    },
  },
  {
    id: 'M1.2',
    level: 1,
    title: 'How Each Piece Moves',
    description: 'Master the movement patterns of all six chess pieces.',
    order: 2,
    xpReward: 150,
    prerequisites: ['M1.1'],
    content: {
      overview: 'Each chess piece has its own unique way of moving. Understanding these movement patterns is fundamental to playing chess.',
      sections: [
        {
          title: 'The King',
          content: `The King is the most important piece - if you lose it, you lose the game!

**Movement:** The King can move **one square** in any direction:
- Horizontally
- Vertically  
- Diagonally

**Key point:** The King can never move to a square where it would be attacked.`,
          fen: '8/8/8/3K4/8/8/8/8 w - - 0 1',
          arrows: [
            { from: 'd5', to: 'd6', color: 'green' },
            { from: 'd5', to: 'e6', color: 'green' },
            { from: 'd5', to: 'e5', color: 'green' },
            { from: 'd5', to: 'e4', color: 'green' },
            { from: 'd5', to: 'd4', color: 'green' },
            { from: 'd5', to: 'c4', color: 'green' },
            { from: 'd5', to: 'c5', color: 'green' },
            { from: 'd5', to: 'c6', color: 'green' },
          ],
        },
        {
          title: 'The Queen',
          content: `The Queen is the most powerful piece on the board!

**Movement:** The Queen can move any number of squares in any direction:
- Horizontally (like a Rook)
- Vertically (like a Rook)
- Diagonally (like a Bishop)

**Tip:** Think of the Queen as a combination of Rook + Bishop.`,
          fen: '8/8/8/3Q4/8/8/8/8 w - - 0 1',
        },
        {
          title: 'The Rook',
          content: `The Rook is a powerful piece worth about **5 points**.

**Movement:** The Rook moves any number of squares:
- Horizontally (along ranks)
- Vertically (along files)

**Cannot:** Move diagonally`,
          fen: '8/8/8/3R4/8/8/8/8 w - - 0 1',
        },
        {
          title: 'The Bishop',
          content: `Each player has two Bishops, one on light squares and one on dark squares.

**Movement:** The Bishop moves any number of squares diagonally.

**Key insight:** A Bishop can only ever reach squares of one color! Your light-squared Bishop can never reach a dark square.`,
          fen: '8/8/8/3B4/8/8/8/8 w - - 0 1',
        },
        {
          title: 'The Knight',
          content: `The Knight has the most unique movement in chess!

**Movement:** The Knight moves in an "L" shape:
- 2 squares in one direction, then 1 square perpendicular
- OR 1 square in one direction, then 2 squares perpendicular

**Special ability:** The Knight is the only piece that can **jump over** other pieces!`,
          fen: '8/8/8/3N4/8/8/8/8 w - - 0 1',
        },
        {
          title: 'The Pawn',
          content: `Pawns are the soul of chess! Each player starts with 8 pawns.

**Movement:**
- Pawns move **forward only** (never backward)
- Move 1 square forward normally
- On its first move, a pawn can choose to move 2 squares forward
- Pawns **capture diagonally** (1 square diagonally forward)

**Special:** When a pawn reaches the other end of the board, it promotes to any piece (usually a Queen)!`,
          fen: '8/8/8/8/8/3P4/8/8 w - - 0 1',
        },
      ],
      keyConceptBoards: [
        {
          title: 'Piece Values',
          fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
          description: 'Pawn = 1, Knight = 3, Bishop = 3, Rook = 5, Queen = 9, King = Priceless!',
        },
        {
          title: 'Knight Movement Pattern',
          fen: '8/8/2N1N3/1N3N2/3N4/1N3N2/2N1N3/8 w - - 0 1',
          description: 'A knight in the center can reach 8 squares. Notice the L-shaped pattern.',
        },
      ],
      quizQuestions: [
        {
          id: 'M1.2-Q1',
          question: 'Which piece can jump over other pieces?',
          type: 'multiple_choice',
          options: ['Bishop', 'Rook', 'Knight', 'Queen'],
          correctAnswer: 'Knight',
          explanation: 'Only the Knight can jump over other pieces. All other pieces are blocked by pieces in their path.',
        },
        {
          id: 'M1.2-Q2',
          question: 'How many squares can the King move at a time?',
          type: 'multiple_choice',
          options: ['Unlimited', 'Two', 'One', 'Three'],
          correctAnswer: 'One',
          explanation: 'The King can only move one square at a time in any direction.',
        },
        {
          id: 'M1.2-Q3',
          question: 'What is the approximate point value of a Rook?',
          type: 'multiple_choice',
          options: ['3 points', '5 points', '9 points', '1 point'],
          correctAnswer: '5 points',
          explanation: 'A Rook is worth about 5 points. This helps you evaluate trades.',
        },
        {
          id: 'M1.2-Q4',
          question: 'In which direction can a pawn move?',
          type: 'multiple_choice',
          options: ['Any direction', 'Forward only', 'Sideways only', 'Backward only'],
          correctAnswer: 'Forward only',
          explanation: 'Pawns can only move forward, never backward or sideways (except when capturing diagonally).',
        },
        {
          id: 'M1.2-Q5',
          question: 'Which piece is the most powerful?',
          type: 'multiple_choice',
          options: ['King', 'Queen', 'Rook', 'Knight'],
          correctAnswer: 'Queen',
          explanation: 'The Queen is the most powerful piece, combining the movement of both Rook and Bishop.',
        },
      ],
    },
  },
  {
    id: 'M1.3',
    level: 1,
    title: 'Special Rules',
    description: 'Learn castling, en passant, and pawn promotion.',
    order: 3,
    xpReward: 150,
    prerequisites: ['M1.2'],
    content: {
      overview: 'Chess has three special moves that every player must know: castling, en passant, and pawn promotion. These rules add depth and strategy to the game.',
      sections: [
        {
          title: 'Castling',
          content: `Castling is a special move involving the King and Rook. It's the only move where you move two pieces at once!

**How to castle:**
1. Move your King two squares toward a Rook
2. The Rook jumps over the King to the adjacent square

**Kingside castling (short):** King goes g1, Rook goes f1
**Queenside castling (long):** King goes c1, Rook goes d1

**Requirements:**
- Neither the King nor Rook has moved before
- No pieces between King and Rook
- King is not in check
- King doesn't pass through or land on an attacked square`,
          fen: 'r3k2r/pppppppp/8/8/8/8/PPPPPPPP/R3K2R w KQkq - 0 1',
        },
        {
          title: 'En Passant',
          content: `"En passant" is French for "in passing." It's a special pawn capture.

**When it happens:**
- Your pawn is on the 5th rank (for White) or 4th rank (for Black)
- An enemy pawn advances 2 squares and lands beside your pawn
- You can capture it "in passing" as if it only moved one square

**Important:** En passant must be done immediately on the next move, or the right is lost!`,
          fen: '8/8/8/3Pp3/8/8/8/8 w - e6 0 1',
          arrows: [{ from: 'd5', to: 'e6', color: 'red' }],
        },
        {
          title: 'Pawn Promotion',
          content: `When a pawn reaches the opposite end of the board, it must be promoted!

**Promotion rules:**
- Pawn transforms into Queen, Rook, Bishop, or Knight
- Most players choose Queen (most powerful)
- The pawn is removed and replaced with the chosen piece

**Fun fact:** You can have multiple Queens on the board through promotion!`,
          fen: '8/3P4/8/8/8/8/8/8 w - - 0 1',
        },
      ],
      keyConceptBoards: [
        {
          title: 'Before Kingside Castle',
          fen: 'r3k2r/pppppppp/8/8/8/8/PPPPPPPP/R3K2R w KQkq - 0 1',
          description: 'White can castle kingside (O-O) or queenside (O-O-O).',
        },
        {
          title: 'After Kingside Castle',
          fen: 'r3k2r/pppppppp/8/8/8/8/PPPPPPPP/R4RK1 w kq - 0 1',
          description: 'After castling, the King is safe behind pawns.',
        },
      ],
      quizQuestions: [
        {
          id: 'M1.3-Q1',
          question: 'Can you castle if your King is in check?',
          type: 'multiple_choice',
          options: ['Yes', 'No', 'Only kingside', 'Only queenside'],
          correctAnswer: 'No',
          explanation: 'You cannot castle while in check. You must first get out of check.',
        },
        {
          id: 'M1.3-Q2',
          question: 'What piece can a pawn become when it promotes?',
          type: 'multiple_choice',
          options: ['Only a Queen', 'Any piece except King', 'Any piece', 'Only Queen or Rook'],
          correctAnswer: 'Any piece except King',
          explanation: 'A pawn can promote to a Queen, Rook, Bishop, or Knight - never a King.',
        },
        {
          id: 'M1.3-Q3',
          question: 'En passant can only be done...',
          type: 'multiple_choice',
          options: ['Anytime', 'Immediately after the enemy pawn moves', 'By the Queen', 'On the first move'],
          correctAnswer: 'Immediately after the enemy pawn moves',
          explanation: 'En passant must be executed on the very next move, or the right is lost.',
        },
        {
          id: 'M1.3-Q4',
          question: 'In kingside castling, where does the White King end up?',
          type: 'multiple_choice',
          options: ['c1', 'g1', 'f1', 'h1'],
          correctAnswer: 'g1',
          explanation: 'In kingside castling, the King moves two squares toward the h-file, ending on g1.',
        },
        {
          id: 'M1.3-Q5',
          question: 'Can you castle if there is a piece between the King and Rook?',
          type: 'multiple_choice',
          options: ['Yes', 'No', 'Only knights can be there', 'Only bishops can be there'],
          correctAnswer: 'No',
          explanation: 'All squares between the King and Rook must be empty to castle.',
        },
      ],
    },
  },
  {
    id: 'M1.4',
    level: 1,
    title: 'Check, Checkmate, and Stalemate',
    description: 'Understand the three possible game-ending conditions.',
    order: 4,
    xpReward: 150,
    prerequisites: ['M1.3'],
    content: {
      overview: 'The ultimate goal in chess is to checkmate your opponent\'s King. Understanding check, checkmate, and stalemate is essential.',
      sections: [
        {
          title: 'Check',
          content: `**Check** occurs when a King is under attack by an enemy piece.

**When in check, you MUST:**
1. Move the King to a safe square
2. Block the attack with another piece
3. Capture the attacking piece

**Important:** You cannot ignore check or make a move that leaves your King in check.`,
          fen: '4k3/8/8/8/8/5Q2/8/4K3 w - - 0 1',
          arrows: [{ from: 'f3', to: 'e8', color: 'red' }],
        },
        {
          title: 'Checkmate',
          content: `**Checkmate** = Check + no escape = Game over!

Checkmate occurs when:
1. The King is in check
2. The King cannot move to a safe square
3. No piece can block or capture the attacker

The player delivering checkmate wins the game!`,
          fen: '4k3/4Q3/4K3/8/8/8/8/8 w - - 0 1',
        },
        {
          title: 'Stalemate',
          content: `**Stalemate** is a draw - neither player wins!

Stalemate occurs when:
1. It's your turn
2. Your King is NOT in check
3. You have no legal moves

**Tip:** If you're winning, be careful not to stalemate your opponent! If you're losing, look for stalemate tricks to save the game.`,
          fen: '7k/8/6K1/8/8/8/8/6Q1 w - - 0 1',
        },
      ],
      keyConceptBoards: [
        {
          title: 'Simple Checkmate',
          fen: 'k7/8/1K6/8/8/8/8/R7 w - - 0 1',
          description: 'Ra8 is checkmate. The King has no escape.',
          arrows: [{ from: 'a1', to: 'a8', color: 'red' }],
        },
        {
          title: 'Stalemate Example',
          fen: 'k7/2Q5/1K6/8/8/8/8/8 w - - 0 1',
          description: 'If White plays Qc8, it\'s stalemate! Black has no moves but isn\'t in check.',
        },
      ],
      quizQuestions: [
        {
          id: 'M1.4-Q1',
          question: 'What happens when you are in checkmate?',
          type: 'multiple_choice',
          options: ['You lose the game', 'The game is a draw', 'You lose your Queen', 'You must skip a turn'],
          correctAnswer: 'You lose the game',
          explanation: 'Checkmate means your King is trapped and you have lost the game.',
        },
        {
          id: 'M1.4-Q2',
          question: 'What is stalemate?',
          type: 'multiple_choice',
          options: ['A win for White', 'A win for Black', 'A draw', 'An illegal position'],
          correctAnswer: 'A draw',
          explanation: 'Stalemate is a draw. It occurs when a player has no legal moves but is not in check.',
        },
        {
          id: 'M1.4-Q3',
          question: 'Can you castle to escape check?',
          type: 'multiple_choice',
          options: ['Yes, always', 'No, never', 'Only kingside', 'Only queenside'],
          correctAnswer: 'No, never',
          explanation: 'You cannot castle while in check. Castling is not allowed as a response to check.',
        },
        {
          id: 'M1.4-Q4',
          question: 'How many ways are there to get out of check?',
          type: 'multiple_choice',
          options: ['One', 'Two', 'Three', 'Four'],
          correctAnswer: 'Three',
          explanation: 'There are three ways: move the King, block the check, or capture the attacker.',
        },
        {
          id: 'M1.4-Q5',
          question: 'If it is your turn and your King is NOT in check but you have no legal moves, this is:',
          type: 'multiple_choice',
          options: ['Checkmate', 'Stalemate', 'Check', 'Illegal'],
          correctAnswer: 'Stalemate',
          explanation: 'This is stalemate - a draw. The key is that the King is NOT in check.',
        },
      ],
    },
  },
  {
    id: 'M1.5',
    level: 1,
    title: 'Basic Checkmate Patterns',
    description: 'Learn the back-rank mate, ladder mate, and two-rook mate.',
    order: 5,
    xpReward: 200,
    prerequisites: ['M1.4'],
    content: {
      overview: 'Knowing checkmate patterns helps you both deliver and avoid checkmates. These three patterns are the most common for beginners.',
      sections: [
        {
          title: 'Back-Rank Mate',
          content: `The **back-rank mate** is one of the most common checkmates in chess!

**How it works:**
- The enemy King is trapped on the back rank (1st or 8th)
- The King\'s own pawns block its escape
- A Rook or Queen delivers checkmate

**Prevention:** Create "luft" (breathing room) by moving one pawn in front of your King!`,
          fen: '6k1/5ppp/8/8/8/8/8/R3K3 w - - 0 1',
          arrows: [{ from: 'a1', to: 'a8', color: 'red' }],
        },
        {
          title: 'Ladder Mate (Staircase Mate)',
          content: `The **ladder mate** uses two Rooks (or a Rook and Queen) to push the enemy King to the edge.

**Technique:**
1. Use one Rook to cut off the King
2. Use the other Rook to give check
3. Alternate, pushing the King rank by rank like climbing stairs
4. Checkmate on the edge of the board`,
          fen: '8/8/8/8/k7/8/8/R3R2K w - - 0 1',
        },
        {
          title: 'Two-Rook Mate',
          content: `With two Rooks, you can deliver checkmate easily using the ladder technique.

**Key principles:**
- Keep your Rooks protected from capture
- Force the King to the edge systematically
- The final checkmate uses one Rook to block escape, the other to deliver mate`,
          fen: 'k7/8/1K6/8/8/8/8/R6R w - - 0 1',
        },
      ],
      keyConceptBoards: [
        {
          title: 'Back-Rank Mate Position',
          fen: '6k1/5ppp/8/8/8/8/8/4R1K1 w - - 0 1',
          description: 'Re8# is checkmate. The pawns trap the King.',
          arrows: [{ from: 'e1', to: 'e8', color: 'red' }],
        },
        {
          title: 'Ladder Mate Technique',
          fen: 'R7/1R6/8/8/8/k7/8/K7 w - - 0 1',
          description: 'The Rooks work together to push the King up the board.',
        },
      ],
      quizQuestions: [
        {
          id: 'M1.5-Q1',
          question: 'What often causes back-rank mate?',
          type: 'multiple_choice',
          options: ['Open files', 'Pawns blocking the King', 'Too many pieces', 'Castling'],
          correctAnswer: 'Pawns blocking the King',
          explanation: 'Back-rank mate happens when the King\'s own pawns trap it on the back rank.',
        },
        {
          id: 'M1.5-Q2',
          question: 'How can you prevent back-rank mate?',
          type: 'multiple_choice',
          options: ['Castle queenside', 'Create luft (move a pawn)', 'Trade all pieces', 'Move the King to the center'],
          correctAnswer: 'Create luft (move a pawn)',
          explanation: 'Moving a pawn (usually h3 or g3) gives the King an escape square.',
        },
        {
          id: 'M1.5-Q3',
          question: 'What is the ladder mate also called?',
          type: 'multiple_choice',
          options: ['Step mate', 'Staircase mate', 'Rook mate', 'Line mate'],
          correctAnswer: 'Staircase mate',
          explanation: 'It\'s called the staircase or ladder mate because the Rooks push the King step by step.',
        },
        {
          id: 'M1.5-Q4',
          question: 'In the ladder mate, where should you push the enemy King?',
          type: 'multiple_choice',
          options: ['To the center', 'To the edge of the board', 'Near your King', 'Anywhere'],
          correctAnswer: 'To the edge of the board',
          explanation: 'You push the King to the edge where it has fewer escape squares.',
        },
        {
          id: 'M1.5-Q5',
          question: 'Which pieces are typically used in the ladder mate?',
          type: 'multiple_choice',
          options: ['Two Bishops', 'Two Knights', 'Two Rooks', 'Bishop and Knight'],
          correctAnswer: 'Two Rooks',
          explanation: 'The ladder mate typically uses two Rooks (or Rook + Queen) working together.',
        },
      ],
    },
  },
  {
    id: 'M1.6',
    level: 1,
    title: "Scholar's Mate and How to Avoid It",
    description: 'Learn the famous 4-move checkmate and how to defend against it.',
    order: 6,
    xpReward: 150,
    prerequisites: ['M1.5'],
    content: {
      overview: "Scholar's Mate is a famous 4-move checkmate that every beginner should know - both to attempt and to defend against!",
      sections: [
        {
          title: "The Scholar's Mate",
          content: `**The moves:**
1. e4 e5
2. Qh5 (threatening Qxf7 mate) ...Nc6
3. Bc4 (adding to the attack on f7) ...Nf6?
4. Qxf7# Checkmate!

**Why it works:** The f7 pawn (f2 for White) is weak because only the King defends it.`,
          fen: 'r1bqkb1r/pppp1Qpp/2n2n2/4p3/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 0 4',
        },
        {
          title: 'Defending Against It',
          content: `**How to defend:**
1. After Qh5, play ...Nc6 or ...g6 (kicks the Queen away)
2. After Bc4, play ...g6 (defending f7 and attacking the Queen)
3. Don't ignore threats to f7!

**Better response:**
1. e4 e5
2. Qh5 Nc6
3. Bc4 g6! (attacking the Queen)
4. Qf3 Nf6 (developed pieces and solid position)`,
          fen: 'r1bqkbnr/pppp1p1p/2n3p1/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 0 4',
        },
        {
          title: 'Why Not to Play It',
          content: `**Problems with Scholar's Mate:**
- It only works against unprepared opponents
- If defended, your Queen is misplaced
- You've moved your Queen too early
- Better players will punish you

**Lesson:** Develop knights and bishops before your Queen in the opening!`,
          fen: 'r1b1kbnr/pppp1ppp/2n2q2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4',
        },
      ],
      keyConceptBoards: [
        {
          title: "Scholar's Mate Final Position",
          fen: 'r1bqkb1r/pppp1Qpp/2n2n2/4p3/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 0 4',
          description: 'Qxf7 is checkmate. The King has no escape.',
        },
        {
          title: 'Correct Defense',
          fen: 'r1bqkbnr/pppp1p1p/2n3p1/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 0 4',
          description: '...g6 attacks the Queen and defends f7.',
        },
      ],
      quizQuestions: [
        {
          id: 'M1.6-Q1',
          question: "In Scholar's Mate, what square is the main target?",
          type: 'multiple_choice',
          options: ['e5', 'f7', 'd7', 'g7'],
          correctAnswer: 'f7',
          explanation: 'f7 is weak because only the King defends it at the start of the game.',
        },
        {
          id: 'M1.6-Q2',
          question: 'What is a good defense when the Queen comes to h5?',
          type: 'multiple_choice',
          options: ['Qe7', 'g6', 'h6', 'a6'],
          correctAnswer: 'g6',
          explanation: 'g6 kicks the Queen away and defends f7.',
        },
        {
          id: 'M1.6-Q3',
          question: "Why is Scholar's Mate not recommended against good players?",
          type: 'multiple_choice',
          options: ['It is illegal', 'The Queen gets misplaced if defended', 'It takes too long', 'It requires a Bishop'],
          correctAnswer: 'The Queen gets misplaced if defended',
          explanation: 'If your opponent defends correctly, your Queen is out early and vulnerable.',
        },
        {
          id: 'M1.6-Q4',
          question: "How many moves does Scholar's Mate take?",
          type: 'multiple_choice',
          options: ['2 moves', '3 moves', '4 moves', '5 moves'],
          correctAnswer: '4 moves',
          explanation: "Scholar's Mate is a 4-move checkmate: 1.e4 e5 2.Qh5 Nc6 3.Bc4 Nf6 4.Qxf7#",
        },
        {
          id: 'M1.6-Q5',
          question: 'Which piece should generally NOT be developed too early?',
          type: 'multiple_choice',
          options: ['Knights', 'Bishops', 'Queen', 'Rooks'],
          correctAnswer: 'Queen',
          explanation: 'Developing the Queen too early exposes it to attack and wastes time retreating.',
        },
      ],
    },
  },
  {
    id: 'M1.7',
    level: 1,
    title: 'Basic Principles of Good Play',
    description: 'Learn fundamental strategies: control the center, develop pieces, and protect your King.',
    order: 7,
    xpReward: 200,
    prerequisites: ['M1.6'],
    content: {
      overview: 'These three golden principles will guide you through the opening and into the middlegame. Master them, and you will be ahead of most beginners!',
      sections: [
        {
          title: 'Control the Center',
          content: `The center squares (e4, d4, e5, d5) are the most important part of the board!

**Why the center matters:**
- Pieces in the center control more squares
- Central pawns restrict enemy pieces
- From the center, you can attack in any direction

**How to control the center:**
- Move pawns to e4/d4 (or e5/d5 as Black)
- Develop pieces toward the center
- Don't let your opponent dominate the center`,
          fen: '8/8/8/3pp3/3PP3/8/8/8 w - - 0 1',
          highlights: [
            { square: 'd4', color: 'rgba(79, 152, 163, 0.5)' },
            { square: 'e4', color: 'rgba(79, 152, 163, 0.5)' },
            { square: 'd5', color: 'rgba(79, 152, 163, 0.5)' },
            { square: 'e5', color: 'rgba(79, 152, 163, 0.5)' },
          ],
        },
        {
          title: 'Develop Your Pieces',
          content: `**Development** means getting your pieces off their starting squares into active positions.

**Development priorities:**
1. Knights before Bishops (knights have fewer good squares)
2. Develop toward the center
3. Don't move the same piece twice in the opening
4. Don't bring out your Queen too early

**Goal:** Get all your pieces into the game before attacking!`,
          fen: 'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4',
        },
        {
          title: 'Castle Early',
          content: `**King safety** is crucial! Castle to:
- Move your King to safety behind pawns
- Connect your Rooks
- Activate your Rook for the middlegame

**Tips:**
- Castle before move 10 if possible
- Kingside castling is usually faster
- Don't wait too long or the center may open dangerously`,
          fen: 'r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 0 5',
        },
      ],
      keyConceptBoards: [
        {
          title: 'Good Development',
          fen: 'r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 0 5',
          description: 'White has developed pieces, controlled the center, and castled.',
        },
        {
          title: 'Bad Development',
          fen: 'rnbqkbnr/pppp1ppp/8/4p3/6P1/5P2/PPPPP2P/RNBQKBNR b KQkq - 0 2',
          description: 'White has weakened their position and ignored the center.',
        },
      ],
      quizQuestions: [
        {
          id: 'M1.7-Q1',
          question: 'What are the four central squares?',
          type: 'multiple_choice',
          options: ['a1, a8, h1, h8', 'e4, d4, e5, d5', 'c3, c6, f3, f6', 'b2, g2, b7, g7'],
          correctAnswer: 'e4, d4, e5, d5',
          explanation: 'The central squares e4, d4, e5, d5 are the most important for control.',
        },
        {
          id: 'M1.7-Q2',
          question: 'Which pieces should you develop first?',
          type: 'multiple_choice',
          options: ['Rooks', 'Queen', 'Knights and Bishops', 'King'],
          correctAnswer: 'Knights and Bishops',
          explanation: 'Develop knights and bishops first, then castle, then connect your rooks.',
        },
        {
          id: 'M1.7-Q3',
          question: 'By which move should you try to castle?',
          type: 'multiple_choice',
          options: ['Move 5', 'Move 10', 'Move 15', 'Move 20'],
          correctAnswer: 'Move 10',
          explanation: 'Aim to castle within the first 10 moves to keep your King safe.',
        },
        {
          id: 'M1.7-Q4',
          question: 'Why should you avoid moving the same piece twice in the opening?',
          type: 'multiple_choice',
          options: ['It is against the rules', 'You waste time and fall behind in development', 'It confuses your opponent', 'Your piece might get captured'],
          correctAnswer: 'You waste time and fall behind in development',
          explanation: 'Each move should bring a new piece into play to develop quickly.',
        },
        {
          id: 'M1.7-Q5',
          question: 'What does castling accomplish?',
          type: 'multiple_choice',
          options: ['Attacks the opponent', 'Develops the Queen', 'Protects the King and activates the Rook', 'Captures a piece'],
          correctAnswer: 'Protects the King and activates the Rook',
          explanation: 'Castling moves the King to safety and brings the Rook toward the center.',
        },
      ],
    },
  },
];
