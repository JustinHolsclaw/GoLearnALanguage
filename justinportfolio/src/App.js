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
        <div className="row ">
          <div className="col d-flex justify-content-center">
            <div className="mx-5 mt-4">
              <button href="https://github.com/JustinHolsclaw" className="fa fa-github"></button>
            </div>
            <div className="mx-2 mt-4">
              <button href="https://www.facebook.com/justin.holsclaw" className="fa fa-facebook"></button>
            </div>
            <div className="mx-5 mt-4">
              <button href="https://www.linkedin.com/in/justin-holsclaw-79116419a/" className="fa fa-linkedin"></button>
            </div>
          </div>
        </div>
        <br/>
      </div>
      <div>
        <p className="text-center"><strong>&copy; Justin Holsclaw 2021</strong></p>
      </div>
    </div>
  );
}

export default App;
