import JustinHolsclaw from "./Images/JustinHolsclaw.png"

function AboutMe() {
  const descriptionText =
    "A Software Engineer with both experience and a degree in Software Engineering.";
  return (
    <div className="row">
      <div className="col justinimage mr-10">
        <img className ="img-fluid shadow-lg" src={JustinHolsclaw} alt=""></img>
      </div>
      <div className="col shadow-lg">
        <p className="h1 text-center align-middle"><strong>{descriptionText}</strong></p>
      </div>
    </div>
  );
}

export default AboutMe;
