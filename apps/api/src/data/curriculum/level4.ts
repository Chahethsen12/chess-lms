import { Module } from './types.js';

export const level4Modules: Module[] = [
  {
    id: 'M4.1',
    level: 4,
    title: 'Middlegame Strategy - Pawn Breaks and Majorities',
    description: 'Master pawn breaks and learn to exploit pawn majorities for strategic advantage.',
    order: 1,
    xpReward: 170,
    prerequisites: ['M3.6'],
    content: {
      overview: 'The middlegame is where strategy and tactics interweave. Understanding pawn breaks - when and how to advance pawns to open lines or create weaknesses - and how to use pawn majorities is essential for creating winning plans. These concepts form the backbone of positional play.',
      sections: [
        {
          title: 'Understanding Pawn Breaks',
          content: `A **pawn break** is a pawn move that challenges the opponent's pawn structure, usually by advancing into contact with enemy pawns.

**Why Pawn Breaks Matter:**
- Open files for rooks
- Create weak pawns in opponent's camp
- Free your pieces
- Change the character of the position

**Common Pawn Breaks:**

**Central Breaks:**
\`\`\`
d4-d5 (in e4/d4 structures)
e5-e6 (pushing through)
c4-c5 (minority attack)
f2-f4 or f7-f5 (kingside)
\`\`\`

**Timing is Everything:**
A pawn break too early may lose material. Too late may give the opponent time to prepare. Ask:
- Are my pieces ready to exploit the break?
- Can my opponent block or neutralize it?
- What happens after the exchanges?`,
          fen: 'r1bq1rk1/pp2nppp/2n1p3/2ppP3/3P4/2PB1N2/PP3PPP/R1BQ1RK1 w - - 0 10',
          arrows: [
            { from: 'd4', to: 'd5', color: 'green' },
            { from: 'c5', to: 'd4', color: 'red' },
          ],
          highlights: [
            { square: 'd5', color: 'rgba(79, 152, 163, 0.3)' },
          ],
        },
        {
          title: 'The d4-d5 Break',
          content: `The **d5 break** is one of the most important central pawn breaks.

**When to Play d5:**
1. Your pieces control the d5 square
2. You can recapture with a piece (not a pawn)
3. It opens lines for your rooks and queen
4. The opponent's pieces are passively placed

**Example Scenario:**
\`\`\`
Position: White pawns on e4, d4; Black pawn on e6
1.d5! exd5 2.exd5 (opens e-file for rook)
or 1.d5! exd5 2.Nxd5 (knight occupies the outpost)
\`\`\`

**Strategic Goals After d5:**
- Exploit the open e-file
- Target backward pawns
- Use the d5 square as an outpost
- Create a passed d-pawn

**Warning:** Don't play d5 if it just trades pawns without improving your position.`,
          fen: 'r2q1rk1/pp2bppp/2n1pn2/2pp4/3PP3/2N2N2/PP2BPPP/R1BQ1RK1 w - - 0 9',
          arrows: [
            { from: 'e4', to: 'd5', color: 'green' },
          ],
        },
        {
          title: 'Pawn Majorities',
          content: `A **pawn majority** is having more pawns than your opponent on one side of the board.

**Why Majorities Matter:**
The side with a majority can create a passed pawn by advancing.

**Types:**
- **Kingside majority:** Pawns f, g, h vs opponent's fewer pawns
- **Queenside majority:** Pawns a, b, c vs opponent's fewer pawns
- **Central majority:** Extra pawns in the center

**Using a Queenside Majority:**
\`\`\`
Position: White a2, b2, c3 vs Black a7, b7
1.a4! (starting the advance)
1...a6 2.b4 (supporting c5)
2...b6 3.c4 (preparing c5)
Eventually c5-c6 creates a passed pawn
\`\`\`

**The Minority Attack:**
Even WITHOUT a majority, advancing pawns can create weaknesses:
\`\`\`
b4-b5 to attack c6, creating a backward pawn
\`\`\``,
          fen: 'r1bq1rk1/4bppp/p1n1pn2/1ppp4/3PP3/1BP2N2/PP3PPP/RNBQ1RK1 w - - 0 10',
          highlights: [
            { square: 'a2', color: 'rgba(0, 255, 0, 0.3)' },
            { square: 'b2', color: 'rgba(0, 255, 0, 0.3)' },
            { square: 'c3', color: 'rgba(79, 152, 163, 0.3)' },
          ],
        },
        {
          title: 'Practical Pawn Strategy',
          content: `**Choosing When to Break:**

**1. Assess Piece Placement**
Are your pieces ready to use the open lines?

**2. Calculate Consequences**
What happens after the exchanges? Better or worse?

**3. Check for Tactics**
Does the break allow any tactical shots?

**Common Mistakes:**
- Breaking too early (pieces not ready)
- Breaking into a stronger position
- Creating weak pawns without compensation

**Strategic Planning Template:**
\`\`\`
1. "My pawn majority is on the queenside"
2. "I should advance a4-b4-c5 to create a passed pawn"
3. "First, I'll improve my pieces to support this"
4. "I need to watch for counterplay on the kingside"
\`\`\`

**Remember:** Pawns cannot move backward! Every pawn move changes the position permanently.`,
          fen: 'r1bqr1k1/pp3ppp/2n1pn2/2pp4/3PP3/P1P2N2/1P3PPP/R1BQRNK1 w - - 0 11',
        },
      ],
      keyConceptBoards: [
        {
          title: 'Thematic d5 Break',
          fen: 'r2qr1k1/pp2bppp/2n1pn2/2pp4/3PP3/2NB1N2/PP3PPP/R1BQR1K1 w - - 0 11',
          description: 'White plays d5! If exd5, then exd5 opens the e-file for the rook. If Nxd5, White controls the center. The d5 break transforms the position.',
          arrows: [
            { from: 'd4', to: 'd5', color: 'green' },
            { from: 'e1', to: 'e8', color: 'orange' },
          ],
        },
        {
          title: 'Queenside Majority',
          fen: 'r2q1rk1/1p2bppp/p1n1pn2/2pp4/PP1P4/2PB1N2/4NPPP/R1BQ1RK1 w - - 0 12',
          description: 'White has a queenside pawn majority (a4, b4, c3 vs a6, b7). The plan is to advance with c4, a5, and eventually create a passed pawn.',
          arrows: [
            { from: 'c3', to: 'c4', color: 'green' },
            { from: 'a4', to: 'a5', color: 'blue' },
          ],
        },
      ],
      quizQuestions: [
        {
          id: 'M4.1-Q1',
          question: 'What is a pawn break?',
          type: 'multiple_choice',
          options: ['Capturing an opponent\'s pawn', 'A pawn move that challenges the opponent\'s pawn structure', 'Moving a pawn backward', 'Sacrificing a pawn'],
          correctAnswer: 'A pawn move that challenges the opponent\'s pawn structure',
          explanation: 'A pawn break is a pawn advance that comes into contact with enemy pawns, potentially opening lines or creating weaknesses.',
        },
        {
          id: 'M4.1-Q2',
          question: 'What is a pawn majority?',
          type: 'multiple_choice',
          options: ['Having more pawns than your opponent total', 'Having more pawns than your opponent on one side of the board', 'Having all pawns on one side', 'Having no pawns captured'],
          correctAnswer: 'Having more pawns than your opponent on one side of the board',
          explanation: 'A pawn majority means having more pawns than your opponent on one wing of the board, allowing you to create a passed pawn.',
        },
        {
          id: 'M4.1-Q3',
          question: 'Why is the d5 break so important?',
          type: 'multiple_choice',
          options: ['It always wins material', 'It opens central lines and challenges Black\'s pawn structure', 'It protects the king', 'It traps the queen'],
          correctAnswer: 'It opens central lines and challenges Black\'s pawn structure',
          explanation: 'The d5 break opens the e-file, creates outposts, and can lead to weak pawns in Black\'s camp.',
        },
        {
          id: 'M4.1-Q4',
          question: 'What is a "minority attack"?',
          type: 'multiple_choice',
          options: ['Attacking with fewer pieces', 'Advancing pawns into a larger pawn mass to create weaknesses', 'Playing with a material disadvantage', 'Attacking the king with minor pieces'],
          correctAnswer: 'Advancing pawns into a larger pawn mass to create weaknesses',
          explanation: 'A minority attack uses fewer pawns to attack more enemy pawns, typically to create a weak backward pawn.',
        },
        {
          id: 'M4.1-Q5',
          question: 'When should you NOT play a pawn break?',
          type: 'multiple_choice',
          options: ['When your pieces are well-placed', 'When it opens lines for your rooks', 'When your pieces are not ready to exploit the resulting position', 'When you have a pawn majority'],
          correctAnswer: 'When your pieces are not ready to exploit the resulting position',
          explanation: 'A pawn break should be timed when your pieces can use the open lines. Breaking too early wastes the opportunity.',
        },
      ],
    },
  },
  {
    id: 'M4.2',
    level: 4,
    title: 'Attack Patterns - Kingside Attacks and Opposite-Side Castling',
    description: 'Learn systematic approaches to attacking the enemy king.',
    order: 2,
    xpReward: 180,
    prerequisites: ['M4.1'],
    content: {
      overview: 'Attacking the king is the ultimate goal in chess. This lesson covers how to build and execute kingside attacks, the dynamics of opposite-side castling positions, and the key principles of successful attacking play. Mastering these patterns will help you convert advantages into victories.',
      sections: [
        {
          title: 'Building a Kingside Attack',
          content: `**Prerequisites for a Successful Attack:**

1. **Central control or closed center**
   - If the center is open, central counterplay can defeat your attack
   - Lock the center or control it before attacking

2. **Piece activity toward the king**
   - Rooks on semi-open files (g, h files)
   - Bishops aimed at the king position
   - Knight hops to attack squares (f5, g5, h5)

3. **Pawn storm coordination**
   - Advance h-pawn, g-pawn to open lines
   - Time pawn pushes with piece placement

**Classic Attack Setup:**
\`\`\`
Pieces: Queen on d3/e3, Bishop on d3, Knight on f5
Pawns: h4-h5 to pry open the h-file
Plan: Rook lift Rh3-g3, sacrifice on g7 or h7
\`\`\``,
          fen: 'r1bq1rk1/pp2nppp/2n1p3/2ppP2Q/3P4/2PB1N2/PP3PPP/R1B2RK1 w - - 0 12',
          arrows: [
            { from: 'h5', to: 'h7', color: 'red' },
            { from: 'd3', to: 'h7', color: 'red' },
            { from: 'f3', to: 'g5', color: 'orange' },
          ],
        },
        {
          title: 'The Greek Gift and Beyond',
          content: `**The Classic Bishop Sacrifice:**
\`\`\`
1.Bxh7+! Kxh7 
2.Ng5+ Kg8 (or Kg6)
3.Qh5 with a winning attack
\`\`\`

**When Bxh7+ Works:**
1. Knight can reach g5 with tempo
2. Queen can reach h5 quickly
3. No adequate defense for Black

**Beyond Bxh7 - Other Sacrifices:**

**Double Bishop Sacrifice:**
\`\`\`
1.Bxh7+ Kxh7 2.Qh5+ Kg8 3.Bxg7! Kxg7 4.Qg5+ Kh8 5.Rf3!
\`\`\`

**Rook Sacrifice:**
\`\`\`
1.Rxh7! Kxh7 2.Qh5+ Kg8 3.Bxg7! mating attack
\`\`\`

**Queen Sacrifice for Mate:**
\`\`\`
1.Qxh7+! Kxh7 2.Rh3+ Kg7 3.Rh8#
\`\`\``,
          fen: 'r1bq1rk1/ppp2ppp/2n1pn2/3p2B1/3P4/2NBPN2/PPP2PPP/R2QK2R w KQ - 0 8',
          highlights: [
            { square: 'h7', color: 'rgba(255, 0, 0, 0.5)' },
          ],
        },
        {
          title: 'Opposite-Side Castling',
          content: `When players castle on opposite sides, the game becomes a **race to attack**.

**Key Principles:**

**1. Speed is Critical**
\`\`\`
Every tempo matters. Don't waste moves!
Launch your pawn storm immediately.
\`\`\`

**2. Pawn Storm Technique**
\`\`\`
White (castled kingside, attacking queenside):
a4-a5, b4-b5, open the a/b files

Black (castled queenside, attacking kingside):
g5-g4, h5-h4, open the g/h files
\`\`\`

**3. Don't Weaken Your Own King**
Attacking pawns leave holes. Keep your king safe too!

**4. Piece Activity**
\`\`\`
Rooks behind advancing pawns
Bishops on long diagonals toward enemy king
Knights to attack squares near enemy king
\`\`\`

**Who Wins the Race?**
The player whose attack arrives first with decisive force.`,
          fen: 'r3kb1r/pp1n1ppp/2p1pn2/q2p2B1/3P1P2/2NBPN2/PPP3PP/R2QK2R w KQkq - 0 9',
          arrows: [
            { from: 'e1', to: 'g1', color: 'green' },
            { from: 'e8', to: 'c8', color: 'blue' },
            { from: 'h2', to: 'h4', color: 'orange' },
            { from: 'a2', to: 'a4', color: 'red' },
          ],
        },
        {
          title: 'Attacking Principles Summary',
          content: `**The Five Rules of Attack:**

**1. Create Weaknesses First**
Target a weak point before launching the full attack.

**2. Concentrate Forces**
Bring maximum firepower to the attack zone. Don't attack with just one or two pieces.

**3. Eliminate Defenders**
Trade off pieces defending the king position.

**4. Open Lines**
Use pawn breaks, sacrifices, or exchanges to open files toward the king.

**5. Don't Rush**
Build up slowly. The attack should be overwhelming when it comes.

**Signs Your Attack Will Succeed:**
- 3+ pieces aimed at the king
- Open lines toward the king
- Enemy pieces away from defense
- Tactical motifs available (forks, pins)

**Signs to Slow Down:**
- Center is open (counterattack coming)
- Opponent has more defenders than attackers
- Your king is equally weak`,
          fen: 'r4rk1/pp2qppp/2n1pn2/2Pp2B1/3P4/2NBPN2/PP3PPP/R2Q1RK1 w - - 0 12',
        },
      ],
      keyConceptBoards: [
        {
          title: 'Greek Gift Position',
          fen: 'r1bq1rk1/ppp2ppp/2n1pn2/3p2B1/3P4/2NBPN2/PPP2PPP/R2Q1RK1 w - - 0 9',
          description: 'Classic Greek Gift setup. White can play 1.Bxh7+! Kxh7 2.Ng5+ Kg8 3.Qh5 with a devastating attack. All conditions are met.',
          arrows: [
            { from: 'd3', to: 'h7', color: 'red' },
            { from: 'f3', to: 'g5', color: 'orange' },
            { from: 'd1', to: 'h5', color: 'yellow' },
          ],
        },
        {
          title: 'Opposite-Side Castling Race',
          fen: '2kr1b1r/pp1nqppp/2p1pn2/3p2B1/3P1P2/2NBPN2/PPP3PP/2KR3R w - - 0 12',
          description: 'Both sides have castled opposite. White will attack with g4-g5, h4-h5. Black will attack with a5-a4, b5-b4. Speed is critical!',
          arrows: [
            { from: 'g2', to: 'g4', color: 'green' },
            { from: 'h2', to: 'h4', color: 'green' },
            { from: 'a7', to: 'a5', color: 'red' },
            { from: 'b7', to: 'b5', color: 'red' },
          ],
        },
      ],
      quizQuestions: [
        {
          id: 'M4.2-Q1',
          question: 'Before launching a kingside attack, what must you ensure about the center?',
          type: 'multiple_choice',
          options: ['It must be completely open', 'It should be closed or under control', 'Your king must be in the center', 'You need a passed pawn'],
          correctAnswer: 'It should be closed or under control',
          explanation: 'If the center is open, the opponent can counterattack there. Close or control the center before committing to a flank attack.',
        },
        {
          id: 'M4.2-Q2',
          question: 'What is the "Greek Gift" sacrifice?',
          type: 'multiple_choice',
          options: ['Sacrificing the queen for quick development', 'Sacrificing the bishop on h7 to expose the king', 'A pawn sacrifice in the opening', 'Castling early'],
          correctAnswer: 'Sacrificing the bishop on h7 to expose the king',
          explanation: 'The Greek Gift is Bxh7+!, sacrificing the bishop to pull the king out and launch a mating attack with Ng5+ and Qh5.',
        },
        {
          id: 'M4.2-Q3',
          question: 'In opposite-side castling positions, what is the key factor?',
          type: 'multiple_choice',
          options: ['Material count', 'Speed of attack', 'Piece trades', 'Pawn structure'],
          correctAnswer: 'Speed of attack',
          explanation: 'With kings on opposite sides, the game becomes a race. Whoever gets their attack in first with sufficient force usually wins.',
        },
        {
          id: 'M4.2-Q4',
          question: 'How many attacking pieces should typically be involved in a successful king attack?',
          type: 'multiple_choice',
          options: ['1', '2', '3 or more', 'All pieces'],
          correctAnswer: '3 or more',
          explanation: 'A successful attack usually requires at least three pieces working together. One or two pieces can usually be defended against.',
        },
        {
          id: 'M4.2-Q5',
          question: 'In a pawn storm, where should your rooks ideally be?',
          type: 'multiple_choice',
          options: ['On the back rank', 'Behind the advancing pawns', 'In front of the pawns', 'Traded off'],
          correctAnswer: 'Behind the advancing pawns',
          explanation: 'Rooks behind passed or advancing pawns can use the files that open when pawns are captured or advanced.',
        },
      ],
    },
  },
  {
    id: 'M4.3',
    level: 4,
    title: 'Advanced Tactics - Deflection, Decoy, Interference, and Overloading',
    description: 'Master sophisticated tactical patterns that create decisive advantages.',
    order: 3,
    xpReward: 190,
    prerequisites: ['M4.2'],
    content: {
      overview: 'Building on basic tactics, we now study advanced patterns that are harder to see but equally powerful. Deflection lures defenders away, decoys attract pieces to vulnerable squares, interference disrupts coordination, and overloading exploits pieces with too many jobs. These themes appear in the games of all strong players.',
      sections: [
        {
          title: 'Deflection',
          content: `**Deflection** forces a piece away from a key defensive duty.

**How It Works:**
1. Identify a piece defending something important
2. Attack it or sacrifice to force it away
3. The defended target becomes vulnerable

**Example:**
\`\`\`
Position: Rook on d8 defends the back rank
1.Qxd8+! Rxd8 (Rook deflected from defense)
2.Re8+ Rxe8 3.Rxe8# (Back rank mate!)
\`\`\`

**Common Deflection Targets:**
- Pieces guarding the back rank
- Defenders of key squares
- Pieces protecting the king

**Key Insight:**
Deflection often involves sacrifices. You give up material to remove a critical defender, then win more back or deliver mate.

**Question to Ask:**
"What is this piece defending? Can I force it to move?"`,
          fen: 'r2q1rk1/pp2ppbp/2n3p1/8/2B5/5Q2/PPP2PPP/R3R1K1 w - - 0 14',
          arrows: [
            { from: 'f3', to: 'd3', color: 'blue' },
            { from: 'c4', to: 'f7', color: 'red' },
          ],
        },
        {
          title: 'Decoy',
          content: `**Decoy** is the opposite of deflection - you lure a piece TO a bad square.

**How It Works:**
1. Sacrifice to attract a piece to a specific square
2. On that square, the piece becomes vulnerable to a tactic
3. Execute the winning blow

**Example - Decoying into a Fork:**
\`\`\`
Position: King on g8, Knight can reach f7
1.Qxe8+! Rxe8 (King decoyed to e8)
2.Nf7+ Kg8 3.Nxe8 (Won the exchange)
\`\`\`

**Example - Decoying into a Pin:**
\`\`\`
1.Qa8! Rxa8 (Rook decoyed to a8)
2.Re8+! Rxe8 3.Bxa8 (Won material)
\`\`\`

**Common Decoy Patterns:**
- Decoy king to a fork square
- Decoy queen to a square where it can be pinned
- Decoy rook to a back rank for a mating pattern`,
          fen: 'r2r2k1/pp2qppp/2n1p3/2b5/4N3/5Q2/PPP2PPP/R4RK1 w - - 0 15',
          arrows: [
            { from: 'f3', to: 'a8', color: 'green' },
          ],
        },
        {
          title: 'Interference',
          content: `**Interference** blocks a line of communication between enemy pieces.

**How It Works:**
1. Find two enemy pieces coordinating along a line
2. Place your piece on that line to block them
3. One of the pieces becomes undefended or the coordination breaks

**Example:**
\`\`\`
Position: Black rook on a8 defends rook on d8 (along 8th rank)
1.Rc8! (Interference!) 
Now both rooks are attacked but cannot help each other!
\`\`\`

**Interference + Tactics:**
\`\`\`
1.Bf5! (Interferes between queen on d7 and rook on f7)
Black loses the exchange or the queen!
\`\`\`

**The Power of Interference:**
- Disrupts defensive coordination
- Creates multiple threats at once
- Often decisive because both pieces are simultaneously affected`,
          fen: 'r2r2k1/pp1q1ppp/2n1p3/5b2/8/5B2/PPP2PPP/R2R2K1 w - - 0 18',
          arrows: [
            { from: 'f3', to: 'c6', color: 'green' },
          ],
          highlights: [
            { square: 'c6', color: 'rgba(255, 255, 0, 0.4)' },
          ],
        },
        {
          title: 'Overloading',
          content: `**Overloading** occurs when one piece has too many defensive duties.

**How It Works:**
1. Find a piece defending two (or more) things
2. Attack one of the defended items
3. When it defends, capture the other!

**Example:**
\`\`\`
Position: Queen defends both rook on a8 and bishop on c6
1.Rxa8! Qxa8 (Queen abandons bishop defense)
2.Bxc6 (Won a piece!)

Or:
1.Bxc6! Qxc6 (Queen abandons rook defense)
2.Rxa8 (Won the exchange!)
\`\`\`

**Overloading vs. Deflection:**
- Deflection: Force the piece away completely
- Overloading: The piece stays but can't do both jobs

**Finding Overloaded Pieces:**
Ask: "What is this piece defending? Is it defending MORE than one thing?"

**Creating Overloading:**
Attack multiple targets simultaneously to stretch the defense.`,
          fen: 'r4rk1/1q2bppp/p1n1pn2/1p6/3P1B2/1BN1PN2/PP3PPP/R2Q1RK1 w - - 0 13',
          arrows: [
            { from: 'b7', to: 'a8', color: 'blue' },
            { from: 'b7', to: 'b5', color: 'blue' },
          ],
          highlights: [
            { square: 'b7', color: 'rgba(255, 165, 0, 0.4)' },
          ],
        },
      ],
      keyConceptBoards: [
        {
          title: 'Deflection Example',
          fen: '3r2k1/pp3ppp/8/8/1b6/8/PPP1QPPP/R5K1 w - - 0 20',
          description: 'The d8 rook guards against back rank mate. White plays 1.Qe8+! Rxe8 2.Rxe8# - the rook is deflected and mate follows.',
          arrows: [
            { from: 'e2', to: 'e8', color: 'red' },
          ],
        },
        {
          title: 'Overloading in Action',
          fen: 'r3r1k1/ppq2ppp/2n1bn2/8/3P4/2N1BN2/PP2QPPP/R4RK1 w - - 0 15',
          description: 'Black\'s knight on c6 defends e7 and d4. After 1.d5! the knight is overloaded - it cannot protect both the bishop and stop the pawn.',
          arrows: [
            { from: 'c6', to: 'e7', color: 'blue' },
            { from: 'c6', to: 'd4', color: 'orange' },
            { from: 'd4', to: 'd5', color: 'green' },
          ],
        },
      ],
      quizQuestions: [
        {
          id: 'M4.3-Q1',
          question: 'What is deflection?',
          type: 'multiple_choice',
          options: ['Blocking a line of communication', 'Forcing a piece away from its defensive duty', 'Attacking two pieces at once', 'Promoting a pawn'],
          correctAnswer: 'Forcing a piece away from its defensive duty',
          explanation: 'Deflection forces a defending piece to move away, leaving its protected target vulnerable.',
        },
        {
          id: 'M4.3-Q2',
          question: 'How is decoy different from deflection?',
          type: 'multiple_choice',
          options: ['Decoy attracts a piece TO a bad square; deflection forces it AWAY', 'There is no difference', 'Decoy only works against kings', 'Deflection requires a sacrifice'],
          correctAnswer: 'Decoy attracts a piece TO a bad square; deflection forces it AWAY',
          explanation: 'Deflection forces a piece away from where it\'s needed. Decoy lures a piece to a square where it becomes vulnerable.',
        },
        {
          id: 'M4.3-Q3',
          question: 'What does interference do?',
          type: 'multiple_choice',
          options: ['Attacks two pieces at once', 'Blocks the line of communication between enemy pieces', 'Trades queens', 'Creates a passed pawn'],
          correctAnswer: 'Blocks the line of communication between enemy pieces',
          explanation: 'Interference disrupts coordination by placing a piece on the line connecting two enemy pieces.',
        },
        {
          id: 'M4.3-Q4',
          question: 'What is an overloaded piece?',
          type: 'multiple_choice',
          options: ['A piece that has moved too many times', 'A piece with too many defensive responsibilities', 'A piece that is pinned', 'A piece blocking a check'],
          correctAnswer: 'A piece with too many defensive responsibilities',
          explanation: 'An overloaded piece is defending two or more things and cannot adequately protect both.',
        },
        {
          id: 'M4.3-Q5',
          question: 'To find tactical opportunities with overloading, what question should you ask?',
          type: 'multiple_choice',
          options: ['How many pawns are there?', 'What is this piece defending? Is it defending more than one thing?', 'Which piece is most valuable?', 'Can I castle?'],
          correctAnswer: 'What is this piece defending? Is it defending more than one thing?',
          explanation: 'Identifying pieces with multiple defensive duties helps you find overloading opportunities.',
        },
      ],
    },
  },
  {
    id: 'M4.4',
    level: 4,
    title: 'Opening Repertoire Building',
    description: 'Develop a solid opening repertoire for both 1.e4 and 1.d4.',
    order: 4,
    xpReward: 160,
    prerequisites: ['M4.3'],
    content: {
      overview: 'At the club level, having a well-structured opening repertoire saves study time and provides consistent positions to play from. This lesson helps you build a cohesive repertoire for White with both 1.e4 and 1.d4, and responses for Black against common openings.',
      sections: [
        {
          title: 'Building a 1.e4 Repertoire',
          content: `**Main Line Approach:**

**Against 1...e5 (Open Games):**
Choose ONE of:
- Italian Game (3.Bc4) - Direct, tactical
- Spanish Game (3.Bb5) - Strategic, long-term
- Scotch Game (3.d4) - Open lines early

**Against 1...c5 (Sicilian):**
Choose ONE of:
- Open Sicilian (2.Nf3, 3.d4) - Theoretical but rewarding
- Anti-Sicilians (2.Nc3 or 2.c3) - Less theory, solid

**Against 1...e6 (French):**
\`\`\`
3.Nc3 or 3.Nd2 - Both are excellent
Key: Learn the pawn structures (e5 or exd5)
\`\`\`

**Against 1...c6 (Caro-Kann):**
\`\`\`
3.Nc3 or 3.e5 (Advance) - Both are principled
\`\`\`

**Repertoire Tip:**
Choose openings with similar structures. If you play d3 setups against the Sicilian, play d3 Italian too for consistency.`,
          fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1',
          arrows: [
            { from: 'e7', to: 'e5', color: 'blue' },
            { from: 'c7', to: 'c5', color: 'green' },
            { from: 'e7', to: 'e6', color: 'orange' },
          ],
        },
        {
          title: 'Building a 1.d4 Repertoire',
          content: `**Against 1...d5:**
\`\`\`
2.c4 (Queen's Gambit) - Main line, rich play
You'll need lines vs QGD (2...e6), Slav (2...c6), QGA (2...dxc4)
\`\`\`

**Against 1...Nf6 (Indian Defenses):**
Choose your approach:
- 2.c4 → King's Indian, Nimzo-Indian, etc.
- 2.Nf3 → Versatile, can transpose

**London System Alternative:**
\`\`\`
1.d4 + 2.Bf4 against nearly everything
Pros: One system, less theory
Cons: Less sharp, opponent controls structure
\`\`\`

**Against 1...f5 (Dutch):**
\`\`\`
2.g3 or 2.Nc3 - Solid responses
\`\`\`

**System Approach:**
Many club players use:
- London System (1.d4, 2.Bf4, 3.e3, 4.Nf3)
- Colle System (1.d4, 2.Nf3, 3.e3, 4.Bd3)
Less theory, consistent setup.`,
          fen: 'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq d3 0 1',
          arrows: [
            { from: 'd7', to: 'd5', color: 'blue' },
            { from: 'g8', to: 'f6', color: 'green' },
          ],
        },
        {
          title: 'Black Repertoire Against 1.e4',
          content: `**Option 1: 1...e5 (Classical)**
\`\`\`
Advantages: Sound, principled, tactical
Need to know: Italian, Spanish, Scotch, King's Gambit
\`\`\`

**Option 2: 1...c5 (Sicilian)**
\`\`\`
Advantages: Fighting chess, unbalanced positions
Need to know: Open Sicilian lines, Anti-Sicilians
Recommended: Najdorf, Dragon, or Classical
\`\`\`

**Option 3: 1...e6 (French)**
\`\`\`
Advantages: Solid, strategic, clear plans
Drawbacks: Light-squared bishop can be "bad"
\`\`\`

**Option 4: 1...c6 (Caro-Kann)**
\`\`\`
Advantages: Solid, keeps bishop outside pawn chain
Good for positional players
\`\`\`

**Recommended for Improving Players:**
1...e5 - Forces you to learn tactics and open game play, which builds chess fundamentals.`,
          fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1',
        },
        {
          title: 'Black Repertoire Against 1.d4',
          content: `**Option 1: 1...d5 (Classical)**
\`\`\`
After 2.c4: Choose QGD (2...e6), Slav (2...c6), or QGA (2...dxc4)
Solid and principled approach.
\`\`\`

**Option 2: 1...Nf6 (Indian Defenses)**
\`\`\`
King's Indian (g6, Bg7, d6, O-O, e5)
Nimzo-Indian (Bb4 after Nc3)
Queen's Indian (b6, Bb7)
\`\`\`

**Option 3: 1...f5 (Dutch)**
\`\`\`
Aggressive, unbalancing
Risk: Weakened king position
\`\`\`

**System Consideration:**
Pick a setup that works against both 1.d4 and 1.c4:
- King's Indian or ...g6 setups work vs both
- Slav/Semi-Slav players need different systems vs 1.c4

**Against the London/Colle:**
\`\`\`
1.d4 Nf6 2.Bf4 c5! (Challenge the center early)
Or ...d5, ...e6, ...c5 setup
\`\`\``,
          fen: 'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1',
        },
      ],
      keyConceptBoards: [
        {
          title: 'Italian Game Setup',
          fen: 'r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
          description: 'The Italian Game after 1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5. White aims for d3, c3, and d4 or quick Ng5 attacks on f7.',
          arrows: [
            { from: 'c4', to: 'f7', color: 'red' },
            { from: 'd2', to: 'd3', color: 'blue' },
          ],
        },
        {
          title: 'Queen\'s Gambit Position',
          fen: 'rnbqkb1r/ppp1pppp/5n2/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 1 3',
          description: 'Queen\'s Gambit after 1.d4 d5 2.c4 Nf6. White\'s main plans: Nc3, e3, Nf3 with pressure on d5. Black can take (QGA) or defend.',
          arrows: [
            { from: 'c4', to: 'd5', color: 'orange' },
            { from: 'b1', to: 'c3', color: 'green' },
          ],
        },
      ],
      quizQuestions: [
        {
          id: 'M4.4-Q1',
          question: 'When building an opening repertoire, what is recommended?',
          type: 'multiple_choice',
          options: ['Learn as many openings as possible', 'Focus on one system for White and memorize all variations', 'Choose openings with similar structures and ideas', 'Only play gambits'],
          correctAnswer: 'Choose openings with similar structures and ideas',
          explanation: 'Choosing openings with similar pawn structures means transferable knowledge - patterns from one opening apply to others.',
        },
        {
          id: 'M4.4-Q2',
          question: 'What is an advantage of playing 1...e5 against 1.e4?',
          type: 'multiple_choice',
          options: ['Less theory to learn', 'Automatic winning chances', 'Sound, principled, builds tactical fundamentals', 'Avoids all gambits'],
          correctAnswer: 'Sound, principled, builds tactical fundamentals',
          explanation: '1...e5 leads to classical open games that build fundamental chess skills through tactical and strategic fights.',
        },
        {
          id: 'M4.4-Q3',
          question: 'What is the London System?',
          type: 'multiple_choice',
          options: ['A defense against 1.e4', 'A White system with d4, Bf4, e3, Nf3 against most defenses', 'A variation of the Sicilian', 'An endgame technique'],
          correctAnswer: 'A White system with d4, Bf4, e3, Nf3 against most defenses',
          explanation: 'The London System is a universal setup for White: d4, Bf4, e3, Nf3, Be2, O-O works against almost anything.',
        },
        {
          id: 'M4.4-Q4',
          question: 'Against the Queen\'s Gambit (1.d4 d5 2.c4), what is the QGD?',
          type: 'multiple_choice',
          options: ['2...dxc4', '2...e6 (Queen\'s Gambit Declined)', '2...c6', '2...Nf6'],
          correctAnswer: '2...e6 (Queen\'s Gambit Declined)',
          explanation: 'QGD (Queen\'s Gambit Declined) is 2...e6, solidly defending d5 but temporarily locking in the light-squared bishop.',
        },
        {
          id: 'M4.4-Q5',
          question: 'Why are Indian Defenses (1...Nf6) popular against 1.d4?',
          type: 'multiple_choice',
          options: ['They always win', 'They allow flexible, hypermodern setups controlling the center from afar', 'They avoid all theory', 'They lead to quick checkmates'],
          correctAnswer: 'They allow flexible, hypermodern setups controlling the center from afar',
          explanation: 'Indian Defenses don\'t immediately occupy the center but control it with pieces, leading to rich and flexible positions.',
        },
      ],
    },
  },
  {
    id: 'M4.5',
    level: 4,
    title: 'Rook Endings - Lucena and Philidor',
    description: 'Master the two most important rook endgame positions.',
    order: 5,
    xpReward: 200,
    prerequisites: ['M4.4'],
    content: {
      overview: 'Rook endings are the most common type of endgame. Two positions - the Lucena and the Philidor - form the foundation of all rook ending theory. The Lucena shows how to win with a pawn on the 7th rank; the Philidor shows how to draw when defending. Master these, and you\'ll understand rook endings.',
      sections: [
        {
          title: 'The Lucena Position',
          content: `The **Lucena Position** is the winning method when your pawn has reached the 7th rank and your king is in front of it.

**The Position:**
\`\`\`
White: Kg7 (or Kf7), Pd7, Ra1
Black: Kc7 (cut off), Ra2
\`\`\`

**The Problem:**
The king wants to leave the pawn but can't because of checks from the side.

**The Solution - "Building a Bridge":**
\`\`\`
1.Rf1+! (Rook to the 4th rank)
1...Ke7 (Black checks)
2.Kf6 Ra6+ 
3.Ke5 Ra5+
4.Kd6 Ra6+ (Checks continue)
5.Kc7 Ra7+
6.Kb6 Ra1
7.Rf4!! (The key move - building the bridge)
7...Rb1+ 8.Kc6 Rc1+ 9.Kb5 Rb1+
10.Rb4! (Bridge complete - no more checks)
10...Rb1 11.d8=Q+
\`\`\`

**Key Concept:** The rook on the 4th rank blocks checks from the side, allowing the king to escape.`,
          fen: '3K4/3P2k1/8/8/8/8/r7/R7 w - - 0 1',
          arrows: [
            { from: 'a1', to: 'f1', color: 'green' },
            { from: 'f1', to: 'f4', color: 'blue' },
          ],
          highlights: [
            { square: 'f4', color: 'rgba(0, 255, 0, 0.4)' },
          ],
        },
        {
          title: 'Building the Bridge',
          content: `**Why "Bridge"?**
The rook creates a shelter (bridge) for the king to cross to safety from checks.

**Step-by-Step:**

**Step 1: Get the rook to the f-file**
\`\`\`
1.Rf1+! (Later will go to f4)
\`\`\`

**Step 2: Walk the king toward the pawn**
\`\`\`
1...Ke7 2.Kc7! (King shields from side checks)
\`\`\`

**Step 3: Move the rook to the 4th rank**
\`\`\`
2...Ra7+ 3.Kc6 Ra6+ 4.Kc5 Ra5+ 5.Kb4 Ra1
6.Rf4! (Now the rook can block on c4)
\`\`\`

**Step 4: Block the checks**
\`\`\`
6...Rb1+ 7.Kc3 Rc1+ 8.Rc4! (Bridge blocks check!)
\`\`\`

**Step 5: Promote**
\`\`\`
8...Rxc4 9.Kxc4 Ke7 10.d8=Q+
\`\`\`

**Remember:** The rook must reach the 4th rank (or 5th rank for non-rook pawns) to build the bridge effectively.`,
          fen: '8/2kP4/8/8/8/8/r7/4KR2 w - - 0 1',
          arrows: [
            { from: 'f1', to: 'f4', color: 'green' },
            { from: 'e1', to: 'd2', color: 'blue' },
          ],
        },
        {
          title: 'The Philidor Position',
          content: `The **Philidor Position** is the key defensive setup when down a pawn in a rook ending.

**The Defensive Position:**
\`\`\`
White: Ke5, Pe5, Rg2
Black: Ke8, Ra6 (on the 6th rank!)
\`\`\`

**The Drawing Technique:**
\`\`\`
1.Kd6 Ra1! (Now switch to checking from behind)
2.e6 Rd1+ 3.Ke5 Re1+ 4.Kf6 Rf1+ 5.Kg6 Rg1+
White cannot escape the checks!
\`\`\`

**Key Principles:**
1. **Rook on the 6th rank** - Cuts off the enemy king
2. **Wait until the pawn advances to the 6th** - Then go behind for checks
3. **Check from behind** - The king cannot escape AND protect the pawn

**Why It Works:**
- With the rook on the 6th, the enemy king can't advance
- Once the pawn reaches the 6th, the king must stay nearby
- Checks from behind have unlimited distance`,
          fen: '4k3/8/r3P3/4K3/8/8/6R1/8 b - - 0 1',
          arrows: [
            { from: 'a6', to: 'a1', color: 'green' },
            { from: 'a1', to: 'e1', color: 'blue' },
          ],
        },
        {
          title: 'Practical Rook Endgame Principles',
          content: `**General Principles:**

**1. Rooks Belong Behind Passed Pawns**
\`\`\`
Behind your own pawn: Supports its advance
Behind enemy's pawn: Stops it from queening
\`\`\`

**2. Cut Off the King**
\`\`\`
Use your rook to keep the enemy king away.
A rook on the 4th rank cutting off the king is decisive.
\`\`\`

**3. Active Rook > Passive Rook**
\`\`\`
A rook attacking pawns and giving checks beats
a rook stuck defending.
\`\`\`

**4. The 7th Rank is Deadly**
\`\`\`
A rook on the 7th attacks pawns and restricts the king.
Two rooks on the 7th (pig on the 7th) often wins.
\`\`\`

**5. King Activity Matters**
\`\`\`
In pure rook endings, the king should be active,
not hiding. Use it to support pawns and attack.
\`\`\`

**Checklist:**
- Where is my rook? (Active or passive?)
- Can I cut off the enemy king?
- Are my rooks behind passed pawns?
- Is my king participating?`,
          fen: '8/8/4k3/R7/4P3/8/r7/4K3 w - - 0 1',
          arrows: [
            { from: 'a5', to: 'a8', color: 'blue' },
            { from: 'a2', to: 'a1', color: 'red' },
          ],
        },
      ],
      keyConceptBoards: [
        {
          title: 'Lucena Position - Key Moment',
          fen: '8/5k2/8/8/4R3/8/r2P4/3K4 w - - 0 1',
          description: 'The Lucena "bridge" in action. The rook on e4 will block checks from the side (Rb4!) allowing the king to escape and the pawn to promote.',
          arrows: [
            { from: 'e4', to: 'b4', color: 'green' },
            { from: 'd1', to: 'c2', color: 'blue' },
          ],
        },
        {
          title: 'Philidor Defense - Correct Setup',
          fen: '4k3/8/r3P3/4K3/8/8/6R1/8 w - - 0 1',
          description: 'Black\'s rook on the 6th rank is the key to the Philidor Defense. If White plays Kd6, Black plays Ra1 and then checks from behind: Rd1+, Re1+, etc.',
          arrows: [
            { from: 'a6', to: 'e6', color: 'blue' },
            { from: 'a6', to: 'a1', color: 'green' },
          ],
        },
      ],
      quizQuestions: [
        {
          id: 'M4.5-Q1',
          question: 'What is the key technique in the Lucena position?',
          type: 'multiple_choice',
          options: ['Sacrificing the rook', 'Building a bridge with the rook to block checks', 'Trading rooks', 'Giving perpetual check'],
          correctAnswer: 'Building a bridge with the rook to block checks',
          explanation: 'The "bridge" technique uses the rook on the 4th rank to block side checks, allowing the king to escape and the pawn to promote.',
        },
        {
          id: 'M4.5-Q2',
          question: 'In the Philidor position, where should the defending rook initially be placed?',
          type: 'multiple_choice',
          options: ['Behind the enemy pawn', 'On the 6th rank, cutting off the king', 'Next to its own king', 'On the back rank'],
          correctAnswer: 'On the 6th rank, cutting off the king',
          explanation: 'The Philidor defense starts with the rook on the 6th rank, preventing the enemy king from advancing until the pawn reaches the 6th.',
        },
        {
          id: 'M4.5-Q3',
          question: 'In the Philidor defense, when should the rook go behind the pawn to give checks?',
          type: 'multiple_choice',
          options: ['Immediately', 'When the pawn reaches the 6th rank', 'Only if losing', 'Never'],
          correctAnswer: 'When the pawn reaches the 6th rank',
          explanation: 'Once the pawn reaches the 6th rank, the defending rook drops to the back rank and gives checks from behind, which the king cannot escape.',
        },
        {
          id: 'M4.5-Q4',
          question: 'Where do rooks generally belong in relation to passed pawns?',
          type: 'multiple_choice',
          options: ['In front of them', 'Behind them', 'On the same file, doesn\'t matter where', 'On a different file'],
          correctAnswer: 'Behind them',
          explanation: 'Rooks belong behind passed pawns - behind your own pawn to push it, or behind the enemy\'s pawn to stop it.',
        },
        {
          id: 'M4.5-Q5',
          question: 'Why is a rook on the 7th rank so powerful?',
          type: 'multiple_choice',
          options: ['It can promote immediately', 'It attacks pawns on their starting rank and restricts the king', 'It cannot be attacked', 'It protects all pieces'],
          correctAnswer: 'It attacks pawns on their starting rank and restricts the king',
          explanation: 'A rook on the 7th rank attacks pawns on their original squares and confines the enemy king to the back rank.',
        },
      ],
    },
  },
  {
    id: 'M4.6',
    level: 4,
    title: 'Game Analysis Methodology',
    description: 'Learn how to analyze your games to identify critical moments and improve.',
    order: 6,
    xpReward: 150,
    prerequisites: ['M4.5'],
    content: {
      overview: 'The fastest path to improvement is analyzing your own games. This lesson teaches a systematic approach to finding critical moments, understanding your mistakes, and creating actionable improvements. Strong players spend more time analyzing than playing.',
      sections: [
        {
          title: 'Why Analyze Your Games',
          content: `**The Learning Cycle:**
\`\`\`
Play → Analyze → Learn → Apply → Play better
\`\`\`

**Benefits of Analysis:**
1. Find your repeated mistakes
2. Discover missed opportunities
3. Understand your strengths and weaknesses
4. Build a personal database of patterns
5. Improve decision-making

**What to Analyze:**
- **Losses:** Where did it go wrong?
- **Draws:** Was there a win somewhere?
- **Wins:** Did you miss a faster win? Did opponent miss chances?

**The Rule:**
Spend at least as much time analyzing as you did playing. A 30-minute game deserves 30+ minutes of analysis.`,
          fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
        },
        {
          title: 'Finding Critical Moments',
          content: `**What is a Critical Moment?**
A point where the evaluation changed significantly or a key decision was made.

**Types of Critical Moments:**

**1. Turning Points**
\`\`\`
Where did the advantage shift?
What move caused the change?
\`\`\`

**2. Missed Tactics**
\`\`\`
Were there forcing sequences you didn't see?
Did you or your opponent miss a combination?
\`\`\`

**3. Strategic Decisions**
\`\`\`
Pawn structure changes
Piece trades
Choosing a plan
\`\`\`

**4. Time Trouble Decisions**
\`\`\`
Moves made under pressure
Quick decisions that deserved more thought
\`\`\`

**How to Find Them:**
- Use an engine to mark evaluation swings
- Look for move pairs where one side went from better to worse
- Note positions where you were uncertain`,
          fen: 'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
        },
        {
          title: 'The Analysis Process',
          content: `**Step 1: Replay Without Engine**
\`\`\`
Go through the game move by move
Write down your thoughts at key moments
Note where you were uncertain
This develops independent analysis skills
\`\`\`

**Step 2: Identify Your Decisions**
\`\`\`
For each move you made, ask:
- What was I trying to do?
- What alternatives did I consider?
- Was my reasoning correct?
\`\`\`

**Step 3: Use Engine Analysis**
\`\`\`
Turn on the engine
Find evaluation swings (≥0.5 pawn changes)
For each swing, understand WHY the engine prefers its move
\`\`\`

**Step 4: Categorize Mistakes**
\`\`\`
□ Tactics - Missed a combination
□ Strategy - Bad plan or positional understanding
□ Opening - Theoretical mistake or poor move choice
□ Endgame - Technical error
□ Time management - Rushed decision
\`\`\`

**Step 5: Create Action Items**
\`\`\`
"I need to work on X pattern"
"I should study Y opening line"
"I missed a Z tactical motif"
\`\`\``,
          fen: 'r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 w - - 0 8',
        },
        {
          title: 'Creating Your Improvement Plan',
          content: `**After Analysis, Ask:**

**1. Pattern Recognition**
\`\`\`
"What pattern did I miss?"
"Have I seen this motif before?"
Study tactical themes you keep missing
\`\`\`

**2. Knowledge Gaps**
\`\`\`
"Did I not know this opening line?"
"Was this endgame technique unfamiliar?"
Add specific topics to your study list
\`\`\`

**3. Thinking Process**
\`\`\`
"Did I consider all candidate moves?"
"Did I check my opponent's threats?"
Improve your thought process, not just knowledge
\`\`\`

**Building a Personal Database:**
\`\`\`
Keep a notebook/file of:
- Mistakes you make repeatedly
- Patterns you've learned
- Opening traps you've fallen into
- Endgame positions you need to know
\`\`\`

**Monthly Review:**
\`\`\`
Look at your mistake categories
Which type appears most often?
Focus your study on that area
\`\`\``,
          fen: 'r4rk1/pp2qppp/2n1pn2/8/3P4/2NBPN2/PP3PPP/R2Q1RK1 w - - 0 12',
        },
      ],
      keyConceptBoards: [
        {
          title: 'Finding the Critical Moment',
          fen: 'r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQ - 0 6',
          description: 'In this Italian Game position, the critical decision is coming. Should White castle, play d3, or try something aggressive? Mark this as a decision point.',
          highlights: [
            { square: 'e1', color: 'rgba(79, 152, 163, 0.3)' },
            { square: 'd2', color: 'rgba(232, 175, 52, 0.3)' },
          ],
        },
        {
          title: 'Evaluation Swing',
          fen: 'r1bqr1k1/ppp2ppp/2n2n2/3p4/1bPP4/2NBPN2/PP3PPP/R1BQ1RK1 w - d6 0 9',
          description: 'If White plays cxd5, the position is roughly equal. But a move like Qa4 might be better. Use the engine to find the best move and understand why.',
          arrows: [
            { from: 'c4', to: 'd5', color: 'orange' },
            { from: 'd1', to: 'a4', color: 'green' },
          ],
        },
      ],
      quizQuestions: [
        {
          id: 'M4.6-Q1',
          question: 'How much time should you spend analyzing a game?',
          type: 'multiple_choice',
          options: ['5 minutes maximum', 'At least as much time as you spent playing', 'Only if you lost', 'Only the opening'],
          correctAnswer: 'At least as much time as you spent playing',
          explanation: 'Effective analysis requires significant time. Spending at least as much time analyzing as playing ensures thorough learning.',
        },
        {
          id: 'M4.6-Q2',
          question: 'What is a "critical moment" in a game?',
          type: 'multiple_choice',
          options: ['The first move', 'A point where the evaluation changed significantly', 'The last move', 'Every move'],
          correctAnswer: 'A point where the evaluation changed significantly',
          explanation: 'Critical moments are turning points where the advantage shifted or important decisions were made.',
        },
        {
          id: 'M4.6-Q3',
          question: 'What should you do BEFORE using an engine to analyze?',
          type: 'multiple_choice',
          options: ['Nothing, use the engine immediately', 'Go through the game yourself and note your thoughts', 'Only look at the opening', 'Check your opponent\'s rating'],
          correctAnswer: 'Go through the game yourself and note your thoughts',
          explanation: 'Analyzing without the engine first develops independent thinking skills. Note your ideas before seeing what the computer says.',
        },
        {
          id: 'M4.6-Q4',
          question: 'What is the purpose of categorizing your mistakes?',
          type: 'multiple_choice',
          options: ['To feel bad about them', 'To identify patterns and focus your study on weak areas', 'To brag about them', 'It serves no purpose'],
          correctAnswer: 'To identify patterns and focus your study on weak areas',
          explanation: 'Categorizing mistakes reveals patterns - if you keep missing tactics, focus on tactics training. Data-driven improvement.',
        },
        {
          id: 'M4.6-Q5',
          question: 'Which games should you analyze?',
          type: 'multiple_choice',
          options: ['Only losses', 'Only wins', 'All games - wins, losses, and draws', 'Only tournament games'],
          correctAnswer: 'All games - wins, losses, and draws',
          explanation: 'Analyze all games. In losses, find mistakes. In wins, find missed opportunities. In draws, find where either side could have won.',
        },
      ],
    },
  },
];
