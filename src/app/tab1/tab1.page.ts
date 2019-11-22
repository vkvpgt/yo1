import { Component } from '@angular/core';
import { WebIntent } from '@ionic-native/web-intent/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private webIntent: WebIntent) {}
  
  upi() {
      const options= {
      action:this.webIntent.ACTION_VIEW,
      url:"upi://pay?pa=8400000701@upi&pn=ClickerTech&tid=cxnkjcnkjdfdvjndkjfvn&tr=4894398cndhcd23&am=10&cu=INR&tn=App Payment",
    }

    this.webIntent.startActivityForResult(options).then(
    onSuccess => {
      console.log('Success' ,onSuccess);
    },
    onError=> {
      console.log('error' ,onError);
    
    });
  }

}
