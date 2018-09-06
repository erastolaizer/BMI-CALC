import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {UbongoPage} from  '../pages/ubongo/ubongo' ;
import {ConjactivaPage} from '../pages/conjactiva/conjactiva';
import {NpcPage} from '../pages/npc/npc'; 
import {KooPage} from '../pages/koo/koo' ;
import {UmioPage} from '../pages/umio/umio';
import {TumboPage} from '../pages/tumbo/tumbo';
import {OralPage} from '../pages/oral/oral' ;
import {ColonPage} from '../pages/colon/colon';
import {PancreasePage} from '../pages/pancrease/pancrease';
import {GallBladerPage} from '../pages/gall-blader/gall-blader';
import {SkinPage} from '../pages/skin/skin';
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
import { QuestionPage } from '../pages/question/question';
import { DoctorPage } from '../pages/doctor/doctor';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;
  doctor: Array<{title: string, component: any}>;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.doctor = [
      { title: 'Jibu Maswali', component: DoctorPage }

    ];

    this.pages = [
      { title: 'Uliza swali', component: QuestionPage },
      { title: 'Nyumbani', component: HomePage },
      { title: 'Ushauri', component: UshauriPage },
      { title: 'SARATANI YA UBONGO ( BRAIN)', component: UbongoPage },
      { title: 'SARATANI YA CONJACTIVA YA JICHO (CONJUCTIVA)', component: ConjactivaPage },
      { title: 'SARATANI YA MFUMO WA PUA- KOO- SIKIO(NPC)', component: NpcPage },
      { title: 'SARATANI YA KOO (PHARYNX)', component: KooPage },
      { title: 'SARATANI YA UMIO (ESOPHAGUS)', component: UmioPage },
      { title: 'SARATANI YA ULIMI-MDOMO–FIZI ', component: OralPage },
      { title: 'SARATANI YA TUMBO (GASTRIC)', component: TumboPage },
      { title: 'SARATANI YA UTUMBO MPANA (COLON)', component: ColonPage },
      { title: 'SARATANI YA KONGOSHO (PANCREASE)', component: PancreasePage },
      { title: 'SARATANI YA KIBOFU NYONGO (GALL BLADDER)', component: GallBladerPage },
      { title: 'SARATANI YA NGOZI (SKIN )', component: SkinPage },
      { title: 'SARATANI YA INI (LIVER)', component: LiverPage },
      { title: 'SARATANI YA MKUNDU (ANAL)', component: AnalPage },
      { title: 'SARATANI YA MLANGO WA KIZAZI (CERVIX)', component: CervixPage },
      { title: 'SARATANI YA ENDOMETRIUM', component: EndometriumPage },
      { title: 'SARATANI YA MAYAI (OVARY)', component: OvaryPage },
      { title: 'SARATANI YA TEZI DUME (PROSTATE)', component: ProstatePage },
      { title: 'SARATANI YA UUME ( PENILE )', component: PenilePage },
      { title: 'SARATANI YA UKE(VAGINA)', component: VaginalPage },
      { title: 'SARATANI YA  MAPAFU (LUNGS)', component: LungsPage },
      { title: 'SARATANI YA  MATITI (BREAST)', component: BreastsPage },
      { title: 'SARATANI YA  KIBOFU CHA MKOJO', component: KibofuPage }


    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
