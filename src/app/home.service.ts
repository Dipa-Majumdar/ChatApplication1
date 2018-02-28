import { Injectable }     from '@angular/core';
import {HomeComponent} from './home/home';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Headers, Http,HttpModule, Response, RequestOptions } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TokenParams } from './TokenParams/TokenParams';

@Injectable()
export class HttpTestService 
{
   _token: string;
   _id: number;
   _name: string;
  
    constructor (private http: HttpClient){}
    login(uname:string)//: Observable<TokenParams> 
  { 
    //let headersForTokenAPI = new Headers({'Content-Type' : 'application/json'});
   // headersForTokenAPI.append("Jack",name);
    let data = {name:uname};
    return this.http.post('https://chat.promactinfo.com/api/user/login', data);//, {headers : headersForTokenAPI});//.map((res:Response) => res.json());
  }

  getAllUsers()
  {
    //console.log("Your token received in getAllUSers Function is "+this._token);
    
    let headersForTokenAPI = new Headers({'Authorization' :  this._token  });

   // return this.http.get('https://chat.promactinfo.com/api/user');
   return this.http.get<TokenParams>('https://chat.promactinfo.com/api/user').subscribe(data => {
      console.log(data.id);
      console.log(data.name);
    },
    error => console.log(JSON.stringify(error))
   
    );
  }


}




