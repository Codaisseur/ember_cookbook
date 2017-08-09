import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(model){
      model.save()
        .then((model) => this.transitionTo('recipes.show', model))
        .catch(e => {
          console.log(e.errors);
        });
    },

    willTransition() {

      this.controller.get('model').rollbackAttributes();
    },

    addIngredientGroup() {
      this.currentModel.get('ingredientGroups').pushObject(
        this.get('store').createRecord('ingredientGroup')
      );
    },
    addIngredient(group) {
      group.get('ingredients').pushObject(
        this.get('store').createRecord('ingredient')
      );
    },
    addInstruction() {
      this.currentModel.get('instructions').pushObject(
        this.get('store').createRecord('instruction')
      );
    },
    removeIngredient(ingredient) {
      this.currentModel.get('ingredients').removeObject(ingredient);
    },
    removeInstruction(instruction) {
      this.currentModel.get('instructions').removeObject(instruction);
    }
  }
});
