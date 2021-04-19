import Controller from '@ember/controller';
import book from '../models/book';
// a controller is a place to define 'actions', such as the things that should happen
// when a user clicks a button to create/read/edit/delete a record

export default Controller.extend({
  

    actions: {
      
      
      deleteData()
      {
       let bookkey=this.get('book');
       let bookdetailkey=this.get('bookdetail');
       let code=this.get('alphanum');
       let bookrecord=bookkey.findBy('usercode',code);
       let bookdetailrecord=bookdetailkey.findBy('id',bookrecord.id);
       
        
        bookrecord.deleteRecord();
        bookdetailrecord.deleteRecord();
      
        bookrecord.isDeleted; // => true
        bookdetailrecord.isDeleted;
        
        bookrecord.save(); // => DELETE to /posts/1
        bookdetailrecord.save();
        
        
        alert('Book Deleted');
        
      }
    

    }
    ,
    
    
  });