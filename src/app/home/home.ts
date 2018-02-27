import { Component } from '@angular/core';
import {User} from '../models/user.model';
import { OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';
import {HttpTestService} from '../home.service';

@Component({
    selector: 'home',
    templateUrl: './home.html'
})
export class HomeComponent{
    loginPostData: any;
  
    model =new User('');
  constructor(public _route:ActivatedRoute, public _router: Router,
  private _httpService: HttpTestService)  {}
    
    checkForSpaces(model)
    {
       if(this.model.firstname.length==0)
       {
           alert("Please enter your name!");
       }
       else if(model.firstname.indexOf(' ') != -1 )
       {
            alert(model.firstname+": is not a correct input!");
            model.firstname= '';
       }
       
       else
       {
         
        this._httpService.login().subscribe(
            data => this.loginPostData = JSON.stringify(data),
            error => alert(error),
            () => console.log("Finished")
        );
       console.log(this.loginPostData);

     this._router.navigate(['/chatbox']);
       }
        
    }
    
}