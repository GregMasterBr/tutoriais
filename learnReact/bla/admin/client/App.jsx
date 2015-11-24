
// App component - represents the whole app
App = React.createClass({
    // This mixin makes the getMeteorData method work
    //mixins: [ReactMeteorData],

render() {
    return (
        <div className="wrapper">
          <Header />
          <div className="wrapper-content">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">

                      {this.props.content}
                  </div>
                </div>
              </div>
          </div>
          <Footer />
        </div>
      );
}

});
