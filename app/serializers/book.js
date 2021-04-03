import DS from 'ember-data';
export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType){

        return this._super(...arguments);
    }
    
})
