import { Children, isValidElement, cloneElement, ReactNode } from 'react';
import { clsx } from 'clsx';

interface ChessNotationProps {
  children: ReactNode;
}

// Regex to match chess notation
const NOTATION_REGEX = /\b([KQRBN]?[a-h]?[1-8]?x?[a-h][1-8](?:=[QRBN])?[+#]?|O-O-O|O-O|0-0-0|0-0)\b/g;

function parseNotation(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = NOTATION_REGEX.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    
    // Add the notation chip
    const notation = match[0];
    parts.push(
      <span
        key={match.index}
        className={clsx(
          'inline-flex items-center px-1.5 py-0.5 mx-0.5 rounded text-sm font-mono',
          'bg-primary/20 text-primary border border-primary/30'
        )}
      >
        {notation}
      </span>
    );
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  
  return parts;
}

function processNode(node: ReactNode): ReactNode {
  if (typeof node === 'string') {
    return parseNotation(node);
  }
  
  if (isValidElement(node) && node.props.children) {
    return cloneElement(node, {
      ...node.props,
      children: Children.map(node.props.children, processNode),
    });
  }
  
  return node;
}

export function ChessNotation({ children }: ChessNotationProps) {
  return <>{Children.map(children, processNode)}</>;
}
