import DS from 'ember-data';

export default DS.Model.extend({
  createEntry (entry) {
    return this.get('ajax').post('/new-entry', {
      data: {
        entry: {
          ohms: entry.ohms,
          coil: entry.coil,
          voltage: entry.voltage,
          mod: entry.mod,
          juice: entry.juice,
          notes: entry.notes,
        },
      },
    });
  },

});
