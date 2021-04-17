import Route from '@ember/routing/route';

export default class DeletebooksRoute extends Route {
    async model() {

    
        return this.store.findAll('book')
        }
}
