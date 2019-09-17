import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  current_author :any;
  Author_id : any;
  constructor(
    private _httpService: HttpService,    
    private _route: ActivatedRoute,
    private _router: Router) { }
    
  ngOnInit() {
    this.current_author = {name:""};
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.Author_id = params['id'];
    });
    //把ID从URL调出来，后面用。
    // editCurrent_Author
    let observable = this._httpService.getOne_Author_Service(this.Author_id)
    observable.subscribe(data =>{
      console.log(data);
      this.current_author =data;
      //传进去的ID找到的Author，在Edit网页显示之前存的Author
    }) 
  }

  editCurrent_Author(){
    let observable = this._httpService.update_Current_Author(this.Author_id, this.current_author)
    observable.subscribe(data =>{
      console.log(data + " loooooook hee");
      this.current_author =data;
      this.ngOnInit();
    })

  }

}
