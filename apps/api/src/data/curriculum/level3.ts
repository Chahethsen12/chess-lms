import { Module } from './types.js';

export const level3Modules: Module[] = [
  {
    id: 'M3.1',
    level: 3,
    title: 'Advanced Tactics - Discovered Attack, Double Check, and Zwischenzug',
    description: 'Master powerful tactical patterns that can turn any game in your favor.',
    order: 1,
    xpReward: 150,
    prerequisites: ['M2.6'],
    content: {
      overview: 'Building on basic tactics, we now explore more sophisticated patterns. Discovered attacks unleash hidden threats, double checks are almost impossible to defend, and the zwischenzug (in-between move) is a powerful surprise weapon. These tactics win games at every level.',
      sections: [
        {
          title: 'Discovered Attack',
          content: `A **discovered attack** occurs when you move a piece and reveal an attack from a piece behind it.

**How It Works:**
1. One piece blocks a line of attack from another piece
2. The blocking piece moves (often with its own threat)
3. The attack is "discovered" from the piece behind

**The Power:**
The moving piece can create its own threat (like check) while the discovered attack hits a different target. This creates two simultaneous threats!

**Discovered Check:**
When the discovered attack is a check, it's called a **discovered check**. The opponent MUST deal with the check, so you capture the other piece for free.

\`\`\`
Example: Bishop blocks rook's line to queen
1.Ba4! (Bishop attacks something, rook now attacks queen)
\`\`\``,
          fen: 'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
          arrows: [
            { from: 'c4', to: 'f7', color: 'red' },
          ],
        },
        {
          title: 'Double Check',
          content: `A **double check** is the most powerful check in chess - both the moving piece and the piece behind it give check simultaneously.

**Why Double Check is Devastating:**
- The king MUST move (no other defense works)
- You cannot block two checks at once
- You cannot capture two pieces at once
- Only the king can respond

**Setting Up Double Check:**
\`\`\`
Position: Rook on e1, Bishop on c3, opponent king on e8
1.Bc3-b4+ discovers check from rook
   BUT if bishop also gives check... that's double check!
\`\`\`

**Double Check in Action:**
\`\`\`
1.Nd6++ (Knight checks AND discovers rook check)
King MUST move - no other option exists
\`\`\`

**Note:** We use "++" to denote double check.`,
          fen: 'r1bqk2r/ppppnppp/2n5/2b1N3/2B1P3/8/PPPP1PPP/RNBQK2R w KQkq - 0 5',
          arrows: [
            { from: 'e5', to: 'f7', color: 'red' },
            { from: 'c4', to: 'f7', color: 'orange' },
          ],
        },
        {
          title: 'Zwischenzug (In-Between Move)',
          content: `**Zwischenzug** (German for "in-between move") is an unexpected intermediate move inserted into an expected sequence.

**The Pattern:**
\`\`\`
Expected: Opponent takes, you recapture
Zwischenzug: Opponent takes, you make a MORE IMPORTANT move first, then recapture
\`\`\`

**Why It Works:**
Your opponent assumes you'll recapture, but instead you insert a stronger threat (often check).

**Classic Example:**
\`\`\`
1.Bxe6 Bxd1? (Black takes queen, expecting Bxd7)
2.Bxd7+! (Zwischenzug! Check first!)
2...Kf8 3.Rxd1 (NOW recapture - up a piece!)
\`\`\`

**When to Look for Zwischenzug:**
- In any exchange sequence
- When your opponent has an undefended piece
- When you can give check before recapturing
- Before every "automatic" recapture, ask: "Is there something better?"`,
          fen: 'r2qkb1r/pp1npppp/2p2n2/3p2B1/3P1B2/2N5/PPP2PPP/R2QK2R w KQkq - 0 7',
        },
        {
          title: 'Combining Tactical Patterns',
          content: `Strong players combine multiple tactical themes:

**Discovery + Fork:**
\`\`\`
1.Nd5! (Discovered attack on queen + Knight forks rooks)
\`\`\`

**Zwischenzug + Pin:**
\`\`\`
1.Bxf6 Bxd1? 2.Bxd8! (Zwischenzug - take the bigger piece!)
\`\`\`

**Double Check + Mate:**
\`\`\`
1.Bg5++ (Double check leads to unstoppable mate)
\`\`\`

**Pattern Recognition Training:**
1. Solve tactical puzzles daily
2. Look for multiple threats in every position
3. Before making a "obvious" move, ask if there's something better
4. Calculate opponent's best response, not their worst

**Remember:** Tactics flow from good positions. Develop your pieces, control the center, and tactical opportunities will arise.`,
          fen: 'r2q1rk1/ppp2ppp/2nb1n2/3pp1B1/2PP4/2N2N2/PP2PPPP/R2QKB1R w KQ - 0 8',
        },
      ],
      keyConceptBoards: [
        {
          title: 'Deadly Discovered Attack',
          fen: 'r1bqkb1r/pppp1Npp/2n2n2/4p3/2B1P3/8/PPPP1PPP/RNBQK2R b KQkq - 0 4',
          description: 'White has played Nxf7! The knight attacks the queen and rook while the bishop still eyes f7. This is a discovered attack in action.',
          arrows: [
            { from: 'f7', to: 'd8', color: 'red' },
            { from: 'f7', to: 'h8', color: 'red' },
          ],
        },
        {
          title: 'Double Check Devastation',
          fen: 'r1bqk2r/pppp1ppp/2n2n2/2b5/2B1N3/4PN2/PPPP1PPP/R1BQK2R b KQkq - 0 6',
          description: 'If White plays Nd6++, it would be double check! The knight checks and discovers check from the bishop. Black\'s only option is to move the king.',
          arrows: [
            { from: 'e4', to: 'd6', color: 'green' },
            { from: 'd6', to: 'e8', color: 'red' },
            { from: 'c4', to: 'e8', color: 'orange' },
          ],
        },
      ],
      quizQuestions: [
        {
          id: 'M3.1-Q1',
          question: 'What is a discovered attack?',
          type: 'multiple_choice',
          options: ['An attack that was hidden and is revealed when a piece moves', 'An attack on two pieces at once', 'A surprise attack in the opening', 'An attack by a newly developed piece'],
          correctAnswer: 'An attack that was hidden and is revealed when a piece moves',
          explanation: 'A discovered attack occurs when a piece moves and reveals an attack from a piece that was behind it.',
        },
        {
          id: 'M3.1-Q2',
          question: 'Why is a double check so powerful?',
          type: 'multiple_choice',
          options: ['It gives you two extra moves', 'The opponent cannot block or capture - only the king can move', 'It always leads to checkmate', 'It wins the queen'],
          correctAnswer: 'The opponent cannot block or capture - only the king can move',
          explanation: 'In a double check, the only legal response is to move the king because you cannot block or capture two attackers at once.',
        },
        {
          id: 'M3.1-Q3',
          question: 'What is a zwischenzug?',
          type: 'multiple_choice',
          options: ['A German opening', 'An in-between move that interrupts an expected sequence', 'A special type of checkmate', 'A defensive technique'],
          correctAnswer: 'An in-between move that interrupts an expected sequence',
          explanation: 'Zwischenzug means "in-between move" - instead of the expected recapture, you insert a stronger move first.',
        },
        {
          id: 'M3.1-Q4',
          question: 'When should you look for a zwischenzug?',
          type: 'multiple_choice',
          options: ['Only in the opening', 'Before making any "automatic" recapture', 'Only when you are losing', 'Only with pawns'],
          correctAnswer: 'Before making any "automatic" recapture',
          explanation: 'Before every recapture that seems automatic, check if there is a stronger in-between move, especially a check.',
        },
        {
          id: 'M3.1-Q5',
          question: 'What notation is used for double check?',
          type: 'multiple_choice',
          options: ['+ (single plus)', '++ (double plus)', '# (hashtag)', 'x (capture symbol)'],
          correctAnswer: '++ (double plus)',
          explanation: 'Double check is denoted with ++ to distinguish it from regular check (+) and checkmate (#).',
        },
      ],
    },
  },
  {
    id: 'M3.2',
    level: 3,
    title: 'Tactical Combinations',
    description: 'Learn to link multiple tactical motifs into winning combinations.',
    order: 2,
    xpReward: 170,
    prerequisites: ['M3.1'],
    content: {
      overview: 'A combination is a forced sequence of moves that leads to a tangible advantage. Unlike single tactics, combinations link multiple motifs together. Learning to calculate these multi-move sequences separates intermediate players from beginners.',
      sections: [
        {
          title: 'Two-Move Combinations',
          content: `**Structure of a Two-Move Combination:**
\`\`\`
Move 1: Create a threat (often a sacrifice)
Move 2: Execute the winning blow
\`\`\`

**Classic Two-Move Pattern - Remove the Defender:**
\`\`\`
1.Bxf6! (Removes the knight defending h7)
2.Qxh7# (Checkmate!)
\`\`\`

**The Greek Gift Sacrifice:**
\`\`\`
1.Bxh7+! Kxh7 (King must take)
2.Ng5+ (Fork king and discovered attack setup)
\`\`\`

**Keys to Two-Move Combinations:**
1. Identify the target (usually the king or a major piece)
2. Find what defends the target
3. Remove the defender or distract it
4. Execute the final blow`,
          fen: 'r1bq1rk1/ppp2ppp/2nb1n2/3pp1B1/2PP4/2N1PN2/PP3PPP/R2QKB1R w KQ - 0 7',
          arrows: [
            { from: 'g5', to: 'f6', color: 'red' },
          ],
        },
        {
          title: 'Three-Move Combinations',
          content: `**Adding Depth:**
Three-move combinations require seeing further ahead.

**Pattern - Sacrifice, Pursuit, Capture:**
\`\`\`
1.Bxh7+! Kxh7 (Sacrifice!)
2.Ng5+ Kg8 (Pursuit - forcing moves)
3.Qh5 (Setting up Qh7# or Qxf7#)
\`\`\`

**Pattern - Deflection then Fork:**
\`\`\`
1.Qxd8! Rxd8 (Deflect the defender)
2.Nxf7 Rf8 (Fork won the exchange)
3.Nxe5 (Consolidate - up material)
\`\`\`

**Calculation Tips:**
- Find forcing moves (checks, captures, threats)
- Calculate the opponent's BEST response, not their worst
- Ask "What does my opponent want to do?" after each move
- Verify the final position is actually winning`,
          fen: 'r1bq1rk1/pppp1ppp/2n2n2/2b1p1B1/2B1P3/3P1N2/PPP2PPP/RN1QK2R w KQ - 0 6',
        },
        {
          title: 'Sacrifices in Combinations',
          content: `**Types of Sacrifices:**

**1. Real Sacrifice**
Give up material for a mating attack:
\`\`\`
1.Qxh7+! Kxh7 2.Rh3+ Kg8 3.Rh8#
\`\`\`

**2. Temporary Sacrifice (Sham Sacrifice)**
Material is recovered with interest:
\`\`\`
1.Nxe5! Bxd1 (Takes the queen)
2.Bxf7+ Ke7 3.Nd5# (Material recovered + mate!)
\`\`\`

**3. Exchange Sacrifice**
Give rook for minor piece for long-term compensation:
\`\`\`
1.Rxc6! bxc6 (Destroys pawn structure)
\`\`\`

**When to Sacrifice:**
- When it leads to forced checkmate
- When you recover the material with interest
- When it exposes the enemy king
- When it destroys the opponent's coordination`,
          fen: 'r1bqr1k1/pppp1ppp/2n2n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 w - - 0 8',
        },
        {
          title: 'Practical Calculation',
          content: `**The Calculation Process:**

**Step 1: Candidate Moves**
List 2-3 promising moves to calculate.

**Step 2: Forcing Move Trees**
Calculate forcing sequences (checks, captures, threats).

**Step 3: Evaluate End Positions**
Assess the final position after each sequence.

**Step 4: Compare and Decide**
Choose the variation that leads to the best position.

**Avoiding Blunders:**
- After finding a good move, look for a better one
- Check your opponent's best defense, not their worst
- "Blunder check" - what can go wrong?

**Practice Method:**
\`\`\`
1. Set up a tactical puzzle
2. Don't move pieces - calculate in your head
3. Write down your answer
4. Check the solution
5. If wrong, understand why
\`\`\``,
          fen: 'r2qkb1r/pp1bpppp/2np1n2/1B6/3NP3/2N5/PPP2PPP/R1BQK2R w KQkq - 0 6',
        },
      ],
      keyConceptBoards: [
        {
          title: 'Greek Gift Sacrifice',
          fen: 'r1bq1rk1/pppn1ppp/3bpn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 0 9',
          description: 'White can play 1.Bxh7+! Kxh7 2.Ng5+ Kg6 (or Kg8) 3.Qg4 with a devastating attack. This is the famous Greek Gift sacrifice.',
          arrows: [
            { from: 'd3', to: 'h7', color: 'red' },
            { from: 'f3', to: 'g5', color: 'orange' },
          ],
        },
        {
          title: 'Combination in Action',
          fen: 'r1bqr1k1/pppp1ppp/2n2n2/2b5/2BNP3/8/PPP2PPP/RNBQ1RK1 w - - 0 8',
          description: 'White has 1.Nxc6! bxc6 2.Bxf7+! Rxf7 3.Qxd8+ winning Black\'s queen - a classic two-move combination using deflection.',
          arrows: [
            { from: 'd4', to: 'c6', color: 'green' },
            { from: 'c4', to: 'f7', color: 'orange' },
          ],
        },
      ],
      quizQuestions: [
        {
          id: 'M3.2-Q1',
          question: 'What is a chess combination?',
          type: 'multiple_choice',
          options: ['Any capture sequence', 'A forced sequence of moves leading to advantage', 'Trading pieces', 'An opening strategy'],
          correctAnswer: 'A forced sequence of moves leading to advantage',
          explanation: 'A combination is a forced sequence of moves, often involving a sacrifice, that leads to a tangible advantage like winning material or checkmate.',
        },
        {
          id: 'M3.2-Q2',
          question: 'What is a "sham sacrifice"?',
          type: 'multiple_choice',
          options: ['A sacrifice that doesn\'t work', 'A temporary sacrifice where material is recovered', 'A sacrifice of a pawn', 'A sacrifice in the endgame'],
          correctAnswer: 'A temporary sacrifice where material is recovered',
          explanation: 'A sham sacrifice is a temporary sacrifice where the material is recovered with interest, often through forced moves.',
        },
        {
          id: 'M3.2-Q3',
          question: 'What is the first step in calculating a combination?',
          type: 'multiple_choice',
          options: ['Make the first move that looks good', 'List candidate moves to calculate', 'Ask your opponent for advice', 'Move your king to safety'],
          correctAnswer: 'List candidate moves to calculate',
          explanation: 'Start by identifying 2-3 promising candidate moves to analyze before calculating the consequences of each.',
        },
        {
          id: 'M3.2-Q4',
          question: 'In a "remove the defender" combination, what do you do?',
          type: 'multiple_choice',
          options: ['Remove your own weak piece', 'Capture or deflect a piece that defends a target', 'Castle to safety', 'Exchange queens'],
          correctAnswer: 'Capture or deflect a piece that defends a target',
          explanation: 'Remove the defender involves eliminating or distracting a piece that protects a key target, allowing you to win that target.',
        },
        {
          id: 'M3.2-Q5',
          question: 'What should you check after finding a good move?',
          type: 'multiple_choice',
          options: ['Nothing - play it immediately', 'Whether there\'s an even better move', 'Your opponent\'s rating', 'How much time you have'],
          correctAnswer: 'Whether there\'s an even better move',
          explanation: 'After finding a good move, always look for a better one. The first good move you see might not be the best.',
        },
      ],
    },
  },
  {
    id: 'M3.3',
    level: 3,
    title: 'Opening Theory - Classical Systems',
    description: 'Study foundational opening systems: the Italian Game, Spanish Game, and Queen\'s Gambit.',
    order: 3,
    xpReward: 160,
    prerequisites: ['M3.2'],
    content: {
      overview: 'While opening principles are universal, specific opening knowledge gives you direction and purpose in the first phase of the game. We\'ll study three of the most important classical openings: the Italian Game, the Spanish Game (Ruy Lopez), and the Queen\'s Gambit.',
      sections: [
        {
          title: 'The Italian Game (Giuoco Piano)',
          content: `**Opening Moves:**
\`\`\`
1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5
\`\`\`

**Key Ideas for White:**
- Quick development targeting f7 (weakest square)
- Central control with d3 or d4
- Prepare c3 and d4 to gain space

**Key Ideas for Black:**
- Develop harmoniously
- Watch for tactical tricks on f7
- Consider ...d6, ...Nf6, ...O-O setup

**Main Lines:**
\`\`\`
Giuoco Piano: 4.c3 (preparing d4)
Evans Gambit: 4.b4!? (sacrifice for quick development)
Italian Game Modern: 4.d3 (slower, solid)
\`\`\`

**Critical Position After 4.c3 Nf6 5.d4:**
White has a strong center; Black should challenge with 5...exd4 6.cxd4 Bb4+`,
          fen: 'r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
          highlights: [
            { square: 'f7', color: 'rgba(255, 0, 0, 0.3)' },
          ],
        },
        {
          title: 'The Spanish Game (Ruy Lopez)',
          content: `**Opening Moves:**
\`\`\`
1.e4 e5 2.Nf3 Nc6 3.Bb5
\`\`\`

**The Idea Behind Bb5:**
The bishop pins the knight that defends e5. While White rarely captures immediately (Bxc6), the threat influences Black's play.

**Main Variations:**
\`\`\`
Morphy Defense: 3...a6 4.Ba4 Nf6 5.O-O
Berlin Defense: 3...Nf6 (solid, drawish)
Classical: 3...Bc5 (active but allows 4.c3)
\`\`\`

**Critical Position - Morphy Defense:**
\`\`\`
1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 Nf6 5.O-O Be7 
6.Re1 b5 7.Bb3 O-O 8.c3 d6
\`\`\`
This is the main tabiya (starting position for theoretical play).

**Key Plans:**
- White: d4, Nbd2, Nf1-g3, prepare kingside attack
- Black: ...Na5 to trade the strong bishop, ...c5 counterplay`,
          fen: 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
          arrows: [
            { from: 'b5', to: 'c6', color: 'orange' },
            { from: 'c6', to: 'e5', color: 'red' },
          ],
        },
        {
          title: 'The Queen\'s Gambit',
          content: `**Opening Moves:**
\`\`\`
1.d4 d5 2.c4
\`\`\`

**The "Gambit":**
It's not a true gambit! After 2...dxc4, White easily recovers the pawn.

**Black's Main Responses:**
\`\`\`
Queen's Gambit Declined (QGD): 2...e6 (solid)
Queen's Gambit Accepted (QGA): 2...dxc4 (active)
Slav Defense: 2...c6 (solid, keeps bishop active)
\`\`\`

**QGD Key Position:**
\`\`\`
1.d4 d5 2.c4 e6 3.Nc3 Nf6 4.Bg5 Be7 5.e3 O-O 6.Nf3
\`\`\`
White has space; Black is solid but slightly cramped.

**Plans:**
- White: e3-e4 break, minority attack (b4-b5)
- Black: ...c5 or ...dxc4 followed by ...c5, ...e5 break`,
          fen: 'rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq c3 0 2',
          arrows: [
            { from: 'c4', to: 'd5', color: 'red' },
          ],
        },
        {
          title: 'Building Your Opening Repertoire',
          content: `**For White, choose ONE system:**
- 1.e4 → Italian Game or Spanish Game
- 1.d4 → Queen's Gambit

**For Black:**
- Against 1.e4 → Learn ONE defense (e.g., 1...e5 going into Italian/Spanish)
- Against 1.d4 → Learn ONE defense (e.g., QGD or Slav)

**Study Method:**
1. Learn the first 5-6 moves of your chosen opening
2. Understand the key ideas (not just moves)
3. Study 2-3 main variations
4. Play it repeatedly to gain experience
5. Analyze your games to find improvements

**Avoid:**
- Learning too many openings at once
- Memorizing moves without understanding
- Obscure gambits (save them for later)

**Focus:** Understanding the typical middlegame plans matters more than memorizing 20 moves of theory.`,
          fen: 'r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
        },
      ],
      keyConceptBoards: [
        {
          title: 'Italian Game - Critical Position',
          fen: 'r1bqk1nr/pppp1ppp/2n5/2b1p3/2BPP3/5N2/PPP2PPP/RNBQK2R b KQkq d3 0 4',
          description: 'After 4.d4, White stakes a claim in the center. Black should respond with 4...exd4, not defend passively with 4...d6.',
          arrows: [
            { from: 'e5', to: 'd4', color: 'green' },
            { from: 'd4', to: 'e5', color: 'red' },
          ],
        },
        {
          title: 'Ruy Lopez Main Tabiya',
          fen: 'r1bq1rk1/2ppbppp/p1n2n2/1p2p3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 w - - 0 9',
          description: 'The main starting position for Ruy Lopez theory. Both sides have completed development and now fight for the center and initiative.',
          highlights: [
            { square: 'd4', color: 'rgba(79, 152, 163, 0.3)' },
            { square: 'c5', color: 'rgba(232, 175, 52, 0.3)' },
          ],
        },
      ],
      quizQuestions: [
        {
          id: 'M3.3-Q1',
          question: 'What is the key idea behind 3.Bb5 in the Spanish Game?',
          type: 'multiple_choice',
          options: ['To trade bishop for knight immediately', 'To pin the knight that defends e5', 'To attack the a6 pawn', 'To prepare queenside castling'],
          correctAnswer: 'To pin the knight that defends e5',
          explanation: 'The bishop on b5 pins the knight on c6, which is the defender of the e5 pawn, creating pressure on Black\'s center.',
        },
        {
          id: 'M3.3-Q2',
          question: 'In the Italian Game, which square is White often targeting?',
          type: 'multiple_choice',
          options: ['a7', 'c7', 'f7', 'h7'],
          correctAnswer: 'f7',
          explanation: 'The f7 square is defended only by the king at the start. The Italian bishop on c4 and threats like Ng5 target this weakness.',
        },
        {
          id: 'M3.3-Q3',
          question: 'Is the Queen\'s Gambit a true gambit?',
          type: 'multiple_choice',
          options: ['Yes, the pawn is lost forever', 'No, White easily recovers the pawn', 'Only against strong players', 'It depends on the variation'],
          correctAnswer: 'No, White easily recovers the pawn',
          explanation: 'After 2...dxc4, White can easily recover the pawn with moves like Qa4+ or e3 followed by Bxc4. It\'s not a true sacrifice.',
        },
        {
          id: 'M3.3-Q4',
          question: 'What is the Morphy Defense in the Ruy Lopez?',
          type: 'multiple_choice',
          options: ['3...Bc5', '3...a6', '3...Nf6', '3...d6'],
          correctAnswer: '3...a6',
          explanation: 'The Morphy Defense is 3...a6, asking the bishop what it wants to do. It\'s the most popular response to the Ruy Lopez.',
        },
        {
          id: 'M3.3-Q5',
          question: 'When building an opening repertoire, you should:',
          type: 'multiple_choice',
          options: ['Learn as many openings as possible', 'Focus on ONE system for White and ONE for Black', 'Only play gambits', 'Memorize 20+ moves of theory'],
          correctAnswer: 'Focus on ONE system for White and ONE for Black',
          explanation: 'It\'s better to deeply understand one opening than to superficially know many. Build expertise gradually.',
        },
      ],
    },
  },
  {
    id: 'M3.4',
    level: 3,
    title: 'Positional Concepts',
    description: 'Learn about open files, outposts, and weak squares to improve your strategic play.',
    order: 4,
    xpReward: 160,
    prerequisites: ['M3.3'],
    content: {
      overview: 'Positional chess is about long-term advantages rather than immediate tactics. Understanding open files, outposts, and weak squares will help you form strategic plans and improve piece placement. These concepts separate solid intermediate players from tactical-only players.',
      sections: [
        {
          title: 'Open Files',
          content: `An **open file** is a file with no pawns on it. A **semi-open file** has only enemy pawns.

**Why Open Files Matter:**
- Rooks are most powerful on open files
- They penetrate into the enemy position
- Control of an open file often decides games

**How to Use Open Files:**
1. Place a rook on the open file
2. Double rooks (put both rooks on the file)
3. Penetrate to the 7th or 8th rank
4. Coordinate with other pieces to attack

**The 7th Rank:**
A rook on the 7th rank is extremely powerful:
- Attacks pawns from behind
- Cuts off the enemy king
- Often leads to tactical opportunities

**Creating Open Files:**
- Trade pawns on a file
- Sacrifice a pawn to open a file toward the enemy king`,
          fen: 'r4rk1/pp3ppp/2p5/3p4/3P4/2P5/PP3PPP/R4RK1 w - - 0 15',
          arrows: [
            { from: 'f1', to: 'f7', color: 'green' },
            { from: 'a1', to: 'e1', color: 'blue' },
          ],
          highlights: [
            { square: 'e1', color: 'rgba(79, 152, 163, 0.3)' },
            { square: 'e8', color: 'rgba(79, 152, 163, 0.3)' },
          ],
        },
        {
          title: 'Outposts',
          content: `An **outpost** is a square that:
1. Cannot be attacked by enemy pawns
2. Is protected by your own pawn
3. Is an ideal home for a piece (usually a knight)

**Why Outposts Are Valuable:**
- A piece on an outpost cannot be chased away by pawns
- Knights on outposts are especially strong
- Outposts in the center or enemy territory are best

**Creating Outposts:**
\`\`\`
Position: Your pawns on d4, e4; enemy pawn on e6
The d5 square is an outpost (e6 pawn cannot attack it)
\`\`\`

**Using Outposts:**
1. Identify potential outpost squares
2. Maneuver your knight toward the outpost
3. Establish the knight there
4. Use the knight to support other operations

**Example:** A knight on d5 or e5, supported by a pawn, is often worth more than a rook!`,
          fen: 'r1bq1rk1/ppp2ppp/2n1pn2/3pN3/2PP4/2N5/PP2PPPP/R1BQKB1R w KQ - 0 7',
          highlights: [
            { square: 'e5', color: 'rgba(0, 255, 0, 0.5)' },
            { square: 'd5', color: 'rgba(79, 152, 163, 0.3)' },
          ],
        },
        {
          title: 'Weak Squares',
          content: `A **weak square** is one that cannot be defended by a pawn. It's the flip side of an outpost - what's an outpost for you is a weakness for your opponent.

**How Weak Squares Are Created:**
- Pawn moves that leave holes behind
- Pawn trades that create permanent weaknesses
- Fianchetto structures can create weaknesses

**Common Weak Square Patterns:**

**1. f3/f6 Weakness:**
\`\`\`
After ...g6, the f6 square becomes weak
White can maneuver Nh4-f5 or Ng5-e6
\`\`\`

**2. Hole on d5 or e5:**
\`\`\`
After ...c6 and ...e5, Black has no d5 pawn
White's knight on d5 becomes a monster
\`\`\`

**Exploiting Weak Squares:**
1. Target weak squares with your pieces
2. Trade off defenders of weak squares
3. Establish pieces on the weak squares
4. Use weak squares as bases for attack`,
          fen: 'r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1BP2/PPPQ2PP/R3KB1R w KQ - 0 9',
          highlights: [
            { square: 'f6', color: 'rgba(255, 0, 0, 0.4)' },
            { square: 'd5', color: 'rgba(255, 0, 0, 0.4)' },
          ],
        },
        {
          title: 'Strategic Planning',
          content: `**Forming a Plan:**

**Step 1: Assess the Pawn Structure**
- Where are the open files?
- Where are the weak squares?
- What pawn breaks are possible?

**Step 2: Evaluate Piece Activity**
- Which pieces are passive?
- Which pieces can improve?
- Are there any outposts?

**Step 3: Identify Targets**
- Weak pawns
- Weak squares
- Poorly defended pieces

**Step 4: Create a Plan**
\`\`\`
"I will double rooks on the c-file, trade off 
his bishop defending c7, and win the c7 pawn"
\`\`\`

**Strategic Principles:**
- Improve your worst-placed piece
- Create threats; don't just defend
- Piece placement often matters more than material
- Long-term weaknesses accumulate`,
          fen: 'r1bq1rk1/1pp2ppp/p1np1n2/2b1p3/2B1P3/2PP1N2/PP1N1PPP/R1BQ1RK1 w - - 0 9',
        },
      ],
      keyConceptBoards: [
        {
          title: 'Rook on the 7th Rank',
          fen: '4r1k1/ppp2Rpp/8/8/8/8/PPP3PP/6K1 w - - 0 20',
          description: 'White\'s rook on f7 is devastating. It attacks the g7 and b7 pawns, cuts off the black king, and creates mating threats.',
          arrows: [
            { from: 'f7', to: 'b7', color: 'red' },
            { from: 'f7', to: 'g7', color: 'red' },
          ],
        },
        {
          title: 'Perfect Knight Outpost',
          fen: 'r1bq1rk1/pp3ppp/2n1p3/2NpP3/3P4/8/PP3PPP/R1BQ1RK1 w - - 0 12',
          description: 'The white knight on c5 is on a perfect outpost. The e6 and b6 pawns cannot attack it. This knight dominates the position.',
          highlights: [
            { square: 'c5', color: 'rgba(0, 255, 0, 0.5)' },
          ],
        },
      ],
      quizQuestions: [
        {
          id: 'M3.4-Q1',
          question: 'What is an open file?',
          type: 'multiple_choice',
          options: ['A file with your rook on it', 'A file with no pawns', 'A file next to the king', 'Any file on the edge of the board'],
          correctAnswer: 'A file with no pawns',
          explanation: 'An open file has no pawns on it, allowing rooks to move freely up and down the file.',
        },
        {
          id: 'M3.4-Q2',
          question: 'What makes a square an "outpost"?',
          type: 'multiple_choice',
          options: ['It\'s in the center', 'It cannot be attacked by enemy pawns and is defended by your pawn', 'It\'s occupied by a rook', 'It\'s near the enemy king'],
          correctAnswer: 'It cannot be attacked by enemy pawns and is defended by your pawn',
          explanation: 'An outpost is a square that cannot be attacked by enemy pawns (they\'ve advanced past it) and is ideally defended by your own pawn.',
        },
        {
          id: 'M3.4-Q3',
          question: 'Why is a rook on the 7th rank so powerful?',
          type: 'multiple_choice',
          options: ['It attacks the enemy king directly', 'It attacks pawns from behind and cuts off the king', 'It can promote to a queen', 'It cannot be captured'],
          correctAnswer: 'It attacks pawns from behind and cuts off the king',
          explanation: 'A rook on the 7th rank attacks pawns on their starting squares (from behind) and restricts the enemy king to the back rank.',
        },
        {
          id: 'M3.4-Q4',
          question: 'What is a weak square?',
          type: 'multiple_choice',
          options: ['Any square on the edge', 'A square that cannot be defended by a pawn', 'A square with a piece on it', 'A square your king occupies'],
          correctAnswer: 'A square that cannot be defended by a pawn',
          explanation: 'A weak square is one that pawns can no longer control, making it vulnerable to occupation by enemy pieces.',
        },
        {
          id: 'M3.4-Q5',
          question: 'Which piece benefits most from occupying an outpost?',
          type: 'multiple_choice',
          options: ['Queen', 'Rook', 'Knight', 'Bishop'],
          correctAnswer: 'Knight',
          explanation: 'Knights benefit most from outposts because they cannot be chased away by pawns and can exert influence without being easily challenged.',
        },
      ],
    },
  },
  {
    id: 'M3.5',
    level: 3,
    title: 'King and Pawn Endgames',
    description: 'Master opposition, triangulation, and essential pawn ending techniques.',
    order: 5,
    xpReward: 180,
    prerequisites: ['M3.4'],
    content: {
      overview: 'King and pawn endgames are the most fundamental endgames in chess. They teach pure technique and calculation. The concepts of opposition and triangulation learned here apply to many other endgames. A single mistake in these positions can turn a win into a draw or a draw into a loss.',
      sections: [
        {
          title: 'The Opposition',
          content: `**What is Opposition?**
When two kings stand on the same rank, file, or diagonal with one square between them, the side NOT to move has the **opposition**.

**Why It Matters:**
The king with opposition can force the other king to give way.

\`\`\`
Position: White Ke4, Black Ke6 (White to move)
White does NOT have opposition - Black can hold the draw
1.Kd4 Kd6 (Black maintains opposition)
\`\`\`

**Types of Opposition:**
- **Direct opposition:** Kings one square apart
- **Distant opposition:** Kings 3 or 5 squares apart (odd number)
- **Diagonal opposition:** On a diagonal with odd squares between

**Taking the Opposition:**
Move your king to create opposition. The other king must then give way.

**Rule:** With kings facing each other, if it's your opponent's move, you have the opposition.`,
          fen: '8/8/4k3/8/4K3/8/8/8 w - - 0 1',
          arrows: [
            { from: 'e4', to: 'e5', color: 'red' },
          ],
          highlights: [
            { square: 'e5', color: 'rgba(255, 0, 0, 0.3)' },
          ],
        },
        {
          title: 'King + Pawn vs King',
          content: `**The Basic Position:**
Can the attacking king get in front of the pawn? If yes, it usually wins.

**The Rule of the Square:**
Draw a square from the pawn to the promotion square. If the defending king can step into this square, it catches the pawn.

**Key Principles:**
1. **King in front of pawn = winning (usually)**
2. **Pawn on the 6th rank, king in front = always wins**
3. **Rook pawn (a or h pawn) = often draws**

**Critical Position:**
\`\`\`
White: Ke6, Pd5 (King in front of pawn)
Black: Ke8
1.d6 Kd8 2.d7 Kc7 3.Ke7 and promotes
\`\`\`

**The Rook Pawn Exception:**
\`\`\`
White: Kb6, Pa6; Black: Kb8
1.a7+ Ka8 2.Ka6 stalemate!
\`\`\`
Rook pawns often draw because the defending king can reach the corner.`,
          fen: '4k3/8/4K3/3P4/8/8/8/8 w - - 0 1',
          arrows: [
            { from: 'd5', to: 'd8', color: 'green' },
            { from: 'e6', to: 'e7', color: 'blue' },
          ],
        },
        {
          title: 'Triangulation',
          content: `**What is Triangulation?**
A technique to lose a tempo (pass the move to your opponent) by using three squares instead of one.

**When to Use:**
When you need to reach the same position but with your opponent to move.

**Example:**
\`\`\`
Position: White Kd4, Pd5; Black Kd6
1.Kd4-c4 Kd6-c6 (Black mirrors)
2.Kc4-c5 Kc6-d7 (Black must retreat)
3.Kc5-d5! (Same position, but now Black to move!)
\`\`\`

**The Triangle:**
White moved: d4 → c4 → c5 → d5 (4 squares)
Black moved: d6 → c6 → d7 (3 squares)
White "lost a tempo" and now Black must give way.

**Why It Works:**
The attacker has more squares to maneuver. By using a "triangle" of squares, you gain the opposition.`,
          fen: '8/8/3k4/3P4/3K4/8/8/8 w - - 0 1',
          arrows: [
            { from: 'd4', to: 'c4', color: 'blue' },
            { from: 'c4', to: 'c5', color: 'blue' },
            { from: 'c5', to: 'd5', color: 'green' },
          ],
        },
        {
          title: 'Practical Pawn Endgames',
          content: `**Key Positions to Know:**

**1. King and Two Pawns vs King**
Almost always a win unless both pawns are rook pawns.

**2. King and Pawn vs King and Pawn**
Depends on whose pawn is faster and who has the opposition.

**3. Outside Passed Pawn**
A passed pawn away from the main action draws the enemy king away, letting you win the other pawns.

**Calculation in Pawn Endings:**
- Count squares (can the king catch the pawn?)
- Calculate exactly - no hand-waving!
- Consider pawn breakthroughs

**Common Breakthrough:**
\`\`\`
White: Pa5, Pb5, Pc5
Black: Pa7, Pb7, Pc7
1.b6! axb6 (or cxb6) 2.c6! bxc6 3.a6 and promotes
\`\`\`

**Remember:** In pawn endings, every tempo matters. One move can change the result!`,
          fen: '8/2k5/8/p1p1p3/P1P1P3/8/2K5/8 w - - 0 1',
          highlights: [
            { square: 'b4', color: 'rgba(79, 152, 163, 0.3)' },
            { square: 'b5', color: 'rgba(79, 152, 163, 0.3)' },
          ],
        },
      ],
      keyConceptBoards: [
        {
          title: 'Opposition - Key Position',
          fen: '8/8/8/4k3/8/4K3/4P3/8 w - - 0 1',
          description: 'White to move. Playing 1.Ke4? allows 1...Ke6 with opposition for Black - draw! Instead, 1.Kf4! takes the opposition when Black plays ...Kf6.',
          arrows: [
            { from: 'e3', to: 'f4', color: 'green' },
            { from: 'e3', to: 'e4', color: 'red' },
          ],
        },
        {
          title: 'Triangulation in Action',
          fen: '8/8/1p1k4/1P6/3K4/8/8/8 w - - 0 1',
          description: 'White needs to get the opposition. The triangulation Kd4-c3-c4-d4 achieves this, forcing Black to give ground.',
          arrows: [
            { from: 'd4', to: 'c3', color: 'blue' },
            { from: 'c3', to: 'c4', color: 'blue' },
          ],
        },
      ],
      quizQuestions: [
        {
          id: 'M3.5-Q1',
          question: 'When two kings face each other one square apart, who has the opposition?',
          type: 'multiple_choice',
          options: ['The side to move', 'The side NOT to move', 'Neither', 'Both'],
          correctAnswer: 'The side NOT to move',
          explanation: 'The player NOT to move has the opposition because the opponent must move their king first and give ground.',
        },
        {
          id: 'M3.5-Q2',
          question: 'In King + Pawn vs King, what generally happens if the attacking king is in front of the pawn?',
          type: 'multiple_choice',
          options: ['It\'s always a draw', 'The attacker usually wins', 'The defender wins', 'It depends on the clock'],
          correctAnswer: 'The attacker usually wins',
          explanation: 'When the attacking king is in front of the pawn, it can usually escort the pawn to promotion.',
        },
        {
          id: 'M3.5-Q3',
          question: 'Why are rook pawn (a or h pawn) endings often drawn?',
          type: 'multiple_choice',
          options: ['Rook pawns move slower', 'The defending king can reach the corner and create stalemate', 'Rook pawns cannot promote', 'The rook pawn is worth less'],
          correctAnswer: 'The defending king can reach the corner and create stalemate',
          explanation: 'The defending king can often reach the corner square, creating a stalemate when the pawn reaches the 7th rank.',
        },
        {
          id: 'M3.5-Q4',
          question: 'What is triangulation?',
          type: 'multiple_choice',
          options: ['Attacking from three sides', 'A technique to lose a tempo by maneuvering in a triangle', 'Having three pawns', 'A special type of checkmate'],
          correctAnswer: 'A technique to lose a tempo by maneuvering in a triangle',
          explanation: 'Triangulation is a technique where you use three squares instead of one to reach the same position but with your opponent to move.',
        },
        {
          id: 'M3.5-Q5',
          question: 'What is an "outside passed pawn"?',
          type: 'multiple_choice',
          options: ['A passed pawn on the edge file', 'A passed pawn away from the other pawns that decoys the enemy king', 'A pawn that cannot promote', 'A pawn protected by two pawns'],
          correctAnswer: 'A passed pawn away from the other pawns that decoys the enemy king',
          explanation: 'An outside passed pawn is far from the main pawn action and forces the enemy king to chase it, leaving your king free to capture the remaining pawns.',
        },
      ],
    },
  },
  {
    id: 'M3.6',
    level: 3,
    title: 'Piece Coordination',
    description: 'Learn about the bishop pair advantage and the knight vs bishop debate.',
    order: 6,
    xpReward: 150,
    prerequisites: ['M3.5'],
    content: {
      overview: 'Understanding how pieces work together and when one piece type is better than another is a key skill. The bishop pair is a well-known advantage, but knights can dominate in the right positions. Learning to evaluate these imbalances will improve your strategic decision-making.',
      sections: [
        {
          title: 'The Bishop Pair',
          content: `Having both bishops when your opponent has only one (or none) is called having the **bishop pair**.

**Why the Bishop Pair is Strong:**
- Bishops work on opposite colors - they don't interfere with each other
- Two bishops can control both color complexes
- Long-range power across the board
- Excellent coordination in open positions

**The Bishop Pair Bonus:**
In evaluation, the bishop pair is worth approximately +0.5 pawns.

**When the Bishop Pair Shines:**
- Open positions with few pawns
- Endgames with passed pawns
- Positions where they can sweep across long diagonals
- Against doubled or isolated pawns

**How to Get the Bishop Pair:**
- Avoid trading your bishops for knights unnecessarily
- Make your opponent trade bishop for knight
- Capture with pawns toward the center when offered trades`,
          fen: 'r1bqkbnr/pp1ppppp/2n5/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq c6 0 3',
          arrows: [
            { from: 'f1', to: 'a6', color: 'blue' },
            { from: 'c1', to: 'h6', color: 'green' },
          ],
        },
        {
          title: 'Knight vs Bishop',
          content: `**When Knights Are Better:**

1. **Closed Positions:** Many pawns blocking bishops
2. **Outposts:** Secure squares for knights
3. **Fixed Pawn Structures:** Pawns on one color weaken the bishop
4. **Short-Range Battles:** Knights maneuver better in cramped spaces

**When Bishops Are Better:**

1. **Open Positions:** Clear diagonals
2. **Opposite-Side Attacks:** Bishops reach across the board
3. **Endgames:** Long-range power dominates
4. **Positions with Pawns on Both Wings:** Bishop covers both sides

**The "Good Bishop" vs "Bad Bishop":**
\`\`\`
Good Bishop: Operates on the color without your own pawns
Bad Bishop: Blocked by your own pawns on its color
\`\`\`

**Converting Good Bishop Advantage:**
- Trade off the bad bishop
- Place pawns on the opposite color from your bishop
- Use the bishop to attack weak pawns`,
          fen: 'r1bq1rk1/pp2bppp/2n1p3/3pPn2/3P4/5N2/PPP1BPPP/RNBQ1RK1 w - - 0 9',
          highlights: [
            { square: 'c8', color: 'rgba(255, 0, 0, 0.3)' },
          ],
        },
        {
          title: 'Piece Coordination Principles',
          content: `**1. Pieces Work Better Together**
Don't send pieces into battle alone. Coordinate attacks.

**2. Exchange Bad Pieces**
Trade your bad pieces for your opponent's good pieces.

**3. Don't Trade Without Reason**
Every trade changes the character of the position. Trade purposefully:
- Trade when ahead in material
- Trade to reduce opponent's attacking force
- Trade to reach a favorable endgame

**4. Minor Piece Activity**
A well-placed knight equals a bishop. A badly placed bishop equals a pawn.

**5. Rook Coordination**
- Double rooks on open files
- Connect rooks after castling
- Rooks belong behind passed pawns

**Strategic Trades:**
\`\`\`
"I'll trade my bad bishop for his good knight,
then my remaining bishop will dominate."
\`\`\``,
          fen: 'r4rk1/pp2bppp/2n1p3/q1ppP3/3P4/P1N2N2/1PP1BPPP/R2Q1RK1 w - - 0 12',
        },
        {
          title: 'Practical Examples',
          content: `**Example 1: Bishop Pair Dominance**
\`\`\`
Position: White has two bishops, Black has bishop + knight
Open position with pawns on both wings
Result: White's bishops control both sides of the board
\`\`\`

**Example 2: Knight Dominates**
\`\`\`
Position: Closed center, White knight on d5
Black's bishop blocked by pawns on d6, e7, f6
Result: Knight on d5 is worth more than the bishop
\`\`\`

**Example 3: Endgame Technique**
\`\`\`
K + B + pawns vs K + N + pawns
Put your pawns on the opposite color from your bishop
Bishop can attack pawns, protect your pawns, and support promotion
\`\`\`

**Key Takeaway:**
Don't automatically assume bishop > knight or vice versa. Evaluate the specific position!`,
          fen: 'r2q1rk1/p3bppp/1pn1pn2/2pp4/3P1B2/1QN1PN2/PP3PPP/R3KB1R w KQ - 0 10',
        },
      ],
      keyConceptBoards: [
        {
          title: 'Bishop Pair Power',
          fen: '3r2k1/pp3ppp/2p5/8/2B5/2B3P1/PP3P1P/6K1 w - - 0 25',
          description: 'White\'s two bishops dominate this open position. They control long diagonals and work together to restrict Black\'s pieces.',
          arrows: [
            { from: 'c4', to: 'f7', color: 'green' },
            { from: 'c3', to: 'h8', color: 'green' },
            { from: 'c3', to: 'a1', color: 'blue' },
          ],
        },
        {
          title: 'Knight vs Bad Bishop',
          fen: 'r2q1rk1/pp2ppbp/2n3p1/2Np4/3P4/4PN2/PP3PPP/R2QKB1R w KQ - 0 11',
          description: 'White\'s knight on c5 is powerful on its outpost. Black\'s bishop on g7 is blocked by the d4-e3 pawn chain - it\'s a "bad bishop."',
          highlights: [
            { square: 'c5', color: 'rgba(0, 255, 0, 0.5)' },
            { square: 'g7', color: 'rgba(255, 0, 0, 0.3)' },
          ],
        },
      ],
      quizQuestions: [
        {
          id: 'M3.6-Q1',
          question: 'How much extra value (in pawns) is the bishop pair typically worth?',
          type: 'multiple_choice',
          options: ['0.0', '0.25', '0.5', '1.0'],
          correctAnswer: '0.5',
          explanation: 'The bishop pair advantage is generally valued at about half a pawn (0.5) in open positions.',
        },
        {
          id: 'M3.6-Q2',
          question: 'When are knights typically better than bishops?',
          type: 'multiple_choice',
          options: ['In open positions', 'In closed positions with secure outposts', 'In endgames', 'When you have the bishop pair'],
          correctAnswer: 'In closed positions with secure outposts',
          explanation: 'Knights thrive in closed positions where pawns block the bishops, especially when they can occupy secure outpost squares.',
        },
        {
          id: 'M3.6-Q3',
          question: 'What is a "bad bishop"?',
          type: 'multiple_choice',
          options: ['A bishop that has been captured', 'A bishop blocked by its own pawns on the same color', 'A bishop on the edge of the board', 'A bishop without protection'],
          correctAnswer: 'A bishop blocked by its own pawns on the same color',
          explanation: 'A bad bishop is restricted by its own pawns being on the same color squares, limiting its mobility and effectiveness.',
        },
        {
          id: 'M3.6-Q4',
          question: 'Where should you place your pawns relative to your bishop?',
          type: 'multiple_choice',
          options: ['On the same color as your bishop', 'On the opposite color from your bishop', 'It doesn\'t matter', 'As far forward as possible'],
          correctAnswer: 'On the opposite color from your bishop',
          explanation: 'Placing pawns on the opposite color from your bishop keeps the diagonal clear for the bishop to operate.',
        },
        {
          id: 'M3.6-Q5',
          question: 'Why do two bishops work well together?',
          type: 'multiple_choice',
          options: ['They can both attack the same piece', 'They control both color complexes without interfering with each other', 'They can checkmate alone', 'They move faster than other pieces'],
          correctAnswer: 'They control both color complexes without interfering with each other',
          explanation: 'Since bishops operate on opposite colors, they never get in each other\'s way and together control the entire board.',
        },
      ],
    },
  },
];
