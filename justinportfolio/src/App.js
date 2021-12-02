import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import HighLightedSkills from "./HighLightedSkills";

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
        <div className="row bg-white rounded d-flex justify-content-center">
            <HighLightedSkills />
        </div>
        <br />
        <div className="row shadow">
          <div className="col d-flex justify-content-center">
            <div className="m-5">
              <button href="https://github.com/JustinHolsclaw" className="fa fa-github"></button>
            </div>
            <div className="m-5">
              <button href="https://www.linkedin.com/in/justin-holsclaw-79116419a/" className="fa fa-linkedin"></button>
            </div>
          </div>
        </div>
        <br/>
      </div>
    </div>
  );
}

export default App;
