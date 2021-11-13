function AboutMe() {
  const headerText = "Justin Holsclaw";
  const descriptionText =
    "A Software Engineer with both experience and a degree in Software Engineering.";
  return (
    <div className="row shadow">
      <div className="col col-4 border border-4 border-dark rounded text-center">
        <h1><strong>{headerText}</strong></h1>
      </div>
      <div className="col col-8 border border-4 border-dark rounded">
        <h2>{descriptionText}</h2>
      </div>
    </div>
  );
}

export default AboutMe;
