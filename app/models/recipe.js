import DS from 'ember-data';

export default DS.Model.extend({

  title: DS.attr('string'),
  description: DS.attr('string'),
  source: DS.attr('string'),
  prepTime: DS.attr('number'),
  cookTime: DS.attr('number'),
  image: DS.attr('string'),
  ingredientGroups: DS.hasMany('ingredient-group', { async: false, inverse: null }),
  instructions: DS.hasMany('instruction', { async: false, inverse: null }),

});
