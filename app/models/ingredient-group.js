import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  ingredients: DS.hasMany('ingredient', { async: false, inverse: null }),
});
