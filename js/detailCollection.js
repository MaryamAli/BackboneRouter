import Backbone from 'backbone';

let detailCollection = Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/MyPeeps',

  parse: function (data) {
    return data.results;
  }


});

export default detailCollection;