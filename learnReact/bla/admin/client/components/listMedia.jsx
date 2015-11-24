
// ListMedia component - represents a single todo item
ListMedia = React.createClass({
    propTypes: {
        // This component gets the task to display through a React prop.
        // We can use propTypes to indicate it is required
    },

    render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS

    return (
      <div className="listMedia">
        <div className="panel panel-default">
          <div className="panel-heading">
              <select name="action" className="form-control opc-list-gallery" >
                  <option value="">Ação em Massa</option>
              </select>
              <button className="btn btn-default">Aplicar</button>
              <Search />
          </div>
          <div className="panel-heading panel-primary">
              <h3 className="panel-title">Biblioteca</h3>
          </div>
          <div className="panel-body">
              <table className="table table-bordered table-hover tbl-media" >
                  <thead>
                      <tr>
                          <th><input type="checkbox" /></th>
                          <th>Arquivo</th>
                          <th>Data</th>
                          <th>Nome</th>
                          <th>Tags</th>
                          <th>Autor</th>
                          <th></th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr className="register-media">
                          <td><input type="checkbox" /></td>
                          <td className="item-img">
                              <img src="http://placehold.it/150x100" alt=" "  />
                          </td>
                          <td>12/11/2015</td>
                          <td>Imagem Perfeita.png</td>
                          <td>free;love;money;beautifull</td>
                          <td>Admin</td>
                          <td>
                              <button className="btn btn-warning btn-block">Editar</button>
                              <button className="btn btn-danger btn-block">Remover</button>
                          </td>
                      </tr>

                      <tr className="register-media">
                          <td><input type="checkbox" /></td>
                          <td className="item-img">
                              <img src="http://placehold.it/150x100" alt=" "  />
                          </td>
                          <td>11/11/2015</td>
                          <td>Imagem Perfeita2.png</td>
                          <td>free;love;money;piece</td>
                          <td>Admin</td>
                          <td>
                              <button className="btn btn-warning btn-block">Editar</button>
                              <button className="btn btn-danger btn-block">Remover</button>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <div className="panel-footer">
              <div className="">
                  <a href="/NewMedia" className="btn btn-info btn-lg">Adicionar</a>
              </div>
          </div>

      </div>
      </div>
);
}
});
