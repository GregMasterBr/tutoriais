// NewMedia component - represents a single todo item
NewMedia = React.createClass({
    render() {
    return (
      <div className="newMedia">
        <div className="panel">
          <SendMedia />
          <div className="col-md-12 panel-body" >
            <ul className="galerry-images">
              <li className="col-md-6">
                  <h3 >ImagemPerfeita.jpg <button className="btn btn-warning pull-right">Editar</button></h3>
                  <div className="progress">
                      <div className="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" >
                          <span className="sr-only">40% Complete (success)</span>
                      </div>
                  </div>

                  <div className="area-media" >
                      <div className="area-media-space" >
                          <img src="http://placehold.it/350x250" alt=" " />
                          <button className="closeImg" >&times;</button>
                      </div>
                  </div>

              </li>
              <li className="col-md-6">
                  <h3 >ImagemPerfeita.jpg <button className="btn btn-warning pull-right">Editar</button></h3>
                  <div className="progress">
                      <div className="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" >
                          <span className="sr-only">40% Complete (success)</span>
                      </div>
                  </div>

                  <div className="area-media" >
                      <div className="area-media-space" >
                          <img src="http://placehold.it/350x250" alt=" " />
                          <button className="closeImg" >&times;</button>

                      </div>
                  </div>

              </li>
            </ul>
          </div>
          <div className="col-md-12 panel-footer">
            <div className="">
                <a href="/ListMedia" className="btn btn-info btn-lg">Biblioteca</a>
            </div>
        </div>
        </div>
      </div>

);
}
});
