import Controller from '@ember/controller';
import book from '../models/book';
// a controller is a place to define 'actions', such as the things that should happen
// when a user clicks a button to create/read/edit/delete a record

export default Controller.extend({
  
    actions: {
      
      postData() {
        var y = document.getElementById("year");
        var yearvalue = y.value;
        var d = document.getElementById("Dept");
        var deptvalue = d.value;

        

        
        // get the input value from the .hbs template
        let title = this.get('title');
        let owner = this.get('name');
        let code = this.get('code');
        let year = yearvalue;
        let roll = this.get('roll');
        let dept = deptvalue;
        // create a record in Ember Data (locally, would not survive page refresh)
        let newRecord = this.store.createRecord('book', {
            name: title,
            code: code,
            year: year,
            owner: owner,
            roll: roll,
            dept: dept
        })
        // Save the record to the API endpoint specified in adapters/application.js
        newRecord.save()
      },
      deleteData()
      {
        let post = this.store.peekRecord('book', 16);
        post.deleteRecord();
        post.isDeleted; // => true
        post.save(); // => DELETE to /posts/1
        
      }
    

    }
  });