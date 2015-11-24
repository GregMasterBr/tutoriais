/**
 * Created by jQuant on 12/11/15.
 */
Library = new Mongo.Collection("library");
Author = new Mongo.Collection("author");
Post = new Mongo.Collection("post");
Tags = new Mongo.Collection("tags");

var imageStore = new FS.Store.GridFS("images");

Images = new FS.Collection("images", {
  stores: [imageStore]
});


if(Meteor.isClient){
	removeImages = function(){
		for(i in Images.find().fetch()){
			Images.remove(Images.find().fetch()[i]._id);
		}
	}
}

if(Meteor.isServer){
	Images.deny({
		insert: function(){
			return false;
		},
		update: function(){
			return false;
		},
		remove: function(){
			return false;
		},
		download: function(){
			return false;
		}
	});

	Images.allow({
		insert: function(){
			return true;
		},
		update: function(){
			return true;
		},
		remove: function(){
			return true;
		},
		download: function(){
			return true;
		}
	});
}
