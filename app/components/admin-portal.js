import Ember from 'ember';

export default Ember.Component.extend({
  admin: Ember.inject.service(),
  actions: {
    loggedIn(){
      this.get('admin').loggedIn();
    }
  }
});
