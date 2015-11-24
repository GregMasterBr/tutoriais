// Header component - represents a single todo item
Menu = React.createClass({
    render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top- main-nav"  >
          <div className="container">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="/">
                      <img src="http://now.ventures/startup/common-files/img/header/NOW-logo.png" alt=""/>
                  </a>
              </div>
              <div id="navbar" className="collapse navbar-collapse pull-right">
                  <ul className="nav navbar-nav">

                      <li className="dropdown ">
                          <a href="#" className="dropdown-toggle active text-muted" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                              Galeria <span className="caret"></span>
                          </a>
                          <ul className="dropdown-menu">
                              <li><a href="/NewMedia"  className="text-muted">Nova Mídia</a></li>
                              <li><a href="/ListMedia" className="text-muted">Biblioteca</a></li>
                              <li><a href="/EditMedia" className="text-muted">Editar Mídia</a></li>
                          </ul>
                      </li>
                      <li className="active "><a href="/CreatePost" className="text-muted">INSPIRAR</a></li>
                  </ul>
               </div>
          </div>
      </nav>

);
}
});
