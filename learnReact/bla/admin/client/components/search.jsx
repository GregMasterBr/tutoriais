// Search component - represents a single todo item
Search = React.createClass({
    propTypes: {
        // This component gets the task to display through a React prop.
        // We can use propTypes to indicate it is required
    },

    render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS

    return (
      <form className="pull-right search">
          Pesquisar
          <input type="search" name="googlesearch" className="form-control-" />
      </form>

);
}
});
