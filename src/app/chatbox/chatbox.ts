import { Component } from '@angular/core';
import {User} from '../models/user.model';


@Component({
    selector: 'chatbox',
    templateUrl: './chatbox.html',
    styleUrls: ['./chatbox.css']
})
export class ChatBoxComponent {
        
  getAllUser: any;
  postMessage: any;

}