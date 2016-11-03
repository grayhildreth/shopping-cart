import Ember from 'ember';

export default Ember.Service.extend({
  logIn: false,
  loggedIn(){
    // console.log(this.get('logIn'));
    if (this.get('logIn') === false){
      this.set('logIn', true);
    } else{
      this.set('logIn', false);
    }
  }
});
