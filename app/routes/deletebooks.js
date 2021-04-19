import Route from '@ember/routing/route';

export default class DeletebooksRoute extends Route {
    async model() {

    
        
        return Ember.RSVP.hash({
            book: this.store.findAll('book'),
            bookdetail: this.store.findAll('bookdetail')
        });
    }
    setupController(controller, model) {
        this._super(...arguments);
        Ember.set(controller, 'book', model.book);
        Ember.set(controller, 'bookdetail', model.bookdetail);
      }
}
