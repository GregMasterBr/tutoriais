// CreatePost component - represents a single todo item
CreatePost = React.createClass({
    propTypes: {
        // This component gets the task to display through a React prop.
        // We can use propTypes to indicate it is required
    },
// sending new contact to action
_createPost: function(e) {
  var orign;
  if(e.currentTarget.id=="post"){
    orign=true;
  }else{
    orign=false;
  }
  e.preventDefault();

  var newPost = {};
  let form = $('#post_form');
  let listTags=this._removeValueEmpatyArray(($( ".contentTags li span").text()).split(" "));
  // getting data from form
  newPost.message = form.find('#post_message').val();
  newPost.author = form.find('#post_author').val();
  newPost.reference = form.find('#post_reference').val();
  newPost.tags =listTags;
  newPost.available = orign;

  if(form.find('#post_message').val().length>10){
    Meteor.call("addPost", newPost);
  }else{
    console.log("Quantidade de caracateres insuficientes para cadastrar a Mensagem");
  }


  this._clearFormPost();

},
_clearFormPost:function(){
  let form = $('#post_form');
  form.find('#post_message').val('');
  form.find('#post_author').val('');
  form.find('#post_reference').val('');
},
_removeValueEmpatyArray:function(listTags_){
  let newArray=[];
  for (var i = 0; i < listTags_.length; i++) {
    if (listTags_[i] !== undefined && listTags_[i] !== null && listTags_[i] !== "") {
      newArray.push(listTags_[i]);
    }
   }
   return newArray;
},

    render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS

    return (
      <form id="post_form" >
        <div className="createPost">
          <div className="col-md-8 write-message">
              <div className="panel panel-primary">
                  <div className="panel-heading">
                      <h3 className="panel-title">Mensagem</h3>
                  </div>
                  <div className="panel-body">
                      <textarea className="form-control message" id="post_message" placeholder="Escreva sua Mensagem" required="required"></textarea>
                  </div>
              </div>
              <div className="form-group">
                  <label>Autor</label>
                  <input type="text" className="form-control" placeholder="Autor" id="post_author"  required/>
              </div>
              <div className="form-group">
                  <label>Referencia</label>
                  <input type="text" className="form-control" placeholder="Referencia" id="post_reference" />
              </div>
          </div>
          <div className="col-md-4">
            <CreateTags />

            <button className="btn btn-block btn-lg btn-success" id="post" onClick={this._createPost}>INSPIRAR</button>
            <button className="btn btn-block  btn-primary " id="draw" onClick={this._createPost}>RASCUNHO</button>
            <button className="btn btn-block  btn-danger">CANCELAR</button>
        </div>
        </div>
    </form>

);
}

});
