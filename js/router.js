import Backbone from 'backbone';
import $ from 'jquery';
import individualDetailTemplate from './views/individualDetail';

import contactListTemplate from './views/contactListTemplate';

import allDetailsCollection from './allDetailsCollection';

let Router = Backbone.Router.extend({

  routes: {
    ""       : "allDetails",
    // "allDetails" : "showAllDetails",
    "details/:id" : "showSpecificDetail",

  },

// initialize function
  initialize: function(appElement) {

    this.$el = appElement;
    this.details = new allDetailsCollection();

    let router = this;

     this.$el.on('click', '.detail-list-item', function(event) {
      let $div = $(event.currentTarget);
      var detailId = $div.data('detail-id');
      router.navigate(`details/${detailId}`);
      router.showSpecificDetail(detailId);
    });

  },
      showSpinner: function() {
        this.$el.html(
          '<i class="fa fa-spinner fa-spin"></i>'
        );
      },

//set up all info function THIS WILL BE THE HOME PAGE
  //call all info template

  contactList: function () {
    console.log('show all contacts page');
    this.showSpinner();
    this.details.fetch().then(function() {

    this.$el.html(contactListTemplate(this.details.toJSON));
    }.bind(this));
  },


//set up detail function
    //call detail template

    showEachPeep: function(detailId) {
    let detail = this.details.get(detailId);
    console.log ('show each entry');

    if (detail) {
      // if fetched
      this.$el.html(individualDetailTemplate(detail.toJSON()) );
    } else {
      // if not fetched
      
      let detail = this.details.add({objectId: detailId});
      var router = this;
      this.showSpinner();
      detail.fetch().then(function() {
        router.$el.html( individualDetailTemplate(detail.toJSON()) );
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