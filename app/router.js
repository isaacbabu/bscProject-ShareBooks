import EmberRouter from '@ember/routing/router';
import config from 'read-share/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('upload');
  this.route('register');
  this.route('deletebooks');
  this.route('bookdetail', {path: '/bookdetails/:book_id'});
});
