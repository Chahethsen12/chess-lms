import { Module } from './types.js';

export const level5Modules: Module[] = [
  {
    id: 'M5.1',
    level: 5,
    title: 'Dynamic vs Static Advantages',
    description: 'Master the art of evaluating and converting temporary and permanent advantages.',
    order: 1,
    xpReward: 150,
    prerequisites: [],
    content: {
      overview: 'Understanding the difference between dynamic (temporary) and static (permanent) advantages is crucial for advanced play. Dynamic advantages include piece activity, initiative, and attacking chances that must be converted quickly before they evaporate. Static advantages like better pawn structure, bishop pair, or control of key squares persist throughout the game. Learning when to convert dynamic advantages into static ones—and when to sacrifice static advantages for dynamic play—separates club players from advanced players.',
      sections: [
        {
          title: 'Understanding Dynamic Advantages',
          content: `**Dynamic advantages** are temporary and must be exploited immediately:

- **Lead in development**: If you have more pieces active, attack before your opponent catches up
- **Initiative**: The ability to make threats and force your opponent to react
- **King safety disparities**: When your king is safer, you can attack more freely
- **Temporary piece activity**: A knight on an outpost might be pushed away later

**Key principle**: Dynamic advantages have an expiration date. If you don't use them, you lose them.

The classic example is sacrificing material for a strong attack - you convert material (static) into activity and threats (dynamic).`,
          fen: 'r1bqkb1r/pppp1ppp/2n2n2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 4 4',
          arrows: [
            { from: 'h5', to: 'f7', color: 'rgba(255, 0, 0, 0.8)' },
            { from: 'c4', to: 'f7', color: 'rgba(255, 0, 0, 0.8)' }
          ],
        },
        {
          title: 'Understanding Static Advantages',
          content: `**Static advantages** persist throughout the game:

- **Better pawn structure**: Fewer weaknesses, better pawn islands
- **The bishop pair**: Two bishops typically dominate in open positions
- **Control of key files or diagonals**: Permanent pressure
- **Superior minor piece**: Knight vs bad bishop, or good bishop vs knight
- **Passed pawns**: Especially protected passed pawns

**Key principle**: Static advantages grow stronger in simplified positions. When you have static advantages, trade pieces!

The danger is becoming too passive trying to maintain static advantages while your opponent generates dynamic play.`,
          fen: '8/pp3ppp/4p3/8/8/4P3/PP3PPP/8 w - - 0 1',
          highlights: [
            { square: 'e6', color: 'rgba(255, 0, 0, 0.5)' },
            { square: 'e3', color: 'rgba(0, 255, 0, 0.5)' }
          ],
        },
        {
          title: 'Converting Between Advantage Types',
          content: `The highest art in chess is knowing when and how to convert advantages:

**Dynamic to Static conversions:**
- Sacrificing the exchange for a dominant knight outpost
- Accepting doubled pawns to open a file for attack, then using that file pressure to win material
- Trading your active pieces when you've won material

**Static to Dynamic conversions:**
- Sacrificing a pawn to open lines against the enemy king
- Giving up the bishop pair for a powerful attack
- Breaking your own pawn structure to activate pieces

**The evaluation balance**: Strong players constantly weigh: "Is my dynamic advantage worth more than what I'm giving up statically, and can I convert it in time?"`,
          fen: 'r4rk1/ppp2ppp/2n5/3N4/8/8/PPP2PPP/R3R1K1 w - - 0 1',
        },
        {
          title: 'Practical Decision Making',
          content: `When evaluating a position, ask yourself:

**For Dynamic Advantages:**
1. How long will this advantage last?
2. Can my opponent neutralize it with one or two moves?
3. What concrete action can I take right now?
4. Am I willing to sacrifice static elements for this?

**For Static Advantages:**
1. Will this advantage persist into the endgame?
2. Should I trade pieces to emphasize my static edge?
3. Is my opponent generating counterplay that outweighs my advantage?
4. Can I improve my position further before committing?

**The Clock Factor**: Time pressure affects dynamic play more than static. With little time, convert to static advantages when possible.`,
        },
      ],
      keyConceptBoards: [
        {
          title: 'Dynamic Advantage - Lead in Development',
          fen: 'r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5',
          description: 'White has faster development and an exposed Black king. This dynamic advantage must be converted quickly through aggressive play like 0-0 followed by d4 and Re1.',
          arrows: [
            { from: 'f3', to: 'e5', color: 'rgba(79, 152, 163, 0.8)' }
          ],
        },
        {
          title: 'Static Advantage - Superior Pawn Structure',
          fen: '8/5ppp/4p3/8/3P4/8/5PPP/8 w - - 0 1',
          description: 'White has a mobile pawn majority on the queenside and no weaknesses. Black\'s e6 pawn is backward and the f7-g7-h7 pawns cannot create a passed pawn. This advantage grows in the endgame.',
          highlights: [
            { square: 'd4', color: 'rgba(0, 255, 0, 0.5)' },
            { square: 'e6', color: 'rgba(255, 0, 0, 0.5)' }
          ],
        },
      ],
      quizQuestions: [
        {
          id: 'M5.1-Q1',
          question: 'Which of the following is a DYNAMIC advantage?',
          type: 'multiple_choice',
          options: ['Better pawn structure', 'The bishop pair', 'Lead in development', 'A passed pawn'],
          correctAnswer: 'Lead in development',
          explanation: 'Lead in development is temporary - if not exploited, your opponent will catch up. The other options are static advantages that persist.',
        },
        {
          id: 'M5.1-Q2',
          question: 'When you have a static advantage, what is generally the best strategy?',
          type: 'multiple_choice',
          options: ['Attack immediately', 'Trade pieces to simplify', 'Avoid all exchanges', 'Sacrifice material'],
          correctAnswer: 'Trade pieces to simplify',
          explanation: 'Static advantages grow stronger as pieces are traded. In simplified positions, permanent advantages like better pawn structure become decisive.',
        },
        {
          id: 'M5.1-Q3',
          question: 'What happens to dynamic advantages over time if not exploited?',
          type: 'multiple_choice',
          options: ['They grow stronger', 'They stay the same', 'They disappear', 'They become static'],
          correctAnswer: 'They disappear',
          explanation: 'Dynamic advantages are temporary by nature. If you don\'t use them, your opponent will neutralize them and they evaporate.',
        },
        {
          id: 'M5.1-Q4',
          question: 'Your opponent has a weak isolated pawn but more active pieces. What type of game should you aim for?',
          type: 'multiple_choice',
          options: ['Tactical complications', 'Piece exchanges heading to endgame', 'Keeping all pieces on board', 'Immediate attack'],
          correctAnswer: 'Piece exchanges heading to endgame',
          explanation: 'The isolated pawn is a static weakness that becomes more significant in the endgame. Trading pieces converts your static advantage into a winning endgame.',
        },
        {
          id: 'M5.1-Q5',
          question: 'In time trouble, which type of advantage is generally easier to maintain?',
          type: 'multiple_choice',
          options: ['Dynamic advantages', 'Static advantages', 'Both are equally difficult', 'Neither can be maintained'],
          correctAnswer: 'Static advantages',
          explanation: 'Static advantages require less precise calculation and concrete action. Dynamic advantages require accurate play and concrete decisions, which is harder under time pressure.',
        },
      ],
    },
  },
  {
    id: 'M5.2',
    level: 5,
    title: 'Prophylaxis and Preventive Thinking',
    description: 'Learn to anticipate and neutralize your opponent\'s plans before they materialize.',
    order: 2,
    xpReward: 175,
    prerequisites: ['M5.1'],
    content: {
      overview: 'Prophylaxis—from the Greek meaning "to guard against in advance"—is one of the most important concepts in positional chess. It involves anticipating your opponent\'s plans and taking preventive measures. Great players like Petrosian and Karpov built their styles around this principle. Rather than only pursuing your own ideas, prophylactic thinking asks: "What does my opponent want to do, and how can I prevent it?"',
      sections: [
        {
          title: 'The Philosophy of Prophylaxis',
          content: `**Prophylaxis** means taking action to prevent your opponent's plans:

1. **Identify threats**: What does your opponent want to do next?
2. **Evaluate urgency**: How dangerous is their plan?
3. **Prevent efficiently**: Stop their plan while improving your position

**Key insight**: The best prophylactic moves serve dual purposes—they prevent opponent's ideas while advancing your own agenda.

Tigran Petrosian, the "Iron Tigran," was the master of prophylaxis. He would often make moves that seemed passive but completely neutralized his opponent's play, leading to favorable positions through restriction rather than direct attack.`,
          fen: 'r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 w - - 0 7',
        },
        {
          title: 'Identifying Opponent Plans',
          content: `Before each move, ask yourself:

**Tactical threats:**
- Are any of my pieces attacked?
- Are there any forks, pins, or skewers threatened?
- Is my king safe?

**Strategic plans:**
- Where does my opponent want to put their pieces?
- Which pawn breaks are they preparing?
- What is their ideal setup?

**Piece improvements:**
- Which of their pieces is worst placed?
- Where does that piece want to go?
- Can I prevent that improvement?

**Example questions:**
- "They want to play ...d5, should I prevent it?"
- "Their knight wants to reach f4 via h5, can I control those squares?"
- "They're preparing a kingside attack with h5-h4, should I play h4 first?"`,
        },
        {
          title: 'Prophylactic Techniques',
          content: `**Common prophylactic methods:**

1. **Controlling key squares**: Place pieces or pawns to deny entry points
2. **Preventive pawn moves**: Stop pawn breaks before they happen (e.g., a4 to prevent ...b5)
3. **Piece placement**: Put pieces where they both attack and defend
4. **Trading dangerous pieces**: Eliminate your opponent's most active piece
5. **Overprotection**: Aron Nimzowitsch's concept—defend key points with more pieces than necessary

**The "do nothing" move**: Sometimes the best prophylaxis is a quiet move that improves your position while waiting to see what your opponent does.

**Restriction strategy**: Limit your opponent's options until they are forced into passive positions or unfavorable decisions.`,
          fen: 'r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2N1PN2/PP2BPPP/R1BQ1RK1 w - - 0 8',
          arrows: [
            { from: 'a2', to: 'a4', color: 'rgba(79, 152, 163, 0.8)' }
          ],
          highlights: [
            { square: 'b5', color: 'rgba(255, 0, 0, 0.5)' }
          ],
        },
        {
          title: 'Balancing Prophylaxis with Initiative',
          content: `**The danger of over-prophylaxis:**

- Too much prevention leads to passivity
- You cannot prevent everything—prioritize!
- Sometimes it's better to create your own threats

**Guidelines for balance:**
1. If you have the initiative, keep pressing—don't get defensive
2. If the position is balanced, prophylaxis can tip the scales
3. If you're under pressure, prophylaxis helps consolidate
4. If opponent's threat is concrete, address it; if vague, improve your position

**Practical tip**: Ask "If I ignore their plan and make my ideal move, what happens?" Often, your active play is more important than their potential threats.

**Master approach**: Combine prophylaxis with preparation for your own play. The best moves do both simultaneously.`,
        },
      ],
      keyConceptBoards: [
        {
          title: 'Classic Prophylaxis - Preventing ...b5',
          fen: 'r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2N1PN2/PP2BPPP/R1BQ1RK1 w - - 0 8',
          description: 'White plays a4! to prevent Black\'s ...b5 pawn break. This prophylactic move stops Black\'s queenside expansion while White prepares their own plans.',
          arrows: [
            { from: 'a2', to: 'a4', color: 'rgba(0, 255, 0, 0.8)' }
          ],
        },
        {
          title: 'Prophylactic King Move',
          fen: 'r4rk1/pp2bppp/2n1pn2/q1pp4/3P4/P1N1PN2/1PQ1BPPP/R1B2RK1 w - - 0 10',
          description: 'In many positions, Kh1 is a useful prophylactic move. It removes the king from potential Bb4+ discoveries, ...Ng4 attacks, and prepares Rg1 if needed.',
        },
      ],
      quizQuestions: [
        {
          id: 'M5.2-Q1',
          question: 'What is the essence of prophylactic thinking?',
          type: 'multiple_choice',
          options: ['Always attack first', 'Anticipate and prevent opponent plans', 'Defend all weaknesses', 'Trade all pieces'],
          correctAnswer: 'Anticipate and prevent opponent plans',
          explanation: 'Prophylaxis is about anticipating what your opponent wants to do and taking preventive measures before their plan can be executed.',
        },
        {
          id: 'M5.2-Q2',
          question: 'Which world champion was most famous for prophylactic play?',
          type: 'multiple_choice',
          options: ['Mikhail Tal', 'Tigran Petrosian', 'Bobby Fischer', 'Garry Kasparov'],
          correctAnswer: 'Tigran Petrosian',
          explanation: 'Petrosian, known as the "Iron Tigran," built his entire style around prophylaxis and restriction, winning the world championship in 1963.',
        },
        {
          id: 'M5.2-Q3',
          question: 'What is the danger of excessive prophylaxis?',
          type: 'multiple_choice',
          options: ['Losing material', 'Becoming too passive', 'Time trouble', 'Missing tactics'],
          correctAnswer: 'Becoming too passive',
          explanation: 'Over-focusing on prevention can lead to passive positions where you never create your own threats or initiative.',
        },
        {
          id: 'M5.2-Q4',
          question: 'What does Nimzowitsch\'s concept of "overprotection" mean?',
          type: 'multiple_choice',
          options: ['Protecting your king with extra pieces', 'Defending key points with more pieces than necessary', 'Never leaving pieces undefended', 'Using pawns to protect pieces'],
          correctAnswer: 'Defending key points with more pieces than necessary',
          explanation: 'Nimzowitsch advocated overprotecting important central points (like d5 or e4) because these squares often become focal points of the struggle.',
        },
        {
          id: 'M5.2-Q5',
          question: 'When should you prioritize your own plans over prophylaxis?',
          type: 'multiple_choice',
          options: ['When you have the initiative and concrete threats', 'When you are defending', 'When the position is equal', 'When you are in time trouble'],
          correctAnswer: 'When you have the initiative and concrete threats',
          explanation: 'When you have the initiative with concrete threats, pursuing your own attack is usually stronger than defensive prophylaxis.',
        },
      ],
    },
  },
  {
    id: 'M5.3',
    level: 5,
    title: 'Complex Endgames',
    description: 'Master bishop vs knight endings and queen endgames.',
    order: 3,
    xpReward: 200,
    prerequisites: ['M5.2'],
    content: {
      overview: 'While basic endgames involve single piece types, advanced play requires mastering complex piece interactions. Bishop versus knight endings are rich with strategic nuance—sometimes the bishop dominates, sometimes the knight. Queen endings, despite having only queens and pawns, are notoriously difficult due to perpetual check possibilities and the queen\'s versatility. Understanding these endgames separates club players from experts.',
      sections: [
        {
          title: 'Bishop vs Knight - When the Bishop Wins',
          content: `**The bishop excels when:**

1. **Open positions**: Pawns on both sides of the board favor the bishop's range
2. **Passed pawns far apart**: The bishop can monitor both while the knight struggles
3. **Fixed pawn structure**: Knight needs targets, bishop can outmaneuver
4. **No outpost squares**: Without stable squares, knights become passive

**Winning technique:**
- Use the bishop to restrict the knight
- Create passed pawns on opposite wings
- Force the knight into passivity
- King penetration while bishop controls key diagonals

**Key principle**: In bishop vs knight with pawns on both wings, the side with the bishop has an advantage equivalent to about half a pawn.`,
          fen: '8/8/4k3/p4p2/P4P2/4K3/B7/6n1 w - - 0 1',
          arrows: [
            { from: 'a2', to: 'g8', color: 'rgba(79, 152, 163, 0.8)' }
          ],
        },
        {
          title: 'Bishop vs Knight - When the Knight Wins',
          content: `**The knight excels when:**

1. **Closed positions**: Pawns block the bishop's diagonals
2. **Outpost squares**: Strong, permanent squares for the knight
3. **Fixed pawns on one color**: Bad bishop syndrome
4. **All pawns on one side**: Knight can reach everything

**Winning technique:**
- Establish the knight on an unassailable outpost
- Fix enemy pawns on the bishop's color
- Use the knight's unique movement to attack from angles the bishop cannot
- King activity combined with knight maneuvers

**Key principle**: A knight on a strong outpost, especially one supported by a pawn, can be worth more than a bishop.`,
          fen: '8/8/4k3/4n3/4P3/3BK3/8/8 w - - 0 1',
          highlights: [
            { square: 'e5', color: 'rgba(0, 255, 0, 0.5)' }
          ],
        },
        {
          title: 'Queen Endgames - Fundamentals',
          content: `**Queen endgames are deceptively complex:**

- Perpetual check is always a defensive resource
- The active king is crucial (unlike other endgames)
- Passed pawns are extremely dangerous with queen support
- Centralized queen positions are powerful

**Key techniques:**
1. **King safety**: Your king must find shelter from perpetual check
2. **Queen activity**: Centralize and look for multiple threats
3. **Passed pawn creation**: Connected passed pawns with queen support are often decisive
4. **Checking distance**: Stay close enough to give checks, far enough to avoid trades

**The 3rd/4th rank rule**: When defending, keep your queen on the 3rd or 4th rank to prevent the enemy pawn from advancing while keeping perpetual check options.`,
          fen: '8/8/2k5/2p5/8/8/5PP1/3Q2K1 w - - 0 1',
        },
        {
          title: 'Queen Endgames - Winning Techniques',
          content: `**Converting advantages in queen endings:**

1. **Advancing passed pawns**: Shield your king, then advance
2. **Creating mating threats**: Use checks to gain tempi
3. **Trading into won pawn endings**: Only when clearly winning
4. **The "pendulum" technique**: Swing the queen between threats

**Defensive resources:**
- Perpetual check from the side
- Fortress positions (rare but possible)
- Counter-threats against the enemy king

**Practical advice:**
- Calculate perpetual check possibilities before every pawn move
- Keep your king near friendly pawns for shelter
- Don't allow your opponent's king to find a safe haven
- Be patient—queen endings often require many moves`,
          fen: '8/6pk/6np/Q7/8/5q2/5PP1/6K1 w - - 0 1',
          arrows: [
            { from: 'a5', to: 'e5', color: 'rgba(79, 152, 163, 0.8)' },
            { from: 'e5', to: 'e1', color: 'rgba(79, 152, 163, 0.8)' }
          ],
        },
      ],
      keyConceptBoards: [
        {
          title: 'Bishop Dominates Knight - Open Position',
          fen: '8/p4k2/1p6/8/1P2B3/P7/5K2/5n2 w - - 0 1',
          description: 'With pawns on both wings, the bishop dominates. It can control the knight while supporting both passed pawns, while the knight cannot effectively cover both flanks.',
          arrows: [
            { from: 'e4', to: 'a8', color: 'rgba(0, 255, 0, 0.8)' },
            { from: 'e4', to: 'h1', color: 'rgba(0, 255, 0, 0.8)' }
          ],
        },
        {
          title: 'Knight Outpost - Dominating Position',
          fen: '8/5k2/3b4/3Np3/4P3/5K2/8/8 w - - 0 1',
          description: 'The knight on d5 is untouchable and dominates the position. The bishop is restricted by the e4-e5 pawn chain and cannot challenge the knight\'s control.',
          highlights: [
            { square: 'd5', color: 'rgba(0, 255, 0, 0.5)' }
          ],
        },
      ],
      quizQuestions: [
        {
          id: 'M5.3-Q1',
          question: 'In bishop vs knight endings, when does the bishop typically have an advantage?',
          type: 'multiple_choice',
          options: ['Closed positions with blocked pawns', 'Open positions with pawns on both wings', 'When there is a knight outpost', 'When all pawns are on one side'],
          correctAnswer: 'Open positions with pawns on both wings',
          explanation: 'The bishop\'s long-range ability shines in open positions with pawns on both wings, where it can influence both flanks while the knight struggles to cover the distance.',
        },
        {
          id: 'M5.3-Q2',
          question: 'What is the main defensive resource in queen endgames?',
          type: 'multiple_choice',
          options: ['Trading queens', 'Perpetual check', 'Creating a passed pawn', 'King activity'],
          correctAnswer: 'Perpetual check',
          explanation: 'The queen\'s mobility makes perpetual check the primary defensive resource in queen endings. Many "winning" positions are actually draws due to perpetual check.',
        },
        {
          id: 'M5.3-Q3',
          question: 'What creates a "bad bishop" in bishop vs knight endings?',
          type: 'multiple_choice',
          options: ['Pawns on both colors', 'Pawns fixed on the same color as the bishop', 'Too many pawns on the board', 'An active knight'],
          correctAnswer: 'Pawns fixed on the same color as the bishop',
          explanation: 'When your pawns are fixed on the same color squares as your bishop, the bishop is restricted by its own pawns and becomes "bad."',
        },
        {
          id: 'M5.3-Q4',
          question: 'In queen endings, what is the "3rd/4th rank rule" used for?',
          type: 'multiple_choice',
          options: ['Attacking the enemy king', 'Blocking passed pawns while maintaining perpetual options', 'Protecting your own pawns', 'Creating checkmate threats'],
          correctAnswer: 'Blocking passed pawns while maintaining perpetual options',
          explanation: 'When defending, placing your queen on the 3rd or 4th rank blocks the enemy passed pawn\'s advance while keeping your queen active for potential perpetual check.',
        },
        {
          id: 'M5.3-Q5',
          question: 'What type of position favors a knight over a bishop?',
          type: 'multiple_choice',
          options: ['Open position with distant passed pawns', 'Closed position with a strong outpost', 'Position with bishops of opposite colors', 'Endgame with only kingside pawns spread across colors'],
          correctAnswer: 'Closed position with a strong outpost',
          explanation: 'Knights thrive in closed positions where bishops are blocked by pawns, especially when the knight has a secure outpost square.',
        },
      ],
    },
  },
  {
    id: 'M5.4',
    level: 5,
    title: 'Positional Sacrifices',
    description: 'Learn the art of exchange sacrifices and pawn sacrifices for long-term compensation.',
    order: 4,
    xpReward: 200,
    prerequisites: ['M5.3'],
    content: {
      overview: 'Unlike tactical sacrifices that win material back immediately, positional sacrifices offer long-term compensation—dominating pieces, structural advantages, or lasting initiative. The exchange sacrifice (giving up a rook for a minor piece) and pawn sacrifices for activity are powerful weapons in advanced play. Petrosian and Kasparov were masters of the exchange sacrifice; the best players often sacrifice material for positional gains that may take 20 moves to convert.',
      sections: [
        {
          title: 'The Exchange Sacrifice',
          content: `**Exchange sacrifice = giving up a rook for a bishop or knight**

Worth approximately 2 pawns in material, but positional compensation can far exceed this.

**When to sacrifice the exchange:**
- To destroy opponent's pawn structure
- To eliminate a powerful piece (especially a fianchettoed bishop)
- To create an unassailable knight outpost
- To maintain or create an attack
- To activate your remaining pieces

**Key positions for exchange sacrifice:**
- Rxc3 sacrifices to destroy a pawn structure
- Rxd5 sacrifices to eliminate a central piece
- Rxf6 sacrifices to weaken the kingside

**Petrosian's approach**: He would sacrifice the exchange for positional reasons that weren't immediately obvious, gaining control of colors, squares, and initiative.`,
          fen: 'r1b2rk1/pp2bppp/2p1pn2/3n4/2BP4/5NP1/PP2PPBP/R1R3K1 w - - 0 12',
          arrows: [
            { from: 'c1', to: 'c6', color: 'rgba(255, 0, 0, 0.8)' }
          ],
        },
        {
          title: 'Evaluating Exchange Sacrifice Compensation',
          content: `**Compensation checklist:**

1. **Piece superiority**: Is my remaining minor piece better than their extra rook?
2. **Pawn structure**: Have I created weaknesses or passed pawns?
3. **King safety**: Is their king more exposed?
4. **Piece coordination**: Do my pieces work better together?
5. **Practical chances**: Will my opponent struggle to convert the extra exchange?

**Concrete advantages to seek:**
- Knight on d5 or e5 (or c5) that cannot be challenged
- Complete control of a color complex
- Passed pawn(s) that tie down the rook
- Attack against exposed king

**Warning signs** (don't sacrifice if):
- Opponent can easily trade pieces
- No clear plan after the sacrifice
- Your pieces become passive
- The rook will dominate open files`,
        },
        {
          title: 'Pawn Sacrifices for Initiative',
          content: `**The "positional pawn sacrifice"** differs from gambits:

Gambits offer immediate compensation; positional sacrifices offer long-term structural or dynamic benefits.

**Types of pawn sacrifices:**
1. **Development sacrifice**: Giving a pawn to complete development faster
2. **Central sacrifice**: d4-d5 or e4-e5 breaking sacrifices
3. **Wing sacrifice**: a4/h4 to open files for attack
4. **Blockade-breaking**: Sacrificing to unlock a position

**Evaluation criteria:**
- **Initiative**: How many moves of pressure do I get?
- **Structural damage**: What weaknesses are created?
- **Piece activity**: How much do my pieces improve?
- **Recovery options**: Can opponent return material to stabilize?

**Classic example**: The Benko Gambit gives up a pawn for lasting queenside pressure and piece activity.`,
          fen: 'rnbqkb1r/pp1p1ppp/4pn2/2pP4/2P5/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 5',
          arrows: [
            { from: 'd5', to: 'e6', color: 'rgba(255, 170, 0, 0.8)' }
          ],
        },
        {
          title: 'Practical Application',
          content: `**Before making a positional sacrifice, verify:**

1. **Concrete calculation**: Look at least 3-5 moves deep
2. **No immediate refutation**: Ensure opponent can't return material favorably
3. **Clear follow-up**: Have a plan, not just hope
4. **Practical considerations**: Clock, opponent's style, tournament situation

**Psychological factors:**
- Positional sacrifices are harder to defend against than tactical ones
- Opponents often don't understand the compensation
- Material advantage can be a psychological burden!

**Training method:**
- Study games of Petrosian and Kasparov
- Look for exchange sacrifices in your own games
- Ask: "Would a sacrifice work here?" even when you don't see one
- Practice evaluating positions with material imbalances`,
          fen: 'r1bqr1k1/pp1n1ppp/2pb1n2/3p4/2PP4/2N1PN2/PPQ1BPPP/R1B2RK1 w - - 0 10',
        },
      ],
      keyConceptBoards: [
        {
          title: 'Classic Exchange Sacrifice Position',
          fen: 'r1b2rk1/pp2qppp/2n1pn2/2bp4/8/1BN1PN2/PPP1QPPP/R1BR2K1 w - - 0 11',
          description: 'Rxc6! destroys Black\'s structure and gives White a powerful central initiative. The bishop pair and weak black pawns provide full compensation for the exchange.',
          arrows: [
            { from: 'd1', to: 'c6', color: 'rgba(255, 0, 0, 0.8)' }
          ],
        },
        {
          title: 'Pawn Sacrifice for Central Control',
          fen: 'rnbqkb1r/pp3ppp/4pn2/3pP3/3P4/2N5/PP3PPP/R1BQKBNR w KQkq - 0 6',
          description: 'After e5-e6, White sacrifices a pawn to destroy Black\'s pawn structure. The resulting isolated d-pawn and active piece play offer long-term compensation.',
          arrows: [
            { from: 'e5', to: 'e6', color: 'rgba(255, 170, 0, 0.8)' }
          ],
        },
      ],
      quizQuestions: [
        {
          id: 'M5.4-Q1',
          question: 'What is an exchange sacrifice?',
          type: 'multiple_choice',
          options: ['Trading queens', 'Giving up a rook for a minor piece', 'Sacrificing a pawn for development', 'Trading bishops for knights'],
          correctAnswer: 'Giving up a rook for a minor piece',
          explanation: 'An exchange sacrifice is giving up a rook (worth 5 points) for a bishop or knight (worth 3 points), losing approximately 2 points of material for positional compensation.',
        },
        {
          id: 'M5.4-Q2',
          question: 'Which former World Champion was most famous for exchange sacrifices?',
          type: 'multiple_choice',
          options: ['Bobby Fischer', 'Tigran Petrosian', 'Mikhail Tal', 'Emanuel Lasker'],
          correctAnswer: 'Tigran Petrosian',
          explanation: 'Petrosian was renowned for his exchange sacrifices, often giving up material for positional factors that weren\'t immediately apparent to his opponents.',
        },
        {
          id: 'M5.4-Q3',
          question: 'What is the difference between a gambit and a positional pawn sacrifice?',
          type: 'multiple_choice',
          options: ['Gambits are in the opening; positional sacrifices are not', 'Gambits offer immediate compensation; positional sacrifices offer long-term compensation', 'There is no difference', 'Gambits always win back the pawn'],
          correctAnswer: 'Gambits offer immediate compensation; positional sacrifices offer long-term compensation',
          explanation: 'Gambits offer immediate developmental or tactical compensation, while positional sacrifices offer long-term structural or strategic advantages that may take many moves to realize.',
        },
        {
          id: 'M5.4-Q4',
          question: 'What should you NOT do after an exchange sacrifice?',
          type: 'multiple_choice',
          options: ['Centralize your pieces', 'Trade more pieces', 'Press with your initiative', 'Create passed pawns'],
          correctAnswer: 'Trade more pieces',
          explanation: 'After sacrificing material, you generally want to keep pieces on to maximize your positional compensation. Trading pieces helps the defender simplify to a winning endgame.',
        },
        {
          id: 'M5.4-Q5',
          question: 'When evaluating a potential exchange sacrifice, which factor is LEAST important?',
          type: 'multiple_choice',
          options: ['Piece activity after the sacrifice', 'The exact material count', 'King safety considerations', 'Pawn structure damage inflicted'],
          correctAnswer: 'The exact material count',
          explanation: 'While material matters, the whole point of positional sacrifices is that other factors—activity, structure, king safety—can outweigh pure material considerations.',
        },
      ],
    },
  },
  {
    id: 'M5.5',
    level: 5,
    title: 'Opening Preparation and Transpositions',
    description: 'Develop a systematic approach to openings and understand move order nuances.',
    order: 5,
    xpReward: 175,
    prerequisites: ['M5.4'],
    content: {
      overview: 'At the advanced club level, opening preparation becomes crucial. You must build a coherent repertoire, understand transpositions between openings, and know when move order matters. This module covers how to select and study openings, prepare for specific opponents, and use transpositions to reach favorable positions while avoiding your opponent\'s preparation.',
      sections: [
        {
          title: 'Building an Opening Repertoire',
          content: `**A complete repertoire needs:**

**As White:**
- A main weapon after 1.e4 or 1.d4
- Responses to all major Black defenses
- A backup option for critical games

**As Black:**
- Response to 1.e4 (e.g., Sicilian, French, Caro-Kann, 1...e5)
- Response to 1.d4 (e.g., Nimzo-Indian, King's Indian, QGD, Slav)
- Responses to 1.c4, 1.Nf3, and other moves

**Repertoire guidelines:**
1. **Coherence**: Choose openings that fit your style
2. **Depth over breadth**: Know 2-3 openings deeply vs 10 superficially
3. **Practical coverage**: Ensure you have answers to main lines AND sidelines
4. **Updateable**: Choose openings with active theory so you can find new ideas`,
          fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1',
        },
        {
          title: 'Understanding Transpositions',
          content: `**Transposition** = reaching the same position via different move orders.

**Why transpositions matter:**
- Avoid opponent's preparation
- Reach your preferred setup
- Sidestep unfavorable variations
- Confuse opponents about your intentions

**Common transposition examples:**
- 1.d4 Nf6 2.c4 e6 3.Nc3 Bb4 (Nimzo) can arise from 1.c4 Nf6 2.Nc3 e6 3.d4 Bb4
- 1.e4 e5 2.Nf3 Nc6 3.Bc4 is identical to 1.e4 e5 2.Bc4 Nc6 3.Nf3
- English Opening can transpose to QGD, Catalan, or symmetrical structures

**Using transpositions strategically:**
- Play 1.Nf3 to see Black's setup before committing to d4 or c4
- Against 1.d4, play 1...d5 keeping options for QGD, Slav, or Semi-Slav`,
          fen: 'rnbqkb1r/pppp1ppp/4pn2/8/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq - 2 3',
        },
        {
          title: 'Move Order Nuances',
          content: `**Move order can determine:**
- Which variations are possible
- Who gets their preferred setup
- Tactical opportunities specific to one order

**Examples of move order importance:**

**English vs QGD**: 
1.c4 e6 2.Nc3 d5 3.d4 reaches QGD with White's knight on c3 (not always wanted)
vs 1.d4 d5 2.c4 e6 3.Nf3 allows Nf3 systems

**Sicilian move orders**:
1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 (Main line)
vs 1.e4 c5 2.Nf3 Nc6 (allows different White options)

**The Maroczy Bind**: 
Specific move orders determine if White can achieve c4+e4 control

**Practical tip**: When studying openings, pay close attention to "order of moves" notes—they often contain critical information.`,
          fen: 'r1bqkb1r/pp1ppppp/2n2n2/2p5/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 2 4',
        },
        {
          title: 'Preparation Methods',
          content: `**How to prepare openings:**

1. **Choose your lines**: Based on your style and repertoire needs
2. **Study main games**: Classics and recent GM games in the line
3. **Understand the plans**: Know the typical middlegame ideas, not just moves
4. **Learn critical positions**: Key tabiya positions and their evaluations
5. **Prepare novelties**: Find improvements or new ideas in known positions
6. **Practice practically**: Play the opening in online games

**Database work:**
- Use ChessBase, Lichess studies, or similar tools
- Filter for high-level games (2400+)
- Check engine evaluations of critical positions
- Note typical errors and how to punish them

**Opponent preparation:**
- Study their recent games
- Identify their repertoire and weak spots
- Prepare specific lines against their pet openings
- Have a surprise weapon ready`,
        },
      ],
      keyConceptBoards: [
        {
          title: 'Transposition Hub - English/QGD',
          fen: 'rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 4',
          description: 'This position can arise from 1.d4 d5 2.c4 e6 3.Nc3 Nf6 4.? or 1.c4 e6 2.Nc3 d5 3.d4 Nf6. White\'s next move determines the character: Bg5 (QGD main), Nf3 (flexible), or cxd5 (Exchange).',
        },
        {
          title: 'Sicilian Move Order Choice',
          fen: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2',
          description: 'Black must choose: 2...d6 (Najdorf/Dragon direction), 2...Nc6 (Classical/Sveshnikov), 2...e6 (Paulsen/Kan/Taimanov). Each leads to fundamentally different positions.',
        },
      ],
      quizQuestions: [
        {
          id: 'M5.5-Q1',
          question: 'What is a transposition in chess?',
          type: 'multiple_choice',
          options: ['A type of sacrifice', 'Reaching the same position through different move orders', 'Changing your opening repertoire', 'A pawn structure transformation'],
          correctAnswer: 'Reaching the same position through different move orders',
          explanation: 'A transposition occurs when the same position is reached via different sequences of moves. This is an important concept for repertoire building.',
        },
        {
          id: 'M5.5-Q2',
          question: 'Why might White play 1.Nf3 instead of 1.d4?',
          type: 'multiple_choice',
          options: ['It is objectively stronger', 'To see Black\'s setup before committing to a pawn structure', 'To avoid the Sicilian', 'Knights should be developed before pawns'],
          correctAnswer: 'To see Black\'s setup before committing to a pawn structure',
          explanation: 'Playing 1.Nf3 is a flexible choice that allows White to see Black\'s intentions (1...d5, 1...Nf6, 1...c5) before deciding between d4, c4, or other setups.',
        },
        {
          id: 'M5.5-Q3',
          question: 'How many main openings should you know deeply according to the lesson?',
          type: 'multiple_choice',
          options: ['As many as possible', '2-3 openings deeply', 'Only 1 for each color', '10 or more for variety'],
          correctAnswer: '2-3 openings deeply',
          explanation: 'Depth over breadth is emphasized—knowing 2-3 openings deeply is more valuable than superficial knowledge of many openings.',
        },
        {
          id: 'M5.5-Q4',
          question: 'When preparing for a specific opponent, what is most valuable to study?',
          type: 'multiple_choice',
          options: ['Only their wins', 'Their most recent games regardless of result', 'Only master-level games', 'Games from many years ago'],
          correctAnswer: 'Their most recent games regardless of result',
          explanation: 'Recent games show their current repertoire and form. Studying all results (wins, losses, draws) reveals both their strengths and weaknesses.',
        },
        {
          id: 'M5.5-Q5',
          question: 'What should a complete Black repertoire include?',
          type: 'multiple_choice',
          options: ['Only responses to 1.e4 and 1.d4', 'Responses to 1.e4, 1.d4, 1.c4, 1.Nf3 and other moves', 'Just one universal defense', 'Different openings for each day of the week'],
          correctAnswer: 'Responses to 1.e4, 1.d4, 1.c4, 1.Nf3 and other moves',
          explanation: 'A complete repertoire needs coverage against all of White\'s reasonable first moves, not just the two most popular ones.',
        },
      ],
    },
  },
  {
    id: 'M5.6',
    level: 5,
    title: 'Time Management and Tournament Psychology',
    description: 'Master the mental aspects of competitive chess and clock handling.',
    order: 6,
    xpReward: 175,
    prerequisites: ['M5.5'],
    content: {
      overview: 'Chess is not purely a battle of skill—it\'s also a test of psychological resilience and time management. At the advanced club level, you\'ll face opponents who may be technically equal; the difference often comes down to who handles pressure better. This module covers practical time management, dealing with nerves, and developing the psychological edge that separates good players from successful competitors.',
      sections: [
        {
          title: 'Time Management Fundamentals',
          content: `**Time is a resource** just like material and position:

**Typical time control phases:**
1. **Opening** (first 10-15 moves): Spend minimal time on known theory
2. **Critical moments**: Invest time when decisions have long-term consequences  
3. **Time trouble**: Keep enough reserve for the final phase

**Time allocation guidelines (90+30 format):**
- Opening: ~15 minutes (ideally less if well-prepared)
- Middlegame critical positions: ~5-10 minutes per decision
- Technique phase: ~30 minutes reserve
- Always aim to reach move 40 with 15+ minutes

**Danger signals:**
- Using more than 20 minutes on a single move (rarely justified)
- Having less time than your opponent consistently
- Rushing moves in complex positions`,
          fen: 'r1bqkbnr/pppppppp/2n5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 1 2',
        },
        {
          title: 'Using Your Time Wisely',
          content: `**When to think long:**
- Positions where one decision shapes the game
- When you have a forced sequence to calculate
- At crossroads between strategic plans
- When opponent has made a surprising move

**When to move quickly:**
- Theoretical positions you've studied
- Forced moves or recaptures
- Simple improving moves in stable positions
- When low on time with simple position

**Practical techniques:**
1. **Candidate moves method**: Identify 2-4 candidate moves first, then analyze
2. **Progressive deepening**: Don't calculate one line to depth 15, analyze several to depth 5
3. **Stop when you've decided**: Don't second-guess after making a decision
4. **Physical clock discipline**: Press the clock firmly, note your time periodically`,
        },
        {
          title: 'Handling Pressure',
          content: `**Pre-game preparation:**
- Establish a routine (food, sleep, warm-up)
- Arrive early, settle in calmly
- Review your opening preparation briefly
- Don't analyze positions deeply right before playing

**During the game:**
- Focus on the position, not the opponent or result
- After a mistake, take a breath and reset
- Don't calculate when opponent is thinking—rest your mind
- Walk away from the board periodically if needed

**Managing emotions:**
- **After a bad move**: Acknowledge it, then find the best move NOW
- **When winning**: Play solid, don't get overconfident
- **When losing**: Fight for every half-point; swindles happen
- **When time is low**: Rely on pattern recognition, simplify

**The "bubble"**: Create mental separation from distractions—other games, spectators, noise.`,
        },
        {
          title: 'Tournament Psychology',
          content: `**Rating and opponent psychology:**
- Higher-rated opponent: Play your game, make them prove their rating
- Lower-rated opponent: Respect their ability to beat you today
- Same rating: Treat it as any other game

**Energy management across a tournament:**
- Long events require pacing yourself
- Quick draws in bad positions preserve energy
- Don't analyze immediately after games (rest first)
- Sleep and nutrition affect play significantly

**Practical mindset tips:**
1. **Process over outcome**: Focus on playing good moves, not winning
2. **One game at a time**: Don't think about standings during games
3. **Embrace fighting chess**: The effort to win helps even in losses
4. **Learn from every game**: Every result teaches something

**Post-game routine:**
- Don't analyze with opponent when emotional
- Note key moments for later review
- Prepare for next game, then rest
- Keep perspective—it's one game of thousands you'll play`,
        },
      ],
      keyConceptBoards: [
        {
          title: 'Critical Decision Point',
          fen: 'r1b2rk1/pp2nppp/2n1p3/q1ppP3/3P4/P1P2N2/2Q1BPPP/R1B1K2R w KQ - 0 12',
          description: 'This is a position worth spending significant time on. White must decide between several plans: dxc5, castling, Bg5, or a4. The choice shapes the next 15+ moves. Worth 5-10 minutes.',
        },
        {
          title: 'Quick Decision Position',
          fen: 'r4rk1/ppp2ppp/2n5/3q4/8/2N5/PPP2PPP/R2QR1K1 w - - 0 15',
          description: 'After trading queens, Black has a straightforward recapture. Don\'t overthink simple positions—make the obvious move and save time for critical moments.',
        },
      ],
      quizQuestions: [
        {
          id: 'M5.6-Q1',
          question: 'In a 90+30 time control, how much time should you aim to have at move 40?',
          type: 'multiple_choice',
          options: ['0 minutes (use it all)', '5 minutes', '15 minutes or more', '60 minutes'],
          correctAnswer: '15 minutes or more',
          explanation: 'Having 15+ minutes at move 40 gives you a safe buffer for the final phase and prevents time trouble during critical decisions.',
        },
        {
          id: 'M5.6-Q2',
          question: 'When should you spend the most time on a move?',
          type: 'multiple_choice',
          options: ['During the opening', 'On every move equally', 'At critical positions that shape the game', 'During the endgame'],
          correctAnswer: 'At critical positions that shape the game',
          explanation: 'Critical moments where your decision determines the direction of the game deserve the most time investment. Opening moves from theory and simple positions need less time.',
        },
        {
          id: 'M5.6-Q3',
          question: 'After making a mistake, what is the best psychological approach?',
          type: 'multiple_choice',
          options: ['Immediately try to win back what you lost', 'Resign to save energy', 'Acknowledge it, then find the best move now', 'Offer a draw'],
          correctAnswer: 'Acknowledge it, then find the best move now',
          explanation: 'Dwelling on mistakes leads to more mistakes. Accept it happened, then focus fully on finding the best continuation in the current position.',
        },
        {
          id: 'M5.6-Q4',
          question: 'What should you do while your opponent is thinking?',
          type: 'multiple_choice',
          options: ['Calculate your next moves deeply', 'Rest your mind', 'Analyze other games in the hall', 'Write notes about the position'],
          correctAnswer: 'Rest your mind',
          explanation: 'Constantly calculating exhausts you. It\'s better to rest while your opponent thinks, then think freshly when they make their move.',
        },
        {
          id: 'M5.6-Q5',
          question: 'How should you approach a game against a much higher-rated opponent?',
          type: 'multiple_choice',
          options: ['Play for a quick draw', 'Play your normal game and make them prove their rating', 'Try unusual openings to confuse them', 'Play ultra-defensively'],
          correctAnswer: 'Play your normal game and make them prove their rating',
          explanation: 'Playing your normal game is best. Unusual approaches often backfire, and higher-rated players are people too—they can have bad days and make mistakes.',
        },
      ],
    },
  },
];
