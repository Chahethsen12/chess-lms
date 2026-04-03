import { AIMessage, AIContext } from './types.js';

/**
 * Local fallback when all AI providers fail.
 * Provides basic position evaluation and canned responses.
 */
export async function callLocal(messages: AIMessage[], context: AIContext): Promise<string> {
  const lastMessage = messages[messages.length - 1];
  const userQuery = lastMessage.content.toLowerCase();

  // If there's a FEN position, provide basic evaluation
  if (context.fen) {
    return generatePositionEvaluation(context.fen, context.elo);
  }

  // Provide canned responses for common queries
  if (userQuery.includes('help') || userQuery.includes('what can you')) {
    return `I'm your Chess Coach assistant. Currently operating in offline mode.

I can help you with:
- **Position analysis** - Share a FEN position and I'll give basic evaluation
- **Learning path** - Based on your ELO (${context.elo}), focus on ${getStudySuggestion(context.elo)}
- **General tips** - Ask about openings, tactics, or endgames

Note: Full AI coaching requires an active API connection. Check your settings to configure API keys.`;
  }

  if (userQuery.includes('opening') || userQuery.includes('start')) {
    return getOpeningAdvice(context.elo);
  }

  if (userQuery.includes('tactic') || userQuery.includes('puzzle')) {
    return getTacticsAdvice(context.elo);
  }

  if (userQuery.includes('endgame')) {
    return getEndgameAdvice(context.elo);
  }

  // Default response
  return `I'm currently in offline mode with limited capabilities.

Based on your ELO (${context.elo}), I recommend:
${getStudySuggestion(context.elo)}

For detailed coaching and analysis, please ensure your AI API keys are configured in Settings.`;
}

function generatePositionEvaluation(fen: string, elo: number): string {
  // Basic FEN parsing for material count
  const pieces = fen.split(' ')[0];
  const material = countMaterial(pieces);
  
  return `**Position Analysis** (Offline Mode)

FEN: \`${fen}\`

**Material Count:**
- White: ${material.white.total} points (Q:${material.white.queens}, R:${material.white.rooks}, B:${material.white.bishops}, N:${material.white.knights}, P:${material.white.pawns})
- Black: ${material.black.total} points (Q:${material.black.queens}, R:${material.black.rooks}, B:${material.black.bishops}, N:${material.black.knights}, P:${material.black.pawns})
- Balance: ${material.white.total > material.black.total ? 'White +' + (material.white.total - material.black.total) : material.black.total > material.white.total ? 'Black +' + (material.black.total - material.white.total) : 'Equal material'}

**General Advice for ELO ${elo}:**
${getPositionalAdvice(elo)}

*For deeper analysis with engine evaluation, please ensure API keys are configured.*`;
}

function countMaterial(position: string) {
  const white = { queens: 0, rooks: 0, bishops: 0, knights: 0, pawns: 0, total: 0 };
  const black = { queens: 0, rooks: 0, bishops: 0, knights: 0, pawns: 0, total: 0 };
  
  for (const char of position) {
    switch (char) {
      case 'Q': white.queens++; white.total += 9; break;
      case 'R': white.rooks++; white.total += 5; break;
      case 'B': white.bishops++; white.total += 3; break;
      case 'N': white.knights++; white.total += 3; break;
      case 'P': white.pawns++; white.total += 1; break;
      case 'q': black.queens++; black.total += 9; break;
      case 'r': black.rooks++; black.total += 5; break;
      case 'b': black.bishops++; black.total += 3; break;
      case 'n': black.knights++; black.total += 3; break;
      case 'p': black.pawns++; black.total += 1; break;
    }
  }
  
  return { white, black };
}

function getStudySuggestion(elo: number): string {
  if (elo < 400) return 'Basic checkmate patterns and piece movement';
  if (elo < 800) return 'Simple tactics (forks, pins) and opening principles';
  if (elo < 1200) return 'Tactical combinations and basic endgames';
  if (elo < 1600) return 'Positional play and deeper opening theory';
  return 'Complex strategy and advanced endgame technique';
}

function getOpeningAdvice(elo: number): string {
  if (elo < 800) {
    return `**Opening Advice for Beginners**

Focus on these principles rather than memorizing moves:
1. **Control the center** with pawns (e4, d4)
2. **Develop your pieces** - knights and bishops first
3. **Castle early** to protect your king
4. **Connect your rooks** by clearing the back rank

Recommended openings to learn:
- As White: Italian Game (1.e4 e5 2.Nf3 Nc6 3.Bc4)
- As Black: Mirror defense (1.e4 e5 2.Nf3 Nc6)`;
  }
  
  return `**Opening Study Guide**

At your level (ELO ${elo}), develop a small repertoire:

**As White:**
- 1.e4 players: Italian Game or Scotch Game
- 1.d4 players: London System or Queen's Gambit

**As Black:**
- Against 1.e4: Sicilian Defense or French Defense
- Against 1.d4: King's Indian or Nimzo-Indian

Focus on understanding the ideas behind the moves, not just memorizing sequences.`;
}

function getTacticsAdvice(elo: number): string {
  return `**Tactics Training Guide**

Puzzles are the fastest way to improve! At ELO ${elo}, focus on:

${elo < 800 ? `
- **Basic patterns**: Back rank mates, simple forks
- **One-move tactics**: Find the winning capture
- **King safety**: Spot when the king is vulnerable` : elo < 1200 ? `
- **Two-move combinations**: Fork + follow-up
- **Pins and skewers**: Exploiting piece alignment
- **Discovered attacks**: Using piece unveiling` : `
- **Complex combinations**: 3+ move sequences
- **Defensive tactics**: Finding only moves
- **Quiet moves**: Non-capturing winning moves`}

**Daily Practice**: Aim for 10-20 puzzles per day at your rating level.`;
}

function getEndgameAdvice(elo: number): string {
  return `**Endgame Study Guide**

Essential endgames to master at ELO ${elo}:

${elo < 800 ? `
1. **King + Queen vs King** - Basic checkmating technique
2. **King + Rook vs King** - The box method
3. **Basic pawn endgames** - King and pawn vs King` : elo < 1200 ? `
1. **Lucena Position** - Winning rook endgames
2. **Philidor Position** - Drawing rook endgames
3. **Opposition** - Key pawn endgame concept
4. **Square of the pawn** - Can the king catch it?` : `
1. **Complex rook endgames** - Active vs passive rook
2. **Bishop endgames** - Same vs opposite color
3. **Knight endgames** - Outpost usage
4. **Queen endgames** - Perpetual check defense`}

**Tip**: Study endgames with fewer pieces first, then add complexity.`;
}

function getPositionalAdvice(elo: number): string {
  if (elo < 800) {
    return `Look for:
- Undefended pieces (yours and opponent's)
- Forks (attacking two pieces at once)
- Checks that win material`;
  }
  if (elo < 1200) {
    return `Consider:
- Piece activity (are all pieces participating?)
- King safety (is either king exposed?)
- Pawn structure (any weaknesses?)`;
  }
  return `Evaluate:
- Pawn structure and weaknesses
- Piece coordination and activity
- King safety on both sides
- Long-term plans and pawn breaks`;
}
