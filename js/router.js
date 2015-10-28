import Backbone from 'backbone';
import listTemplate from './views/list';

import detailTemplate from './views/detail';

import detailCollection from './detailCollection';

let Router = Backbone.Router.extend({

  routes: {
    ""       : "list",
    "detail" : "showDetail"

  },

// initialize function
  initialize function(appElement) {

    this.$el. = appElement;
    this.detail = new detailCollection();

  },

//set up list function THIS WILL BE THE HOME PAGE
  //call list template

  list: function () {
    console.log('show list page');
    this.$el.html(listTemplate());
  },


//set up detail function
    //call detail template

  showDetail: function() {
    console.log('show detail page');

    this.detail.fetch()then(function(){

      this.$el.html(detailTemplate(this.detail.toJSON()) );
    })
  },


//start router
//router history
//export router

  start: function (){
    Backbone.history.start();
  }
});

export default Router;