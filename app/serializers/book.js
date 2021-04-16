import DS from 'ember-data';
import book from '../models/book';
export default DS.RESTSerializer.extend({
    
    normalizeResponse(store, primaryModelClass, payload, id, requestType){
        id: book.id;
        return this._super(...arguments);
    }
    
})
