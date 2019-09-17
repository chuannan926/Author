import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  Author_id : any;
  view_one_author: any;

  constructor(
    private _httpService: HttpService,   
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    this.view_one_author = { name :""}
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.Author_id = params['id'];
    
    let observable = this._httpService.getOne_Author_Service(this.Author_id)
    observable.subscribe(data =>{
      this.view_one_author = data;
      console.log("ViewComponent here", data);
      
    })
  })
  
  

  }
}
