
// ListMedia component - represents a single todo item
ListPost = React.createClass({
 mixins: [ReactMeteorData],
 getMeteorData() {
   return {
     post: Post.find({}).fetch()
   }
 },

 renderPost() {
    return this.data.post.map((post) => {
      return <Post key={post._id} post={post} />;
    });
  },


    render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS

    return (
      <div className="listPost">
        <div className="panel panel-default">
          <div className="panel-heading">
              <select name="action" className="form-control opc-list-post" >
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
                          <th>Mensagem</th>
                          <th>Tags</th>
                          <th>Data</th>
                          <th>Autor</th>
                          <th></th>
                      </tr>
                  </thead>
                  <tbody>
                      {this.renderPost()}
                  </tbody>
              </table>
          </div>
          <div className="panel-footer">
              <div className="">
                  <button className="btn btn-info btn-lg">Adicionar</button>
              </div>
          </div>

      </div>
      </div>
);
}
});
