import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  


  constructor(private _http: HttpClient) { }

  postNew_Author_Service(new_author){
    console.log("Service at postNew_Author_Service",new_author);
    return this._http.post('/Author', new_author)
  }

  getAll_Author_Service(){
    console.log("Service at gttAll_Author_Service");
    return this._http.get('/Author')

  }
  getOne_Author_Service(AuthorID){
    console.log("AuthorID at GetOne_Author_Servie",AuthorID);
    return this._http.get('/Author/' + AuthorID)
  }

  update_Current_Author(AuthorID,update_Current_Author){
    console.log("AuthorID at update_Current_Author", AuthorID);
    return this._http.patch('/Author/edit/'+ AuthorID, update_Current_Author)

  }
  deleteAuthor_Service(DeleteAuthor) {
    console.log("Delete service", DeleteAuthor);
    return this._http.delete('/delete/'+ DeleteAuthor);
  }

}
