import DS from 'ember-data';
export default DS.Model.extend({
    name: DS.attr(),
    author: DS.attr(),
    bookid: DS.attr(),
    year: DS.attr()

   });