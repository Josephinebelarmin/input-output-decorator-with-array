import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homeassign2';
//  element = [{username: String, Address: String, Dob: String}]
 
  username = '';
  Address = '';
  Dob ='';

  showResult = false;
  showInput = true;
  result: any = {};
  onReceivedName(name:any){
    console.log("text Received  " +name);
        this.username = name;
  }
  onReceivedAddress(address:any){
    console.log("Address Received is  " + address);
        this.Address = address;
  }
  onReceivedDob(event:any){
    console.log("Dob Received is  " + event);
        this.Dob = event;
  }

  onSave(){
    this.showResult =true;
    this.showInput =false;
    this.result = {username: this.username, Address: this.Address, Dob:this.Dob}
    console.log(this.username + "  is saved")
  }
}


