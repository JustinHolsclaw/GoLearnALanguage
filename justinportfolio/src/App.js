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
        <div className="row">
          <div className="col">
            <AboutMe />
          </div>
        </div>
        <br />
        <div className="row shadow p-3 mb-5 bg-white rounded">
            <HighLightedSkills />
        </div>
        <br />
        <div className="row">
        <div className="col"/>
          <div className="col">
            <button href="https://github.com/JustinHolsclaw" className="fa fa-github"></button>
          </div>
          <div className="col"/>
          <div className="col">
            <button href="https://www.linkedin.com/in/justin-holsclaw-79116419a/" className="fa fa-linkedin"></button>
          </div>
          <div className="col"/>
        </div>
        <br/>
      </div>
    </div>
  );
}

export default App;
