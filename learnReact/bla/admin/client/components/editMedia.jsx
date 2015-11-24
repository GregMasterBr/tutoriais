// Breadcrumb component - represents a single todo item
EditMedia = React.createClass({
    propTypes: {
        // This component gets the task to display through a React prop.
        // We can use propTypes to indicate it is required
    },

    render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS

    return (
      <div className="editMedia">
        <div className="panel panel-primary">
          <div className="panel-heading">
              <h3 className="panel-title">Editar Mídia</h3>
          </div>
          <div className="panel-body">
              <h4>Por do Sol <span className="pull-right">Enviado em <strong>11/11/2015 ás 15:00</strong></span></h4>
              <div className="col-md-6">
                  <div className="area-media">
                      <div className="group-img">
                          <img src="http://placehold.it/350x250" alt=" " />
                          <button className="closeImg">&times;</button>
                          <div className="input-group selectFile">
                              <input type="file" className="form-control" />
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-md-6">
                  <CreateTags />
              </div>
          </div>
          <div className="panel-footer">
              <div className="">
                  <button className="btn btn-danger btn-lg">Remover</button>
                  <button className="btn btn-info btn-lg">Biblioteca</button>
              </div>
          </div>
      </div>
      </div>

);
}
});
