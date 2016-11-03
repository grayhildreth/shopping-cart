import Ember from 'ember';

export default Ember.Component.extend({
  admin: Ember.inject.service(),
  actions:{
    update(product){

      var params={
        name: this.get('name'),
        description: this.get('description'),
        price: this.get('price'),
        brand: this.get('brand'),
        imageUrl: this.get('imageUrl'),
        inventory: this.get('inventory')
      };
      this.sendAction('update', product, params);
    }
  }
});
