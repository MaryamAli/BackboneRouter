import Backbone from 'backbone';
import DetailModel from './detailModel';

let detailsCollection = Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/MyPeeps',

  model: DetailModel,

  parse: function (data) {
    return data.results;
  }


});

export default detailsCollection;