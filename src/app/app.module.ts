import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UbongoPage } from  '../pages/ubongo/ubongo' ;
import { ConjactivaPage } from '../pages/conjactiva/conjactiva';
import { NpcPage } from '../pages/npc/npc';
import { KooPage } from '../pages/koo/koo' ;
import { UmioPage } from '../pages/umio/umio';
import { TumboPage } from '../pages/tumbo/tumbo';
import { OralPage } from '../pages/oral/oral' ;
import { ColonPage } from '../pages/colon/colon';
import { PancreasePage } from '../pages/pancrease/pancrease';
import { GallBladerPage } from '../pages/gall-blader/gall-blader';
import { SkinPage } from '../pages/skin/skin';
import { LiverPage } from '../pages/liver/liver';
import { AnalPage } from '../pages/anal/anal';
import { CervixPage } from '../pages/cervix/cervix';
import { EndometriumPage } from '../pages/endometrium/endometrium';
import { OvaryPage } from '../pages/ovary/ovary';
import { ProstatePage } from '../pages/prostate/prostate' ;
import{ PenilePage } from '../pages/penile/penile';
import { VaginalPage } from '../pages/vaginal/vaginal';
import { LungsPage } from '../pages/lungs/lungs';
import { BreastsPage } from '../pages/breasts/breasts';
import { UshauriPage } from '../pages/ushauri/ushauri';
import { KibofuPage } from '../pages/kibofu/kibofu';
import { LoginPage } from '../pages/login/login';
import { ForgetpassPage } from '../pages/forgetpass/forgetpass'; 
import { DetailsPage } from '../pages/details/details';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { QuestionPage } from '../pages/question/question';
import { AnswerPage } from '../pages/answer/answer';
import { DoctorPage} from '../pages/doctor/doctor';
import{ ReplyPage } from '../pages/reply/reply';
import { ProvidersPage } from '../pages/providers/providers';

@NgModule({
  declarations: [
    MyApp,
    ProvidersPage,
    HomePage,
    ListPage,
    UbongoPage,
    ConjactivaPage,
    ReplyPage,
    NpcPage,
    KooPage,
    UmioPage,
    AnswerPage,
    TumboPage,
    OralPage,
    ColonPage,
    PancreasePage,
    GallBladerPage,
    SkinPage,
    LiverPage,
    AnalPage,
    CervixPage,
    EndometriumPage,
    OvaryPage,
    ProstatePage,
    PenilePage,
    VaginalPage,
    LungsPage,
    BreastsPage,
    UshauriPage,
    KibofuPage,
    LoginPage,
    DetailsPage,
    DoctorPage,
    ForgetpassPage,
    QuestionPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProvidersPage,
    HomePage,
    ListPage,
    UbongoPage,
    ConjactivaPage,
    ReplyPage,
    NpcPage,
    KooPage,
    UmioPage,
    AnswerPage,
    TumboPage,
    OralPage,
    ColonPage,
    PancreasePage,
    GallBladerPage,
    SkinPage,
    LiverPage,
    AnalPage,
    CervixPage,
    EndometriumPage,
    OvaryPage,
    ProstatePage,
    PenilePage,
    VaginalPage,
    LungsPage,
    BreastsPage,
    UshauriPage,
    KibofuPage,
    LoginPage,
    DetailsPage,
    DoctorPage,
    ForgetpassPage,
    QuestionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UniqueDeviceID,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
