import Route from '@ember/routing/route';

export default class BookdetailRoute extends Route {
  async model(params) {

    
  return this.store.findRecord('bookdetail',params.book_id)
  }
}
