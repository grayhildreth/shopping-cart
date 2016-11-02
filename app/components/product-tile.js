import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions:{
    addToCart(product){
      this.get('shoppingCart').add(product);
      console.log(this.get('shoppingCart.items'));
    }
  }
});
