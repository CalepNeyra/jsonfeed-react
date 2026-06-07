import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Entities from "./pages/Entities";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <nav className="p-4 bg-slate-900 text-white flex gap-6 justify-center shadow-md">
          <Link to="/" className="hover:text-blue-400 font-bold transition-colors">Home</Link>
          <Link to="/entities" className="hover:text-blue-400 font-bold transition-colors">Entities</Link>
          <Link to="/contact" className="hover:text-blue-400 font-bold transition-colors">Contact</Link>
        </nav>
        <main className="p-8 max-w-5xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/entities" element={<Entities />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}