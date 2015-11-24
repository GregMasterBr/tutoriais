// Breadcrumb component - represents a single todo item
Breadcrumb = React.createClass({
    propTypes: {
        // This component gets the task to display through a React prop.
        // We can use propTypes to indicate it is required
    },

    render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS

    return (
      <ol className="breadcrumb ">
        <li><a href="#">Home</a></li>
        <li><a href="#">Post</a></li>
        <li className="active">Create</li>
      </ol>
    );
}
});
