import Route from '@ember/routing/route';

export default class UploadRoute extends Route {
    async model() {

    
        return this.store.findAll('book')
        }
      
}
