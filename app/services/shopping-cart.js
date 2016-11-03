import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  total: 0,
  add(item){
    if (item.get('quantity') === 0){
      this.get('items').pushObject(item);
    }
      item.set('quantity', item.get('quantity') + 1);
    },
  remove(item){
    if (item.get('quantity') === 1){
      this.get('items').removeObject(item);
    }
    item.set('quantity', item.get('quantity') -1);
  },
  addTotal(item){
    var total = this.get('total');
    total += item.data.price;
    this.set('total', total);
  },
  removeFromTotal(item){
    var total = this.get('total');
    if(total > 0){
      total -= item.data.price;
      this.set('total', total);
    } else{
      total = 0;
    }
  }
});
