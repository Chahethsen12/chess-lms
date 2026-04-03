import { Module } from './types.js';

export const level7Modules: Module[] = [
  {
    id: 'M7.1',
    level: 7,
    title: 'Advanced Endgame Theory',
    description: 'Master complex rook endgames, opposite-colored bishops, and knight vs bishop dynamics.',
    order: 1,
    xpReward: 250,
    prerequisites: [],
    content: {
      overview: 'At the Candidate Master level, endgame mastery separates contenders from pretenders. Rook endgames alone comprise roughly half of all practical endgames, and their complexity demands deep theoretical knowledge combined with practical technique. Understanding the nuances of opposite-colored bishops—when they draw and when they win—and the perpetual battle between knights and bishops in various pawn structures will give you crucial half-points and full points that determine tournament success. This module covers the essential theoretical positions and practical techniques that every aspiring master must command.',
      sections: [
        {
          title: 'Advanced Rook Endgame Theory',
          content: `**Critical rook endgame positions:**

**The Lucena Position mastery:**
- Building the bridge is essential knowledge
- Understanding when you have "Lucena" vs "Philidor"
- Cutting off the enemy king—the number of files matters

**Rook + Pawn vs Rook complexities:**
1. **a/h pawns**: Usually draw if defender gets in front
2. **b/g pawns**: Complex; depends on king positions
3. **Central pawns**: Generally winning if well-placed
4. **Knight pawns (b/g)**: The "Vančura Position" saves many games

**Rook activity principles:**
- Active rook beats extra pawn in many cases
- "Rooks belong behind passed pawns" (both yours AND opponent's)
- The "checking distance"—keeping rook far enough to give checks
- Cutting off the king along ranks or files

**Multiple pawn endgames:**
- 2 vs 1 on one side: technique matters
- Pawns on both flanks: usually decisive
- Rook + 2 connected passed pawns usually wins`,
          fen: '1K6/1P6/8/8/4k3/8/8/r7 w - - 0 1',
        },
        {
          title: 'Opposite-Colored Bishop Endgames',
          content: `**The drawing tendency:**

Opposite-colored bishops (OCB) tend to draw because:
- One bishop cannot contest the other's squares
- The defender's bishop can sacrifice for the last pawn
- Blockade positions are easier to maintain

**When OCB endgames are NOT drawn:**

1. **Two connected passed pawns** on adjacent files
   - Creates two threats on different colors
   - Defender's bishop can only cover one diagonal

2. **Widely separated passed pawns**
   - King cannot defend both sides
   - Bishop cannot cover both diagonals

3. **King activity difference**
   - Active king + bishop usually wins
   - Passive king loses despite OCB

4. **Attacking potential**
   - OCB with other pieces favor attacker
   - The defender struggles to cover both color complexes

**Practical technique:**
- Create passed pawns on your bishop's color
- Force opponent's pawns onto your bishop's color
- Use your king aggressively
- Look for fortress setups when defending`,
          fen: '8/8/4k3/3p1p2/3P1P2/4K3/1b6/5B2 w - - 0 1',
        },
        {
          title: 'Knight vs Bishop Dynamics',
          content: `**When the knight dominates:**

1. **Closed positions** with fixed pawn chains
2. **Blocked central pawns** limiting bishop scope
3. **Secure outpost** for the knight
4. **Single-wing play** where knight can reach all key squares
5. **Pawns on both colors** neutralizing bishop advantage

**When the bishop dominates:**

1. **Open positions** with clear diagonals
2. **Pawns on both wings** where bishop covers both
3. **Passed pawns** that the bishop can support from afar
4. **No knight outposts** available
5. **Zugzwang potential** in pure endings

**Critical practical situations:**
- Knight + pawns on one side vs Bishop: often drawn
- Knight blockade of bishop: powerful technique
- Bishop cutting off knight: know the geometry
- "Wrong rook pawn": knight cannot help with a/h pawn if wrong bishop

**The "wrong corner" concept:**
If you have a rook pawn (a or h) and your bishop does NOT control the queening square, even a piece up you may only draw!`,
          fen: '8/5k2/8/4N3/8/4K3/8/3b4 w - - 0 1',
        },
        {
          title: 'Practical Technique and Precision',
          content: `**Essential techniques for master-level play:**

**Converting won positions:**
- Don't rush—consolidate before pushing
- Trade into favorable pawn structures
- Use triangulation and zugzwang
- Know the theoretical winning methods cold

**Defending difficult positions:**
- Find the fortress if one exists
- Create maximum resistance
- Look for stalemate resources
- Keep pieces active even in defense

**Time pressure considerations:**
- Know positions that are "automatically" won/drawn
- Have clear procedural knowledge (bridge, Philidor)
- Recognize critical pawn breaks instantly
- Practice standard positions until automatic

**Study recommendations:**
- Dvoretsky's Endgame Manual: the bible
- Practice Lucena and Philidor daily
- Study Capablanca and Carlsen endgames
- Solve rook endgame studies

**The 50-move rule:**
Understand when counting moves matters and when pawn moves/captures reset the count.`,
          fen: '8/8/8/4k3/2KP4/8/8/8 w - - 0 1',
        },
      ],
      keyConceptBoards: [
        {
          title: 'Lucena Position - Building the Bridge',
          fen: '1K1k4/1P6/8/8/8/8/5R2/4r3 w - - 0 1',
          description: 'The famous Lucena position. White wins by "building a bridge": Rf4!, then after Rg1+ Kc7 Rg2 Rc1+ Kb6 Rb1+ Ka6 Rb8 Ra1+ Kb7 and the rook blocks checks while the pawn promotes.',
        },
        {
          title: 'Philidor Position - The Drawing Setup',
          fen: '4k3/8/4K3/4P3/8/8/8/r4R2 b - - 0 1',
          description: 'Black holds with the Philidor defense: keep the rook on the 6th rank cutting off the king, then when the pawn advances to the 6th, switch to checking from behind. Essential defensive knowledge.',
        },
        {
          title: 'Opposite-Colored Bishops - Connected Passers Win',
          fen: '8/8/8/1PP5/8/2k5/8/K1b5 w - - 0 1',
          description: 'Despite opposite-colored bishops, White wins because two connected passed pawns create threats on both colors. The bishop can only cover one diagonal, so one pawn will promote.',
        },
      ],
      quizQuestions: [
        {
          id: 'M7.1-Q1',
          question: 'In the Lucena position, what is the winning technique called?',
          type: 'multiple_choice',
          options: ['The ladder', 'Building the bridge', 'The windmill', 'The skewer escape'],
          correctAnswer: 'Building the bridge',
          explanation: 'Building the bridge involves using the rook to shield the king from checks, allowing the pawn to safely promote.',
        },
        {
          id: 'M7.1-Q2',
          question: 'When do opposite-colored bishop endgames typically become winning rather than drawn?',
          type: 'multiple_choice',
          options: ['When one side has an extra pawn', 'When there are connected passed pawns or widely separated passers', 'When both kings are centralized', 'When all pawns are on one side'],
          correctAnswer: 'When there are connected passed pawns or widely separated passers',
          explanation: 'OCB endgames are won when the defender\'s bishop cannot cover multiple threats—connected passed pawns or widely separated passers create this situation.',
        },
        {
          id: 'M7.1-Q3',
          question: 'In which type of position does a knight typically outperform a bishop?',
          type: 'multiple_choice',
          options: ['Open positions with pawns on both flanks', 'Closed positions with a secure outpost', 'Endgames with passed pawns', 'Positions with long open diagonals'],
          correctAnswer: 'Closed positions with a secure outpost',
          explanation: 'Knights excel in closed positions where the bishop\'s range is limited, especially when the knight has a permanent outpost.',
        },
        {
          id: 'M7.1-Q4',
          question: 'What is the "wrong corner" concept in knight + rook pawn endgames?',
          type: 'multiple_choice',
          options: ['The knight is in the wrong corner of the board', 'The defending king reaches the queening corner that the bishop cannot control', 'The rook pawn is on the wrong file', 'The knight cannot reach the promotion square'],
          correctAnswer: 'The defending king reaches the queening corner that the bishop cannot control',
          explanation: 'With a rook pawn (a or h file) and a bishop that doesn\'t control the queening square, the defender can draw by reaching the corner—the bishop cannot drive the king out.',
        },
        {
          id: 'M7.1-Q5',
          question: 'In rook endgames, what does "cutting off the king" accomplish?',
          type: 'multiple_choice',
          options: ['Forces immediate checkmate', 'Prevents the enemy king from reaching the passed pawn or helping defense', 'Creates a back rank threat', 'Allows promotion without checks'],
          correctAnswer: 'Prevents the enemy king from reaching the passed pawn or helping defense',
          explanation: 'Cutting off the enemy king along a rank or file prevents it from participating in the defense or promotion race, often deciding the outcome.',
        },
      ],
    },
  },
  {
    id: 'M7.2',
    level: 7,
    title: 'Practical Tournament Play',
    description: 'Master time management, psychological warfare, and handling competitive pressure.',
    order: 2,
    xpReward: 250,
    prerequisites: [],
    content: {
      overview: 'Technical skill alone does not win tournaments—practical skills do. The ability to manage your clock effectively, maintain psychological equilibrium, and perform under pressure separates tournament winners from also-rans. At the Candidate Master level, you will face opponents who are equally prepared theoretically; the winner is often determined by who handles the practical aspects of competition better. This module addresses the crucial non-chess skills that directly impact your results.',
      sections: [
        {
          title: 'Time Management Mastery',
          content: `**Classical time control strategies:**

**The "time budget" approach:**
- Opening (moves 1-15): ~20% of your time
- Early middlegame (16-25): ~30% of your time
- Critical phase (26-35): ~35% of your time
- Technique (36+): ~15% of your time

**Recognizing critical moments:**
- When the evaluation could swing dramatically
- Before irreversible decisions (pawn moves, exchanges)
- At the transition from opening to middlegame
- When your opponent has just made an unexpected move

**Practical guidelines:**
1. Never use more than 10% of remaining time on one move
2. If you see a good move, look for a better one—but set a limit
3. Trust your preparation in the opening
4. In time trouble, prioritize king safety and piece activity

**Increment vs no-increment:**
- With increment: You can think deeply on critical moves
- Without increment: Plan your last 10 moves carefully
- Flagging: Know when it's a legitimate strategy and when it backfires`,
          fen: 'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
        },
        {
          title: 'Psychology at the Board',
          content: `**Managing your mental state:**

**Before the game:**
- Arrive early, settle in
- Brief review of preparation—don't overprepare
- Physical readiness: sleep, nutrition, hydration
- Mental routine: breathing exercises, visualization

**During the game:**
- Stay in the present move, not past mistakes
- Don't celebrate or despair prematurely  
- Manage body language—don't reveal your evaluation
- Take breaks strategically (walk, stretch, reset)

**Handling different situations:**

**When winning:**
- Stay focused—most games are lost, not won
- Simplify when appropriate, but don't get lazy
- Watch your clock—don't squander your advantage

**When losing:**
- Set small goals: "Improve this piece," not "Win the game"
- Create practical problems—don't resign mentally
- Your opponent must still prove technique

**When equal:**
- This is normal at high levels—embrace it
- Small advantages matter; accumulate them
- Force your opponent to make decisions`,
          fen: 'r2qkb1r/ppp2ppp/2n1bn2/3pp3/4P3/1BN2N2/PPPP1PPP/R1BQK2R w KQkq - 0 6',
        },
        {
          title: 'Handling Competitive Pressure',
          content: `**Tournament pressure management:**

**Physical factors:**
- Sleep: 7-8 hours minimum before important games
- Nutrition: Light meals, avoid sugar crashes
- Hydration: Dehydration impairs calculation
- Exercise: Physical fitness = mental stamina

**Pre-tournament preparation:**
- Peak at the right time—don't burn out studying
- Review your repertoire but don't learn new lines
- Physical conditioning in the weeks before
- Reduce stress in other areas of life

**In-tournament discipline:**
- Consistent routine: wake time, meal times, analysis time
- Don't analyze games for too long after playing
- Light exercise between rounds
- Social connection but not excessive distraction

**Critical round situations:**
- Last round with something at stake
- Playing up (higher-rated opponent)
- Playing down (must-win against lower-rated)
- Recovery after a painful loss

**The "zone" state:**
Deep focus comes from preparation meeting opportunity. You can't force it, but you can create conditions for it.`,
          fen: 'r1bq1rk1/pp2bppp/2n1pn2/2pp4/3P4/2PBPN2/PP1N1PPP/R1BQ1RK1 w - - 0 9',
        },
        {
          title: 'Practical Decision-Making',
          content: `**When theory ends and practice begins:**

**Decision frameworks:**
1. **Is the position forcing or non-forcing?**
   - Forcing: Calculate precisely
   - Non-forcing: Use principles and intuition

2. **What does my opponent want?**
   - Prophylaxis before your own ideas
   - Deny their best squares/plans

3. **What's the worst that can happen?**
   - Eliminate blunder-prone moves first
   - Then choose among safe options

**Practical vs objective best:**
- The objectively best move may be practically risky
- A slightly inferior but solid move may be practically superior
- Consider: Who benefits from complexity?

**Simplification decisions:**
- Ahead: Simplify if you know the endgame
- Behind: Maintain complexity, seek imbalance
- Equal: Assess where your expertise lies

**Drawing considerations:**
- When is a draw a good result?
- Offering draws: timing and psychology
- Declining draws: risk vs reward calculation

**The "comfort zone" principle:**
Steer the game toward positions you've seen before and your opponent hasn't.`,
          fen: 'r4rk1/pp2ppbp/2n3p1/q1pp4/2PP4/2N1PN2/PP2BPPP/R2Q1RK1 w - - 0 10',
        },
      ],
      keyConceptBoards: [
        {
          title: 'Critical Decision Point',
          fen: 'r1bq1rk1/ppp2ppp/2n2n2/3pp3/1bPP4/2N1PN2/PP2BPPP/R1BQK2R w KQ - 0 6',
          description: 'A critical decision point in the opening. White must choose between several reasonable moves. This is where time should be invested—understanding the consequences of d5 vs dxe5 vs a3 shapes the entire game.',
        },
        {
          title: 'Time Pressure Management',
          fen: 'r4rk1/pp2bppp/2n1p3/2ppP3/3P4/2PB1N2/PP3PPP/R3R1K1 w - - 0 13',
          description: 'A typical middlegame position where both sides have reasonable plans. In time pressure, prioritize: 1) King safety (both), 2) Piece activity (rooks need files), 3) Pawn structure (maintain tension or resolve it?).',
        },
        {
          title: 'Practical Winning Technique',
          fen: '2r3k1/pp3ppp/4p3/3pP3/3P4/2P2P2/PP4PP/3R2K1 w - - 0 25',
          description: 'White is better but must win practically. Don\'t drift—have a plan: improve king position, create entry points, potentially advance queenside majority. Play with purpose, not just "good moves."',
        },
      ],
      quizQuestions: [
        {
          id: 'M7.2-Q1',
          question: 'According to the "time budget" approach, what phase of the game deserves the most thinking time?',
          type: 'multiple_choice',
          options: ['Opening preparation', 'Early middlegame', 'Critical phase (moves 26-35)', 'Endgame technique'],
          correctAnswer: 'Critical phase (moves 26-35)',
          explanation: 'The critical phase where the game\'s outcome is often determined deserves about 35% of your time—this is when positions become most concrete and errors most costly.',
        },
        {
          id: 'M7.2-Q2',
          question: 'When you are in a losing position, what is the best psychological approach?',
          type: 'multiple_choice',
          options: ['Accept defeat and play quickly', 'Set small achievable goals and create practical problems', 'Offer a draw immediately', 'Play only defensive moves'],
          correctAnswer: 'Set small achievable goals and create practical problems',
          explanation: 'Setting small goals keeps you focused and fighting. Creating practical problems forces your opponent to prove their technique—games are often lost by the winning side.',
        },
        {
          id: 'M7.2-Q3',
          question: 'What physical factor has the most direct impact on calculation ability?',
          type: 'multiple_choice',
          options: ['Temperature of the playing hall', 'Hydration and blood sugar levels', 'Quality of the chess pieces', 'Noise level in the room'],
          correctAnswer: 'Hydration and blood sugar levels',
          explanation: 'Dehydration and low blood sugar directly impair cognitive function and calculation ability. Physical preparation is essential for mental performance.',
        },
        {
          id: 'M7.2-Q4',
          question: 'When might a "practically superior" move differ from the "objectively best" move?',
          type: 'multiple_choice',
          options: ['When you have more time on the clock', 'When the objective best leads to complex positions you don\'t know well', 'When your opponent is higher rated', 'Never—always play the objective best'],
          correctAnswer: 'When the objective best leads to complex positions you don\'t know well',
          explanation: 'A solid move that leads to familiar territory may be practically superior to an objectively better move that leads to unknown complications.',
        },
        {
          id: 'M7.2-Q5',
          question: 'What is the "comfort zone" principle in practical play?',
          type: 'multiple_choice',
          options: ['Always play safe, defensive chess', 'Steer the game toward positions familiar to you but not your opponent', 'Never take risks', 'Only play openings you have memorized'],
          correctAnswer: 'Steer the game toward positions familiar to you but not your opponent',
          explanation: 'Steering toward familiar positions gives you a practical edge—your pattern recognition and experience kick in while your opponent must calculate.',
        },
      ],
    },
  },
  {
    id: 'M7.3',
    level: 7,
    title: 'Game Preparation',
    description: 'Learn to prepare effectively against specific opponents using databases and analysis.',
    order: 3,
    xpReward: 250,
    prerequisites: [],
    content: {
      overview: 'Modern chess at the master level requires systematic preparation against specific opponents. With games databases containing millions of games, and powerful engines that can analyze any position to near-perfection, the player who prepares better often has a decisive advantage before the game even begins. This module teaches you how to build and maintain a preparation system, analyze opponents\' games effectively, and prepare surprises that can win games before they are played.',
      sections: [
        {
          title: 'Building Your Database System',
          content: `**Essential database resources:**

1. **MegaDatabase**: 8+ million games, essential for deep research
2. **Online databases**: Lichess, Chess.com, ChessBase Live
3. **Correspondence games**: High quality, deeply analyzed
4. **Recent games**: Updated weekly for current theory

**Database organization:**
- Separate databases for: Your games, Opening study, Opponents
- Tag games by opening, theme, result
- Create training databases with key positions
- Regular backups and maintenance

**Your personal database:**
- Every serious game you play, annotated
- All preparation files organized by opening
- Novelties you've discovered or plan to use
- Opponent files with their patterns

**Engine integration:**
- ChessBase + Stockfish/Komodo setup
- Server engines for deep analysis
- Cloud databases for team preparation
- Mobile access for last-minute prep

**The preparation workflow:**
1. Download opponent's recent games
2. Identify their repertoire patterns
3. Find critical positions with engine
4. Prepare specific lines and novelties
5. Review key positions before the game`,
          fen: 'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1',
        },
        {
          title: 'Analyzing Your Opponent',
          content: `**The opponent research process:**

**Step 1: Gather games (aim for 50+ games)**
- Recent tournament games (most important)
- Online games (rapid/blitz show tendencies)
- Older games (establish patterns)

**Step 2: Repertoire mapping**
- What openings do they play as White?
- What do they play against 1.e4? Against 1.d4?
- Do they have pet lines? Avoid certain structures?
- Have they changed repertoire recently?

**Step 3: Pattern recognition**
- Tactical tendency (sharp or solid?)
- Endgame skill level
- Time management patterns
- How do they handle surprises?
- Typical mistakes (tactical, positional, time)

**Step 4: Find weaknesses**
- Openings they avoid (maybe they fear them)
- Structures they mishandle
- Positions where they've blundered
- Endgames they've lost won positions

**Step 5: Create the game plan**
- Target their weaknesses
- Avoid their strengths
- Prepare specific lines
- Have backup options ready

**Document everything** in a personal file for future reference.`,
          fen: 'rnbqkb1r/pp1ppppp/5n2/2p5/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq - 0 3',
        },
        {
          title: 'Preparing Novelties and Surprises',
          content: `**Novelty preparation:**

**What makes an effective novelty:**
- Objectively sound (or at least playable)
- Leads to positions you've studied
- Opponent unlikely to have analyzed it
- Creates problems they must solve at the board

**Finding novelties:**
1. Start from a critical position in your opponent's repertoire
2. Use engine to find alternatives to main theory
3. Analyze resulting positions deeply
4. Test in online blitz to understand typical play
5. Prepare responses to likely opponent reactions

**Types of surprises:**

**Opening surprises:**
- A new move in theoretical positions
- An unusual move order reaching familiar positions
- A sideline you've studied but they haven't

**Psychological surprises:**
- Playing their own favorite opening against them
- Avoiding their preparation entirely with an offbeat line
- Transposing to positions from different openings

**Practical surprises:**
- Sharp positions if they prefer quiet games
- Closed positions if they prefer tactics
- Long endgames if their technique is weak

**The surprise protocol:**
- Don't use your best novelties against weaker opponents
- Save killer preparation for critical games
- Have "B-team" novelties for regular use
- Never repeat a surprise against the same opponent`,
          fen: 'r1bqkb1r/pp1npppp/2p2n2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5',
        },
        {
          title: 'Pre-Game and Tournament Preparation',
          content: `**Tournament preparation timeline:**

**2-4 weeks before:**
- Research likely opponents
- Identify gaps in your repertoire
- Deep work on 2-3 critical lines
- Physical training and rest

**Week before:**
- Review all main lines
- Prepare specific opponent files
- Light practice games
- Sleep schedule adjustment

**Day before:**
- Review preparation for round 1 opponent
- Light physical activity
- Early to bed
- No cramming—trust your preparation

**Game day:**
- Normal routine, good breakfast
- Brief review of key lines (30-60 min max)
- Arrive early, settle in
- Stay calm; preparation is done

**Between rounds:**
- Quick meal, hydration
- Research next opponent
- Don't over-analyze previous game
- Mental reset for the next battle

**Emergency preparation:**
If you have minimal time to prepare:
1. Check opponent's last 5 games
2. Note their main openings
3. Identify ONE line to steer toward
4. Review your standard responses`,
          fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3',
        },
      ],
      keyConceptBoards: [
        {
          title: 'Preparation Target - Repertoire Weakness',
          fen: 'rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3',
          description: 'If your opponent always plays the Pirc Defense, you can prepare a specific anti-Pirc system deeply. Here, the 150 Attack (Be3, Qd2, f3, 0-0-0) is a good choice for aggressive players—study it more than your opponent knows it.',
        },
        {
          title: 'Novelty Preparation Position',
          fen: 'r1bqkb1r/pp1n1ppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQK2R b KQkq - 0 6',
          description: 'A typical Slav position where both sides have many options. Find a rare but sound move here, analyze 15+ moves deep, and you have a practical weapon. Your opponent must find good moves; you already know them.',
        },
        {
          title: 'Opponent Pattern - Avoiding Endgames',
          fen: 'r3r1k1/ppp2ppp/2n2n2/3q4/3P4/2P2N2/P3QPPP/R1B1R1K1 w - - 0 15',
          description: 'If analysis shows your opponent avoids queen trades, use this information: offer queen exchanges to either win an endgame (if they accept) or make them uncomfortable (if they decline). Know their patterns.',
        },
      ],
      quizQuestions: [
        {
          id: 'M7.3-Q1',
          question: 'How many games should you ideally gather when researching an opponent?',
          type: 'multiple_choice',
          options: ['5-10 games', '50+ games', 'Only their last game', 'As many as exist'],
          correctAnswer: '50+ games',
          explanation: '50+ games give you a statistically significant sample to identify patterns, while remaining manageable to analyze. Include recent tournament games and some online games.',
        },
        {
          id: 'M7.3-Q2',
          question: 'What makes an effective opening novelty?',
          type: 'multiple_choice',
          options: ['Any rare move', 'A sound move leading to positions you have studied deeply', 'The move suggested by the engine', 'A move that wins material'],
          correctAnswer: 'A sound move leading to positions you have studied deeply',
          explanation: 'A novelty should be objectively playable AND lead to positions where you have deep knowledge your opponent lacks. Raw engine moves without understanding are dangerous.',
        },
        {
          id: 'M7.3-Q3',
          question: 'When should you save your best opening preparations?',
          type: 'multiple_choice',
          options: ['Use them every game for practice', 'Save them for critical games against serious opponents', 'Use them against weaker opponents first', 'Never use them—keep them secret'],
          correctAnswer: 'Save them for critical games against serious opponents',
          explanation: 'Your best novelties and preparations should be reserved for important games. Use "B-team" surprises for regular games to preserve your best weapons.',
        },
        {
          id: 'M7.3-Q4',
          question: 'What should you focus on in your opponent analysis?',
          type: 'multiple_choice',
          options: ['Only their rating', 'Their weaknesses, patterns, and repertoire tendencies', 'Their age and nationality', 'Only their most recent game'],
          correctAnswer: 'Their weaknesses, patterns, and repertoire tendencies',
          explanation: 'Identify repertoire patterns (what do they play?), tendencies (tactical or positional?), and weaknesses (what structures do they mishandle?). Create a game plan targeting these.',
        },
        {
          id: 'M7.3-Q5',
          question: 'How much preparation review should you do on game day?',
          type: 'multiple_choice',
          options: ['Several hours of intensive study', '30-60 minutes reviewing key lines', 'None—just relax', 'Watch random chess videos'],
          correctAnswer: '30-60 minutes reviewing key lines',
          explanation: 'On game day, briefly review key positions without cramming. Heavy study before a game leads to fatigue and confusion. Trust your prior preparation.',
        },
      ],
    },
  },
  {
    id: 'M7.4',
    level: 7,
    title: 'Complex Position Analysis',
    description: 'Develop the skill to evaluate imbalances and make practical decisions in unclear positions.',
    order: 4,
    xpReward: 250,
    prerequisites: [],
    content: {
      overview: 'At the highest levels, positions are rarely clearly winning or losing—they are complex, with multiple imbalances that require sophisticated evaluation and practical decision-making. The ability to correctly assess material imbalances, understand when activity compensates for material, and make the right practical choices in unclear situations is what defines master-level play. This module develops your analytical framework for handling the positions where intuition must guide calculation.',
      sections: [
        {
          title: 'Understanding Imbalances',
          content: `**Jeremy Silman's imbalance framework:**

**Material imbalances:**
- Piece for pawns (usually knight/bishop for 3 pawns)
- Exchange (rook for minor piece, usually +2 pawns value)
- Queen for pieces (queen ≈ rook + minor + pawn)
- Pawn structure compensation

**Dynamic imbalances:**
- Initiative and tempo
- Attack vs material
- Development advantage
- Space control

**Structural imbalances:**
- Pawn majorities and minorities
- Isolated pawns (weakness or dynamic potential?)
- Pawn chains and bases
- Passed pawns vs piece activity

**Positional imbalances:**
- Bishop pair vs knight pair
- Good pieces vs bad pieces
- Open files and diagonals
- King safety differential

**The evaluation process:**
1. List ALL imbalances present
2. Weigh their relative importance
3. Consider dynamic factors (who's better placed to act?)
4. Project into the future (how will imbalances evolve?)`,
          fen: 'r1bq1rk1/ppp1npbp/3p1np1/4p3/2PPP3/2N2NP1/PP2QPBP/R1B2RK1 w - - 0 10',
        },
        {
          title: 'Compensation Assessment',
          content: `**When is compensation sufficient?**

**Exchange sacrifice compensation:**
An exchange sacrifice is typically justified when you get:
- A strong outpost for the minor piece
- Damaged enemy pawn structure
- Active piece play against weak points
- Attack on the enemy king
- Long-term bind or blockade

**Piece for pawns compensation:**
A minor piece is worth approximately 3 pawns, but:
- Connected passed pawns increase pawn value
- Active minor piece > 3 passive pawns
- Endgame considerations often favor the pawns
- King safety can make pawns worthless

**Queen sacrifice compensation:**
The queen equals roughly 9 points, so look for:
- Rook + minor piece + pawn (~9 points)
- Two rooks (~10 points)
- Mating attack continuation
- Complete domination of key squares

**The "practical compensation" test:**
Ask: "If I were playing this position against myself, which side would I choose?" Your gut feeling, refined by experience, is often correct.`,
          fen: 'r2qr1k1/pp1nbppp/2p2n2/3p2B1/3P4/2NB1N2/PPP2PPP/R2QR1K1 w - - 0 11',
        },
        {
          title: 'Practical Decision Making',
          content: `**The decision tree for complex positions:**

**Level 1: Safety check**
- Is my king safe? Is opponent's king safe?
- Any immediate tactical threats?
- Can I be worse after opponent's best response?

**Level 2: Strategic assessment**
- What is the nature of the position? (attacking, maneuvering, endgame)
- Who is better placed for the upcoming struggle?
- What should I be trying to achieve?

**Level 3: Candidate move selection**
- Active moves first (threats, improvements)
- Prophylactic moves second (stop opponent's plans)
- Neutral moves last (waiting, maneuvering)

**Level 4: Calculation and comparison**
- Calculate forcing sequences to evaluation-stable positions
- Compare resulting positions
- Factor in practical considerations

**Decision-making shortcuts:**
- "When you find a good move, look for a better one"
- "If you see a good move, ask what opponent would do if it were their turn"
- "Trade when ahead, maintain tension when behind or equal"
- "When in doubt, improve your worst piece"`,
          fen: 'r2q1rk1/pb1nbppp/1p2pn2/2p5/2PP4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 0 10',
        },
        {
          title: 'Training Complex Position Analysis',
          content: `**Deliberate practice methods:**

**Method 1: Guess the Move**
- Study master games move by move
- Predict each move before seeing it
- Analyze why your choice differed from the master's
- Focus on complex middlegame positions

**Method 2: Position Labs**
- Select complex positions from your own games
- Analyze WITHOUT an engine for 30+ minutes
- Write down your assessment and best line
- Then check with engine—understand discrepancies

**Method 3: Blindfold analysis**
- Study a complex position for 5 minutes
- Look away and try to analyze it from memory
- This trains deep calculation and pattern retention

**Method 4: Two-sided analysis**
- In any position, find the best play for BOTH sides
- This prevents one-sided thinking
- "If I were my opponent, what would worry me?"

**Key complex position themes to study:**
- Exchange sacrifices (classic Petrosian games)
- Material imbalances (Tal's piece sacrifices)
- Positional squeezes (Karpov's technique)
- Dynamic compensation (Kasparov's attacks)

**Regular practice:**
Spend 30 minutes daily on complex position analysis. This is where master strength is built.`,
          fen: 'r2qk2r/pb1nbppp/1pp1pn2/3p4/2PP4/1PN1PN2/PB3PPP/R2QKB1R w KQkq - 0 8',
        },
      ],
      keyConceptBoards: [
        {
          title: 'Classic Exchange Sacrifice Position',
          fen: 'r4rk1/1bq1bppp/ppn1pn2/2pp4/3P4/1PNBPN2/PBP2PPP/R2QR1K1 w - - 0 12',
          description: 'Exchange sacrifices on c6 or e6 are thematic in such positions. White trades the exchange for: pawn structure damage, bishop pair dominance, and a light-square grip. Evaluate: is the compensation sufficient?',
        },
        {
          title: 'Material vs Initiative',
          fen: 'r1b2rk1/ppq1bppp/2n1p3/2PpP3/3Nn3/3B1N2/PPP2PPP/R1BQ1RK1 w - - 0 13',
          description: 'White is a pawn up but Black has active pieces and pressure. Material advantage means nothing if your pieces are passive. Calculate: can White consolidate, or does Black\'s activity provide sufficient compensation?',
        },
        {
          title: 'Complex Pawn Structure Imbalance',
          fen: '2r1r1k1/pp1n1ppp/2p1pb2/3q4/3P4/2P1BP2/PP1NQ1PP/R4R1K w - - 0 18',
          description: 'Both sides have structural weaknesses (d4 isolated, c6/e6 backward). The question is: who can exploit the opponent\'s weaknesses more effectively? This requires weighing multiple static and dynamic factors.',
        },
      ],
      quizQuestions: [
        {
          id: 'M7.4-Q1',
          question: 'What are the main categories of chess imbalances?',
          type: 'multiple_choice',
          options: ['Only material differences', 'Material, dynamic, structural, and positional', 'Tactics and strategy', 'Offense and defense'],
          correctAnswer: 'Material, dynamic, structural, and positional',
          explanation: 'A complete evaluation considers material (pieces/pawns), dynamic (initiative, development), structural (pawn formation), and positional (piece placement, king safety) imbalances.',
        },
        {
          id: 'M7.4-Q2',
          question: 'When evaluating an exchange sacrifice, what compensation factors matter most?',
          type: 'multiple_choice',
          options: ['Material count only', 'Pawn structure damage, active pieces, and attack potential', 'Time on the clock', 'Your opponent\'s rating'],
          correctAnswer: 'Pawn structure damage, active pieces, and attack potential',
          explanation: 'Exchange sacrifices are justified by structural damage to the opponent, activity for your remaining pieces, attacking chances, and positional control—not just material count.',
        },
        {
          id: 'M7.4-Q3',
          question: 'In the decision tree for complex positions, what should you check first?',
          type: 'multiple_choice',
          options: ['Material count', 'King safety and immediate tactical threats', 'Pawn structure', 'Piece activity'],
          correctAnswer: 'King safety and immediate tactical threats',
          explanation: 'Safety comes first. Before any strategic planning, ensure there are no immediate threats to your king or tactics that could lose material.',
        },
        {
          id: 'M7.4-Q4',
          question: 'What is the "practical compensation" test?',
          type: 'multiple_choice',
          options: ['Checking if the engine shows 0.00', 'Asking which side you would choose to play', 'Counting pawns vs pieces', 'Seeing if grandmasters played this way'],
          correctAnswer: 'Asking which side you would choose to play',
          explanation: 'The practical compensation test asks: "Which side would I prefer if playing against myself?" Your refined intuition often correctly assesses complex positions.',
        },
        {
          id: 'M7.4-Q5',
          question: 'What is the benefit of "two-sided analysis" in complex positions?',
          type: 'multiple_choice',
          options: ['It takes less time', 'It prevents one-sided thinking and reveals hidden resources', 'It\'s easier than regular analysis', 'It requires less calculation'],
          correctAnswer: 'It prevents one-sided thinking and reveals hidden resources',
          explanation: 'Two-sided analysis forces you to consider your opponent\'s best ideas, preventing overoptimistic evaluations and revealing defensive or counterattacking resources you might miss.',
        },
      ],
    },
  },
  {
    id: 'M7.5',
    level: 7,
    title: 'Opening Repertoire Refinement',
    description: 'Build anti-computer lines, develop surprise weapons, and refine your repertoire for maximum practical value.',
    order: 5,
    xpReward: 250,
    prerequisites: [],
    content: {
      overview: 'In the engine era, opening preparation has been transformed. Everyone has access to perfect analysis, so differentiation must come from psychological, practical, and creative elements. This module teaches advanced repertoire construction: developing "anti-computer" lines that are objectively fine but lead to positions humans find difficult, building effective surprise weapons, and refining your overall repertoire for practical success at the master level.',
      sections: [
        {
          title: 'Anti-Computer Line Philosophy',
          content: `**What are "anti-computer" lines?**

Lines that engines evaluate as equal (or nearly so) but:
- Create positions humans find difficult to play
- Avoid forcing, calculable continuations
- Lead to positions where understanding > memorization
- Give practical chances against over-prepared opponents

**Characteristics of good anti-computer lines:**
1. **Low engine evaluation** (~0.00 to +0.30)
2. **Complex positional requirements**
3. **Multiple valid plans** (no single "best" continuation)
4. **Pattern-based understanding needed**
5. **Difficult to prepare against exhaustively**

**Where to find them:**
- Older openings engines undervalue
- Closed structures where maneuvering matters
- Positions with long-term structural imbalances
- Lines where "best" play is non-obvious

**Examples of anti-computer concepts:**
- London System structures (simple but deep)
- Closed Catalan positions
- Classical Slav long maneuvers
- Symmetrical English hedgehogs
- King's Indian structural battles`,
          fen: 'd5/8/8/2p5/8/2P5/8/3D4 w - - 0 1',
        },
        {
          title: 'Building Surprise Weapons',
          content: `**The surprise weapon arsenal:**

**Tier 1: Critical game weapons**
- Deeply prepared novelties in your main lines
- Complete systems you've studied but opponents won't expect
- One-time use against specific opponents

**Tier 2: Regular surprise options**
- Sidelines you can wheel out periodically
- Gambits with practical punch
- Transposition tricks that avoid main lines

**Tier 3: Situational weapons**
- Must-win lines (sharp, risky but double-edged)
- Must-draw lines (solid, hard to lose)
- Specific anti-lines (against favorite defenses)

**Building process:**
1. Identify a rare but playable line
2. Study it deeply with engines (10+ hours)
3. Play it in online blitz (100+ games)
4. Catalog typical patterns and mistakes
5. Prepare answers to likely opponent responses

**Psychological effectiveness:**
- Unfamiliar positions create practical problems
- Opponents burn clock on early moves
- Confidence comes from your superior preparation
- Even slightly inferior lines become weapons

**Maintenance:**
Review surprise weapons quarterly. Check if they've been analyzed/refuted. Update your lines accordingly.`,
          fen: 'rnbqkbnr/pppppppp/8/8/8/5NP1/PPPPPP1P/RNBQKB1R b KQkq - 0 2',
        },
        {
          title: 'Repertoire Structure for Masters',
          content: `**The three-layer repertoire:**

**Layer 1: Core (2-3 systems)**
- Your main openings, known deeply
- Used in most serious games
- Regularly updated and maintained
- Example: Ruy Lopez (White), Grünfeld (Black vs 1.d4)

**Layer 2: Alternatives (3-5 systems)**
- Solid backups when avoiding preparation
- Used to vary your play
- Known well but not as deeply as core
- Example: Italian (White), Nimzo-Indian (Black)

**Layer 3: Weapons (5-10 lines)**
- Surprise weapons for specific situations
- Studied in isolation, not part of regular play
- Deployed strategically against specific opponents

**Repertoire synergy:**
- Choose openings with similar pawn structures
- Understanding transfers between related systems
- Example: Sicilian Dragon → King's Indian player

**Against 1.e4 as Black:**
- Main system (Sicilian Najdorf)
- Solid alternative (Berlin Defense)
- Sharp surprise (Latvian Gambit—only situationally!)

**Against 1.d4 as Black:**
- Main system (Grünfeld)
- Solid alternative (QGD)
- Surprise weapon (Benko Gambit)`,
          fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1',
        },
        {
          title: 'Continuous Repertoire Refinement',
          content: `**The repertoire maintenance cycle:**

**Monthly tasks:**
- Review your games in the opening phase
- Note deviations from preparation
- Update files with new ideas
- Check top GM games in your openings

**Quarterly tasks:**
- Deep analysis of one main line
- Add/update surprise weapons
- Test ideas in online rapid/blitz
- Cull lines that aren't working

**Annual tasks:**
- Major repertoire review
- Consider adding/dropping systems
- Study new theoretical developments
- Refresh positions you've forgotten

**Adapting to trends:**
- Track what's popular at the master level
- Prepare anti-meta systems
- Be ready for popular engine recommendations
- Stay ahead of opponents' preparation

**Personal database hygiene:**
- Annotate every serious game
- Tag games by opening variation
- Create "to study" tags for problem areas
- Archive outdated lines (don't delete—they may return)

**The refinement mindset:**
Your repertoire is never "finished"—it evolves with your understanding, with theory, and with the changing meta. Embrace continuous improvement.`,
          fen: 'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
        },
      ],
      keyConceptBoards: [
        {
          title: 'Anti-Computer Structure - Closed Catalan',
          fen: 'r1bqk2r/pppn1ppp/4pn2/3p4/1bPP4/5NP1/PP1BPPBP/RN1QK2R b KQkq - 0 6',
          description: 'The Closed Catalan creates long-term positional battles. White\'s fianchettoed bishop will pressure d5 for the entire game. Engines show equality, but humans must understand how to play both sides for 50+ moves.',
        },
        {
          title: 'Surprise Weapon - Morra Gambit',
          fen: 'rnbqkbnr/pp1ppppp/8/8/3pP3/2P5/PP3PPP/RNBQKBNR b KQkq - 0 3',
          description: 'The Morra Gambit (1.e4 c5 2.d4 cxd4 3.c3) is objectively just equal, but creates immediate practical problems for Black. If you\'ve studied it deeply and your opponent hasn\'t, you have a practical edge.',
        },
        {
          title: 'Repertoire Synergy - Structure Transfer',
          fen: 'r1bq1rk1/pppnnpbp/3p2p1/3Pp3/2P1P3/2N2NP1/PP2BPKP/R1BQ3R w - - 0 12',
          description: 'This pawn structure (c4-d5-e4 vs d6-e5) can arise from the King\'s Indian, English Opening, or Sicilian Dragon reversed. Understanding this structure once helps across multiple openings—that\'s repertoire synergy.',
        },
      ],
      quizQuestions: [
        {
          id: 'M7.5-Q1',
          question: 'What characterizes effective "anti-computer" lines?',
          type: 'multiple_choice',
          options: ['Lines that trick the engine', 'Objectively equal positions that humans find difficult to play', 'Gambits that win material', 'Sharp tactical positions'],
          correctAnswer: 'Objectively equal positions that humans find difficult to play',
          explanation: 'Anti-computer lines are objectively fine but create practical difficulties—complex maneuvering, multiple plans, positions where understanding matters more than calculation.',
        },
        {
          id: 'M7.5-Q2',
          question: 'How many hours of study should go into preparing a surprise weapon?',
          type: 'multiple_choice',
          options: ['1-2 hours', '10+ hours of deep analysis plus practical testing', '30 minutes', 'Just check the engine recommendation'],
          correctAnswer: '10+ hours of deep analysis plus practical testing',
          explanation: 'A surprise weapon requires deep study (10+ hours) plus practical testing (100+ online games) to understand typical patterns, mistakes, and how to handle various responses.',
        },
        {
          id: 'M7.5-Q3',
          question: 'What is the "three-layer repertoire" structure?',
          type: 'multiple_choice',
          options: ['Three variations in each opening', 'Core (main systems), Alternatives (backups), and Weapons (surprises)', 'Three openings only', 'Beginner, intermediate, and advanced lines'],
          correctAnswer: 'Core (main systems), Alternatives (backups), and Weapons (surprises)',
          explanation: 'The three-layer structure consists of core openings (deeply studied), alternatives (solid backups), and weapons (surprise lines for specific situations).',
        },
        {
          id: 'M7.5-Q4',
          question: 'What is "repertoire synergy"?',
          type: 'multiple_choice',
          options: ['Having many openings', 'Choosing openings with similar structures so understanding transfers between them', 'Only playing one opening', 'Following grandmaster fashion'],
          correctAnswer: 'Choosing openings with similar structures so understanding transfers between them',
          explanation: 'Repertoire synergy means your openings share common pawn structures or themes, so studying one helps you in others—maximizing the value of your study time.',
        },
        {
          id: 'M7.5-Q5',
          question: 'How often should you review and update your repertoire?',
          type: 'multiple_choice',
          options: ['Never—once prepared, it\'s done', 'Monthly maintenance, quarterly deep review, annual major revision', 'Only before important tournaments', 'Daily updates required'],
          correctAnswer: 'Monthly maintenance, quarterly deep review, annual major revision',
          explanation: 'Repertoire maintenance is ongoing: monthly game reviews, quarterly deep analysis and weapon updates, and annual major repertoire review to adapt to your growth and theoretical developments.',
        },
      ],
    },
  },
  {
    id: 'M7.6',
    level: 7,
    title: 'Championship Mentality',
    description: 'Develop the mindset for peak performance, continuous improvement, and chess mastery.',
    order: 6,
    xpReward: 250,
    prerequisites: [],
    content: {
      overview: 'Technical skills bring you to the master level; mindset takes you beyond. The greatest players share common mental traits: relentless drive for improvement, resilience in the face of setbacks, ability to perform under pressure, and a deep love for the game that sustains decades of study. This final module addresses the psychological and philosophical aspects of chess mastery—developing the championship mentality that separates good players from great ones.',
      sections: [
        {
          title: 'The Growth Mindset in Chess',
          content: `**Fixed vs Growth mindset:**

**Fixed mindset beliefs:**
- "I'm not talented enough"
- "Strong players just have natural ability"
- "I've hit my ceiling"
- "Losses prove I'm not good enough"

**Growth mindset beliefs:**
- "I can always improve"
- "Effort and study lead to results"
- "Setbacks are learning opportunities"
- "Masters weren't born—they were made"

**Developing a growth mindset:**

1. **Embrace challenges**
   - Seek stronger opponents
   - Study positions you find difficult
   - Enter challenging tournaments

2. **Learn from criticism**
   - Use engine feedback constructively
   - Seek honest coaching
   - Analyze your losses thoroughly

3. **Persist through obstacles**
   - Rating drops are temporary
   - Plateaus precede breakthroughs
   - Long-term trajectory matters, not short-term results

4. **Find inspiration in others' success**
   - Study how masters improved
   - Learn from your opponents
   - Success by others proves it's possible

**The 10,000-hour reality:**
There are no shortcuts to mastery. Embrace the journey, not just the destination.`,
          fen: '8/8/8/4k3/8/4K3/8/8 w - - 0 1',
        },
        {
          title: 'Peak Performance States',
          content: `**Achieving "flow" in chess:**

**Flow state characteristics:**
- Complete absorption in the position
- Time seems to pass differently
- Moves come naturally without overthinking
- Clear goals and immediate feedback
- Challenge matches skill level

**Creating conditions for flow:**
- Adequate rest and nutrition
- Comfortable physical environment
- Optimal opponent strength (challenging but not overwhelming)
- Genuine interest in the position
- Freedom from external distractions

**Pre-game rituals:**
- Consistent routine reduces anxiety
- Physical warm-up (walk, stretch)
- Mental warm-up (tactics, visualization)
- Music/silence (whatever works for you)
- Arrive early, settle in

**In-game focus techniques:**
- Deep breathing between moves
- Focus on the position, not the clock or opponent
- Take strategic breaks (walk, wash face)
- Use your opponent's time productively
- Reset mentally after mistakes

**Recovery between games:**
- Brief analysis only (save deep study for later)
- Physical recovery (food, walk, rest)
- Mental reset (don't dwell on results)
- Prepare for the next opponent
- Maintain social connections (but don't exhaust yourself)`,
          fen: 'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
        },
        {
          title: 'Building Resilience',
          content: `**The inevitability of failure:**

Every master has lost hundreds of games. What matters is response:
- Magnus Carlsen lost many games before becoming World Champion
- Bobby Fischer's path included devastating losses
- Kasparov came back from 2-0 down to win the 1995 match

**Resilience techniques:**

**After a painful loss:**
1. Feel the emotion—don't suppress it
2. Wait 24 hours before deep analysis
3. Extract specific lessons
4. Implement changes
5. Move forward

**Handling losing streaks:**
- Take a short break (days, not weeks)
- Play training games with less pressure
- Focus on process, not results
- Revisit fundamentals
- Trust your preparation

**Building mental toughness:**
- Put yourself in uncomfortable positions deliberately
- Practice in time pressure
- Play against stronger opponents regularly
- Complete tournaments even when struggling
- Develop pre-game and post-game routines

**The stoic chess player:**
Control what you can (preparation, focus, effort)
Accept what you can't (opponent's moves, luck, other's behavior)
Have wisdom to distinguish between them`,
          fen: '3r2k1/pp3ppp/2p5/4p3/2B1P3/2P2P2/PP4PP/3R2K1 w - - 0 20',
        },
        {
          title: 'The Path to Mastery',
          content: `**The continuous improvement cycle:**

**Daily practice (1-2 hours minimum):**
- Tactics: 15-30 minutes
- Opening study: 20-30 minutes
- Annotated master games: 30 minutes
- Your own game analysis: 30 minutes

**Weekly focus areas:**
- Monday-Tuesday: Opening preparation
- Wednesday-Thursday: Strategic themes
- Friday: Endgame study
- Weekend: Long games and analysis

**Monthly review:**
- Rating and performance trends
- Opening success rates
- Typical mistakes to address
- Goals for next month

**Long-term development:**
- Work with a coach if possible
- Join a chess club or study group
- Play in serious tournaments regularly
- Read classic chess literature
- Study complete games, not just positions

**The master's philosophy:**
Chess mastery is not a destination but a journey. Even world champions continue to learn and improve. The joy comes from the process—the beautiful positions, the deep ideas, the elegant solutions.

**Your mission:**
Become a student of chess for life. The rating will follow.

**Final thought:**
"Chess is life" — Bobby Fischer
But also: Life is more than chess. Balance creates sustainable excellence.`,
          fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        },
      ],
      keyConceptBoards: [
        {
          title: 'The Starting Position - Endless Possibilities',
          fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
          description: 'The starting position represents infinite possibilities. After 1.e4 there are over 10^120 possible games. Mastery is not memorizing all variations—it\'s developing understanding that guides you through the unknown.',
        },
        {
          title: 'The Empty Board - Zen Mind',
          fen: '8/8/8/8/8/8/8/8 w - - 0 1',
          description: 'Before the game begins, empty your mind of expectations, fears, and prejudices. Approach each position fresh. The championship mentality combines deep knowledge with beginner\'s curiosity.',
        },
        {
          title: 'The Final Position - Every Game Ends',
          fen: '5rk1/pp3ppp/8/8/8/8/PPP2PPP/2KR1B1R w - - 0 30',
          description: 'Every game ends. What matters is what you learn and how you grow. A master treats every game—win, lose, or draw—as a lesson. The next game is always a fresh start.',
        },
      ],
      quizQuestions: [
        {
          id: 'M7.6-Q1',
          question: 'What is the key difference between fixed and growth mindsets?',
          type: 'multiple_choice',
          options: ['Fixed mindset players are stronger', 'Growth mindset players believe abilities can be developed through effort', 'There is no difference', 'Growth mindset is only for beginners'],
          correctAnswer: 'Growth mindset players believe abilities can be developed through effort',
          explanation: 'Growth mindset—believing abilities can be developed—leads to embracing challenges, persisting through setbacks, and finding lessons in criticism. This is essential for long-term improvement.',
        },
        {
          id: 'M7.6-Q2',
          question: 'What conditions help create a "flow" state during a chess game?',
          type: 'multiple_choice',
          options: ['Extreme time pressure', 'Adequate rest, focused attention, and challenge matching skill level', 'Playing against much weaker opponents', 'Ignoring the position and playing quickly'],
          correctAnswer: 'Adequate rest, focused attention, and challenge matching skill level',
          explanation: 'Flow requires physical preparation, mental focus, appropriate challenge level, and genuine engagement with the position—conditions you can actively cultivate.',
        },
        {
          id: 'M7.6-Q3',
          question: 'How should you respond to a painful tournament loss?',
          type: 'multiple_choice',
          options: ['Immediately analyze and dwell on it', 'Never think about it again', 'Feel the emotion, wait before deep analysis, extract lessons, then move forward', 'Quit the tournament'],
          correctAnswer: 'Feel the emotion, wait before deep analysis, extract lessons, then move forward',
          explanation: 'Healthy processing involves acknowledging emotions, waiting before analysis (24 hours), extracting specific lessons, implementing changes, and moving forward without dwelling.',
        },
        {
          id: 'M7.6-Q4',
          question: 'What is the minimum daily practice time recommended for serious improvement?',
          type: 'multiple_choice',
          options: ['15 minutes', '1-2 hours covering multiple areas', '5+ hours', 'No minimum exists'],
          correctAnswer: '1-2 hours covering multiple areas',
          explanation: 'Sustained improvement requires consistent daily practice of 1-2 hours minimum, covering tactics, openings, strategic study, and game analysis.',
        },
        {
          id: 'M7.6-Q5',
          question: 'What is the ultimate "master\'s philosophy" about chess improvement?',
          type: 'multiple_choice',
          options: ['Win at all costs', 'Mastery is a journey of continuous learning, not a destination', 'Only rating matters', 'Stop studying once you reach a certain level'],
          correctAnswer: 'Mastery is a journey of continuous learning, not a destination',
          explanation: 'Even world champions continue learning. The joy comes from the process—the beautiful positions, deep ideas, and elegant solutions. Become a student of chess for life.',
        },
      ],
    },
  },
];
