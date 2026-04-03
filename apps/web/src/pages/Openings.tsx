import { useState, useCallback } from 'react';
import { Search, BookOpen, Plus, ChevronRight } from 'lucide-react';
import { InteractiveBoard } from '../components/board/InteractiveBoard';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { api } from '../lib/api';

interface Opening {
  eco: string;
  name: string;
  pgn: string;
  winRate?: { white: number; draw: number; black: number };
}

export function Openings() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOpening, setSelectedOpening] = useState<Opening | null>(null);
  const [searchResults, setSearchResults] = useState<Opening[]>([]);
  const [currentFen, setCurrentFen] = useState('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = useCallback(async () => {
    if (!searchQuery.trim()) return;
    setIsSearching(true);
    try {
      const results = await api.openings.search(searchQuery);
      setSearchResults(results);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setIsSearching(false);
    }
  }, [searchQuery]);

  const selectOpening = (opening: Opening) => {
    setSelectedOpening(opening);
    // Parse PGN to get final position
    // This would use chess.js to replay moves
  };

  const addToRepertoire = async () => {
    if (!selectedOpening) return;
    try {
      await api.openings.addToRepertoire({
        eco: selectedOpening.eco,
        name: selectedOpening.name,
        pgn: selectedOpening.pgn,
      });
    } catch (error) {
      console.error('Failed to add to repertoire:', error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-3xl font-bold">Opening Explorer</h1>
          <p className="text-gray-400">Learn and build your opening repertoire</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Search and results */}
        <div className="lg:col-span-1 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-4 h-4" />
                Search Openings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. Sicilian, Italian..."
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
                <Button onClick={handleSearch} isLoading={isSearching}>
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results list */}
          <Card className="max-h-96 overflow-y-auto">
            <CardContent className="p-0">
              {searchResults.length === 0 ? (
                <div className="p-4 text-center text-gray-400">
                  Search for openings by name or ECO code
                </div>
              ) : (
                <ul className="divide-y divide-white/10">
                  {searchResults.map((opening) => (
                    <li key={opening.eco}>
                      <button
                        onClick={() => selectOpening(opening)}
                        className={`w-full p-3 text-left hover:bg-surface-hover flex items-center justify-between ${
                          selectedOpening?.eco === opening.eco ? 'bg-primary/20' : ''
                        }`}
                      >
                        <div>
                          <span className="font-mono text-xs text-primary mr-2">{opening.eco}</span>
                          <span>{opening.name}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Board and details */}
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardContent className="p-6">
              <InteractiveBoard
                fen={currentFen}
                orientation="white"
                allowMoves={false}
                boardWidth={400}
              />
            </CardContent>
          </Card>

          {selectedOpening && (
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <span className="font-mono text-sm text-primary">{selectedOpening.eco}</span>
                  <CardTitle>{selectedOpening.name}</CardTitle>
                </div>
                <Button onClick={addToRepertoire} variant="gold">
                  <Plus className="w-4 h-4 mr-2" />
                  Add to Repertoire
                </Button>
              </CardHeader>
              <CardContent>
                <div className="font-mono text-sm bg-bg-dark p-3 rounded">
                  {selectedOpening.pgn}
                </div>
                {selectedOpening.winRate && (
                  <div className="mt-4">
                    <div className="text-sm text-gray-400 mb-2">Win Rate</div>
                    <div className="flex h-4 rounded overflow-hidden">
                      <div 
                        className="bg-white" 
                        style={{ width: `${selectedOpening.winRate.white}%` }}
                        title={`White: ${selectedOpening.winRate.white}%`}
                      />
                      <div 
                        className="bg-gray-500" 
                        style={{ width: `${selectedOpening.winRate.draw}%` }}
                        title={`Draw: ${selectedOpening.winRate.draw}%`}
                      />
                      <div 
                        className="bg-gray-800" 
                        style={{ width: `${selectedOpening.winRate.black}%` }}
                        title={`Black: ${selectedOpening.winRate.black}%`}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>White {selectedOpening.winRate.white}%</span>
                      <span>Draw {selectedOpening.winRate.draw}%</span>
                      <span>Black {selectedOpening.winRate.black}%</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
