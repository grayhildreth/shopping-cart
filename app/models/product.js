import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  price: DS.attr(),
  brand: DS.attr(),
  quantity: DS.attr(),
  imageUrl: DS.attr(),
  inventory: DS.attr()
});
