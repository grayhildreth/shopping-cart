import Ember from 'ember';

export default Ember.Component.extend({
  checkingOut: false,
  shoppingCart: Ember.inject.service(),
  actions:{
    checkOut(){
      this.set('checkingOut', true);
    },
    

  }
});
