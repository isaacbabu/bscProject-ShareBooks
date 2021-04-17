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

        function toast()
        {
          alert('Your Upload code is<br>'+ alphanum+ 'Please remeber this code');
        }

        
        // get the input value from the .hbs template
        let title = this.get('title');
        let owner = this.get('name');
        let code = this.get('code');
        let year = yearvalue;
        let roll = this.get('roll');
        let dept = deptvalue;
        let alphanum=roll*10+dept[0]+year+owner[0]+title[0];
        let id = code%100000000
        

        // create a record in Ember Data (locally, would not survive page refresh)
        let newRecord = this.store.createRecord('book', {
            id: id,
            name: title,
            code: code,
            year: year,
            owner: owner,
            roll: roll,
            dept: dept,
            usercode: alphanum

        })
        // Save the record to the API endpoint specified in adapters/application.js
        newRecord.save()

        toast();
        
      },
      deleteData()
      {
        
        let post = this.store.peekRecord('book', 30);
        post.deleteRecord();
        post.isDeleted; // => true
        post.save(); // => DELETE to /posts/1
        
      }
    

    }
    ,
    
    
  });