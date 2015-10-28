import Backbone from 'backbone';
import $ from 'jquery';
import listTemplate from './views/list';

import detailsTemplate from './views/details';

import detailsCollection from './detailsCollection';

let Router = Backbone.Router.extend({

  routes: {
    ""       : "list",
    "details" : "showDetails",
    "details/:id" : "showSpecificDetail",

  },

// initialize function
  initialize: function(appElement) {

    this.$el = appElement;
    this.details = new detailsCollection();

    let router = this;

     this.$el.on('click', '.detail-list-item', function(event) {
      let $li = $(event.currentTarget);
      var detailId = $li.data('detail-id');
      router.navigate(`details/${detailId}`);
      router.showSpecificDetail(detailId);
    });

  },
      showSpinner: function() {
        this.$el.html(
          '<i class="fa fa-spinner fa-spin"></i>'
        );
      },

//set up list function THIS WILL BE THE HOME PAGE
  //call list template

  list: function () {
    console.log('show list page');
    this.showSpinner();
    this.details.fetch().then(function() {

    this.$el.html(listTemplate(this.details.toJSON));
    }.bind(this));
  },


//set up detail function
    //call detail template

    showSpecificDetail: function(detailId) {
    let detail = this.details.get(detailId);

    if (detail) {
      // if fetched
      this.$el.html(detailTemplate(detail.toJSON()) );
    } else {
      // if not fetched
      
      let detail = this.details.add({objectId: todoId});
      var router = this;
      this.showSpinner();
      detail.fetch().then(function() {
        router.$el.html( detailTemplate(detail.toJSON()) );
      });
    }

  },

 // showDetails: function() {
 //    console.log('show details page');
    

 //    var router = this;

 //    this.details.fetch().then(function(){

 //      router.$el.html( detailsTemplate(router.details.toJSON()) );

 //    });

 //  },

//start router
//router history
//export router

  start: function (){
    Backbone.history.start();
  }
});

export default Router;