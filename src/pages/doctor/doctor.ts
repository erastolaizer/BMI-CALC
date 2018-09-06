import { Component } from '@angular/core';
import { IonicPage,NavController, LoadingController, ToastController,NavParams,MenuController} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { ReplyPage } from '../reply/reply';
/**
 * Generated class for the DoctorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-doctor',
  templateUrl: 'doctor.html',
})
export class DoctorPage {
public questions : any ;


constructor(public menu:MenuController,public store:Storage, public http : Http,public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
}
  ionViewDidEnter() {
    this.menu.enable(true, 'doctor');
}
  ionViewWillEnter(){

      let    
       headers   : any      = new Headers({ 'X-Requested-With': 'XMLHttpRequest'}),
      options  : any      = new RequestOptions({ headers: headers }),
      url      : any       = 'http://saratani.dreamgeeks.tech/api/allquestions';

      this.http.get(url,options).map(res =>res.json())
      .subscribe(
       data =>  {
         this.questions = data.questions ;
      });

  }
  Answer(id){
    this.navCtrl.push(ReplyPage,{id:id});
    }

}
