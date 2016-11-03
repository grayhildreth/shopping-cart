import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  street: DS.attr(),
  city: DS.attr(),
  state: DS.attr(),
  zipCode: DS.attr(),
  email: DS.attr(),
  timestamp: DS.attr(),
  products: DS.hasMany('product', {async: true})
});
