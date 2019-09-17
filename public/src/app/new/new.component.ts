import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  new_author :any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.new_author = {name:""};


  }
  submitNewAuthor(){
    let observable =this._httpService.postNew_Author_Service(this.new_author);

    observable.subscribe(data=>{
      console.log("NewAuthor", data);
      this.ngOnInit();
    })
  }

}
