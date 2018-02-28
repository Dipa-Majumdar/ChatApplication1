import { Component } from '@angular/core';
import {User} from '../models/user.model';
import {OnInit} from '@angular/core';

import {Router,ActivatedRoute,ParamMap} from '@angular/router';
import {HttpTestService} from '../home.service';

@Component({
    selector: 'chatbox',
    templateUrl: './chatbox.html',
    styleUrls: ['./chatbox.css']
})
export class ChatBoxComponent implements OnInit {
        
  getAllUser: any;
  postMessage: any;

 constructor(public _route:ActivatedRoute,
   public _router: Router,
  private _httpService: HttpTestService)  {}

  displayToken: string;
  
  ngOnInit()
  {
      this.displayToken=this._httpService._token;
      console.log(this.displayToken);
      
     this._httpService.getAllUsers();
     

  }


}