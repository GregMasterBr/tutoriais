
FlowRouter.route("/",{
  name: 'Home',
  title: 'Home',
  action:function(){
    ReactLayout.render(App,{
      content:<CreatePost />
    });
  }
});

FlowRouter.route("/CreatePost",{
  name:'Home.CreatePost',
  parent: 'Home', // this should be the name variable of the parent route
  title: 'CreatePost',
  action:function(){
    ReactLayout.render(App,{
      content:<CreatePost />
    });
  }
});
FlowRouter.route("/CreatePost",{
  name:'Home.CreatePost',
  parent: 'Home', // this should be the name variable of the parent route
  title: 'CreatePost',
  action:function(){
    ReactLayout.render(App,{
      content:<CreatePost />
    });
  }
});
FlowRouter.route("/CreateTags",{
  name:'Home.CreateTags',
  parent: 'Home', // this should be the name variable of the parent route
  title: 'CreateTags',
  action:function(){
    ReactLayout.render(App,{
      content:<CreateTags />
    });
  }
});
FlowRouter.route("/NewMedia",{
  name:'Home.NewMedia',
  parent: 'Home', // this should be the name variable of the parent route
  title: 'NewMedia',
  action:function(){
    ReactLayout.render(App,{
      content:<NewMedia />
    });
  }
});

FlowRouter.route("/EditMedia",{
  name:'Home.EditMedia',
  parent: 'Home', // this should be the name variable of the parent route
  title: 'EditMedia',
  action:function(){
    ReactLayout.render(App,{
      content:<EditMedia />
    });
  }
});


FlowRouter.route("/ListMedia",{
  name:'Home.ListMedia',
  parent: 'Home', // this should be the name variable of the parent route
  title: 'ListMedia',
  action:function(){
    ReactLayout.render(App,{
      content:<ListMedia />
    });
  }
});


FlowRouter.route("/SendMedia",{
  name:'Home.SendMedia',
  parent: 'Home', // this should be the name variable of the parent route
  title: 'SendMedia',
  action:function(){
    ReactLayout.render(App,{
      content:<SendMedia />
    });
  }
});
