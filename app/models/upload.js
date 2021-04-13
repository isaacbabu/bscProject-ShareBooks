import DS from 'ember-data';
export default DS.Model.extend({
    name: DS.attr('string'),
    code: DS.attr(),
    year: DS.attr(),
    owner: DS.attr(),
    roll: DS.attr()
   });