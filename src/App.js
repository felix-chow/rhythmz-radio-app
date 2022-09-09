import { Link, Route, Routes } from "react-router-dom";
import AboutRhythmzRadio from "./components/AboutRhythmzRadio";
import Home from "./components/Home";
import OnAirTalent from "./components/OnAirTalent";
import SongRequest from "./components/RequestASong";
// import TheTeam from "./components/TheTeam";

const App = () => {
  return (
    <>
      <div className="p-3">
        <nav className="d-flex justify-content-between mb-4">
          <span>
            <Link className="navbar-brand text-decoration-none" to="/">Rhythmz Radio</Link>
          </span>
          <div>
            <Link className="text-secondary me text-decoration-none" to="/about-rhythmz-radio">About Rhythmz Radio</Link>
            {/* <Link to="">The Team</Link> */}
            <Link className="text-secondary m-4 text-decoration-none" to="/on-air-talent">On-Air Talent</Link>
            <Link className="text-secondary text-decoration-none" to="/request">Song Request</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about-rhythmz-radio" exact element={<AboutRhythmzRadio />} />
          {/* <Route path="t/" element={<TheTeam />} /> */}
          <Route path="/on-air-talent" exact element={<OnAirTalent />} />
          <Route path="/request" exact element={<SongRequest />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
