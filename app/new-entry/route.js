import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    createEntry (data) {
     let entry = this.get('store').createRecord('entry', data);
     return entry.save();
     },

    // createEntry (details) {
    //   this.get('auth').newEntry(details)
    //   .then(() => this.get('auth').newEntry(details))
    //   .then(() => this.transitionTo('application'))
    //   .then(() => {
    //     this.get('flashMessages')
    //     .success('Successfully created new entry');
    //   })
    //   .catch(() => {
    //     this.get('flashMessages')
    //     .danger('Uh oh, dry fire. There was a problem. Please try again.');
    //   });
    // },
  },
});
