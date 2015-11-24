Session.set('uploaded',false);
Session.set('editImage','');

// Breadcrumb component - represents a single todo item
SendMedia = React.createClass({
    propTypes: {
        // This component gets the task to display through a React prop.
        // We can use propTypes to indicate it is required
    },
    // sending new contact to action
    uploadImage: function(e) {
      e.preventDefault();
      var file = $('.btnAddImage').prop('files')[0];
      console.log(file);
      var reader=new FileReader();
      reader.readAsDataURL(file);
      Images.insert(file, function (err, fileObj) {
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      });

    },
    render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS

    return (
      <div  className="sendMedia" >
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">Enviar nova Mídia</h3>
            </div>
            <div className="panel-body">
                <h2 className="title-center" >Solte os arquivos aqui ou</h2>

                <div className="input-group  area-file">
                    <input type="file" className="btn btn-default btnAddImage"  accept="image/*"  multiple aria-describedby="upload" />
                    <button className="btn btn-primary " id="upload" type="button" onClick={this.uploadImage}>Carregar</button>
                </div>

            </div>
        </div>
    </div>

  );
}
});
