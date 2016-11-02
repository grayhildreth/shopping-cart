import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    // addTotal(){
    //   return this.get('shoppingCart').addTotal();
    // },
  }
});
