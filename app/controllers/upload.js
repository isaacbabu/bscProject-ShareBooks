import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import book from '../models/book';
// a controller is a place to define 'actions', such as the things that should happen
// when a user clicks a button to create/read/edit/delete a record

export default Controller.extend({
  
    
    actions: {

      toggleModal(){
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
          activeDiv.textContent = secureCode;
          const activeDiv2 = document.querySelector('.modal');
          activeDiv2.classList.add('is-active'); 
          
        }
        function getRandomInt(n) {
          return Math.floor(Math.random() * n);
        }
        function shuffle(s) {
          var arr = s.split('');           // Convert String to array
          var n = arr.length;              // Length of the array
          
          for(var i=0 ; i<n-1 ; ++i) {
            var j = getRandomInt(n);       // Get random of [0, n-1]
            
            var temp = arr[i];             // Swap arr[i] and arr[j]
            arr[i] = arr[j];
            arr[j] = temp;
          }
          
          s = arr.join('');                // Convert Array to string
          return s;                        // Return shuffled string
        }

        
        // get the input value from the .hbs template
        let title = this.get('title');
        let owner = this.get('name');
        let code = this.get('code');
        let year = yearvalue;
        let admin = this.get('admin');
        let dept = deptvalue;
        let phone = this.get('phone');
        let email = this.get('email');
        let randomNumber = Math.floor(Math.random() * 100);
        let alphanum=title[0]+dept[0]+randomNumber+owner[0];
        let secureCode= shuffle(alphanum);
        let bookyear = this.get('bookyear');
        let author = this.get('author');
        let id = Math.floor(code+admin);
        
        
        

        // create a record in Ember Data (locally, would not survive page refresh)
        let newRecord = this.store.createRecord('book', {
            id: id,
            name: title,
            code: code,
            year: year,
            owner: owner,
            admin: admin,
            dept: dept,
            usercode: secureCode

        })
        let newBookRecord = this.store.createRecord('bookdetail',{
          id: id,
          name: title,
          author: author,
          bookid:code,
          year: bookyear,
          phone: phone,
          email: email
        })
        
        
        

        
        // Save the record to the API endpoint specified in adapters/application.js
        newRecord.save();
        newBookRecord.save();
        


        toast();
        
      }

    

    }
    
    
    
  });