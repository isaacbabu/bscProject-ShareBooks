import Controller from '@ember/controller';
import book from '../models/book';
// a controller is a place to define 'actions', such as the things that should happen
// when a user clicks a button to create/read/edit/delete a record

export default Controller.extend({
  

    actions: {
      
      
      deleteData()
      {
        let key=this.get('model');
        let code=this.get('alphanum');
        let record=key.findBy('usercode',code);
        let post = this.store.peekRecord('book', record.id);
        post.deleteRecord();
        post.isDeleted; // => true
        post.save(); // => DELETE to /posts/1
        
      }
    

    }
    ,
    
    
  });