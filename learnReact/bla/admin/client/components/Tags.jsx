Tags = React.createClass({
  propTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    tags: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <li className="btn btn-info ">
          <span className="badge">
            {this.props.tags.tag}
            </span>
      </li>
    );
  }
});
