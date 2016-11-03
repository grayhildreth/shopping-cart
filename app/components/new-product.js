import Ember from 'ember';

export default Ember.Component.extend({
  admin: Ember.inject.service(),
  actions: {
    save(){
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        price: parseInt(this.get('price')),
        brand: this.get('brand'),
        inventory: this.get('inventory'),
        quantity: 0,
        imageUrl: this.get('imageUrl')
      };
      this.sendAction('addProduct', params);
      this.set('name', '');
      this.set('description', '');
      this.set('price', '');
      this.set('brand', '');
      this.set('inventory', '');
      this.set('imageUrl', '');
    }
  }
});
