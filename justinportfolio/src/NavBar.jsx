
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-bg  px-5">
    <a className="navbar-brand" href="#"><strong>Justin Holsclaw</strong></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active onhover-nav">
          <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li className="nav-item active onhover-nav">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item active onhover-nav">
          <a className="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default NavBar;
