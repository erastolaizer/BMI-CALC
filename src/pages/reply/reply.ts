import { Component } from '@angular/core';
import { IonicPage,NavController, LoadingController, ToastController,NavParams} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ReplyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-reply',
  templateUrl: 'reply.html',
})
export class ReplyPage {
  public answer : FormGroup;
  public question_id : any ;
  public answers : any ;
  public question : any ;
  public loading: any= [];
  public user_id :any ;
  
  
  constructor(public store:Storage, public http : Http,public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
    this.question_id = this.navParams.get('id');
    this.answer = this.formBuilder.group({
      answer: ['', Validators.required],
    });
    }
  
    ionViewWillEnter(){
      this.store.get('user').then((val) => {
        this.user_id = val.data.user.id ;

        let    
         headers  : any      = new Headers({ 'X-Requested-With': 'XMLHttpRequest'}),
        options  : any      = new RequestOptions({ headers: headers }),
        url      : any       = 'http://saratani.dreamgeeks.tech/api/answers/question/'+ this.question_id;
  
        this.http.get(url,options).map(res =>res.json())
        .subscribe(
         data =>  {
           this.answers = data.answers;           
          this.question = data.question.question ;   
                   
        });
      });
      }

      Answer()
      {
         let
             user_id = this.user_id ,
             question_id = this.question_id ,
             answer     : string    = this.answer.controls["answer"].value;
             this.showLoader();

             let headers   : any      = new Headers({ 'X-Requested-With': 'XMLHttpRequest'}),
             options  : any      = new RequestOptions({ headers: headers }),
                       url      : any       = 'http://saratani.dreamgeeks.tech/api/answer',
                       body    : any        = {answer:answer,user_id:user_id,question_id:question_id};

                       this.http.post(url,body,options).map(res =>res.json())
                       .subscribe(
                        data =>  {
                            this.sendNotification("Jibu lako limetumwa.");
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
