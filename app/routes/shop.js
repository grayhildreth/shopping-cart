import Ember from 'ember';

export default Ember.Route.extend({
  admin: Ember.inject.service(),
  model() {
    return this.store.findAll('product');
  },
  actions: {
    addProduct(params){
      var newProduct = this.store.createRecord('product', params);
      newProduct.save();
      this.transitionTo('shop');
    }
  }
});
