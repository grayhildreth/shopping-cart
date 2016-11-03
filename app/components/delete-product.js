import Ember from 'ember';

export default Ember.Component.extend({
  admin: Ember.inject.service(),
  actions:{
    delete(product){
      this.sendAction('delete', product);
    }
  }
});
