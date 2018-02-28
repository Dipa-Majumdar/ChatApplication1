import { Component } from '@angular/core';
import {User} from '../models/user.model';
import { OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';
import {TokenParams} from '../TokenParams/TokenParams';
import {HttpTestService} from '../home.service';


@Component({
    selector: 'home',
    templateUrl: './home.html'
})
export class HomeComponent
{
tokenParam: TokenParams;
model =new User('');
constructor(public _route:ActivatedRoute,
public _router: Router,
private _httpService: HttpTestService)  {}
    
    DoLogin(model)
    {
       if(this.model.name.length==0)
       {
           alert("Please enter your name!");
       }
       else if(model.name.indexOf(' ') != -1 )
       {
            alert(model.name+": is not a correct input!");
            model.name= '';
       }
       
       else
       {
            this._httpService.login(model.name)
            .subscribe(
                data =>
                    {
                        this.tokenParam = JSON.parse(JSON.stringify(data));
                        //  this._httpService._id=this.tokenParam.id;
                        //  this._httpService._name=this.tokenParam.name;
                        this._httpService._token=this.tokenParam.token;
                        this._router.navigate(['/chatbox']);
                    },
                error => alert(JSON.stringify(error))
            );
       }
        
    }
    
}