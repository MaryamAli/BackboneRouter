import $ from 'jquery';
import _ from 'underscore';
import DetailsCollection from './detailsCollection';
import moment from 'moment';

import Router from './router';

import './ajaxSetup';

var appElement = $('.app');

var router = new Router(appElement);
router.start();

// window.router = router;

console.log('Hello, World');
