import { Component } from '@angular/core';
import { IonicPage,NavController, LoadingController, ToastController,NavParams} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the AnswerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-answer',
  templateUrl: 'answer.html',
})
export class AnswerPage {
public question_id : any ;
public answers : any ;
public question : any ;


constructor(public store:Storage, public http : Http,public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
  this.question_id = this.navParams.get('id');
  }

  ionViewWillEnter(){

      let headers   : any      = new Headers({ 'X-Requested-With': 'XMLHttpRequest'}),
      options  : any      = new RequestOptions({ headers: headers }),
      url      : any       = 'http://saratani.dreamgeeks.tech/api/answers/question/'+ this.question_id;

      this.http.get(url,options).map(res =>res.json())
      .subscribe(
       data =>  {
         this.answers = data.answers;
         console.log(this.answers);
         
         this.question = data.question.question ;   
        });

  }

}
