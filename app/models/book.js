import DS from 'ember-data';
export default DS.Model.extend({
    name: DS.attr('string'),
    code: DS.attr(),
    year: DS.attr(),
    owner: DS.attr(),
    admin: DS.attr(),
    dept: DS.attr(),
    usercode: DS.attr()
   });