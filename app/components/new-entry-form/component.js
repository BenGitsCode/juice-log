import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  entry: {},

  actions: {
    submit () {
      this.sendAction('submit', this.get('entry'));
    },
    newEntry : {
      content: null,
    },
    createEntry () {
      let data = this.get('newEntry');
      data.entry = this.get('entry');
      this.sendAction('newEntry', data);
      this.set('newEntry.content', null);
    },

    reset () {
      this.set('entry', {});
    },
  },
});
