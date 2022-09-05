import { Link, Route, Routes } from "react-router-dom";
import AboutRhythmzRadio from "./components/AboutRhythmzRadio";
import Home from "./components/Home";
import OnAirTalent from "./components/OnAirTalent";
import SongRequest from "./components/RequestASong";
// import TheTeam from "./components/TheTeam";

const App = () => {
  return (
    <>
      <div>
        <Link to="/">Rhythmz Radio</Link>
      </div>
      <div>
        <Link to="/about-rhythmz-radio">About Rhythmz Radio</Link>
        {/* <Link to="">The Team</Link> */}
        <Link to="/on-air-talent">On-Air Talent</Link>
        <Link to="/request">Song Request</Link>
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
