import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Headers,Http} from '@angular/http';
import {HomeComponent} from './home/home';
@Injectable()

export class HttpTestService{

constructor (private _http: Http){}

login()
{
        
        var params={
          "name" : "dipa"
        }
        const httpOptions = {
        headers: new Headers({
          'Content-Type':  'application/json',
          'name':'dipa'
        })
      };

        return this._http.post('https://chat.promactinfo.com/api/user/login',
      {
        headers: Headers,params
      } 
      );


}


}