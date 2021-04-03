import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    let post = this.store.createRecord('book', {
      id: 4,
      name: 'Rails is Omakase',
      code: 87654
    });
    post.save();
    
  return this.store.findAll('book')
  }
}