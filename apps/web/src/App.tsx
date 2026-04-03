import { Routes, Route } from 'react-router-dom';

// Placeholder pages - will be implemented later
const Landing = () => <div className="min-h-screen flex items-center justify-center"><h1 className="font-display text-4xl text-primary">Chess Mastery LMS</h1></div>;

function App() {
  return (
    <div className="min-h-screen bg-bg-dark text-white">
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
