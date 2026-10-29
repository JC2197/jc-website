import LandingPage from './LandingPage/LandingPage';
import ParticlesBackground from './ParticlesBackground';
import HeltowerPage from './LandingPage/ProjectsPage/components/HeltowerPage';
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return <BrowserRouter>
    <ParticlesBackground />
    <Routes>
      <Route path="/*" element={<LandingPage />} />
      <Route path="/heltower" element={
        <main className="center-column">
          <HeltowerPage />
          <Link to="/">Home</Link>
        </main>
      } />
      <Route path="/tools" element={
        <main className="center-column">
          <h1>Tools Showcase</h1>
          <Link to="/">Home</Link>
        </main>
      } />
      <Route
        path="*"
        element={
          <main>
            <h1>Page not found</h1>
            <Link to="/">Home</Link>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>;
}

export default App;