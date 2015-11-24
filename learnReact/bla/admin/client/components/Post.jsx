Post = React.createClass({
  render() {
    return (
      <tr className="register-post">
        <td><input type="checkbox" /></td>
        <td className="message-post">{this.props.post.message} </td>
        <td>{this.props.post.tags}</td>
        <td>{this.props.post.createdAt}</td>
        <td>{this.props.post.author}</td>
        <td id={this.props.post._id}>
            <button className="btn btn-warning btn-block" >Editar</button>
            <button className="btn btn-danger btn-block">Remover</button>
        </td>
      </tr>
    );
  }
});
