import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import book from '../models/book';
// a controller is a place to define 'actions', such as the things that should happen
// when a user clicks a button to create/read/edit/delete a record

export default Controller.extend({
  
    
    actions: {

      toggleSize(){
        const activeDiv = document.querySelector('.modal');
        activeDiv.classList.toggle('is-active');
      },
      
      postData() {
        var y = document.getElementById("year");
        var yearvalue = y.value;
        var d = document.getElementById("Dept");
        var deptvalue = d.value;

        function toast()

        {
          
          
          const activeDiv = document.querySelector('#alert-id');
          activeDiv.textContent = alphanum;
          const activeDiv2 = document.querySelector('.modal');
          activeDiv2.classList.add('is-active'); 
          
        }

        
        // get the input value from the .hbs template
        let title = this.get('title');
        let owner = this.get('name');
        let code = this.get('code');
        let year = yearvalue;
        let roll = this.get('roll');
        let dept = deptvalue;
        let alphanum=roll*10+dept[0]+year+owner[0]+title[0];
        let phone = this.get('phone');
        let bookyear = this.get('bookyear');
        let author = this.get('author');
        let email = this.get('email');
        let id = Math.floor(code/10000000);
        let uid = Math.floor(phone/1000);
        

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
        let newBookRecord = this.store.createRecord('bookdetail',{
          id: id,
          name: title,
          author: author,
          bookid:code,
          year: bookyear
        })
        let newUserRecord = this.store.createRecord('user',{
          id: uid,
          usersname: owner,
          usersemail: email,
          usersphone: phone,
          usersdept: dept,
          usersyear: year,
          usersroll: roll
        })
        // Save the record to the API endpoint specified in adapters/application.js
        newRecord.save();
        newBookRecord.save();
        newUserRecord.save();


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