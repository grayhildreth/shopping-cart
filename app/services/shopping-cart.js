import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  total: 0,
  add(item){
    this.get('items').pushObject(item);
  },
  remove(item){
    // console.log(this.get('items').indexOf(item));

    // for(var i = 0; i < this.get('items'); i++){
    //   if()
    // }
    // console.log(item.id);
    // var itemToRemove = this.store.findRecord('product', item.id);
    // console.log(itemToRemove);
    // // var i = this.get('items').indexOf(item);
    // // if (i != -1){
    // //   this.get('items').splice(i, 1);
    // // }
    // // console.log(this.get('items'));
  },
  addTotal(item){
    var total = this.get('total');
    total += item.data.price;
    this.set('total', total);
  },
  removeFromTotal(item){
    var total = this.get('total');
    total -= item.data.price;
    this.set('total', total);
  }
});
