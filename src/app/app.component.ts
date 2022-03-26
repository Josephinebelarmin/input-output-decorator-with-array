import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homeassign2';
 
  username = '';
  Address = '';
  Dob ='';

  showResult = false;
  result: any = {};
  records:any [] = [];

  // records:any [] = [{Name: 'josephine', Address: 'jersey city', DOB: 'Feb 25'}];
  onReceivedName(name:any){
    console.log("text Received  " +name);
        this.username = name;
  }
  onReceivedAddress(address:any){
    console.log("Address Received is  " + address);
        this.Address = address;
  }
  onReceivedDob(Dob:any){
    console.log("Dob Received is  " + Dob);
        this.Dob = Dob;
  }

  onSave(event:any){
    console.log(event);
    this.result = {username: this.username, Address: this.Address, Dob:this.Dob}
    this.records.push(this.result)
    this.username = '';
    this.Address = '';
    this.Dob = '';
    console.log(this.username + "  is saved")
  }

  viewRecords(){
    this.showResult = !this.showResult;
    console.log(this.records);
  }
}


