import Controller from '@ember/controller';
// a controller is a place to define 'actions', such as the things that should happen
// when a user clicks a button to create/read/edit/delete a record

export default Controller.extend({
    actions: {
      postData() {
        var e = document.getElementById("year");
        var yearvalue = e.value;
        var id=7;
        
        // get the input value from the .hbs template
        let title = this.get('title');
        let owner = this.get('name');
        let code = this.get('code');
        let year = yearvalue;
        let roll = this.get('roll');
        // create a record in Ember Data (locally, would not survive page refresh)
        let newRecord = this.store.createRecord('book', {
            id: id,
            name: title,
            code: code,
            year: year,
            owner: owner,
            roll: roll
        })
        // Save the record to the API endpoint specified in adapters/application.js
        newRecord.save()
      }
     
    

    }
  });