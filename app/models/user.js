import DS from 'ember-data';
export default DS.Model.extend({
    usersname: DS.attr(),
    usersemail: DS.attr(),
    usersphone: DS.attr(),
    usersdept: DS.attr(),
    usersyear: DS.attr(),
    usersroll: DS.attr()

   });