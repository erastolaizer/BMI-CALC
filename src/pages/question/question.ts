import { Component } from '@angular/core';
import { IonicPage,NavController,NavParams, LoadingController, ToastController} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { AnswerPage } from '../answer/answer';

/**
 * Generated class for the QuestionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {
  public question : FormGroup;
  public loading: any= [];
  public user_id :any ;
  public quests :any ;


  constructor(public store:Storage,public http : Http, private formBuilder: FormBuilder, public navCtrl: NavController, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
    this.question = this.formBuilder.group({
    question: ['', Validators.required],
  });
  }
  ionViewWillEnter(){

    this.store.get('user').then((val) => {
      this.user_id = val.data.user.id ;
    
      let headers   : any      = new Headers({ 'X-Requested-With': 'XMLHttpRequest'}),
      options  : any      = new RequestOptions({ headers: headers }),
      url      : any       = 'http://saratani.dreamgeeks.tech/api/question/'+ this.user_id;

      this.http.get(url,options).map(res =>res.json())
      .subscribe(
       data =>  {
         this.quests = data.questions;
      });

    });
  }

  Ask()
      {
         let
             user_id = this.user_id ,
             question     : string    = this.question.controls["question"].value;
             this.showLoader();

               let     headers  : any      = new Headers({ 'X-Requested-With': 'XMLHttpRequest'}),
                       options  : any      = new RequestOptions({ headers: headers }),
                       url      : any       = 'http://saratani.dreamgeeks.tech/api/question',
                       body    : any        = {question:question,user_id:user_id};

                       this.http.post(url,body,options).map(res =>res.json())
                       .subscribe(
                        data =>  {
                            this.sendNotification("Swali lako limetumwa.");
                        },

                      error => {
                      if (error.status === 0){
                       this.sendNotification("Please check your internet connections!!");
                        }
                      else if (error.status === 401) {
                          this.sendNotification("Tafadhali ingia upya");
                        }
                        else {
                         this.sendNotification("Server is temporary not responding!!");
                          }
                      //   console.log(error);
                      });
                         this.loading.dismiss();
           
           }

           Answer(id){
           this.navCtrl.push(AnswerPage,{id:id});
           }

  showLoader(){
         this.loading = this.loadingCtrl.create({
             content: 'Waiting...'
         });

         this.loading.present();
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
