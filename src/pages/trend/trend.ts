import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-trend',
  templateUrl: 'trend.html',
})
export class TrendPage {
public loguser:any=[];
public BMI:any=[];
  constructor(public http:Http, public store:Storage, public navCtrl: NavController, public navParams: NavParams,public toastCtrl:ToastController) {
    this.store.get('user').then((val) => {
          this.loguser = val.user;
          console.log(this.loguser);
        });
  }

  ionViewWillEnter() {

         let headers   : any      = new Headers({ 'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"}),
             options   : any     = new RequestOptions({ headers: headers }),
             url       : any      = 'http://192.168.43.224:8000/api/BmiTrend/' + this.loguser.id;
           this.http.get(url,options).map(res => res.json())
             .subscribe(
               data => {
                 console.log(data);
                   this.BMI= data.UserBmi;
             },
             error => {
               console.log(error);
               if (error.status === 0){
              this.sendNotification("Please check your internet connections!!");
               }
               else {
                 this.sendNotification('Server is temporary not responding!!') ;
               }
             });
      }
      sendNotification(message)  : void
         {
            let notification = this.toastCtrl.create({
                message       : message,
                duration      : 5000
            });
            notification.present();
         }
}
