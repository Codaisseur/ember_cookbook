import Ember from 'ember';

export function increment(index/*, hash*/) {
  let increment = Number(index);
  return increment + 1;
}

export default Ember.Helper.helper(increment);
