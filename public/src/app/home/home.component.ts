import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  all_author :any;
  
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.GetAll_Author();
  
  }
  submitdeleteauthor(DeleteAuthor){
    console.log("Here");
    let observable = this._httpService.deleteAuthor_Service(DeleteAuthor);
    observable.subscribe(data =>{
      this.GetAll_Author();
    })
  }

  GetAll_Author(){
    let observable = this._httpService.getAll_Author_Service();
    observable.subscribe(data =>{
      console.log("ShowAllAuthor", data);
      this.all_author =data;
    })
  }


}
