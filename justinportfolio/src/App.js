import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import HighLightedSkills from "./HighLightedSkills";
import Examples from "./Examples";

function App() {
  return (
    <div className="AppContainer">
      <NavBar />
      <br />
      <br />
      <div className="container">
        <div className="row bg-light opacity-50">
          <div className="col">
            <AboutMe />
          </div>
        </div>
        <br />
        <div className="row bg-light opacity-50">
          <div className="col">
            <HighLightedSkills />
          </div>
        </div>
        <br />
        <div className="row bg-light opacity-50">
          <div className="col">
            <Examples/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
