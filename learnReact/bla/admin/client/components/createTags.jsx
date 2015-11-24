CreateTags = React.createClass({


    // This mixin makes the getMeteorData method work
    mixins: [ReactMeteorData],
    getMeteorData() {
      return {
        tags: Tags.find({}, {sort: {createdAt: -1}}).fetch()
      }
    },

  getTags() {
   return [
     { _id: 1, text: "This is task 1" },
     { _id: 2, text: "This is task 2" },
     { _id: 3, text: "This is task 3" }
   ];
  },
  renderTags() {
      return this.data.tags.map((tags) => {
        return <Tags key={tags._id} tags={tags.tag} />;
      });
    },
  addTags(event) {
      event.preventDefault();
      // Find the text field via the React ref
      var tag_ = ReactDOM.findDOMNode(this.refs.newTag).value.trim();
      let idTag = new Meteor.Collection.ObjectID();
      Tags.insert({
        _id:idTag._str,
        tag: tag_,
        createdAt: new Date().getTime()
      });

      // Clear form
      ReactDOM.findDOMNode(this.refs.newTag).value = "";
    },
    render() {
    return (
      <div className="panel panel-default createTags">
          <div className="panel-heading">
              <div className="input-group">
                  <input type="text" className="form-control" ref="newTag" placeholder="Novas Tags" aria-describedby="addTags" />
                  <span className="input-group-addon" id="addTags" onClick={this.addTags}>Add</span>
              </div>
          </div>
          <div className="panel-body " >
            <ul className="contentTags">
                {this.renderTags()}
            </ul>
          </div>
      </div>

      );
}
});
