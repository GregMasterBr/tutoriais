Meteor.methods({
  addPost(post) {
    let idPost = new Meteor.Collection.ObjectID();
    Post.insert({
      _id:idPost._str,
      message: post.message,
      createdAt: new Date(),
      reference:post.reference,
      author:post.author,
      available:post.available,
      tags:post.tags
    });
},

});
