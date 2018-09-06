import { Component } from '@angular/core';
import { IonicPage,NavController, LoadingController, ToastController,NavParams,AlertController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Http,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { ForgetpassPage } from '../forgetpass/forgetpass';
import { HomePage } from '../home/home';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { DetailsPage } from '../details/details';
import { DoctorPage } from '../doctor/doctor';
import { ProvidersPage } from '../providers/providers';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public login : FormGroup;
  public loading: any= [];
  public device_id :any ;

  constructor(public alertCtrl: AlertController ,private uniqueDeviceID: UniqueDeviceID,public store:Storage, public http : Http,public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
    this.login = this.formBuilder.group({
    phone_number: ['', Validators.required],
  });
  }

  ionViewWillEnter(){

    this.store.get('user').then((val) => {
      this.uniqueDeviceID.get()
  .then((uuid: any) => this.device_id = uuid)
  .catch((error: any) => console.log(error));

   /* this.login.patchValue({
      phone_number: val.data.user.phone_number,
      password    : val.password
    }); */
  }, error=> {
    console.log('no stored values');
  });
  }

  logForm()
      {
         let
             phone_number    : string    = this.login.controls["phone_number"].value,
             device_id = this.device_id ;

             this.showLoader();
             let headers   : any      = new Headers({ 'X-Requested-With': 'XMLHttpRequest'}),
                  options  : any      = new RequestOptions({ headers: headers }),
                     url      : any       = 'http://saratani.dreamgeeks.tech/api/user/login',
                       body    : any     = {phone_number:phone_number,device_id:device_id};

                       this.http.post(url,body,options).map(res =>res.json())
                       .subscribe(
                        data =>  {
                          let userdata = {data:data};
                          this.store.set('user',userdata);
                          this.sendNotification("You are successfully login");

                          if(data.user.role == "Doctor"){
                           this.navCtrl.setRoot(DoctorPage);
                          }
                          else{
                            this.navCtrl.setRoot(HomePage);
                          }
                        },

                      error => {
                        if (error.status === 401){
                          this.sendNotification("Tafadhali,changia");
                        }
                        if (error.status === 402){
                          this.sendNotification("Your account expired, please follow payments instructions");
                           }
                        if (error.status === 500){
                          this.sendNotification("Sorry,Internal server error");
                           }
                           if (error.status === 404){
                            this.sendNotification("Phone number is not yours, if you have changed your phone please contact us");
                             }
                        else if(error.status === 0){
                       this.sendNotification("Server is temporary not responding!!");
                        }

                      });
                         this.loading.dismiss();

           }


forgetPass(){
  this.navCtrl.push(ForgetpassPage);
}
details(){
  this.navCtrl.push(DetailsPage);
}

ChooseProvider() {
  let alert = this.alertCtrl.create();
  alert.setTitle('Changia kupitia');

  alert.addInput({
    type: 'radio',
    label: 'M-PESA',
    value: 'MPESA',
    checked: true
  });
  alert.addInput({
    type: 'radio',
    label: 'TIGO-PESA',
    value: 'TIGOPESA'
  });

  alert.addButton({
    text: 'Sawa',
    handler: data => {
this.navCtrl.push(ProvidersPage,{data:data})      
    }
  });
  alert.present();
}
showLoader(){
       this.loading = this.loadingCtrl.create({
           content: 'Login in...'
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
