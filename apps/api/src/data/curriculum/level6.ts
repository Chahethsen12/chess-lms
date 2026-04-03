import { Module } from './types.js';

export const level6Modules: Module[] = [
  {
    id: 'M6.1',
    level: 6,
    title: 'Deep Opening Theory',
    description: 'Master 2-3 openings with comprehensive theoretical knowledge.',
    order: 1,
    xpReward: 200,
    prerequisites: [],
    content: {
      overview: 'At the expert level, superficial opening knowledge is no longer sufficient. You need deep understanding of 2-3 openings—knowing not just the moves but the underlying ideas, typical plans, pawn structures, and critical variations. This module teaches you how to build expert-level opening preparation, including how to handle sidelines, when to deviate from theory, and how to maintain and update your repertoire.',
      sections: [
        {
          title: 'Choosing Your Core Openings',
          content: `**Selection criteria for expert-level repertoire:**

1. **Compatibility with your style**: Tactical players need sharp openings; positional players need strategic ones
2. **Theoretical manageability**: Some openings require constant updates (Najdorf), others are more stable (London System)
3. **Rich middlegame positions**: Choose openings that lead to positions you enjoy and understand
4. **Practical considerations**: Available study time, memory capacity, risk tolerance

**The "tree" approach:**
- Select ONE main system as White (e.g., 1.e4 main lines)
- Have specific responses to Black's main defenses
- Each branch should lead to positions you know deeply

**Example White repertoire:**
- 1.e4 vs Sicilian: Open Sicilian (choose one: Anti-Sveshnikov, Anti-Najdorf, etc.)
- 1.e4 vs 1...e5: Italian or Spanish (pick one and know it deeply)
- 1.e4 vs French/Caro-Kann/others: Specific anti-systems or main lines`,
          fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1',
        },
        {
          title: 'Deep Study Methodology',
          content: `**How to study an opening deeply:**

**Phase 1: Understanding (2-4 weeks)**
- Study the historical development of the opening
- Learn the key pawn structures and typical plans
- Understand WHY moves are played, not just WHAT moves
- Study 10-20 classic games in the opening

**Phase 2: Theory (ongoing)**
- Learn main lines to move 15-20
- Know critical sidelines and their refutations
- Understand when theory "ends" and middlegame begins
- Keep a personal database of critical positions

**Phase 3: Practice (continuous)**
- Play the opening in online rapid/blitz games
- Analyze your games in the opening
- Note where you deviated and why
- Update your files based on practical experience

**Phase 4: Maintenance (monthly)**
- Check new games by strong players
- Look for new ideas and novelties
- Revise positions you've forgotten
- Add improvements based on your experience`,
        },
        {
          title: 'Handling Critical Variations',
          content: `**Every opening has "critical lines"** where precise knowledge is essential:

**Identifying critical variations:**
- Lines where both sides have committed (no easy transpositions out)
- Positions where one inaccuracy leads to a significantly worse position
- Theoretically important tabiya positions
- Lines your opponents play most often

**Study approach for critical lines:**
1. Identify the 5-10 most critical positions in your opening
2. Know these positions cold—both moves and evaluations
3. Understand the key tactical and strategic ideas
4. Prepare specific responses to your opponents' most likely choices

**Example: Najdorf English Attack**
- The e5-e6 pawn sacrifice is critical
- Know exact responses to Be3, f3, Qd2, 0-0-0 setup
- Understand when ...b5 works and when it fails
- Have answers for White's various 11th-14th move options`,
          fen: 'rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6',
          highlights: [
            { square: 'e4', color: 'rgba(79, 152, 163, 0.5)' },
            { square: 'd4', color: 'rgba(79, 152, 163, 0.5)' }
          ],
        },
        {
          title: 'Deviation and Surprise Weapons',
          content: `**Strategic deviations from main theory:**

**When to deviate:**
- When you know the resulting position better than the opponent
- To avoid heavily analyzed forced lines
- Against a well-prepared opponent
- When main lines don't suit your style

**Preparing surprise weapons:**
1. Find a playable but rare sideline
2. Study it more deeply than anyone would expect
3. Prepare it for specific opponents or situations
4. Keep it in reserve—don't use it too often

**Psychological warfare:**
- A rare move can throw opponents off their preparation
- Even objectively slightly inferior lines can be practical weapons
- The goal is to reach positions YOU know better

**Examples of effective sidelines:**
- 3.Bb5 in the Sicilian instead of 3.d4
- The Exchange Slav instead of main lines
- The London System against everything
- Offbeat lines like the Grand Prix Attack`,
          fen: 'r1bqkbnr/pp1ppppp/2n5/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 2 3',
          arrows: [
            { from: 'b5', to: 'c6', color: 'rgba(255, 170, 0, 0.8)' }
          ],
        },
      ],
      keyConceptBoards: [
        {
          title: 'Critical Tabiya - Najdorf',
          fen: 'rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6',
          description: 'This is the Najdorf tabiya. White has many choices: Be2, Bc4, Bg5, Be3, f3, g3, f4. Expert-level players must know multiple White systems and Black\'s responses to each.',
        },
        {
          title: 'Deep Theory Position - Marshall Attack',
          fen: 'r1bq1rk1/4bppp/p1n2n2/1pp1p3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 w - - 0 10',
          description: 'The Marshall Attack in the Spanish requires knowing theory 25+ moves deep in some lines. This is the critical moment where White decides whether to accept the gambit.',
          arrows: [
            { from: 'e1', to: 'e5', color: 'rgba(255, 0, 0, 0.8)' }
          ],
        },
      ],
      quizQuestions: [
        {
          id: 'M6.1-Q1',
          question: 'How many openings should an expert-level player master deeply?',
          type: 'multiple_choice',
          options: ['As many as possible', '2-3 openings', 'Only 1 opening', '10 or more'],
          correctAnswer: '2-3 openings',
          explanation: 'Expert players should have deep knowledge of 2-3 openings rather than superficial knowledge of many. Depth beats breadth at this level.',
        },
        {
          id: 'M6.1-Q2',
          question: 'What is a "tabiya" in opening theory?',
          type: 'multiple_choice',
          options: ['A type of gambit', 'A key position where theory branches', 'A defensive formation', 'An opening trap'],
          correctAnswer: 'A key position where theory branches',
          explanation: 'A tabiya is a standard position in an opening from which multiple variations branch. Knowing these positions and their continuations is essential for deep opening preparation.',
        },
        {
          id: 'M6.1-Q3',
          question: 'When is it advantageous to deviate from main theory?',
          type: 'multiple_choice',
          options: ['Never - main lines are always best', 'When you know the resulting position better than your opponent', 'Only when losing', 'Only in blitz games'],
          correctAnswer: 'When you know the resulting position better than your opponent',
          explanation: 'Deviating to a line you know well but your opponent doesn\'t can be a practical advantage, even if the line is objectively slightly inferior.',
        },
        {
          id: 'M6.1-Q4',
          question: 'In the "tree" approach to repertoire building, what is the main trunk?',
          type: 'multiple_choice',
          options: ['Your opening move as White', 'Your response to 1.e4', 'The most popular opening', 'Your backup system'],
          correctAnswer: 'Your opening move as White',
          explanation: 'The "tree" approach starts with your main opening choice as White (1.e4 or 1.d4), with branches extending to responses against various Black defenses.',
        },
        {
          id: 'M6.1-Q5',
          question: 'What is the purpose of a "surprise weapon" in your repertoire?',
          type: 'multiple_choice',
          options: ['To play unsound moves', 'To avoid your opponent\'s preparation and reach positions you know better', 'To always win quickly', 'To confuse the tournament director'],
          correctAnswer: 'To avoid your opponent\'s preparation and reach positions you know better',
          explanation: 'Surprise weapons are sidelines you\'ve studied deeply that can throw opponents off their preparation and lead to positions where you have superior knowledge.',
        },
      ],
    },
  },
  {
    id: 'M6.2',
    level: 6,
    title: 'Complex Positional Play',
    description: 'Master weak color complexes and the good bishop vs bad bishop dynamics.',
    order: 2,
    xpReward: 225,
    prerequisites: ['M6.1'],
    content: {
      overview: 'Advanced positional play goes beyond simple concepts like open files and outposts. At the expert level, you must understand color complexes—how to exploit weak squares of one color—and the nuances of bishop evaluation. A "bad" bishop isn\'t always bad, and a "good" bishop can become a liability. This module explores these subtle positional factors that often determine the outcome of games between equally skilled players.',
      sections: [
        {
          title: 'Understanding Color Complexes',
          content: `**Color complex weakness** = multiple squares of one color that are vulnerable:

**How color weaknesses arise:**
- Advancing pawns leaves squares behind (f3-g4 weakens light squares)
- Trading the bishop that defends those squares
- Fianchetto structures with the bishop traded

**Exploiting color weaknesses:**
1. **Occupy the weak squares**: Place pieces, especially knights, on them
2. **Diagonal control**: Use your bishop on that color
3. **Transfer pieces**: Bring all pieces to attack via the weak complex
4. **Restrict counterplay**: Ensure opponent can't create play on the strong color

**The "Swiss cheese" position:**
When an opponent has moved all pawns to one color, their position is full of holes on the other color—like Swiss cheese.

**Classic example**: After 1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.f3 0-0 6.Be3 e5 7.d5, Black's dark squares (d6, e5, f6) become potential targets if the Bg7 is exchanged.`,
          fen: 'r1bq1rk1/ppp2pbp/2np1np1/4p3/2PPP3/2N1BP2/PP4PP/R2QKBNR w KQ - 0 8',
          highlights: [
            { square: 'd6', color: 'rgba(255, 0, 0, 0.5)' },
            { square: 'e5', color: 'rgba(255, 0, 0, 0.5)' },
            { square: 'f6', color: 'rgba(255, 0, 0, 0.5)' }
          ],
        },
        {
          title: 'Good Bishop vs Bad Bishop',
          content: `**Definitions:**
- **Good bishop**: Not blocked by its own pawns, has scope
- **Bad bishop**: Blocked by pawns on its color, limited mobility

**The nuance**: A bishop is only "bad" if:
1. The position is closed or semi-closed
2. Your pawns are FIXED on that color (not just temporarily there)
3. The bishop has no active role in the position
4. You can't activate it by trading pawns or repositioning

**When a "bad" bishop isn't really bad:**
- If it defends critical squares/pawns
- If it can become active after pawn breaks
- If it provides prophylactic value
- If the position will open

**Converting good vs bad bishop advantage:**
1. Fix opponent's pawns on the bishop's color
2. Trade pieces to emphasize the bishop difference
3. Create passed pawns on the opposite color
4. Use your good bishop to dominate the bad one`,
          fen: '8/pp2bppp/4p3/3pP3/3P4/4B3/PP3PPP/8 w - - 0 1',
          arrows: [
            { from: 'e3', to: 'c5', color: 'rgba(0, 255, 0, 0.8)' },
            { from: 'e7', to: 'd8', color: 'rgba(255, 0, 0, 0.8)' }
          ],
        },
        {
          title: 'Strategic Piece Exchanges',
          content: `**When to trade bishops:**
- Trade your bad bishop for opponent's good bishop
- Trade bishops when you have knights and opponent has weak squares
- Trade your bishop when opponent's bishop is more important

**When NOT to trade:**
- When your "bad" bishop defends crucial squares
- When the position might open (bishop gains scope)
- When bishop pair has long-term potential

**Knight vs Bishop decisions:**
- Trade bishop for knight when: You have closed position, knight outposts exist
- Keep bishop when: Position will open, pawns on both wings

**The "good knight":**
Like a "good bishop," a "good knight" has:
- Secure outpost squares
- Multiple attacking options
- Better mobility than opponent's minor pieces

**Strategic planning**: Before trading, visualize the position after the trade. Does it favor you?`,
          fen: 'r2q1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 0 9',
        },
        {
          title: 'Practical Techniques',
          content: `**Creating color weaknesses:**

1. **Provoke pawn moves**: Attack pawns to force them forward
2. **Bishop for knight trades**: Leave opponent with wrong-colored bishop
3. **Pawn breaks**: Open lines while fixing opponent's pawns

**Defending against color attacks:**
- Keep pieces flexible
- Avoid fixing pawns unnecessarily
- Trade the opponent's strong bishop
- Create counterplay on the other color

**Calculation tips:**
- Count squares of each color your pieces control
- Identify the "weak color" in any position
- Plan piece transfers via the weak squares
- Look for breakthrough ideas on the weak complex

**Training exercise:**
In any position, ask:
1. Which color complex is weak for each side?
2. Which pieces are "good" and which are "bad"?
3. What exchanges would improve my position?
4. Where should my pieces ideally be placed?`,
        },
      ],
      keyConceptBoards: [
        {
          title: 'Classic Bad Bishop',
          fen: '8/pp2bppp/4p3/3pP3/3P4/4B3/PP3PPP/8 w - - 0 1',
          description: 'Black\'s bishop on e7 is classically "bad"—blocked by pawns on e6 and d5, both on light squares. White\'s bishop on e3 has full scope and dominates the dark squares.',
          arrows: [
            { from: 'e3', to: 'a7', color: 'rgba(0, 255, 0, 0.8)' },
            { from: 'e3', to: 'h6', color: 'rgba(0, 255, 0, 0.8)' }
          ],
        },
        {
          title: 'Color Complex Domination',
          fen: 'r4rk1/pp2npbp/3p2p1/q1pPp3/2P1P2N/2N5/PP1Q1PPP/R3KB1R w KQ - 0 13',
          description: 'White\'s knight on h4 targets the weak dark squares around Black\'s king. If the Bg7 is traded, the dark square weaknesses (f6, g7, h6) become critical.',
          highlights: [
            { square: 'f6', color: 'rgba(255, 0, 0, 0.5)' },
            { square: 'h6', color: 'rgba(255, 0, 0, 0.5)' }
          ],
        },
      ],
      quizQuestions: [
        {
          id: 'M6.2-Q1',
          question: 'What creates a "color complex weakness"?',
          type: 'multiple_choice',
          options: ['Having too many pieces', 'Multiple weak squares of the same color', 'An exposed king', 'Doubled pawns'],
          correctAnswer: 'Multiple weak squares of the same color',
          explanation: 'A color complex weakness occurs when multiple squares of one color (light or dark) become vulnerable, often due to pawn advances or bishop trades.',
        },
        {
          id: 'M6.2-Q2',
          question: 'What makes a bishop "bad"?',
          type: 'multiple_choice',
          options: ['It is on the edge of the board', 'It is blocked by its own fixed pawns on the same color', 'It hasn\'t moved yet', 'It is being attacked'],
          correctAnswer: 'It is blocked by its own fixed pawns on the same color',
          explanation: 'A bad bishop is one whose mobility is restricted by its own pawns that are fixed on the same color squares as the bishop.',
        },
        {
          id: 'M6.2-Q3',
          question: 'When might a "bad" bishop actually be valuable?',
          type: 'multiple_choice',
          options: ['When it defends critical squares or pawns', 'Never - bad bishops are always liabilities', 'Only in the endgame', 'Only with queens on the board'],
          correctAnswer: 'When it defends critical squares or pawns',
          explanation: 'A technically "bad" bishop can still be valuable if it serves a defensive function, or if the position may open up later.',
        },
        {
          id: 'M6.2-Q4',
          question: 'How do you exploit a color complex weakness?',
          type: 'multiple_choice',
          options: ['Attack with pawns only', 'Place pieces on the weak squares and transfer more pieces there', 'Trade all pieces', 'Focus on the other color instead'],
          correctAnswer: 'Place pieces on the weak squares and transfer more pieces there',
          explanation: 'Exploiting color weaknesses involves occupying the weak squares with pieces (especially knights), controlling diagonals of that color, and routing more pieces to attack via those squares.',
        },
        {
          id: 'M6.2-Q5',
          question: 'Before trading a minor piece, what should you visualize?',
          type: 'multiple_choice',
          options: ['Only the material count', 'The position after the trade and whether it favors you', 'How much time you have on the clock', 'Your opponent\'s rating'],
          correctAnswer: 'The position after the trade and whether it favors you',
          explanation: 'Always visualize the position after an exchange to determine if the resulting structure, piece activity, and weaknesses favor you.',
        },
      ],
    },
  },
  {
    id: 'M6.3',
    level: 6,
    title: 'Long-term Planning',
    description: 'Learn to create and execute plans spanning all phases of the game.',
    order: 3,
    xpReward: 225,
    prerequisites: ['M6.2'],
    content: {
      overview: 'Expert chess requires thinking beyond the next few moves to formulate plans that span 15, 20, or even 30 moves. This involves understanding how the opening leads to specific middlegame structures, how those structures determine the endgame character, and how to guide the game toward favorable transformations. Long-term planning is what separates tactical players from strategic masters.',
      sections: [
        {
          title: 'The Planning Process',
          content: `**Strategic planning fundamentals:**

**1. Evaluate the position:**
- Material balance
- King safety (both sides)
- Piece activity and placement
- Pawn structure (weaknesses, strengths, potential breaks)
- Space advantage

**2. Identify strategic factors:**
- What imbalances exist?
- What are the long-term features of this position?
- Which pieces are best/worst for each side?
- What pawn breaks are possible?

**3. Formulate a plan:**
- What is your ideal piece placement?
- What pawn structure do you want?
- What should you exchange and keep?
- What is your opponent likely planning?

**4. Execute and adjust:**
- Plans should be flexible, not rigid
- Adapt when opponent's moves change the situation
- Concrete calculation still matters!`,
          fen: 'r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 0 9',
        },
        {
          title: 'Opening to Middlegame Transitions',
          content: `**Every opening implies a middlegame plan:**

**Understanding opening structures:**
- The pawn structure from the opening determines middlegame play
- Know the typical plans for BOTH sides
- Your opening choice should lead to middlegames you understand

**Examples of opening-middlegame connections:**

**Sicilian Najdorf:**
- White: Kingside attack with f3-g4-h4 or positional Be2-0-0
- Black: Queenside counterplay with ...b5, central breaks with ...d5

**Queen's Gambit Declined:**
- White: Minority attack on queenside (a4-b4-b5)
- Black: Central play with ...e5 or kingside attack

**King's Indian:**
- White: Queenside expansion (c5 break)
- Black: Kingside attack (f5-f4)

**Critical concept**: Choose openings that lead to middlegame structures you enjoy and understand deeply.`,
          fen: 'r1b1k2r/pp1pqppp/2n1pn2/2p5/2PP4/2N2NP1/PP2PPBP/R1BQK2R w KQkq - 0 7',
        },
        {
          title: 'Middlegame to Endgame Transitions',
          content: `**Thinking ahead to the endgame:**

**Questions to ask:**
1. If all pieces were traded, who would be better?
2. What pawn structure would result?
3. Are there potential passed pawns?
4. Would the minor pieces favor one side?

**Steering toward favorable endgames:**
- Trade pieces when you have a structural advantage
- Avoid trades when you have attacking chances
- Create passed pawns before simplifying
- Improve your worst piece before trading

**Endgame factors visible in the middlegame:**
- Isolated pawns become weaker as pieces come off
- Bishop vs knight considerations
- King position (active vs passive)
- Pawn majorities and potential passed pawns

**Practical example:**
If you have the bishop pair in an open position, you may want to trade into an endgame where they dominate—but calculate that the position will remain open.`,
          fen: 'r4rk1/pp1nqppp/2pbpn2/3p4/2PP4/2NBPN2/PPQ2PPP/R1B2RK1 w - - 0 11',
        },
        {
          title: 'Implementing Long-term Plans',
          content: `**Plan implementation guidelines:**

**1. Move-by-move approach:**
- Each move should either further your plan or address opponent's threats
- "Does this move improve my position?" should always be yes
- Avoid aimless moves that don't contribute

**2. Flexibility:**
- Plans are not sacred—adjust when needed
- If opponent prevents your plan, find a new one
- The ability to re-evaluate is crucial

**3. Prophylactic consideration:**
- What is opponent planning?
- Can you prevent their plan while furthering yours?
- The best moves often do both

**4. Calculation check:**
- Before committing to plan execution, calculate concrete variations
- Plans without calculation are just wishes
- Strategic and tactical thinking must combine

**Training method:**
- After each game, write down what your plan was at move 15, 25, 35
- Analyze whether you followed it and whether it was correct
- Identify moments where you should have changed plans`,
        },
      ],
      keyConceptBoards: [
        {
          title: 'Minority Attack Structure',
          fen: 'r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2N1PN2/PP2BPPP/R1BQ1RK1 w - - 0 8',
          description: 'Classic QGD structure where White plans the minority attack (a4-b4-b5) to create a weakness on c6 or an isolated pawn on d5. This plan spans moves 8-25 typically.',
          arrows: [
            { from: 'a2', to: 'a4', color: 'rgba(79, 152, 163, 0.8)' },
            { from: 'b2', to: 'b4', color: 'rgba(79, 152, 163, 0.8)' }
          ],
        },
        {
          title: 'King\'s Indian Pawn Storm',
          fen: 'r1bq1rk1/pppn1pbp/3p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 b - - 0 8',
          description: 'Black\'s long-term plan is clear: f5-f4, then g5-g4, opening lines against White\'s king. This attack may take 15-20 moves to develop fully.',
          arrows: [
            { from: 'f7', to: 'f5', color: 'rgba(255, 0, 0, 0.8)' },
            { from: 'f5', to: 'f4', color: 'rgba(255, 0, 0, 0.8)' }
          ],
        },
      ],
      quizQuestions: [
        {
          id: 'M6.3-Q1',
          question: 'What is the first step in the strategic planning process?',
          type: 'multiple_choice',
          options: ['Make a move', 'Evaluate the position', 'Attack the king', 'Trade pieces'],
          correctAnswer: 'Evaluate the position',
          explanation: 'Before creating a plan, you must evaluate the position—material, king safety, piece activity, pawn structure, and space—to understand what factors favor each side.',
        },
        {
          id: 'M6.3-Q2',
          question: 'What determines the middlegame plan?',
          type: 'multiple_choice',
          options: ['The number of pieces on the board', 'The pawn structure from the opening', 'Who is higher rated', 'The time on the clock'],
          correctAnswer: 'The pawn structure from the opening',
          explanation: 'The pawn structure created in the opening largely determines the middlegame plans for both sides—where pieces should go, what breaks are possible, and what to attack.',
        },
        {
          id: 'M6.3-Q3',
          question: 'When should you think about the endgame?',
          type: 'multiple_choice',
          options: ['Only when few pieces remain', 'Throughout the game, especially when considering trades', 'Never - focus only on tactics', 'Only when you are winning'],
          correctAnswer: 'Throughout the game, especially when considering trades',
          explanation: 'Endgame considerations should inform your middlegame decisions, especially when evaluating piece trades and pawn structure changes.',
        },
        {
          id: 'M6.3-Q4',
          question: 'What should you do if your opponent prevents your plan?',
          type: 'multiple_choice',
          options: ['Resign', 'Force your original plan anyway', 'Re-evaluate and find a new plan', 'Make random moves'],
          correctAnswer: 'Re-evaluate and find a new plan',
          explanation: 'Plans must be flexible. If your opponent successfully prevents your intended plan, you must re-evaluate the position and formulate a new strategy.',
        },
        {
          id: 'M6.3-Q5',
          question: 'What is the "minority attack" in the QGD?',
          type: 'multiple_choice',
          options: ['Attacking with fewer pieces', 'Advancing the a and b pawns to attack Black\'s queenside', 'Sacrificing pawns for initiative', 'A king attack'],
          correctAnswer: 'Advancing the a and b pawns to attack Black\'s queenside',
          explanation: 'The minority attack involves advancing White\'s two queenside pawns (a4-b4-b5) against Black\'s three (a7-b7-c6) to create weaknesses in Black\'s pawn structure.',
        },
      ],
    },
  },
  {
    id: 'M6.4',
    level: 6,
    title: 'Advanced Endgame Technique',
    description: 'Master Zugzwang positions and rook vs minor piece endings.',
    order: 4,
    xpReward: 250,
    prerequisites: ['M6.3'],
    content: {
      overview: 'At the expert level, endgame technique can be the difference between converting winning positions and allowing draws. This module covers advanced concepts including Zugzwang (the compulsion to move being a disadvantage), rook versus bishop endings, and rook versus knight endings. These positions require precise technique and deep understanding of the unique characteristics of each piece.',
      sections: [
        {
          title: 'Understanding Zugzwang',
          content: `**Zugzwang** = "compulsion to move" - when any move worsens your position

**Types of Zugzwang:**
1. **Mutual Zugzwang**: The side to move loses
2. **One-sided Zugzwang**: Only one side is in Zugzwang
3. **Partial Zugzwang**: A move worsens position but doesn't lose immediately

**How Zugzwang arises:**
- King vs King positions (opposition)
- Pieces guarding critical squares
- Pawn endings with blocked structures
- Minor piece endings with restricted mobility

**Recognizing Zugzwang:**
Ask: "If I could pass, would that be better than any move?"
If yes, you may be in Zugzwang.

**Creating Zugzwang:**
1. Restrict opponent's piece mobility
2. Control key squares
3. Use waiting moves (triangulation, piece maneuvering)
4. Force opponent into a position where every move loses something`,
          fen: '8/8/1p2k3/1P6/1K6/8/8/8 w - - 0 1',
          highlights: [
            { square: 'e6', color: 'rgba(255, 0, 0, 0.5)' },
            { square: 'b4', color: 'rgba(0, 255, 0, 0.5)' }
          ],
        },
        {
          title: 'Triangulation and Corresponding Squares',
          content: `**Triangulation** = King takes 3 moves to reach a square reachable in 1 move

**Purpose**: To lose a tempo and put opponent in Zugzwang

**Example**: Kc3-d3-c3 while opponent's king must stay on one square
After the triangulation, it's opponent's move in the same position.

**Corresponding Squares:**
- Squares that "correspond" between the two kings
- If one king goes to square X, the other must go to square Y
- Used in complex pawn endings to determine who reaches critical squares

**Finding corresponding squares:**
1. Identify critical squares (where a king would be decisive)
2. Work backward to find squares that control access
3. Map which squares correspond to which
4. Navigate to put opponent in Zugzwang

**Practical tip**: In complex king maneuvers, sometimes "wasting" a move is the winning technique.`,
          fen: '8/8/8/2p5/2P5/1pK5/1P6/2k5 w - - 0 1',
          arrows: [
            { from: 'c3', to: 'd3', color: 'rgba(79, 152, 163, 0.8)' },
            { from: 'd3', to: 'd2', color: 'rgba(79, 152, 163, 0.8)' },
            { from: 'd2', to: 'c3', color: 'rgba(79, 152, 163, 0.8)' }
          ],
        },
        {
          title: 'Rook vs Bishop Endings',
          content: `**General principles:**
- Rook is worth roughly 2 pawns more than bishop
- But rook vs bishop without pawns is usually drawn!
- Pawns change everything

**When the rook wins:**
1. **Pawns on one side**: Bishop can be cut off from the action
2. **Fixed pawns on bishop's color**: Bishop is passive
3. **King activity**: If rook side has more active king
4. **Outside passed pawn**: Stretches the bishop's defensive duties

**When the bishop holds:**
1. **Right corner**: Bishop can give up itself for the last pawn
2. **Fortress**: Bishop and pawns create an impenetrable setup
3. **Active bishop**: Can harass the king and pawns
4. **Drawing chances**: Perpetual threats or stalemate tricks

**Key technique for rook side:**
- Cut off the enemy king
- Attack pawns with the rook
- Use your king actively
- Create passed pawns on opposite wings`,
          fen: '8/5b2/8/4k3/8/4R3/5K2/8 w - - 0 1',
        },
        {
          title: 'Rook vs Knight Endings',
          content: `**General assessment:**
- Rook is worth roughly 2 pawns more than knight
- Knight is particularly vulnerable when king is cut off
- Central knight positions are much stronger than edge positions

**When the rook wins:**
1. **Knight on the edge**: "Knight on the rim is dim" - especially vulnerable
2. **King cut off**: Knight cannot defend king from distance
3. **Multiple weaknesses**: Rook can attack on both sides
4. **Passed pawns**: Knight struggles against separated passed pawns

**When the knight holds:**
1. **Blockade position**: Knight blocking a passed pawn on good square
2. **Fortress with pawns**: Knight and pawns create untouchable setup
3. **Central knight**: Hard to attack, covers many squares
4. **Drawing mechanisms**: Perpetual forks or stalemate ideas

**Key technique for rook side:**
- Drive knight to the edge
- Cut off the enemy king
- Create passed pawns (especially separated ones)
- Be patient - these endings often require many moves

**Warning**: Even 2 extra pawns may not win if knight creates a fortress!`,
          fen: '8/8/4n3/3k4/8/3R4/4K3/8 w - - 0 1',
          arrows: [
            { from: 'd3', to: 'a3', color: 'rgba(79, 152, 163, 0.8)' },
            { from: 'a3', to: 'a6', color: 'rgba(79, 152, 163, 0.8)' }
          ],
        },
      ],
      keyConceptBoards: [
        {
          title: 'Classic Zugzwang Position',
          fen: '8/8/1p2k3/1P6/1K6/8/8/8 w - - 0 1',
          description: 'If it\'s Black to move: ...Kd6 Kb4 or ...Kd7 Kb4, White wins. If White to move: Kc4 Kd6 with a draw. The side to move loses—mutual Zugzwang.',
        },
        {
          title: 'Rook vs Bishop - Winning Technique',
          fen: '8/8/p3kb2/P7/8/R4K2/8/8 w - - 0 1',
          description: 'White wins by combining king activation with rook threats. The bishop cannot protect both the a6 pawn and stop the white king from infiltrating.',
          arrows: [
            { from: 'f3', to: 'e4', color: 'rgba(0, 255, 0, 0.8)' },
            { from: 'a3', to: 'a1', color: 'rgba(0, 255, 0, 0.8)' }
          ],
        },
      ],
      quizQuestions: [
        {
          id: 'M6.4-Q1',
          question: 'What is Zugzwang?',
          type: 'multiple_choice',
          options: ['A German opening', 'A situation where being forced to move puts you at a disadvantage', 'A type of checkmate', 'A defensive technique'],
          correctAnswer: 'A situation where being forced to move puts you at a disadvantage',
          explanation: 'Zugzwang is a situation where any move you make worsens your position—you would prefer to pass if you could.',
        },
        {
          id: 'M6.4-Q2',
          question: 'What is the purpose of triangulation?',
          type: 'multiple_choice',
          options: ['To attack with three pieces', 'To lose a tempo and put opponent in Zugzwang', 'To create three passed pawns', 'To defend three weaknesses'],
          correctAnswer: 'To lose a tempo and put opponent in Zugzwang',
          explanation: 'Triangulation involves taking three moves to reach a position reachable in one, effectively passing the move to your opponent when they would prefer not to move.',
        },
        {
          id: 'M6.4-Q3',
          question: 'In rook vs bishop endings without pawns, what is the typical result?',
          type: 'multiple_choice',
          options: ['Rook always wins', 'Bishop always wins', 'Usually a draw', 'Depends on who moves first'],
          correctAnswer: 'Usually a draw',
          explanation: 'Rook vs bishop without pawns is a theoretical draw. The bishop can usually avoid capture and the rook cannot create mating threats alone.',
        },
        {
          id: 'M6.4-Q4',
          question: 'Where is a knight most vulnerable in rook vs knight endings?',
          type: 'multiple_choice',
          options: ['In the center', 'Near its own king', 'On the edge of the board', 'On a light square'],
          correctAnswer: 'On the edge of the board',
          explanation: '"Knight on the rim is dim"—on the edge, the knight has limited mobility and is more easily corralled by the rook.',
        },
        {
          id: 'M6.4-Q5',
          question: 'What type of passed pawns are most effective against a knight?',
          type: 'multiple_choice',
          options: ['Central passed pawns', 'Doubled passed pawns', 'Separated passed pawns on opposite wings', 'Protected passed pawns'],
          correctAnswer: 'Separated passed pawns on opposite wings',
          explanation: 'Knights struggle to cover multiple distant threats. Separated passed pawns on opposite sides of the board exploit the knight\'s limited range.',
        },
      ],
    },
  },
  {
    id: 'M6.5',
    level: 6,
    title: 'Calculation Training',
    description: 'Develop systematic calculation techniques with candidate moves and evaluation.',
    order: 5,
    xpReward: 250,
    prerequisites: ['M6.4'],
    content: {
      overview: 'Expert-level calculation goes beyond seeing tactics—it requires systematic analysis of candidate moves, deep calculation of critical lines, and accurate evaluation of resulting positions. This module teaches you how to organize your thinking, when to calculate deeply versus rely on general principles, and how to evaluate positions where the outcome isn\'t immediately clear.',
      sections: [
        {
          title: 'The Candidate Moves Method',
          content: `**Systematic calculation begins with candidate selection:**

**Step 1: Generate candidates**
- Identify ALL moves worth considering (typically 3-6)
- Include forcing moves (checks, captures, threats)
- Include positional moves (improvements, prophylaxis)
- Don't filter too early—sometimes the second-best looking move is best

**Step 2: Quick assessment**
- Briefly evaluate each candidate (10-20 seconds)
- Eliminate clearly inferior moves
- Narrow to 2-3 serious candidates

**Step 3: Deep calculation**
- Calculate the main line for each remaining candidate
- Include opponent's best responses (not just one you hope for)
- Calculate until you reach a position you can evaluate

**Step 4: Compare and decide**
- Evaluate the resulting positions objectively
- Consider practical factors (risk, time, opponent's tendencies)
- Make your decision and commit

**Key insight**: The quality of your candidate moves limits the quality of your calculation. Bad candidates can't produce good moves.`,
          fen: 'r1bq1rk1/pp2bppp/2n1pn2/2ppP3/3P4/2PB1N2/PP3PPP/RNBQ1RK1 w - - 0 9',
          highlights: [
            { square: 'e5', color: 'rgba(79, 152, 163, 0.5)' },
            { square: 'd5', color: 'rgba(255, 170, 0, 0.5)' }
          ],
        },
        {
          title: 'Calculating Forcing Sequences',
          content: `**Forcing moves limit opponent's options:**

**Types of forcing moves:**
1. **Checks**: Must be answered
2. **Captures**: Usually must be recaptured
3. **Threats**: Unignorable threats force specific responses

**Calculating forcing sequences:**
- Start with the most forcing move
- After each move, identify opponent's forced responses
- Continue until the sequence ends or branches

**When forcing sequences fail:**
- Opponent has an "in-between" move (zwischenzug)
- A check or capture isn't as forcing as it appears
- The final position isn't actually good for you

**Training exercise:**
In tactical positions:
1. Find ALL checks (even silly-looking ones)
2. Find ALL captures
3. Find ALL strong threats
4. Analyze each forcing sequence to its conclusion
5. Only then evaluate which is best`,
          fen: 'r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R w KQkq - 0 5',
          arrows: [
            { from: 'f3', to: 'g5', color: 'rgba(255, 0, 0, 0.8)' }
          ],
        },
        {
          title: 'Position Evaluation',
          content: `**After calculation, you must evaluate:**

**Static factors:**
- Material count
- Pawn structure (weaknesses, majorities, passed pawns)
- Piece placement (activity, coordination)
- King safety

**Dynamic factors:**
- Initiative
- Development advantage
- Attacking chances
- Piece mobility trends

**Evaluation process:**
1. Count material
2. Assess pawn structure
3. Evaluate piece activity for both sides
4. Consider king safety
5. Factor in dynamic elements
6. Synthesize into an overall assessment

**Quantifying advantage:**
- Decisive advantage: One side should win with best play (±1.5+)
- Clear advantage: Significant edge, conversion requires technique (±0.7-1.5)
- Slight advantage: Small but definite edge (±0.3-0.7)
- Equal: Neither side has a meaningful advantage (±0.3)

**Important**: Your evaluation must be honest—don't evaluate positions as better just because you want them to be!`,
        },
        {
          title: 'Practical Calculation Tips',
          content: `**Improving calculation efficiency:**

**1. Visualization training:**
- Practice seeing positions 3-5 moves ahead
- Solve puzzles without moving pieces
- Blindfold training (even just a few moves)

**2. Pattern recognition:**
- Learn tactical motifs thoroughly
- Recognize when patterns apply
- Patterns speed up calculation—you don't recalculate known themes

**3. Pruning the tree:**
- Quickly eliminate obviously bad moves
- Focus calculation time on critical decisions
- Don't calculate unnecessary variations

**4. Verification:**
- After choosing a move, do a "blunder check"
- Verify opponent's best response one more time
- Check for in-between moves you might have missed

**Common calculation errors:**
- Stopping calculation too early
- Missing opponent's best move
- Forgetting what you calculated (losing the thread)
- Wishful thinking (hoping opponent won't find the refutation)

**Practice method**: Solve complex puzzles slowly, writing down your calculation tree. Compare with the solution to find gaps in your thinking.`,
        },
      ],
      keyConceptBoards: [
        {
          title: 'Candidate Moves Exercise',
          fen: 'r1b2rk1/pp1pqppp/2n1pn2/2p5/2B1P3/2NP1N2/PPP2PPP/R1BQR1K1 w - - 0 9',
          description: 'White has multiple promising candidates: e5 (break), Bg5 (pin), a3 (preparation), d4 (central control), Bf4 (development). Systematically evaluate each before deciding.',
        },
        {
          title: 'Forcing Sequence Calculation',
          fen: 'r1bqkb1r/pppp1Qpp/2n2n2/4p3/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 0 4',
          description: 'Black must calculate forcing sequences. After Qxf7+ Ke7, what follows? The calculation continues: Qe6 check ideas, Qxf6, etc. Find the best defense.',
          arrows: [
            { from: 'f7', to: 'f6', color: 'rgba(255, 0, 0, 0.8)' }
          ],
        },
      ],
      quizQuestions: [
        {
          id: 'M6.5-Q1',
          question: 'What is the first step in the candidate moves method?',
          type: 'multiple_choice',
          options: ['Calculate deeply', 'Generate all moves worth considering', 'Evaluate the position', 'Look for checks'],
          correctAnswer: 'Generate all moves worth considering',
          explanation: 'Before calculating, you must first identify all candidate moves worth considering—typically 3-6 moves including forcing and positional options.',
        },
        {
          id: 'M6.5-Q2',
          question: 'What makes a move "forcing"?',
          type: 'multiple_choice',
          options: ['It is a strong move', 'It limits the opponent\'s reasonable responses', 'It wins material', 'It attacks the king'],
          correctAnswer: 'It limits the opponent\'s reasonable responses',
          explanation: 'Forcing moves (checks, captures, serious threats) limit what the opponent can reasonably do, making calculation easier by reducing the branching factor.',
        },
        {
          id: 'M6.5-Q3',
          question: 'What is a "zwischenzug"?',
          type: 'multiple_choice',
          options: ['A German endgame', 'An in-between move that interrupts an expected sequence', 'A type of sacrifice', 'A defensive technique'],
          correctAnswer: 'An in-between move that interrupts an expected sequence',
          explanation: 'A zwischenzug (in-between move) is when instead of making the expected response, you insert an intermediate move (often a check or threat) that changes the calculation.',
        },
        {
          id: 'M6.5-Q4',
          question: 'What position evaluation range indicates "clear advantage"?',
          type: 'multiple_choice',
          options: ['±0.1 to ±0.3', '±0.3 to ±0.7', '±0.7 to ±1.5', '±1.5 or more'],
          correctAnswer: '±0.7 to ±1.5',
          explanation: 'A clear advantage (±0.7 to ±1.5) indicates a significant edge that should be converted with proper technique, but isn\'t necessarily decisive.',
        },
        {
          id: 'M6.5-Q5',
          question: 'Why is pattern recognition important for calculation?',
          type: 'multiple_choice',
          options: ['It eliminates the need to calculate', 'It speeds up calculation by recognizing known themes', 'It only helps in the opening', 'It makes positions easier to remember'],
          correctAnswer: 'It speeds up calculation by recognizing known themes',
          explanation: 'When you recognize a tactical pattern, you don\'t need to recalculate it from scratch—you can apply your knowledge, speeding up your thought process.',
        },
      ],
    },
  },
  {
    id: 'M6.6',
    level: 6,
    title: 'Studying GM Games',
    description: 'Learn from the games of Morphy, Fischer, Kasparov, and Carlsen.',
    order: 6,
    xpReward: 225,
    prerequisites: ['M6.5'],
    content: {
      overview: 'Studying the games of great masters is one of the most effective ways to improve your chess understanding. Each era\'s champions contributed unique insights to chess. From Morphy\'s classical development principles to Carlsen\'s universal style, analyzing their games teaches patterns, ideas, and techniques that can transform your play. This module guides you through studying GM games effectively.',
      sections: [
        {
          title: 'Paul Morphy - Classical Principles',
          content: `**Morphy (1837-1884)** - The "Pride and Sorrow of Chess"

**His contribution:**
- Demonstrated the power of rapid development
- Showed how to punish neglected development with attacks
- Established classical opening principles

**Key characteristics:**
1. **Develop pieces quickly**: Every move brings a new piece into play
2. **Control the center with pieces**: d4/e4 support, not just occupation
3. **Castle early**: King safety enables aggressive play
4. **Open lines against undeveloped positions**: Attack before opponent consolidates

**Famous games to study:**
- Morphy vs Duke of Brunswick and Count Isouard (1858)
- Morphy vs Paulsen (multiple games)
- Morphy vs Anderssen (1858)

**What to learn:**
- How to punish slow development
- The power of piece coordination
- Sacrificing material for rapid development
- Converting development lead into attack

**Morphy's principle**: "Help your pieces so they can help you."`,
          fen: 'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
        },
        {
          title: 'Bobby Fischer - Precision and Objectivity',
          content: `**Fischer (1943-2008)** - 11th World Champion

**His contribution:**
- Uncompromising objectivity in evaluation
- Deep opening preparation (ahead of his time)
- Converting small advantages with perfect technique
- Raised the professional standard of chess preparation

**Key characteristics:**
1. **Objective evaluation**: No wishful thinking, only truth on the board
2. **Technical perfection**: Converting advantages without giving chances
3. **Opening innovation**: New ideas in Sicilian, King's Indian, Grünfeld
4. **Fighting spirit**: Never satisfied with draws, always seeking winning chances

**Famous games to study:**
- Fischer vs Spassky, World Championship 1972 (Game 6 especially)
- Fischer vs Petrosian, Candidates 1971
- Fischer vs Larsen, Candidates 1971 (6-0!)

**What to learn:**
- Clean technique in superior positions
- Objectivity in evaluating your own games
- Opening preparation depth
- Never giving up, fighting until the end

**Fischer's principle**: "I don't believe in psychology. I believe in good moves."`,
          fen: 'r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2N1PN2/PP2BPPP/R1BQ1RK1 w - - 0 8',
        },
        {
          title: 'Garry Kasparov - Dynamic Power',
          content: `**Kasparov (1963-)** - 13th World Champion, highest-rated player until 2013

**His contribution:**
- Demonstrated the power of dynamic compensation
- Deep preparation combined with tactical brilliance
- Computer-assisted analysis pioneer
- Showed how to maintain advantages through complex play

**Key characteristics:**
1. **Initiative over material**: Willingly sacrificed for activity
2. **Preparation depth**: Came to games with specific plans
3. **Tactical precision**: Combined strategy with brilliant tactics
4. **Fighting chess**: Created complexity when needed

**Famous games to study:**
- Kasparov vs Topalov, Wijk aan Zee 1999 (perhaps the greatest game ever)
- Kasparov vs Karpov, World Championship matches
- Kasparov vs Short, World Championship 1993

**What to learn:**
- Dynamic sacrifice evaluation
- Maintaining tension and initiative
- Deep opening preparation principles
- Psychological warfare in competition

**Kasparov's principle**: "The ability to create and maintain tension is one of the most important qualities of a chess player."`,
          fen: 'r1bq1rk1/pp2bppp/2n1pn2/2pp4/4P3/3P1N2/PPPNBPPP/R1BQ1RK1 w - - 0 8',
        },
        {
          title: 'Magnus Carlsen - Universal Mastery',
          content: `**Carlsen (1990-)** - 16th World Champion, highest-rated player ever

**His contribution:**
- Demonstrated that winning comes from accumulating small advantages
- Perfected endgame technique to modern highest level
- Showed that "boring" positions can be winning with superior technique
- Psychological stamina—always fighting for every half point

**Key characteristics:**
1. **Universal style**: No weaknesses, adapts to any position type
2. **Endgame excellence**: Converts minimal advantages
3. **Practical play**: Maximizes winning chances in any position
4. **Physical and mental stamina**: Outplays opponents in long games

**Famous games to study:**
- Carlsen vs Anand, World Championship matches
- Carlsen vs Karjakin, World Championship 2016
- Any of Carlsen's endgame grinds

**What to learn:**
- Converting minimal advantages
- Playing on when others would draw
- Universal chess—being good at everything
- The importance of fighting spirit

**Carlsen's principle**: "There are no boring positions; only boring players."

**How to study these champions:**
1. Play through games WITHOUT looking at analysis first
2. Try to guess the next move (especially in critical positions)
3. Then study the annotations to understand what you missed
4. Extract principles you can apply to your own games`,
          fen: '8/5pk1/4p1p1/3pP3/2pP2PP/2P5/5K2/8 w - - 0 45',
        },
      ],
      keyConceptBoards: [
        {
          title: 'Morphy\'s Development Principle',
          fen: 'rnbqkbnr/ppp2ppp/8/3pp3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4',
          description: 'This is the position Morphy loved—open center, rapid development. His typical continuation involved quick castling and opening lines against an underdeveloped opponent.',
          arrows: [
            { from: 'e1', to: 'g1', color: 'rgba(79, 152, 163, 0.8)' }
          ],
        },
        {
          title: 'Carlsen\'s Endgame Grind',
          fen: '8/5pk1/4p1p1/3pP3/2pP2PP/2P5/5K2/8 w - - 0 45',
          description: 'A typical Carlsen endgame—materially equal but White has a small edge with the passed h-pawn and better king position. Carlsen has converted positions like this countless times.',
          arrows: [
            { from: 'h4', to: 'h5', color: 'rgba(0, 255, 0, 0.8)' }
          ],
        },
      ],
      quizQuestions: [
        {
          id: 'M6.6-Q1',
          question: 'What was Paul Morphy\'s main contribution to chess?',
          type: 'multiple_choice',
          options: ['Endgame theory', 'Demonstrating the power of rapid development', 'Computer analysis', 'Positional play'],
          correctAnswer: 'Demonstrating the power of rapid development',
          explanation: 'Morphy showed how quickly developed pieces could create devastating attacks against opponents who neglected development—establishing classical opening principles.',
        },
        {
          id: 'M6.6-Q2',
          question: 'What distinguishes Fischer\'s playing style?',
          type: 'multiple_choice',
          options: ['Wild sacrifices', 'Objective evaluation and perfect technique', 'Only playing gambits', 'Avoiding theoretical lines'],
          correctAnswer: 'Objective evaluation and perfect technique',
          explanation: 'Fischer was known for his uncompromising objectivity—evaluating positions truthfully—and his ability to convert advantages with technical perfection.',
        },
        {
          id: 'M6.6-Q3',
          question: 'What is Kasparov particularly known for?',
          type: 'multiple_choice',
          options: ['Only playing quietly', 'Dynamic play and deep preparation', 'Avoiding complications', 'Only endgame play'],
          correctAnswer: 'Dynamic play and deep preparation',
          explanation: 'Kasparov combined brilliant tactical ability with deep opening preparation, often playing dynamically and sacrificing material for initiative and attack.',
        },
        {
          id: 'M6.6-Q4',
          question: 'What is Carlsen\'s greatest strength?',
          type: 'multiple_choice',
          options: ['Opening theory', 'Universal play and endgame technique', 'Only tactical play', 'Playing quickly'],
          correctAnswer: 'Universal play and endgame technique',
          explanation: 'Carlsen\'s universal style has no weaknesses, and his endgame technique allows him to convert minimal advantages that others would draw.',
        },
        {
          id: 'M6.6-Q5',
          question: 'What is the best way to study master games?',
          type: 'multiple_choice',
          options: ['Only look at the final position', 'Quickly play through without thinking', 'Try to guess moves first, then study annotations', 'Only study the opening'],
          correctAnswer: 'Try to guess moves first, then study annotations',
          explanation: 'The most effective method is to play through games trying to guess the next move, then study annotations to understand what you missed and why the master\'s moves were better.',
        },
      ],
    },
  },
];
